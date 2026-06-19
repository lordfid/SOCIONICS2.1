import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, Flame, Target, MessageSquare } from 'lucide-react';
import { SocionicsQuestion, ThemeType } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface TestEngineProps {
  theme: ThemeType;
  userName: string;
  testType: 'ringkas' | 'sedang' | 'penuh';
  questions: SocionicsQuestion[];
  currentQuestionIndex: number;
  answers: Record<string, number>;
  onSelectAnswer: (questionId: string, score: number) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onSkipQuestion: () => void;
}

export default function TestEngine({
  theme,
  userName,
  testType,
  questions,
  currentQuestionIndex,
  answers,
  onSelectAnswer,
  onNextQuestion,
  onPrevQuestion,
  onSkipQuestion
}: TestEngineProps) {
  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  const totalQuestions = questions.length;
  const progressPercent = Math.min(
    Math.round(((currentQuestionIndex) / totalQuestions) * 100),
    100
  );

  const selectedScore = answers[currentQuestion.id]; // undefined if not answered yet
  const isGarden = theme === 'light-garden';

  const testTypeLabel = testType === 'ringkas' 
    ? '🎁 Mode Ringkas (80 Soal)' 
    : testType === 'sedang' 
      ? '🌿 Mode Standar (128 Soal)' 
      : '📚 Mode Penuh (224 Soal)';

  // Keyboard Navigation: pressing 1-5 selects the corresponding option
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const val = parseInt(e.key, 10);
        onSelectAnswer(currentQuestion.id, val);
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (selectedScore !== undefined) {
          onNextQuestion();
        }
      } else if (e.key === 'ArrowLeft') {
        onPrevQuestion();
      } else if (e.key === 'q' || e.key === 'Q') {
        onSkipQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion.id, selectedScore, onSelectAnswer, onNextQuestion, onPrevQuestion, onSkipQuestion]);

  return (
    <div 
      id="test-engine-panel-root"
      className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300"
      style={{
        backgroundColor: isGarden ? 'rgba(255, 255, 255, 0.94)' : 'rgba(25, 16, 12, 0.98)',
        borderColor: isGarden ? '#FFE2E2' : '#3E271F'
      }}
    >
      {/* Header Info */}
      <div 
        id="test-header"
        className="px-6 py-4 flex justify-between items-center border-b text-xs font-medium"
        style={{
          borderColor: isGarden ? '#FFF0F0' : '#2D1E19',
          color: isGarden ? '#8C6C6C' : '#B89B95'
        }}
      >
        <span id="test-user-name">Peserta: <strong className={isGarden ? 'text-rose-500 font-bold' : 'text-amber-400 font-bold'}>{userName}</strong></span>
        <span id="test-type-lbl" className="px-3 py-1 rounded-full bg-opacity-10 text-[11px]" style={{ backgroundColor: isGarden ? '#FFF0F0' : '#4E2C22' }}>
          {testTypeLabel}
        </span>
        <span id="test-progress-numbers" className="font-mono bg-stone-100 dark:bg-stone-900/50 px-2.5 py-1 rounded-md">
          {currentQuestionIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-900 relative">
        <div 
          id="test-progress-bar-fill"
          className="h-full rounded-r-full transition-all duration-300 ease-out"
          style={{
            width: `${progressPercent}%`,
            background: isGarden 
              ? 'linear-gradient(to right, #FFC4C4, #E57373)' 
              : 'linear-gradient(to right, #6A443B, #BE8173)'
          }}
        />
      </div>

      {/* Main Answering Engine Area */}
      <div className="p-6 sm:p-8">
        
        {/* Step Metadata & Preamble Boxes */}
        <div className="flex flex-wrap gap-2.5 mb-5 items-center">
          <span 
            id="test-q-dimension"
            className="text-[9px] tracking-widest uppercase font-mono px-2 py-0.7 rounded shadow-sm flex items-center gap-1.5 border"
            style={{
              backgroundColor: isGarden ? '#FFF3F3' : '#3D2520',
              borderColor: isGarden ? '#FFE0E0' : '#5C3830',
              color: isGarden ? '#E57373' : '#EAA99E'
            }}
          >
            <Target size={11} />
            Elem: {currentQuestion.element} × Kanal: {currentQuestion.channel}
          </span>

          <span 
            className="text-[9px] tracking-widest uppercase font-mono px-2 py-0.7 rounded shadow-sm flex items-center gap-1.5 border"
            style={{
              backgroundColor: isGarden ? '#F5F5FA' : '#1F2A38',
              borderColor: isGarden ? '#E8E8FF' : '#31445B',
              color: isGarden ? '#5268F1' : '#8DACEC'
            }}
          >
            ⚖️ Skala: {currentQuestion.scale}
          </span>
          
          <span className="text-[10px] text-stone-400 font-serif italic ml-auto hidden sm:inline">
            Akses: tekan tombol [1 - 5] untuk menjawab cepat
          </span>
        </div>

        {/* Dynamic Context Box */}
        {currentQuestion.context && (
          <div 
            className="mb-5 p-4 rounded-2xl border text-xs leading-relaxed font-sans"
            style={{
              backgroundColor: isGarden ? '#FAF6F0' : '#1D1310',
              borderColor: isGarden ? '#EADBC6' : '#2D1E16',
              color: isGarden ? '#5C5446' : '#CAB3A2'
            }}
          >
            <div className="flex items-center gap-2 mb-1.5 font-bold tracking-wider text-[10px] uppercase text-amber-600 dark:text-amber-400">
              <MessageSquare size={13} />
              <span>Skenario / Konteks Resonansi</span>
            </div>
            <div>{currentQuestion.context}</div>
          </div>
        )}

        {/* Cognitive Statement Indicator */}
        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#B58572] block mb-1">Pernyataan Refleksi</span>
          <h3 
            id="test-q-text"
            className="text-base sm:text-lg font-serif leading-relaxed"
            style={{ 
              color: isGarden ? '#332323' : '#FFF3EB',
              fontFamily: isGarden ? '"Playfair Display", serif' : 'Georgia, serif'
            }}
          >
            "{currentQuestion.statement}"
          </h3>
        </div>

        {/* Option Cards (1-5 range with meaning and feedback reactions) */}
        <div className="space-y-3.5 mb-8" id="test-options-container">
          <AnimatePresence mode="wait">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedScore === option.value;
              return (
                <motion.div 
                  key={option.value}
                  id={`btn-score-${option.value}`}
                  whileHover={{ scale: 1.006 }}
                  whileTap={{ scale: 0.995 }}
                  onClick={() => onSelectAnswer(currentQuestion.id, option.value)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-3.5 items-start relative overflow-hidden ${
                    isSelected
                      ? isGarden 
                        ? 'bg-rose-50/50 border-rose-400 text-rose-990 ring-1 ring-rose-400 shadow-md' 
                        : 'bg-[#3A221E]/70 border-amber-500 text-[#FFF3EB] ring-1 ring-amber-500 shadow-md'
                      : isGarden 
                        ? 'bg-white border-stone-100 hover:border-stone-200 text-stone-700 hover:bg-stone-50/50' 
                        : 'bg-[#1C1210] border-amber-950/20 hover:border-amber-900/10 text-[#DFC9C5] hover:bg-[#2A1D1A]'
                  }`}
                >
                  {/* Shortcut Indicator Badge */}
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center border transition-all ${
                    isSelected 
                      ? 'bg-amber-400 border-amber-400 text-stone-900' 
                      : 'bg-stone-100 dark:bg-stone-900/60 border-stone-200 dark:border-amber-950/30 text-stone-500'
                  }`}>
                    {option.value}
                  </div>

                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-semibold text-xs text-stone-800 dark:text-[#EFE2DA]">
                        {option.label}
                      </span>
                    </div>

                    {/* Explanations shown only on select or subtle subtext */}
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                      {option.meaning}
                    </p>

                    {isSelected && option.reaction && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 text-[10px] italic border-t border-dashed pt-2 font-serif flex items-center gap-1.5"
                        style={{
                          color: isGarden ? '#A15949' : '#D2A28A',
                          borderTopColor: isGarden ? '#FFDFDF' : '#573E37'
                        }}
                      >
                        <Flame size={12} className="text-amber-500 inline flex-shrink-0" />
                        <span>Dinamika psikismu: "{option.reaction}"</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Action Controls */}
        <div id="test-controls-row" className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-stone-100 dark:border-[#2E1E19]">
          <button
            id="prev-q-btn"
            onClick={onPrevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-4.5 py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              currentQuestionIndex === 0
                ? 'opacity-20 cursor-not-allowed'
                : isGarden
                  ? 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  : 'border-amber-950/30 text-[#FAF5EF] hover:bg-amber-950/20'
            }`}
          >
            <ChevronLeft size={16} />
            <span>Sebelumnya</span>
          </button>

          <button
            id="skip-q-btn"
            onClick={onSkipQuestion}
            className={`w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl hover:scale-[1.01] cursor-pointer transition-all ${
              isGarden 
                ? 'bg-stone-50 hover:bg-stone-100 text-stone-500 border border-stone-200/60' 
                : 'bg-amber-950/10 hover:bg-amber-950/25 text-[#BEB1AA] border border-amber-950/35'
            }`}
          >
            Ragu-ragu (Lewati) [Q]
          </button>

          <button
            id="next-q-btn"
            onClick={onNextQuestion}
            disabled={selectedScore === undefined}
            className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-semibold rounded-xl tracking-wide shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer ${
              selectedScore === undefined
                ? 'opacity-40 cursor-not-allowed bg-stone-200 dark:bg-stone-900 border-transparent text-stone-400 dark:text-stone-600'
                : isGarden 
                  ? 'bg-rose-400 hover:bg-rose-500 text-white shadow-rose-100' 
                  : 'bg-amber-800 hover:bg-amber-900 text-[#F9F6F0] shadow-amber-900/20'
            }`}
          >
            <span>{currentQuestionIndex === totalQuestions - 1 ? 'Selesai & Analisis' : 'Berikutnya [Enter]'}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
