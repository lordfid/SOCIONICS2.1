/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// === LEGACY TYPES PRESERVED FOR FULL COMPATIBILITY ===
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


// === NEW V3.5.0 COGNITIVE MODEL A TYPES ===
export type InformationElement = "Ne" | "Ni" | "Se" | "Si" | "Te" | "Ti" | "Fe" | "Fi";
export type MeasurementChannel = "producer" | "flexible" | "mask" | "threat" | "receiver" | "aspiration" | "dismissive" | "background";
export type ScaleType = "frequency" | "automaticity" | "comfort" | "competence" | "importance" | "threat" | "relief" | "recognition" | "comparison";
export type QuestionKind = "core" | "holdout" | "tie-break";
export type Quadra = "Alpha" | "Beta" | "Gamma" | "Delta";
export type SocionicsType = "ILE" | "SEI" | "ESE" | "LII" | "EIE" | "LSI" | "SLE" | "IEI" | "SEE" | "ILI" | "LIE" | "ESI" | "IEE" | "SLI" | "LSE" | "EII";
export type ModelASlot = "base" | "creative" | "role" | "polr" | "suggestive" | "mobilizing" | "ignoring" | "demonstrative";
export type TestMode = "ringkas" | "standar" | "mendalam";
export type ThemeMode = "dark" | "light";

export interface QuestionOption {
  value: 1 | 2 | 3 | 4 | 5;
  label: string;
  meaning: string;
  reaction: string;
}

export interface SocionicsQuestion {
  id: string;
  kind: QuestionKind;
  element: InformationElement;
  channel: MeasurementChannel;
  context: string;
  scale: ScaleType;
  statement: string;
  sourceSituation: string;
  sourceResponse: string;
  responseFocus: string;
  options: QuestionOption[];
  tieBreak?: { a: SocionicsType; b: SocionicsType };
}

export type Answers = Record<string, number>;

export interface TestSession {
  id: string;
  version: string;
  mode: TestMode;
  seed: number;
  questionIds: string[];
  currentIndex: number;
  answers: Answers;
  skippedIds: string[];
  startedAt: string;
  lastUpdatedAt: string;
  completedAt?: string;
  nickname?: string;
}

export interface TimModel {
  code: SocionicsType;
  name: string;
  alias: string;
  quadra: Quadra;
  temperament: string;
  slots: Record<ModelASlot, InformationElement>;
  tags: string[];
}

export interface CandidateScore {
  type: SocionicsType;
  name: string;
  quadra: Quadra;
  modelSimilarity: number;
  relativeSupport: number;
  holdoutSupport: number;
  tieBreakAdjustment: number;
  evidenceCells: number;
}

export interface ResponseQuality {
  answered: number;
  skipped: number;
  midpointRate: number;
  extremeRate: number;
  variation: number;
  straightlineRisk: number;
  minutesElapsed: number;
  speedFlag: "normal" | "terlalu-cepat" | "sangat-lambat";
}

export interface CoverageReport {
  answeredCells: number;
  totalCells: number;
  byElement: Record<InformationElement, number>;
  byChannel: Record<MeasurementChannel, number>;
  missingCells: string[];
}

export interface FinalResult {
  top3: CandidateScore[];
  primary: CandidateScore;
  confidence: number;
  confidenceLabel: "tidak cukup bukti" | "rendah" | "sedang" | "cukup kuat" | "kuat";
  confidenceExplanation: string;
  coverage: CoverageReport;
  responseQuality: ResponseQuality;
  channelProfile: Record<string, number>;
  elementRanking: Array<{ element: InformationElement; score: number }>;
  unresolvedPair?: [SocionicsType, SocionicsType];
  auditNotes: string[];
}
