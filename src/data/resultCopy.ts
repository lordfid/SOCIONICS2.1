import type { InformationElement, ModelASlot, SocionicsType } from "../types";
import { ELEMENT_LABEL, SLOT_COPY, TIM_MODELS } from "./modelA";

export function openingMirror(type: SocionicsType): string {
  const model = TIM_MODELS[type];
  const { base, creative, polr, suggestive } = model.slots;
  return `Pola jawabanmu paling dekat dengan ${type}: ${model.alias}. Yang menonjol bukan hanya elemen ${base}, tetapi cara ${base} itu bertemu ${creative}: ${ELEMENT_LABEL[base]} dipakai sebagai pusat baca, lalu ${ELEMENT_LABEL[creative]} menjadi alat untuk merespons dunia secara fleksibel. Area ${polr} tampak lebih sensitif, sementara ${suggestive} muncul sebagai bentuk bantuan yang terasa melegakan di tengah situasi penuh tekanan.`;
}

export function slotInterpretation(type: SocionicsType, slot: ModelASlot): string {
  const el = TIM_MODELS[type].slots[slot];
  const intro = SLOT_COPY[slot];
  const label = ELEMENT_LABEL[el];
  const endings: Record<ModelASlot, string> = {
    base: `Saat sehat, bagian ini terasa seperti mata utama: kamu tidak perlu berusaha keras untuk melihat ${label}.`,
    creative: `Bagian ini memberi keluwesan: kamu dapat memakai ${label} sebagai alat, bukan sebagai beban identitas yang harus selalu dibuktikan.`,
    role: `Dari luar ini bisa terlihat cukup mampu, tetapi biasanya ada rasa memantau diri agar performanya tetap aman di mata sosial.`,
    polr: `Bila lingkungan memaksa bagian ini terlalu cepat, respons yang muncul bisa berupa tegang, defensif, membeku, atau menghindar.`,
    suggestive: `Bantuan di area ini sering terasa seperti napas lega: bukan menggurui, tetapi membuat hidup lebih mudah bergerak.`,
    mobilizing: `Ada dorongan ingin lebih percaya diri di sini; pujian yang tepat bisa terasa sangat menguatkan bagimu.`,
    ignoring: `Kamu bisa memahami area ini, tetapi cenderung tidak ingin menjadikannya pusat keputusan bila tidak perlu.`,
    demonstrative: `Kemampuan ini sering muncul sebagai dukungan latar: efektif, cepat, tetapi tidak selalu kamu anggap sebagai hal besar.`,
  };
  return `${intro.short}. Pada ${type}, posisi ini diisi ${el}: ${label}. ${endings[slot]}`;
}

export function reliefCopy(type: SocionicsType): string {
  const { polr, suggestive } = TIM_MODELS[type].slots;
  return `Kalau bagian ${polr} sering terasa terlalu menekan, itu tidak perlu langsung dibaca sebagai kegagalan batin. Dalam Model A, area rentan memang sering terasa tidak sebanding dengan tuntutan dunia. Yang jauh lebih membantu adalah mengenali bantuan ${suggestive}: bentuk dukungan yang memberi ruang kenyamanan, arah, atau pegangan tanpa membuatmu merasa kerdil atau direndahkan.`;
}

export function tensionCopy(type: SocionicsType): string {
  const { role, polr, mobilizing } = TIM_MODELS[type].slots;
  return `Titik tegang hasilmu berada di segitiga ${role}–${polr}–${mobilizing}: ada bagian yang bisa kamu tampilkan agar terlihat mumpuni, ada area yang mudah memicu kepanikan alarm, dan ada bagian yang sangat haus akan validasi. Saat tiga bagian ini bercampur, kamu bisa tampak lebih keras, lebih defensif, atau sengaja menghindar daripada yang sebenarnya kamu niatkan.`;
}

export function mysteryCopy(type: SocionicsType): string {
  const model = TIM_MODELS[type];
  return `Hasil ini paling berguna kalau dipakai sebagai peta observasi. Perhatikan kapan ${model.slots.base} muncul tanpa usaha, kapan ${model.slots.polr} membuat tubuh menegang, dan siapa yang membuat ${model.slots.suggestive} terasa aman. Di sanalah tipe tidak lagi menjadi label kaku, melainkan pola hidup yang dinamis.`;
}
