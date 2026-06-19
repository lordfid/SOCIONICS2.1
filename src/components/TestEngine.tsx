import React from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, CornerDownRight } from 'lucide-react';
import { Question, ThemeType } from '../types';

interface TestEngineProps {
  theme: ThemeType;
  userName: string;
  testType: 'ringkas' | 'sedang' | 'penuh';
  questions: Question[];
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

  const selectedScore = answers[currentQuestion.id] || 5; // Default to neutral (5) if not set yet
  const isGarden = theme === 'light-garden';

  const testTypeLabel = testType === 'ringkas' 
    ? 'Mode Ringkas (20 Soal)' 
    : testType === 'sedang' 
      ? 'Mode Sedang (36 Soal)' 
      : 'Mode Penuh (48 Soal)';

  const handleScoreClick = (score: number) => {
    onSelectAnswer(currentQuestion.id, score);
  };

  const getDimensionLabel = (dim: string) => {
    switch (dim) {
      case 'EI': return '🔋 Siklus Energi (Extraversion vs Introversion)';
      case 'JP': return '📆 Pengorganisasian Hidup (Rational vs Irrational)';
      case 'FT': return '⚖️ Gaya Memutuskan (Feeling vs Thinking)';
      case 'SN': return '🔭 Cara Memandang Realitas (Sensing vs Intuition)';
      default: return 'Dimensi Evaluasi';
    }
  };

  const scoresConfig = [
    { value: 1, label: 'Sangat Opsi A', desc: 'Ini aku banget!' },
    { value: 3, label: 'Lebih Condong A', desc: 'Biasanya begini' },
    { value: 5, label: 'Bimbang / Netral', desc: 'Ragu / Tengah' },
    { value: 7, label: 'Lebih Condong B', desc: 'Biasanya begitu' },
    { value: 9, label: 'Sangat Opsi B', desc: 'Ini aku banget!' }
  ];

  return (
    <div 
      id="test-engine-panel-root"
      className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300"
      style={{
        backgroundColor: isGarden ? 'rgba(255, 255, 255, 0.9)' : 'rgba(25, 16, 12, 0.96)',
        borderColor: isGarden ? '#FFE2E2' : '#3E271F'
      }}
    >
      {/* Header Info */}
      <div 
        id="test-header"
        className="px-6 py-4 flex justify-between items-center border-b text-xs font-medium"
        style={{
          borderColor: isGarden ? '#FFF0F0' : '#2D1E19',
          color: isGarden ? '#A18282' : '#B89B95'
        }}
      >
        <span id="test-user-name">Peserta: <strong className={isGarden ? 'text-rose-500' : 'text-amber-400'}>{userName}</strong></span>
        <span id="test-type-lbl" className="px-3 py-1 rounded-full bg-opacity-10" style={{ backgroundColor: isGarden ? '#FFF0F0' : '#4E2C22' }}>
          {testTypeLabel}
        </span>
        <span id="test-progress-numbers" className="font-mono">
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
              ? 'linear-gradient(to right, #FFC4C4, #FF9E97)' 
              : 'linear-gradient(to right, #6A443B, #9E6356)'
          }}
        />
      </div>

      {/* Main Core Question Area */}
      <div className="p-8">
        {/* Dimension Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span 
            id="test-q-dimension"
            className="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded"
            style={{
              backgroundColor: isGarden ? '#FFF0F0' : '#3D2520',
              color: isGarden ? '#E57373' : '#D09E94'
            }}
          >
            {getDimensionLabel(currentQuestion.dimension)}
          </span>
        </div>

        {/* Question Text */}
        <h3 
          id="test-q-text"
          className="text-lg sm:text-xl font-serif leading-relaxed mb-8"
          style={{ 
            color: isGarden ? '#4E3A3A' : '#F9F1EB',
            fontFamily: isGarden ? '"Playfair Display", serif' : '"Cinzel", serif, Georgia'
          }}
        >
          {currentQuestion.text}
        </h3>

        {/* Options Comparison Shield */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Option A */}
          <div 
            id="test-card-opt-a"
            onClick={() => handleScoreClick(1)}
            className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
              selectedScore <= 3
                ? isGarden 
                  ? 'bg-rose-50/40 border-rose-300 text-rose-900 shadow-md scale-[1.01]' 
                  : 'bg-amber-950/20 border-amber-800 text-amber-100 shadow-md scale-[1.01]'
                : isGarden 
                  ? 'bg-stone-50/50 border-stone-100 hover:border-rose-100 text-stone-600' 
                  : 'bg-[#211510] border-amber-950/40 hover:border-amber-900/20 text-[#D8C7C0]'
            }`}
          >
            <div className="flex gap-2.5 items-start">
              <span className={`flex-shrink-0 w-6 h-6 rounded-lg text-xs font-semibold flex items-center justify-center ${
                selectedScore <= 3 ? 'bg-rose-400 text-white' : 'bg-stone-200 dark:bg-stone-800 text-stone-500'
              }`}>
                A
              </span>
              <p className="text-xs font-sans leading-relaxed">{currentQuestion.optionA}</p>
            </div>
          </div>

          {/* Option B */}
          <div 
            id="test-card-opt-b"
            onClick={() => handleScoreClick(9)}
            className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
              selectedScore >= 7
                ? isGarden 
                  ? 'bg-rose-50/40 border-rose-300 text-rose-900 shadow-md scale-[1.01]' 
                  : 'bg-amber-950/20 border-amber-800 text-amber-100 shadow-md scale-[1.01]'
                : isGarden 
                  ? 'bg-stone-50/50 border-stone-100 hover:border-rose-100 text-stone-600' 
                  : 'bg-[#211510] border-amber-950/40 hover:border-amber-900/20 text-[#D8C7C0]'
            }`}
          >
            <div className="flex gap-2.5 items-start">
              <span className={`flex-shrink-0 w-6 h-6 rounded-lg text-xs font-semibold flex items-center justify-center ${
                selectedScore >= 7 ? 'bg-rose-400 text-white' : 'bg-stone-200 dark:bg-stone-800 text-stone-500'
              }`}>
                B
              </span>
              <p className="text-xs font-sans leading-relaxed">{currentQuestion.optionB}</p>
            </div>
          </div>
        </div>

        {/* 5-Grade Comfort Rating Slider */}
        <div id="test-slider-section" className="mb-10 pt-4 border-t border-dashed border-stone-100 dark:border-stone-900">
          <span className={`block text-xs font-medium mb-5 text-center ${isGarden ? 'text-stone-500' : 'text-stone-300'}`}>
            Seberapa kuat pilihan kecenderungan batinmu?
          </span>
          <div className="flex justify-between items-center gap-2 max-w-md mx-auto">
            {scoresConfig.map((sc) => {
              const isSelected = selectedScore === sc.value;
              const isOptionA = sc.value < 5;
              const isOptionB = sc.value > 5;
              const isNeutral = sc.value === 5;

              let dotColor = 'bg-stone-300';
              let ringColor = 'border-transparent';
              
              if (isSelected) {
                if (isNeutral) {
                  dotColor = 'bg-stone-500';
                  ringColor = 'ring-stone-200 border-stone-400 dark:ring-stone-800';
                } else if (isGarden) {
                  dotColor = 'bg-rose-400';
                  ringColor = 'ring-rose-100 border-rose-300';
                } else {
                  dotColor = 'bg-amber-600';
                  ringColor = 'ring-amber-900/20 border-amber-700';
                }
              }

              return (
                <div 
                  key={sc.value} 
                  id={`btn-score-${sc.value}`}
                  onClick={() => handleScoreClick(sc.value)}
                  className="flex flex-col items-center flex-1 cursor-pointer group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ring-4 ${ringColor}`}>
                    <div className={`w-3.5 h-3.5 rounded-full transition-all ${dotColor} group-hover:scale-110`} />
                  </div>
                  <span className={`text-[10px] font-semibold mt-2 text-center leading-none ${
                    isSelected 
                      ? isGarden ? 'text-rose-500 font-bold' : 'text-amber-400 font-bold'
                      : 'text-stone-400 dark:text-stone-600'
                  }`}>
                    {sc.label}
                  </span>
                  <span className="text-[8px] text-stone-300 dark:text-stone-700 mt-1 leading-none">{sc.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div id="test-controls-row" className="flex justify-between items-center pt-6 border-t border-stone-100 dark:border-stone-900">
          <button
            id="prev-q-btn"
            onClick={onPrevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              currentQuestionIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : isGarden
                  ? 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  : 'border-amber-950/20 text-[#FAF5EF] hover:bg-amber-950/20'
            }`}
          >
            <ChevronLeft size={16} />
            <span>Sebelumnya</span>
          </button>

          <button
            id="skip-q-btn"
            onClick={onSkipQuestion}
            className={`px-5 py-2 text-xs font-semibold rounded-xl hover:scale-[1.02] cursor-pointer transition-all ${
              isGarden 
                ? 'bg-rose-50/50 hover:bg-rose-100/30 text-rose-500 border border-rose-100' 
                : 'bg-amber-950/10 hover:bg-amber-950/30 text-amber-300 border border-amber-900/60'
            }`}
          >
            Sering Ragu-ragu (Lewati)
          </button>

          <button
            id="next-q-btn"
            onClick={onNextQuestion}
            className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-xl tracking-wide shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer ${
              isGarden 
                ? 'bg-rose-400 hover:bg-rose-500 text-white shadow-rose-100' 
                : 'bg-amber-800 hover:bg-amber-900 text-[#F9F6F0] shadow-amber-900/40'
            }`}
          >
            <span>{currentQuestionIndex === totalQuestions - 1 ? 'Lihat Hasil' : 'Berikutnya'}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
