import React, { useState } from 'react';
import { BookOpen, AlertCircle, Compass, HelpCircle, ArrowRight, Library, Sparkles } from 'lucide-react';
import { ThemeType } from '../types';

interface WelcomeScreenProps {
  theme: ThemeType;
  onStartTest: (name: string, testType: 'ringkas' | 'sedang' | 'penuh') => void;
  onViewReferences: () => void;
}

export default function WelcomeScreen({ theme, onStartTest, onViewReferences }: WelcomeScreenProps) {
  const [name, setName] = useState('');
  const [testType, setTestType] = useState<'ringkas' | 'sedang' | 'penuh'>('sedang');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (!name.trim()) {
      setError('Masukkan namamu dulu kak, biar laporannya terasa personal!');
      return;
    }
    setError('');
    onStartTest(name.trim(), testType);
  };

  const isGarden = theme === 'light-garden';

  return (
    <div 
      id="welcome-card-root"
      className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border shadow-2xl transition-all duration-500 backdrop-blur-md"
      style={{
        backgroundColor: isGarden ? 'rgba(255, 255, 255, 0.9)' : 'rgba(28, 18, 14, 0.95)',
        borderColor: isGarden ? '#FFE5E5' : '#4E3629',
        boxShadow: isGarden 
          ? '0 20px 40px rgba(255, 182, 193, 0.2)' 
          : '0 20px 40px rgba(0, 0, 0, 0.6)'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Side: Editorial Banner */}
        <div 
          id="welcome-left-banner"
          className="md:col-span-5 p-8 flex flex-col justify-between text-white relative overflow-hidden min-h-[300px]"
          style={{
            background: isGarden 
              ? 'linear-gradient(135deg, #FFB3B3 0%, #FF9797 100%)' 
              : 'linear-gradient(135deg, #4A2E2B 0%, #2A1715 100%)',
            borderRight: isGarden ? '1px solid #FFE5E5' : '1px solid #4E3629'
          }}
        >
          {/* Decorative Floral / Compass Ring */}
          <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
            <Compass size={300} className="animate-spin-slow text-white" />
          </div>

          <div className="z-10">
            <div className="flex items-center gap-2 mb-4">
              {isGarden ? (
                <div className="p-2 bg-white/20 rounded-xl">
                  <Sparkles size={18} className="text-white" />
                </div>
              ) : (
                <div className="p-2 bg-amber-900/40 rounded-xl border border-amber-800">
                  <Compass size={18} className="text-amber-300" />
                </div>
              )}
              <span className="text-[10px] tracking-widest font-semibold uppercase opacity-80">
                1st Reliable Indon-Socionics Project
              </span>
            </div>

            <h1 
              className="text-3xl font-serif tracking-tight leading-tight mb-2 font-semibold"
              style={{ fontFamily: isGarden ? '"Playfair Display", serif' : '"Cinzel", serif, Georgia' }}
            >
              Socionics <br />Dalam Diriku
            </h1>
            <p className="text-xs opacity-90 font-sans leading-relaxed">
              Temukan cetak biru kepribadianmu lewat alat tes ilmiah paling teoretis and reliabel dari warisan Aushra Augustinavichiute.
            </p>
          </div>

          <div className="z-10 mt-8">
            <blockquote className="text-xs italic border-l-2 pl-3 opacity-80 border-white/40">
              "Mengenal dirimu sendiri adalah awal dari kebijaksanaan sejati."
              <span className="block text-[10px] not-italic mt-1 font-semibold opacity-70">— Socrates</span>
            </blockquote>
          </div>
        </div>

        {/* Right Side: Configuration & Form */}
        <div className="md:col-span-7 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span 
                className={`text-[10px] tracking-widest font-semibold uppercase px-3 py-1 rounded-full ${
                  isGarden ? 'bg-rose-50 text-rose-500 border border-rose-100' : 'bg-amber-950/40 text-amber-300 border border-amber-900/50'
                }`}
              >
                Aturan Ketat & Reliabel
              </span>
              <button 
                id="view-bib-btn"
                onClick={onViewReferences}
                className={`flex items-center gap-1.5 text-xs transition-colors hover:underline cursor-pointer ${
                  isGarden ? 'text-rose-500' : 'text-amber-400'
                }`}
              >
                <BookOpen size={14} />
                <span>Rujukan & Bacaan</span>
              </button>
            </div>

            <h2 
              className="text-xl font-serif font-semibold mb-4"
              style={{ 
                color: isGarden ? '#4A3333' : '#F5E6D3',
                fontFamily: isGarden ? '"Playfair Display", serif' : '"Cinzel", serif, Georgia'
              }}
            >
              Sebelum memulai petualangan batinmu...
            </h2>

            {/* Input Name */}
            <div className="mb-6">
              <label 
                htmlFor="user-name-input"
                className={`block text-xs font-medium mb-2 ${
                  isGarden ? 'text-stone-600' : 'text-stone-300'
                }`}
              >
                Siapa namamu, kak?
              </label>
              <input
                id="user-name-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim()) setError('');
                }}
                placeholder="Contoh: Nara / Satria"
                className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                  isGarden 
                    ? 'bg-stone-50 border-rose-100 focus:ring-rose-300 text-stone-800 placeholder-stone-400' 
                    : 'bg-[#251813] border-amber-950 focus:ring-amber-700 text-[#FAF5EF] placeholder-amber-800/40'
                }`}
              />
              {error && (
                <p className="flex items-center gap-1 text-[11px] text-red-500 mt-2 font-medium">
                  <AlertCircle size={12} />
                  <span>{error}</span>
                </p>
              )}
            </div>

            {/* Test Length Selection */}
            <div className="mb-6">
              <label 
                className={`block text-xs font-medium mb-3.5 ${
                  isGarden ? 'text-stone-600' : 'text-stone-300'
                }`}
              >
                Pilih Kedalaman Tes Kepribadian:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Ringkas */}
                <div 
                  id="opt-ringkas"
                  onClick={() => setTestType('ringkas')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    testType === 'ringkas'
                      ? isGarden 
                        ? 'bg-rose-50/50 border-rose-300 ring-2 ring-rose-200' 
                        : 'bg-amber-950/20 border-amber-700 ring-2 ring-amber-900/50'
                      : isGarden 
                        ? 'bg-white border-stone-100 hover:border-rose-200' 
                        : 'bg-[#211510] border-amber-950/40 hover:border-amber-900/30'
                  }`}
                >
                  <div>
                    <span 
                      className={`text-xs font-semibold block mb-1 ${
                        isGarden ? 'text-stone-800' : 'text-[#FAF5EF]'
                      }`}
                    >
                      🌸 Tes Ringkas
                    </span>
                    <span className="text-[10px] text-stone-500 block leading-tight">
                      ± 80 pertanyaan unik
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-stone-400 mt-3 block">⏱️ 10 - 15 Menit</span>
                </div>

                {/* Sedang */}
                <div 
                  id="opt-sedang"
                  onClick={() => setTestType('sedang')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    testType === 'sedang'
                      ? isGarden 
                        ? 'bg-rose-50/50 border-rose-300 ring-2 ring-rose-200' 
                        : 'bg-amber-950/20 border-amber-700 ring-2 ring-amber-900/50'
                      : isGarden 
                        ? 'bg-white border-stone-100 hover:border-rose-200' 
                        : 'bg-[#211510] border-amber-950/40 hover:border-amber-900/30'
                  }`}
                >
                  <div>
                    <span 
                      className={`text-xs font-semibold block mb-1 ${
                        isGarden ? 'text-stone-800' : 'text-[#FAF5EF]'
                      }`}
                    >
                      🌿 Tes Sedang
                    </span>
                    <span className="text-[10px] text-stone-500 block leading-tight">
                      ± 128 pertanyaan andal
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-stone-400 mt-3 block">⏱️ 20 - 30 Menit</span>
                </div>

                {/* Penuh */}
                <div 
                  id="opt-penuh"
                  onClick={() => setTestType('penuh')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    testType === 'penuh'
                      ? isGarden 
                        ? 'bg-rose-50/50 border-rose-300 ring-2 ring-rose-200' 
                        : 'bg-amber-950/20 border-amber-700 ring-2 ring-amber-900/50'
                      : isGarden 
                        ? 'bg-white border-stone-100 hover:border-rose-200' 
                        : 'bg-[#211510] border-amber-950/40 hover:border-amber-900/30'
                  }`}
                >
                  <div>
                    <span 
                      className={`text-xs font-semibold block mb-1 ${
                        isGarden ? 'text-stone-800' : 'text-[#FAF5EF]'
                      }`}
                    >
                      📚 Tes Penuh
                    </span>
                    <span className="text-[10px] text-stone-500 block leading-tight">
                      ± 224 pertanyaan komprehensif
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-stone-400 mt-3 block">⏱️ 40 - 60 Menit</span>
                </div>
              </div>
            </div>
          </div>

          <div id="welcome-action-footer" className="mt-8 pt-6 border-t border-dashed border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-stone-400 font-sans text-center sm:text-left leading-relaxed">
              *Hasil tes bersifat pribadi dan tidak disimpan ke server.<br />
              Berbasis Model A Socionics, dikembangkan sebagai alat refleksi tipologi. Bukan diagnosis klinis.
            </p>
            <button
              id="start-test-btn"
              onClick={handleStart}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer ${
                isGarden 
                  ? 'bg-rose-400 hover:bg-rose-500 text-white shadow-rose-100' 
                  : 'bg-amber-800 hover:bg-amber-900 text-[#F9F6F0] shadow-amber-950/40'
              }`}
            >
              <span>Mulai Tes</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
