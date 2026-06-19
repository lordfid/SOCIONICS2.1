import React, { useRef, useState } from 'react';
import { Download, Share2, FileText, Compass, Star, Flame, Eye, User, Sparkles, RefreshCw, AlertCircle, ShieldAlert, CheckCircle2, Award, Zap } from 'lucide-react';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import { FinalResult, ThemeType } from '../types';
import { getFullSocionicsProfile, calculateIntertypeRelations } from '../data/socionicsData';
import { openingMirror, slotInterpretation, reliefCopy, tensionCopy, mysteryCopy } from '../data/resultCopy';
import { drawResultCard, downloadCanvas } from '../utils/cardExport';
import { ELEMENT_LABEL, TIM_MODELS } from '../data/modelA';

// Helper to convert oklch colors for html2canvas support in older browsers
function convertOklchToRgb(str: string): string {
  if (!str || !str.includes('oklch')) return str;
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
  result: FinalResult;
  onRestart: () => void;
}

export default function ResultsDisplay({ theme, userName, result, onRestart }: ResultsDisplayProps) {
  const isGarden = theme === 'light-garden';
  const reportRef = useRef<HTMLDivElement>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);
  const [exporting, setExporting] = useState(false);
  const [generatingKtp, setGeneratingKtp] = useState(false);

  // Retrieve primary profile data from legacy library
  const profileId = result.primary.type;
  const profile = getFullSocionicsProfile(profileId);
  const relations = calculateIntertypeRelations(profileId);

  // IM Symbol generator
  const renderIMSymbol = (element: string) => {
    const symbolColors: Record<string, string> = {
      Ti: 'bg-blue-500 text-white',
      Te: 'bg-sky-600 text-white',
      Fi: 'bg-emerald-500 text-white',
      Fe: 'bg-green-600 text-white',
      Si: 'bg-amber-400 text-stone-900',
      Se: 'bg-yellow-400 text-stone-900',
      Ni: 'bg-purple-600 text-white',
      Ne: 'bg-fuchsia-500 text-white'
    };
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded font-mono text-xs font-bold shadow-sm select-none ${symbolColors[element] || 'bg-stone-500 text-white'}`}>
        {element}
      </span>
    );
  };

  // 1. Export High-Res Canvas-Based KTP Card
  const handleExportKTP = async () => {
    if (!hiddenCanvasRef.current) return;
    setGeneratingKtp(true);
    try {
      await drawResultCard({
        canvas: hiddenCanvasRef.current,
        result,
        nickname: userName,
        theme: isGarden ? 'light' : 'dark'
      });
      await downloadCanvas(hiddenCanvasRef.current, `KTP_Socionics_${profileId}_${userName}`);
    } catch (err) {
      console.error(err);
      alert('Gagal membuat kartu KTP hasil jiwa.');
    } finally {
      setGeneratingKtp(false);
    }
  };

  // 2. Export Bento Screenshot Page PNG
  const handleExportPNG = async () => {
    if (!reportRef.current) return;
    setExporting(true);
    
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
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: isGarden ? '#FFF9F9' : '#170E0B',
        logging: false
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `SDD_Hasil_Lengkap_Bento_${profileId}_${userName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert('Gagal mengekspor Bento jiwa, silakan gunakan tangkapan layar (screenshot) biasa.');
    } finally {
      (window as any).getComputedStyle = originalGetComputedStyle;
      setExporting(false);
    }
  };

  // 3. Export PDF
  const handleExportPDF = () => {
    window.print();
  };

  // 4. Export ZIP containing structured JSON & Markdown research dossier
  const handleExportZIP = async () => {
    const zip = new JSZip();
    const reportData = {
      penerima: userName,
      kodeIdentitas: `${profileId}-${Math.round(result.confidence * 100)}`,
      tanggalTes: new Date().toLocaleDateString('id-ID'),
      tipeUtama: profile.fullname,
      singkatan: profileId,
      alias: profile.alias,
      quadra: profile.quadra,
      confidenceScore: result.confidence,
      alternatifKandidat: result.top3.map((c) => ({ tipe: c.type, kecocokan_model: c.modelSimilarity })),
      keandalanRespons: result.responseQuality,
      elemenTerkuat: result.elementRanking,
      rekomendasi: profile.recommendations,
      dinamikaKelakuan: profile.behavioralDynamics,
    };

    zip.file(`Studi_Kognitif_A_${userName}_${profileId}.json`, JSON.stringify(reportData, null, 2));

    const markdownDoc = `
# LAPORAN INTEGRAL SOCIONICS MODEL A (v3.5.0)
**Nama Peserta:** ${userName}
**Tipe Terdeteksi:** ${profileId} (${profile.fullname})
**Sistem Konsistensi:** ${result.confidenceLabel.toUpperCase()} (Indeks: ${Math.round(result.confidence * 100)}%)

## 1. MIRRORING CERMIN HIDUP
${openingMirror(profileId)}

## 2. GEOMETRI MODEL A 8 POSISI
${['base', 'creative', 'role', 'polr', 'suggestive', 'mobilizing', 'ignoring', 'demonstrative'].map((slot, i) => {
  return `- Posisi ${i + 1} (${slot.toUpperCase()}):
    ${slotInterpretation(profileId, slot as any)}`;
}).join('\n\n')}

## 3. RELIEF & KETEGANGAN PSIKIS
* **Pelepasan Suggestive:** ${reliefCopy(profileId)}
* **Segitiga Ketegangan:** ${tensionCopy(profileId)}

## 4. DINAMIKA SEHARI-HARI
* **Gaya Hidup:** ${profile.behavioralDynamics.lifestyle}
* **Cara Berpikir:** ${profile.behavioralDynamics.thinkingStyle}
* **Sikap Amarah:** ${profile.behavioralDynamics.angerStyle}
* **Sikap Kasih Sayang:** ${profile.behavioralDynamics.affectionStyle}
    `;

    zip.file(`Berkas_Riset_Pribadi_${profileId}.md`, markdownDoc);

    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `Paket_Riset_Socionics_${profileId}_${userName}.zip`;
      link.click();
    } catch {
      alert('Gagal mengemas berkas ZIP.');
    }
  };

  return (
    <div id="results-view-wrapper" className="w-full max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Hidden Canvas used for high-res PNG creation */}
      <canvas ref={hiddenCanvasRef} className="hidden" />

      {/* Action Toolbar */}
      <div 
        id="results-toolbar"
        className="flex flex-wrap justify-between items-center gap-3 p-4 rounded-2xl border backdrop-blur-md sticky top-4 z-30 shadow-lg"
        style={{
          backgroundColor: isGarden ? 'rgba(255, 255, 255, 0.96)' : 'rgba(25, 16, 12, 0.96)',
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
            onClick={handleExportZIP}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800/40 transition-all"
          >
            <Download size={14} />
            <span>Arsip Riset (ZIP)</span>
          </button>

          <button
            onClick={handleExportKTP}
            disabled={generatingKtp}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer bg-amber-500 text-stone-950 hover:bg-amber-600 transition-all shadow-md shadow-amber-500/10"
          >
            <Award size={14} className={generatingKtp ? 'animate-spin' : ''} />
            <span>{generatingKtp ? 'Merakit Card...' : 'Dapatkan Kartu KTP'}</span>
          </button>

          <button
            id="btn-dl-png"
            onClick={handleExportPNG}
            disabled={exporting}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer hover:scale-[1.02] transition-all ${
              isGarden 
                ? 'bg-rose-450 hover:bg-rose-550 text-white shadow-rose-100 shadow-md bg-rose-500' 
                : 'bg-amber-800 hover:bg-amber-900 text-[#F9F6F0] shadow-amber-950/40 shadow-md'
            }`}
          >
            <Share2 size={14} className={exporting ? 'animate-spin' : ''} />
            <span>{exporting ? 'Memotret...' : 'Unduh Gambar Bento (PNG)'}</span>
          </button>

          <button
            id="btn-dl-pdf"
            onClick={handleExportPDF}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer shadow-md shadow-blue-900/10"
          >
            <FileText size={14} />
            <span>Cetak PDF</span>
          </button>
        </div>
      </div>

      {/* CORE BENTO CAPTURE PANEL */}
      <div 
        ref={reportRef}
        id="capture-results-area"
        className="rounded-3xl border p-5 sm:p-10 space-y-8 shadow-xl transition-all duration-300"
        style={{
          backgroundColor: isGarden ? '#FFF9F9' : '#170E0B',
          borderColor: isGarden ? '#FFE2E2' : '#3E271F'
        }}
      >
        
        {/* Editorial Heading */}
        <div id="results-hero-header" className="text-center space-y-2 border-b border-dashed pb-8" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
          <span className={`text-[9px] tracking-widest uppercase font-mono px-3 py-1 rounded-full border ${
            isGarden ? 'bg-rose-50/50 border-rose-200 text-rose-500' : 'bg-amber-950/40 border-amber-900/30 text-amber-300'
          }`}>
            DIAGNOSIS COGNITIVE ENGINE v{result.primary.evidenceCells ? '3.5.0' : '3.0'}
          </span>
          <h2 
            className="text-3xl sm:text-5xl font-serif tracking-tight pt-2 font-semibold"
            style={{ 
              color: isGarden ? '#4A3333' : '#F5E6D3',
              fontFamily: isGarden ? '"Playfair Display", serif' : 'Georgia, serif'
            }}
          >
            Tipe Anda: <span className={isGarden ? 'text-rose-500' : 'text-amber-400'}>{profileId}</span>
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-stone-500 max-w-xl mx-auto leading-relaxed">
            "{profile.alias}" — Quadra {profile.quadra} • Sesuai Ekuivalen {profile.mbtiEquivalent}
          </p>
        </div>

        {/* Diagnostic Dashboard Bento (Metadata Audit & Candidates Comparison) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Diagnostic & Reliability Metrics Box (5 columns) */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl border space-y-4 flex flex-col justify-between bg-stone-50/50 dark:bg-stone-900/30 border-stone-100 dark:border-amber-950/20">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Compass size={16} className="text-amber-500" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                  Keandalan Hasil (Reliability Engine)
                </span>
              </div>

              {/* Confidence Meter */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Skor Keyakinan (Confidence)</span>
                  <span className={isGarden ? 'text-rose-600' : 'text-amber-400'}>
                    {Math.round(result.confidence * 100)}% ({result.confidenceLabel.toUpperCase()})
                  </span>
                </div>
                <div className="w-full h-2 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-right flex justify-end" 
                    style={{ 
                      width: `${result.confidence * 100}%`,
                      background: isGarden ? '#F43F5E' : '#D97706'
                    }} 
                  />
                </div>
              </div>

              {/* Explanation text */}
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
                {result.confidenceExplanation}
              </p>

              {/* Response quality bullet stats */}
              <div className="grid grid-cols-2 gap-2 text-[10px] bg-stone-100/55 dark:bg-black/25 p-3 rounded-xl border border-stone-200/20">
                <div>
                  <span className="text-stone-400 block pb-0.5">Penetapan Pola</span>
                  <strong className="text-stone-700 dark:text-stone-300 font-mono">
                    {result.coverage.answeredCells}/64 Kanal
                  </strong>
                </div>
                <div>
                  <span className="text-stone-400 block pb-0.5">Kombinasi Flat-line</span>
                  <strong className="text-stone-700 dark:text-stone-300 font-mono">
                    {Math.round((1 - result.responseQuality.straightlineRisk) * 100)}% Diversitas
                  </strong>
                </div>
                <div className="col-span-2 border-t pt-1.5 mt-1 border-dashed border-stone-300/40">
                  <span className="text-stone-400 block pb-0.5">Kecepatan Menjawab</span>
                  <strong className="text-stone-700 dark:text-stone-300 capitalize">
                    {result.responseQuality.speedFlag.replace('-', ' ')}
                  </strong>
                </div>
              </div>
            </div>

            {/* Warning notes */}
            {result.auditNotes.length > 0 && (
              <div className="border-t border-dashed pt-4 mt-2 space-y-1">
                <span className="text-[9px] uppercase font-bold text-amber-500 flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  Catatan Audit Metodologi:
                </span>
                <ul className="text-[10px] text-stone-400 list-disc pl-4 space-y-0.5 leading-tight">
                  {result.auditNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Top 3 Sibling Candidates Similarity Bar Charts (7 columns) */}
          <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl border flex flex-col justify-between bg-stone-50/50 dark:bg-stone-900/30 border-stone-100 dark:border-amber-950/20">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-amber-500" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                    Kecocokan Alternatif (Top 3 Model-Similarity)
                  </span>
                </div>
                <span className="text-[9px] text-stone-400 italic">Nilai mutlak korelasi</span>
              </div>

              <div id="candidates-comparison" className="space-y-4">
                {result.top3.map((cand, idx) => {
                  const isPrimary = idx === 0;
                  const percent = Math.round(cand.modelSimilarity * 100);
                  const supportPct = Math.round(cand.relativeSupport * 100);
                  const tim = TIM_MODELS[cand.type];

                  return (
                    <div key={cand.type} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-stone-800 dark:text-stone-100">
                          {isPrimary && <span className="text-amber-500">👑</span>}
                          <span>{cand.type} — {tim?.alias || cand.name}</span>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-stone-500">
                          {percent}% similarity
                        </span>
                      </div>
                      <div className="h-6 w-full bg-stone-200 dark:bg-stone-850 rounded-lg overflow-hidden relative flex items-center">
                        {/* Fill Progress Bar */}
                        <div 
                          className="h-full rounded-r-md transition-all duration-500 flex items-center pl-3 text-[9px] uppercase font-black text-stone-900 shadow-sm"
                          style={{
                            width: `${cand.modelSimilarity * 100}%`,
                            background: isPrimary
                              ? isGarden ? 'linear-gradient(to right, #EDA493, #E06C54)' : 'linear-gradient(to right, #DF8B75, #BE6752)'
                              : isGarden ? 'linear-gradient(to right, #E2CED2, #B99C9F)' : 'linear-gradient(to right, #2E1513, #4E1F1A)'
                          }}
                        >
                          <span className={isPrimary ? "text-[#FFFBF5]" : "text-stone-400 dark:text-stone-300"}>
                            Simetri: {percent}% · Probabilitas Relatif: {supportPct}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[9px] text-stone-400 mt-6 pt-4 border-t border-dashed border-stone-200 dark:border-stone-800/40 leading-relaxed">
              *Evaluasi ini berbasis Model A Socionics, dikembangkan sebagai alat refleksi tipologi. Bukan diagnosis klinis.
            </p>
          </div>
        </div>

        {/* 2. Cermin Cermin Hidup (Opening Mirror) */}
        <div 
          id="opening-mirror-box"
          className="p-6 rounded-2xl border text-stone-700 dark:text-stone-300"
          style={{
            backgroundColor: isGarden ? 'rgba(255, 238, 238, 0.3)' : 'rgba(32, 17, 13, 0.45)',
            borderColor: isGarden ? '#FFD4D4' : '#6A3C31'
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <Eye size={18} className="text-amber-500" />
            <h3 className="text-sm font-serif font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400">
              Cermin Filsafat Jiwa Pembuka (Mirror Reflection)
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-serif italic leading-relaxed text-stone-800 dark:text-stone-200">
            "{openingMirror(profileId)}"
          </p>
        </div>

        {/* 3. Portrait & Bio Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 space-y-4">
            <h3 
              className="text-base font-serif font-semibold flex items-center gap-2"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              <User size={16} className={isGarden ? 'text-rose-450' : 'text-amber-400'} />
              <span>Cetak Biru Filsafat Jiwa & Fitur Alamiah</span>
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed p-5 rounded-2xl ${isGarden ? 'bg-white border border-rose-100' : 'bg-[#1F1411] border border-amber-950/20'} text-stone-600 dark:text-stone-300`}>
              {profile.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl border border-dashed text-[11px] space-y-1.5" style={{ borderColor: isGarden ? '#FFCACA' : '#573E37' }}>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider text-[10px]">
                  🌱 Kekuatan Alami (Pros):
                </span>
                <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                  {profile.pros.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-dashed text-[11px] space-y-1.5" style={{ borderColor: isGarden ? '#FFCACA' : '#573E37' }}>
                <span className="font-bold text-rose-600 dark:text-rose-400 block uppercase tracking-wider text-[10px]">
                  ⚠️ Celah Kerentanan (Cons):
                </span>
                <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                  {profile.cons.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div 
            id="brutal-roast-panel"
            className="md:col-span-5 p-5 rounded-2xl border flex flex-col justify-between"
            style={{
              backgroundColor: isGarden ? 'rgba(254, 242, 242, 0.4)' : 'rgba(46, 24, 21, 0.3)',
              borderColor: isGarden ? '#FCA5A5' : '#854D41'
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame size={16} className="text-rose-500 animate-pulse" />
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-rose-400">
                  Kejujuran Terang: Roast Filsafat Jiwa-mu 🔥
                </span>
              </div>
              <p className="text-xs font-serif leading-relaxed italic text-stone-700 dark:text-stone-200">
                "{profile.roast}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-red-200/50 dark:border-red-950/40 text-[10px] text-stone-400 leading-normal">
              {profile.brutalConclusion}
            </div>
          </div>
        </div>

        {/* 4. Model A Matrix Layout with slot interpretations */}
        <div id="results-model-a-section" className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
            <h3 
              className="text-base sm:text-lg font-serif font-semibold flex items-center gap-2"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              <Compass size={18} className="text-amber-500" />
              <span>Arsitektur Metabolisme Energi & Informasi (Model A)</span>
            </h3>
            <span className="text-[10px] font-mono text-stone-400">Arsitektur Model A Socionics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(['base', 'creative', 'role', 'polr', 'suggestive', 'mobilizing', 'ignoring', 'demonstrative'] as const).map((slotName, i) => {
              const element = profile.modelA.find(pos => pos.position === i + 1)?.element || 'Ne';
              const isPoLR = slotName === 'polr';
              const isSuggestive = slotName === 'suggestive';
              const isBase = slotName === 'base';

              return (
                <div 
                  key={slotName}
                  id={`model-a-card-${i + 1}`}
                  className={`p-4.5 rounded-2xl border flex flex-col justify-between transition-all ${
                    isPoLR 
                      ? 'bg-red-50/20 dark:bg-red-950/10 border-red-300' 
                      : isSuggestive 
                        ? 'bg-blue-50/20 dark:bg-blue-950/10 border-blue-300'
                        : isBase
                          ? 'border-amber-500 bg-stone-50/10 dark:bg-[#2A1E1A]/10'
                          : isGarden 
                            ? 'bg-white hover:bg-rose-50/20 border-rose-50' 
                            : 'bg-stone-900/30 hover:bg-[#201511] border-amber-950/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                        Posisi {i + 1} · {slotName.toUpperCase()}
                      </span>
                      {renderIMSymbol(element)}
                    </div>
                    <div>
                      <strong className="text-xs font-bold block text-stone-800 dark:text-stone-200 leading-snug">
                        {slotName === 'polr' ? 'PoLR (Vulnerable)' : slotName === 'suggestive' ? 'Suggestive (Dual-Seeking)' : slotName.replace(/^\w/, c => c.toUpperCase())}
                      </strong>
                      <p className="text-[10px] text-stone-400 uppercase mt-0.5 font-mono">
                        {ELEMENT_LABEL[element as any].split(',')[0]}
                      </p>
                    </div>

                    <p className="text-[11px] leading-relaxed text-stone-500 dark:text-stone-300">
                      {slotInterpretation(profileId, slotName)}
                    </p>
                  </div>

                  {isPoLR && (
                    <span className="mt-4 pt-1 inline-flex items-center gap-1 text-[9px] text-red-500 font-bold uppercase leading-none border-t border-red-200/20">
                      <AlertCircle size={10} />
                      <span>Titik Paling Sensitif</span>
                    </span>
                  )}
                  {isSuggestive && (
                    <span className="mt-4 pt-1 inline-flex items-center gap-1 text-[9px] text-blue-500 font-bold uppercase leading-none border-t border-blue-200/20">
                      <CheckCircle2 size={10} />
                      <span>Sarang Pemulih Diri</span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Channel profile statistics (Element Rankings) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4">
          
          {/* Element Ranking bar chart (8 columns) */}
          <div className="lg:col-span-7 p-6 rounded-2xl border space-y-4 bg-stone-50/50 dark:bg-[#1E1410]/20 border-stone-100 dark:border-stone-850">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
                Indeks keselarasan Elemen Informasi
              </span>
              <span className="text-[9px] font-mono text-stone-550">Sinyal kognitif bersih</span>
            </div>

            <div className="space-y-3 font-sans text-xs">
              {result.elementRanking.map((row, index) => {
                const pct = Math.max(0, Math.min(100, Math.round(row.score * 100)));
                return (
                  <div key={row.element} className="space-y-1.5 flex items-center gap-3">
                    <div className="w-12 font-mono flex items-center gap-1.5 font-semibold text-stone-400">
                      <span>{index + 1}.</span>
                      {renderIMSymbol(row.element)}
                    </div>
                    <div className="flex-1 h-3 bg-stone-200 dark:bg-stone-900 rounded-full overflow-hidden relative">
                      <div 
                        className="h-full rounded-r-md" 
                        style={{ 
                          width: `${pct}%`,
                          background: isGarden ? '#F43F5E' : '#B45309'
                        }} 
                      />
                    </div>
                    <div className="w-40 text-left text-[10px] text-stone-400 truncate">
                      {ELEMENT_LABEL[row.element].split(',')[0]}
                    </div>
                    <div className="w-10 text-right font-mono text-[10px] text-stone-400 font-bold">
                      {pct}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Tension & Relief Interpretive Dossiers (5 columns) */}
          <div className="lg:col-span-5 p-5 rounded-2xl border flex flex-col justify-between bg-stone-50/50 dark:bg-[#1E1410]/20 border-stone-100 dark:border-stone-850">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider block">Pelepasan Relief Sugestif:</span>
                <p className="text-[11px] leading-relaxed text-stone-500">
                  {reliefCopy(profileId)}
                </p>
              </div>

              <div className="border-t border-dashed border-stone-300 dark:border-stone-800/40 my-3" />

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider block">Manifestasi Segitiga Ketegangan:</span>
                <p className="text-[11px] leading-relaxed text-stone-500">
                  {tensionCopy(profileId)}
                </p>
              </div>
            </div>

            <div className="text-[9px] italic text-stone-400 mt-4 leading-normal pt-2 border-t border-dashed border-stone-200 dark:border-stone-800/20">
              {mysteryCopy(profileId)}
            </div>
          </div>
        </div>

        {/* 6. Personal Assistant Bento Box Details */}
        <div id="results-bento-section" className="space-y-4">
          <div className="pb-2 border-b" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
            <h3 
              className="text-base font-serif font-semibold flex items-center gap-2"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              <Sparkles size={16} className={isGarden ? 'text-rose-400' : 'text-amber-400'} />
              <span>Panduan Asisten Pribadi Filsafat Jiwa</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* 7-Day Experiment card */}
            <div 
              className="md:col-span-6 p-6 rounded-2xl border"
              style={{
                backgroundColor: isGarden ? 'rgba(255, 240, 240, 0.4)' : 'rgba(38, 24, 18, 0.3)',
                borderColor: isGarden ? '#FFC4C4' : '#5E3E33'
              }}
            >
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-3">Eksperimen 7 Hari Pemulihan Jiwa</span>
              <div className="space-y-3">
                {profile.recommendations.experiment7Days.map((exp, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-500 flex items-center justify-center font-semibold text-[10px] flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p>{exp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Behavioral styles */}
            <div className="md:col-span-6 p-6 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 space-y-4">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Dinamika Gaya Berperilaku</span>
              
              <div className="space-y-3.5 text-xs">
                <div className="p-3 rounded-xl bg-black/5 dark:bg-black/10">
                  <strong className="text-stone-700 dark:text-stone-200 block mb-1">🛋️ Gaya Hidup Harian:</strong>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">{profile.behavioralDynamics.lifestyle}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/5 dark:bg-black/10">
                  <strong className="text-stone-700 dark:text-stone-200 block mb-1">💡 Model Berpikir:</strong>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">{profile.behavioralDynamics.thinkingStyle}</p>
                </div>
              </div>
            </div>

            {/* Small list items */}
            <div className="md:col-span-4 p-5 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 text-xs space-y-2">
              <strong className="text-stone-700 dark:text-stone-200 block uppercase tracking-wide text-[10px] text-rose-500">📚 Buku Penuh Inspirasi:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                {profile.recommendations.books.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <strong className="text-stone-700 dark:text-stone-200 block pt-2 uppercase tracking-wide text-[10px] text-rose-500">🎬 Film & Sinema:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                {profile.recommendations.movies.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 text-xs space-y-2">
              <strong className="text-stone-700 dark:text-stone-200 block uppercase tracking-wide text-[10px] text-amber-500">💼 Karir/Pekerjaan Idaman:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                {profile.recommendations.careers.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
              <strong className="text-stone-700 dark:text-stone-200 block pt-2 uppercase tracking-wide text-[10px] text-amber-500">✈️ Destinasi Liburan:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                {profile.recommendations.destinations.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl border bg-stone-50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-800 text-xs space-y-2">
              <strong className="text-stone-700 dark:text-stone-200 block uppercase tracking-wide text-[10px] text-purple-500">🧥 Penampilan (Aesthetic Dressing):</strong>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 pb-2">{profile.recommendations.appearanceTips}</p>
              <strong className="text-stone-700 dark:text-stone-200 block uppercase tracking-wide text-[10px] text-purple-500">🎁 Ide Kado Hadiah:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500 dark:text-stone-400">
                {profile.recommendations.gifts.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* 7. Deep Anger / Affection patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-dashed" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
          <div className="p-4.5 rounded-2xl space-y-2 border border-stone-100 dark:border-amber-950/20 bg-stone-100/10 dark:bg-black/10">
            <span className="text-stone-700 dark:text-stone-205 font-bold block text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
              🔥 Sinyal Amarah / Konflik:
            </span>
            <p className="text-xs leading-relaxed text-stone-500 dark:text-stone-400">{profile.behavioralDynamics.angerStyle}</p>
          </div>
          <div className="p-4.5 rounded-2xl space-y-2 border border-stone-100 dark:border-amber-950/20 bg-stone-100/10 dark:bg-black/10">
            <span className="text-stone-700 dark:text-stone-205 font-bold block text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
              💖 Ekspresi Kasih Sayang (Affection):
            </span>
            <p className="text-xs leading-relaxed text-stone-500 dark:text-stone-400">{profile.behavioralDynamics.affectionStyle}</p>
          </div>
        </div>

        {/* 8. Comparative relationship partners map */}
        <div id="results-relations-section" className="space-y-4">
          <div className="pb-2 border-b" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
            <h3 
              className="text-base sm:text-lg font-serif font-semibold"
              style={{ color: isGarden ? '#4A3333' : '#F5E6D3' }}
            >
              Kompatibilitas Relasi Inter-Dinamis (Matriks Symmetris)
            </h3>
            <p className="text-[11px] text-stone-450 italic">Korelasinya dihitung otomatis menggunakan teori grup isomorfis jiwa</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relations.map((rel, i) => {
              const isCompatible = rel.compatibilityPercent >= 80;
              const isDanger = rel.compatibilityPercent <= 25;

              return (
                <div 
                  key={i}
                  id={`relation-card-${i}`}
                  className="p-4 rounded-2xl border flex gap-3.5 items-start bg-white dark:bg-[#1E1410]/20 border-stone-100 dark:border-amber-950/20"
                >
                  <div className="text-center flex-shrink-0">
                    <span 
                      className={`block text-base font-bold px-2.5 py-1 rounded-xl font-mono shadow-sm ${
                        isCompatible 
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500' 
                          : isDanger 
                            ? 'bg-red-50 dark:bg-red-950/20 text-red-500' 
                            : 'bg-stone-55 dark:bg-stone-900/60 text-stone-400'
                      }`}
                    >
                      {rel.compatibilityPercent}%
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-1">Match</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-stone-800 dark:text-stone-200">{rel.relationName}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/5 dark:bg-black/30 text-stone-400 font-mono text-[9px]">
                        Target: {rel.targetType}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-stone-500 dark:text-stone-400">
                      {rel.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 9. Scientific role models */}
        <div id="results-role-models" className="space-y-3 pt-6 border-t border-dashed" style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Role Model Dunia Bertipe {profileId}:</span>
          <div className="flex flex-wrap gap-2 pt-1">
            {profile.recommendations.roleModels.map((model, idx) => (
              <span 
                key={idx}
                className={`text-xs font-semibold px-4.5 py-1.5 rounded-full ${
                  isGarden ? 'bg-rose-50 border border-rose-100 text-rose-600 font-bold' : 'bg-amber-950/30 border border-amber-950/40 text-amber-300 font-bold'
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
