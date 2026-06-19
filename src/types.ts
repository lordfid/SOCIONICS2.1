/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: string;
  dimension: 'EI' | 'JP' | 'FT' | 'SN'; // E/I, J/P, F/T, S/N
  text: string;
  optionA: string; // Corresponds to scores 1, 3 (Strong A, Mild A)
  optionB: string; // Corresponds to scores 7, 9 (Mild B, Strong B)
}

export type QuadraType = 'Alpha' | 'Beta' | 'Gamma' | 'Delta';

export interface ModelAPosition {
  position: number; // 1 to 8
  name: string; // e.g., Base, Creative, Role, Vulnerable, dsb.
  element: string; // e.g., Ne, Ti, Fe, Si
  description: string;
}

export interface IntertypeRelation {
  targetType: string;
  relationName: string;
  relationType: string; // e.g., Duality, Activation, Conflict, Supervision, dsb.
  compatibilityPercent: number;
  description: string;
}

export interface Profile {
  id: string; // Standard 3-letter acronym (e.g., ILE, SEI, LII, ESE)
  fullname: string; // e.g., Intuitive Logical Extratim
  alias: string; // e.g., Seekers, Don Quixote
  quadra: QuadraType;
  mbtiEquivalent: string;
  enneagramTrend: string;
  modelA: ModelAPosition[];
  description: string;
  stereotypes: string[];
  vibe: string;
  hiddenThoughts: string;
  pros: string[];
  cons: string[];
  roast: string;
  brutalConclusion: string;
  
  // Recommendations (Pleasure-focused)
  recommendations: {
    books: string[];
    movies: string[];
    music: string[];
    careers: string[];
    destinations: string[];
    gifts: string[];
    healthyCircles: string;
    experiment7Days: string[];
    hobbies: string[];
    appearanceTips: string;
    roleModels: string[];
  };

  // Human behavior dynamics (Situational state representation)
  behavioralDynamics: {
    lifestyle: string;
    thinkingStyle: string;
    interpersonalApproach: string; // gaya dekat, menjauh, dan memilih orang
    worldview: string; // gaya melihat dunia, politik, agama, ekonomi, dan sosial
    angerStyle: string; // gaya marah yang keluar & yang disarankan
    affectionStyle: string; // gaya memberi kasih sayang
    animosityStyle: string; // gaya membenci dan memusuhi
    envyStyle: string; // gaya iri & saran
    ambitionStyle: string; // gaya ambisi & saran
  };
}

export interface TestState {
  answers: Record<string, number>; // questionId -> selected score (1, 3, 5, 7, 9)
  currentQuestionIndex: number;
  userName: string;
  testType: 'ringkas' | 'sedang' | 'penuh';
}

export type ThemeType = 'light-garden' | 'dark-library';
