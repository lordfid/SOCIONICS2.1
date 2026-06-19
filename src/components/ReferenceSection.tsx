import React from 'react';
import { ArrowLeft, BookOpen, Compass, Award, ExternalLink } from 'lucide-react';
import { ThemeType } from '../types';

interface ReferenceSectionProps {
  theme: ThemeType;
  onBack: () => void;
}

export default function ReferenceSection({ theme, onBack }: ReferenceSectionProps) {
  const isGarden = theme === 'light-garden';

  const booksList = [
    {
      title: 'Understanding the People Around You: An Introduction to Socionics',
      author: 'Ekaterina Filatova, PhD (2006)',
      desc: 'Buku rujukan utama penulisan profil dan metode pengujian dikotomi numerik 1-9. Dr. Filatova merupakan psikolog Rusia pelopor rencana visualisasi/foto kepribadian dan penyelarasan bahasa teoretis ke dalam kelakuannya.'
    },
    {
      title: 'The Mathematics of Socionics',
      author: 'Ibrahim Tencer (2012)',
      desc: 'Membahas pemetaan matematika relasi antartipe berbasis teori aljabar abstrak. Relasi didefinisikan sebagai fungsi transisi dari grup R isomorfis dengan grup simetri D4 x Z2 (rotasi dan refleksi Model A).'
    },
    {
      title: 'Socionics, Vol 1 & 2',
      author: 'Aushra Augustinavichiute (1998)',
      desc: 'Landasan orisinal sanksi Socionics asal Lithuania. Memformulasikan teori metabolisme informasi Carl Jung dipadu siber-netik Model A (8 posisi fungsional).'
    }
  ];

  return (
    <div 
      id="reference-panel-root"
      className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 backdrop-blur-md"
      style={{
        backgroundColor: isGarden ? 'rgba(255, 255, 255, 0.9)' : 'rgba(25, 16, 12, 0.96)',
        borderColor: isGarden ? '#FFE2E2' : '#3E271F'
      }}
    >
      {/* Header */}
      <div 
        id="ref-header"
        className="p-6 border-b flex justify-between items-center"
        style={{ borderColor: isGarden ? '#FFEBF0' : '#2D1E19' }}
      >
        <button
          id="ref-back-btn"
          onClick={onBack}
          className={`flex items-center gap-1.5 text-xs font-semibold hover:underline cursor-pointer ${
            isGarden ? 'text-rose-500' : 'text-amber-400'
          }`}
        >
          <ArrowLeft size={14} />
          <span>Kembali ke Menu</span>
        </button>

        <div className="flex items-center gap-2">
          <BookOpen id="ref-icon" size={16} className={isGarden ? 'text-rose-400' : 'text-amber-400'} />
          <span 
            className="text-sm font-serif font-semibold"
            style={{ 
              color: isGarden ? '#4E3A3A' : '#F9F1EB',
              fontFamily: isGarden ? '"Playfair Display", serif' : '"Cinzel", serif, Georgia'
            }}
          >
            Saran Bacaan & Metodologi Ilmiah
          </span>
        </div>
      </div>

      <div className="p-8">
        {/* Intro */}
        <div id="ref-intro" className="mb-8 text-center max-w-2xl mx-auto">
          <h3 
            className="text-lg font-serif font-semibold mb-2"
            style={{ 
              color: isGarden ? '#412C2C' : '#FAF3EB',
              fontFamily: isGarden ? '"Playfair Display", serif' : '"Cinzel", serif, Georgia'
            }}
          >
            Menciptakan Alat Tes yang Reliabel & Sahih
          </h3>
          <p className={`text-xs leading-relaxed ${isGarden ? 'text-stone-500' : 'text-[#D8C7C0]'}`}>
            Proyek ini merupakan komitmen serius untuk merancang tes evaluasi kepribadian komparatif biner pertama di Indonesia yang mengacu pada rencana matematika dan hukum aljabar Socionics orisinal Rusia, memitigasi tumpang tindih dengan teori pseudo-sains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scientific literature */}
          <div id="ref-reading-col">
            <h4 
              className="text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-1.5"
              style={{ color: isGarden ? '#E57373' : '#D09E94' }}
            >
              <Award size={14} />
              <span>Saran Bacaan Utama</span>
            </h4>

            <div className="space-y-4">
              {booksList.map((bk, i) => (
                <div 
                  key={i} 
                  id={`ref-book-${i}`}
                  className={`p-4 rounded-2xl border transition-all ${
                    isGarden 
                      ? 'bg-rose-50/20 border-rose-100 hover:bg-rose-50/40' 
                      : 'bg-amber-950/10 border-amber-950/40 hover:bg-amber-950/20'
                  }`}
                >
                  <h5 className={`text-xs font-bold font-serif mb-1 leading-snug ${isGarden ? 'text-stone-800' : 'text-[#FAF5EF]'}`}>
                    {bk.title}
                  </h5>
                  <span className="text-[10px] text-stone-400 font-semibold block mb-2">{bk.author}</span>
                  <p className={`text-[11px] leading-relaxed ${isGarden ? 'text-stone-500' : 'text-[#C5B3BC]'}`}>
                    {bk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mathematical Foundations */}
          <div id="ref-math-col" className="flex flex-col justify-between">
            <div>
              <h4 
                className="text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-1.5"
                style={{ color: isGarden ? '#E57373' : '#D09E94' }}
              >
                <Compass size={14} />
                <span>Pondasi Matematika Relasi</span>
              </h4>

              <div 
                className={`p-5 rounded-2xl border mb-4 font-sans text-xs leading-relaxed ${
                  isGarden ? 'bg-stone-50/50 border-[#FFE5E5] text-stone-600' : 'bg-[#1F120E] border-amber-950/60 text-[#D8C7C0]'
                }`}
              >
                <p className="font-semibold block mb-2" style={{ color: isGarden ? '#E57373' : '#D09E94' }}>
                  Isomorfisme Relasi Grup Intertype:
                </p>
                <p className="mb-3">
                  Secara aljabar, sanksi Socionics membuktikan bahwa 16 Relasi Antartipe membentuk grup komutatif/abelian yang represents isomorfisme dengan:
                </p>
                <div className="font-mono text-center bg-black/5 dark:bg-black/30 p-2.5 rounded-xl border border-stone-200 dark:border-stone-900 text-xs font-bold block mb-3">
                  R ≅ D₄ × ℤ₂
                </div>
                <p className="text-[11px] leading-relaxed">
                  Di mana <strong>D₄</strong> represents grup simetri delapan elemen (rotasi dan refleksi) dari 8 posisi Model A, dan <strong>ℤ₂</strong> represents inversi E/I (Extravert/Introvert). 
                  Artinya, relasi asimetris seperti <em>Supervision</em> dan <em>Rentetan Sosial</em> dapat dihitung dan dipetakan ke dalam siklus orde matematika 4 yang stabil dan andal!
                </p>
              </div>

              <div 
                className={`p-5 rounded-2xl border font-sans text-xs leading-relaxed ${
                  isGarden ? 'bg-stone-50/50 border-[#FFE5E5] text-stone-600' : 'bg-[#1F120E] border-amber-950/60 text-[#D8C7C0]'
                }`}
              >
                <p className="font-semibold block mb-2 flex items-center gap-1" style={{ color: isGarden ? '#E57373' : '#D09E94' }}>
                  <span>Situs Penelitian Utama:</span>
                  <ExternalLink size={12} />
                </p>
                <ul className="list-disc pl-4 space-y-1.5 text-[11px]">
                  <li><a href="https://wikisocion.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline">Wikisocion Project Database</a></li>
                  <li><a href="http://www.socioniko.net" target="_blank" rel="noopener noreferrer" className="hover:underline">Socioniko Multilingual Archive</a></li>
                </ul>
              </div>
            </div>
            
            <p className="text-[10px] text-stone-400 mt-6 md:mt-0 font-sans italic text-center leading-relaxed">
              *Penilaian ini dikembangkan sebagai alat bantu belajar mandiri dan refleksi kepribadian.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
