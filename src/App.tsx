import React, { useState, useEffect } from 'react';
import { SOCIONICS_QUESTIONS } from './data/questions';
import { getFullSocionicsProfile } from './data/socionicsData';
import { ThemeType, Question, Profile } from './types';
import ThemeToggle from './components/ThemeToggle';
import WelcomeScreen from './components/WelcomeScreen';
import TestEngine from './components/TestEngine';
import ResultsDisplay from './components/ResultsDisplay';
import ReferenceSection from './components/ReferenceSection';

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('light-garden');
  const [step, setStep] = useState<'welcome' | 'testing' | 'results' | 'references'>('welcome');
  const [userName, setUserName] = useState('');
  const [testType, setTestType] = useState<'ringkas' | 'sedang' | 'penuh'>('sedang');
  
  // Custom sliced questions
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [computedProfile, setComputedProfile] = useState<Profile | null>(null);

  // Apply custom CSS variables for Pink Cream Garden vs Vintage Library themes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light-garden') {
      root.style.setProperty('--bg-app', '#FFF7F7');
      root.style.setProperty('--font-sans', '"Inter", sans-serif');
      root.style.setProperty('--font-serif', '"Playfair Display", serif');
      root.style.setProperty('--accent-glow', 'rgba(255, 182, 193, 0.4)');
      root.classList.remove('dark');
    } else {
      root.style.setProperty('--bg-app', '#120A07');
      root.style.setProperty('--font-sans', '"Fira Code", monospace');
      root.style.setProperty('--font-serif', 'Georgia, serif');
      root.style.setProperty('--accent-glow', 'rgba(139, 90, 43, 0.25)');
      root.classList.add('dark');
    }
  }, [theme]);

  // Handle triggering of test start
  const handleStartTest = (name: string, type: 'ringkas' | 'sedang' | 'penuh') => {
    setUserName(name);
    setTestType(type);
    
    // Slice question pool symmetrically across dimensions (EI, SN, FT, JP)
    const sizeMap = { ringkas: 5, sedang: 9, penuh: 12 };
    const itemsPerDimension = sizeMap[type];

    const sliced: Question[] = [];
    const dimensions: ('EI' | 'SN' | 'FT' | 'JP')[] = ['EI', 'SN', 'FT', 'JP'];

    dimensions.forEach(dim => {
      const dimFiltered = SOCIONICS_QUESTIONS.filter(q => q.dimension === dim);
      sliced.push(...dimFiltered.slice(0, itemsPerDimension));
    });

    // Shuffle slightly or keep ordered by dimensions alternatingly
    const alternated: Question[] = [];
    for (let i = 0; i < itemsPerDimension; i++) {
      dimensions.forEach(dim => {
        const dimQuestions = sliced.filter(q => q.dimension === dim);
        if (dimQuestions[i]) {
          alternated.push(dimQuestions[i]);
        }
      });
    }

    setActiveQuestions(alternated);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setStep('testing');
  };

  // Skip tracks a neutral 5 score and moves forward
  const handleSkipQuestion = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (q) {
      setAnswers(prev => ({ ...prev, [q.id]: 5 }));
      handleNextQuestion();
    }
  };

  // Navigations
  const handleSelectAnswer = (questionId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Core Scoring Engine & Dichotomy Converter based on average ratings
  const calculateResults = () => {
    // Collect average ratings per dimension
    const dimensions = {
      EI: { sum: 0, count: 0 },
      SN: { sum: 0, count: 0 },
      FT: { sum: 0, count: 0 },
      JP: { sum: 0, count: 0 }
    };

    activeQuestions.forEach(q => {
      const answerVal = answers[q.id] !== undefined ? answers[q.id] : 5; // default to neutral
      dimensions[q.dimension].sum += answerVal;
      dimensions[q.dimension].count += 1;
    });

    const average = (dim: 'EI' | 'SN' | 'FT' | 'JP') => {
      const d = dimensions[dim];
      return d.count > 0 ? d.sum / d.count : 5;
    };

    // Calculate dichotomy letters based on Filatova's original 5 threshold scale
    // Lower means Option A (Extraversion, Sensing, Feeling, Rational/J)
    // Higher means Option B (Introversion, Intuition, Thinking, Irrational/P)
    const e_i = average('EI') < 5 ? 'E' : 'I';
    const s_n = average('SN') < 5 ? 'S' : 'N';
    const f_t = average('FT') < 5 ? 'F' : 'T';
    const j_p = average('JP') < 5 ? 'J' : 'P';

    const dichotomyKey = `${e_i}${s_n}${f_t}${j_p}`;

    const mbtiToSocionics: Record<string, string> = {
      'ESFJ': 'ESE',
      'ISFJ': 'SEI',
      'ESTP': 'SLE',
      'ISTP': 'SLI',
      'ESFP': 'SEE',
      'ISFP': 'ESI',
      'ESTJ': 'LSE',
      'ISTJ': 'LSI',
      'ENFJ': 'EIE',
      'INFJ': 'IEI',
      'ENTP': 'ILE',
      'INTP': 'LII',
      'ENTJ': 'LIE',
      'INTJ': 'ILI',
      'ENFP': 'IEE',
      'INFP': 'EII'
    };

    const detectedType = mbtiToSocionics[dichotomyKey] || 'ILE';
    const profile = getFullSocionicsProfile(detectedType);
    setComputedProfile(profile);
    setStep('results');
  };

  return (
    <div 
      id="app-root-container"
      className="min-h-screen font-sans p-4 sm:p-6 transition-all duration-500 flex flex-col justify-between"
      style={{
        backgroundColor: 'var(--bg-app)',
        color: theme === 'light-garden' ? '#4A3525' : '#FAF3EE'
      }}
    >
      {/* Upper Navigation & Theme Changer */}
      <header id="app-nav-header" className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-4 border-b border-dashed border-stone-200 dark:border-stone-800">
        <div id="logo-block" className="flex items-center gap-2">
          {theme === 'light-garden' ? (
            <span className="text-xl">🌸</span>
          ) : (
            <span className="text-xl">🧭</span>
          )}
          <span 
            className="text-sm font-bold tracking-widest uppercase font-serif"
            style={{ fontFamily: theme === 'light-garden' ? '"Playfair Display", serif' : '"Cinzel", Georgia' }}
          >
            IndonSocionics
          </span>
        </div>

        <ThemeToggle currentTheme={theme} onChangeTheme={setTheme} />
      </header>

      {/* Dynamic Content Stages */}
      <main id="app-dynamic-stage" className="flex-grow flex items-center justify-center p-2 sm:p-4">
        {step === 'welcome' && (
          <WelcomeScreen 
            theme={theme}
            onStartTest={handleStartTest} 
            onViewReferences={() => setStep('references')} 
          />
        )}

        {step === 'testing' && (
          <TestEngine
            theme={theme}
            userName={userName}
            testType={testType}
            questions={activeQuestions}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onSkipQuestion={handleSkipQuestion}
          />
        )}

        {step === 'references' && (
          <ReferenceSection 
            theme={theme} 
            onBack={() => setStep('welcome')} 
          />
        )}

        {step === 'results' && computedProfile && (
          <ResultsDisplay
            theme={theme}
            userName={userName}
            profile={computedProfile}
            onRestart={() => setStep('welcome')}
          />
        )}
      </main>

      {/* Universal Footer */}
      <footer id="app-global-footer" className="w-full max-w-5xl mx-auto text-center py-6 mt-6 border-t border-dashed border-stone-200 dark:border-stone-900 text-[10px] text-stone-400 dark:text-stone-600 font-sans">
        <p>© 2026 Proyek Assesmen Kognitif Socionics Terpimpin Indonesia. Hak Cipta Dilindungi.</p>
        <p className="mt-1">Dibuat dengan cinta kasih batin untuk kawan-kawan penjelajah jati diri.</p>
      </footer>
    </div>
  );
}
