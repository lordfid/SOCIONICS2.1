/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const SOCIONICS_QUESTIONS: Question[] = [
  // === DIMENSIONAL DICHOTOMY 1: EI (Extravert vs Introvert) ===
  {
    id: 'ei_1',
    dimension: 'EI',
    text: 'Kalau tiba-tiba butuh pertolongan darurat atau arah jalan di fasilitas umum...',
    optionA: 'Aku nggak masalah langsung nyamperin dan nanya orang asing dengan santai (misalnya, langsung minta tolong satpam mal atau nanya jalan ke mas-mas ojol tanpa ragu).',
    optionB: 'Aku mending nahan rasa nggak nyaman dikit atau muter-muter nyari info sendiri di Google Maps ketimbang harus langsung menyapa orang asing.'
  },
  {
    id: 'ei_2',
    dimension: 'EI',
    text: 'Ketika masuk ke lingkungan sosial baru—seperti grup chat proyekan baru atau kafe yang lambat laun makin ramai...',
    optionA: 'Mataku langsung otomatis nyapu sekeliling, nyari celah buat nimbrung obrolan, atau langsung menyapa orang sekitar biar suasananya meriah.',
    optionB: 'Aku lebih nyaman nyari tempat pojok yang tenang, mengamati gerak-gerik orang lain, dan bersiap merespons secara halus saja.'
  },
  {
    id: 'ei_3',
    dimension: 'EI',
    text: 'Urusan mengisi kembali energi emosional setelah seminggu penuh kerja keras...',
    optionA: 'Lebih efektif kalau pergi nongkrong bareng teman, curhat ramai-ramai, atau mengikuti acara yang banyak orang (misalnya, karaokean atau nobar bola).',
    optionB: 'Harus dilakukan secara mandiri (misalnya, seharian mengurung diri di rumah sambil nonton anime, menyalakan lilin harum, atau scroll media sosial tanpa diganggu chat).'
  },
  {
    id: 'ei_4',
    dimension: 'EI',
    text: 'Bila ada masalah ketegangan emosional atau konflik dingin di dalam tim...',
    optionA: 'Aku memilih melontarkan masalah itu secara terbuka biar semua orang cepat klarifikasi (misalnya, bilang di grup: "Ini suasananya kok agak aneh ya, ada apa?").',
    optionB: 'Aku mending mundur teratur, memblokir gangguan suara tersebut lewat mode noise-cancelling, dan fokus menyelesaikan pekerjaanku.'
  },
  {
    id: 'ei_5',
    dimension: 'EI',
    text: 'Dalam membangun relasi atau berteman dengan orang baru...',
    optionA: 'Aku biasanya menjadi pihak yang aktif memulai percakapan, menawarkan nomor WhatsApp, atau mengusulkan rencana pergi nongkrong bareng.',
    optionB: 'Aku cenderung menunggu orang tersebut menunjukkan tanda ketertarikan yang jelas, baru aku merespons secara ramah.'
  },
  {
    id: 'ei_6',
    dimension: 'EI',
    text: 'Gaya berjalan, gestur tubuh, dan cara bicaramu dinilai orang lain sebagai...',
    optionA: 'Lebih berenergi, aktif berpindah tempat, intonasi suara jelas, dan mudah didengar dari kejauhan.',
    optionB: 'Tenang, hemat gerakan, suara lebih pelan, dan cenderung mempertahankan ruang personal agar tidak terlalu dekat dengan orang lain.'
  },
  {
    id: 'ei_7',
    dimension: 'EI',
    text: 'Saat mendengar ceramah atau materi seminar yang membosankan...',
    optionA: 'Aku gatal ingin mengajukan pertanyaan menantang, menguap secara kasat mata, atau berbisik ngajak ngobrol orang di sebelahku.',
    optionB: 'Aku memilih menatap pembicara dengan sopan padahal batin sudah melayang memikirkan masa depan atau mencoret-coret kertas catatan.'
  },
  {
    id: 'ei_8',
    dimension: 'EI',
    text: 'Bagaimana caramu memproses perasaan bahagia atau sedih?',
    optionA: 'Aku perlu mengekspresikannya keluar (misalnya, langsung curhat ke teman dekat, nulis status medsos, atau meluapkan amarah saat itu juga).',
    optionB: 'Aku mengendapkannya di dalam kepala, memikirkan artinya sendiri secara mendalam sampai batin kembali seimbang.'
  },
  {
    id: 'ei_9',
    dimension: 'EI',
    text: 'Dalam berkolaborasi di sebuah proyek kerja atau kepanitiaan...',
    optionA: 'Aku lebih suka menjadi koordinator utama yang mengatur jalannya alur, membagi tugas, dan memimpin rapat besar.',
    optionB: 'Aku mending jadi eksekutor mandiri di belakang layar yang konsentrasi menyelesaikan tugas jatahku secara rapi.'
  },
  {
    id: 'ei_10',
    dimension: 'EI',
    text: 'Ketika diajak mendadak pergi nongkrong ke tempat eksotis oleh teman...',
    optionA: 'Aku langsung bilang "gas!" tanpa banyak tanya, lalu buru-buru siap-siap dalam lima menit.',
    optionB: 'Aku bakal ragu-ragu dulu, memikirkan kenyamanan fisikku, sisa energi lambat laun, baru memutuskan ikut atau tidak.'
  },
  {
    id: 'ei_11',
    dimension: 'EI',
    text: 'Saat ada teman bertengkar sengit di depan matamu...',
    optionA: 'Aku spontan melerai mereka, memandu mediasi, atau berusaha mengalihkan perhatian lewat banyolan santai.',
    optionB: 'Aku memilih melangkah menjauh perlahan biar nggak ikut kesedot ke dalam pusaran emosi mereka yang melelahkan.'
  },
  {
    id: 'ei_12',
    dimension: 'EI',
    text: 'Cara berpikirmu sehari-hari terdorong kuat oleh...',
    optionA: 'Objek-objek di sekelilingku: apa yang bisa kulakukan dengan mainan, manusia, uang, atau kesempatan di luar.',
    optionB: 'Sudut pandang subjektifku: nilai kebaikan, analisis logika internal, dan interpretasi batinku terhadap keadaan sekitar.'
  },

  // === DIMENSIONAL DICHOTOMY 2: JP (Rational vs Irrational) ===
  {
    id: 'jp_1',
    dimension: 'JP',
    text: 'Sikapmu ketika rutinitas harian yang sudah direncanakan terus-menerus terganggu oleh hal tak terduga...',
    optionA: 'Aku sangat terganggu, kesal, dan merasa tidak nyaman gara-gara keadaan jadi berjalan tanpa kendali.',
    optionB: 'Aku santai saja, menganggap gangguan sebagai bumbu kehidupan yang bikin suasana makin dinamis dan menantang.'
  },
  {
    id: 'jp_2',
    dimension: 'JP',
    text: 'Dalam hal menyelesaikan pengerjaan tugas atau kewajiban...',
    optionA: 'Aku menyusun jadwal pengerjaan secara konsisten dan terbagi merata (misalnya, harus selesai 3 halaman per hari dari jauh hari).',
    optionB: 'Aku lebih memilih mengulur waktu sampai dapet sentakan energi emosional di menit-menit akhir mendekati deadline.'
  },
  {
    id: 'jp_3',
    dimension: 'JP',
    text: 'Kebiasaan makan, belanja, dan tidurmu sehari-hari...',
    optionA: 'Terstruktur, terjadwal, dan konsisten (misalnya, tidur sebelum jam 11 malam dan makan selalu di jam yang sama tiap harinya).',
    optionB: 'Sangat dinamis mengikuti gejolak tubuh (kadang lapar jam 2 pagi langsung bikin mi instan, kadang marathon game sampai subuh).'
  },
  {
    id: 'jp_4',
    dimension: 'JP',
    text: 'Saat dihadapkan pada ketidakpastian rencana liburan depan...',
    optionA: 'Aku buru-buru pengen dapet tiket transportasi, booking penginapan, dan menyusun rute biar batin tenang.',
    optionB: 'Aku mending berangkat doloan, urusan penginapan dan destinasi ntar dipikir pas nyampe tujuan biar petualangannya seru.'
  },
  {
    id: 'jp_5',
    dimension: 'JP',
    text: 'Bila melihat keadaan meja kerja atau lemari kamarmu sedang berantakan...',
    optionA: 'Nafsu makanku langsung berkurang sebelum kubereskan rapi (segala sesuatu harus berada di kotak kategorinya).',
    optionB: 'Aku biarin aja, toh aku tetep hapal kira-kira benda yang kucari terletak di tumpukan sebelah mana.'
  },
  {
    id: 'jp_6',
    dimension: 'JP',
    text: 'Saat membuat janji kumpul santai dengan kawan lama...',
    optionA: 'Aku mencatat hari, tanggal, dan jam spesifiknya di kalender Google, lalu kesal kalau ada yang telat datang.',
    optionB: 'Aku mengalir saja: "Nanti kabari aja kalau udah di lokasi," tanpa membuat rencana jam super presisi.'
  },
  {
    id: 'jp_7',
    dimension: 'JP',
    text: 'Saat berjalan melewati genangan air atau rintangan di trotoar jalan raya...',
    optionA: 'Aku spontan menghentikan langkah sejenak untuk memikirkan rute aman agar sepatu tidak basah (1, 3),',
    optionB: 'Aku langsung main lompat saja secara refleks tanpa repot-repot memikirkannya terlebih dahulu (7, 9).'
  },
  {
    id: 'jp_8',
    dimension: 'JP',
    text: 'Bagi hidupmu, keberadaan rencana cadangan (Plan B)...',
    optionA: 'Wajib disiapkan sejak awal biar kalau ada apa-apa struktur hidup tidak mendadak roboh.',
    optionB: 'Nggak terlalu penting, karena ntar pas kejadian otakku malah lebih lincah mikir dadakan.'
  },
  {
    id: 'jp_9',
    dimension: 'JP',
    text: 'Gimana caramu membiasakan diri dengan tempat tinggal baru atau kos baru?',
    optionA: 'Aku menata kamar secepat mungkin, menghafal rute jalan terdekat, dan menyusun rutinitas baru biar cepat betah.',
    optionB: 'Aku biarin mengalir perlahan, adaptasi pelan-pelan sambil menikmati suasana yang belum teratur seutuhnya.'
  },
  {
    id: 'jp_10',
    dimension: 'JP',
    text: 'Apakah kamu orang yang suka melakukan multitasking (menyelesaikan beberapa tugas sekaligus)?',
    optionA: 'Nggak suka, itu bikin pikiranku buyar. Aku harus purnakan satu pekerjaan dulu baru berpindah ke urusan lain.',
    optionB: 'Biasa saja, aku malah gampang bosan kalau cuma ngerjain satu hal monoton berjam-jam (biasa diselingi main game/ngopi).'
  },
  {
    id: 'jp_11',
    dimension: 'JP',
    text: 'Dalam membuat keputusan besar seperti urusan karier atau jurusan kuliah...',
    optionA: 'Aku riset mendalam, menimbang untung-rugi secara terstruktur jangka panjang sebelum mantap melangkah.',
    optionB: 'Aku ikuti ke mana insting dan seleraku menuntun saat kesempatan emas itu mendadak muncul di depan muka.'
  },
  {
    id: 'jp_12',
    dimension: 'JP',
    text: 'Perubahan cuaca mendadak dari panas terik langsung hujan badai membuatmu...',
    optionA: 'Kecewa berat karena merusak seluruh agenda kegiatan outdoor-ku yang sudah dijadwalkan matang.',
    optionB: 'Langsung santai mengubah konsep acara (misalnya, mending pesan kopi hangat dan nikmatin syahdu suara air).'
  },

  // === DIMENSIONAL DICHOTOMY 3: FT (Feeling vs Thinking) ===
  {
    id: 'ft_1',
    dimension: 'FT',
    text: 'Saat memberi saran kepada teman yang sedang menghadapi badai masalah hidup...',
    optionA: 'Aku mengutamakan kehangatan relasi dan kata motivasi manis (misalnya, bilang "yang sabar ya, badai pasti berlalu" sambil nemenin dengerin curhat).',
    optionB: 'Aku lebih percaya pada solusi taktis dan bukti nyata (misalnya, mending ngasih kontak psikolog terpercaya ketimbang sekadar basi-basi kata mutiara).'
  },
  {
    id: 'ft_2',
    dimension: 'FT',
    text: 'Ketika menilai kehebatan seorang ilmuwan atau pakar...',
    optionA: 'Aku kagum dengan gagasannya yang bernilai kemanusiaan tinggi, membawa damai, dan peduli nasib orang tertindas.',
    optionB: 'Aku fokus murni pada keakuratan logika teori, kejernihan argumentasinya, dan kekuatan data empiris yang diperolehnya.'
  },
  {
    id: 'ft_3',
    dimension: 'FT',
    text: 'Menghadapi perdebatan atau beda pendapat di ruang rapat...',
    optionA: 'Aku gampang batinnya terguncang kalau suasananya berubah tegang, mending mengalah asal pertemanan tetap sedap dipandang.',
    optionB: 'Aku tetap kokoh mempertahankan argumentasiku selama fakta logika yang kupegang benar, urusan sentimen ntar dulu.'
  },
  {
    id: 'ft_4',
    dimension: 'FT',
    text: 'Bila dituduh berbuat salah secara tidak adil oleh atasan/rekan kerja...',
    optionA: 'Perasaanku langsung terluka dalam, batin rasanya terpuruk dan butuh waktu lama buat memulihkan diri dari kekecewaan.',
    optionB: 'Aku langsung menyanggah tuduhan tersebut memakai bukti logis, tabel kronologi kejadian, dan menyelesaikannya secara taktis.'
  },
  {
    id: 'ft_5',
    dimension: 'FT',
    text: 'Dalam berkomunikasi sehari-hari, kamu lebih mahir dalam...',
    optionA: 'Membaca bahasa tubuh halus, mendeteksi keraguan lewat tatapan mata, dan mengatur kedekatan emosional.',
    optionB: 'Menjelaskan konsep rumit memakai sistematika rapi agar orang lain tidak salah paham memahami alur pikirku.'
  },
  {
    id: 'ft_6',
    dimension: 'FT',
    text: 'Bagaimana caramu mengomentari plot-hole atau adegan tidak logis dari film drama romantis?',
    optionA: 'Aku nggak terlalu peduli logis-tidaknya asal emosi dan getaran cintanya dapet sampai bikin mataku berkaca-kaca.',
    optionB: 'Aku gatal ingin mengecam kebodohan tindakan pahlawannya yang benar-benar tidak masuk akal sehat.'
  },
  {
    id: 'ft_7',
    dimension: 'FT',
    text: 'Bila diajak berkumpul oleh tetangga baru untuk sekadar basa-basi ngobrol sore...',
    optionA: 'Aku menyambutnya hangat, bersikap ramah, tersenyum, dan aktif membicarakan isu-isu keluarga atau sosial.',
    optionB: 'Aku merasa bingung harus ngobrol apa, batin rasanya canggung karena tidak ada urusan praktis yang perlu dibahas.'
  },
  {
    id: 'ft_8',
    dimension: 'FT',
    text: 'Sikapmu ketika harus menegur seseorang yang melanggar kesepakatan (misalnya, telat ngirim laporan)...',
    optionA: 'Aku menyusun kalimatnya sehalus mungkin lewat jalur pribadi ("Hai kak, maaf mengganggu, btw laporannya...") biar dia nggak berkecil hati.',
    optionB: 'Aku menegurnya langsung di depan forum atau menyuratinya secara tegas sesuai pasal denda demi profesionalitas kerja.'
  },
  {
    id: 'ft_9',
    dimension: 'FT',
    text: 'Bagimu, harmonisasi hubungan antarsesama manusia di bumi...',
    optionA: 'Merupakan kompas moral tertinggi yang mutlak harus diperjuangkan melebihi hukum ekonomi atau keuntungan materi.',
    optionB: 'Hanya bisa tercipta kalau sistem hukum, hak milik, and prosedur kompensasi berjalan secara rasional dan adil.'
  },
  {
    id: 'ft_10',
    dimension: 'FT',
    text: 'Saat melihat teman dekatmu melakukan kesalahan memalukan di depan publik...',
    optionA: 'Aku ikut merasa malu luar biasa, batin rasanya pengen melangkah menutupi tubuhnya biar dia nggak makin menderita.',
    optionB: 'Aku menatapnya dingin, mencerna situasinya dari jauh, lalu menganggap kegagalan itu murni akibat keteledorannya sendiri.'
  },
  {
    id: 'ft_11',
    dimension: 'FT',
    text: 'Bila pasangan atau teman dekatmu mendadak bersikap dingin tanpa sebab...',
    optionA: 'Aku langsung overthinking, menyisir kembali chat-chat lama barangkali ada salah ketikku yang bikin perasaannya terluka.',
    optionB: 'Aku bersikap santai, menunggunya tenang duluan ketimbang sibuk menebak drama emosi yang melelahkan.'
  },
  {
    id: 'ft_12',
    dimension: 'FT',
    text: 'Dalam menilai kesuksesan hidup seseorang...',
    optionA: 'Aku melihat dari seberapa banyak cinta kasih yang ia tebarkan dan seberapa bahagia keluarganya sehari-hari.',
    optionB: 'Aku mengukurnya dari seberapa besar taring kemandirian ekonominya, efisiensinya memimpin bisnis, dan pencapaian konkret kerja.'
  },

  // === DIMENSIONAL DICHOTOMY 4: SN (Sensation vs Intuition) ===
  {
    id: 'sn_1',
    dimension: 'SN',
    text: 'Ketika ditanya ibu untuk mengambil keju yang ada di kulkas...',
    optionA: 'Aku langsung menemukan keju tersebut tepat di depan mataku berkat kejelian mataku membaca objek material.',
    optionB: 'Aku sering kebingungan mencarinya ke mana-mana, padahal kejunya diletakkan tepat di depan mukaku (mataku sering melewatkan detail fisik).'
  },
  {
    id: 'sn_2',
    dimension: 'SN',
    text: 'Dalam menjalani hidup, pikiranmu lebih sering berkelana ke...',
    optionA: 'Dunia nyata di hadapanku saat ini: keindahan bentuk taman, rasa nikmat makanan pedas, atau kesehatan fisikku.',
    optionB: 'Dunia ide, perenungan abstrak, merancang kemungkinan karir, atau hanyut dalam imajinasi masa depan.'
  },
  {
    id: 'sn_3',
    dimension: 'SN',
    text: 'Saat berjalan menyusuri trotoar perkotaan...',
    optionA: 'Aku peka banget melihat detail keindahan arsitektur bangunan, aroma bakso gerobak, and baju modis mas-mas kantoran.',
    optionB: 'Aku tenggelam memikirkan teori sejarah perkembangan kota, masalah eksistensial, dsb. sampai hampir tersandung lubang got.'
  },
  {
    id: 'sn_4',
    dimension: 'SN',
    text: 'Bagaimana tanggapanmu terhadap kenyamanan fisik (seperti kasur yang empuk, AC yang sejuk)?',
    optionA: 'Itu kebutuhan utama hidup demi ketenangan jiwa. Aku ahli banget menata dekorasi kamar and menyeduh teh harum.',
    optionB: 'Aku lumayan abai, kamar agak berantakan atau tidur di tikar keras pun santai saja asal pikiranku lagi fokus ngerjain riset hebat.'
  },
  {
    id: 'sn_5',
    dimension: 'SN',
    text: 'Saat menceritakan pengalaman liburanmu kepada kawan...',
    optionA: 'Aku menjelaskan detail sensorisnya secara nyata (misalnya, empuknya kasur hotel, aroma belerang gunung, and gurihnya sate kambing).',
    optionB: 'Aku membagikan makna filosofisnya, sketsa suasananya secara puitis, and refleksi hidup yang kuperoleh saat menatap bintang.'
  },
  {
    id: 'sn_6',
    dimension: 'SN',
    text: 'Menghadapi datangnya ramalan krisis ekonomi atau perubahan pasar global...',
    optionA: 'Aku fokus mengamankan kas nyata: membeli aset fisik emas, menimbun beras di lumbung dapur, and berhemat harian.',
    optionB: 'Aku sibuk membaca tren pola masa depan, bersiap-siap meluncurkan rintisan start-up baru yang menjawab tantangan zaman.'
  },
  {
    id: 'sn_7',
    dimension: 'SN',
    text: 'Dalam membuat karya kerajinan tangan atau memasak makanan...',
    optionA: 'Aku sangat teliti, kerapian jahitannya harus mulus, and takaran bumbu masakan harus pas agar rasanya sempurna.',
    optionB: 'Aku lebih seneng mencampur bahan secara acak demi bereksperimen melahirkan cita rasa aneh yang baru.'
  },
  {
    id: 'sn_8',
    dimension: 'SN',
    text: 'Ketika ditanya tentang hobi kesukaanmu...',
    optionA: 'Hobiku lebih banyak melibatkan koordinasi fisik nyata (seperti olahraga renang, memasak, merawat tanaman hias, atau traveling fisik).',
    optionB: 'Hobiku lebih banyak urusan olah pikir (seperti catur, membaca teori konspirasi, menulis puisi, atau berdiskusi filsafat).'
  },
  {
    id: 'sn_9',
    dimension: 'SN',
    text: 'Bila melihat bercak kotor kecil di lengan baju teman atau kancing jaketnya yang copot...',
    optionA: 'Aku langsung peka menyadarinya dalam sedetik, lalu gatal ingin segera memberitahu atau ngebantu ngerapihin bajunya.',
    optionB: 'Aku sering abai sama sekali sampai temanku sendiri yang sadar setelah bercermin di wastafel kafe.'
  },
  {
    id: 'sn_10',
    dimension: 'SN',
    text: 'Pandanganmu tentang keberadaan ramalan zodiak, intuisi magis, atau hal gaib misterius...',
    optionA: 'Aku skeptis berat, hidup ini cuma urusan apa yang bisa disentuh indra, fakta nyata, and hitungan matematika ilmiah.',
    optionB: 'Aku menganggap hal itu seru dan menyimpan kebenaran tersembunyi yang belum bisa didefinisikan sains modern.'
  },
  {
    id: 'sn_11',
    dimension: 'SN',
    text: 'Ketika menderita sakit (seperti flu atau demam)...',
    optionA: 'Aku peka banget membaca alarm tubuhku, tahu kapan harus segera minum obat spesifik, and frustrasi kalau obatnya telat bekerja dlm dua hari.',
    optionB: 'Aku mending nahan sakitnya sambil meyakini tubuh bakal sembuh sendiri lewat kekuatan batin dan istirahat sesempatnya.'
  },
  {
    id: 'sn_12',
    dimension: 'SN',
    text: 'Gaya berdandan and pakaian yang kamu pilih sehari-hari...',
    optionA: 'Elegis, necis, wangi, and serasi warnanya agar enak dipandang mata orang lain di tempat umum (sadar penuh estetika tubuh).',
    optionB: 'Praktis, fungsional, apa adanya (kadang asal comot kaos polos yang terletak paling atas di tumpukan baju lemariku).'
  }
];
