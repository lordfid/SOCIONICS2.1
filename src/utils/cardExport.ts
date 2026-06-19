import type { FinalResult, ThemeMode } from "../types";
import { ELEMENT_LABEL, TIM_MODELS } from "../data/modelA";

export interface CardExportOptions {
  canvas: HTMLCanvasElement;
  result: FinalResult;
  nickname: string;
  theme: ThemeMode;
  photoDataUrl?: string;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function drawCoverImage(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const scale = Math.max(w / img.width, h / img.height);
  const sw = w / scale;
  const sh = h / scale;
  const sx = (img.width - sw) / 2;
  const sy = (img.height - sh) / 2;
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 26);
  ctx.clip();
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  ctx.restore();
}

function wrap(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines = 4) {
  const words = text.split(/\s+/);
  let line = "";
  let lines = 0;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      lines++;
      line = word;
      if (lines >= maxLines - 1) break;
    } else line = test;
  }
  if (line && lines < maxLines) ctx.fillText(line, x, y);
}

export async function drawResultCard({ canvas, result, nickname, theme, photoDataUrl }: CardExportOptions) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = 1080;
  const h = 1920;
  canvas.width = w;
  canvas.height = h;
  const dark = theme === "dark";
  const bg = dark ? "#15121d" : "#f7efe2";
  const card = dark ? "#211b2b" : "#fffaf1";
  const ink = dark ? "#fff7e8" : "#1c1724";
  const muted = dark ? "#c8b9a5" : "#675d55";
  const accent = dark ? "#d6a657" : "#8f442f";
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const grd = ctx.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, dark ? "#33223e" : "#fff3d8");
  grd.addColorStop(1, dark ? "#0f1823" : "#e8d6ba");
  ctx.fillStyle = grd;
  ctx.fillRect(46, 46, w - 92, h - 92);

  ctx.fillStyle = card;
  ctx.beginPath();
  ctx.roundRect(96, 122, w - 192, h - 244, 44);
  ctx.fill();

  ctx.fillStyle = accent;
  ctx.font = "700 34px Georgia, serif";
  ctx.fillText("SOCIONICS DALAM DIRIKU", 142, 210);
  ctx.font = "500 24px Segoe UI, sans-serif";
  ctx.fillStyle = muted;
  ctx.fillText("Kartu hasil Model A", 142, 248);

  if (photoDataUrl) {
    try {
      const img = await loadImage(photoDataUrl);
      drawCoverImage(ctx, img, 142, 310, 300, 390);
    } catch {
      ctx.fillStyle = dark ? "#3b3147" : "#eadbc6";
      ctx.beginPath();
      ctx.roundRect(142, 310, 300, 390, 26);
      ctx.fill();
    }
  } else {
    ctx.fillStyle = dark ? "#3b3147" : "#eadbc6";
    ctx.beginPath();
    ctx.roundRect(142, 310, 300, 390, 26);
    ctx.fill();
    ctx.fillStyle = muted;
    ctx.font = "600 28px Segoe UI, sans-serif";
    ctx.fillText("FOTO", 250, 520);
  }

  const model = TIM_MODELS[result.primary.type];
  ctx.fillStyle = ink;
  ctx.font = "700 82px Georgia, serif";
  ctx.fillText(result.primary.type, 492, 370);
  ctx.font = "700 34px Segoe UI, sans-serif";
  wrap(ctx, model.alias, 496, 424, 390, 42, 2);
  ctx.fillStyle = muted;
  ctx.font = "500 28px Segoe UI, sans-serif";
  wrap(ctx, model.name, 496, 526, 380, 36, 2);

  ctx.fillStyle = accent;
  ctx.font = "800 26px Segoe UI, sans-serif";
  ctx.fillText(`QUADRA ${model.quadra.toUpperCase()}`, 496, 650);
  ctx.fillText(`CONFIDENCE ${(result.confidence * 100).toFixed(0)}%`, 496, 692);

  ctx.strokeStyle = dark ? "#4d405e" : "#dbc6a8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(142, 760, 796, 314, 18);
  ctx.stroke();

  ctx.fillStyle = ink;
  ctx.font = "700 28px Segoe UI, sans-serif";
  ctx.fillText("MODEL A", 172, 815);
  ctx.font = "600 24px Segoe UI, sans-serif";
  const slots = [["Base", model.slots.base], ["Creative", model.slots.creative], ["Role", model.slots.role], ["PoLR", model.slots.polr], ["Suggestive", model.slots.suggestive], ["Mobilizing", model.slots.mobilizing], ["Ignoring", model.slots.ignoring], ["Demo", model.slots.demonstrative]];
  slots.forEach(([label, el], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 172 + col * 390;
    const y = 872 + row * 48;
    ctx.fillStyle = muted;
    ctx.fillText(label, x, y);
    ctx.fillStyle = ink;
    ctx.fillText(el, x + 170, y);
  });

  ctx.fillStyle = ink;
  ctx.font = "700 30px Segoe UI, sans-serif";
  ctx.fillText("Ranking Elemen", 142, 1160);
  result.elementRanking.slice(0, 5).forEach((row, i) => {
    const y = 1215 + i * 72;
    ctx.fillStyle = muted;
    ctx.font = "600 24px Segoe UI, sans-serif";
    ctx.fillText(`${i + 1}. ${row.element}`, 142, y);
    ctx.fillStyle = dark ? "#463850" : "#ead8bd";
    ctx.fillRect(240, y - 20, 520, 18);
    ctx.fillStyle = accent;
    ctx.fillRect(240, y - 20, Math.max(12, row.score * 520), 18);
    ctx.fillStyle = muted;
    ctx.font = "500 21px Segoe UI, sans-serif";
    ctx.fillText(ELEMENT_LABEL[row.element].split(",")[0], 790, y);
  });

  ctx.fillStyle = ink;
  ctx.font = "700 30px Segoe UI, sans-serif";
  ctx.fillText(nickname ? nickname.slice(0, 28) : "Pemilik kartu", 142, 1600);
  ctx.fillStyle = muted;
  ctx.font = "500 23px Segoe UI, sans-serif";
  ctx.fillText(`ID ${result.primary.type}-${Math.round(result.confidence * 100)}-${Date.now().toString(36).toUpperCase().slice(-5)}`, 142, 1642);
  ctx.fillText("Non-klinis • refleksi tipologi • disimpan lokal", 142, 1684);
}

export async function downloadCanvas(canvas: HTMLCanvasElement, filename: string) {
  const dataUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename.replace(/[^a-z0-9-_]/gi, "_").slice(0, 80) + ".png";
  link.click();
}
