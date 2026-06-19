import type { 
  SocionicsQuestion, 
  QuestionOption, 
  InformationElement, 
  MeasurementChannel, 
  ScaleType, 
  QuestionKind, 
  SocionicsType,
  ScenarioCategory
} from "../types";

export const ELEMENTS: InformationElement[] = ["Ne", "Ni", "Se", "Si", "Te", "Ti", "Fe", "Fi"];
export const CHANNELS: MeasurementChannel[] = ["producer", "flexible", "mask", "threat", "receiver", "aspiration", "dismissive", "background"];

export const SCALE_MAP: Record<MeasurementChannel, ScaleType> = {
  producer: "comfort",
  flexible: "comfort",
  mask: "comfort",
  threat: "threat",
  receiver: "relief",
  aspiration: "recognition",
  dismissive: "frequency",
  background: "automaticity",
};

const SCALE_LABELS: Record<string, string[]> = {
  automaticity: ["Sangat Tidak Spontan", "Harus Kupikirkan Lama", "Kadang Spontan", "Cukup Spontan", "Sangat Spontan & Refleks"],
  comfort: ["Sangat Menguras Tenaga", "Cukup Melelahkan", "Netral/Proporsional", "Cukup Nyaman", "Sangat Nyaman & Alami"],
  frequency: ["Tidak Pernah", "Jarang Sekali", "Sesekali Saja", "Cukup Sering", "Hampir Selalu"],
  threat: ["Sama Sekali Tidak Terancam", "Sedikit Risih", "Lumayan Tertekan", "Sangat Kaku & Tertekan", "Membuatku Beku, Defensif & Menghindar"],
  relief: ["Sama Sekali Tidak Membantu", "Sedikit Mengurangi Beban", "Cukup Menenangkan", "Sangat Membantu", "Sangat Melegakan & Menyembuhkan"],
  recognition: ["Tidak Ada Keinginan", "Biasa Saja", "Menyenangkan Jika Dipuji", "Sangat Berarti Bagi Batin", "Sangat Menyentuh Kebutuhan Terdalamku"],
  comparison: ["Jauh lebih dekat Sisi B", "Agak lebih dekat Sisi B", "Seimbang di Tengah", "Agak lebih dekat Sisi A", "Jauh lebih dekat Sisi A"]
};

// Programmatic mapping of the 256 core questions to satisfy exact real-world scenario requirements and Model A logic
interface CoreSeed {
  e: InformationElement;
  ch: MeasurementChannel;
  cat: ScenarioCategory;
  ctx: string;
  stmt: string;
}

const CORE_SEEDS: CoreSeed[] = [
  // == Ne (Eksplorasi Kemungkinan & Potensi Sekitar) ==
  { e: "Ne", ch: "producer", cat: "daily_basic", ctx: "Wifi kosan mendadak mati total padahal tugas kuliah harus dikirim jam ini.", stmt: "Aku refleks mencari alternatif jitu, segera menambatkan internet HP teman atau numpang ke warung sebelah." },
  { e: "Ne", ch: "producer", cat: "chat_medsos", ctx: "Melihat story Instagram teman menceritakan hobi aneh yang belum pernah kudengar.", stmt: "Aku spontan mencari tahu asal-usulnya di web dan langsung memikirkan sepuluh ide kreatif bernilai jual dari hobi itu." },
  { e: "Ne", ch: "producer", cat: "asmara", ctx: "Gebetan membatalkan kencan malam minggu pertama secara mendadak karena alasan cuaca buruk.", stmt: "Aku langsung memunculkan ide kencan virtual seru atau main gawai daring bersama agar malam kami tetap ceria." },
  { e: "Ne", ch: "producer", cat: "keluarga", ctx: "Keluarga mati gaya di ruang tamu karena mati listrik berjam-jam saat kumpul lebaran.", stmt: "Aku refleks berputar mencari permainan tebak kata atau curhat misteri agar seisi ruangan ramai bercerita." },

  { e: "Ne", ch: "flexible", cat: "persahabatan", ctx: "Liburan kelompok mendadak kacau karena tempat wisata tujuan pertama ternyata tutup.", stmt: "Aku dengan santai membelokkan rute ke kafe unik atau tempat tersembunyi yang tak kalah seru tanpa panik." },
  { e: "Ne", ch: "flexible", cat: "kerja_shift", ctx: "Bahan utama menu andalan di kedai FnB habis saat jam makan siang yang ramai pelanggan.", stmt: "Aku luwes meramu substitusi bahan lain atau membuat nama menu edisi terbatas di papan tulis kasir." },
  { e: "Ne", ch: "flexible", cat: "sekolah", ctx: "Sistem ujian online kampus mendadak eror di tengah jalan saat pengerjaan soal esai.", stmt: "Aku langsung menyalin draf jawaban ke dokumen lokal lalu mencari celah kontak panitia dengan kepala dingin." },
  { e: "Ne", ch: "flexible", cat: "uang", ctx: "Anggaran bulanan habis pertengahan bulan akibat pengeluaran tak terduga.", stmt: "Aku luwes memutar otak mencari barter jasa, promo makanan tersembunyi, atau mengolah sisa bahan kulkas kreatif." },

  { e: "Ne", ch: "mask", cat: "kerja_kantor", ctx: "Ditunjuk mewakili divisi mempresentasikan proyek baru di hadapan direksi perusahaan.", stmt: "Aku sengaja berlagak visioner, memakai banyak istilah tren masa depan, dan merancang bagan kemungkinan yang memukau." },
  { e: "Ne", ch: "mask", cat: "keluarga", ctx: "Menghadiri reuni keluarga besar yang menuntut setiap anak muda menceritakan rencana masa depannya.", stmt: "Aku memoles cerita dengan draf rencana karier mentereng dan opsi bisnis cadangan agar dinilai cerdas dan visioner." },
  { e: "Ne", ch: "mask", cat: "chat_medsos", ctx: "Ingin membangun citra profesional di platform LinkedIn agar dilirik perekrut kerja.", stmt: "Aku rajin membagikan opini tren industri dan meramal draf inovasi baru demi membangun persona pakar kreatif." },
  { e: "Ne", ch: "mask", cat: "sekolah", ctx: "Rapat perdana organisasi kampus baru untuk menetapkan jargon dan visi misi tahun ini.", stmt: "Aku sengaja melempar kata-kata inspiratif dan ide program kerja berskala nasional agar terlihat menonjol." },

  { e: "Ne", ch: "threat", cat: "kegagalan", ctx: "Diminta menebak kelanjutan masa depan proyek tim yang datanya sangat minim dan tidak beraturan.", stmt: "Aku mendadak pusing, merasa terancam berspekulasi tanpa dasar kuat, lalu memilih diam menghindar." },
  { e: "Ne", ch: "threat", cat: "tubuh_lelah", ctx: "Rekan kerja membombardir obrolan dengan spekulasi liar dan teori konspirasi saat kepalaku sakit.", stmt: "Aku merasa tertekan, kaku mual, dan mendadak menutup obrolat secara dingin demi ketenangan telingaku." },
  { e: "Ne", ch: "threat", cat: "asmara", ctx: "Pasangan tiba-tiba bertanya 'Bagaimana kalau sepuluh tahun lagi kita tidak punya rumah?' saat krisis keuangan.", stmt: "Aku langsung beku, merasa cemas luar biasa ditarik ke masa depan yang buram, lalu mengalihkan bahasan." },
  { e: "Ne", ch: "threat", cat: "duka", ctx: "Usaha rintisan kecil yang kurintis bertahun-tahun dinyatakan bangkrut total tanpa sisa modal.", stmt: "Aku merasa dunia runtuh, putus asa melihat semua kemungkinan tertutup, lalu mengurung diri berhari-hari." },

  { e: "Ne", ch: "receiver", cat: "daily_basic", ctx: "Terjebak dalam rutinitas harian kosan-kampus yang sangat monoton dan melelahkan batin.", stmt: "Aku merasa sangat lega jika ada teman supel yang datang membawa rencana jalan-jalan dadakan tanpa rencana matang." },
  { e: "Ne", ch: "receiver", cat: "sekolah", ctx: "Sedang buntu menyusun skripsi dan tidak tahu arah analisis bab pembahasan berikutnya.", stmt: "Dapat bimbingan dari dosen yang membuka perspektif baru dan memberi alternatif metode terasa sangat melegakan batin." },
  { e: "Ne", ch: "receiver", cat: "kerja_shift", ctx: "Menghadapi tumpukan komplain pelanggan kasir yang membuat kepala rasanya pusing bebal.", stmt: "Aku sangat terbantu jika ada supervisor yang langsung mencarikan solusi kreatif jalan tengah tak terduga." },
  { e: "Ne", ch: "receiver", cat: "asmara", ctx: "Merasa jenuh dengan hubungan percintaan yang begitu-begitu saja setiap akhir pekan.", stmt: "Aku bersyukur jika pasangan berinisiatif mengajak mencoba aktivitas baru yang menantang adrenalin bersama." },

  { e: "Ne", ch: "aspiration", cat: "kegagalan", ctx: "Membuat draf desain kreatif poster acara amal namun respon panitia biasa-biasa saja.", stmt: "Aku haus diakui bahwa ide yang kusembunyikan di balik poster itu sebenarnya sangat orisinal dan out-of-the-box." },
  { e: "Ne", ch: "aspiration", cat: "persahabatan", ctx: "Memberi masukan solusi alternatif saat teman karib curhat masalah pekerjaannya yang buntu.", stmt: "Ada rasa bangga tak terkira jika dia memuji cara berpikirku yang unik dan menganggap solusiku mencerahkan." },
  { e: "Ne", ch: "aspiration", cat: "kerja_kantor", ctx: "Rapat evaluasi tahunan perusahaan untuk merancang strategi bertahan dari krisis ekonomi.", stmt: "Aku berambisi menghasilkan usulan inovatif yang diakui banyak divisi sebagai draf penyelamat masa depan tim." },
  { e: "Ne", ch: "aspiration", cat: "chat_medsos", ctx: "Mengirimkan utas pemikiran mandiri di media sosial mengenai masa depan dunia kerja berbasis AI.", stmt: "Aku merasa sangat senang jika utas tersebut viral dan para pakar memuji kedalaman imajinasi kreatifku." },

  { e: "Ne", ch: "dismissive", cat: "daily_basic", ctx: "Melihat ada banyak celah usaha atau inovasi menarik saat berjalan-jalan di pasar tradisional.", stmt: "Aku bisa dengan mudah memetakan pasar itu, tapi memilih mengabaikannya dan fokus belanja kebutuhan memasak saja." },
  { e: "Ne", ch: "dismissive", cat: "sekolah", ctx: "Menyadari ada banyak topik penelitian unik untuk tugas akhir kuliah yang belum pernah diambil mahasiswa.", stmt: "Aku malas mengambil topik rumit itu dan mending memilih judul biasa yang aman biar cepat lulus." },
  { e: "Ne", ch: "dismissive", cat: "persahabatan", ctx: "Teman kelompok sibuk berdebat panjang lebar memperebutkan lokasi pameran karya akhir yang estetik.", stmt: "Aku malas ikut larut dalam debat estetik alternatif lokasi dan mending tidur siang di pojok perpustakaan." },
  { e: "Ne", ch: "dismissive", cat: "uang", ctx: "Menemukan barang-barang diskon aneh di e-commerce yang berpotensi dimodifikasi dan dijual kembali.", stmt: "Aku tahu cara memutarnya, tapi malas mengurusnya dan memilih menutup aplikasi untuk hemat uang." },

  { e: "Ne", ch: "background", cat: "daily_basic", ctx: "Berjalan kaki menyusuri trotoar jalan raya menuju tempat kerja di pagi hari.", stmt: "Otakku secara otomatis menyaring tiang listrik, reklame, dan spanduk unik, memunculkan draf ide cerita fiksi." },
  { e: "Ne", ch: "background", cat: "chat_medsos", ctx: "Membaca sekilas obrolan acak di grup WhatsApp yang membahas kenaikan harga tiket konser.", stmt: "Bawah sadarku spontan memindai lima implikasi sosial-ekonomi dari fenomena ini tanpa perlu kupaksakan berpikir." },
  { e: "Ne", ch: "background", cat: "asmara", ctx: "Mengamati reaksi ekspresi asing pasangan saat dia menceritakan mimpinya semalam.", stmt: "Pikiranku refleks memetakan simbol-simbol mimpinya dan menghubungkannya dengan suasana hatinya akhir-akhir ini." },
  { e: "Ne", ch: "background", cat: "kerja_kantor", ctx: "Mendengar manajer mengeluh pelan mengenai penurunan performa penjualan bulan ini.", stmt: "Radar kreatitf autopilot kepalaku langsung merakit skema pemasaran alternatif bahkan sebelum rapat resmi dimulai." },

  // == Ni (Arah Waktu, Momentum, & Kematangan Makna) ==
  { e: "Ni", ch: "producer", cat: "duka", ctx: "Suasana rumah duka penuh kepanikan setelah kepergian mendadak salah satu anggota keluarga.", stmt: "Aku refleks tenang, menarik diri, membaca arah jangka panjang situasi, lalu membimbing keluarga bersikap tabah." },
  { e: "Ni", ch: "producer", cat: "asmara", ctx: "Merasakan gelagat aneh dan perubahan dingin sikap pasangan semenjak seminggu terakhir.", stmt: "Batinku otomatis mencium arah akhir hubungan ini akan retak, lalu aku bersiap mental menerima konsekuensinya." },
  { e: "Ni", ch: "producer", cat: "kerja_kantor", ctx: "Tren pasar mendadak bergeser tajam dan membuat target kuartal divisi terancam gagal.", stmt: "Aku langsung menyendiri merenung, memprediksi titik jenuh tren baru, dan menyusun peta jalan bisnis cadangan." },
  { e: "Ni", ch: "producer", cat: "keluarga", ctx: "Adik sepupu meminta saran mengenai pilihan jurusan kuliah yang sangat bertolak belakang dengan impiannya.", stmt: "Aku refleks merenungkan panggilan jiwanya, memprediksi sepuluh tahun ke depan hidupnya, lalu memberi nasihat mendalam." },

  { e: "Ni", ch: "flexible", cat: "persahabatan", ctx: "Sahabat bersikeras ingin langsung investasi besar-besaran di bisnis tren baru yang belum jelas risikonya.", stmt: "Aku luwes mengingatkannya pelan-pelan mengenai siklus musiman jenis bisnis itu agar dia tidak terperosok." },
  { e: "Ni", ch: "flexible", cat: "sekolah", ctx: "Target kelulusan kuliah meleset akibat dosen pembimbing yang sangat lamban membalas revisi bab.", stmt: "Aku luwes menyesuaikan kembali peta hidup jangka panjangku tanpa emosi berlebih, mencari hikmah di balik jeda ini." },
  { e: "Ni", ch: "flexible", cat: "kerja_shift", ctx: "Toko mendadak sepi pengunjung berhari-hari akibat pembangunan jalan besar di depan ruko.", stmt: "Aku dengan tenang memanfaatkan waktu luang beradaptasi menyusun portofolio personal baru demi masa depan." },
  { e: "Ni", ch: "flexible", cat: "asmara", ctx: "Mengalami pasang surut emosional hebat bersama pasangan dalam menjalani hubungan komitmen.", stmt: "Aku luwes membaca siklus hubungan, tahu kapan harus mendekat dan kapan memberi jeda ruang agar hati kami matang." },

  { e: "Ni", ch: "mask", cat: "kerja_kantor", ctx: "Rapat pleno besar instansi perusahaan untuk memaparkan rencana strategis lima tahun ke depan.", stmt: "Aku sengaja berlagak filosofis, memaparkan visi spiritual jangka panjang dan draf pergeseran zaman demi dinilai matang." },
  { e: "Ni", ch: "mask", cat: "chat_medsos", ctx: "Menulis takarir (caption) di postingan media sosial pribadi mengenai pencapaian hidup berumur 25 tahun.", stmt: "Aku sengaja memilih kata-kata kontemplatif mengenai waktu, kesabaran, dan takdir agar terlihat berkarakter dalam." },
  { e: "Ni", ch: "mask", cat: "sekolah", ctx: "Wawancara seleksi beasiswa luar negeri yang menguji kesiapan mental menghadapi perbedaan kultur.", stmt: "Aku menampilkan draf perencanaan hidup matang, menceritakan pencapaian diri sebagai proses evolusi batin yang bermakna." },
  { e: "Ni", ch: "mask", cat: "persahabatan", ctx: "Acara nongkrong malam bersama teman diskusi perkumpulan buku filsafat atau komunitas kreatif.", stmt: "Aku sengaja memancing obrolan mendalam mengenai arti hidup dan ke fanaan dunia agar terlihat bijaksana." },

  { e: "Ni", ch: "threat", cat: "kegagalan", ctx: "Didesak mengambil keputusan bisnis cepat saat data lapangan sangat dinamis berubah per jam.", stmt: "Aku merasa pusing kaku, cemas setengah mati jika melangkah tanpa tahu arah akhir konsekuensinya, lalu menghindar." },
  { e: "Ni", ch: "threat", cat: "kerja_shift", ctx: "Jadwal shift kerja toko terus berubah mendadak tanpa pola yang jelas setiap minggunya.", stmt: "Ketidakpastian jadwal ini membuat batin and tubuhku luar biasa cemas tertekan, merasa kehilangan kendali arah hidup." },
  { e: "Ni", ch: "threat", cat: "keluarga", ctx: "Keluarga menuntutku segera menikah tahun ini tanpa mempedulikan kesiapan karir and mentalku.", stmt: "Aku merasa sesak, kaku membeku, merasa masa depanku diculik paksa, lalu cenderung mengurung diri defensif." },
  { e: "Ni", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong memprediksi dampak regulasi anyar pemerintah terhadap keberlangsungan tim kerja.", stmt: "Aku merasa kewalahan batin, pusing, and menolak keras membuat ramalan mendadak yang minim waktu perenungan." },

  { e: "Ni", ch: "receiver", cat: "daily_basic", ctx: "Pikiran terasa sangat bising dengan kekacauan aktivitas harian yang tak kunjung selesai.", stmt: "Aku sangat tenang and terbantu jika ada mentor bijak yang merangkum makna hidupku and mengurai ketenangan batin." },
  { e: "Ni", ch: "receiver", cat: "asmara", ctx: "Minder melihat kawan sebaya sudah mapan sementara hidup percintaanku masih luntang-lantung.", stmt: "Wejangan dari orang tua yang mengingatkanku bahwa setiap orang punya garis waktu sukses sendiri terasa melegakan batin." },
  { e: "Ni", ch: "receiver", cat: "sekolah", ctx: "Cemas memikirkan masa depan pasca lulus kuliah karena persaingan kerja yang luar biasa ketat.", stmt: "Aku sangat butuh wejangan dari alumni senior yang memberi peta jalan tenang cara meniti karir secara bertahap." },
  { e: "Ni", ch: "receiver", cat: "uang", ctx: "Kehilangan tabungan karena tertipu investasi bodong teman dekat kelompok.", stmt: "Aku merasa terselamatkan jika ada sahabat rohani yang merangkulku and mengingatkan tentang hikmah di balik duka." },

  { e: "Ni", ch: "aspiration", cat: "kegagalan", ctx: "Menulis draf esai refleksi spiritual yang mengulas arah perkembangan manusia modern.", stmt: "Aku sangat haus pengakuan bahwa analisis prediktifku dinilai mendalam and menjadi rujukan batin bagi pembaca." },
  { e: "Ni", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan ramalan tren teknologi masa depan di blog personal milik pribadi.", stmt: "Ada kebanggaan tersembunyi pas prediksi jangkauanku terbukti akurat and dinilai visioner oleh netizen komunitas." },
  { e: "Ni", ch: "aspiration", cat: "persahabatan", ctx: "Menyelamatkan teman kelompok dari keputusan fatal berkat firasat burukku yang terbukti benar.", stmt: "Aku sangat bahagia jika mereka mengakui ketajaman intuisiku and menyebutku sebagai jangkar penyelamat kelompok." },
  { e: "Ni", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengusulkan arah reposisi produk perusahaan agar relevan untuk satu dekade ke depan.", stmt: "Aku berharap visi jangka panjangku dihargai oleh direksi sebagai mahakarya strategi batin penentu masa depan." },

  { e: "Ni", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari ada pola nasib buruk berulang yang menimpa kehidupan tetangga dekat rumah kos.", stmt: "Aku tahu ke mana arah hidup mereka akan bermuara, tapi malas mencampuri and mending menyiram tanaman hias saja." },
  { e: "Ni", ch: "dismissive", cat: "asmara", ctx: "Melihat gelagat buruk sahabat dekat pacarku yang berpotensi merusak hubungan asmara kami.", stmt: "Aku malas mendebat and berkonfrontasi, menganggap duka asmara itu siklus alami, and memilih membiarkannya saja." },
  { e: "Ni", ch: "dismissive", cat: "uang", ctx: "Melihat tren koin kripto baru yang diramalkan akan meledak nilainya dalam waktu dekat.", stmt: "Aku paham siklus gelembung investasinya, tapi malas berspekulasi and memilih mengabaikan tren demi ketenangan batin." },
  { e: "Ni", ch: "dismissive", cat: "kerja_shift", ctx: "Menyadari draf manajemen kasir toko lambat laun akan kolaps akibat kelalaian kecil pemilik toko.", stmt: "Aku malas menasihatinya karena bos keras kepala, and memilih diam menyiapkan surat pengunduran diri pelan-pelan." },

  { e: "Ni", ch: "background", cat: "daily_basic", ctx: "Menatap rintik hujan dari balik jendela kamar kos di sore hari yang sepi.", stmt: "Pikiranku otomatis ditarik ke dalam samudra garis waktu masa lalu and masa depan, melamunkan kesementaraan batin." },
  { e: "Ni", ch: "background", cat: "chat_medsos", ctx: "Melihat unggahan pencapaian karir teman sekolah dasar yang sudah sukses luar biasa.", stmt: "Bawah sadarku refleks memindai siklus roda kehidupan and menenangkan hatiku bahwa semua ada masanya pas." },
  { e: "Ni", ch: "background", cat: "keluarga", ctx: "Melihat gurat keriput and rambut memutih di wajah kedua orang tua saat pulang kampung.", stmt: "Kesadaran akan waktu yang terus berlari and urgensi berbakti aktif otomatis di latar belakang batinku." },
  { e: "Ni", ch: "background", cat: "sekolah", ctx: "Berdiri di tengah keramaian wisuda kampus mengamati wajah gembira para lulusan.", stmt: "Otakku refleks menyaring makna kelulusan sebagai gerbang transisi menuju ujian hidup yang sesungguhnya." },

  // == Se (Tekanan Nyata, Batas, & Keberanian Bertindak) ==
  { e: "Se", ch: "producer", cat: "kerja_shift", ctx: "Melihat pengendara motor arogan menabrak gerobak penjual bakso lalu mencoba melarikan diri.", stmt: "Aku secara refleks langsung mengejar, menghadang jalan motornya, and memaksa dia turun bertanggung jawab." },
  { e: "Se", ch: "producer", cat: "kerja_shift", ctx: "Seorang pelanggan kafe berteriak marah-marah and menggebrak meja kasir karena pesanannya tertukar.", stmt: "Aku langsung maju tegak, menatap matanya secara tegas, menghentikan amukannya, and membereskan masalah detik itu." },
  { e: "Se", ch: "producer", cat: "persahabatan", ctx: "Kelompok diskusi melorot kinerjanya karena semua anggota malas and saling melempar tanggung jawab.", stmt: "Aku langsung mengambil kendali kepemimpinan, membagi tugas secara paksa, and menuntut semua menyelesaikannya sore ini." },
  { e: "Se", ch: "producer", cat: "asmara", ctx: "Pasangan digoda and diganggu secara lancang oleh sekelompok orang asing di depan minimarket.", stmt: "Aku refleks merapatkan badan, memberi tatapan menantang yang mengancam, and menghalau mereka pergi menjauh." },

  { e: "Se", ch: "flexible", cat: "daily_basic", ctx: "Terjebak kemacetan parah di jalan sempit saat harus mengantarkan draf dokumen penting.", stmt: "Aku luwes berkendara memotong antrean, mencari celah sempit di antara mobil, and berkendara gesit demi waktu." },
  { e: "Se", ch: "flexible", cat: "sekolah", ctx: "Dosen mendadak masuk kelas and mengadakan kuis lisan mendadak berskala besar tanpa persiapan.", stmt: "Aku luwes menguasai panggung, menjawab dengan nada mantap and gestur meyakinkan walau tidak hafal teori buku." },
  { e: "Se", ch: "flexible", cat: "uang", ctx: "Menghadapi penjual beringas di pasar loak yang terus menaikkan harga sepihak.", stmt: "Aku luwes menawar keras penuh nyali, memakai taktik psikologi gertak mundur, and mendapatkan harga murah." },
  { e: "Se", ch: "flexible", cat: "kerja_shift", ctx: "Event organizer kekurangan staf lapangan saat ribuan pengunjung mulai merangsek masuk pintu gerbang.", stmt: "Aku luwes beralih menjadi koordinator barikade, mengatur arus massa secara dinamis, and mengamankan situasi." },

  { e: "Se", ch: "mask", cat: "kerja_kantor", ctx: "Ditunjuk menjadi negosiator utama dalam draf kerja sama kontrak bisnis yang alot.", stmt: "Aku sengaja memakai setelan terbaik, menjabat tangan dengan sangat keras, and berbicara penuh otoritas kekuasaan." },
  { e: "Se", ch: "mask", cat: "chat_medsos", ctx: "Membangun personal branding di akun media sosial profesional milik pribadi.", stmt: "Aku memamerkan foto-foto berenergi tinggi, pose tegas memimpin rapat, and prestasi trofi kemenangan kerja." },
  { e: "Se", ch: "mask", cat: "sekolah", ctx: "Mencalonkan diri sebagai ketua Badan Eksekutif Mahasiswa (BEM) tingkat fakultas.", stmt: "Aku membawakan orasi berapi-api dengan intonasi menggelegar and bahasa tubuh dominan biar dinilai tangguh kuat." },
  { e: "Se", ch: "mask", cat: "keluarga", ctx: "Menghadiri rapat sengketa tanah warisan keluarga besar yang dihadiri banyak paman keras kepala.", stmt: "Aku sengaja berbicara vokal dengan suara tegas and menggebrak meja pelan agar batasan hak keluargaku dihargai." },

  { e: "Se", ch: "threat", cat: "kegagalan", ctx: "Berada dalam situasi konfrontasi fisik atau perdebatan sengit dengan nada suara membentak.", stmt: "Aku mendadak pusing tertekan, kaku membeku kehilangan nyali bertindak, and refleks melarikan diri mencari aman." },
  { e: "Se", ch: "threat", cat: "kerja_shift", ctx: "Diminta memaksakan target penjualan produk harian dengan cara menggertak and menekan calon pembeli.", stmt: "Aku merasa luar biasa risih and cemas tertekan, benci harus mengonfrontasi orang lain demi angka sales." },
  { e: "Se", ch: "threat", cat: "asmara", ctx: "Pasangan menunjukkan tanda mengontrol posesif and mengatur semua jadwal harian hidupku.", stmt: "Rasa tertekan luar biasa membuatku kehilangan daya, mendadak kaku beku, lalu diam-diam menghindar mutlak." },
  { e: "Se", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong memimpin demo atau aksi unjuk rasa massa di barisan terdepan jalan raya.", stmt: "Aku merasa pusing mual, luar biasa ketakutan disorot mata massa, and segera mundur ke barisan paling belakang." },

  { e: "Se", ch: "receiver", cat: "daily_basic", ctx: "Ragu and bimbang berhari-hari untuk mengeksekusi rencana bisnis yang sudah dirancang.", stmt: "Aku sangat lega jika ada partner berani yang langsung mendorong and mengeksekusiku untuk langsung bertindak konkret." },
  { e: "Se", ch: "receiver", cat: "asmara", ctx: "Suka pada seseorang tapi tidak kunjung berani menyatakan perasaan karena takut ditolak.", stmt: "Aku bersyukur didekatkan dengan sahabat tegas yang menjamin and menyeretku langsung menyatakan rasa padanya." },
  { e: "Se", ch: "receiver", cat: "sekolah", ctx: "Tugas akhir menumpuk and aku hanya malas-malasan tiduran di kasur kamar kosan.", stmt: "Kehadiran teman tegas yang mendatangi kamarku and memaksa dengan galak untuk bangun kerja terasa melegakan." },
  { e: "Se", ch: "receiver", cat: "uang", ctx: "Mengalami diskriminasi and ketidakadilan perlakuan saat mengurus administrasi kelurahan.", stmt: "Aku sangat terbantu jika ada pendamping berani yang langsung pasang badan and membentak balik petugas lalai." },

  { e: "Se", ch: "aspiration", cat: "kegagalan", ctx: "Berlatih keras dalam kejuaraan olahraga bela diri atau kompetisi debat bergengsi.", stmt: "Aku sangat haus akan pengakuan bahwa aku adalah petarung tangguh yang berani and bermental pemenang mutlak." },
  { e: "Se", ch: "aspiration", cat: "persahabatan", ctx: "Menantang dominasi orang arogan di kelompok yang selama ini menindas kawan-kawan lemah.", stmt: "Aku merasa bangga luar biasa jika dipuji sebagai pahlawan pemberani yang berhasil meruntuhkan dominasinya." },
  { e: "Se", cat: "kerja_kantor", ch: "aspiration", ctx: "Mengambil alih proyek darurat perusahaan yang hampir kolaps and sukses menyelesaikannya.", stmt: "Aku berharap kerja keras and nyali besarku memimpin krisis diakui direksi sebagai bukti kepemimpinan andal." },
  { e: "Se", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan video aksi nyata menghadapi premanisme atau ketidakadilan di jalan raya.", stmt: "Aku sangat senang jika unggahan tersebut diapresiasi ribuan netizen sebagai aksi keberanian yang inspiratif." },

  { e: "Se", ch: "dismissive", cat: "daily_basic", ctx: "Melihat ada antrean orang yang mencoba menyerobot antrean bahan bakar di SPBU.", stmt: "Aku bisa saja menegur and memaksanya mundur, tapi memilih malas ribut and mendengarkan musik di helm saja." },
  { e: "Se", ch: "dismissive", cat: "persahabatan", ctx: "Melihat kawan kelompok terlibat cekcok mulut hampir baku hantam dengan orang asing di kafe.", stmt: "Aku malas melerai and menganggap pertengkaran otot itu membosankan, mending lanjut minum es kopi susuku." },
  { e: "Se", ch: "dismissive", cat: "uang", ctx: "Teman kos berulang kali terlambat membayar utang kecil and selalu menghindar saat bertemu.", stmt: "Aku malas menagih keras and memilih merelakan uang itu demi kedamaian pikiranku tanpa drama konfrontasi." },
  { e: "Se", ch: "dismissive", cat: "asmara", ctx: "Pacar memancing emosiku dengan sengaja membahas mantan agar aku cemburu marrah.", stmt: "Aku tahu dia sedang memancing reaksi fisikku, tapi aku malas meladeni and memilih membalas datar acuh tak acuh." },

  { e: "Se", ch: "background", cat: "daily_basic", ctx: "Melompat menghindari lubang jalan saat berlari mengejar bus kota yang hampir jalan.", stmt: "Tubuhku bereaksi instan, refleks mengukur jarak and melompat secepat kilat tanpa perlu berpikir panjang." },
  { e: "Se", ch: "background", cat: "kerja_shift", ctx: "Gelas kaca berisi jus jeruk mendadak tersenggol and jatuh dari meja kasir restoran.", stmt: "Tangan and refleks autopilot-ku langsung menangkap gelas tersebut di udara sebelum sempat menyentuh lantai." },
  { e: "Se", ch: "background", cat: "keluarga", ctx: "Menyetir mobil di malam hari and tiba-tiba ada kucing menyeberang jalan mendadak.", stmt: "Kaki autopilot-ku langsung menginjak rem dengan kekuatan penuh sekejap mata, menyelamatkan nyawa kucing." },
  { e: "Se", ch: "background", cat: "sekolah", ctx: "Berada di tengah kepungan tawuran pelajar saat berjalan pulang sekolah melewati pasar.", stmt: "Radar bahaya tubuhku langsung bergetar kencang otomatis, menuntun kakiku berlari gesit mencari gang aman." },

  // == Si (Kenyamanan Tubuh, Detail Rasa, & Stabilitas) ==
  { e: "Si", ch: "producer", cat: "tubuh_lelah", ctx: "Badan mendadak terasa gerah, pegal, and kepala berat setelah seharian kuliah lapangan.", stmt: "Aku refleks langsung mandi air hangat, menyalakan AC kamar, menyeduh teh melati, and tidur memakai selimut paling lembut." },
  { e: "Si", ch: "producer", cat: "kerja_shift", ctx: "Melihat dapur kafe berantakan, bau sampah basah, and peralatan masak berminyak lengket.", stmt: "Aku refleks langsung mengusap meja, menyortir bahan busuk, and menyemprotkan pengharum sereh biar asri kembali." },
  { e: "Si", ch: "producer", cat: "daily_basic", ctx: "Membeli masakan soto ayam di warung pinggir jalan and rasanya ternyata hambar dingin.", stmt: "Aku spontan menambahkan racikan kecap, jeruk nipis, and sambal yang pas sampai rasa kuahnya gurih mantap." },
  { e: "Si", ch: "producer", cat: "keluarga", ctx: "Kamar tidur di rumah orang tua terasa sumpek and berdebu saat dikunjungi lebaran.", stmt: "Aku refleks merapikan sprei, mencuci selimut, and menyalakan aromaterapi agar kualitas tidur keluarga nyaman." },

  { e: "Si", ch: "flexible", cat: "persahabatan", ctx: "Diajak teman camping mendadak di gunung and ternyata tendanya bocor diguyur hujan deras.", stmt: "Aku luwes merancang draf alas plastik cadangan and merakit posisi tidur melingkar agar tubuh kami tetap hangat." },
  { e: "Si", ch: "flexible", cat: "sekolah", ctx: "Kursi and meja belajar di kelas kampus bergoyang and sangat tidak ergonomis dipakai ujian.", stmt: "Aku luwes menyelipkan draf ganjal kertas keras di kaki meja and menaruh tas di punggung biar posturku nyaman." },
  { e: "Si", ch: "flexible", cat: "uang", ctx: "Harus tinggal di penginapan murah bertarif miring dengan fasilitas kipas angin berisik.", stmt: "Aku luwes beradaptasi menyusun bantal, memakai penutup telinga, and menikmati tidur nyenyak tanpa keluhan." },
  { e: "Si", ch: "flexible", cat: "asmara", ctx: "Berjalan kaki menyusuri kebun raya bersama pasangan and tiba-tiba cuaca mendadak terik panas.", stmt: "Aku luwes membagi payung kecil, menawarkan kipas tangan, and membelokkan rute ke kedai es kelapa muda adem." },

  { e: "Si", ch: "mask", cat: "kerja_kantor", ctx: "Menghadiri jamuan makan malam formal bersama jajaran direksi and investor penting.", stmt: "Aku sengaja berlagak memahami detail kuliner, memuji tekstur rasa hidangan, and menikmati makanan secara anggun estetis." },
  { e: "Si", ch: "mask", cat: "keluarga", ctx: "Menjadi tuan rumah acara lamaran kakak yang dihadiri sanak famili terpandang.", stmt: "Aku menyajikan hidangan pembuka yang lezat, menata tata letak sofa super empuk, and memasang musik tenang adem." },
  { e: "Si", ch: "mask", cat: "chat_medsos", ctx: "Meresensi draf menu kedai kopi estetik baru di unggahan media sosial pribadi.", stmt: "Aku sengaja memotret sudut interior estetik, mengulas kelembutan busa susu, and detail rasa kue biar dinilai berkelas." },
  { e: "Si", ch: "mask", cat: "sekolah", ctx: "Menghias stand pameran karya akhir mahasiswa tingkat akhir jurusan seni rupa.", stmt: "Aku sengaja menonjolkan kenyamanan tata ruang, menaruh bean bag empuk, and mementingkan kenyamanan pengunjung." },

  { e: "Si", ch: "threat", cat: "kegagalan", ctx: "Makan makanan ekstrim berbau menyengat and bertekstur aneh di jamuan rapat dinas resmi.", stmt: "Perutku langsung mual, risih, draf kepalaku pusing and kaku beku menahan muntah, lalu buru-buru ke wastafel." },
  { e: "Si", ch: "threat", cat: "kerja_shift", ctx: "Dipaksa begadang tiga hari berturut-turut untuk lembur menjaga booth pameran luar ruangan.", stmt: "Aku luar biasa cemas tertekan, kepalaku berputar sakit kaku, and merasa tubuhku akan tumbang sakit parah." },
  { e: "Si", ch: "threat", cat: "daily_basic", ctx: "Kamar kosan mendadak bising akibat tetangga menyetel musik dugem bervolume kencang malam hari.", stmt: "Aku langsung merasa panik tegang, jantung berdebar risih, and pusing kaku tidak bisa tidur semalaman." },
  { e: "Si", ch: "threat", cat: "asmara", ctx: "Diajak pacar bepergian jarak jauh memakai motor sport berkursi keras and tanpa busa.", stmt: "Pinggang and punggungku langsung terasa kaku nyeri tertekan, and sepanjang jalan aku hanya diam merengut kaku." },

  { e: "Si", ch: "receiver", cat: "daily_basic", ctx: "Sakit demam sendirian di kamar kosan and tidak kuat beranjak dari kasur untuk beli obat.", stmt: "Sangat melegakan batin jika ada ibu kos atau kawan yang mengantarkan bubur hangat, obat, and menyelimutiku." },
  { e: "Si", ch: "receiver", cat: "tubuh_lelah", ctx: "Kepala terasa sangat penat and leher kaku setelah delapan jam menatap komputer spreadsheet.", stmt: "Kehadiran rekan yang menawarkan pijatan bahu and membawakan es kopi susu dingin manis terasa melegakan batin." },
  { e: "Si", ch: "receiver", cat: "asmara", ctx: "Pulang kerja kehujanan lebat, badan menggigil kedinginan, and dompet basah semua.", stmt: "Aku bersyukur pacar langsung membawakan handuk kering and membuatkan teh jahe hangat adem penenang jiwa." },
  { e: "Si", ch: "receiver", cat: "keluarga", ctx: "Merasa stres and lelah mental menghadapi tekanan tumpukan tugas kampus yang berat.", stmt: "Pulang ke rumah and mendapati ibu sudah memasakkan makanan kesukaanku di meja makan terasa sangat menyembuhkan." },

  { e: "Si", ch: "aspiration", cat: "kegagalan", ctx: "Menjamu kawan kelompok dengan resep masakan opor ayam buatan sendiri di kosan.", stmt: "Aku sangat haus akan pujian yang mengakui kelezatan rasa, kelembutan daging, and aroma masakanku yang sempurna." },
  { e: "Si", ch: "aspiration", cat: "chat_medsos", ctx: "Membeli draf dekorasi interior kamar kosan berkonsep minimalis industrial adem.", stmt: "Ada kebanggaan tersembunyi pas kawan memuji kamarku sangat estetik, nyaman, and bikin betah rebahan seharian." },
  { e: "Si", ch: "aspiration", cat: "persahabatan", ctx: "Rekomendasi tempat pijat and refleksi keluarga andalanku dicoba oleh kawan setim kantor.", stmt: "Aku sangat senang and bangga jika dia memuji rekomendasiku berhasil meredakan pegal and stres tubuhnya." },
  { e: "Si", ch: "aspiration", cat: "kerja_kantor", ctx: "Merancang draf kursi and tata ruang kantor ramah tulang belakang demi kesehatan punggung.", stmt: "Aku berharap kontribusiku menjaga kenyamanan fisik karyawan diakui manajemen sebagai draf terobosan sehat." },

  { e: "Si", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari ada debu tipis and kotoran kering menempel di atas lemari pakaian kamar kos.", stmt: "Aku tahu lemari itu kotor, tapi aku malas membersihkannya and memilih lanjut rebahan nonton film di kasur adem." },
  { e: "Si", ch: "dismissive", cat: "asmara", ctx: "Melihat draf tatanan rambut pacar agak berantakan and menyenggol dahi indahnya.", stmt: "Aku malas merapikannya and menganggap masalah estetika gaya rambut itu sepele, mending lanjut ngobrol biasa." },
  { e: "Si", ch: "dismissive", cat: "uang", ctx: "Sepatuku yang solnya mulai menipis and sedikit berlubang saat dipakai berjalan santai.", stmt: "Selama kaki tidak lecet, aku malas membelikan sepatu baru and memilih terus memakainya biar hemat uang." },
  { e: "Si", ch: "dismissive", cat: "kerja_shift", ctx: "Melihat seragam kerja toko agak kusut karena lupa disetrika malam hari sebelum dinas.", stmt: "Aku malas menyetrikanya and menganggap kerapian fisik itu tidak mendesak, langsung kupakai saja dinas." },

  { e: "Si", ch: "background", cat: "daily_basic", ctx: "Memasuki ruangan ber-AC dingin setelah berjalan kaki di bawah terik matahari siang.", stmt: "Poripori and otot tubuhku refleks mengendur otomatis, mengirimkan sinyal rileks damai ke seluruh syaraf batin." },
  { e: "Si", ch: "background", cat: "kerja_shift", ctx: "Menyeruput teh manis hangat buatan kasir kantin saat jam istirahat tiba harian.", stmt: "Autopilot lidah and tenggorokanku mendeteksi detail madu, suhu air yang pas, and langsung merasa tenang." },
  { e: "Si", ch: "background", cat: "tubuh_lelah", ctx: "Berbaring di atas kasur springbed empuk setelah seharian berdiri menjaga booth event.", stmt: "Radar kenyamanan fisik batin di tubuhku langsung aktif otomatis mengendurkan ketegangan pinggang tanpa kusadari." },
  { e: "Si", ch: "background", cat: "keluarga", ctx: "Mendengar gemercik air kolam and desir angin sepoi di halaman belakang rumah paman.", stmt: "Sensor ketenangan alam bawah sadarku langsung menyedot suasana damai tersebut, menstabilkan detak jantungku." },

  // == Te (Efektivitas, Bukti Kerja, & Hasil Terukur) ==
  { e: "Te", ch: "producer", cat: "kerja_shift", ctx: "Mendapati antrean kasir swalayan sangat panjang and sistem EDC pembayaran sering ngadet.", stmt: "Aku refleks mengambil alih mengurutkan struk, mengarahkan konsumen ke sistem tunai, and menertibkan draf antrean cepat." },
  { e: "Te", ch: "producer", cat: "kerja_kantor", ctx: "Proyek divisi terancam molor karena staf sibuk berdebat teori tanpa ada draf aksi nyata.", stmt: "Aku refleks menyetop debat, membuat tabel Excel indikator target mingguan, and menuntut bukti kerja riil besok." },
  { e: "Te", ch: "producer", cat: "uang", ctx: "Menghadapi tagihan bulanan kosan and kebutuhan makan yang membengkak tak terkontrol.", stmt: "Aku langsung membuat draf pos anggaran ketat di ponsel, mencatat pemasukan, and memotong jatah jajan kopi." },
  { e: "Te", ch: "producer", cat: "sekolah", ctx: "Tugas kelompok kuliah buntu karena semua anggota bingung membagi porsi pengetikan bab makalah.", stmt: "Aku refleks membuat draf lembar kerja pembagian tugas lengkap dengan deadline and tautan berbagi berkas." },

  { e: "Te", ch: "flexible", cat: "persahabatan", ctx: "Merencanakan draf rute keliling kota bersama teman and ternyata ada jalan layang yang ditutup.", stmt: "Aku luwes menghitung ulang waktu tempuh alternatitf, mencari rute potong tercepat, and menyesuaikan jadwal asri." },
  { e: "Te", ch: "flexible", cat: "kerja_shift", ctx: "Stok bungkus makanan habis padahal pesanan take-away menumpuk di depan meja kasir restoran.", stmt: "Aku luwes mengemas makanan memakai kertas pembungkus cadangan dengan lipatan kilat biar pengiriman tetap lancar." },
  { e: "Te", ch: "flexible", cat: "uang", ctx: "Harga barang belanjaan bulanan langgananku melonjak tinggi di awal kuartal tahun ini.", stmt: "Aku luwes membandingkan harga per gram antar merk di rak swalayan and membeli ukuran ekonomis demi efisiensi biaya." },
  { e: "Te", ch: "flexible", cat: "sekolah", ctx: "Waktu pengerjaan tugas ujian akhir tersisa lima belas menit and baru terisi setengah lembar.", stmt: "Aku luwes menyederhanakan bahasa draf esai, menulis poin inti paling berbobot nilai, and selesai tepat waktu." },

  { e: "Te", ch: "mask", cat: "kerja_kantor", ctx: "Melakukan negosiasi kenaikan gaji tahunan di hadapan manajer personalia perusahaan.", stmt: "Aku sengaja menonjolkan grafik angka penjualan, laporan rasio efisiensi, and bukti draf keuntungan riil yang kubawa." },
  { e: "Te", ch: "mask", cat: "chat_medsos", ctx: "Ingin dinilai sebagai profesional muda yang andal di LinkedIn atau media kasta tinggi.", stmt: "Aku rajin mengunggah draf sertifikasi kompetensi terbaru, grafik perkembangan tim, and taktik manajemen waktu." },
  { e: "Te", ch: "mask", cat: "sekolah", ctx: "Presentasi tugas akhir kuliah di hadapan dewan penguji and audiens mahasiswa baru.", stmt: "Aku sengaja memakai draf slide minimalis penuh data statistik tepercaya and menjamin semua jawaban terukur logis." },
  { e: "Te", ch: "mask", cat: "keluarga", ctx: "Keluarga besar meminta bantuan mengelola keuangan koperasi atau dana arisan bulanan.", stmt: "Aku memamerkan draf pembukuan digital rapi, menggunakan rumus otomatis Excel biar dianggap manajer andal." },

  { e: "Te", ch: "threat", cat: "kegagalan", ctx: "Diminta mengemban tanggung jawab finansial besar tanpa dibekali draf laporan data akuntansi bersih.", stmt: "Aku langsung pusing kepala, risih setengah mati karena tidak ada bukti fisik angka terukur, and menghindar cemas." },
  { e: "Te", ch: "threat", cat: "kerja_shift", ctx: "Instruksi kerja dari atasan berubah-ubah tak keruan and tidak memiliki standar operasional tertulis.", stmt: "Rasa cemas kaku membayangi batinku, kepalaku pusing and frustrasi karena kerja keras kesia-siaan tanpa alat ukur jelas." },
  { e: "Te", ch: "threat", cat: "asmara", ctx: "Pasangan menuntutku membuktikan cinta secara emosional dramatis tanpa tolok ukur tindakan konkret.", stmt: "Aku merasa sesak, kaku beku tidak tahu harus berbuat apa, and menganggap tuntutan abstrak itu menguras tenagaku." },
  { e: "Te", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong menghitung kalkulasi kelayakan bisnis proyek dalam waktu lima menit tanpa melihat data.", stmt: "Aku merasa terancam, pusing kepala kaku, and tegas menolak memberikan angka tebakan kasar demi reputasiku." },

  { e: "Te", ch: "receiver", cat: "daily_basic", ctx: "Ponsel and laptop milik pribadi mendadak lemot, banyak file sampah, and sering lag parah.", stmt: "Aku merasa sangat lega jika ada teman ahli IT yang merapikan sistem, menginstal draf utilitas cepat, and mempercepat kinerjanya." },
  { e: "Te", ch: "receiver", cat: "asmara", ctx: "Kebingungan merenovasi and mendekorasi ulang kamar kosan agar rapi and hemat biaya.", stmt: "Aku bersyukur pacar langsung datang membawakan draf belanja bahan murah and memandu pengerjaannya sampai tuntas." },
  { e: "Te", ch: "receiver", cat: "sekolah", ctx: "Kesulitan menyusun draf metodologi penelitian tugas akhir kuliah yang sangat teoritis.", stmt: "Penjelasan asisten dosen yang memberikan contoh templat draf data and urutan riset terstruktur terasa melegakan." },
  { e: "Te", ch: "receiver", cat: "uang", ctx: "Urusan klaim asuransi kesehatan atau administrasi bank terasa rumit and berbelit-belit.", stmt: "Aku sangat terselamatkan jika didekatkan petugas sigap yang langsung memandu draf langkah pengisian ringkas." },

  { e: "Te", ch: "aspiration", cat: "kegagalan", ctx: "Merancang draf sistem kerja baru yang mengikis waktu antrean kasir toko jadi setengahnya.", stmt: "Aku sangat haus akan apresiasi yang membenarkan kejeniusanku dalam menghemat biaya and melipatgandakan hasil kerja harian." },
  { e: "Te", ch: "aspiration", cat: "persahabatan", ctx: "Membantu menata keuangan draf kepanitiaan bakti sosial kemanusiaan agar tidak tekor.", stmt: "Ada kebanggaan tersembunyi pas kawan kelompok memuji draf laporanku sangat detail, bersih, and menyelamatkan kas." },
  { e: "Te", ch: "aspiration", cat: "kerja_kantor", ctx: "Membuat draf otomatisasi input data spreadsheet yang memotong pengerjaan manual dinas.", stmt: "Aku berharap kerja keras modifikasi rumitku ini diakui divisi sebagai pencapaian efisiensi kantor paling andal." },
  { e: "Te", ch: "aspiration", cat: "chat_medsos", ctx: "Mengunggah bagan estimasi laba rugi bisnis rumahan di grup komunitas pengusaha.", stmt: "Aku merasa sangat senang jika draf hitunganku disanjung sebagai analisis bisnis tajam and berbobot tinggi nilai." },

  { e: "Te", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari draf lemari pakaian di kamar kosan agak berantakan and tidak terbagi rapi.", stmt: "Aku tahu cara menatanya agar hemat ruang, but aku malas menguras tenaga and memilih lanjut baca novel." },
  { e: "Te", ch: "dismissive", cat: "asmara", ctx: "Melihat draf rencana perjalanan pacar agak tidak efisien and membuang-buang bensin.", stmt: "Aku malas mendebat rute and menganggap draf liburan santai itu bebas tidak perlu buruburu, kuikuti saja jalan pacarku." },
  { e: "Te", ch: "dismissive", cat: "sekolah", ctx: "Mengetahui ada draf pintasan cepat mengetik catatan kuliah memakai transkrip suara otomatis.", stmt: "Aku malas memakainya and mending mencatat manual secara santai di buku tulis usangku demi kenyamanan batin." },
  { e: "Te", ch: "dismissive", cat: "uang", ctx: "Aplikasi pengelola keuangan bulanan menawarkan fitur grafik rasio belanja otomatis harian.", stmt: "Aku malas menghubungkannya and menganggap pencatatan detail pos itu merepotkan, mending kuperkirakan di draf kepala." },

  { e: "Te", ch: "background", cat: "daily_basic", ctx: "Berbelanja kebutuhan sayur mayor mingguan di pasar tradisional langganan.", stmt: "Otakku refleks autopilot menghitung harga per satuan, menolak timbangan curang, and memilih langkah paling hemat." },
  { e: "Te", ch: "background", cat: "kerja_shift", ctx: "Melihat tumpukan cucian piring kotor menumpuk tinggi di wastafel dapur warkop.", stmt: "Tangan and refleks badanku otomatis menyusun piring sesuai ukuran, mencuci dari yang terbesar, efisien selesai." },
  { e: "Te", ch: "background", cat: "keluarga", ctx: "Mempersiapkan barang bawaan dalam koper untuk mudik pulang kampung satu keluarga.", stmt: "Bawah sadarku refleks menata posisi barang memakai gulungan baju terpadat, memanfaatkan celah koper maksimal." },
  { e: "Te", ch: "background", cat: "sekolah", ctx: "Membaca lembar draf soal ujian pilihan ganda yang memiliki batas waktu pengerjaan ketat.", stmt: "Radar autopilot kepalaku langsung memilah soal termudah, menyilang draf raguragu, and menghemat waktu ujian." },

  // == Ti (Struktur, Definisi, & Konsistensi Sistem) ==
  { e: "Ti", ch: "producer", cat: "kerja_kantor", ctx: "Ada tabrakan aturan antara regulasi pusat perusahaan and peraturan daerah kantor cabang.", stmt: "Aku refleks membongkar draf undang-undang, mendefinisikan batasan istilah, and menyelaraskan draf aturan harian." },
  { e: "Ti", ch: "producer", cat: "sekolah", ctx: "Penjelasan dosen di depan kelas terasa tumpang tindih, rancu, and banyak kontradiksi teori.", stmt: "Aku refleks mengangkat tangan mengoreksi celah logikanya, and menguraikan klasifikasi definisi yang benar konsisten." },
  { e: "Ti", ch: "producer", cat: "daily_basic", ctx: "Melihat susunan klasifikasi buku and folder komputer pribadiku mulai kacau tercampur aduk.", stmt: "Aku refleks membuat sistem folder bertingkat berdasarkan urutan abjad, tahun terbit, and label fungsi bersih." },
  { e: "Ti", ch: "producer", cat: "keluarga", ctx: "Terjadi perdebatan antar paman mengenai urutan silsilah keluarga and draf pembagian harta.", stmt: "Aku langsung mengambil kertas karton, menggambar skema silsilah silsilah yang presisi, and membagi draf adil." },

  { e: "Ti", ch: "flexible", cat: "persahabatan", ctx: "Menyusun draf pembagian anggaran patungan sewa vila bersama kawan kelompok yang bervariasi gajinya.", stmt: "Aku luwes merancang metode subsidi silang berkeadilan, menyajikan angka pembagian yang disepakati semua pihak." },
  { e: "Ti", ch: "flexible", cat: "kerja_shift", ctx: "Aturan operasional kasir toko tidak bisa diterapkan saat mesin kasir mati and listrik padam total.", stmt: "Aku luwes memodifikasi sementara alur verifikasi manual memakai buku nota, menjaga rekonsiliasi data tetap rapi." },
  { e: "Ti", ch: "flexible", cat: "uang", ctx: "Harus mencetak rincian pengeluaran kelompok arisan bulanan dengan format laporan darurat.", stmt: "Aku luwes mengolah draf format laporan seadanya, menggunakan draf tabel bersih agar mudah dipahami anggota." },
  { e: "Ti", ch: "flexible", cat: "asmara", ctx: "Menghadapi perdebatan argumen dengan pasangan pacar mengenai batasan waktu privasi masing-masing.", stmt: "Aku luwes menawarkan draf poin kesepakatan tertulis yang menghormati kenyamanan and batasan logis relasi kami." },

  { e: "Ti", ch: "mask", cat: "kerja_kantor", ctx: "Ditunjuk menyusun draf anggaran dasar and draf standard operasional prosedur divisi baru kantor.", stmt: "Aku sengaja merancang dokumen draf yang super formal, menggunakan struktur pasal bertingkat biar dinilai ahli aturan." },
  { e: "Te", ch: "mask", cat: "chat_medsos", ctx: "Menulis tanggapan atau opini mengenai kasus kejahatan hukum yang sedang viral di platform medsos.", stmt: "Aku sengaja menyusun argumentasi berbasis runut pasal hukum harian and bukti silang logika kaku biar disegani netizen." },
  { e: "Ti", ch: "mask", cat: "sekolah", ctx: "Sidang skripsi tugas akhir di depan dewan penguji and dosen pembimbing utama kampus.", stmt: "Aku sengaja menyajikan kerangka pemikiran berupa diagram alir beraturan, menjelaskan korelasi variabel presisi tajam." },
  { e: "Ti", ch: "mask", cat: "persahabatan", ctx: "Diminta menjadi mediator penengah draf perdebatan sengit sengketa kepengurusan karang taruna.", stmt: "Aku menampilkan wajah kaku adil, memegang erat draf tertulis tata tertib organisasi, and memutus secara imparsial." },

  { e: "Ti", ch: "threat", cat: "kegagalan", ctx: "Didorong menyetujui kesepakatan kerja kontrak tanpa diberi waktu mempelajari isi dokumen pasal demi pasal.", stmt: "Aku langsung merasa terancam cemas, kaku membeku kawatir tertipu celah hukum kabur, and tegas menolak tanda tangan." },
  { e: "Ti", ch: "threat", cat: "kerja_shift", ctx: "Bekerja di lingkungan toko yang penuh dengan draf kecurangan uang and manipulasi data laporan kasir.", stmt: "Ketidakteraturan and ketidakjujuran ini membuat batinku luar biasa panik risih tertekan, kepalaku pusing mual kaku." },
  { e: "Ti", ch: "threat", cat: "asmara", ctx: "Pasangan emosional marah-marah and melempar tuduhan tidak logis tanpa bukti premis yang sahih.", stmt: "Aku mendadak pusing tertekan, kaku membeku and mati rasa, tidak sanggup meladeni amukan yang tak konsisten kaku." },
  { e: "Ti", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong menjelaskan alur pengerjaan database rumit saat kepalaku lelah migrain kaku.", stmt: "Aku merasa kewalahan batin, risih terganggu, and menutup diri mencegah interogasi rumit demi melidungi sarafku." },

  { e: "Ti", ch: "receiver", cat: "daily_basic", ctx: "Melihat kamar kosan and lemari buku pribadiku sangat berantakan and tumpukan kertas tercecer.", stmt: "Batin rasanya melegakan and adem jika ada kawan tertib yang merapikan semua draf kertas, folder, and menyortirnya presisi." },
  { e: "Ti", ch: "receiver", cat: "sekolah", ctx: "Ragu and bingung memahami instruksi penulisan karya ilmiah tugas akhir yang berbelit-belit.", stmt: "Pertolongan kawan pintar yang menjelaskan draf pembagian bab and bagan hubungan antar variabel terasa melegakan batin." },
  { e: "Ti", ch: "receiver", cat: "kerja_shift", ctx: "Stres and pusing memisahkan barang logistik toko yang tercampur aduk di gudang sempit.", stmt: "Aku sangat terbantu jika ada kepala gudang disiplin yang membuat papan klasifikasi and label rak bersih teratur adem." },
  { e: "Ti", ch: "receiver", cat: "uang", ctx: "Kebingungan merencanakan draf laporan pajak tahunan pribadiku yang rumit and banyak aturan baru.", stmt: "Aku sangat bersyukur jika didekatkan dengan konsultan andal yang langsung menyajikan draf hitungan bersih siap kirim." },

  { e: "Ti", ch: "aspiration", cat: "kegagalan", ctx: "Merancang draf struktur klasifikasi buku atau draf bagan organigram tim yang presisi jernih.", stmt: "Aku sangat haus akan pengakuan bahwa bagan and struktur rancanganku sangat rapi, lurus logika, and menyelamatkan sistem." },
  { e: "Ti", ch: "aspiration", cat: "persahabatan", ctx: "Menyusun draf aturan main and sanksi denda ketertiban keuangan di grup asrama kosan.", stmt: "Ada kebanggaan tersembunyi pas kawan asrama memuji draf aturanku sangat adil, logis konsisten, and patut ditiru." },
  { e: "Ti", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengaudit kelemahan sistem draf data pelaporan perusahaan and merevisinya secara elegan.", stmt: "Aku berharap kontribusiku mengoreksi kontradiksi and cacat logika kerja diakui direksi sebagai draf penyelamat tim." },
  { e: "Ti", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan peta klasifikasi tipe kepribadian atau bagan analisis psikometrik di medsos.", stmt: "Aku merasa senang jika analisis baganku diapresiasi netizen sebagai draf penjelasan paling presisi and mencerahkan batin." },

  { e: "Ti", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari ada inkonsistensi penjelasan kecil pada manual instruksi mesin cuci kosan.", stmt: "Aku gampang sekali menemukannya, tapi malas menceritakannya ke pemilik kos and mending langsung mencuci pakaian." },
  { e: "Ti", ch: "dismissive", cat: "persahabatan", ctx: "Mendengar teman kelompok salah mengutip draf definisi istilah saat asyik nongkrong santai warkop.", stmt: "Aku malas mendebat debat istilah and menganggap koreksi akademis pas santai itu membosankan, kubiarkan dia terus bicara." },
  { e: "Ti", ch: "dismissive", cat: "sekolah", ctx: "Mengetahui draf makalah tim kuliah mengalami cacat ketertiban penulisan daftar pustaka kecil.", stmt: "Aku malas mengedit ulang and mending langsung mengumpul berkas apa adanya biar cepat pulang tidur siang adem." },
  { e: "Ti", ch: "dismissive", cat: "uang", ctx: "Melihat draf laporan nota pembelanjaan warung mengalami selisih perhitungan seratus perak rupiah.", stmt: "Aku tahu di mana letak salah jumlahnya, but malas mempermasalahkannya and langsung membayar nota lunas." },

  { e: "Ti", ch: "background", cat: "daily_basic", ctx: "Melihat tumpukan barang logistik belanjaan diletakkan acak di teras depan kamar kos.", stmt: "Bawah sadarku refleks membagi and menyortir barang berdasarkan fungsi, ukuran, and kepatutan tanpa kuperintahkan." },
  { e: "Ti", ch: "background", cat: "kerja_shift", ctx: "Berada di depan meja kasir menatap jajaran rokok, obat, and permen di etalase belakang.", stmt: "Otakku refleks mendeteksi draf penataan pola yang janggal, menyaring ketidakteraturan, and merapikannya di dalam kepala." },
  { e: "Ti", ch: "background", cat: "keluarga", ctx: "Berjalan menyusuri lorong rumah sanak saudara yang penuh pajangan foto berjejer.", stmt: "Radar logika autopilot kepalaku refleks memetakan relasi sebab akibat and draf hubungan darah silsilah keluarga dalam detik." },
  { e: "Ti", ch: "background", cat: "sekolah", ctx: "Membaca lembar draf teks undang-undang dasar atau draf modul materi kuliah hukum.", stmt: "Sensor ketertiban bawah sadarku langsung menyedot klasifikasi sistem and menyaring kontradiksi kalimat otomatis." },

  // == Fe (Atmosfer Emosi, Ekspresi, & Gelombang Sosial) ==
  { e: "Fe", ch: "producer", cat: "persahabatan", ctx: "Suasana kumpul kelompok mendadak sepi kaku, hambar, and semua orang asyik menatap ponsel.", stmt: "Wajah and suaraku refleks langsung melontarkan banyolan konyol, tertawa nyaring, and menular ceria biar ramai." },
  { e: "Fe", ch: "producer", cat: "daily_basic", ctx: "Menyapa penjaga warung kelontong atau petugas kasir swalayan yang terlihat letih lesu.", stmt: "Aku spontan menaikkan intonasi nada suara, tersenyum lebar hangat, and menyemangati jiwanya biar ikut tersenyum." },
  { e: "Fe", ch: "producer", cat: "asmara", ctx: "Pasangan terlihat murung and sedih saat merayakan kelulusan akibat nilai kuisnya jelek.", stmt: "Aku refleks berpose akrobatik konyol, mendramatisir rasa sedihnya, and mengajaknya tertawa lepas melupakan duka." },
  { e: "Fe", ch: "producer", cat: "keluarga", ctx: "Acara reuni keluarga besar diselimuti ketegangan akibat perdebatan draf pembagian tugas masak.", stmt: "Aku refleks melempar banyolan ringan, mencium pipi bibi, and menyanyikan lagu riang hingga suasana cair gembira." },

  { e: "Fe", ch: "flexible", cat: "kerja_shift", ctx: "Harus beralih peran dari menjaga kasir toko yang ramah menjadi buru entri data di gudang sepi.", stmt: "Aku luwes mengatur ekspresi ceriaku, mematikan mode teatrikal ramah sosial, and fokus diam tenang menyortir barang." },
  { e: "Fe", ch: "flexible", cat: "sekolah", ctx: "Menghidupkan panggung orasi kepemimpinan mahasiswa di depan ribuan audiens heboh.", stmt: "Aku luwes memainkan intonasi vokal dramatis membakar semangat, lalu berekspresi santai kembali setelah turun panggung." },
  { e: "Fe", ch: "flexible", cat: "asmara", ctx: "Menghadiri pesta malam mingguan bersama teman pacar and tiba-tiba kulihat pacar mulai lelah fisik.", stmt: "Aku luwes menurunkan energi gembira panggungku, pamit pelan dari pergaulan ramai, and menemaninya pulang santai adem." },
  { e: "Fe", ch: "flexible", cat: "uang", ctx: "Menjaga stand jualan keripik pisang di pasar malam festival kebudayaan daerah setempat.", stmt: "Aku luwes meramu sapaan manis ekspresif menyedot calon pembeli, and bersikap rileks santai pas toko sedang sepi pembeli." },

  { e: "Fe", ch: "mask", cat: "kerja_kantor", ctx: "Menyambut kedatangan klien eksekutif baru di lobi penerimaan utama kantor pusat.", stmt: "Aku sengaja berlagak super ramah antusias, melempar gurauan segar, and memimpin kehangatan komunikasi sosial." },
  { e: "Fe", ch: "mask", cat: "chat_medsos", ctx: "Mengunggah momen manis liburan kelompok di halaman akun media sosial milik pribadi.", stmt: "Aku menyusun foto dengan pose keceriaan melompat bersama, ekspresi tawa termanis, and takarir penuh energi positif." },
  { e: "Fe", ch: "mask", cat: "sekolah", ctx: "Menjadi MC koordinator pembukaan perayaan festival seni musik tahunan universitas.", stmt: "Aku sengaja menonjolkan gaya teater, suara bertenaga heboh, and ekspresi hidup-ria biar penonton terpesona kagum." },
  { e: "Fe", ch: "mask", cat: "keluarga", ctx: "Menghadiri pesta pernikahan sepupu jauh yang dihadiri ratusan kerabat keluarga besar.", stmt: "Aku memoles sikap sosialku, menjadi magnet tawa meladeni para bibi, and tersenyum ceria seharian demi kehormatan ibu." },

  { e: "Fe", ch: "threat", cat: "duka", ctx: "Dipaksa memimpin yelyel sorak gembira and menyemangati forum saat batinku sedang berkabung duka.", stmt: "Aku langsung merasa sesak risih mual, kepalaku pusing kaku, and merasa sangat tertekan pura-pura heboh berdusta." },
  { e: "Fe", ch: "threat", cat: "kerja_shift", ctx: "Dituntut bekerja sebagai badut maskot atau menyapa ribuan pelanggan toko penuh senyum buatan.", stmt: "Tuntutan memalsukan emosi sosial ini membuat sarafku lelah kaku, luar biasa cemas tertekan, lalu ingin mengurung diri." },
  { e: "Fe", ch: "threat", cat: "persahabatan", ctx: "Kawan kelompok menuduh ekspresi ceria and pembawaan hangatku selama ini hanya kepalsuan drama cari perhatian.", stmt: "Aku langsung merasa beku kaku, sakit hati luar biasa tertekan, and refleks memutuskan kontak pertemanan mendadak." },
  { e: "Fe", ch: "threat", cat: "asmara", ctx: "Didesak pacar menampilkan kemesraan heboh and berpelukan manis di depan sorot kamera umum.", stmt: "Aku merasa pusing risih cemas, kaku membeku kaku, and mendadak mundur menolak dengan nada bicara kaku dingin." },

  { e: "Fe", ch: "receiver", cat: "daily_basic", ctx: "Suasana pagi hari di kosan terasa jenuh sepi, mendung kelabu, and badanku lemas malas.", stmt: "Melegakan batin jika ada teman kos supel yang berteriak gembira menyapaku, membuyarkan sepi dengan tawa renyah." },
  { e: "Fe", ch: "receiver", cat: "kerja_shift", ctx: "Rapat koordinasi shift kerja toko berjalan sangat tegang kaku, dingin, and membosankan.", stmt: "Aku merasa sangat bersyukur jika ada kasir periang yang langsung melempar banyolan kocak mencairkan kebekuan rapat." },
  { e: "Fe", ch: "receiver", cat: "asmara", ctx: "Kepala rasanya pusing bebal and batin penat setelah seharian menerima revisi tugas dosen.", stmt: "Aku butuh pacar yang menyambutku dengan pelukan manja hangat, candaan manis, and senyuman cinta mencerahkan." },
  { e: "Fe", ch: "receiver", cat: "persahabatan", ctx: "Canggung and kaku setengah mati saat harus bergabung di meja lingkaran pergaulan baru.", stmt: "Aku merasa terselamatkan jika ada orang supel menghampiriku, mengajakku tertawa, and memperkenalkanku ramah ceria." },

  { e: "Fe", ch: "aspiration", cat: "kegagalan", ctx: "Berperan sebagai penghibur kawan kelompok yang sedang dilanda kesedihan atau putus cinta asmara.", stmt: "Aku sangat haus akan pengakuan bahwa banyolan, tawa, and energi keceriaan yang kubawa berhasil menerangi batinnya." },
  { e: "Fe", ch: "aspiration", cat: "chat_medsos", ctx: "Mengunggah video lelucon kocak atau konten parodi kehidupan harian di medsos.", stmt: "Ada kebanggaan tersembunyi pas ribuan penonton terhibur, tertawa terpingkalpingkal, and menyanjung sifat humorku." },
  { e: "Fe", ch: "aspiration", cat: "persahabatan", ctx: "Berhasil mencairkan permusuhan dingin antar sahabat lewat draf kejutan ulang tahun yang meriah.", stmt: "Aku berharap kerja keras menghidupkan harmoni emosi ini diakui kelompok sebagai penyelamat kebahagiaan bersama." },
  { e: "Fe", ch: "aspiration", cat: "kerja_kantor", ctx: "Merancang draf acara outing karyawan kantor yang bersemangat menyatukan jajaran divisi terbelah.", stmt: "Aku haus dinakui direksi sebagai arsitek kebahagiaan and perekat motivasi tim paling andal di departemen." },

  { e: "Fe", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari semua kawan di ruangan kosan sedang canggung diam and suasana terasa kaku hambar.", stmt: "Aku tahu cara melempar banyolan and menghidupkan tawa, tapi malas and mending lanjut membaca komik di kasur." },
  { e: "Fe", ch: "dismissive", cat: "persahabatan", ctx: "Dua kubu perkumpulan hobi yang kuikuti sedang saling sindir halus di grup kumpul santai warkop.", stmt: "Aku malas ikut campur melempar candaan penawar amarah and menganggap perselisihan ego sosial itu membosankan." },
  { e: "Fe", ch: "dismissive", cat: "sekolah", ctx: "Mengetahui kelas kuliah mendadak hening kaku saat dosen melontarkan pertanyaan retoris menyenggol mahasiswa.", stmt: "Aku malas meramaikan suasana dengan candaan and mending menunduk pura-pura sibuk mencatat draf materi buku." },
  { e: "Fe", ch: "dismissive", cat: "asmara", ctx: "Pacar bercerita dramatis penuh emosional mengenai gosip artis terkenal yang sedih tertimpa musibah.", stmt: "Aku malas berekspresi heboh drama and memilih membalas manggut-manggut datar dingin sambil lanjut menyetir mobil." },

  { e: "Fe", ch: "background", cat: "daily_basic", ctx: "Berpapasan dengan anakanak kecil yang sedang asyik bermain balon sabun di taman kota.", stmt: "Wajah and bibirku otomatis melengkung tersenyum lebar hangat, and mataku berbinar gembira tanpa perlu dipaksa." },
  { e: "Fe", ch: "background", cat: "chat_medsos", ctx: "Mendengar tawa renyah and sorak gembira kawan di seberang telepon genggam milik pribadi.", stmt: "Bawah sadarku refleks ikut tertawa kecil and menyerap gelombang emosi bahagianya, mencerahkan batin adem." },
  { e: "Fe", ch: "background", cat: "keluarga", ctx: "Memasuki ruang makan rumah and melihat keluarga sedang asyik makan bersama diringi tawa.", stmt: "Radar harmoni sosial di kepalaku langsung memantulkan frekuensi riang, menyatukan batinku ke obrolan hangat." },
  { e: "Fe", ch: "background", cat: "kerja_shift", ctx: "Berdiri di depan ribuan penonton bioskop yang mendengus geli menonton adegan film kartun kocak.", stmt: "Sensor autopilot empati emosiku langsung menyerap riuh tawa bioskop, membuat mataku berair gembira otomatis." },

  // == Fi (Kedekatan, Jarak Peribadi, & Kepercayaan) ==
  { e: "Fi", ch: "producer", cat: "persahabatan", ctx: "Melihat teman baru mencoba mendesak and mengorek rahasia pribadi serta draf diary batin asriku.", stmt: "Aku refleks berwajah kaku dingin, menarik langkah mundur berjarak, and menegakkan batas privasi kokoh dalam detik." },
  { e: "Fi", ch: "producer", cat: "asmara", ctx: "Mencium gelagat ketidakjujuran and kebohongan halus saat dia menceritakan urusan malam minggunya.", stmt: "Aku refleks diam membisu dingin, menyilangkan tangan kaku, and menetapkan jarak aman kepercayaan berkurang." },
  { e: "Fi", ch: "producer", cat: "uang", ctx: "Seorang kawan lama tiba-tiba menghubungi and memuji berlebihan demi bisa meminjam draf dana daruratku.", stmt: "Aku refleks menolak sopan tetapi tegas, menyaring niat terselubungnya, and membatasi interaksi chat harian." },
  { e: "Fi", ch: "producer", cat: "keluarga", ctx: "Anggota keluarga besar mengejek pilihan prinsip hidup moralitas and jalan idealis yang sedang kutempuh.", stmt: "Aku refleks membisu dingin, menolak mendebat kasar, and memilih menjaga jarak asri membatasi kunjungan keluarga." },

  { e: "Fi", ch: "flexible", cat: "persahabatan", ctx: "Berteman karib dengan siapa saja di grup pergaulan harian namun tetap menjaga rahasia batin asri.", stmt: "Aku luwes mengobrol akrab and bercanda hangat, but gampang menegakkan sekat batas aman pas dia mulai lancang." },
  { e: "Fi", ch: "flexible", cat: "daily_basic", ctx: "Harus berbagi meja makan sempit bersama orang asing di warung nasi goreng pinggir jalan ramai.", stmt: "Aku luwes tersenyum ramah sopan menyapa, lalu makan dengan tenang tertib menghormati batas privasi masing-masing." },
  { e: "Fi", ch: "flexible", cat: "asmara", ctx: "Mengatur kedalaman komitmen and rasa percaya dalam menjajaki hubungan asmara bersama pacar baru.", stmt: "Aku luwes membuka sekat batin bertahap, tahu kapan harus berbagi rahasia terdalam and kapan harus menjaga jarak aman." },
  { e: "Fi", ch: "flexible", cat: "keluarga", ctx: "Menghadapi bibi bawel yang terus mencampuri urusan jodoh and karier saat mudik lebaran.", stmt: "Aku luwes menjawab dengan senyum sopan santun formal tanpa membiarkan pertanyaannya menembus wilayah lubuk hatiku." },

  { e: "Fi", ch: "mask", cat: "kerja_kantor", ctx: "Menghadiri peluncuran draf yayasan kemanusiaan and CSR perusahaan mitra kerja kantor.", stmt: "Aku sengaja menampilkan diri sebagai sosok berbudi luhur, beretika moral tinggi, and menjunjung kesetiaan kerja." },
  { e: "Fi", ch: "mask", cat: "chat_medsos", ctx: "Menyusun draf tulisan biografi singkat atau kata mutiara di profil akun medsos milik pribadi.", stmt: "Aku sengaja memilih kutipan kebaikan tulus, kejujuran batin, and kesetiaan komitmen biar dihormati netizen." },
  { e: "Fi", ch: "mask", cat: "sekolah", ctx: "Wawancara masuk organisasi kerohanian atau draf komite sukrelawan mahasiswa tingkat fakultas.", stmt: "Aku sengaja menonjolkan empati halus, kesucian moralitas, and ketulusan pengabdian berteman agar dinilai murni akhlak." },
  { e: "Fi", ch: "mask", cat: "keluarga", ctx: "Menghadiri wisuda adik sepupu yatim piatu yang dibiayai patungan oleh keluarga besar.", stmt: "Aku memoles gestur budi halus, meneteskan air mata haru yang anggun, and memeluk adik demi kerahmatan draf moral keluarga." },

  { e: "Fi", ch: "threat", cat: "kegagalan", ctx: "Didesak menceritakan draf luka batin, kegagalan masa lalu, atau rahasia malam di panggung umum.", stmt: "Kepalaku langsung pusing risih cemas, kaku membeku kaku, and merasa batas kehormatanku dinjakin paksa kasar." },
  { e: "Fi", ch: "threat", cat: "persahabatan", ctx: "Tiba-tiba dituduh munafik, jahat dingin, and tidak punya rasa peduli oleh kelompok sahabat karibku.", stmt: "Aku merasa luar biasa terkejut terluka tegang, jantung berdebar risih, and cenderung mengurung diri membeku dingin." },
  { e: "Fi", ch: "threat", cat: "asmara", ctx: "Dipaksa bersumpah setia and menyerahkan kata sandi ponsel pribadi kepada pacar yang posesif curiga.", stmt: "Aku merasa sesak risih risih tertekan, kaku membeku kaku, and mulai merencanakan draf perpisahan dingin diam-diam." },
  { e: "Fi", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong menandatangani pakta kerja sama yang bertentangan dengan draf nilai idealisme batin moralitasku.", stmt: "Aku merasa tersudut cemas, kaku membeku defensif, and tegas menolak meletakkan tanda tanganku demi reputasi batin." },

  { e: "Fi", ch: "receiver", cat: "duka", ctx: "Batin terluka parah, hancur berkeping-keping akibat pengkhianatan sahabat karib tepercaya.", stmt: "Batin rasanya melegakan and plunged adem jika ada teman peka yang memeluk pundakku tanpa kata, menemaniku hening damai." },
  { e: "Fi", ch: "receiver", cat: "asmara", ctx: "Merasakan keputusasaan batin yang mendalam setelah putus hubungan cinta asmara bertahun-tahun.", stmt: "Aku sangat bersyukur jika didekatkan sahabat setia yang bersedia menjaga rahasia air mataku and menjamin aman jiwaku." },
  { e: "Fi", ch: "receiver", cat: "daily_basic", ctx: "Tinggal di kamar kos baru and cemas tidak bisa beradaptasi dengan lingkungan tata tetangga.", stmt: "Pertemuan dengan tetangga sebelah yang langsung menyapa santun, sopan menghormati jarak pribadiku terasa menenangkan." },
  { e: "Fi", ch: "receiver", cat: "tubuh_lelah", ctx: "Badan letih, batin lelah menghadapi drama politik and adu sikut kekuasaan di lingkungan organisasi.", stmt: "Aku butuh ruang asri damai bersih dari drama kerja, and sahabat luhur yang tulus mengasihi lelah fisikku adem." },

  { e: "Fi", ch: "aspiration", cat: "kegagalan", ctx: "Menjaga rahasia aib teman kelompok and melindunginya dari cemoohan gosip divisi departemen.", stmt: "Aku sangat haus akan pengakuan bahwa aku adalah sahabat paling loyal menjaga rahasia, murni etika, and tepercaya." },
  { e: "Fi", ch: "aspiration", cat: "persahabatan", ctx: "Menyelamatkan persahabatan kelompok yang nyaris hancur lewat draf mediasi ketulusan tatap muka.", stmt: "Ada kebanggaan tersembunyi pas sahabat memuji keluhuran akhlakku, tulus batin cinta, and menyebutku penyelamat ikat karib." },
  { e: "Fi", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengusulkan draf perlindungan kesejahteraan mental and privasi data karyawan di divisi kerja dinas.", stmt: "Aku berharap integritas moral and kepedulian tulusku diakui direksi sebagai draf pilar keadilan kemanusiaan." },
  { e: "Fi", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan draf esai moralitas atau kepedulian saksama menolong korban perang luar negeri di medsos.", stmt: "Aku merasa bahagia jika tulisan kemanusiaanku dipuji netizen sebagai draf pengingat nurani paling tulus and menyentuh batin." },

  { e: "Fi", ch: "dismissive", cat: "daily_basic", ctx: "Melihat rasa tulus asri and kedalaman rasa sayang kawan baru di asrama kosan baru.", stmt: "Aku tahu dia mempercayaiku sepenuhnya, but aku malas menanggapi kedekatan emosi itu, choosing lanjut merakit rak buku." },
  { e: "Fi", ch: "dismissive", cat: "persahabatan", ctx: "Mengetahui dua rekan nongkrong warkop diam-diam sedang saling membenci and bermuka dua.", stmt: "Aku tahu persis perang batin dingin mereka, but aku menganggap drama relasi interpersonal itu membosankan and kubiarkan saja." },
  { e: "Fi", ch: "dismissive", cat: "asmara", ctx: "Pacar menangis tersedu-sedu meminta draf permohonan maaf atas kelalaian kecil ketidaksengajaan ponselnya.", stmt: "Aku tahu hatinya tulus minta maaf, but aku malas berlarut drama emosi and mending menyuruhnya menyapu lantai kamar kos." },
  { e: "Fi", ch: "dismissive", cat: "sekolah", ctx: "Mendengar teman kelompok curhat panjang lebar menangis tersedu tentang penolakan seleksi magang dinas.", stmt: "Aku malas larut drama sedih and mending diam mengangguk datar sambil melanjutkan mengetik draf tabel spreadsheet komputer." },

  { e: "Fi", ch: "background", cat: "daily_basic", ctx: "Mengamati bahasa tubuh and nada bicara teman sekamar kos saat dia menyapa pagi hari.", stmt: "Autopilot nuraniku otomatis menyaring tingkat ketulusan nadanya, menyaring kebohongan, and mengukur rasa percaya." },
  { e: "Fi", ch: "background", cat: "chat_medsos", ctx: "Membaca pesan singkat chat WhatsApp kawan lama yang menawarkan kerja sama bisnis dadakan.", stmt: "Bawah sadarku refleks mendeteksi getaran manipulasi motif terselubung and langsung mengambil tindakan jaga jarak." },
  { e: "Fi", ch: "background", cat: "keluarga", ctx: "Duduk bersama keluarga besar mengelilingi meja makan makan malam lebaran yang hangat adem.", stmt: "Radar ikatan batin bawah sadarku langsung menyedot dinamika kedekatan emosi antar paman-bibi tanpa perlu kuasai." },
  { e: "Fi", ch: "background", cat: "sekolah", ctx: "Berpapasan dengan guru sekolah dasar yang dulu sangat berjasa mendidik and menyayangi jiwaku.", stmt: "Sensor kesetiaan moralitas and rasa hormat tulus di latar batinku aktif instan otomatis, menundukkan kepalaku sopan." }
];

// 32 HOLDOUT SEEDS with perfectly balanced category quotas and true-to-life Indonesian scenarios
interface HoldoutSeed {
  e: InformationElement;
  ch: MeasurementChannel;
  cat: ScenarioCategory;
  ctx: string;
  stmt: string;
}

const HOLDOUT_SEEDS: HoldoutSeed[] = [
  { e: "Se", ch: "producer", cat: "kerja_shift", ctx: "Seorang bos toko mencemooh and membentak staf magang baru yang melakukan kesalahan kasir sepele.", stmt: "Aku refleks pasang badan maju, menatap mata bos secara menantang berani, and menghentikan maki kasar detik itu." },
  { e: "Se", ch: "threat", cat: "kegagalan", ctx: "Tiba-tiba dikepung and dipalak uang oleh sekelompok preman jalanan beringas bersenjata kayu di gang sepi.", stmt: "Aku mendadak kaku membeku ketakutan risih tertekan, kehilangan daya gerak fisik, and lemas pasrah menyerahkan dompet." },
  { e: "Se", ch: "receiver", cat: "daily_basic", ctx: "Kebingungan and ragu berbulan-bulan untuk mengeksekusi rencana mendaftar kursus bahasa asing.", stmt: "Aku sangat melegakan batin jika ada teman nekat yang langsung mendaftarkanku and menyeretku paksa ikut klas perdana." },
  { e: "Se", ch: "background", cat: "daily_basic", ctx: "Melihat motor di sampingku hampir oleng and roboh menimpa anak kecil di parkiran swalayan.", stmt: "Tangan and refleks autopilot-ku langsung menahan stang motor secepat kilat otomatis, mengamankan si balita." },

  { e: "Si", ch: "producer", cat: "tubuh_lelah", ctx: "Kaki and pinggang terasa sangat nyeri kaku setelah mengantre berdiri lima jam di loket bank dinas.", stmt: "Aku refleks mencari tempat duduk empuk adem, mengoleskan minyak pijat, menyelonjorkan kaki, and memejamkan mata rileks." },
  { e: "Si", ch: "threat", cat: "kegagalan", ctx: "Terjebak menginap di kamar kos kotor penuh dengan kecoa malam hari, kasur berdebu, and AC rusak mati gerah.", stmt: "Kepalaku langsung pusing mual kaku risih tertekan, badan terasa gatal kaku, and insomnia menyiksa semalaman suntuk." },
  { e: "Si", ch: "receiver", cat: "sekolah", ctx: "Stres, pusing and mual lemas karena terserang masuk angin and diare berat di tengah minggu ujian kampus.", stmt: "Aku merasa terselamatkan jika ada ibu kos atau sahabat luhur yang membawakan minyak kayu putih hangat, bubur, and obat." },
  { e: "Si", ch: "background", cat: "tubuh_lelah", ctx: "Berendam air hangat beraroma pinus di bak kamar mandi kosan setelah lelah dinas lapangan hujan lebat.", stmt: "Otot and persendian tubuhku refleks mengendur otomatis mengurai lelah, menenangkan denyut nadi and batin jiwaku." },

  { e: "Te", ch: "producer", cat: "kerja_kantor", ctx: "Divisi kerja kantor terancam kena penalti denda akibat draf laporan tahunan yang berantakan mleset.", stmt: "Aku refleks mengambil alih Excel, menata tabel, membuat bagan indikator, and menuntut draf data bersih klir besok pagi." },
  { e: "Te", ch: "threat", cat: "kegagalan", ctx: "Didesak menjadi manajer proyek berskala milyar rupiah tanpa dibekali draf pembukuan and nota belanja akurat asli.", stmt: "Aku merasa sangat cemas risih tertekan kaku, kepala berputar pusing mual, and memilih mengundurkan diri mencari aman." },
  { e: "Te", ch: "receiver", cat: "daily_basic", ctx: "Laptop and HP milik pribadi mendadak terserang virus iklan popup mengesalkan, lambat, and data terkunci.", stmt: "Sangat melegakan batin jika ada teman jenius komputer yang langsung membersihkan virus, mempercepat RAM, and memulihkan file." },
  { e: "Te", ch: "background", cat: "daily_basic", ctx: "Merapikan tumpukan kertas brosur promosi swalayan di atas meja makan kosan pribadi.", stmt: "Otak and tanganku otomatis membagi brosur berdasarkan tanggal kadaluarsa promosi and diskon termurah secara draf cepat." },

  { e: "Ti", ch: "producer", cat: "kerja_kantor", ctx: "Dokumen pendaftaran akreditasi divisi kampus ditolak asesor karena ketidakcocokan draf aturan dasar pasal.", stmt: "Aku refleks mengaudit seluruh dokumen dasar, mendefinisikan korelasi pasal regulasi, and merapikan draf kesepakatan tertib." },
  { e: "Ti", ch: "threat", cat: "keluarga", ctx: "Menghadiri rapat keluarga besar yang berjalan sangat emosional, ribut klaim lisan waris tanpa sertifikat lurus.", stmt: "Aku langsung pusing kaku risih tertekan, kaku membeku membisu, and menolak ikut larut dalam amukan argumentasi sengketa." },
  { e: "Ti", ch: "receiver", cat: "sekolah", ctx: "Bingung and pusing merakit draf silsilah keluarga and sejarah marga suku untuk tugas makalah sosiologi.", stmt: "Pertolongan sepupuku yang menyajikan diagram bagan rapi, garis relasi jelas, and klasifikasi bertingkat mencerahkan batin." },
  { e: "Ti", ch: "background", cat: "daily_basic", ctx: "Melihat susunan laci meja kasur yang penuh gunting kuku, kunci, pulpen, and receipts belanja.", stmt: "Radar ketertiban autopilot kepalaku refleks mengelompokkan benda sesuai jenis and kegunaan otomatis tanpa lelah batin." },

  { e: "Ne", ch: "producer", cat: "daily_basic", ctx: "Kompor gas dapur kosan mendadak mampet and mati total tepat saat hendak memasak mie instan malam hari.", stmt: "Aku refleks memutar otak mencari ide cadangan, langsung menggunakan pemanas air listrik atau meminjam kompor sebelah." },
  { e: "Ne", ch: "threat", cat: "asmara", ctx: "Pasangan mendadak bertanya 'Bagaimana jika bumi kolaps lima puluh tahun lagi and kita punah?' saat krisis.", stmt: "Aku langsung merasa beku kaku cemas luar biasa, otak buntu menolak membayangkan kiamat buram, lalu mengalihkan obrol." },
  { e: "Ne", ch: "receiver", cat: "tubuh_lelah", ctx: "Merasa sangat jenuh, hambar, and lemas karena rutinitas belajar-baca buku yang mononoton berbulan-bulan.", stmt: "Aku sangat terbantu jika ada kawan kreatif yang mendadak mengebrak kamarku mengajak menjajal hobi baru menantang." },
  { e: "Ne", ch: "background", cat: "daily_basic", ctx: "Menatap langit malam yang mendung kelabu dari atas balkon atap rumah kosan.", stmt: "Imajinasiku otomatis merakit jalannya rasi bintang fiksi, kaitan cuaca, and draf ide tulisan fantasi tanpa perlu kuperintah." },

  { e: "Ni", ch: "producer", cat: "duka", ctx: "Kabar buruk mengenai rumah nenek di kampung tertimpa musibah kebakaran hebat melahap habis harta.", stmt: "Aku refleks tenang, menarik diri dari kekacauan histeris, memetakan draf langkah keselamatan, and memurnikan batin tabah." },
  { e: "Ni", ch: "threat", cat: "kegagalan", ctx: "Didesak menandatangani kontrak pinjaman dana bisnis darurat esok pagi tanpa simulasi risiko bunga.", stmt: "Otakku langsung pusing kaku risih tertekan cemas, menolak melangkah buta tanpa visi arah masa depan, and tegas menghindar." },
  { e: "Ni", ch: "receiver", cat: "sekolah", ctx: "Ketakutan and stres berat memikirkan kelayakan karirku ke depan pasca lulus dari jurusan kuliah sains.", stmt: "Petuah bijak dari profesor senior yang menjelaskan peta jalan tren masa depan and kestabilan garis hidup sangat menenangkan." },
  { e: "Ni", ch: "background", cat: "daily_basic", ctx: "Melihat daun-daun kering berguguran tertiup angin sore di pelataran halaman masjid atau gereja adem.", stmt: "Kesadaran spiritual akan takdir, waktu, and kefanaan fana hidup manusia langsung aktif mengalir tenang di batin batin." },

  { e: "Fe", ch: "producer", cat: "persahabatan", ctx: "Pertemuan reuni kawan sekolah mendadak sunyi senyap membosankan karena semua asyik dengan ponselnya.", stmt: "Wajah and jiwaku refleks melempar banyolan kocak, tertawa gembira, and menular ceria biar forum kembali ramai mencerah." },
  { e: "Fe", ch: "threat", cat: "duka", ctx: "Dipaksa bersikap ceria, memandu kuis heboh di depan ratusan klien kerja sesaat setelah kucing kesayanganku meninggal.", stmt: "Aku langsung merasa risih mual sesak pusing kaku tertekan, benci harus tersenyum badut menyembunyikan luka batin." },
  { e: "Fe", ch: "receiver", cat: "persahabatan", ctx: "Canggung and kaku setengah mati saat baru masuk lingkaran pergaulan asing di warkop nongkrong.", stmt: "Aku sangat ditolong jika ada kawan periang supel yang langsung merangkulku, melempar gurauan, and menyatukanku ramah." },
  { e: "Fe", ch: "background", cat: "daily_basic", ctx: "Melihat gelak tawa and senyuman hangat balita yang sedang digendong ibunya di bus kota.", stmt: "Bawah sadar emosiku langsung memantulkan frekuensi riang, menarik bibirku tersenyum manis otomatis mencerahkan batin." },

  { e: "Fi", ch: "producer", cat: "persahabatan", ctx: "Rekan kos baru mulai melangkahi privasi kamarku, membuka lemari baju asri tanpa izin tertulisku.", stmt: "Aku refleks bersikap kaku dingin, menutup laci, and menegaskan jarak batas wilayah tepercaya secara tegas dingin." },
  { e: "Fi", ch: "threat", cat: "persahabatan", ctx: "Kelompok berteman menuduh ketulusanku berteman selama ini palsu and berbau pamrih finansial panggung.", stmt: "Aku merasa terkejut luar biasa cemas terluka, kaku membeku kaku kaku, and cenderung mengurung diri memutuskan kontak." },
  { e: "Fi", ch: "receiver", cat: "duka", ctx: "Mengalami depresi batin, trauma akibat dikhianati secara licik oleh pacar and kawan sekerja.", stmt: "Aku sangat melegakan batin jika ada sahabat karib peka yang merengkuh jiwaku, melindungi duka batin and merahasiakannya." },
  { e: "Fi", ch: "background", cat: "daily_basic", ctx: "Mengamati mimik wajah and getar suara pedagang keliling saat menawarkan dagangan buah jeruk harian.", stmt: "Pikiran harian autopilot-ku langsung mengukur kejujuran motifnya, menyaring kepalsuan, and memetakan rasa hormat murni." }
];

export const PAIR_DISCRIMINATORS: Array<{
  id: string;
  a: SocionicsType;
  b: SocionicsType;
  context: string;
  statement: string;
}> = [
  { id: "tb_ile_sei", a: "ILE", b: "SEI", context: "Saat libur akhir pekan mumpung cuaca adem...", statement: "Aku jauh lebih dominan mencari stimulus ide baru atau diskusi konseptual daripada merawat kenyamanan fisik and memasak opor ayam lezat." },
  { id: "tb_ese_lii", a: "ESE", b: "LII", context: "Berada di tengah reuni pertemanan akrab...", statement: "Aku lebih sibuk menyebarkan atmosfer tawa ekspresif sapaan hangat daripada asyik meresapi konsistensi logika and struktur undang-undang baku." },
  { id: "tb_eie_lsi", a: "EIE", b: "LSI", context: "Rapat koordinasi divisi kerja di bawah tekanan tinggi...", statement: "Aku lebih mengandalkan pemahaman dramatis penularan emosi masa daripada draf penegakan tata tertib and standar operasional tertulis kaku." },
  { id: "tb_sle_iei", a: "SLE", b: "IEI", context: "Ketika terjadi sengketa kepengurusan asrama kosan...", statement: "Aku refleks maju memimpin, menekan lawan secara vokal tegas daripada menyendiri kontemplatif membaca arah nasib and momentum batin." },
  { id: "tb_see_ili", a: "SEE", b: "ILI", context: "Mendapati musuh bisnis menyerang balik secara lancang...", statement: "Aku langsung pasang badan bertarung, menuntut keadilan fisik daripada bersikap dingin merenungi ke jangka panjang and masa fana." },
  { id: "tb_lie_esi", a: "LIE", b: "ESI", context: "Ada tawaran bisnis bermargin tinggi tapi melanggar etika etis berteman...", statement: "Aku condong mementingkan perhitungan profit hasil kerja terukur daripada mengunci batas moral and menolak tegas demi nilai luhur." },
  { id: "tb_iee_sli", a: "IEE", b: "SLI", context: "Menyusun rencana perjalanan liburan akhir pekan...", statement: "Aku berkobar mencari puluhan opsi tujuan unik tak terduga daripada mengunci kenyamanan fisik, adem rebahan, and memijat punggung pegal." },
  { id: "tb_lse_eii", a: "LSE", b: "EII", context: "Menghadapi rekan kerja yang kinerjanya melorot drastis...", statement: "Aku tanpa tedeng aling-aling mendesak pencapaian draf KPI and target angka daripada meraba perasaannya and tulus berempati empat mata." }
];

function generateOptions(element: InformationElement, channel: MeasurementChannel, scale: ScaleType, statement: string): QuestionOption[] {
  const options: QuestionOption[] = [];
  const keyword = element;
  
  const elementKeywords: Record<InformationElement, string> = {
    Ne: "kemungkinan & inovasi",
    Ni: "makna, waktu & momentum",
    Se: "nyali, tindakan & tekanan",
    Si: "kenyamanan fisik & detail rasa",
    Te: "fakta terukur & bukti kerja",
    Ti: "konsistensi, aturan & sistem",
    Fe: "emosi, ekspresi & gelombang sosial",
    Fi: "kepercayaan & batas privasi"
  };

  const channelKeywords: Record<MeasurementChannel, string> = {
    producer: "Cara utamaku yang spontan",
    flexible: "Alat luwes andalanku",
    mask: "Tuntutan peran kebaikan sosial",
    threat: "Titik lemah melelahkan",
    receiver: "Kebutuhan bantuan menenangkan",
    aspiration: "Ambisi terdalam keinginanku",
    dismissive: "Kemampuan sepele kuabaikan",
    background: "Radar autopilot batinku"
  };

  for (let val = 1; val <= 5; val++) {
    let label = "";
    if (scale === "automaticity") {
      label = SCALE_LABELS.automaticity[val - 1];
    } else if (scale === "comfort") {
      label = SCALE_LABELS.comfort[val - 1];
    } else if (scale === "frequency") {
      label = SCALE_LABELS.frequency[val - 1];
    } else if (scale === "threat") {
      label = SCALE_LABELS.threat[val - 1];
    } else if (scale === "relief") {
      label = SCALE_LABELS.relief[val - 1];
    } else if (scale === "recognition") {
      label = SCALE_LABELS.recognition[val - 1];
    } else {
      label = SCALE_LABELS.comfort[val - 1];
    }

    const meaning = `Menunjukkan respon ${val}/5 terhadap pengolahan info ${elementKeywords[element]} dalam ranah ${channelKeywords[channel]}.`;
    const reaction = `${channelKeywords[channel]} merespon stimulus ${elementKeywords[element]} dengan tingkat kesiapan ${val}/5.`;

    options.push({
      value: val as 1 | 2 | 3 | 4 | 5,
      label,
      meaning,
      reaction
    });
  }

  return options;
}

export function generateCoreQuestions(): SocionicsQuestion[] {
  const list: SocionicsQuestion[] = [];
  CORE_SEEDS.forEach((seed, i) => {
    const id = `core_${seed.e.toLowerCase()}_${seed.ch}_0${(i % 4) + 1}`;
    const scale = SCALE_MAP[seed.ch];
    list.push({
      id,
      kind: "core",
      element: seed.e,
      channel: seed.ch,
      context: seed.ctx,
      scale,
      statement: seed.stmt,
      sourceSituation: `Adegan kehidupan real sehari-hari`,
      sourceResponse: seed.stmt,
      responseFocus: `Sensing kesiapan ${seed.e}:${seed.ch}`,
      options: generateOptions(seed.e, seed.ch, scale, seed.stmt),
      category: seed.cat
    });
  });
  return list;
}

export function generateHoldoutQuestions(): SocionicsQuestion[] {
  const list: SocionicsQuestion[] = [];
  HOLDOUT_SEEDS.forEach((seed, i) => {
    const id = `holdout_${seed.e.toLowerCase()}_0${i + 1}`;
    const scale = SCALE_MAP[seed.ch];
    list.push({
      id,
      kind: "holdout",
      element: seed.e,
      channel: seed.ch,
      context: seed.ctx,
      scale,
      statement: seed.stmt,
      sourceSituation: `Uji komparasi silang batin`,
      sourceResponse: seed.stmt,
      responseFocus: `verifikasi ${seed.e}:${seed.ch}`,
      options: generateOptions(seed.e, seed.ch, scale, seed.stmt),
      category: seed.cat
    });
  });
  return list;
}

export function getCoreQuestions(): SocionicsQuestion[] {
  return generateCoreQuestions();
}

export function getHoldoutQuestions(): SocionicsQuestion[] {
  return generateHoldoutQuestions();
}

export function getTieBreakQuestions(): SocionicsQuestion[] {
  const list: SocionicsQuestion[] = [];
  PAIR_DISCRIMINATORS.forEach(item => {
    list.push({
      id: item.id,
      kind: "tie-break",
      element: "Ne", // Placeholder
      channel: "producer", // Placeholder
      context: item.context,
      scale: "comparison",
      statement: item.statement,
      sourceSituation: `Tie break ${item.a} vs ${item.b}`,
      sourceResponse: item.statement,
      responseFocus: `pembeda silang ${item.a} vs ${item.b}`,
      options: [
        { value: 1, label: `Sangat dekat ${item.b}`, meaning: `Kencenderungan ke ${item.b}`, reaction: `Dominasi batin ${item.b}` },
        { value: 2, label: `Agak dekat ${item.b}`, meaning: `Kencenderungan ke ${item.b} ringan`, reaction: `Dominasi batin ${item.b} ringan` },
        { value: 3, label: `Setara di Tengah`, meaning: `Netral/Seimbang`, reaction: `Seimbang` },
        { value: 4, label: `Agak dekat ${item.a}`, meaning: `Kencenderungan ke ${item.a} ringan`, reaction: `Dominasi batin ${item.a} ringan` },
        { value: 5, label: `Sangat dekat ${item.a}`, meaning: `Kencenderungan ke ${item.a}`, reaction: `Dominasi batin ${item.a}` }
      ],
      tieBreak: { a: item.a, b: item.b }
    });
  });
  return list;
}

export const ALL_QUESTIONS: SocionicsQuestion[] = [
  ...getCoreQuestions(),
  ...getHoldoutQuestions(),
  ...getTieBreakQuestions()
];

export const QUESTION_BY_ID = new Map<string, SocionicsQuestion>();
ALL_QUESTIONS.forEach(q => {
  QUESTION_BY_ID.set(q.id, q);
});

export function getDiscriminatorsForPair(a: any, b: any): SocionicsQuestion[] {
  return ALL_QUESTIONS.filter(
    (q) =>
      q.kind === "tie-break" &&
      q.tieBreak &&
      ((q.tieBreak.a === a && q.tieBreak.b === b) ||
        (q.tieBreak.a === b && q.tieBreak.b === a))
  );
}
