import React from 'react';
import { Sun, Notebook, Palette } from 'lucide-react';
import { ThemeType } from '../types';

interface ThemeToggleProps {
  currentTheme: ThemeType;
  onChangeTheme: (theme: ThemeType) => void;
}

export default function ThemeToggle({ currentTheme, onChangeTheme }: ThemeToggleProps) {
  return (
    <div 
      id="theme-selector-container"
      className="flex items-center gap-2 p-1 bg-opacity-10 dark:bg-opacity-20 rounded-full border shadow-sm transition-all duration-300 backdrop-blur-md"
      style={{
        backgroundColor: currentTheme === 'light-garden' ? 'rgba(255, 235, 235, 0.6)' : 'rgba(44, 24, 16, 0.4)',
        borderColor: currentTheme === 'light-garden' ? '#FFD1D1' : '#8C6A5C'
      }}
    >
      <button
        id="theme-btn-garden"
        onClick={() => onChangeTheme('light-garden')}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
          currentTheme === 'light-garden'
            ? 'bg-rose-400 text-white shadow-sm'
            : 'text-stone-500 hover:text-stone-700'
        }`}
      >
        <Sun size={14} className={currentTheme === 'light-garden' ? 'animate-spin-slow' : ''} />
        <span>Taman Pink Krem (Cute)</span>
      </button>

      <button
        id="theme-btn-library"
        onClick={() => onChangeTheme('dark-library')}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
          currentTheme === 'dark-library'
            ? 'bg-amber-800 text-[#F9F6F0] shadow-sm'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <Notebook size={14} />
        <span>Buku Coklat (Serius)</span>
      </button>
    </div>
  );
}
