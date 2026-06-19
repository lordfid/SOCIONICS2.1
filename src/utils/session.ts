import type { TestMode, TestSession, ScenarioCategory } from "../types";
import { ALL_QUESTIONS, getCoreQuestions, getHoldoutQuestions, getTieBreakQuestions } from "../data/questions";
import { CHANNELS, ELEMENTS } from "../data/modelA";

export const STORAGE_KEY = "socionics-dalam-diriku:v3.5:session";
export const VERSION = "3.5.0";

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  const random = mulberry32(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function targetCount(mode: TestMode) {
  return mode === "ringkas" ? 80 : mode === "standar" ? 128 : 224;
}

const CATEGORY_QUOTAS: Record<TestMode, Record<ScenarioCategory, number>> = {
  ringkas: {
    daily_basic: 11, chat_medsos: 7, asmara: 10, persahabatan: 8, keluarga: 7,
    sekolah: 7, kerja_shift: 7, kerja_kantor: 6, uang: 4, tubuh_lelah: 4,
    kegagalan: 5, duka: 4
  },
  standar: {
    daily_basic: 18, chat_medsos: 11, asmara: 16, persahabatan: 14, keluarga: 11,
    sekolah: 11, kerja_shift: 11, kerja_kantor: 9, uang: 7, tubuh_lelah: 7,
    kegagalan: 7, duka: 6
  },
  mendalam: {
    daily_basic: 32, chat_medsos: 20, asmara: 28, persahabatan: 24, keluarga: 20,
    sekolah: 20, kerja_shift: 20, kerja_kantor: 16, uang: 12, tubuh_lelah: 12,
    kegagalan: 12, duka: 8
  }
};

export function createSession(mode: TestMode, nickname = ""): TestSession {
  const seed = Math.floor(Math.random() * 2 ** 31);
  const target = targetCount(mode);
  const quotas = CATEGORY_QUOTAS[mode];

  // Group questions by category
  const candidatesByCategory: Record<ScenarioCategory, string[]> = {
    daily_basic: [], chat_medsos: [], asmara: [], persahabatan: [], keluarga: [],
    sekolah: [], kerja_shift: [], kerja_kantor: [], uang: [], tubuh_lelah: [],
    kegagalan: [], duka: []
  };

  const pool = ALL_QUESTIONS.filter((q) => q.kind !== "tie-break");
  pool.forEach((q) => {
    const cat = q.category || "daily_basic";
    candidatesByCategory[cat].push(q.id);
  });

  const selectedSet = new Set<string>();
  let catIndex = 0;

  // 1. Pull the quota amount from each category
  for (const [cat, quotaVal] of Object.entries(quotas)) {
    const scCat = cat as ScenarioCategory;
    const shuffledList = shuffle(candidatesByCategory[scCat], seed + catIndex * 53);
    const sliced = shuffledList.slice(0, quotaVal);
    sliced.forEach((id) => selectedSet.add(id));
    catIndex++;
  }

  // 2. Fallback check: If the total size is less than target, backfill from remaining pools
  if (selectedSet.size < target) {
    const remainingCandidates = pool
      .map((q) => q.id)
      .filter((id) => !selectedSet.add(id)); // Attempt addition and find rest
    const shuffledRemainder = shuffle(remainingCandidates, seed + 999);
    for (const id of shuffledRemainder) {
      if (selectedSet.size >= target) break;
      selectedSet.add(id);
    }
  }

  // 3. Fallback check: If the total size is more than target (e.g. duplicate set additions or overrides), slice back to target
  let fullList = Array.from(selectedSet);
  if (fullList.length > target) {
    fullList = shuffle(fullList, seed + 1234).slice(0, target);
  }

  const questionIds = spreadQuestions(fullList, seed + 97);
  const now = new Date().toISOString();

  return {
    id: `SDD-${seed.toString(16).toUpperCase()}`,
    version: VERSION,
    mode,
    seed,
    questionIds,
    currentIndex: 0,
    answers: {},
    skippedIds: [],
    startedAt: now,
    lastUpdatedAt: now,
    nickname: nickname.trim().slice(0, 32)
  };
}

function spreadQuestions(ids: string[], seed: number) {
  const byId = new Map(ALL_QUESTIONS.map((q) => [q.id, q]));
  const pool = shuffle(ids, seed);
  const result: string[] = [];
  while (pool.length) {
    const last = result.slice(-2).map((id) => byId.get(id));
    const idx = pool.findIndex((id) => {
      const q = byId.get(id);
      return q && !last.some((p) => p && (p.element === q.element || p.channel === q.channel));
    });
    const chosen = idx >= 0 ? pool.splice(idx, 1)[0] : pool.shift();
    if (chosen) result.push(chosen);
  }
  return result;
}

export function saveSession(session: TestSession) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function loadSession(): TestSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TestSession;
    if (parsed.version !== VERSION) return null;
    if (!Array.isArray(parsed.questionIds) || !parsed.questionIds.every((id) => ALL_QUESTIONS.some((q) => q.id === id))) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY);
}

export function applyAnswer(session: TestSession, questionId: string, rating: number, advance = true): TestSession {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new RangeError("Rating harus 1 sampai 5.");
  if (!session.questionIds.includes(questionId)) throw new Error("Pertanyaan tidak ada di sesi aktif.");
  const next: TestSession = { ...session, answers: { ...session.answers, [questionId]: rating }, skippedIds: session.skippedIds.filter((id) => id !== questionId), currentIndex: advance ? Math.min(session.currentIndex + 1, session.questionIds.length - 1) : session.currentIndex, lastUpdatedAt: new Date().toISOString() };
  saveSession(next);
  return next;
}

export function applySkip(session: TestSession, questionId: string): TestSession {
  if (!session.questionIds.includes(questionId)) throw new Error("Pertanyaan tidak ada di sesi aktif.");
  const { [questionId]: _removed, ...answers } = session.answers;
  const next: TestSession = { ...session, answers, skippedIds: Array.from(new Set([...session.skippedIds, questionId])), currentIndex: Math.min(session.currentIndex + 1, session.questionIds.length - 1), lastUpdatedAt: new Date().toISOString() };
  saveSession(next);
  return next;
}

export function completeSession(session: TestSession): TestSession {
  const next = { ...session, completedAt: new Date().toISOString(), lastUpdatedAt: new Date().toISOString() };
  saveSession(next);
  return next;
}
