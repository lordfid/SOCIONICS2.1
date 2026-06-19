import React, { useRef, useState } from 'react';
import { Download, Share2, FileText, Compass, Star, Flame, Eye, User, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import { Profile, ThemeType } from '../types';
import { calculateIntertypeRelations } from '../data/socionicsData';

// Helper to convert any modern CSS oklch() colors to standard rgb()/rgba() representation
// to prevent html2canvas color parsing engine from crashing.
function convertOklchToRgb(str: string): string {
  if (!str || !str.includes('oklch')) return str;
  // Matches spaces, commas, or slashes splitters in oklch format
  const oklchRegex = /oklch\(\s*([\d.]+%?)\s*[\s,/]+\s*([\d.]+)\s*[\s,/]+\s*([\d.]+)(?:\s*[\s,/]+\s*([\d.]+%?))?\s*\)/gi;
  
  return str.replace(oklchRegex, (fullMatch, lStr, cStr, hStr, aStr) => {
    try {
      let L = lStr.endsWith('%') ? parseFloat(lStr) / 100 : parseFloat(lStr);
      let C = parseFloat(cStr);
      let H = parseFloat(hStr);
      let A = aStr ? (aStr.endsWith('%') ? parseFloat(aStr) / 100 : parseFloat(aStr)) : 1;
      
      const hRad = (H * Math.PI) / 180;
      const a = C * Math.cos(hRad);
      const b = C * Math.sin(hRad);
      
      const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
      const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
      const s_ = L - 0.0894841775 * a - 1.2914855414 * b;
      
      const l = l_ * l_ * l_;
      const m = m_ * m_ * m_;
      const s = s_ * s_ * s_;
      
      let rL = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
      let gL = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
      let bL = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
      
      const gamma = (c: number) => {
        if (c <= 0.0031308) return 12.92 * c;
        return 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
      };
      
      const rIdx = Math.max(0, Math.min(255, Math.round(gamma(rL) * 255)));
      const gIdx = Math.max(0, Math.min(255, Math.round(gamma(gL) * 255)));
      const bIdx = Math.max(0, Math.min(255, Math.round(gamma(bL) * 255)));
      
      if (A === 1) {
        return `rgb(${rIdx}, ${gIdx}, ${bIdx})`;
      } else {
        return `rgba(${rIdx}, ${gIdx}, ${bIdx}, ${A})`;
      }
    } catch (e) {
      return 'rgb(0, 0, 0)';
    }
  });
}

interface ResultsDisplayProps {
  theme: ThemeType;
  userName: string;
  profile: Profile;
  onRestart: () => void;
}

export default function ResultsDisplay({ theme, userName, profile, onRestart }: ResultsDisplayProps) {
  const isGarden = theme === 'light-garden';
  const reportRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const relations = calculateIntertypeRelations(profile.id);

  // Dynamic Symbol Renderer for Information Metabolism elements
  const renderIMSymbol = (element: string) => {
    const symbolColors: Record<string, string> = {
      Ti: 'bg-blue-500 text-white',
      Te: 'bg-sky-600 text-white',
      Fi: 'bg-emerald-500 text-white',
      Fe: 'bg-green-600 text-white',
      Si: 'bg-amber-500 text-black',
      Se: 'bg-yellow-400 text-black',
      Ni: 'bg-purple-600 text-white',
      Ne: 'bg-fuchsia-500 text-white'
    };

    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded font-mono text-xs font-bold leading-none select-none ${symbolColors[element] || 'bg-stone-500 text-white'}`}>
        {element}
      </span>
    );
  };

  // 1. Export PNG using html2canvas with temporary OKLCH compatibility patch
  const handleExportPNG = async () => {
    if (!reportRef.current) return;
    setExporting(true);
    
    // Backup and temporarily override window.getComputedStyle to translate oklch responses
    const originalGetComputedStyle = window.getComputedStyle;
    (window as any).getComputedStyle = function (elt: Element, pseudoElt?: string | null): any {
      const style = originalGetComputedStyle.call(this, elt, pseudoElt);
      return new Proxy(style, {
        get(target, prop, receiver) {
          const value = Reflect.get(target, prop, receiver);
          if (typeof value === 'function') {
            return function (this: any, ...args: any[]) {
              const res = value.apply(target, args);
              if (typeof res === 'string' && res.includes('oklch')) {
                return convertOklchToRgb(res);
              }
              return res;
            }.bind(target);
          }
          if (typeof value === 'string' && value.includes('oklch')) {
            return convertOklchToRgb(value);
          }
          return value;
        }
      });
    };

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: isGarden ? '#FFF9F9' : '#170E0B',
        logging: false
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Socionics_Hasil_${profile.id}_${userName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert('Gagal mengekspor gambar, mohon gunakan fitur screenshot perangkat kakamu.');
    } finally {
      // Always restore getComputedStyle to its original function
      (window as any).getComputedStyle = originalGetComputedStyle;
      setExporting(false);
    }
  };

  // 2. Export PDF via standard window print stream (styled properly)
  const handleExportPDF = () => {
    window.print();
  };

  // 3. Export ZIP containing structured JSON behavioral research package
  const handleExportZIP = async () => {
    const zip = new JSZip();
    
    // Core profile data JSON
    const reportData = {
      peserta: userName,
      tanggalTes: new Date().toLocaleDateString('id-ID'),
      tipeSocionics: profile.fullname,
      singkatan: profile.id,
      alias: profile.alias,
      quadra: profile.quadra,
      mbtiEkuivalen: profile.mbtiEquivalent,
      trenEnneagram: profile.enneagramTrend,
      deskripsiRingkas: profile.description,
      kekuatan: profile.pros,
      kelemahan: profile.cons,
      rekomendasi: profile.recommendations,
      dinamikaKelakuan: profile.behavioralDynamics,
      matriksModelA: profile.modelA,
      relasiKomparatif: relations.map(r => ({
        target: r.targetType,
        relasi: r.relationName,
        persentaseKecocokan: `${r.compatibilityPercent}%`,
        rincian: r.description
      }))
    };

    zip.file(`Hasil_Tes_${userName}_${profile.id}.json`, JSON.stringify(reportData, null, 2));

    // Research Markdown File for deeper reading
    const researchMarkdown = `
# LAPORAN PENELITIAN KOGNITIF SOCIONICS: ${profile.id} (${profile.fullname})
**Peserta:** ${userName}
**Tanggal:** ${new Date().toLocaleDateString('id-ID')}
**Sanksi Metodologi:** Draf Komparatif Orisinal Dr. Ekaterina Filatova.

## 1. STRUKTUR METABOLISME INFORMASI (MODEL A)
${profile.modelA.map(pos => `- Posisi ${pos.position} [${pos.element}]: ${pos.name} -> ${pos.description}`).join('\n')}

## 2. GAYA PRAGMATIS PERILAKU
- **Gaya Hidup:** ${profile.behavioralDynamics.lifestyle}
- **Cara Berpikir:** ${profile.behavioralDynamics.thinkingStyle}
- **Sikap Amarah:** ${profile.behavioralDynamics.angerStyle}
- **Ekspresi Kasih:** ${profile.behavioralDynamics.affectionStyle}
- **Persaingan/Gairah:** ${profile.behavioralDynamics.ambitionStyle}

## 3. SARAN EKSPERIMEN RECOVERY (7 HARI)
${profile.recommendations.experiment7Days.map((exp, i) => `${i+1}. ${exp}`).join('\n')}

---
*Dibuat oleh Sistem Assesmen Socionics Terpimpin Indonesia.*
`;

    zip.file(`Studi_Kelakuan_${profile.id}_Komplet.md`, researchMarkdown);

    // Generate and trigger download
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `Paket_Riset_Socionics_${profile.id}_${userName}.zip`;
      link.click();
    } catch (e) {
      console.error(e);
      alert('Gagal merakit paket ZIP data perilaku.');
    }
  };

  return (
    <div id="results-view-wrapper" className="w-full max-w-5xl mx-auto space-y-8 pb-16">
      {/* Action Toolbar */}
      <div 
        id="results-toolbar"
        className="flex flex-wrap justify-between items-center gap-4 p-4 rounded-2xl border backdrop-blur-md sticky top-4 z-30"
        style={{
          backgroundColor: isGarden ? 'rgba(255, 255, 255, 0.95)' : 'rgba(25, 16, 12, 0.95)',
          borderColor: isGarden ? '#FFE2E2' : '#3E271F'
        }}
      >
        <button
          id="btn-restart-test"
          onClick={onRestart}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all ${
            isGarden 
              ? 'bg-rose-50 text-rose-500 border border-rose-100 hover:bg-rose-100' 
              : 'bg-amber-950/20 text-amber-300 border border-amber-900/40 hover:bg-amber-950/40'
          }`}
        >
          <RefreshCw size={14} />
          <span>Ulangi Tes</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            id="btn-dl-zip"
            onClick={handleExportZIP}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 transition-all"
          >
            <Download size={14} />
            <span>Unduh Arsip Riset (ZIP)</span>
          </button>

          <button
            id="btn-dl-png"
            onClick={handleExportPNG}
            disabled={exporting}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer hover:scale-[1.02] transition-all ${
              isGarden 
                ? 'bg-rose-400 hover:bg-rose-500 text-white shadow-rose-100 shadow-md' 
                : 'bg-amber-800 hover:bg-amber-900 text-[#F9F6F0] shadow-amber-950/40 shadow-md'
            }`}
          >
            <Share2 size={14} className={exporting ? 'animate-spin' : ''} />
            <span>{exporting ? 'Sedang Merakit...' : 'Simpan Gambar Bento (PNG)'}</span>
          </button>

          <button
            id="btn-dl-pdf"
            onClick={handleExportPDF}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer shadow-md shadow-blue-900/10"
          >
            <FileText size={14} />
            <span>Cetak PDF Laporan</span>
          </button>
        </div>
      </div>

      {/* CORE CAPTURE AREA */}
      <div 
        ref={reportRef}
        id="capture-results-area"
        className="rounded-3xl border p-6 sm:p-10 space-y-10 shadow-xl transition-all duration-300"
        style={{
          backgroundColor: isGarden ? '#FFF9F9' : '#170E0B',
          borderColor: isGarden ? '#FFE2E2' : '#3E271F'
        }}
      >
        {/* Editorial Heading */}
        <div id="results-hero-header" className="text-center space-y-2 border-b border-dashed pb-8" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
          <span className={`text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full ${
            isGarden ? 'bg-rose-50 text-rose-500' : 'bg-amber-950/40 text-amber-300 border border-amber-950/55'
          }`}>
            HASIL DIAGNOSIS TULUS
          </span>
          <h2 
            className="text-4xl font-serif tracking-tight pt-2 font-semibold"
            style={{ 
              color: isGarden ? '#4A3333' : '#F5E6D3',
              fontFamily: isGarden ? '"Playfair Display", serif' : '"Cinzel", serif, Georgia'
            }}
          >
            {userName} adalah seorang <br />
            <span className={isGarden ? 'text-rose-500' : 'text-amber-400'}>{profile.fullname}</span>
          </h2>
          <p className="text-sm italic font-sans text-stone-500 max-w-lg mx-auto">
            "{profile.alias}" — Quadra {profile.quadra} ({profile.mbtiEquivalent} / {profile.enneagramTrend})
          </p>
        </div>

        {/* 1. Portrait Section & Brutal Roast */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Summary description */}
          <div className="md:col-span-7 space-y-4">
            <h3 
              className="text-lg font-serif font-semibold flex items-center gap-2"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              <User size={18} className={isGarden ? 'text-rose-400' : 'text-amber-400'} />
              <span>Cetak Biru Kebatinan</span>
            </h3>
            <p className={`text-sm leading-relaxed p-5 rounded-2xl ${isGarden ? 'bg-white border border-rose-50' : 'bg-stone-900/40 border border-amber-950/30'} text-stone-600 dark:text-stone-300`}>
              {profile.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-dashed text-xs space-y-2" style={{ borderColor: isGarden ? '#FFD8D8' : '#4E3629' }}>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 block p-0.5">🌱 Daya Keunggulan (Pros):</span>
                <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                  {profile.pros.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-dashed text-xs space-y-2" style={{ borderColor: isGarden ? '#FFD8D8' : '#4E3629' }}>
                <span className="font-semibold text-rose-600 dark:text-rose-400 block p-0.5">⚠️ Celah Kerentanan (Cons):</span>
                <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                  {profile.cons.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* BRUTAL ROAST (Highly detailed critique) */}
          <div 
            id="brutal-roast-panel"
            className="md:col-span-5 p-6 rounded-2xl border flex flex-col justify-between"
            style={{
              backgroundColor: isGarden ? 'rgba(254, 242, 242, 0.4)' : 'rgba(46, 24, 21, 0.25)',
              borderColor: isGarden ? '#FCA5A5' : '#854D41'
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame size={18} className="text-red-500 animate-pulse" />
                <span className="text-xs uppercase font-extrabold tracking-wider text-red-500">
                  Roast Kejujuran Brutal 🔥
                </span>
              </div>
              <p className="text-xs font-serif leading-relaxed italic text-stone-700 dark:text-stone-200">
                "{profile.roast}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-red-200 dark:border-red-950 text-[11px] text-stone-400">
              {profile.brutalConclusion}
            </div>
          </div>
        </div>

        {/* 2. Model A 8 Positions Matrix */}
        <div id="results-model-a-section" className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
            <h3 
              className="text-lg font-serif font-semibold flex items-center gap-2"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              <Compass size={18} className={isGarden ? 'text-rose-100' : 'text-amber-100'} />
              <span>Arsitektur Metabolisme Energi & Informasi (Model A)</span>
            </h3>
            <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500">Aushra Augustinavichiute Schema</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.modelA.map((pos) => {
              const isVulnerable = pos.position === 4;
              const isSuggestive = pos.position === 5;

              return (
                <div 
                  key={pos.position}
                  id={`model-a-card-${pos.position}`}
                  className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
                    isVulnerable 
                      ? 'bg-red-50/20 dark:bg-red-950/10 border-red-300' 
                      : isSuggestive 
                        ? 'bg-blue-50/20 dark:bg-blue-950/10 border-blue-300'
                        : isGarden 
                          ? 'bg-white hover:bg-rose-50/20 border-rose-50' 
                          : 'bg-stone-900/30 hover:bg-stone-900/50 border-amber-950/20'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                        Posisi {pos.position}
                      </span>
                      {renderIMSymbol(pos.element)}
                    </div>
                    <span className="text-xs font-bold block text-stone-700 dark:text-stone-200 leading-tight">
                      {pos.name.split(' - ')[0]}
                    </span>
                    <p className="text-[11px] leading-relaxed text-stone-500 dark:text-stone-400">
                      {pos.description}
                    </p>
                  </div>

                  {isVulnerable && (
                    <span className="mt-3 inline-flex items-center gap-1 text-[9px] text-red-500 font-bold uppercase leading-none">
                      <AlertCircle size={10} />
                      <span>Sarang Titik Lemah (PoLR)</span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Personal Assistant Recommendations Bento */}
        <div id="results-bento-section" className="space-y-4">
          <div className="pb-2 border-b" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
            <h3 
              className="text-lg font-serif font-semibold flex items-center gap-2"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              <Sparkles size={18} className={isGarden ? 'text-rose-400' : 'text-amber-400'} />
              <span>Panduan Asisten Pribadi Kebatinan</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* 7-Day Recovery Experiment (Bento Big Card) */}
            <div 
              className="md:col-span-6 p-6 rounded-2xl border"
              style={{
                backgroundColor: isGarden ? 'rgba(255, 240, 240, 0.4)' : 'rgba(38, 24, 18, 0.35)',
                borderColor: isGarden ? '#FFC4C4' : '#5E3E33'
              }}
            >
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">Eksperimen 7 Hari Pemulihan Jiwa</span>
              <div className="space-y-3">
                {profile.recommendations.experiment7Days.map((exp, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    <span className="w-5 h-5 rounded-full bg-orange-400/20 text-orange-500 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p>{exp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Life & Expression styles (Bento Big Card) */}
            <div className="md:col-span-6 p-6 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 space-y-4">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Dinamika Gaya Berperilaku</span>
              
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-black/5 dark:bg-black/10">
                  <strong className="text-stone-700 dark:text-stone-200 block mb-0.5">🛋️ Gaya Hidup harian:</strong>
                  <p className="text-[11px] text-stone-500">{profile.behavioralDynamics.lifestyle}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-black/5 dark:bg-black/10">
                  <strong className="text-stone-700 dark:text-stone-200 block mb-0.5">💡 Model Berpikir:</strong>
                  <p className="text-[11px] text-stone-500">{profile.behavioralDynamics.thinkingStyle}</p>
                </div>
              </div>
            </div>

            {/* Micro recommendations lists */}
            <div className="md:col-span-4 p-5 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 text-xs space-y-2">
              <strong className="text-stone-700 dark:text-stone-200 block">📚 Buku Penuh Inspirasi:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                {profile.recommendations.books.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <strong className="text-stone-700 dark:text-stone-200 block pt-2">🎬 Film & Sinema:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                {profile.recommendations.movies.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 text-xs space-y-2">
              <strong className="text-stone-700 dark:text-stone-200 block">💼 Karir/Pekerjaan Idaman:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                {profile.recommendations.careers.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
              <strong className="text-stone-700 dark:text-stone-200 block pt-2">✈️ Destinasi Liburan:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                {profile.recommendations.destinations.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 text-xs space-y-2">
              <strong className="text-stone-700 dark:text-stone-200 block">🧥 Penampilan (Aesthetic Dressing):</strong>
              <p className="text-[11px] text-stone-500">{profile.recommendations.appearanceTips}</p>
              <strong className="text-stone-700 dark:text-stone-200 block pt-1">🎁 Ide Kado Hadiah:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                {profile.recommendations.gifts.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Deep Anger/Affection Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-dashed" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
          <div className="p-5 rounded-2xl space-y-2 border border-stone-100 dark:border-stone-800">
            <span className="text-stone-700 dark:text-stone-200 font-bold block text-sm">🔥 Manifestasi Amarah / Konflik:</span>
            <p className="text-xs leading-relaxed text-stone-500">{profile.behavioralDynamics.angerStyle}</p>
          </div>
          <div className="p-5 rounded-2xl space-y-2 border border-stone-100 dark:border-stone-800">
            <span className="text-stone-700 dark:text-stone-200 font-bold block text-sm">💖 Ekspresi Kasih Sayang (Affection):</span>
            <p className="text-xs leading-relaxed text-stone-500">{profile.behavioralDynamics.affectionStyle}</p>
          </div>
        </div>

        {/* 5. Intertype Relationship Compatibility Map */}
        <div id="results-relations-section" className="space-y-4">
          <div className="pb-2 border-b" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
            <h3 
              className="text-lg font-serif font-semibold"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              Peta Kecocokan Relasi Antartipe (Teori Grup Matematika)
            </h3>
            <p className="text-[11px] text-stone-400">Dihitung otomatis berbasis matriks Isomorfisme R ≅ D₄ × ℤ₂</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relations.map((rel, i) => {
              const isCompatible = rel.compatibilityPercent >= 80;
              const isDanger = rel.compatibilityPercent <= 25;

              return (
                <div 
                  key={i}
                  id={`relation-card-${i}`}
                  className="p-4 rounded-xl border flex gap-3.5 items-start bg-white dark:bg-[#1E1410] border-stone-100 dark:border-stone-800"
                >
                  <div className="text-center flex-shrink-0">
                    <span 
                      className={`block text-lg font-mono font-bold px-2 py-1 rounded-lg ${
                        isCompatible 
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500' 
                          : isDanger 
                            ? 'bg-red-50 dark:bg-red-950/20 text-red-500' 
                            : 'bg-stone-100 dark:bg-stone-900 text-stone-500'
                      }`}
                    >
                      {rel.compatibilityPercent}%
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-1">Match</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold text-stone-700 dark:text-stone-200">{rel.relationName}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/5 dark:bg-black/30 text-stone-400 font-mono">
                        Partner: {rel.targetType}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-stone-400">
                      {rel.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Scientific Role Models */}
        <div id="results-role-models" className="space-y-3 pt-6 border-t border-dashed" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Role Model Dunia Bertipe {profile.id}:</span>
          <div className="flex flex-wrap gap-2">
            {profile.recommendations.roleModels.map((model, idx) => (
              <span 
                key={idx}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full ${
                  isGarden ? 'bg-rose-50 border border-rose-100 text-rose-600' : 'bg-amber-950/20 border border-amber-950 text-amber-300'
                }`}
              >
                🎓 {model}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
