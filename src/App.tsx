import React, { useState, useEffect } from 'react';
import { ALL_QUESTIONS, QUESTION_BY_ID, getDiscriminatorsForPair } from './data/questions';
import { getFullSocionicsProfile } from './data/socionicsData';
import { ThemeType, TestSession, FinalResult } from './types';
import ThemeToggle from './components/ThemeToggle';
import WelcomeScreen from './components/WelcomeScreen';
import TestEngine from './components/TestEngine';
import ResultsDisplay from './components/ResultsDisplay';
import ReferenceSection from './components/ReferenceSection';
import { createSession, applyAnswer, applySkip, completeSession, loadSession, clearSession, saveSession } from './utils/session';
import { calculateFinalResult } from './scoring/engine';

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('light-garden');
  const [step, setStep] = useState<'welcome' | 'testing' | 'results' | 'references'>('welcome');
  const [session, setSession] = useState<TestSession | null>(null);
  const [computedResult, setComputedResult] = useState<FinalResult | null>(null);

  // Restore session from localStorage on application load
  useEffect(() => {
    const saved = loadSession();
    if (saved) {
      setSession(saved);
      if (saved.completedAt) {
        const res = calculateFinalResult(saved);
        setComputedResult(res);
        setStep('results');
      } else {
        setStep('testing');
      }
    }
  }, []);

  // Set CSS Variables depending on Vintage Library vs Pink Cream Garden theme
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

  // Handler for starting a test with nickname & mode
  const handleStartTest = (name: string, type: 'ringkas' | 'sedang' | 'penuh') => {
    const modeMap = {
      ringkas: 'ringkas',
      sedang: 'standar',
      penuh: 'mendalam'
    } as const;

    const newSession = createSession(modeMap[type], name);
    setSession(newSession);
    setComputedResult(null);
    setStep('testing');
  };

  // Skip moves a question, recording it as skipped (clearing any old answer) and shifting currentIndex
  const handleSkipQuestion = () => {
    if (!session) return;
    const currentQId = session.questionIds[session.currentIndex];
    const nextSession = applySkip(session, currentQId);
    setSession(nextSession);
  };

  // Selector update - records answers and auto-advances
  const handleSelectAnswer = (questionId: string, rating: number) => {
    if (!session) return;
    const nextSession = applyAnswer(session, questionId, rating, true);
    setSession(nextSession);
  };

  const handleNextQuestion = () => {
    if (!session) return;
    if (session.currentIndex === session.questionIds.length - 1) {
      // Check if tie-breaker is triggered
      const alreadyHasTieBreak = session.questionIds.some(id => id.startsWith('disc_') || id.startsWith('tb_dyn_'));
      if (!alreadyHasTieBreak) {
        // Calculate temporary scores on current answered questions
        const tempResult = calculateFinalResult(session);
        const top3 = tempResult.top3;
        if (top3 && top3.length >= 2) {
          const primary = top3[0];
          const second = top3[1];
          const gap = primary.modelSimilarity - second.modelSimilarity;
          if (gap < 0.035) {
            // Trigger tie break! Get questions for this primary-second pair
            const tieQuestions = getDiscriminatorsForPair(primary.type, second.type);
            if (tieQuestions && tieQuestions.length > 0) {
              const tieIds = tieQuestions.map(q => q.id);
              // Filter out duplicate ids if any
              const uniqueTieIds = tieIds.filter(id => !session.questionIds.includes(id));
              
              if (uniqueTieIds.length > 0) {
                const updatedSession: TestSession = {
                  ...session,
                  questionIds: [...session.questionIds, ...uniqueTieIds],
                  currentIndex: session.currentIndex + 1,
                  lastUpdatedAt: new Date().toISOString()
                };
                setSession(updatedSession);
                saveSession(updatedSession);
                return; // Stop and continue testing with new tie-breaker questions
              }
            }
          }
        }
      }

      handleCalculateResults();
    } else {
      setSession(prev => prev ? { ...prev, currentIndex: prev.currentIndex + 1 } : null);
    }
  };

  const handlePrevQuestion = () => {
    if (!session) return;
    setSession(prev => prev ? { ...prev, currentIndex: Math.max(0, prev.currentIndex - 1) } : null);
  };

  const handleCalculateResults = () => {
    if (!session) return;
    const finished = completeSession(session);
    setSession(finished);
    const res = calculateFinalResult(finished);
    setComputedResult(res);
    setStep('results');
  };

  const handleRestart = () => {
    clearSession();
    setSession(null);
    setComputedResult(null);
    setStep('welcome');
  };

  // Map values for the TestEngine props
  const activeQuestions = session ? session.questionIds.map(id => QUESTION_BY_ID.get(id)!) : [];
  const mappedTestType = session 
    ? (session.mode === 'ringkas' ? 'ringkas' : session.mode === 'standar' ? 'sedang' : 'penuh') 
    : 'sedang';

  return (
    <div 
      id="app-root-container"
      className="min-h-screen font-sans p-4 sm:p-6 transition-all duration-500 flex flex-col justify-between"
      style={{
        backgroundColor: 'var(--bg-app)',
        color: theme === 'light-garden' ? '#4A3525' : '#FAF3EE'
      }}
    >
      {/* Upper Navigation Header */}
      <header id="app-nav-header" className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-4 border-b border-dashed border-stone-200 dark:border-stone-800/40">
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

      {/* Dynamic Main App Section */}
      <main id="app-dynamic-stage" className="flex-grow flex items-center justify-center p-2 sm:p-4">
        {step === 'welcome' && (
          <WelcomeScreen 
            theme={theme}
            onStartTest={handleStartTest} 
            onViewReferences={() => setStep('references')} 
          />
        )}

        {step === 'testing' && session && (
          <TestEngine
            theme={theme}
            userName={session.nickname || "Sahabat"}
            testType={mappedTestType}
            questions={activeQuestions}
            currentQuestionIndex={session.currentIndex}
            answers={session.answers}
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

        {step === 'results' && computedResult && (
          <ResultsDisplay
            theme={theme}
            userName={session?.nickname || "Sahabat"}
            result={computedResult}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* Universal Footer */}
      <footer id="app-global-footer" className="w-full max-w-5xl mx-auto text-center py-6 mt-6 border-t border-dashed border-stone-200 dark:border-stone-800/30 text-[10px] text-stone-400 dark:text-stone-600 font-sans">
        <p>© 2026 Proyek Assesmen Kognitif Socionics Terpimpin Indonesia. Hak Cipta Dilindungi.</p>
        <p className="mt-1">Dibuat dengan cinta kasih batin untuk kawan-kawan penjelajah jati diri.</p>
      </footer>
    </div>
  );
}
