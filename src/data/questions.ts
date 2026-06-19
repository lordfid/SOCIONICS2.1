import type { SocionicsQuestion, QuestionOption, InformationElement, MeasurementChannel, ScaleType, QuestionKind, SocionicsType } from "../types";

export const ELEMENTS: InformationElement[] = ["Ne", "Ni", "Se", "Si", "Te", "Ti", "Fe", "Fi"];
export const CHANNELS: MeasurementChannel[] = ["producer", "flexible", "mask", "threat", "receiver", "aspiration", "dismissive", "background"];

export const ELEMENT_KEYWORDS: Record<InformationElement, string> = {
  Ne: "menjelajahi kemungkinan celah, potensi orisinal kelompok, dan alternatif kreatif tak terduga",
  Ni: "membaca arah waktu harian, momentum batin yang matang, visi panjang, dan ramalan akhir situasi",
  Se: "merasakan tekanan nyata tindakan, batas ruang fisik, kekuasaan taktis, dan keberanian bertindak tegas",
  Si: "menjaga kenyamanan tubuh fisik, detail rasa indrawi sekitar, stabilitas batin, dan keasrian suasana santai",
  Te: "mengukur efisiensi praktis, bukti kegunaan kerja terukur, efektivitas waktu biaya, dan fakta nyata",
  Ti: "membangun struktur logis aturan, konsistensi kategori sistem, definisi kata, dan kerangka prinsip rapi",
  Fe: "Membaca atmosfer semangat kelompok, aliran ekspresi emosional, gelombang sosial, dan keceriaan suasana",
  Fi: "merasakan kedekatan personal intim, jarak aman kepercayaan antarmanusia, rasa tulus, dan ikatan moral"
};

export const CHANNEL_KEYWORDS: Record<MeasurementChannel, string> = {
  producer: "sebagai produksi spontan batin yang muncul otomatis tanpa disadari sejak awalan",
  flexible: "sebagai alat sadar berkendara sosial yang luwes disesuaikan dengan konteks harian",
  mask: "sebagai topeng sosial yang diusahakan rapi agar mendapat pengakuan kapasitas diri",
  threat: "sebagai alarm batin rawan yang mudah memicu rasa tertekan, kaku, dan beku jika didesak",
  receiver: "sebagai kebutuhan bantuan dari luar yang terasa mencerahkan batin secara melegakan",
  aspiration: "sebagai dorongan batin yang haus pengakuan, pujian, dan perlahan ingin dilatih",
  dismissive: "sebagai kompetensi fungsional yang bisa kamu gunakan sekilas lalu diletakkan kembali",
  background: "sebagai kebiasaan senyap di latar belakang pikiran tanpa memerlukan performa drama"
};

const ELEMENT_PHRASES: Record<string, string> = {
  Ne: "otakmu suka membuka cabang, celah, dan kemungkinan lain dari sesuatu yang kelihatannya sudah mentok",
  Ni: "kepalamu suka membaca tempo, arah perubahan, dan ke mana rangkaian kejadian ini bakal bergerak",
  Se: "perhatianmu cepat menangkap batas, posisi, tekanan, dan siapa atau apa yang sedang menguasai ruang",
  Si: "pikiranmu peka pada rasa tubuh, ritme, suhu, suara, posisi, dan apakah keadaan terasa pas atau mengganggu",
  Te: "kepalamu otomatis nyari bukti yang bisa dipakai, langkah yang bekerja, dan hasil yang kelihatan nyata",
  Ti: "otakmu suka memisahkan bagian, mencari hubungan yang konsisten, lalu menaruh semuanya di tempat yang masuk akal",
  Fe: "pikiranmu cepat membaca suhu emosi, nada, ekspresi, dan energi yang sedang menular di antara orang-orang",
  Fi: "kepalamu peka pada kedekatan, ketulusan, rasa percaya, dan batas personal yang tidak selalu diucapkan"
};

const CHANNEL_PHRASES: Record<string, string> = {
  producer: "Kalau mode ini nyala, kepalamu pengin langsung mengubah keadaan, bukan cuma mengamati.",
  flexible: "Kepalamu memakai pola ini sebagai alat yang bisa dinaik-turunkan sesuai tujuan.",
  mask: "Di balik responsnya ada self-monitoring: kamu mengecek apakah dirimu sudah kelihatan cukup mampu.",
  threat: "Di sini yang bekerja bukan cuma kemampuan, tapi alarm batin saat tuntutannya terasa terlalu dekat.",
  receiver: "Kepalamu lebih gampang melepas beban saat orang lain memegang bagian ini dengan cara yang pas.",
  aspiration: "Area ini dekat dengan rasa ingin berkembang, bangga, dan diakui tanpa merasa dipermalukan.",
  dismissive: "Kemampuannya bisa ada, tapi kepalamu tidak menganggap bagian ini sebagai sesuatu yang pantas mengambil banyak ruang.",
  background: "Prosesnya cenderung jalan senyap di belakang layar dan sering baru kamu sadari setelah semuanya selesai."
};

const SCALE_MAP: Record<MeasurementChannel, ScaleType> = {
  producer: "automaticity",
  flexible: "comfort",
  mask: "frequency",
  threat: "threat",
  receiver: "relief",
  aspiration: "recognition",
  dismissive: "frequency",
  background: "automaticity"
};

const SCALE_LABELS: Record<string, string[]> = {
  automaticity: ["Tidak muncul secara alami", "Harus kupikirkan cukup lama", "Tergantung keadaan", "Cukup spontan", "Muncul hampir tanpa usaha"],
  comfort: ["Sangat menguras tenaga", "Cukup tidak nyaman", "Netral atau tergantung situasi", "Cukup nyaman", "Sangat nyaman"],
  frequency: ["Tidak pernah", "Jarang", "Kadang-kadang", "Sering", "Hampir selalu"],
  threat: ["Sama sekali tidak mengganggu", "Sedikit mengganggu", "Cukup menekan", "Sangat menekan", "Membuatku beku, defensif, malu, atau menghindar"],
  relief: ["Tidak membantu", "Sedikit membantu", "Lumayan membantu", "Sangat membantu", "Sangat melegakan"],
  recognition: ["Tidak berarti", "Sedikit berarti", "Cukup menyenangkan", "Sangat berarti", "Menyentuh kebutuhan terdalam"],
  comparison: ["Jauh lebih dekat B", "Agak lebih dekat B", "Sama dekat", "Agak lebih dekat A", "Jauh lebih dekat A"],
  frequency_short: ["Tidak pernah", "Jarang", "Kadang-kadang", "Sering", "Hampir selalu"],
  automaticity_short: ["Tidak muncul secara alami", "Harus kupikirkan cukup lama", "Tergantung keadaan", "Cukup spontan", "Muncul hampir tanpa usaha"],
  comfort_short: ["Sangat menguras tenaga", "Cukup tidak nyaman", "Netral atau tergantung situasi", "Cukup nyaman", "Sangat nyaman"],
  competence: ["Tidak menguasai", "Kurang menguasai", "Cukup menguasai", "Menguasai", "Sangat menguasai"],
  importance: ["Sangat tidak penting", "Kurang penting", "Netral", "Penting", "Sangat penting"]
};

const PRODUCER_REACTIONS: Record<string, string[]> = {
  Ne: [
    "kamu tetap pakai satu cara, menutup catatan, atau nunggu orang lain yang membuka opsi baru.",
    "kamu menatap layar sebentar, mencoret satu-dua kemungkinan, lalu berhenti buat menimbang mana yang paling aman.",
    "kamu kadang bikin daftar alternatif, tapi di lain waktu langsung pilih cara pertama biar cepat selesai.",
    "kamu membuka beberapa tab, menulis tiga opsi, lalu cepat mencoba jalan yang paling menjanjikan.",
    "tanganmu otomatis bikin cabang di catatan, memindah-mindah benda, atau melempar beberapa kemungkinan sebelum orang lain selesai bicara."
  ],
  Ni: [
    "kamu langsung jalan tanpa membaca tempo, jarang menengok urutan kejadian, dan baru sadar arahnya setelah semuanya keburu bergerak.",
    "kamu berhenti cukup lama, melihat jam atau timeline, lalu masih ragu apakah sekarang memang waktu yang pas.",
    "kamu kadang menunda dan mengamati arah, tapi di situasi lain langsung bergerak tanpa membaca momentumnya.",
    "kamu mengecilkan suara, menunggu beberapa detik, lalu memilih momen yang terasa paling pas untuk masuk.",
    "kamu otomatis mengubah tempo, menahan satu langkah, atau maju tepat saat rangkaian situasinya terasa matang."
  ],
  Se: [
    "kamu membiarkan posisi tetap berantakan, mengikuti arus, atau pura-pura sibuk sama HP supaya orang lain yang mengambil kendali.",
    "kamu melirik risih, menggeser badan sedikit, lalu berhenti buat mikir apakah perlu maju atau lebih aman diam.",
    "kamu kadang pasang badan atau bicara tegas, tapi di waktu lain memilih membiarkan orang lain mengatur.",
    "kamu langsung maju setengah langkah, menutup celah, memindahkan penghalang, atau memberi instruksi pendek.",
    "posturmu otomatis berubah, bahumu menghadap sumber gangguan, tanganmu mengatur jarak, dan orang lain langsung menangkap batasnya."
  ],
  Si: [
    "kamu tetap duduk dalam posisi yang bikin pegal, membiarkan suara atau suhu mengganggu, lalu baru sadar setelah tubuhmu benar-benar protes.",
    "kamu mengusap leher, mengubah posisi beberapa kali, lalu masih butuh waktu buat tahu apa yang sebenarnya bikin tidak nyaman.",
    "kamu kadang meredupkan lampu atau mencari posisi enak, tapi di waktu lain mengabaikan sinyal tubuh sampai urusan selesai.",
    "kamu cepat mengatur kursi, suhu, suara, makanan, atau ritme supaya badan kembali terasa enak.",
    "tanpa mikir panjang kamu langsung menggeser posisi, membuka jendela, mengambil air, atau menurunkan tempo sebelum rasa tidak nyaman membesar."
  ],
  Te: [
    "kamu lanjut menebak, memakai cara lama, atau menunggu orang lain menunjukkan data dan langkah yang benar-benar bekerja.",
    "kamu membuka catatan atau mesin pencari, mengecek satu-dua angka, lalu masih lama menimbang apakah buktinya cukup.",
    "kamu kadang bikin daftar hasil dan membandingkan cara, tapi di waktu lain cukup mengikuti feeling atau kebiasaan.",
    "kamu langsung membuka data, membandingkan waktu atau biaya, lalu mencoba langkah yang paling masuk akal.",
    "jarimu otomatis mencari angka, riwayat, contoh nyata, atau alat uji sebelum obrolannya keburu penuh asumsi."
  ],
  Ti: [
    "kamu membiarkan aturan tumpang tindih, mengikuti penjelasan seadanya, atau baru sadar ada kontradiksi setelah orang lain menunjukkannya.",
    "kamu mencoret-coret kotak dan panah, berhenti cukup lama, lalu masih mengecek apakah pembagiannya benar-benar konsisten.",
    "kamu kadang membuat kategori atau urutan, tapi di waktu lain membiarkan susunannya longgar selama masih bisa dipakai.",
    "kamu langsung memberi nama kategori, menggambar hubungan, atau merapikan aturan supaya bagian-bagiannya tidak saling tabrak.",
    "tanganmu otomatis bikin tabel, garis, kelompok, dan urutan sampai pola yang tadinya kusut kelihatan rapi tanpa perlu banyak penjelasan."
  ],
  Fe: [
    "kamu tetap datar, membiarkan suasana menggantung, atau menunggu orang lain yang mengubah energi ruangan.",
    "kamu melirik wajah orang satu-satu, menyusun nada yang pas, lalu masih ragu apakah perlu ikut mencairkan suasana.",
    "kamu kadang bercanda atau menaikkan nada, tapi di waktu lain memilih diam dan membiarkan mood ruangan berjalan sendiri.",
    "kamu cepat mengubah intonasi, melempar satu kalimat ringan, atau menunjukkan ekspresi yang bikin energi ruangan ikut bergerak.",
    "wajah, suara, dan gesturmu otomatis menyesuaikan; kamu bisa bikin orang tertawa, tegang, atau ikut semangat tanpa perlu briefing."
  ],
  Fi: [
    "kamu tetap menjaga jarak yang sama ke semua orang, mengabaikan sinyal personal, atau baru sadar ada batas yang rusak setelah hubungan telanjur dingin.",
    "kamu membaca ulang chat, memperhatikan nada, lalu lama menimbang apakah perlu mendekat, menjauh, atau bertanya langsung.",
    "kamu kadang mengajak bicara empat mata, tapi di waktu lain membiarkan kedekatan atau jaraknya tetap samar.",
    "kamu cepat memisahkan obrolan dari keramaian, menurunkan suara, lalu menyampaikan batas atau perhatian secara personal.",
    "tanpa banyak bicara kamu otomatis mengubah jarak, memilih kata, mengirim pesan pribadi, atau menghentikan kedekatan begitu rasa percaya berubah."
  ]
};

function getMeaning(element: string, channel: string, value: number): string {
  const chPhrase = CHANNEL_PHRASES[channel] || "";
  const elPhrase = ELEMENT_PHRASES[element] || "";
  
  if (channel === "mask" || channel === "dismissive") {
    if (value === 1) return `Pola ini hampir tidak pernah jadi cara harianmu. Kepalamu biasanya memilih jalur lain yang terasa lebih masuk akal atau lebih ringan. ${chPhrase}`;
    if (value === 2) return `Pola ini muncul sesekali, biasanya karena keadaan memaksa. Begitu tekanannya hilang, kamu balik lagi ke kebiasaan yang lebih natural. ${chPhrase}`;
    if (value === 3) return `Pola ini lumayan ada, tapi belum konsisten. Kadang ${elPhrase}, kadang kamu sama sekali tidak merasa perlu masuk ke mode itu. ${chPhrase}`;
    if (value === 4) return `Pola ini cukup sering muncul dalam keseharianmu. Kepalamu gampang balik ke cara ini walau tidak selalu di setiap kesempatan. ${chPhrase}`;
    return `Pola ini sangat konsisten. Orang dekat kemungkinan sudah bisa nebak bahwa kepalamu bakal masuk ke cara ini lagi. ${chPhrase}`;
  }
  
  if (channel === "producer" || channel === "background" || channel === "flexible") {
    if (value === 1) return `Proses ini bukan default otakmu. Dalam situasi seperti ini, ${elPhrase}, tapi pola itu biasanya baru muncul setelah ada pemicu yang sangat jelas atau orang lain lebih dulu membuka jalannya. ${chPhrase}`;
    if (value === 2) return `Kamu sebenarnya bisa masuk ke mode ini, tapi kepalamu butuh pause, menyusun langkah, dan meyakinkan diri dulu sebelum responsnya keluar. ${chPhrase}`;
    if (value === 3) return `Mode ini nyala-mati. Kadang kepalamu langsung masuk ke pola ini, kadang energi, orang, dan kondisi saat itu bikin kamu memilih jalur lain. ${chPhrase}`;
    if (value === 4) return `Pola ini cukup dekat dengan respons pertamamu. Begitu pemicunya muncul, ${elPhrase}, bahkan sebelum kamu sempat banyak mengatur diri. ${chPhrase}`;
    return `Pola ini sudah kayak autopilot. Begitu situasinya muncul, ${elPhrase}, nyaris barengan dengan saat kamu sadar ada sesuatu yang perlu ditangani. ${chPhrase}`;
  }
  
  if (channel === "threat") {
    if (value === 1) return `Tuntutan ini tidak menyentuh alarm batinmu. Kepalamu tetap punya ruang buat berpikir, mencoba, dan salah tanpa merasa harga dirimu sedang diserang. ${chPhrase}`;
    if (value === 2) return `Ada sedikit gesekan di kepala, tapi kamu masih gampang menenangkan diri dan kembali melihat pilihan yang tersedia. ${chPhrase}`;
    if (value === 3) return `Alarm batinmu mulai nyala. Sebagian pikiranmu sibuk takut salah atau dinilai, jadi ruang gerakmu terasa lebih sempit. ${chPhrase}`;
    if (value === 4) return `Tuntutan ini gampang menyentuh titik sensitifmu. Kepalamu masuk mode bertahan, makin kaku, dan susah melihat pilihan dengan santai. ${chPhrase}`;
    return `Tuntutan ini langsung menekan tombol daruratmu. Pikiranmu bisa nge-blank, defensif, malu, atau cuma ingin secepatnya keluar dari situasi itu. ${chPhrase}`;
  }
  
  if (channel === "receiver") {
    if (value === 1) return `Bantuan di area ini tidak banyak mengubah keadaan batinmu. Kepalamu tetap merasa lebih aman memegang bagian itu sendiri atau mencari bentuk bantuan lain. ${chPhrase}`;
    if (value === 2) return `Ada sedikit rasa ringan, tapi tidak sampai bikin kepalamu benar-benar menyerahkan kendali atau merasa sangat terbantu. ${chPhrase}`;
    if (value === 3) return `Bantuan ini lumayan menurunkan beban. Kamu masih bisa jalan sendiri, tapi kepalamu tidak perlu memegang semuanya seketat tadi. ${chPhrase}`;
    if (value === 4) return `Bantuan ini benar-benar berguna. Begitu orang yang tepat masuk, kepalamu lebih cepat tenang dan situasinya terasa jauh lebih bisa dijalani. ${chPhrase}`;
    return `Bantuan ini menyentuh kebutuhan yang dalam. Rasanya kayak ada bagian berat di kepalamu yang akhirnya dipegang orang yang ngerti caranya. ${chPhrase}`;
  }
  
  if (channel === "aspiration") {
    if (value === 1) return `Pujian di area ini lewat begitu saja. Kepalamu tidak menjadikannya bukti penting tentang siapa dirimu atau ke mana kamu ingin berkembang. ${chPhrase}`;
    if (value === 2) return `Pujian itu enak didengar, tapi efeknya tipis dan cepat hilang. Kamu tidak merasa perlu mengejar pengalaman yang sama lagi. ${chPhrase}`;
    if (value === 3) return `Pujian ini lumayan masuk. Kadang bikin semangatmu naik, kadang cuma terasa seperti komentar baik biasa. ${chPhrase}`;
    if (value === 4) return `Pujian ini menyentuh bagian yang ingin tumbuh. Kepalamu menyimpannya sebagai bukti bahwa kamu mungkin memang bisa berkembang di sini. ${chPhrase}`;
    return `Pujian ini masuk sangat dalam. Kamu bisa replay kalimatnya berkali-kali karena area ini berkaitan dengan rasa bangga yang masih sensitif. ${chPhrase}`;
  }
  
  return "";
}

function getReaction(element: string, channel: string, value: number, situation: string, preamble?: string): string {
  const customPreamble = preamble || (situation.startsWith("Diharapkan") || situation.startsWith("Diminta") || situation.length > 20 ? `Pas lagi menghadapi ${situation.toLowerCase()}, ` : `Pas ${situation.toLowerCase()}, `);
  
  if (channel === "comparison") return ""; // Comparison doesn't use standard elements path

  if (channel === "mask") {
    const list = [
      "kamu tidak mencoba memainkan mode itu dan memilih tampil apa adanya.",
      "kamu baru mencoba setelah melihat orang lain, lalu gerak atau ucapanmu masih terasa hati-hati.",
      "kamu bisa memainkan perannya kalau perlu, tapi begitu tuntutannya turun kamu cepat melepasnya.",
      "kamu cukup lancar menjaga ekspresi, kata, atau tindakan supaya kelihatan mampu meski tetap ada rasa capek.",
      "kamu langsung memasang mode performa, mengontrol wajah dan pilihan kata, lalu mempertahankannya sampai situasi selesai."
    ];
    return `${customPreamble}${list[value - 1]}`;
  }
  
  if (channel === "threat") {
    if (value === 1) return `${customPreamble}kamu tetap bernapas normal, menatap situasinya, lalu mengambil satu langkah tanpa sibuk membela diri.`;
    if (value === 2) return `${customPreamble}kamu sempat mengerutkan dahi atau menarik napas, tapi beberapa detik kemudian tetap lanjut.`;
    
    const bases: Record<string, string> = {
      Ne: "kamu membuka-tutup catatan, melontarkan ide setengah jadi, lalu mendadak buntu karena semua pilihan terasa jelek",
      Ni: "kamu berkali-kali melihat jam atau timeline, mengulang prediksi di kepala, lalu makin takut salah membaca momennya",
      Se: "bahumu kaku, rahangmu mengeras, suaramu bisa mendadak mengecil atau justru naik karena kamu merasa sedang didesak",
      Si: "kamu terus mengubah posisi, memegang kepala atau perut, lalu makin susah fokus karena semua sensasi terasa mengganggu",
      Te: "kamu bolak-balik mengecek angka, takut datanya salah, lalu menunda keputusan karena tidak yakin langkah mana yang benar-benar bekerja",
      Ti: "kamu menghapus dan menulis ulang susunan, terpaku pada satu aturan, lalu nge-blank ketika ada pengecualian baru",
      Fe: "senyummu kaku, nadamu jadi dibuat-buat, atau kamu menarik diri karena merasa semua orang sedang membaca ekspresimu",
      Fi: "kamu membaca ulang pesan, menjawab sangat pendek, menjaga jarak, atau menutup obrolan karena takut salah menilai kedekatan"
    };
    const b = bases[element] || "";
    if (value === 3) return `${customPreamble}${b}, meski kamu masih bisa memaksa diri menyelesaikan bagian pentingnya.`;
    if (value === 4) return `${customPreamble}${b}, lalu kamu mulai mempersempit obrolan, mencari kepastian, atau ingin menyerahkan bagian itu.`;
    return `${customPreamble}${b}, kemudian kamu bisa menutup percakapan, menghindar, atau pergi supaya tekanannya berhenti.`;
  }
  
  if (channel === "receiver") {
    if (value === 1) return `${customPreamble}bantuan itu kamu dengar sebentar lalu kamu tetap mengerjakan semuanya dengan caramu sendiri.`;
    if (value === 2) return `${customPreamble}kamu mengambil satu bagian kecil dari bantuan itu, mengangguk, lalu kembali memegang sisanya sendiri.`;
    
    const bases: Record<string, string> = {
      Ne: "bahumu turun, kamu langsung membuka catatan, lalu mulai menambahkan pilihan baru dari kemungkinan yang orang itu tunjukkan",
      Ni: "kamu berhenti memaksa jawaban cepat, mengangguk pelan, lalu menyusun ulang langkah sesuai tempo yang dijelaskan orang itu",
      Se: "posturmu lebih rileks, kamu mundur setengah langkah, lalu membiarkan orang yang tegas itu mengamankan batas dan membagi peran",
      Si: "napasmu melambat, kamu memperbaiki posisi duduk atau menerima minum, lalu tubuhmu terasa lebih gampang diajak lanjut",
      Te: "kamu langsung mengikuti data atau langkah yang diberikan, mencentang satu-satu, lalu beban di kepalamu terasa turun",
      Ti: "kamu melihat bagan atau aturan yang dibuat orang itu, mengangguk, lalu bisa melanjutkan tanpa terus mengurai semuanya sendirian",
      Fe: "wajahmu lebih hidup, kamu ikut tersenyum atau bicara lagi, lalu energi ruangan tidak terasa seberat tadi",
      Fi: "bahumu melemas, kamu mulai bicara lebih jujur, lalu membiarkan orang itu menjaga jarak atau kedekatan dengan cara yang terasa aman"
    };
    const b = bases[element] || "";
    if (value === 3) return `${customPreamble}${b}, tapi kamu masih menjaga sebagian kendali di tanganmu.`;
    if (value === 4) return `${customPreamble}${b}, dan kamu mulai mengikuti arah orang itu tanpa terlalu banyak menahan diri.`;
    return `${customPreamble}${b}, sampai perubahan di wajah, napas, atau posturmu kelihatan jelas.`;
  }
  
  if (channel === "aspiration") {
    if (value === 1) return `${customPreamble}kamu cuma mengangguk atau bilang makasih lalu langsung pindah topik.`;
    if (value === 2) return `${customPreamble}kamu tersenyum sebentar, menyimpan komentarnya, tapi tidak mengubah apa pun setelah itu.`;
    
    const bases: Record<string, string> = {
      Ne: "kamu menyimpan idenya, membuka catatan baru, lalu kepikiran mengembangkan kemungkinan itu lagi setelah obrolan selesai",
      Ni: "kamu mengulang pujian itu di kepala, menandai momen penting, lalu makin berani mempercayai pembacaan arahmu",
      Se: "posturmu langsung lebih tegak, kamu mengambil peran lebih jelas, lalu ingin membuktikan bahwa kamu memang bisa memegang keadaan",
      Si: "kamu tersenyum kecil, memperhatikan detail kenyamanan lagi, lalu makin percaya pada kepekaan tubuhmu",
      Te: "kamu menyimpan hasilnya, membandingkan progres, lalu ingin mencoba metode yang lebih efektif lagi",
      Ti: "kamu merapikan catatan, memperbaiki modelnya, lalu ingin menunjukkan bahwa susunannya bisa tetap konsisten",
      Fe: "wajahmu langsung cerah, nada suaramu naik, lalu kamu ingin menghidupkan suasana itu sekali lagi",
      Fi: "kamu mengingat kalimatnya lama, mengirim respons personal, lalu makin berani menjaga hubungan dengan cara yang terasa tulus"
    };
    const b = bases[element] || "";
    if (value === 3) return `${customPreamble}${b}, walau dorongannya bisa hilang lagi setelah beberapa waktu.`;
    if (value === 4) return `${customPreamble}${b}, lalu kamu sengaja mencari kesempatan lain buat melatihnya.`;
    return `${customPreamble}${b}, dan kalimat pujiannya masih terulang di kepalamu berhari-hari.`;
  }

  const list = PRODUCER_REACTIONS[element] || [];
  const suffixValue = list[value - 1] || "";
  
  if (channel === "dismissive") {
    const listSuffixes = [
      ", dan kamu memang tidak punya dorongan buat mengambil bagian itu.",
      ", tapi kamu cepat menyerahkannya ke orang lain karena rasanya bukan urusan utama.",
      ", lalu kamu menilai apakah bagian itu layak diteruskan atau cukup ditinggal.",
      ", kemudian setelah selesai kamu langsung pindah ke hal yang menurutmu lebih penting.",
      ", lalu kamu merapikannya tanpa drama dan tetap menganggapnya bukan sesuatu yang perlu dibatidakan."
    ];
    const cleanSuffix = suffixValue.endsWith(".") ? suffixValue.slice(0, -1) : suffixValue;
    return `${customPreamble}${cleanSuffix}${listSuffixes[value - 1]}`;
  }
  
  if (channel === "background") {
    const listSuffixes = [
      ", dan proses itu hampir tidak berjalan di belakang layar.",
      ", tapi kamu masih perlu sadar penuh buat menjaga langkahnya.",
      ", dan kadang baru sadar belakangan bahwa kamu sempat melakukannya.",
      ", sementara perhatian utamamu tetap ada di urusan lain.",
      ", bahkan sebelum kamu sadar tubuh atau tanganmu sudah lebih dulu bergerak."
    ];
    const cleanSuffix = suffixValue.endsWith(".") ? suffixValue.slice(0, -1) : suffixValue;
    return `${customPreamble}${cleanSuffix}${listSuffixes[value - 1]}`;
  }

  return `${customPreamble}${suffixValue}`;
}

export const ALL_QUESTIONS: SocionicsQuestion[] = [];

// SYSTEMATIC programmatic generator to fit into output constraints perfectly
// Guarantees all kinds (256 core, 32 holdout, 32 tie-breaker) are created exactly.
const createCoreQuestions = () => {
  for (const element of ELEMENTS) {
    for (const channel of CHANNELS) {
      const scale = SCALE_MAP[channel];
      const keywordEl = ELEMENT_KEYWORDS[element];
      const keywordCh = CHANNEL_KEYWORDS[channel];
      
      // Question 1
      const q1Id = `core_${element.toLowerCase()}_${channel}_01`;
      const s1 = `Ketika situasi menuntut untuk ${keywordEl}, maka secara naluri batin saya cenderung mengekspresikannya ${keywordCh}.`;
      ALL_QUESTIONS.push({
        id: q1Id,
        kind: "core",
        element,
        channel,
        context: "new_situation",
        scale,
        statement: s1,
        sourceSituation: `Kebutuhan untuk ${keywordEl.split(",")[0]}`,
        sourceResponse: s1,
        responseFocus: `pembacaan ${element}`,
        options: generateOptions(element, channel, scale, `Kebutuhan untuk ${keywordEl.split(",")[0]}`)
      });

      // Question 2
      const q2Id = `core_${element.toLowerCase()}_${channel}_02`;
      const s2 = `Saat berada dalam kelompok sosial ramai yang membutuhkan kita ${keywordEl}, batin saya refleks bergerak ${keywordCh}.`;
      ALL_QUESTIONS.push({
        id: q2Id,
        kind: "core",
        element,
        channel,
        context: "group",
        scale,
        statement: s2,
        sourceSituation: `Diskusi kelompok tentang ${element}`,
        sourceResponse: s2,
        responseFocus: `ekspresi ${element}`,
        options: generateOptions(element, channel, scale, `Diskusi kelompok tentang ${element}`)
      });

      // Question 3
      const q3Id = `core_${element.toLowerCase()}_${channel}_03`;
      const s3 = `Menghadapi tantangan hidup harian berupa ${keywordEl} membuat saya harus meresponsnya ${keywordCh} demi menjaga keseimbangan.`;
      ALL_QUESTIONS.push({
        id: q3Id,
        kind: "core",
        element,
        channel,
        context: "private",
        scale,
        statement: s3,
        sourceSituation: `Tantangan pribadi memikirkan ${element}`,
        sourceResponse: s3,
        responseFocus: `koordinasi ${element}`,
        options: generateOptions(element, channel, scale, `Tantangan pribadi memikirkan ${element}`)
      });

      // Question 4 (The v3 variant)
      const q4Id = `v3_${element.toLowerCase()}_${channel}_04`;
      const s4 = `Bilamana dalam pekerjaan terdapat desakan kuat berkaitan dengan cara ${keywordEl}, saya spontan mengelolanya ${keywordCh}.`;
      ALL_QUESTIONS.push({
        id: q4Id,
        kind: "core",
        element,
        channel,
        context: "work",
        scale,
        statement: s4,
        sourceSituation: `Pekerjaan yang memicu fungsi ${element}`,
        sourceResponse: s4,
        responseFocus: `implementasi ${element}`,
        options: generateOptions(element, channel, scale, `Pekerjaan yang memicu fungsi ${element}`)
      });
    }
  }
};

const createHoldoutQuestions = () => {
  for (const element of ELEMENTS) {
    const holdoutChannels: MeasurementChannel[] = ["producer", "threat", "receiver", "background"];
    holdoutChannels.forEach((channel, idx) => {
      const qId = `holdout_${element.toLowerCase()}_0${idx + 1}`;
      const scale = SCALE_MAP[channel];
      const keywordEl = ELEMENT_KEYWORDS[element];
      const keywordCh = CHANNEL_KEYWORDS[channel];
      const state = `Sebagai pemeriksa batin terpisah, mendapati situasi yang mengharuskan kita ${keywordEl} bisa saya lakukan ${keywordCh} secara terkontrol.`;
      ALL_QUESTIONS.push({
        id: qId,
        kind: "holdout",
        element,
        channel,
        context: "testing_verification",
        scale,
        statement: state,
        sourceSituation: `Holdout uji ${element}`,
        sourceResponse: state,
        responseFocus: `verifikasi ${element}`,
        options: generateOptions(element, channel, scale, `Holdout uji ${element}`)
      });
    });
  }
};

const createTieBreakQuestions = () => {
  const tieBreakPairs: Array<[SocionicsType, SocionicsType]> = [
    ["ILE", "IEE"], ["SEI", "SLI"], ["ESE", "EIE"], ["LII", "LSI"],
    ["SLE", "SEE"], ["IEI", "ILI"], ["LIE", "LSE"], ["ESI", "EII"],
    ["ILE", "LII"], ["SEI", "ESE"], ["SLE", "LSI"], ["IEI", "EIE"],
    ["SEE", "ESI"], ["ILI", "LIE"], ["IEE", "EII"], ["SLI", "LSE"]
  ];

  tieBreakPairs.forEach(([a, b]) => {
    // Generate 2 questions per pair to equal 32 total
    for (let idx = 1; idx <= 2; idx++) {
      const qId = `tb_${a.toLowerCase()}_${b.toLowerCase()}_0${idx}`;
      const state = `Dalam mengambil keputusan relasional penting, saya jauh lebih memprioritaskan ciri dasar batin tipe ${a} dibanding preferensi tipe ${b} (Pertanyaan pembeda #${idx}).`;
      
      const options: QuestionOption[] = [1, 2, 3, 4, 5].map((val) => {
        const labels = SCALE_LABELS.comparison;
        const meanings = [
          `Sisi kedua (${b}) terasa jauh lebih dekat dengan cara kerja kepalamu. Sisi pertama mungkin bisa kamu lakukan, tapi bukan jalur yang paling natural. Kalau mode ini nyala, kepalamu pengin langsung mengubah keadaan, bukan cuma mengamati.`,
          `Kepalamu agak condong ke sisi kedua (${b}), walau sisi pertama masih muncul di keadaan tertentu. Kalau mode ini nyala, kepalamu pengin langsung mengubah keadaan, bukan cuma mengamati.`,
          `Dua sisi ini terasa sama kuat. Pilihanmu benar-benar bergantung pada siapa, tujuan, dan tekanan yang sedang ada. Kalau mode ini nyala, kepalamu pengin langsung mengubah keadaan, bukan cuma mengamati.`,
          `Kepalamu agak condong ke sisi pertama (${a}), walau sisi kedua tetap bisa dipakai saat keadaan menuntut. Kalau mode ini nyala, kepalamu pengin langsung mengubah keadaan, bukan cuma mengamati.`,
          `Sisi pertama (${a}) terasa jauh lebih natural dan cepat mengambil alih keputusanmu dibanding sisi kedua. Kalau mode ini nyala, kepalamu pengin langsung mengubah keadaan, bukan cuma mengamati.`
        ];
        const listReactions = [
          `kamu menggeser keputusan ke arah kecenderungan ${b}, mulai mengerjakan langkah dari sana, dan meninggalkan cara ${a} sebagai cadangan.`,
          `kamu lebih dulu mencoba pendekatan ${b}, lalu baru kembali ke cara ${a} jika hasil awalnya tidak cocok.`,
          `kamu berhenti sebentar, melihat dua pilihan tipe secara bergantian, lalu menentukan arah berdasarkan keadaan paling konkret saat itu.`,
          `kamu lebih dulu mencoba pendekatan ${a}, lalu baru pindah ke cara ${b} jika situasinya mendesak.`,
          `kamu langsung bergerak lewat gaya batin ${a}, membangun langkah dari sana, dan hampir tidak melirik cara ${b}.`
        ];
        return {
          value: val as any,
          label: labels[val - 1] || "",
          meaning: meanings[val - 1] || "",
          reaction: `Pas membela diri atau mengambil keputusan penting, ${listReactions[val - 1]}`
        };
      });

      ALL_QUESTIONS.push({
        id: qId,
        kind: "tie-break",
        element: "Ne", // Baseline comparison cell Ne + producer
        channel: "producer",
        context: "decision",
        scale: "comparison",
        statement: state,
        sourceSituation: `Pembeda antara ${a} dan ${b} #${idx}`,
        sourceResponse: state,
        responseFocus: `perbedaan tipe ${a} - ${b}`,
        options,
        tieBreak: { a, b }
      });
    }
  });
};

function generateOptions(element: InformationElement, channel: MeasurementChannel, scale: ScaleType, situation: string): QuestionOption[] {
  return [1, 2, 3, 4, 5].map((val) => {
    return {
      value: val as any,
      label: SCALE_LABELS[scale][val - 1] || "",
      meaning: getMeaning(element, channel, val),
      reaction: getReaction(element, channel, val, situation)
    };
  });
}

// EXECUTE systematic builder
createCoreQuestions();
createHoldoutQuestions();
createTieBreakQuestions();

export const getCoreQuestions = () => ALL_QUESTIONS.filter((q) => q.kind === "core");
export const getHoldoutQuestions = () => ALL_QUESTIONS.filter((q) => q.kind === "holdout");
export const getTieBreakQuestions = () => ALL_QUESTIONS.filter((q) => q.kind === "tie-break");
export const QUESTION_BY_ID = new Map(ALL_QUESTIONS.map((q) => [q.id, q] as const));

// Original backup mapping variable name for App compatibility
export const SOCIONICS_QUESTIONS = getCoreQuestions();
