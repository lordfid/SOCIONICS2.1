import type { Answers, CandidateScore, CoverageReport, FinalResult, InformationElement, MeasurementChannel, ResponseQuality, SocionicsType, TestSession, ModelASlot } from "../types";
import { ALL_QUESTIONS, QUESTION_BY_ID } from "../data/questions";
import { CHANNELS, CHANNEL_TO_SLOT, ELEMENTS, getModelCellKey, SLOT_TO_CHANNEL, TIM_MODELS, TIM_ORDER } from "../data/modelA";

const SLOT_PROTOTYPES: Record<ModelASlot, Record<MeasurementChannel, number>> = {
  base: { producer: 1.00, flexible: 0.45, mask: -0.15, threat: -0.75, receiver: -0.45, aspiration: 0.10, dismissive: -0.15, background: 0.35 },
  creative: { producer: 0.55, flexible: 1.00, mask: -0.10, threat: -0.55, receiver: -0.25, aspiration: 0.20, dismissive: 0.05, background: 0.40 },
  role: { producer: -0.15, flexible: -0.10, mask: 1.00, threat: -0.15, receiver: -0.45, aspiration: -0.20, dismissive: -0.30, background: -0.15 },
  polr: { producer: -0.75, flexible: -0.55, mask: -0.15, threat: 1.00, receiver: -0.15, aspiration: -0.45, dismissive: -0.45, background: -0.55 },
  suggestive: { producer: -0.45, flexible: -0.25, mask: -0.45, threat: -0.15, receiver: 1.00, aspiration: 0.35, dismissive: -0.10, background: -0.25 },
  mobilizing: { producer: 0.10, flexible: 0.20, mask: -0.15, threat: -0.45, receiver: 0.35, aspiration: 1.00, dismissive: -0.15, background: 0.15 },
  ignoring: { producer: -0.15, flexible: 0.05, mask: -0.30, threat: -0.45, receiver: -0.10, aspiration: -0.15, dismissive: 1.00, background: 0.55 },
  demonstrative: { producer: 0.35, flexible: 0.40, mask: -0.15, threat: -0.55, receiver: -0.25, aspiration: 0.15, dismissive: 0.55, background: 1.00 }
};

const VERSION = "3.5.0";
const CORE_WEIGHT = 0.88;
const HOLDOUT_MAX_WEIGHT = 0.12;
const TIE_BREAK_LIMIT = 0.02;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function answerToSignal(rating: number): number {
  return clamp((rating - 3) / 2, -1, 1);
}

function emptyElementRecord(): Record<InformationElement, number> {
  return { Ne: 0, Ni: 0, Se: 0, Si: 0, Te: 0, Ti: 0, Fe: 0, Fi: 0 };
}

function emptyChannelRecord(): Record<MeasurementChannel, number> {
  return { producer: 0, flexible: 0, mask: 0, threat: 0, receiver: 0, aspiration: 0, dismissive: 0, background: 0 };
}

function summarizeQuality(session: TestSession): ResponseQuality {
  const values = Object.values(session.answers);
  const answered = values.length;
  const skipped = session.skippedIds.length;
  const midpointRate = answered ? values.filter((v) => v === 3).length / answered : 1;
  const extremeRate = answered ? values.filter((v) => v === 1 || v === 5).length / answered : 0;
  const mean = answered ? values.reduce((a, b) => a + b, 0) / answered : 3;
  const variation = answered ? Math.sqrt(values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / answered) : 0;
  const straightlineRisk = answered < 12 ? 1 : clamp(1 - variation / 1.25, 0, 1);
  const minutesElapsed = (Date.now() - new Date(session.startedAt).getTime()) / 60000;
  const perItem = answered ? minutesElapsed / answered : 0;
  const speedFlag = answered > 10 && perItem < 0.035 ? "terlalu-cepat" : perItem > 2 ? "sangat-lambat" : "normal";
  return { answered, skipped, midpointRate, extremeRate, variation, straightlineRisk, minutesElapsed, speedFlag };
}

function collectProfile(answers: Answers, kinds: Array<"core" | "holdout">) {
  const sums = new Map<string, number>();
  const counts = new Map<string, number>();
  for (const [questionId, rating] of Object.entries(answers)) {
    const q = QUESTION_BY_ID.get(questionId);
    if (!q || !kinds.includes(q.kind as "core" | "holdout")) continue;
    const key = getModelCellKey(q.element, q.channel);
    sums.set(key, (sums.get(key) ?? 0) + answerToSignal(rating));
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  const profile: Record<string, number> = {};
  for (const [key, sum] of sums) profile[key] = sum / (counts.get(key) || 1);
  return { profile, counts };
}

function expectedVector(type: SocionicsType): Record<string, number> {
  const model = TIM_MODELS[type];
  const expected: Record<string, number> = {};
  for (const element of ELEMENTS) {
    for (const channel of CHANNELS) {
      expected[getModelCellKey(element, channel)] = 0;
    }
  }
  for (const [slot, element] of Object.entries(model.slots)) {
    const slotName = slot as ModelASlot;
    const prototype = SLOT_PROTOTYPES[slotName];
    for (const channel of CHANNELS) {
      expected[getModelCellKey(element, channel)] = prototype[channel];
    }
  }
  return expected;
}

function fitToExpected(profile: Record<string, number>, counts: Map<string, number>, type: SocionicsType) {
  const expected = expectedVector(type);
  let weightedError = 0;
  let totalWeight = 0;
  let cells = 0;
  for (const key of Object.keys(profile)) {
    if (!counts.has(key)) continue;
    const observed = clamp(profile[key], -1, 1);
    const exp = expected[key] ?? 0;
    const [element, channel] = key.split(":") as [InformationElement, MeasurementChannel];
    const channelWeight = channel === "threat" || channel === "receiver" ? 1.2 : 1;
    const replication = Math.min(1.35, 0.75 + (counts.get(key) ?? 1) * 0.15);
    const weight = channelWeight * replication;
    const error = Math.pow(observed - exp, 2);
    weightedError += error * weight;
    totalWeight += weight;
    if (element && channel) cells++;
  }
  if (!totalWeight) return { similarity: 0, cells: 0 };
  const rmse = Math.sqrt(weightedError / totalWeight);
  return { similarity: clamp(1 - rmse / 1.35, 0, 1), cells };
}

function tieBreakAdjustment(answers: Answers, type: SocionicsType) {
  let adjustment = 0;
  for (const [questionId, rating] of Object.entries(answers)) {
    const q = QUESTION_BY_ID.get(questionId);
    if (!q || q.kind !== "tie-break" || !q.tieBreak) continue;
    const signal = answerToSignal(rating) * TIE_BREAK_LIMIT;
    if (q.tieBreak.a === type) adjustment += signal;
    if (q.tieBreak.b === type) adjustment -= signal;
  }
  return clamp(adjustment, -TIE_BREAK_LIMIT, TIE_BREAK_LIMIT);
}

function coverageFromCounts(counts: Map<string, number>): CoverageReport {
  const byElement = emptyElementRecord();
  const byChannel = emptyChannelRecord();
  const missingCells: string[] = [];
  for (const element of ELEMENTS) {
    for (const channel of CHANNELS) {
      const key = getModelCellKey(element, channel);
      const value = counts.get(key) ?? 0;
      if (!value) missingCells.push(key);
      byElement[element] += value > 0 ? 1 : 0;
      byChannel[channel] += value > 0 ? 1 : 0;
    }
  }
  return { answeredCells: 64 - missingCells.length, totalCells: 64, byElement, byChannel, missingCells };
}

function elementRanking(profile: Record<string, number>) {
  const rows = ELEMENTS.map((element) => {
    let sum = 0;
    let count = 0;
    for (const channel of CHANNELS) {
      const value = profile[getModelCellKey(element, channel)];
      if (typeof value === "number") {
        sum += Math.max(0, value);
        count++;
      }
    }
    return { element, score: count ? sum / count : 0 };
  });
  return rows.sort((a, b) => b.score - a.score);
}

function elementStrengthRanking(profile: Record<string, number>) {
  const rows = ELEMENTS.map((element) => {
    const producerVal = Math.max(0, profile[getModelCellKey(element, "producer")] ?? 0);
    const flexibleVal = Math.max(0, profile[getModelCellKey(element, "flexible")] ?? 0);
    const backgroundVal = Math.max(0, profile[getModelCellKey(element, "background")] ?? 0);
    const score = (producerVal + flexibleVal + backgroundVal) / 3;
    return { element, score };
  });
  return rows.sort((a, b) => b.score - a.score);
}

function elementValuedRanking(profile: Record<string, number>) {
  const rows = ELEMENTS.map((element) => {
    const producerVal = Math.max(0, profile[getModelCellKey(element, "producer")] ?? 0);
    const flexibleVal = Math.max(0, profile[getModelCellKey(element, "flexible")] ?? 0);
    const receiverVal = Math.max(0, profile[getModelCellKey(element, "receiver")] ?? 0);
    const aspirationVal = Math.max(0, profile[getModelCellKey(element, "aspiration")] ?? 0);
    const score = (producerVal + flexibleVal + receiverVal + aspirationVal) / 4;
    return { element, score };
  });
  return rows.sort((a, b) => b.score - a.score);
}

function elementPainRanking(profile: Record<string, number>) {
  const rows = ELEMENTS.map((element) => {
    const score = Math.max(0, profile[getModelCellKey(element, "threat")] ?? 0);
    return { element, score };
  });
  return rows.sort((a, b) => b.score - a.score);
}

function elementReliefRanking(profile: Record<string, number>) {
  const rows = ELEMENTS.map((element) => {
    const score = Math.max(0, profile[getModelCellKey(element, "receiver")] ?? 0);
    return { element, score };
  });
  return rows.sort((a, b) => b.score - a.score);
}

function confidenceLabel(score: number): FinalResult["confidenceLabel"] {
  if (score < 0.25) return "tidak cukup bukti";
  if (score < 0.42) return "rendah";
  if (score < 0.62) return "sedang";
  if (score < 0.78) return "cukup kuat";
  return "kuat";
}

export function calculateFinalResult(session: TestSession): FinalResult {
  const core = collectProfile(session.answers, ["core"]);
  const holdout = collectProfile(session.answers, ["holdout"]);
  const coverage = coverageFromCounts(core.counts);
  const quality = summarizeQuality(session);
  const coreCoverage = coverage.answeredCells / coverage.totalCells;
  const holdoutAnswered = Array.from(holdout.counts.values()).reduce((a, b) => a + b, 0);
  const holdoutWeight = Math.min(HOLDOUT_MAX_WEIGHT, holdoutAnswered / 80);

  const rawScores = TIM_ORDER.map((type) => {
    const coreFit = fitToExpected(core.profile, core.counts, type);
    const holdoutFit = fitToExpected(holdout.profile, holdout.counts, type);
    const tie = tieBreakAdjustment(session.answers, type);
    const modelSimilarity = clamp(coreFit.similarity * CORE_WEIGHT + holdoutFit.similarity * holdoutWeight + tie, 0, 1);
    return { type, coreFit, holdoutFit, tie, modelSimilarity };
  }).sort((a, b) => b.modelSimilarity - a.modelSimilarity);

  const min = rawScores[rawScores.length - 1]?.modelSimilarity ?? 0;
  const supportDenominator = rawScores.reduce((sum, row) => sum + Math.max(0.0001, row.modelSimilarity - min + 0.02), 0);
  const candidateScores: CandidateScore[] = rawScores.map((row) => ({
    type: row.type,
    name: TIM_MODELS[row.type].name,
    quadra: TIM_MODELS[row.type].quadra,
    modelSimilarity: row.modelSimilarity,
    relativeSupport: Math.max(0.0001, row.modelSimilarity - min + 0.02) / supportDenominator,
    holdoutSupport: row.holdoutFit.similarity,
    tieBreakAdjustment: row.tie,
    evidenceCells: row.coreFit.cells,
  }));

  const primary = candidateScores[0];
  const second = candidateScores[1];
  const gap = primary && second ? primary.modelSimilarity - second.modelSimilarity : 0;
  const qualityPenalty = quality.straightlineRisk * 0.16 + quality.midpointRate * 0.08 + (quality.speedFlag === "terlalu-cepat" ? 0.12 : 0);
  const baseConfidence = 0.22 + coreCoverage * 0.42 + clamp(gap * 2.4, 0, 0.26) + clamp(holdoutAnswered / 32, 0, 1) * 0.1;
  const confidence = clamp(baseConfidence - qualityPenalty, 0, 1);
  const label = confidenceLabel(confidence);
  const auditNotes: string[] = [];
  if (coverage.answeredCells < 48) auditNotes.push("Cakupan bukti masih tipis; hasil perlu dibaca sebagai hipotesis awal.");
  if (gap < 0.035) auditNotes.push("Kandidat pertama dan kedua sangat berdekatan; baca Top 3, bukan hanya tipe utama.");
  if (quality.straightlineRisk > 0.75) auditNotes.push("Pola jawaban terlalu seragam, sehingga confidence diturunkan.");
  if (quality.midpointRate > 0.55) auditNotes.push("Terlalu banyak jawaban tengah; hasil lebih aman dibaca sebagai arah umum.");
  if (quality.speedFlag === "terlalu-cepat") auditNotes.push("Waktu pengerjaan sangat cepat; sebagian sinyal mungkin kurang stabil.");
  if (!quality.answered) auditNotes.push("Belum ada jawaban yang cukup untuk membaca tipe.");

  const confidenceExplanation = label === "tidak cukup bukti"
    ? "Bukti belum cukup tersebar untuk memberi pembacaan tipe yang bertanggung jawab."
    : label === "kuat"
      ? "Pola 64 kanal, jarak kandidat, dan kualitas respons cukup selaras. Tetap baca sebagai indeks internal, bukan probabilitas ilmiah."
      : "Ada pola yang terbaca, tetapi beberapa kandidat masih berdekatan atau cakupan belum sepenuhnya padat.";

  return {
    top3: candidateScores.slice(0, 3),
    primary,
    confidence,
    confidenceLabel: label,
    confidenceExplanation,
    coverage,
    responseQuality: quality,
    channelProfile: core.profile,
    elementRanking: elementRanking(core.profile),
    elementStrengthRanking: elementStrengthRanking(core.profile),
    elementValuedRanking: elementValuedRanking(core.profile),
    elementPainRanking: elementPainRanking(core.profile),
    elementReliefRanking: elementReliefRanking(core.profile),
    unresolvedPair: gap < 0.035 && second ? [primary.type, second.type] : undefined,
    auditNotes,
  };
}

export { VERSION };
