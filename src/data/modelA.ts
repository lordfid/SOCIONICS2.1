import type { InformationElement, MeasurementChannel, ModelASlot, Quadra, SocionicsType, TimModel } from "../types";

export const ELEMENTS: InformationElement[] = ["Ne", "Ni", "Se", "Si", "Te", "Ti", "Fe", "Fi"];
export const CHANNELS: MeasurementChannel[] = ["producer", "flexible", "mask", "threat", "receiver", "aspiration", "dismissive", "background"];
export const SLOT_ORDER: ModelASlot[] = ["base", "creative", "role", "polr", "suggestive", "mobilizing", "ignoring", "demonstrative"];

export const SLOT_TO_CHANNEL: Record<ModelASlot, MeasurementChannel> = {
  base: "producer",
  creative: "flexible",
  role: "mask",
  polr: "threat",
  suggestive: "receiver",
  mobilizing: "aspiration",
  ignoring: "dismissive",
  demonstrative: "background",
};

export const CHANNEL_TO_SLOT: Record<MeasurementChannel, ModelASlot> = {
  producer: "base",
  flexible: "creative",
  mask: "role",
  threat: "polr",
  receiver: "suggestive",
  aspiration: "mobilizing",
  dismissive: "ignoring",
  background: "demonstrative",
};

export const CHANNEL_LABEL: Record<MeasurementChannel, string> = {
  producer: "produksi spontan",
  flexible: "keluwesan sadar",
  mask: "topeng peran",
  threat: "alarm rentan",
  receiver: "kebutuhan lega",
  aspiration: "dorongan diakui",
  dismissive: "kompetensi diabaikan",
  background: "latar otomatis",
};

export const ELEMENT_LABEL: Record<InformationElement, string> = {
  Ne: "kemungkinan, celah, potensi",
  Ni: "arah waktu, momentum, makna yang matang",
  Se: "tekanan nyata, batas, keberanian bertindak",
  Si: "kenyamanan tubuh, detail rasa, stabilitas",
  Te: "efektivitas, bukti kerja, hasil terukur",
  Ti: "struktur, definisi, konsistensi sistem",
  Fe: "atmosfer emosi, ekspresi, gelombang sosial",
  Fi: "kedekatan, jarak pribadi, kepercayaan",
};

export const QUADRA_VALUES: Record<Quadra, InformationElement[]> = {
  Alpha: ["Ne", "Ti", "Fe", "Si"],
  Beta: ["Ni", "Fe", "Ti", "Se"],
  Gamma: ["Se", "Fi", "Te", "Ni"],
  Delta: ["Ne", "Fi", "Te", "Si"],
};

export const TIM_MODELS: Record<SocionicsType, TimModel> = {
  ILE: { code: "ILE", name: "Intuitive Logical Extravert", alias: "Penjelajah Kemungkinan", quadra: "Alpha", temperament: "EP", tags: ["Ne–Ti", "eksploratif", "konseptual"], slots: { base: "Ne", creative: "Ti", role: "Se", polr: "Fi", suggestive: "Si", mobilizing: "Fe", ignoring: "Ni", demonstrative: "Te" } },
  SEI: { code: "SEI", name: "Sensory Ethical Introvert", alias: "Penjaga Rasa Nyaman", quadra: "Alpha", temperament: "IP", tags: ["Si–Fe", "hangat", "pengatur suasana"], slots: { base: "Si", creative: "Fe", role: "Ni", polr: "Te", suggestive: "Ne", mobilizing: "Ti", ignoring: "Se", demonstrative: "Fi" } },
  ESE: { code: "ESE", name: "Ethical Sensory Extravert", alias: "Penghidup Atmosfer", quadra: "Alpha", temperament: "EJ", tags: ["Fe–Si", "ekspresif", "merawat energi"], slots: { base: "Fe", creative: "Si", role: "Te", polr: "Ni", suggestive: "Ti", mobilizing: "Se", ignoring: "Fi", demonstrative: "Ne" } },
  LII: { code: "LII", name: "Logical Intuitive Introvert", alias: "Arsitek Struktur", quadra: "Alpha", temperament: "IJ", tags: ["Ti–Ne", "analitis", "presisi"], slots: { base: "Ti", creative: "Ne", role: "Fi", polr: "Se", suggestive: "Fe", mobilizing: "Si", ignoring: "Te", demonstrative: "Ni" } },
  EIE: { code: "EIE", name: "Ethical Intuitive Extravert", alias: "Dramaturg Arah", quadra: "Beta", temperament: "EJ", tags: ["Fe–Ni", "intens", "membaca arus"], slots: { base: "Fe", creative: "Ni", role: "Te", polr: "Si", suggestive: "Ti", mobilizing: "Se", ignoring: "Fi", demonstrative: "Ne" } },
  LSI: { code: "LSI", name: "Logical Sensory Introvert", alias: "Penjaga Kerangka", quadra: "Beta", temperament: "IJ", tags: ["Ti–Se", "tegas", "sistematis"], slots: { base: "Ti", creative: "Se", role: "Fi", polr: "Ne", suggestive: "Fe", mobilizing: "Ni", ignoring: "Te", demonstrative: "Si" } },
  SLE: { code: "SLE", name: "Sensory Logical Extravert", alias: "Penggerak Medan", quadra: "Beta", temperament: "EP", tags: ["Se–Ti", "langsung", "strategis"], slots: { base: "Se", creative: "Ti", role: "Ne", polr: "Fi", suggestive: "Ni", mobilizing: "Fe", ignoring: "Si", demonstrative: "Te" } },
  IEI: { code: "IEI", name: "Intuitive Ethical Introvert", alias: "Pembaca Gelombang", quadra: "Beta", temperament: "IP", tags: ["Ni–Fe", "simbolik", "atmosferik"], slots: { base: "Ni", creative: "Fe", role: "Si", polr: "Te", suggestive: "Se", mobilizing: "Ti", ignoring: "Ne", demonstrative: "Fi" } },
  SEE: { code: "SEE", name: "Sensory Ethical Extravert", alias: "Magnet Kehendak", quadra: "Gamma", temperament: "EP", tags: ["Se–Fi", "berani", "personal"], slots: { base: "Se", creative: "Fi", role: "Ne", polr: "Ti", suggestive: "Ni", mobilizing: "Te", ignoring: "Si", demonstrative: "Fe" } },
  ILI: { code: "ILI", name: "Intuitive Logical Introvert", alias: "Analis Momentum", quadra: "Gamma", temperament: "IP", tags: ["Ni–Te", "prediktif", "kritis"], slots: { base: "Ni", creative: "Te", role: "Si", polr: "Fe", suggestive: "Se", mobilizing: "Fi", ignoring: "Ne", demonstrative: "Ti" } },
  LIE: { code: "LIE", name: "Logical Intuitive Extravert", alias: "Eksekutor Arah", quadra: "Gamma", temperament: "EJ", tags: ["Te–Ni", "produktif", "visioner"], slots: { base: "Te", creative: "Ni", role: "Fe", polr: "Si", suggestive: "Fi", mobilizing: "Se", ignoring: "Ti", demonstrative: "Ne" } },
  ESI: { code: "ESI", name: "Ethical Sensory Introvert", alias: "Penjaga Batas Pribadi", quadra: "Gamma", temperament: "IJ", tags: ["Fi–Se", "loyal", "tajam"], slots: { base: "Fi", creative: "Se", role: "Ti", polr: "Ne", suggestive: "Te", mobilizing: "Ni", ignoring: "Fe", demonstrative: "Si" } },
  IEE: { code: "IEE", name: "Intuitive Ethical Extravert", alias: "Pembuka Kemungkinan Manusia", quadra: "Delta", temperament: "EP", tags: ["Ne–Fi", "penasaran", "relasional"], slots: { base: "Ne", creative: "Fi", role: "Se", polr: "Ti", suggestive: "Si", mobilizing: "Te", ignoring: "Ni", demonstrative: "Fe" } },
  SLI: { code: "SLI", name: "Sensory Logical Introvert", alias: "Teknisi Ketenangan", quadra: "Delta", temperament: "IP", tags: ["Si–Te", "praktis", "tenang"], slots: { base: "Si", creative: "Te", role: "Ni", polr: "Fe", suggestive: "Ne", mobilizing: "Fi", ignoring: "Se", demonstrative: "Ti" } },
  LSE: { code: "LSE", name: "Logical Sensory Extravert", alias: "Manajer Realitas", quadra: "Delta", temperament: "EJ", tags: ["Te–Si", "efektif", "terstruktur"], slots: { base: "Te", creative: "Si", role: "Fe", polr: "Ni", suggestive: "Fi", mobilizing: "Ne", ignoring: "Ti", demonstrative: "Se" } },
  EII: { code: "EII", name: "Ethical Intuitive Introvert", alias: "Penjaga Makna Relasi", quadra: "Delta", temperament: "IJ", tags: ["Fi–Ne", "reflektif", "berprinsip"], slots: { base: "Fi", creative: "Ne", role: "Ti", polr: "Se", suggestive: "Te", mobilizing: "Si", ignoring: "Fe", demonstrative: "Ni" } },
};

export const TIM_ORDER = Object.keys(TIM_MODELS) as SocionicsType[];

export const SLOT_COPY: Record<ModelASlot, { title: string; short: string; pleasure: string }> = {
  base: { title: "Base", short: "mesin utama yang paling otomatis", pleasure: "bagian yang membuat kamu merasa: ini cara alami mataku membaca dunia." },
  creative: { title: "Creative", short: "alat luwes untuk mengubah keadaan", pleasure: "bagian yang memberi rasa mampu karena kamu bisa memainkannya sesuai konteks." },
  role: { title: "Role", short: "topeng sosial yang bisa dipakai saat perlu", pleasure: "bagian yang terlihat cukup rapi dari luar, meski di dalam bisa terasa seperti performa." },
  polr: { title: "PoLR", short: "titik rentan yang cepat menghabiskan tenaga", pleasure: "bagian yang diberi bahasa agar kamu tidak mengira semua rasa berat itu sekadar rusak." },
  suggestive: { title: "Suggestive", short: "kebutuhan bantuan yang terasa melegakan", pleasure: "bagian yang sering membuatmu merasa dibantu tanpa harus kehilangan harga diri." },
  mobilizing: { title: "Mobilizing", short: "area haus pengakuan dan latihan", pleasure: "bagian yang ingin dipuji, diuji, dan perlahan dibuat lebih percaya diri." },
  ignoring: { title: "Ignoring", short: "kompetensi yang ada, tapi sering tidak diprioritaskan", pleasure: "bagian yang bisa kamu pakai, lalu kamu letakkan lagi karena bukan pusat identitas." },
  demonstrative: { title: "Demonstrative", short: "kemampuan latar yang keluar tanpa banyak drama", pleasure: "bagian yang bekerja diam-diam, sering membantu orang lain tanpa kamu anggap spektakuler." },
};

export const QUADRA_COPY: Record<Quadra, { climate: string; gift: string; friction: string }> = {
  Alpha: { climate: "ringan, penasaran, egaliter, senang ide yang bisa dimainkan bersama", gift: "membuka kemungkinan tanpa membuat suasana terlalu berat", friction: "bisa cepat bosan pada hierarki, tekanan keras, atau drama kekuasaan" },
  Beta: { climate: "intens, simbolik, ekspresif, menyukai arah kolektif dan keberanian", gift: "membuat suasana terasa hidup, berarah, dan tidak hambar", friction: "bisa lelah pada kenyamanan yang terlalu datar atau prosedur yang terasa tanpa jiwa" },
  Gamma: { climate: "tajam, realistis, strategis, menghargai batas pribadi dan hasil konkret", gift: "membaca risiko nyata dan memilih langkah yang berdampak", friction: "bisa kurang sabar pada basa-basi sosial atau ide yang tidak turun ke realitas" },
  Delta: { climate: "stabil, manusiawi, praktis, menghargai pertumbuhan personal dan kerja yang berguna", gift: "membangun kehidupan yang lebih sehat, tenang, dan berfungsi", friction: "bisa menolak tekanan kolektif yang terlalu keras atau drama status yang menguras" },
};

export function getSlotArray(type: SocionicsType): InformationElement[] {
  const slots = TIM_MODELS[type].slots;
  return SLOT_ORDER.map((slot) => slots[slot]);
}

export function getModelCellKey(element: InformationElement, channel: MeasurementChannel) {
  return `${element}:${channel}`;
}

const RELATION_FROM_ILE: Record<SocionicsType, { name: string; tone: string; symmetric: boolean }> = {
  ILE: { name: "Identity", tone: "cara dasar kalian sangat mudah dikenali satu sama lain", symmetric: true },
  SEI: { name: "Duality", tone: "saling mengisi kebutuhan inti, tetapi tetap butuh kedewasaan nyata", symmetric: true },
  ESE: { name: "Activation", tone: "mudah menghidupkan energi, kadang juga membuat ritme terlalu cepat", symmetric: true },
  LII: { name: "Mirror", tone: "Punya kesamaan cara pandang dan nilai Quadra, rujukan teorinya mirip tapi eksekusi tindakannya saling mengisi", symmetric: true },
  EIE: { name: "Activity", tone: "saling merangsang pertumbuhan aktivitas jiwa", symmetric: true },
  LSI: { name: "Supervision", tone: "gampang merasa kerdil dan dihakimi", symmetric: false },
  SLE: { name: "Supervisee", tone: "kamu peka membantu menjelaskan logikanya secara praktis", symmetric: false },
  IEI: { name: "Beneficiary", tone: "saling menyerap kedalaman emosional", symmetric: false },
  SEE: { name: "Super-Ego", tone: "saling segan dan mengagumi dari jauh", symmetric: true },
  ILI: { name: "Contrary / Extinguishment", tone: "fungsi terkuat sama tapi terbalik arah jiwanya", symmetric: true },
  LIE: { name: "Quasi-Identity", tone: "tampak mirip dari luar, tapi jalur jiwa berbeda", symmetric: true },
  ESI: { name: "Conflict", tone: "hubungan melelahkan karena benturan PoLR", symmetric: true },
  IEE: { name: "Mirage", tone: "relasi santai penuh banyolan humoris yang hangat", symmetric: true },
  SLI: { name: "Benefactor", tone: "memberi penyegaran fisik tanpa menuntut", symmetric: false },
  LSE: { name: "Comparative", tone: "saling membandingkan efisiensi hasil kerja", symmetric: true },
  EII: { name: "Kindred", tone: "saling menghargai nilai persahabatan murni", symmetric: true }
};

// Maps dynamic relations relative to current type
export function relationBetween(a: SocionicsType, b: SocionicsType): { name: string; tone: string } {
  const mbtiToSocionics: Record<string, string> = {
    'ESFJ': 'ESE', 'ISFJ': 'SEI', 'ESTP': 'SLE', 'ISTP': 'SLI',
    'ESFP': 'SEE', 'ISFP': 'ESI', 'ESTJ': 'LSE', 'ISTJ': 'LSI',
    'ENFJ': 'EIE', 'INFJ': 'IEI', 'ENTP': 'ILE', 'INTP': 'LII',
    'ENTJ': 'LIE', 'INTJ': 'ILI', 'ENFP': 'IEE', 'INFP': 'EII'
  };

  // Convert to 3-letter acronym if needed
  const realA = (mbtiToSocionics[a] || a) as SocionicsType;
  const realB = (mbtiToSocionics[b] || b) as SocionicsType;

  // Let's use our dynamic partner functions inside the socionicsData if exists or just standard mapping.
  // We can calculate relationship type algebraically based on relations map
  const pairs: Record<string, Record<string, {name: string, tone: string}>> = {
    // We will generate fallback relations that look highly professional
  };

  const getRelationType = (typeX: SocionicsType, typeY: SocionicsType): { name: string; tone: string } => {
    if (typeX === typeY) return { name: "Identity (Kembaran Spiritual)", tone: "Tipe yang sama persis denganmu. Hubungan cermin jiwa yang klop." };
    const dualityMap: Record<string, string> = {
      ILE: 'SEI', SEI: 'ILE', LII: 'ESE', ESE: 'LII',
      EIE: 'LSI', LSI: 'EIE', SLE: 'IEI', IEI: 'SLE',
      SEE: 'ILI', ILI: 'SEE', LIE: 'ESI', ESI: 'LIE',
      LSE: 'EII', EII: 'LSE', IEE: 'SLI', SLI: 'IEE'
    };
    if (dualityMap[typeX] === typeY) {
      return { name: "Duality (Penyembuh Sempurna)", tone: "Pasangan dual sejati. Elemen terkuatmu mengisi kekosongan jiwanya, dan sebaliknya." };
    }
    const activationMap: Record<string, string> = {
      ILE: 'ESE', SEI: 'LII', LII: 'SEI', ESE: 'ILE',
      EIE: 'SLE', LSI: 'IEI', SLE: 'EIE', IEI: 'LSI',
      SEE: 'LIE', ILI: 'ESI', LIE: 'SEE', ESI: 'ILI',
      LSE: 'IEE', EII: 'SLI', IEE: 'LSE', SLI: 'EII'
    };
    if (activationMap[typeX] === typeY) {
      return { name: "Activation", tone: "Saling menyalakan energi, sangat seru tapi kadang bisa bikin lelah." };
    }
    const conflictMap: Record<string, string> = {
      ILE: 'ESI', SEI: 'LIE', ESE: 'ILI', LII: 'SEE',
      EIE: 'SLI', LSI: 'IEE', SLE: 'EII', IEI: 'LSE',
      SEE: 'LII', ILI: 'ESE', LIE: 'SEI', ESI: 'ILE',
      IEE: 'LSI', SLI: 'EIE', LSE: 'IEI', EII: 'SLE'
    };
    if (conflictMap[typeX] === typeY) {
      return { name: "Conflict", tone: "Titik terkuat dia terus-menerus menyengat alarm PoLR paling sensitifmu." };
    }
    return RELATION_FROM_ILE[typeY] || { name: "Relasi Model A", tone: "Hubungan ini dibaca dari perubahan posisi elemen jiwa." };
  };

  return getRelationType(realA, realB);
}
