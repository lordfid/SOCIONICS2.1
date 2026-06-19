import type { TestMode, TestSession } from "../types";
import { ALL_QUESTIONS, getCoreQuestions, getHoldoutQuestions } from "../data/questions";
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

function selectCoverageBase(seed: number) {
  const core = getCoreQuestions();
  const selected: string[] = [];
  for (const element of ELEMENTS) {
    for (const channel of CHANNELS) {
      const cell = core.filter((q) => q.element === element && q.channel === channel);
      const picked = shuffle(cell, seed + selected.length * 17)[0];
      if (picked) selected.push(picked.id);
    }
  }
  return selected;
}

export function createSession(mode: TestMode, nickname = ""): TestSession {
  const seed = Math.floor(Math.random() * 2 ** 31);
  const base = selectCoverageBase(seed);
  const target = targetCount(mode);
  const exclude = new Set(base);
  const extraCore = shuffle(getCoreQuestions().filter((q) => !exclude.has(q.id)), seed + 19).map((q) => q.id);
  const holdout = mode === "ringkas" ? [] : shuffle(getHoldoutQuestions(), seed + 41).map((q) => q.id);
  const full = [...base, ...extraCore, ...holdout].slice(0, target);
  const questionIds = spreadQuestions(full, seed + 97);
  const now = new Date().toISOString();
  return { id: `SDD-${seed.toString(16).toUpperCase()}`, version: VERSION, mode, seed, questionIds, currentIndex: 0, answers: {}, skippedIds: [], startedAt: now, lastUpdatedAt: now, nickname: nickname.trim().slice(0, 32) };
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
