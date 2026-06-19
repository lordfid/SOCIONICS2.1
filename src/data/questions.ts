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
  automaticity: ["Sangat Tidak Spontan", "Harus Kupikirkan Lama", "Kadang Spontan", "Cukup Spontan", "Sangat Spontan dan Refleks"],
  comfort: ["Sangat Menguras Tenaga", "Cukup Melelahkan", "Netral/Proporsional", "Cukup Nyaman", "Sangat Nyaman dan Alami"],
  frequency: ["Tidak Pernah", "Jarang Sekali", "Sesekali Saja", "Cukup Sering", "Hampir Selalu"],
  threat: ["Sama Sekali Tidak Terancam", "Sedikit Risih", "Lumayan Tertekan", "Sangat Kaku dan Tertekan", "Membuatku Beku, Defensif dan Menghindar"],
  relief: ["Sama Sekali Tidak Membantu", "Sedikit Mengurangi Beban", "Cukup Menenangkan", "Sangat Membantu", "Sangat Melegakan dan Menyembuhkan"],
  recognition: ["Tidak Ada Keinginan", "Biasa Saja", "Menyenangkan Jika Dipuji", "Sangat Berarti Bagi Jiwa", "Sangat Menyentuh Kebutuhan Terdalamku"],
  comparison: ["Jauh lebih dekat Sisi B", "Agak lebih dekat Sisi B", "Seimbang di Tengah", "Agak lebih dekat Sisi A", "Jauh lebih dekat Sisi A"]
};

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
  { e: "Ne", ch: "flexible", cat: "sekolah", ctx: "Sistem ujian online kampus mendadak eror di tengah jalan saat pengerjaan soal esai.", stmt: "Aku langsung menyalin rencana jawaban ke dokumen lokal lalu mencari celah kontak panitia dengan kepala dingin." },
  { e: "Ne", ch: "flexible", cat: "uang", ctx: "Anggaran bulanan habis pertengahan bulan akibat pengeluaran tak terduga.", stmt: "Aku luwes memutar otak mencari barter jasa, promo makanan tersembunyi, atau mengolah sisa bahan kulkas kreatif." },

  { e: "Ne", ch: "mask", cat: "kerja_kantor", ctx: "Ditunjuk mewakili divisi mempresentasikan proyek baru di hadapan direksi perusahaan.", stmt: "Aku sengaja berlagak visioner, memakai banyak istilah tren masa depan, dan merancang bagan kemungkinan yang memukau." },
  { e: "Ne", ch: "mask", cat: "keluarga", ctx: "Menghadiri reuni keluarga besar yang menuntut setiap anak muda menceritakan rencana masa depannya.", stmt: "Aku memoles cerita dengan rencana rencana karier mentereng dan opsi bisnis cadangan agar dinilai cerdas dan visioner." },
  { e: "Ne", ch: "mask", cat: "chat_medsos", ctx: "Ingin membangun citra profesional di platform LinkedIn agar dilirik perekrut kerja.", stmt: "Aku rajin membagikan opini tren industri dan meramal rancangan inovasi baru demi membangun persona pakar kreatif." },
  { e: "Ne", ch: "mask", cat: "sekolah", ctx: "Rapat perdana organisasi kampus baru untuk menetapkan jargon dan visi misi tahun ini.", stmt: "Aku sengaja melempar kata-kata inspiratif dan ide program kerja berskala nasional agar terlihat menonjol." },

  { e: "Ne", ch: "threat", cat: "kegagalan", ctx: "Diminta menebak kelanjutan masa depan proyek tim yang datanya sangat minim dan tidak beraturan.", stmt: "Aku mendadak pusing, merasa terancam berspekulasi tanpa dasar kuat, lalu memilih diam menghindar." },
  { e: "Ne", ch: "threat", cat: "tubuh_lelah", ctx: "Rekan kerja membombardir obrolan dengan spekulasi liar dan teori konspirasi saat kepalaku sakit.", stmt: "Aku merasa tertekan, kaku mual, dan mendadak menutup obrolan secara dingin demi ketenangan telingaku." },
  { e: "Ne", ch: "threat", cat: "asmara", ctx: "Pasangan tiba-tiba bertanya 'Bagaimana kalau sepuluh tahun lagi kita tidak punya rumah?' saat krisis keuangan.", stmt: "Aku langsung beku, merasa cemas luar biasa ditarik ke masa depan yang buram, lalu mengalihkan bahasan." },
  { e: "Ne", ch: "threat", cat: "duka", ctx: "Usaha rintisan kecil yang kurintis bertahun-tahun dinyatakan bangkrut total tanpa sisa modal.", stmt: "Aku merasa dunia runtuh, putus asa melihat semua kemungkinan tertutup, lalu mengurung diri berhari-hari." },

  { e: "Ne", ch: "receiver", cat: "daily_basic", ctx: "Terjebak dalam rutinitas harian kosan-kampus yang sangat monoton dan melelahkan jiwa.", stmt: "Aku merasa sangat lega jika ada teman supel yang datang membawa rencana jalan-jalan dadakan tanpa rencana matang." },
  { e: "Ne", ch: "receiver", cat: "sekolah", ctx: "Sedang buntu menyusun skripsi dan tidak tahu arah analisis bab pembahasan berikutnya.", stmt: "Dapat bimbingan dari dosen yang membuka perspektif baru dan memberi alternatif metode terasa sangat melegakan jiwa." },
  { e: "Ne", ch: "receiver", cat: "kerja_shift", ctx: "Menghadapi tumpukan komplain pelanggan kasir yang membuat kepala rasanya pusing bebal.", stmt: "Aku sangat terbantu jika ada supervisor yang langsung mencarikan solusi kreatif jalan tengah tak terduga." },
  { e: "Ne", ch: "receiver", cat: "asmara", ctx: "Merasa jenuh dengan hubungan percintaan yang begitu-begitu saja setiap akhir pekan.", stmt: "Aku bersyukur jika pasangan berinisiatif mengajak mencoba aktivitas baru yang menantang adrenalin bersama." },

  { e: "Ne", ch: "aspiration", cat: "kegagalan", ctx: "Membuat rencana desain kreatif poster acara amal namun respon panitia biasa-biasa saja.", stmt: "Aku haus diakui bahwa ide yang kusembunyikan di balik poster itu sebenarnya sangat orisinal dan out-of-the-box." },
  { e: "Ne", ch: "aspiration", cat: "persahabatan", ctx: "Memberi masukan solusi alternatif saat teman karib curhat masalah pekerjaannya yang buntu.", stmt: "Ada rasa bangga tak terkira jika dia memuji cara berpikirku yang unik dan menganggap solusiku mencerahkan." },
  { e: "Ne", ch: "aspiration", cat: "kerja_kantor", ctx: "Rapat evaluasi tahunan perusahaan untuk merancang strategi bertahan dari krisis ekonomi.", stmt: "Aku berambisi menghasilkan usulan inovatif yang diakui banyak divisi sebagai rancangan penyelamat masa depan tim." },
  { e: "Ne", ch: "aspiration", cat: "chat_medsos", ctx: "Mengirimkan utas pemikiran mandiri di media sosial mengenai masa depan dunia kerja berbasis AI.", stmt: "Aku merasa sangat senang jika utas tersebut viral dan para pakar memuji kedalaman imajinasi kreatifku." },

  { e: "Ne", ch: "dismissive", cat: "daily_basic", ctx: "Melihat ada banyak celah usaha atau inovasi menarik saat berjalan-jalan di pasar tradisional.", stmt: "Aku bisa dengan mudah memetakan pasar itu, tapi memilih mengabaikannya dan fokus belanja kebutuhan memasak saja." },
  { e: "Ne", ch: "dismissive", cat: "sekolah", ctx: "Menyadari ada banyak topik penelitian unik untuk tugas akhir kuliah yang belum pernah diambil mahasiswa.", stmt: "Aku malas mengambil topik rumit itu dan mending memilih judul biasa yang aman biar cepat lulus." },
  { e: "Ne", ch: "dismissive", cat: "persahabatan", ctx: "Teman kelompok sibuk berdebat panjang lebar memperebutkan lokasi pameran karya akhir yang estetik.", stmt: "Aku malas ikut larut dalam debat estetik alternatif lokasi dan mending tidur siang di pojok perpustakaan." },
  { e: "Ne", ch: "dismissive", cat: "uang", ctx: "Menemukan barang-barang diskon aneh di e-commerce yang berpotensi dimodifikasi dan dijual kembali.", stmt: "Aku tahu cara memutarnya, tapi malas mengurusnya dan memilih menutup aplikasi untuk hemat uang." },

  { e: "Ne", ch: "background", cat: "daily_basic", ctx: "Berjalan kaki menyusuri trotoar jalan raya menuju tempat kerja di pagi hari.", stmt: "Otakku secara otomatis menyaring tiang listrik, reklame, dan spanduk unik, memunculkan rancangan ide cerita fiksi." },
  { e: "Ne", ch: "background", cat: "chat_medsos", ctx: "Membaca sekilas obrolan acak di grup WhatsApp yang membahas kenaikan harga tiket konser.", stmt: "Pikiran bawah sadarku spontan memindai lima implikasi sosial-ekonomi dari fenomena ini tanpa perlu kupaksakan berpikir." },
  { e: "Ne", ch: "background", cat: "asmara", ctx: "Mengamati reaksi ekspresi asing pasangan saat dia menceritakan mimpinya semalam.", stmt: "Pikiranku refleks memetakan simbol-simbol mimpinya dan menghubungkannya dengan suasana hatinya akhir-akhir ini." },
  { e: "Ne", ch: "background", cat: "kerja_kantor", ctx: "Mendengar manajer mengeluh pelan mengenai penurunan performa penjualan bulan ini.", stmt: "Radar kreatif otomatis kepalaku langsung merakit skema pemasaran alternatif bahkan sebelum rapat resmi dimulai." },

  // == Ni (Arah Waktu, Momentum, & Kematangan Makna) ==
  { e: "Ni", ch: "producer", cat: "duka", ctx: "Suasana rumah duka penuh kepanikan setelah kepergian mendadak salah satu anggota keluarga.", stmt: "Aku refleks tenang, menarik diri, membaca arah jangka panjang situasi, lalu membimbing keluarga bersikap tabah." },
  { e: "Ni", ch: "producer", cat: "asmara", ctx: "Merasakan gelagat aneh dan perubahan dingin sikap pasangan semenjak seminggu terakhir.", stmt: "Perasaanku otomatis mencium arah akhir hubungan ini akan retak, lalu aku bersiap mental menerima konsekuensinya." },
  { e: "Ni", ch: "producer", cat: "kerja_kantor", ctx: "Tren pasar mendadak bergeser tajam dan membuat target kuartal divisi terancam gagal.", stmt: "Aku langsung menyendiri merenung, memprediksi titik jenuh tren baru, dan menyusun peta jalan bisnis cadangan." },
  { e: "Ni", ch: "producer", cat: "keluarga", ctx: "Adik sepupu meminta saran mengenai pilihan jurusan kuliah yang sangat bertolak belakang dengan impiannya.", stmt: "Aku refleks merenungkan panggilan jiwanya, memprediksi sepuluh tahun ke depan hidupnya, lalu memberi nasihat mendalam." },

  { e: "Ni", ch: "flexible", cat: "persahabatan", ctx: "Sahabat bersikeras ingin langsung investasi besar-besaran di bisnis tren baru yang belum jelas risikonya.", stmt: "Aku luwes mengingatkannya pelan-pelan mengenai siklus musiman jenis bisnis itu agar dia tidak terperosok." },
  { e: "Ni", ch: "flexible", cat: "sekolah", ctx: "Target kelulusan kuliah meleset akibat dosen pembimbing yang sangat lamban membalas revisi bab.", stmt: "Aku luwes menyesuaikan kembali peta hidup jangka panjangku tanpa emosi berlebih, mencari hikmah di balik jeda ini." },
  { e: "Ni", ch: "flexible", cat: "kerja_shift", ctx: "Toko mendadak sepi pengunjung berhari-hari akibat pembangunan jalan besar di depan ruko.", stmt: "Aku dengan tenang memanfaatkan waktu luang beradaptasi menyusun portofolio personal baru demi masa depan." },
  { e: "Ni", ch: "flexible", cat: "asmara", ctx: "Mengalami pasang surut emosional hebat bersama pasangan dalam menjalani hubungan komitmen.", stmt: "Aku luwes membaca siklus hubungan, tahu kapan harus mendekat dan kapan memberi jeda ruang agar hati kami matang." },

  { e: "Ni", ch: "mask", cat: "kerja_kantor", ctx: "Rapat pleno besar instansi perusahaan untuk memaparkan rencana strategis lima tahun ke depan.", stmt: "Aku sengaja berlagak filosofis, memaparkan visi spiritual jangka panjang dan sketsa pergeseran zaman demi dinilai matang." },
  { e: "Ni", ch: "mask", cat: "chat_medsos", ctx: "Menulis takarir (caption) di postingan media sosial pribadi mengenai pencapaian hidup berumur 25 tahun.", stmt: "Aku sengaja memilih kata-kata kontemplatif mengenai waktu, kesabaran, dan takdir agar terlihat berkarakter dalam." },
  { e: "Ni", ch: "mask", cat: "sekolah", ctx: "Wawancara seleksi beasiswa luar negeri yang menguji kesiapan mental menghadapi perbedaan kultur.", stmt: "Aku menampilkan perencanaan hidup matang, menceritakan pencapaian diri sebagai proses evolusi jiwa yang bermakna." },
  { e: "Ni", ch: "mask", cat: "persahabatan", ctx: "Acara nongkrong malam bersama teman diskusi perkumpulan buku filsafat atau komunitas kreatif.", stmt: "Aku sengaja memancing obrolan mendalam mengenai arti hidup dan kefanaan dunia agar terlihat bijaksana." },

  { e: "Ni", ch: "threat", cat: "kegagalan", ctx: "Didesak mengambil keputusan bisnis cepat saat data lapangan sangat dinamis berubah per jam.", stmt: "Aku merasa pusing kaku, cemas setengah mati jika melangkah tanpa tahu arah akhir konsekuensinya, lalu menghindar." },
  { e: "Ni", ch: "threat", cat: "kerja_shift", ctx: "Jadwal shift kerja toko terus berubah mendadak tanpa pola yang jelas setiap minggunya.", stmt: "Ketidakpastian jadwal ini membuat jiwa dan tubuhku luar biasa cemas tertekan, merasa kehilangan kendali arah hidup." },
  { e: "Ni", ch: "threat", cat: "keluarga", ctx: "Keluarga menuntutku segera menikah tahun ini tanpa mempedulikan kesiapan karir dan mentalku.", stmt: "Aku merasa sesak, kaku membeku, merasa masa depanku diculik paksa, lalu cenderung mengurung diri defensif." },
  { e: "Ni", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong memprediksi dampak regulasi anyar pemerintah terhadap keberlangsungan tim kerja.", stmt: "Aku merasa kewalahan jiwa, pusing, dan menolak keras membuat ramalan mendadak yang minim waktu perenungan." },

  { e: "Ni", ch: "receiver", cat: "daily_basic", ctx: "Pikiran terasa sangat bising dengan kekacauan aktivitas harian yang tak kunjung selesai.", stmt: "Aku sangat tenang dan terbantu jika ada mentor bijak yang merangkum makna hidupku dan mengurai ketenangan jiwa." },
  { e: "Ni", ch: "receiver", cat: "asmara", ctx: "Minder melihat kawan sebaya sudah mapan sementara hidup percintaanku masih luntang-lantung.", stmt: "Wejangan dari orang tua yang mengingatkanku bahwa setiap orang punya garis waktu sukses sendiri terasa melegakan perasaan." },
  { e: "Ni", ch: "receiver", cat: "sekolah", ctx: "Cemas memikirkan masa depan pasca lulus kuliah karena persaingan kerja yang luar biasa ketat.", stmt: "Aku sangat butuh wejangan dari alumni senior yang memberi peta jalan tenang cara meniti karir secara bertahap." },
  { e: "Ni", ch: "receiver", cat: "uang", ctx: "Kehilangan tabungan karena tertipu investasi bodong teman dekat kelompok.", stmt: "Aku merasa terselamatkan jika ada sahabat rohani yang merangkulku dan mengingatkan tentang hikmah di balik duka." },

  { e: "Ni", ch: "aspiration", cat: "kegagalan", ctx: "Menulis rencana esai refleksi spiritual yang mengulas arah perkembangan manusia modern.", stmt: "Aku sangat haus pengakuan bahwa analisis prediktifku dinilai mendalam dan menjadi rujukan perasaan bagi pembaca." },
  { e: "Ni", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan ramalan tren teknologi masa depan di blog personal milik pribadi.", stmt: "Ada kebanggaan tersembunyi pas prediksi jangkauanku terbukti akurat dan dinilai visioner oleh netizen komunitas." },
  { e: "Ni", ch: "aspiration", cat: "persahabatan", ctx: "Menyelamatkan teman kelompok dari keputusan fatal berkat firasat burukku yang terbukti benar.", stmt: "Aku sangat bahagia jika mereka mengakui ketajaman intuisiku dan menyebutku sebagai jangkar penyelamat kelompok." },
  { e: "Ni", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengusulkan arah reposisi produk perusahaan agar relevan untuk satu dekade ke depan.", stmt: "Aku berharap visi jangka panjangku dihargai oleh direksi sebagai mahakarya strategi penentu masa depan." },

  { e: "Ni", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari ada pola nasib buruk berulang yang menimpa kehidupan tetangga dekat rumah kos.", stmt: "Aku tahu ke mana arah hidup mereka akan bermuara, tapi malas mencampuri dan mending menyiram tanaman hias saja." },
  { e: "Ni", ch: "dismissive", cat: "asmara", ctx: "Melihat gelagat buruk sahabat dekat pacarku yang berpotensi merusak hubungan asmara kami.", stmt: "Aku malas mendebat dan berkonfrontasi, menganggap duka asmara itu siklus alami, dan memilih membiarkannya saja." },
  { e: "Ni", ch: "dismissive", cat: "uang", ctx: "Melihat tren koin kripto baru yang diramalkan akan meledak nilainya dalam waktu dekat.", stmt: "Aku paham siklus gelembung investasinya, tapi malas berspekulasi dan memilih mengabaikan tren demi ketenangan perasaan." },
  { e: "Ni", ch: "dismissive", cat: "kerja_shift", ctx: "Menyadari rencana manajemen kasir toko lambat laun akan kolaps akibat kelalaian kecil pemilik toko.", stmt: "Aku malas menasihatinya karena bos keras kepala, dan memilih diam menyiapkan surat pengunduran diri pelan-pelan." },

  { e: "Ni", ch: "background", cat: "daily_basic", ctx: "Menatap rintik hujan dari balik jendela kamar kos di sore hari yang sepi.", stmt: "Pikiranku otomatis ditarik ke dalam samudra garis waktu masa lalu dan masa depan, melamunkan kesementaraan jiwa." },
  { e: "Ni", ch: "background", cat: "chat_medsos", ctx: "Melihat unggahan pencapaian karir teman sekolah dasar yang sudah sukses luar biasa.", stmt: "Pikiran bawah sadarku refleks memidai siklus roda kehidupan dan menenangkan hatiku bahwa semua ada masanya pas." },
  { e: "Ni", ch: "background", cat: "keluarga", ctx: "Melihat gurat keriput dan rambut memutih di wajah kedua orang tua saat pulang kampung.", stmt: "Kesadaran akan waktu yang terus berlari dan urgensi berbakti aktif otomatis di latar belakang perasaanku." },
  { e: "Ni", ch: "background", cat: "sekolah", ctx: "Berdiri di tengah keramaian wisuda kampus mengamati wajah gembira para lulusan.", stmt: "Otakku refleks menyaring makna kelulusan sebagai gerbang transisi menuju ujian hidup yang sesungguhnya." },

  // == Se (Tekanan Nyata, Batas, & Keberanian Bertindak) ==
  { e: "Se", ch: "producer", cat: "kerja_shift", ctx: "Melihat pengendara motor arogan menabrak gerobak penjual bakso lalu mencoba melarikan diri.", stmt: "Aku secara refleks langsung mengejar, menghadang jalan motornya, dan memaksa dia turun bertanggung jawab." },
  { e: "Se", ch: "producer", cat: "kerja_shift", ctx: "Seorang pelanggan kafe berteriak marah-marah dan menggebrak meja kasir karena pesanannya tertukar.", stmt: "Aku langsung maju tegak, menatap matanya secara tegas, menghentikan amukannya, dan membereskan masalah detik itu." },
  { e: "Se", ch: "producer", cat: "persahabatan", ctx: "Kelompok diskusi melorot kinerjanya karena semua anggota malas dan saling melempar tanggung jawab.", stmt: "Aku langsung mengambil kendali kepemimpinan, membagi tugas secara paksa, dan menuntut semua menyelesaikannya sore ini." },
  { e: "Se", ch: "producer", cat: "asmara", ctx: "Pasangan digoda dan diganggu secara lancang oleh sekelompok orang asing di depan minimarket.", stmt: "Aku refleks merapatkan badan, memberi tatapan menantang yang mengancam, dan menghalau mereka pergi menjauh." },

  { e: "Se", ch: "flexible", cat: "daily_basic", ctx: "Terjebak kemacetan parah di jalan sempit saat harus mengantarkan rencana dokumen penting.", stmt: "Aku luwes berkendara memotong antrean, mencari celah sempit di antara mobil, dan berkendara gesit demi waktu." },
  { e: "Se", ch: "flexible", cat: "sekolah", ctx: "Dosen mendadak masuk kelas dan mengadakan kuis lisan mendadak berskala besar tanpa persiapan.", stmt: "Aku luwes menguasai panggung, menjawab dengan nada mantap dan gestur meyakinkan walau tidak hafal teori buku." },
  { e: "Se", ch: "flexible", cat: "uang", ctx: "Menghadapi penjual beringas di pasar loak yang terus menaikkan harga sepihak.", stmt: "Aku luwes menawar keras penuh nyali, memakai taktik psikologi gertak mundur, dan mendapatkan harga murah." },
  { e: "Se", ch: "flexible", cat: "kerja_shift", ctx: "Event organizer kekurangan staf lapangan saat ribuan pengunjung mulai merangsek masuk pintu gerbang.", stmt: "Aku luwes beralih menjadi koordinator barikade, mengatur arus massa secara dinamis, dan mengamankan situasi." },

  { e: "Se", ch: "mask", cat: "kerja_kantor", ctx: "Ditunjuk menjadi negosiator utama dalam rencana kerja sama kontrak bisnis yang alot.", stmt: "Aku sengaja memakai setelan terbaik, menjabat tangan dengan sangat keras, dan berbicara penuh otoritas kekuasaan." },
  { e: "Se", ch: "mask", cat: "chat_medsos", ctx: "Membangun personal branding di akun media sosial profesional milik pribadi.", stmt: "Aku memamerkan foto-foto berenergi tinggi, pose tegas memimpin rapat, dan prestasi trofi kemenangan kerja." },
  { e: "Se", ch: "mask", cat: "sekolah", ctx: "Mencalonkan diri sebagai ketua Badan Eksekutif Mahasiswa (BEM) tingkat fakultas.", stmt: "Aku membawakan orasi berapi-api dengan intonasi menggelegar dan bahasa tubuh dominan biar dinilai tangguh kuat." },
  { e: "Se", ch: "mask", cat: "keluarga", ctx: "Menghadiri rapat sengketa tanah warisan keluarga besar yang dihadiri banyak paman keras kepala.", stmt: "Aku sengaja berbicara vokal dengan suara tegas dan menggebrak meja pelan agar batasan hak keluargaku dihargai." },

  { e: "Se", ch: "threat", cat: "kegagalan", ctx: "Berada dalam situasi konfrontasi fisik atau perdebatan sengit dengan nada suara membentak.", stmt: "Aku mendadak pusing tertekan, kaku membeku kehilangan nyali bertindak, dan refleks melarikan diri mencari aman." },
  { e: "Se", ch: "threat", cat: "kerja_shift", ctx: "Diminta memaksakan target penjualan produk harian dengan cara menggertak dan menekan calon pembeli.", stmt: "Aku merasa luar biasa risih dan cemas tertekan, benci harus mengonfrontasi orang lain demi angka penjualan." },
  { e: "Se", ch: "threat", cat: "asmara", ctx: "Pasangan menunjukkan tanda mengontrol posesif dan mengatur semua jadwal harian hidupku.", stmt: "Rasa tertekan luar biasa membuatku kehilangan daya, mendadak kaku beku, lalu diam-diam menghindar mutlak." },
  { e: "Se", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong memimpin demo atau aksi unjuk rasa massa di barisan terdepan jalan raya.", stmt: "Aku merasa pusing mual, luar biasa ketakutan disorot mata massa, dan segera mundur ke barisan paling belakang." },

  { e: "Se", ch: "receiver", cat: "daily_basic", ctx: "Ragu dan bimbang berhari-hari untuk mengeksekusi rencana bisnis yang sudah dirancang.", stmt: "Aku sangat lega jika ada partner berani yang langsung mendorong dan meyakinkanku untuk langsung bertindak konkret." },
  { e: "Se", ch: "receiver", cat: "asmara", ctx: "Suka pada seseorang tapi tidak kunjung berani menyatakan perasaan karena takut ditolak.", stmt: "Aku bersyukur didekatkan dengan sahabat tegas yang menjamin dan mendorongku langsung menyatakan rasa padanya." },
  { e: "Se", ch: "receiver", cat: "sekolah", ctx: "Tugas akhir menumpuk dan aku hanya malas-malasan tiduran di kasur kamar kosan.", stmt: "Kehadiran teman tegas yang mendatangi kamarku dan memaksa dengan galak untuk bangun kerja terasa luar biasa melegakan." },
  { e: "Se", ch: "receiver", cat: "uang", ctx: "Mengalami diskriminasi dan ketidakadilan perlakuan saat mengurus administrasi kelurahan.", stmt: "Aku sangat terbantu jika ada pendamping berani yang langsung pasang badan dan membentak balik petugas lalai." },

  { e: "Se", ch: "aspiration", cat: "kegagalan", ctx: "Berlatih keras dalam kejuaraan olahraga bela diri atau kompetisi debat bergengsi.", stmt: "Aku sangat haus akan pengakuan bahwa aku adalah petarung tangguh yang berani dan bermental pemenang mutlak." },
  { e: "Se", ch: "aspiration", cat: "persahabatan", ctx: "Menantang dominasi orang arogan di kelompok yang selama ini menindas kawan-kawan lemah.", stmt: "Aku merasa bangga luar biasa jika dipuji sebagai pahlawan pemberani yang berhasil meruntuhkan dominasinya." },
  { e: "Se", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengambil alih proyek darurat perusahaan yang hampir kolaps dan sukses menyelesaikannya.", stmt: "Aku berharap kerja keras dan nyali besarku memimpin krisis diakui direksi sebagai bukti kepemimpinan andal." },
  { e: "Se", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan video aksi nyata menghadapi premanisme atau ketidakadilan di jalan raya.", stmt: "Aku sangat senang jika unggahan tersebut diapresiasi ribuan netizen sebagai aksi keberanian yang inspiratif." },

  { e: "Se", ch: "dismissive", cat: "daily_basic", ctx: "Melihat ada antrean orang yang mencoba menyerobot antrean bahan bakar di SPBU.", stmt: "Aku bisa saja menegur dan memaksanya mundur, tapi memilih malas ribut dan mendengarkan musik di helm saja." },
  { e: "Se", ch: "dismissive", cat: "persahabatan", ctx: "Melihat kawan kelompok terlibat cekcok mulut hampir baku hantam dengan orang asing di kafe.", stmt: "Aku malas melerai dan menganggap pertengkaran otot itu membosankan, mending lanjut minum es kopi susuku." },
  { e: "Se", ch: "dismissive", cat: "uang", ctx: "Teman kos berulang kali terlambat membayar utang kecil dan selalu menghindar saat bertemu.", stmt: "Aku malas menagih keras dan memilih merelakan uang itu demi kedamaian pikiranku tanpa drama konfrontasi." },
  { e: "Se", ch: "dismissive", cat: "asmara", ctx: "Pacar memancing emosiku dengan sengaja membahas mantan agar aku cemburu marah.", stmt: "Aku tahu dia sedang memancing reaksiku, tapi aku malas meladeni dan memilih membalas datar acuh tak acuh." },

  { e: "Se", ch: "background", cat: "daily_basic", ctx: "Melompat menghindari lubang jalan saat berlari mengejar bus kota yang hampir jalan.", stmt: "Tubuhku bereaksi instan, refleks mengukur jarak dan melompat secepat kilat tanpa perlu berpikir panjang." },
  { e: "Se", ch: "background", cat: "kerja_shift", ctx: "Gelas kaca berisi jus jeruk mendadak tersenggol dan jatuh dari meja kasir restoran.", stmt: "Tangan dan refleks tubuh otomatisku langsung menangkap gelas tersebut di udara sebelum sempat menyentuh lantai." },
  { e: "Se", ch: "background", cat: "keluarga", ctx: "Menyetir mobil di malam hari dan tiba-tiba ada kucing menyeberang jalan mendadak.", stmt: "Kaki otomatisku langsung menginjak rem dengan kekuatan penuh sekejap mata, menyelamatkan nyawa kucing." },
  { e: "Se", ch: "background", cat: "sekolah", ctx: "Berada di tengah kepungan tawuran pelajar saat berjalan pulang sekolah melewati pasar.", stmt: "Radar bahaya tubuhku langsung bergetar kencang otomatis, menuntun kakiku berlari gesit mencari gang aman." },

  // == Si (Kenyamanan Tubuh, Detail Rasa, & Stabilitas) ==
  { e: "Si", ch: "producer", cat: "tubuh_lelah", ctx: "Badan mendadak terasa gerah, pegal, dan kepala berat setelah seharian kuliah lapangan.", stmt: "Aku refleks langsung mandi air hangat, menyalakan AC kamar, menyeduh teh melati, dan tidur memakai selimut paling lembut." },
  { e: "Si", ch: "producer", cat: "kerja_shift", ctx: "Melihat dapur kafe berantakan, bau sampah basah, dan peralatan masak berminyak lengket.", stmt: "Aku refleks langsung mengusap meja, menyortir bahan busuk, dan menyemprotkan pengharum sereh biar segar kembali." },
  { e: "Si", ch: "producer", cat: "daily_basic", ctx: "Membeli masakan soto ayam di warung pinggir jalan dan rasanya ternyata hambar dingin.", stmt: "Aku spontan menambahkan racikan kecap, jeruk nipis, dan sambal yang pas sampai rasa kuahnya gurih mantap." },
  { e: "Si", ch: "producer", cat: "keluarga", ctx: "Kamar tidur di rumah orang tua terasa sumpek dan berdebu saat dikunjungi lebaran.", stmt: "Aku refleks merapikan sprei, mencuci selimut, dan menyalakan aromaterapi agar kualitas tidur keluarga nyaman." },

  { e: "Si", ch: "flexible", cat: "persahabatan", ctx: "Diajak teman camping mendadak di gunung dan ternyata tendanya bocor diguyur hujan deras.", stmt: "Aku luwes merancang rencana alas plastik cadangan dan merakit posisi tidur melingkar agar tubuh kami tetap hangat." },
  { e: "Si", ch: "flexible", cat: "sekolah", ctx: "Kursi dan meja belajar di kelas kampus bergoyang dan sangat tidak ergonomis dipakai ujian.", stmt: "Aku luwes menyelipkan rencana ganjal kertas keras di kaki meja dan menaruh tas di punggung biar posturku nyaman." },
  { e: "Si", ch: "flexible", cat: "uang", ctx: "Harus tinggal di penginapan murah bertarif miring dengan fasilitas kipas angin berisik.", stmt: "Aku luwes beradaptasi menyusun bantal, memakai penutup telinga, dan menikmati tidur nyenyak tanpa keluhan." },
  { e: "Si", ch: "flexible", cat: "asmara", ctx: "Berjalan kaki menyusuri kebun raya bersama pasangan dan tiba-tiba cuaca mendadak terik panas.", stmt: "Aku luwes membagi payung kecil, menawarkan kipas tangan, dan membelokkan rute ke kedai es kelapa muda adem." },

  { e: "Si", ch: "mask", cat: "kerja_kantor", ctx: "Menghadiri jamuan makan malam formal bersama jajaran direksi dan investor penting.", stmt: "Aku sengaja berlagak memahami detail kuliner, memuji tekstur rasa hidangan, dan menikmati makanan secara anggun estetis." },
  { e: "Si", ch: "mask", cat: "keluarga", ctx: "Menjadi tuan rumah acara lamaran kakak yang dihadiri sanak famili terpandang.", stmt: "Aku menyajikan hidangan pembuka yang lezat, menata tata letak sofa super empuk, dan memasang musik tenang adem." },
  { e: "Si", ch: "mask", cat: "chat_medsos", ctx: "Meresensi rencana menu kedai kopi estetik baru di unggahan media sosial pribadi.", stmt: "Aku sengaja memotret sudut interior estetik, mengulas kelembutan busa susu, dan detail rasa kue biar dinilai berkelas." },
  { e: "Si", ch: "mask", cat: "sekolah", ctx: "Menghias stand pameran karya akhir mahasiswa tingkat akhir jurusan seni rupa.", stmt: "Aku sengaja menonjolkan kenyamanan tata ruang, menaruh bean bag empuk, dan mementingkan kenyamanan pengunjung." },

  { e: "Si", ch: "threat", cat: "kegagalan", ctx: "Makan makanan ekstrem berbau menyengat dan bertekstur aneh di jamuan rapat dinas resmi.", stmt: "Perutku langsung mual, risih, terasa pusing dan kaku menahan muntah, lalu buru-buru ke wastafel." },
  { e: "Si", ch: "threat", cat: "kerja_shift", ctx: "Dipaksa begadang tiga hari berturut-turut untuk lembur menjaga booth pameran luar ruangan.", stmt: "Aku luar biasa cemas tertekan, kepalaku berputar sakit kaku, dan merasa tubuhku akan tumbang sakit parah." },
  { e: "Si", ch: "threat", cat: "daily_basic", ctx: "Kamar kosan mendadak bising akibat tetangga menyetel musik keras bervolume kencang malam hari.", stmt: "Aku langsung merasa panik tegang, jantung berdebar risih, dan pusing kaku tidak bisa tidur semalaman." },
  { e: "Si", ch: "threat", cat: "asmara", ctx: "Diajak pacar bepergian jarak jauh memakai motor sport berkursi keras tanpa busa.", stmt: "Pinggang dan punggungku langsung terasa kaku nyeri tertekan, dan sepanjang jalan aku hanya diam merengut kaku." },

  { e: "Si", ch: "receiver", cat: "daily_basic", ctx: "Sakit demam sendirian di kamar kosan dan tidak kuat beranjak dari kasur untuk beli obat.", stmt: "Sangat melegakan perasaan jika ada ibu kos atau kawan yang mengantarkan bubur hangat, obat, dan menyelimutiku." },
  { e: "Si", ch: "receiver", cat: "tubuh_lelah", ctx: "Kepala terasa sangat penat dan leher kaku setelah delapan jam menatap komputer spreadsheet.", stmt: "Kehadiran rekan yang menawarkan pijatan bahu dan membawakan es kopi susu dingin manis terasa melegakan perasaan." },
  { e: "Si", ch: "receiver", cat: "asmara", ctx: "Pulang kerja kehujanan lebat, badan menggigil kedinginan, dan dompet basah semua.", stmt: "Aku bersyukur pacar langsung membawakan handuk kering dan membuatkan teh jahe hangat adem penenang jiwa." },
  { e: "Si", ch: "receiver", cat: "keluarga", ctx: "Merasa stres dan lelah mental menghadapi tekanan tumpukan tugas kampus yang berat.", stmt: "Pulang ke rumah dan mendapati ibu sudah memasakkan makanan kesukaanku di meja makan terasa sangat menyembuhkan." },

  { e: "Si", ch: "aspiration", cat: "kegagalan", ctx: "Menjamu kawan kelompok dengan resep masakan opor ayam buatan sendiri di kosan.", stmt: "Aku sangat haus akan pujian yang mengakui kelezatan rasa, kelembutan daging, dan aroma masakanku yang sempurna." },
  { e: "Si", ch: "aspiration", cat: "chat_medsos", ctx: "Membeli rencana dekorasi interior kamar kosan berkonsep minimalis industrial adem.", stmt: "Ada kebanggaan tersembunyi pas kawan memuji kamarku sangat estetik, nyaman, dan bikin betah rebahan seharian." },
  { e: "Si", ch: "aspiration", cat: "persahabatan", ctx: "Rekomendasi tempat pijat dan refleksi keluarga andalanku dicoba oleh kawan setim kantor.", stmt: "Aku sangat senang dan bangga jika dia memuji rekomendasiku berhasil meredakan pegal dan stres tubuhnya." },
  { e: "Si", ch: "aspiration", cat: "kerja_kantor", ctx: "Merancang rencana kursi dan tata ruang kantor ramah tulang belakang demi kesehatan punggung.", stmt: "Aku berharap kontribusiku menjaga kenyamanan fisik karyawan diakui manajemen sebagai rancangan terobosan sehat." },

  { e: "Si", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari ada debu tipis dan kotoran kering menempel di atas lemari pakaian kamar kos.", stmt: "Aku tahu lemari itu kotor, tapi aku malas membersihkannya dan memilih lanjut rebahan nonton film di kasur adem." },
  { e: "Si", ch: "dismissive", cat: "asmara", ctx: "Melihat rencana tatanan rambut pacar agak berantakan dan menyenggol dahi indahnya.", stmt: "Aku malas merapikannya dan menganggap masalah estetika gaya rambut itu sepele, mending lanjut ngobrol biasa." },
  { e: "Si", ch: "dismissive", cat: "uang", ctx: "Sepatuku yang solnya mulai menipis dan sedikit berlubang saat dipakai berjalan santai.", stmt: "Selama kaki tidak lecet, aku malas membelikan sepatu baru dan memilih terus memakainya biar hemat uang." },
  { e: "Si", ch: "dismissive", cat: "kerja_shift", ctx: "Melihat seragam kerja toko agak kusut karena lupa disetrika malam hari sebelum dinas.", stmt: "Aku malas menyetrikanya dan menganggap kerapian fisik itu tidak mendesak, langsung kupakai saja dinas." },

  { e: "Si", ch: "background", cat: "daily_basic", ctx: "Memasuki ruangan ber-AC dingin setelah berjalan kaki di bawah terik matahari siang.", stmt: "Pori-pori dan otot tubuhku refleks mengendur otomatis, mengirimkan sinyal rileks damai ke seluruh syaraf jiwa." },
  { e: "Si", ch: "background", cat: "kerja_shift", ctx: "Menyeruput teh manis hangat buatan kasir kantin saat jam istirahat tiba harian.", stmt: "Lidah dan tenggorokanku otomatis mendeteksi detail madu, suhu air yang pas, dan langsung merasa tenang." },
  { e: "Si", ch: "background", cat: "tubuh_lelah", ctx: "Berbaring di atas kasur springbed empuk setelah seharian berdiri menjaga booth event.", stmt: "Radar kenyamanan fisik di tubuhku langsung aktif otomatis mengendurkan ketegangan pinggang tanpa kusadari." },
  { e: "Si", ch: "background", cat: "keluarga", ctx: "Mendengar gemercik air kolam dan desir angin sepoi di halaman belakang rumah paman.", stmt: "Sensor ketenangan alam bawah sadarku langsung menyedot suasana damai tersebut, menstabilkan detak jantungku." },

  // == Te (Efektivitas, Bukti Kerja, & Hasil Terukur) ==
  { e: "Te", ch: "producer", cat: "kerja_shift", ctx: "Mendapati antrean kasir swalayan sangat panjang dan sistem EDC pembayaran sering ngadet.", stmt: "Aku refleks mengambil alih mengurutkan struk, mengarahkan konsumen ke sistem tunai, dan menertibkan antrean cepat." },
  { e: "Te", ch: "producer", cat: "kerja_kantor", ctx: "Proyek divisi terancam molor karena staf sibuk berdebat teori tanpa ada rencana aksi nyata.", stmt: "Aku refleks menyetop debat, membuat tabel Excel indikator target mingguan, dan menuntut bukti kerja riil besok." },
  { e: "Te", ch: "producer", cat: "uang", ctx: "Menghadapi tagihan bulanan kosan dan kebutuhan makan yang membengkak tak terkontrol.", stmt: "Aku langsung membuat rencana pos anggaran ketat di ponsel, mencatat pemasukan, dan memotong jatah jajan kopi." },
  { e: "Te", ch: "producer", cat: "sekolah", ctx: "Tugas kelompok kuliah buntu karena semua anggota bingung membagi porsi pengetikan bab makalah.", stmt: "Aku refleks membuat rencana lembar kerja pembagian tugas lengkap dengan tenggat waktu dan tautan berbagi berkas." },

  { e: "Te", ch: "flexible", cat: "persahabatan", ctx: "Merencanakan rute keliling kota bersama teman dan ternyata ada jalan layang yang ditutup.", stmt: "Aku luwes menghitung ulang waktu tempuh alternatif, mencari rute potong tercepat, dan menyesuaikan jadwal asri." },
  { e: "Te", ch: "flexible", cat: "kerja_shift", ctx: "Stok bungkus makanan habis padahal pesanan take-away menumpuk di depan meja kasir restoran.", stmt: "Aku luwes mengemas makanan memakai kertas pembungkus cadangan dengan lipatan kilat biar pengiriman tetap lancar." },
  { e: "Te", ch: "flexible", cat: "uang", ctx: "Harga barang belanjaan bulanan langgananku melonjak tinggi di awal kuartal tahun ini.", stmt: "Aku luwes membandingkan harga per gram antar merk di rak swalayan dan membeli ukuran ekonomis demi efisiensi biaya." },
  { e: "Te", ch: "flexible", cat: "sekolah", ctx: "Waktu pengerjaan tugas ujian akhir tersisa lima belas menit dan baru terisi setengah lembar.", stmt: "Aku luwes menyederhanakan bahasa rencana esai, menulis poin inti paling berbobot nilai, dan selesai tepat waktu." },

  { e: "Te", ch: "mask", cat: "kerja_kantor", ctx: "Melakukan negosiasi kenaikan gaji tahunan di hadapan manajer personalia perusahaan.", stmt: "Aku sengaja menonjolkan grafik angka penjualan, laporan rasio efisiensi, dan bukti rencana keuntungan riil yang kubawa." },
  { e: "Te", ch: "mask", cat: "chat_medsos", ctx: "Ingin dinilai sebagai profesional muda yang andal di LinkedIn atau media kasta tinggi.", stmt: "Aku rajin mengunggah rencana sertifikasi kompetensi terbaru, grafik perkembangan tim, dan taktik manajemen waktu." },
  { e: "Te", ch: "mask", cat: "sekolah", ctx: "Presentasi tugas akhir kuliah di hadapan dewan penguji dan audiens mahasiswa baru.", stmt: "Aku sengaja memakai rancangan slide minimalis penuh data statistik tepercaya dan menjamin semua jawaban terukur logis." },
  { e: "Te", ch: "mask", cat: "keluarga", ctx: "Keluarga besar meminta bantuan mengelola keuangan koperasi atau dana arisan bulanan.", stmt: "Aku memamerkan rencana pembukuan digital rapi, menggunakan rumus otomatis Excel biar dianggap manajer andal." },

  { e: "Te", ch: "threat", cat: "kegagalan", ctx: "Diminta mengemban tanggung jawab finansial besar tanpa dibekali rencana laporan data akuntansi bersih.", stmt: "Aku langsung pusing kepala, risih setengah mati karena tidak ada bukti fisik angka terukur, dan menghindar cemas." },
  { e: "Te", ch: "threat", cat: "kerja_shift", ctx: "Instruksi kerja dari atasan berubah-ubah tak keruan dan tidak memiliki standar operasional tertulis.", stmt: "Rasa cemas kaku membayangi jiwaku, kepalaku pusing dan frustrasi karena kerja keras kesia-siaan tanpa alat ukur jelas." },
  { e: "Te", ch: "threat", cat: "asmara", ctx: "Pasangan menuntutku membuktikan cinta secara emosional dramatis tanpa tolok ukur tindakan konkret.", stmt: "Aku merasa sesak, kaku beku tidak tahu harus berbuat apa, dan menganggap tuntutan abstrak itu menguras tenagaku." },
  { e: "Te", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong menghitung kalkulasi kelayakan bisnis proyek dalam waktu lima menit tanpa melihat data.", stmt: "Aku merasa terancam, pusing kepala kaku, dan tegas menolak memberikan angka tebakan kasar demi reputasiku." },

  { e: "Te", ch: "receiver", cat: "daily_basic", ctx: "Ponsel dan laptop milik pribadi mendadak lemot, banyak file sampah, dan sering lag parah.", stmt: "Aku merasa sangat lega jika ada teman ahli IT yang merapikan sistem, menginstal rencana utilitas cepat, dan mempercepat kinerjanya." },
  { e: "Te", ch: "receiver", cat: "asmara", ctx: "Kebingungan merenovasi dan mendekorasi ulang kamar kosan agar rapi dan hemat biaya.", stmt: "Aku bersyukur pacar langsung datang membawakan rencana belanja bahan murah dan memandu pengerjaannya sampai tuntas." },
  { e: "Te", ch: "receiver", cat: "sekolah", ctx: "Kesulitan menyusun rencana metodologi penelitian tugas akhir kuliah yang sangat teoritis.", stmt: "Penjelasan asisten dosen yang memberikan contoh templat rencana data dan urutan riset terstruktur terasa melegakan." },
  { e: "Te", ch: "receiver", cat: "uang", ctx: "Urusan klaim asuransi kesehatan atau administrasi bank terasa rumit dan berbelit-belit.", stmt: "Aku sangat terselamatkan jika didekatkan petugas sigap yang langsung memandu rencana langkah pengisian ringkas." },

  { e: "Te", ch: "aspiration", cat: "kegagalan", ctx: "Merancang rencana sistem kerja baru yang mengikis waktu antrean kasir toko jadi setengahnya.", stmt: "Aku sangat haus akan apresiasi yang membenarkan kejeniusanku dalam menghemat biaya dan melipatgandakan hasil kerja harian." },
  { e: "Te", ch: "aspiration", cat: "persahabatan", ctx: "Membantu menata keuangan rencana kepanitiaan bakti sosial kemanusiaan agar tidak tekor.", stmt: "Ada kebanggaan tersembunyi pas kawan kelompok memuji rencana laporanku sangat detail, bersih, dan menyelamatkan kas." },
  { e: "Te", ch: "aspiration", cat: "kerja_kantor", ctx: "Membuat rencana otomatisasi input data spreadsheet yang memotong pengerjaan manual dinas.", stmt: "Aku berharap kerja keras modifikasi rumitku ini diakui divisi sebagai pencapaian efisiensi kantor paling andal." },
  { e: "Te", ch: "aspiration", cat: "chat_medsos", ctx: "Mengunggah bagan estimasi laba rugi bisnis rumahan di grup komunitas pengusaha.", stmt: "Aku merasa sangat senang jika rencana hitunganku disanjung sebagai analisis bisnis tajam dan berbobot tinggi nilai." },

  { e: "Te", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari rencana lemari pakaian di kamar kosan agak berantakan dan tidak terbagi rapi.", stmt: "Aku tahu cara menatanya agar hemat ruang, tapi aku malas menguras tenaga dan memilih lanjut baca novel." },
  { e: "Te", ch: "dismissive", cat: "asmara", ctx: "Melihat rencana rencana perjalanan pacar agak tidak efisien dan membuang-buang bensin.", stmt: "Aku malas mendebat rute dan menganggap rencana liburan santai itu bebas tidak perlu buru-buru, kuikuti saja jalan pacarku." },
  { e: "Te", ch: "dismissive", cat: "sekolah", ctx: "Mengetahui ada rencana pintasan cepat mengetik catatan kuliah memakai transkrip suara otomatis.", stmt: "Aku malas memakainya dan mending mencatat manual secara santai di buku tulis usangku demi kenyamanan jiwa." },
  { e: "Te", ch: "dismissive", cat: "uang", ctx: "Aplikasi pengelola keuangan bulanan menawarkan fitur grafik rasio belanja otomatis harian.", stmt: "Aku malas menghubungkannya dan menganggap pencatatan detail pos itu merepotkan, mending kuperkirakan di dalam kepala." },

  { e: "Te", ch: "background", cat: "daily_basic", ctx: "Berbelanja kebutuhan sayur mayur mingguan di pasar tradisional langganan.", stmt: "Otakku refleks otomatis menghitung harga per satuan, menolak timbangan curang, dan memilih langkah paling hemat." },
  { e: "Te", ch: "background", cat: "kerja_shift", ctx: "Melihat tumpukan cucian piring kotor menumpuk tinggi di wastafel dapur warkop.", stmt: "Tangan dan gerakan badanku otomatis menyusun piring sesuai ukuran, mencuci dari yang terbesar, efisien selesai." },
  { e: "Te", ch: "background", cat: "keluarga", ctx: "Mempersiapkan barang bawaan dalam koper untuk mudik pulang kampung satu keluarga.", stmt: "Bawah sadarku refleks menata posisi barang memakai gulungan baju terpadat, memanfaatkan celah koper maksimal." },
  { e: "Te", ch: "background", cat: "sekolah", ctx: "Membaca lembar rencana soal ujian pilihan ganda yang memiliki batas waktu pengerjaan ketat.", stmt: "Radar otomatis kepalaku langsung memilah soal termudah, menyilang rencana ragu-ragu, dan menghemat waktu ujian." },

  // == Ti (Struktur, Definisi, & Konsistensi Sistem) ==
  { e: "Ti", ch: "producer", cat: "kerja_kantor", ctx: "Ada tabrakan aturan antara regulasi pusat perusahaan dan peraturan daerah kantor cabang.", stmt: "Aku refleks membongkar rencana undang-undang, mendefinisikan batasan istilah, dan menyelaraskan rencana aturan harian." },
  { e: "Ti", ch: "producer", cat: "sekolah", ctx: "Penjelasan dosen di depan kelas terasa tumpang tindih, rancu, dan banyak kontradiksi teori.", stmt: "Aku refleks mengangkat tangan mengoreksi celah logikanya, dan menguraikan klasifikasi definisi yang benar konsisten." },
  { e: "Ti", ch: "producer", cat: "daily_basic", ctx: "Melihat susunan klasifikasi buku dan folder komputer pribadiku mulai kacau tercampur aduk.", stmt: "Aku refleks membuat sistem folder bertingkat berdasarkan urutan abjad, tahun terbit, dan label fungsi bersih." },
  { e: "Ti", ch: "producer", cat: "keluarga", ctx: "Terjadi perdebatan antar paman mengenai urutan silsilah keluarga dan rencana pembagian harta.", stmt: "Aku langsung mengambil kertas karton, menggambar skema silsilah yang presisi, dan membagi rencana adil." },

  { e: "Ti", ch: "flexible", cat: "persahabatan", ctx: "Menyusun rencana pembagian anggaran patungan sewa vila bersama kawan kelompok yang bervariasi gajinya.", stmt: "Aku luwes merancang metode subsidi silang berkeadilan, menyajikan angka pembagian yang disepakati semua pihak." },
  { e: "Ti", ch: "flexible", cat: "kerja_shift", ctx: "Aturan operasional kasir toko tidak bisa diterapkan saat mesin kasir mati dan listrik padam total.", stmt: "Aku luwes memodifikasi sementara alur verifikasi manual memakai buku nota, menjaga rekonsiliasi data tetap rapi." },
  { e: "Ti", ch: "flexible", cat: "uang", ctx: "Harus mencetak rincian pengeluaran kelompok arisan bulanan dengan format laporan darurat.", stmt: "Aku luwes mengolah rencana format laporan seadanya, menggunakan rencana tabel bersih agar mudah dipahami anggota." },
  { e: "Ti", ch: "flexible", cat: "asmara", ctx: "Menghadapi perdebatan argumen dengan pasangan pacar mengenai batasan waktu privasi masing-masing.", stmt: "Aku luwes menawarkan rencana poin kesepakatan tertulis yang menghormati kenyamanan dan batasan logis relasi kami." },

  { e: "Ti", ch: "mask", cat: "kerja_kantor", ctx: "Ditunjuk menyusun rencana anggaran dasar dan rencana standard operasional prosedur divisi baru kantor.", stmt: "Aku sengaja merancang dokumen rencana yang super formal, menggunakan struktur pasal bertingkat biar dinilai ahli aturan." },
  { e: "Ti", ch: "mask", cat: "chat_medsos", ctx: "Menulis tanggapan atau opini mengenai kasus kejahatan hukum yang sedang viral di platform medsos.", stmt: "Aku sengaja menyusun argumentasi berbasis runut pasal hukum harian dan bukti silang logika kaku biar disegani netizen." },
  { e: "Ti", ch: "mask", cat: "sekolah", ctx: "Sidang skripsi tugas akhir di depan dewan penguji dan dosen pembimbing utama kampus.", stmt: "Aku sengaja menyajikan kerangka pemikiran berupa diagram alir beraturan, menjelaskan korelasi variabel presisi tajam." },
  { e: "Ti", ch: "mask", cat: "persahabatan", ctx: "Diminta menjadi mediator penengah rencana perdebatan sengit sengketa kepengurusan karang taruna.", stmt: "Aku menampilkan wajah kaku adil, memegang erat rencana tertulis tata tertib organisasi, dan memutus secara imparsial." },

  { e: "Ti", ch: "threat", cat: "kegagalan", ctx: "Didorong menyetujui kesepakatan kerja kontrak tanpa diberi waktu mempelajari isi dokumen pasal demi pasal.", stmt: "Aku langsung merasa terancam cemas, kaku membeku khawatir tertipu celah hukum kabur, dan tegas menolak tanda tangan." },
  { e: "Ti", ch: "threat", cat: "kerja_shift", ctx: "Bekerja di lingkungan toko yang penuh dengan rencana kecurangan uang dan manipulasi data laporan kasir.", stmt: "Ketidakteraturan dan ketidakjujuran ini membuat jiwaku luar biasa panik risih tertekan, kepalaku pusing mual kaku." },
  { e: "Ti", ch: "threat", cat: "asmara", ctx: "Pasangan emosional marah-marah dan melempar tuduhan tidak logis tanpa bukti premis yang sahih.", stmt: "Aku mendadak pusing tertekan, kaku membeku dan mati rasa, tidak sanggup meladeni amukan yang tak konsisten kaku." },
  { e: "Ti", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong menjelaskan alur pengerjaan database rumit saat kepalaku lelah migrain kaku.", stmt: "Aku merasa kewalahan jiwa, risih terganggu, dan menutup diri mencegah interogasi rumit demi melindungi sarafku." },

  { e: "Ti", ch: "receiver", cat: "daily_basic", ctx: "Melihat kamar kosan dan lemari buku pribadiku sangat berantakan dan tumpukan kertas tercecer.", stmt: "Jiwa rasanya melegakan dan adem jika ada kawan tertib yang merapikan semua rencana kertas, folder, dan menyortirnya presisi." },
  { e: "Ti", ch: "receiver", cat: "sekolah", ctx: "Ragu dan bingung memahami instruksi penulisan karya ilmiah tugas akhir yang berbelit-belit.", stmt: "Pertolongan kawan pintar yang menjelaskan rencana pembagian bab dan bagan hubungan antar variabel terasa melegakan perasaan." },
  { e: "Ti", ch: "receiver", cat: "kerja_shift", ctx: "Stres dan pusing memisahkan barang logistik toko yang tercampur aduk di gudang sempit.", stmt: "Aku sangat terbantu jika ada kepala gudang disiplin yang membuat papan klasifikasi dan label rak bersih teratur adem." },
  { e: "Ti", ch: "receiver", cat: "uang", ctx: "Kebingungan merencanakan rencana laporan pajak tahunan pribadiku yang rumit dan banyak aturan baru.", stmt: "Aku sangat bersyukur jika didekatkan dengan konsultan andal yang langsung menyajikan rencana hitungan bersih siap kirim." },

  { e: "Ti", ch: "aspiration", cat: "kegagalan", ctx: "Merancang rencana struktur klasifikasi buku atau rencana bagan organigram tim yang presisi jernih.", stmt: "Aku sangat haus akan pengakuan bahwa bagan dan struktur rancanganku sangat rapi, lurus logika, dan menyelamatkan sistem." },
  { e: "Ti", ch: "aspiration", cat: "persahabatan", ctx: "Menyusun rencana aturan main dan sanksi denda ketertiban keuangan di grup asrama kosan.", stmt: "Ada kebanggaan tersembunyi pas kawan asrama memuji rencana aturanku sangat adil, logis konsisten, dan patut ditiru." },
  { e: "Ti", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengaudit kelemahan sistem rencana data pelaporan perusahaan dan merevisinya secara elegan.", stmt: "Aku berharap kontribusiku mengoreksi kontradiksi dan cacat logika kerja diakui direksi sebagai rencana penyelamat tim." },
  { e: "Ti", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan peta klasifikasi tipe kepribadian atau bagan analisis psikometrik di medsos.", stmt: "Aku merasa senang jika analisis baganku diapresiasi netizen sebagai rencana penjelasan paling presisi dan mencerahkan jiwa." },

  { e: "Ti", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari ada inkonsistensi penjelasan kecil pada manual instruksi mesin cuci kosan.", stmt: "Aku gampang sekali menemukannya, tapi malas menceritakannya ke pemilik kos dan mending langsung mencuci pakaian." },
  { e: "Ti", ch: "dismissive", cat: "persahabatan", ctx: "Mendengar teman kelompok salah mengutip rencana definisi istilah saat asyik nongkrong santai warkop.", stmt: "Aku malas mendebat istilah dan menganggap koreksi akademis pas santai itu membosankan, kubiarkan dia terus bicara." },
  { e: "Ti", ch: "dismissive", cat: "sekolah", ctx: "Mengetahui rencana makalah tim kuliah mengalami cacat ketertiban penulisan daftar pustaka kecil.", stmt: "Aku malas mengedit ulang dan mending langsung mengumpul berkas apa adanya biar cepat pulang tidur siang adem." },
  { e: "Ti", ch: "dismissive", cat: "uang", ctx: "Melihat rencana laporan nota pembelanjaan warung mengalami selisih perhitungan seratus perak rupiah.", stmt: "Aku tahu di mana letak salah jumlahnya, tapi malas mempermasalahkannya dan langsung membayar nota lunas." },

  { e: "Ti", ch: "background", cat: "daily_basic", ctx: "Melihat tumpukan barang logistik belanjaan diletakkan acak di teras depan kamar kos.", stmt: "Pikiran bawah sadar refleksku membagi dan menyortir barang berdasarkan fungsi, ukuran, dan kepatutan tanpa kuperintahkan." },
  { e: "Ti", ch: "background", cat: "kerja_shift", ctx: "Berada di depan meja kasir menatap jajaran rokok, obat, dan permen di etalase belakang.", stmt: "Otakku refleks menyaring penataan pola yang janggal, menyaring ketidakteraturan, dan merapikannya di dalam kepala." },
  { e: "Ti", ch: "background", cat: "keluarga", ctx: "Berjalan menyusuri lorong rumah sanak saudara yang penuh pajangan foto berjejer.", stmt: "Radar logika otomatis kepalaku refleks memetakan relasi sebab akibat dan rencana hubungan darah silsilah keluarga dalam sedetik." },
  { e: "Ti", ch: "background", cat: "sekolah", ctx: "Membaca lembar rencana teks undang-undang dasar atau rencana modul materi kuliah hukum.", stmt: "Sensor ketertiban bawah sadarku langsung menyedot klasifikasi sistem dan menyaring kontradiksi kalimat otomatis." },

  // == Fe (Atmosfer Emosi, Ekspresi, & Gelombang Sosial) ==
  { e: "Fe", ch: "producer", cat: "persahabatan", ctx: "Suasana kumpul kelompok mendadak sepi kaku, hambar, dan semua orang asyik menatap ponsel.", stmt: "Wajah dan suaraku refleks langsung melontarkan banyolan konyol, tertawa nyaring, dan menular ceria biar ramai." },
  { e: "Fe", ch: "producer", cat: "daily_basic", ctx: "Menyapa penjaga warung kelontong atau petugas kasir swalayan yang terlihat letih lesu.", stmt: "Aku spontan menaikkan intonasi nada suara, tersenyum lebar hangat, dan menyemangati jiwanya biar ikut tersenyum." },
  { e: "Fe", ch: "producer", cat: "asmara", ctx: "Pasangan terlihat murung dan sedih saat merayakan kelulusan akibat nilai kuisnya jelek.", stmt: "Aku refleks berpose akrobatik konyol, mendramatisir rasa sedihnya, dan mengajaknya tertawa lepas melupakan duka." },
  { e: "Fe", ch: "producer", cat: "keluarga", ctx: "Acara reuni keluarga besar diselimuti ketegangan akibat perdebatan rencana pembagian tugas masak.", stmt: "Aku refleks melempar banyolan ringan, mencium pipi bibi, dan menyanyikan lagu riang hingga suasana cair gembira." },

  { e: "Fe", ch: "flexible", cat: "kerja_shift", ctx: "Harus beralih peran dari menjaga kasir toko yang ramah menjadi buru entri data di gudang sepi.", stmt: "Aku luwes mengatur ekspresi ceriaku, mematikan mode teatrikal ramah sosial, and fokus diam tenang menyortir barang." },
  { e: "Fe", ch: "flexible", cat: "sekolah", ctx: "Menghidupkan panggung orasi kepemimpinan mahasiswa di depan ribuan audiens heboh.", stmt: "Aku luwes memainkan intonasi vokal dramatis membakar semangat, lalu berekspresi santai kembali setelah turun panggung." },
  { e: "Fe", ch: "flexible", cat: "asmara", ctx: "Menghadiri pesta malam mingguan bersama teman pacar dan tiba-tiba kulihat pacar mulai lelah fisik.", stmt: "Aku luwes menurunkan energi gembira panggungku, pamit pelan dari pergaulan ramai, dan menemaninya pulang santai adem." },
  { e: "Fe", ch: "flexible", cat: "uang", ctx: "Menjaga stand jualan keripik pisang di pasar malam festival kebudayaan daerah setempat.", stmt: "Aku luwes meramu sapaan manis ekspresif menyedot calon pembeli, dan bersikap rileks santai pas toko sedang sepi pembeli." },

  { e: "Fe", ch: "mask", cat: "kerja_kantor", ctx: "Menyambut kedatangan klien eksekutif baru di lobi penerimaan utama kantor pusat.", stmt: "Aku sengaja berlagak super ramah antusias, melempar gurauan segar, dan memimpin kehangatan komunikasi sosial." },
  { e: "Fe", ch: "mask", cat: "chat_medsos", ctx: "Mengunggah momen manis liburan kelompok di halaman akun media sosial milik pribadi.", stmt: "Aku menyusun foto dengan pose keceriaan melompat bersama, ekspresi tawa termanis, dan takarir penuh energi positif." },
  { e: "Fe", ch: "mask", cat: "sekolah", ctx: "Menjadi MC koordinator pembukaan perayaan festival seni musik tahunan universitas.", stmt: "Aku sengaja menonjolkan gaya teater, suara bertenaga heboh, dan ekspresi hidup-ria biar penonton terpesona kagum." },
  { e: "Fe", ch: "mask", cat: "keluarga", ctx: "Menghadiri pesta pernikahan sepupu jauh yang dihadiri ratusan kerabat keluarga besar.", stmt: "Aku memoles sikap sosialku, menjadi magnet tawa meladeni para bibi, dan tersenyum ceria seharian demi kenyamanan ibu." },

  { e: "Fe", ch: "threat", cat: "duka", ctx: "Dipaksa memimpin yelyel sorak gembira dan menyemangati forum saat jiwaku sedang berkabung duka.", stmt: "Aku langsung merasa sesak risih mual, kepalaku pusing kaku, dan merasa sangat tertekan pura-pura heboh berdusta." },
  { e: "Fe", ch: "threat", cat: "kerja_shift", ctx: "Dituntut bekerja sebagai badut maskot atau menyapa ribuan pelanggan toko penuh senyum buatan.", stmt: "Tuntutan memalsukan emosi sosial ini membuat sarafku lelah kaku, luar biasa cemas tertekan, lalu ingin mengurung diri." },
  { e: "Fe", ch: "threat", cat: "persahabatan", ctx: "Kawan kelompok menuduh ekspresi ceria dan pembawaan hangatku selama ini hanya kepalsuan drama cari perhatian.", stmt: "Aku langsung merasa beku kaku, sakit hati luar biasa tertekan, dan refleks memutuskan kontak pertemanan mendadak." },
  { e: "Fe", ch: "threat", cat: "asmara", ctx: "Didesak pacar menampilkan kemesraan heboh dan berpelukan manis di depan sorot kamera umum.", stmt: "Aku merasa pusing risih cemas, kaku membeku, dan mendadak mundur menolak dengan nada bicara kaku dingin." },

  { e: "Fe", ch: "receiver", cat: "daily_basic", ctx: "Suasana pagi hari di kosan terasa jenuh sepi, mendung kelabu, dan badanku lemas malas.", stmt: "Melegakan perasaan jika ada teman kos supel yang berteriak gembira menyapaku, membuyarkan sepi dengan tawa renyah." },
  { e: "Fe", ch: "receiver", cat: "kerja_shift", ctx: "Rapat koordinasi shift kerja toko berjalan sangat tegang kaku, dingin, dan membosankan.", stmt: "Aku merasa sangat bersyukur jika ada kasir periang yang langsung melempar banyolan kocak mencairkan kebekuan rapat." },
  { e: "Fe", ch: "receiver", cat: "asmara", ctx: "Kepala rasanya pusing bebal dan jiwa penat setelah seharian menerima revisi tugas dosen.", stmt: "Aku butuh pacar yang menyambutku dengan pelukan manja hangat, candaan manis, dan senyuman cinta mencerahkan." },
  { e: "Fe", ch: "receiver", cat: "persahabatan", ctx: "Canggung dan kaku setengah mati saat harus bergabung di meja lingkaran pergaulan baru.", stmt: "Aku merasa terselamatkan jika ada orang supel menghampiriku, mengajakku tertawa, dan memperkenalkanku ramah ceria." },

  { e: "Fe", ch: "aspiration", cat: "kegagalan", ctx: "Berperan sebagai penghibur kawan kelompok yang sedang dilanda kesedihan atau putus cinta asmara.", stmt: "Aku sangat haus akan pengakuan bahwa banyolan, tawa, dan energi keceriaan yang kubawa berhasil menerangi jiwanya." },
  { e: "Fe", ch: "aspiration", cat: "chat_medsos", ctx: "Mengunggah video lelucon kocak atau konten parodi kehidupan harian di medsos.", stmt: "Ada kebanggaan tersembunyi pas ribuan penonton terhibur, tertawa terpingkal-pingkal, dan menyanjung sifat humorku." },
  { e: "Fe", ch: "aspiration", cat: "persahabatan", ctx: "Berhasil mencairkan permusuhan dingin antar sahabat lewat rencana kejutan ulang tahun yang meriah.", stmt: "Aku berharap kerja keras menghidupkan harmoni emosi ini diakui kelompok sebagai penyelamat kebahagiaan bersama." },
  { e: "Fe", ch: "aspiration", cat: "kerja_kantor", ctx: "Merancang rencana acara outing karyawan kantor yang bersemangat menyatukan jajaran divisi terbelah.", stmt: "Aku haus diakui direksi sebagai arsitek kebahagiaan dan perekat motivasi tim paling andal di departemen." },

  { e: "Fe", ch: "dismissive", cat: "daily_basic", ctx: "Menyadari semua kawan di ruangan kosan sedang canggung diam dan suasana terasa kaku hambar.", stmt: "Aku tahu cara melempar banyolan dan menghidupkan tawa, tapi malas dan mending lanjut membaca komik di kasur." },
  { e: "Fe", ch: "dismissive", cat: "persahabatan", ctx: "Dua kubu perkumpulan hobi yang kuikuti sedang saling sindir halus di grup kumpul santai warkop.", stmt: "Aku malas ikut campur melempar candaan penawar amarah dan menganggap perselisihan ego sosial itu membosankan." },
  { e: "Fe", ch: "dismissive", cat: "sekolah", ctx: "Mengetahui kelas kuliah mendadak hening kaku saat dosen melontarkan pertanyaan retoris menyenggol mahasiswa.", stmt: "Aku malas meramaikan suasana dengan candaan dan mending menunduk pura-pura sibuk mencatat rencana materi buku." },
  { e: "Fe", ch: "dismissive", cat: "asmara", ctx: "Pacar bercerita dramatis penuh emosional mengenai gosip artis terkenal yang sedih tertimpa musibah.", stmt: "Aku malas berekspresi heboh drama dan memilih membalas manggut-manggut datar dingin sambil lanjut menyetir mobil." },

  { e: "Fe", ch: "background", cat: "daily_basic", ctx: "Berpapasan dengan anak-anak kecil yang sedang asyik bermain balon sabun di taman kota.", stmt: "Wajah dan bibirku otomatis melengkung tersenyum lebar hangat, dan mataku berbinar gembira tanpa perlu dipaksa." },
  { e: "Fe", ch: "background", cat: "chat_medsos", ctx: "Mendengar tawa renyah dan sorak gembira kawan di seberang telepon genggam milik pribadi.", stmt: "Bawah sadarku refleks ikut tertawa kecil dan menyerap gelombang emosi bahagianya, mencerahkan jiwa adem." },
  { e: "Fe", ch: "background", cat: "keluarga", ctx: "Memasuki ruang makan rumah dan melihat keluarga sedang asyik makan bersama diiringi tawa.", stmt: "Radar harmoni sosial di kepalaku langsung memantulkan frekuensi riang, menyatukan hatiku ke obrolan hangat." },
  { e: "Fe", ch: "background", cat: "kerja_shift", ctx: "Berdiri di depan ribuan penonton bioskop yang mendengus geli menonton adegan film kartun kocak.", stmt: "Sensor otomatis empati emosiku langsung menyerap riuh tawa bioskop, membuat mataku berair gembira otomatis." },

  // == Fi (Kedekatan, Jarak Pribadi, & Kepercayaan) ==
  { e: "Fi", ch: "producer", cat: "persahabatan", ctx: "Melihat teman baru mencoba mendesak dan mengorek rahasia pribadi serta rencana buku harian jiwaku.", stmt: "Aku refleks berwajah kaku dingin, menarik langkah mundur berjarak, dan menegakkan batas privasi kokoh dalam sedetik." },
  { e: "Fi", ch: "producer", cat: "asmara", ctx: "Mencium gelagat ketidakujuran dan kebohongan halus saat dia menceritakan urusan malam minggunya.", stmt: "Aku refleks diam membisu dingin, menyilangkan tangan kaku, dan menetapkan jarak aman kepercayaan berkurang." },
  { e: "Fi", ch: "producer", cat: "uang", ctx: "Seorang kawan lama tiba-tiba menghubungi dan memuji berlebihan demi bisa meminjam rencana dana daruratku.", stmt: "Aku refleks menolak sopan tetapi tegas, menyoring niat terselubungnya, dan membatasi interaksi obrolan harian." },
  { e: "Fi", ch: "producer", cat: "keluarga", ctx: "Anggota keluarga besar mengejek pilihan prinsip hidup moralitas dan jalan idealis yang sedang kutempuh.", stmt: "Aku refleks membisu dingin, menolak mendebat kasar, dan memilih menjaga jarak asri membatasi kunjungan keluarga." },

  { e: "Fi", ch: "flexible", cat: "persahabatan", ctx: "Berteman karib dengan siapa saja di grup pergaulan harian namun tetap menjaga rahasia jiwa.", stmt: "Aku luwes mengobrol akrab dan bercanda hangat, tetapi gampang menegakkan sekat batas aman pas dia mulai lancang." },
  { e: "Fi", ch: "flexible", cat: "daily_basic", ctx: "Harus berbagi meja makan sempit bersama orang asing di warung nasi goreng pinggir jalan ramai.", stmt: "Aku luwes tersenyum ramah sopan menyapa, lalu makan dengan tenang tertib menghormati batas privasi masing-masing." },
  { e: "Fi", ch: "flexible", cat: "asmara", ctx: "Mengatur kedalaman komitmen dan rasa percaya dalam menjalani hubungan asmara bersama pacar baru.", stmt: "Aku luwes membuka sekat jiwa bertahap, tahu kapan harus berbagi rahasia terdalam dan kapan harus menjaga jarak aman." },
  { e: "Fi", ch: "flexible", cat: "keluarga", ctx: "Menghadapi bibi bawel yang terus mencampuri urusan jodoh dan karier saat mudik lebaran.", stmt: "Aku luwes menjawab dengan senyum sopan santun formal tanpa membiarkan pertanyaannya menembus wilayah lubuk hatiku." },

  { e: "Fi", ch: "mask", cat: "kerja_kantor", ctx: "Menghadiri peluncuran rencana yayasan kemanusiaan dan CSR perusahaan mitra kerja kantor.", stmt: "Aku sengaja menampilkan diri sebagai sosok berbudi luhur, beretika moral tinggi, dan menjunjung kesetiaan kerja." },
  { e: "Fi", ch: "mask", cat: "chat_medsos", ctx: "Menyusun rencana tulisan biografi singkat atau kata mutiara di profil akun medsos milik pribadi.", stmt: "Aku sengaja memilih kutipan kebaikan tulus, kejujuran jiwa, dan kesetiaan komitmen biar dihormati netizen." },
  { e: "Fi", ch: "mask", cat: "sekolah", ctx: "Wawancara masuk organisasi kerohanian atau rencana komite sukarelawan mahasiswa tingkat fakultas.", stmt: "Aku sengaja menonjolkan empati halus, kesucian moralitas, dan ketulusan pengabdian berteman agar dinilai murni akhlak." },
  { e: "Fi", ch: "mask", cat: "keluarga", ctx: "Menghadiri wisuda adik sepupu yatim piatu yang dibiayai patungan oleh keluarga besar.", stmt: "Aku memoles gestur budi halus, meneteskan air mata haru yang anggun, dan memeluk adik demi kehormatan nilai moral keluarga." },

  { e: "Fi", ch: "threat", cat: "kegagalan", ctx: "Didesak menceritakan rencana luka jiwa, kegagalan masa lalu, atau rahasia malam di panggung umum.", stmt: "Kepalaku langsung pusing risih cemas, kaku membeku, dan merasa batas kehormatanku diinjak-injak paksa secara kasar." },
  { e: "Fi", ch: "threat", cat: "persahabatan", ctx: "Tiba-tiba dituduh munafik, jahat dingin, dan tidak punya rasa peduli oleh kelompok sahabat karibku.", stmt: "Aku merasa luar biasa terkejut terluka tegang, jantung berdebar risih, dan cenderung mengurung diri membeku dingin." },
  { e: "Fi", ch: "threat", cat: "asmara", ctx: "Dipaksa bersumpah setia dan menyerahkan kata sandi ponsel pribadi kepada pacar yang posesif curiga.", stmt: "Aku merasa sesak risih tertekan, kaku membeku, dan mulai merencanakan rencana perpisahan dingin diam-diam." },
  { e: "Fi", ch: "threat", cat: "tubuh_lelah", ctx: "Ditodong menandatangani pakta kerja sama yang bertentangan dengan rencana nilai idealisme jiwa moralitasku.", stmt: "Aku merasa tersudut cemas, kaku membeku defensif, dan tegas menolak meletakkan tanda tanganku demi reputasi batin." },

  { e: "Fi", ch: "receiver", cat: "duka", ctx: "Jiwa terluka parah, hancur berkeping-keping akibat pengkhianatan sahabat karib tepercaya.", stmt: "Jiwa rasanya melegakan dan adem jika ada teman peka yang memeluk pundakku tanpa kata, menemaniku hening damai." },
  { e: "Fi", ch: "receiver", cat: "asmara", ctx: "Merasakan keputusasaan jiwa yang mendalam setelah putus hubungan cinta asmara bertahun-tahun.", stmt: "Aku sangat bersyukur jika didekatkan sahabat setia yang bersedia menjaga rahasia air mataku dan menjamin aman jiwaku." },
  { e: "Fi", ch: "receiver", cat: "daily_basic", ctx: "Tinggal di kamar kos baru dan cemas tidak bisa beradaptasi dengan lingkungan tata tetangga.", stmt: "Pertemuan dengan tetangga sebelah yang langsung menyapa santun, sopan menghormati jarak pribadiku terasa menenangkan." },
  { e: "Fi", ch: "receiver", cat: "tubuh_lelah", ctx: "Badan letih, jiwa lelah menghadapi drama politik dan adu sikut kekuasaan di lingkungan organisasi.", stmt: "Aku butuh ruang asri damai bersih dari drama kerja, dan sahabat luhur yang tulus mengasihi lelah fisikku adem." },

  { e: "Fi", ch: "aspiration", cat: "kegagalan", ctx: "Menjaga rahasia aib teman kelompok dan melindunginya dari cemoohan gosip divisi departemen.", stmt: "Aku sangat haus akan pengakuan bahwa aku adalah sahabat paling loyal menjaga rahasia, murni etika, dan tepercaya." },
  { e: "Fi", ch: "aspiration", cat: "persahabatan", ctx: "Menyelamatkan persahabatan kelompok yang nyaris hancur lewat rencana mediasi ketulusan tatap muka.", stmt: "Ada kebanggaan tersembunyi pas sahabat memuji keluhuran akhlakku, tulus jiwa cinta, dan menyebutku penyelamat ikat karib." },
  { e: "Fi", ch: "aspiration", cat: "kerja_kantor", ctx: "Mengusulkan rencana perlindungan kesejahteraan mental dan privasi data karyawan di divisi kerja dinas.", stmt: "Aku berharap integritas moral dan kepedulian tulusku diakui direksi sebagai rencana pilar keadilan kemanusiaan." },
  { e: "Fi", ch: "aspiration", cat: "chat_medsos", ctx: "Membagikan rencana esai moralitas atau kepedulian saksama menolong korban perang luar negeri di medsos.", stmt: "Aku merasa bahagia jika tulisan kemanusiaanku dipuji netizen sebagai rencana pengingat nurani paling tulus dan menyentuh jiwa." },

  { e: "Fi", ch: "dismissive", cat: "daily_basic", ctx: "Melihat rasa tulus asri dan kedalaman rasa sayang kawan baru di asrama kosan baru.", stmt: "Aku tahu dia mempercayai sepenuhnya, tapi aku malas menanggapi kedekatan emosi itu, memilih lanjut merakit rak buku." },
  { e: "Fi", ch: "dismissive", cat: "persahabatan", ctx: "Mengetahui dua rekan nongkrong warkop diam-diam sedang saling membenci dan bermuka dua.", stmt: "Aku tahu persis perang jiwa dingin mereka, tapi aku menganggap drama relasi interpersonal itu membosankan dan kubiarkan saja." },
  { e: "Fi", ch: "dismissive", cat: "asmara", ctx: "Pacar menangis tersedu-sedu meminta rencana permohonan maaf atas kelalaian kecil ketidaksengajaan ponselnya.", stmt: "Aku tahu hatinya tulus minta maaf, tapi aku malas berlarut drama emosi dan mending menyuruhnya menyapu lantai kamar kos." },
  { e: "Fi", ch: "dismissive", cat: "sekolah", ctx: "Mendengar teman kelompok curhat panjang lebar menangis tersedu tentang penolakan seleksi magang dinas.", stmt: "Aku malas larut drama sedih dan mending diam mengangguk datar sambil melanjutkan mengetik rencana tabel spreadsheet komputer." },

  { e: "Fi", ch: "background", cat: "daily_basic", ctx: "Mengamati bahasa tubuh dan nada bicara teman sekamar kos saat dia menyapa pagi hari.", stmt: "Nuraniku secara otomatis menyaring tingkat ketulusan nadanya, menyaring kebohongan, dan mengukur rasa percaya." },
  { e: "Fi", ch: "background", cat: "chat_medsos", ctx: "Membaca pesan singkat chat WhatsApp kawan lama yang menawarkan kerja sama bisnis dadakan.", stmt: "Bawah sadarku refleks mendeteksi getaran manipulasi motif terselubung dan langsung mengambil tindakan jaga jarak." },
  { e: "Fi", ch: "background", cat: "keluarga", ctx: "Duduk bersama keluarga besar mengelilingi meja makan makan malam lebaran yang hangat adem.", stmt: "Radar ikatan jiwa bawah sadarku langsung menyedot dinamika kedekatan emosi antar paman-bibi tanpa perlu kuasai." },
  { e: "Fi", ch: "background", cat: "sekolah", ctx: "Berpapasan dengan guru sekolah dasar yang dulu sangat berjasa mendidik dan menyayangi jiwaku.", stmt: "Sensor kesetiaan moralitas dan rasa hormat tulus di latar jiwaku aktif instan otomatis, menundukkan kepalaku sopan." }
];

const HOLDOUT_SEEDS: CoreSeed[] = [
  { e: "Se", ch: "producer", cat: "kerja_shift", ctx: "Seorang bos toko mencemooh dan membentak staf magang baru yang melakukan kesalahan kasir sepele.", stmt: "Aku refleks pasang badan maju, menatap mata bos secara menantang berani, dan menghentikan maki kasar detik itu." },
  { e: "Se", ch: "threat", cat: "kegagalan", ctx: "Tiba-tiba dikepung dan dipalak uang oleh sekelompok preman jalanan beringas bersenjata kayu di gang sepi.", stmt: "Aku mendadak kaku membeku ketakutan risih tertekan, kehilangan daya gerak fisik, dan lemas pasrah menyerahkan dompet." },
  { e: "Se", ch: "receiver", cat: "daily_basic", ctx: "Kebingungan dan ragu berbulan-bulan untuk mengeksekusi rencana mendaftar kursus bahasa asing.", stmt: "Aku sangat melegakan jiwa jika ada teman nekat yang langsung mendaftarkanku dan menyeretku paksa ikut kelas perdana." },
  { e: "Se", ch: "background", cat: "daily_basic", ctx: "Melihat motor di sampingku hampir oleng dan roboh menimpa anak kecil di parkiran swalayan.", stmt: "Tangan dan gerakan refleks otomatisku langsung menahan stang motor secepat kilat otomatis, mengamankan si balita." },

  { e: "Si", ch: "producer", cat: "tubuh_lelah", ctx: "Kaki dan pinggang terasa sangat nyeri kaku setelah mengantre berdiri lima jam di loket bank dinas.", stmt: "Aku refleks mencari tempat duduk empuk adem, mengoleskan minyak pijat, menyelonjorkan kaki, and memejamkan mata rileks." },
  { e: "Si", ch: "threat", cat: "kegagalan", ctx: "Terjebak menginap di kamar kos kotor penuh dengan kecoa malam hari, kasur berdebu, dan AC rusak mati gerah.", stmt: "Kepalaku langsung pusing mual kaku risih tertekan, badan terasa gatal kaku, dan insomnia menyiksa semalaman suntuk." },
  { e: "Si", ch: "receiver", cat: "sekolah", ctx: "Stres, pusing dan mual lemas karena terserang masuk angin dan diare berat di tengah minggu ujian kampus.", stmt: "Aku merasa terselamatkan jika ada ibu kos atau sahabat luhur yang membawakan minyak kayu putih hangat, bubur, dan obat." },
  { e: "Si", ch: "background", cat: "tubuh_lelah", ctx: "Berendam air hangat beraroma pinus di bak kamar mandi kosan setelah lelah dinas lapangan hujan lebat.", stmt: "Otot dan persendian tubuhku refleks mengendur otomatis mengurai lelah, menenangkan denyut nadi dan jiwa rangsangan jiwaku." },

  { e: "Te", ch: "producer", cat: "kerja_kantor", ctx: "Divisi kerja kantor terancam kena penalti denda akibat rencana laporan tahunan yang berantakan meleset.", stmt: "Aku refleks mengambil alih Excel, menata tabel, membuat bagan indikator, dan menuntut rencana data bersih klir besok pagi." },
  { e: "Te", ch: "threat", cat: "kegagalan", ctx: "Didesak menjadi manajer proyek berskala milyar rupiah tanpa dibekali rencana pembukuan dan nota belanja akurat asli.", stmt: "Aku merasa sangat cemas risih tertekan kaku, kepala berputar pusing mual, dan memilih mengundurkan diri mencari aman." },
  { e: "Te", ch: "receiver", cat: "daily_basic", ctx: "Laptop dan HP milik pribadi mendadak terserang virus iklan popup mengesalkan, lambat, dan data terkunci.", stmt: "Sangat melegakan jiwa jika ada teman jenius komputer yang langsung membersihkan virus, mempercepat RAM, dan memulihkan file." },
  { e: "Te", ch: "background", cat: "daily_basic", ctx: "Merapikan tumpukan kertas brosur promosi swalayan di atas meja makan kosan pribadi.", stmt: "Otak dan tanganku otomatis membagi brosur berdasarkan tanggal kedaluwarsa promosi dan diskon termurah secara rencana cepat." },

  { e: "Ti", ch: "producer", cat: "kerja_kantor", ctx: "Dokumen pendaftaran akreditasi divisi kampus ditolak asesor karena ketidakcocokan rencana aturan dasar pasal.", stmt: "Aku refleks mengaudit seluruh dokumen dasar, mendefinisikan korelasi pasal regulasi, and merapikan rencana kesepakatan tertib." },
  { e: "Ti", ch: "threat", cat: "keluarga", ctx: "Menghadiri rapat keluarga besar yang berjalan sangat emosional, ribut klaim lisan waris tanpa sertifikat lurus.", stmt: "Aku langsung pusing kaku risih tertekan, kaku membeku membisu, dan menolak ikut larut dalam amukan argumentasi sengketa." },
  { e: "Ti", ch: "receiver", cat: "sekolah", ctx: "Bingung dan pusing merakit rencana silsilah keluarga dan sejarah marga suku untuk tugas makalah sosiologi.", stmt: "Pertolongan sepupuku yang menyajikan diagram bagan rapi, garis relasi jelas, dan klasifikasi bertingkat mencerahkan jiwa." },
  { e: "Ti", ch: "background", cat: "daily_basic", ctx: "Melihat susunan laci meja kasur yang penuh gunting kuku, kunci, pulpen, dan receipts belanja.", stmt: "Radar ketertiban otomatis kepalaku refleks mengelompokkan benda sesuai jenis dan kegunaan otomatis tanpa lelah jiwa." },

  { e: "Ne", ch: "producer", cat: "daily_basic", ctx: "Kompor gas dapur kosan mendadak mampet dan mati total tepat saat hendak memasak mie instan malam hari.", stmt: "Aku refleks memutar otak mencari ide cadangan, langsung menggunakan pemanas air listrik atau meminjam kompor sebelah." },
  { e: "Ne", ch: "threat", cat: "asmara", ctx: "Pasangan mendadak bertanya 'Bagaimana jika bumi kolaps lima puluh tahun lagi dan kita punah?' saat krisis.", stmt: "Aku langsung merasa beku kaku cemas luar biasa, otak buntu menolak membayangkan kiamat buram, lalu mengalihkan obrolan." },
  { e: "Ne", ch: "receiver", cat: "tubuh_lelah", ctx: "Merasa sangat jenuh, hambar, dan lemas karena rutinitas belajar membaca buku yang monoton berbulan-bulan.", stmt: "Aku sangat terbantu jika ada kawan kreatif yang mendadak menggebrak kamarku mengajak menjajal hobi baru menantang." },
  { e: "Ne", ch: "background", cat: "daily_basic", ctx: "Menatap langit malam yang mendung kelabu dari atas balkon atap rumah kosan.", stmt: "Imajinasiku otomatis merakit jalannya rasi bintang fiksi, kaitan cuaca, dan rencana ide tulisan fantasi tanpa perlu kuperintah." },

  { e: "Ni", ch: "producer", cat: "duka", ctx: "Kabar buruk mengenai rumah nenek di kampung tertimpa musibah kebakaran hebat melahap habis harta.", stmt: "Aku refleks tenang, menarik diri dari kekacauan histeris, memetakan rencana langkah keselamatan, dan memurnikan jiwa tabah." },
  { e: "Ni", ch: "threat", cat: "kegagalan", ctx: "Didesak menandatangani kontrak pinjaman dana bisnis darurat esok pagi tanpa simulasi risiko bunga.", stmt: "Otakku langsung pusing kaku risih tertekan cemas, menolak melangkah buta tanpa visi arah masa depan, dan tegas menghindar." },
  { e: "Ni", ch: "receiver", cat: "sekolah", ctx: "Ketakutan dan stres berat memikirkan kelayakan karirku ke depan pasca lulus dari jurusan kuliah sains.", stmt: "Petuah bijak dari profesor senior yang menjelaskan peta jalan tren masa depan dan kestabilan garis hidup sangat menenangkan." },
  { e: "Ni", ch: "background", cat: "daily_basic", ctx: "Melihat daun-daun kering berguguran tertiup angin sore di pelataran halaman masjid atau gereja adem.", stmt: "Kesadaran spiritual akan takdir, waktu, dan kefanaan hidup manusia langsung aktif mengalir tenang di lubuk hatiku." },

  { e: "Fe", ch: "producer", cat: "persahabatan", ctx: "Pertemuan reuni kawan sekolah mendadak sunyi senyap membosankan karena semua asyik dengan ponselnya.", stmt: "Wajah dan jiwaku refleks melempar banyolan kocak, tertawa gembira, dan menular ceria biar forum kembali ramai mencerah." },
  { e: "Fe", ch: "threat", cat: "duka", ctx: "Dipaksa bersikap ceria, memandu kuis heboh di depan ratusan klien kerja sesaat setelah kucing kesayanganku meninggal.", stmt: "Aku langsung merasa risih mual sesak pusing kaku tertekan, benci harus tersenyum badut menyembunyikan luka jiwa." },
  { e: "Fe", ch: "receiver", cat: "persahabatan", ctx: "Canggung dan kaku setengah mati saat baru masuk lingkaran pergaulan asing di warkop nongkrong.", stmt: "Aku sangat ditolong jika ada kawan periang supel yang langsung merangkulku, melempar gurauan, dan menyatukanku ramah." },
  { e: "Fe", ch: "background", cat: "daily_basic", ctx: "Melihat gelak tawa dan senyuman hangat balita yang sedang digendong ibunya di bus kota.", stmt: "Bawah sadar emosiku langsung memantulkan frekuensi riang, menarik bibirku tersenyum manis otomatis mencerahkan jiwa." },

  { e: "Fi", ch: "producer", cat: "persahabatan", ctx: "Rekan kos baru mulai melangkahi privasi kamarku, membuka lemari baju asri tanpa izin tertulisku.", stmt: "Aku refleks bersikap kaku dingin, menutup laci, dan menegaskan jarak batas wilayah tepercaya secara tegas dingin." },
  { e: "Fi", ch: "threat", cat: "persahabatan", ctx: "Kelompok berteman menuduh ketulusanku berteman selama ini palsu dan berbau pamrih finansial panggung.", stmt: "Aku merasa terkejut luar biasa cemas terluka, kaku membeku kaku kaku, dan cenderung mengurung diri memutuskan kontak." },
  { e: "Fi", ch: "receiver", cat: "duka", ctx: "Mengalami depresi perasaan, trauma akibat dikhianati secara licik oleh pacar dan kawan sekerja.", stmt: "Aku sangat melegakan perasaan jika ada sahabat karib peka yang merengkuh jiwaku, melindungi duka jiwa dan merahasiakannya." },
  { e: "Fi", ch: "background", cat: "daily_basic", ctx: "Mengamati mimik wajah dan getar suara pedagang keliling saat menawarkan dagangan buah jeruk harian.", stmt: "Pikiran harian otomatisku langsung mengukur kejujuran motifnya, menyaring kepalsuan, dan memetakan rasa hormat murni." }
];

export const PAIR_DISCRIMINATORS: Array<{
  id: string;
  a: SocionicsType;
  b: SocionicsType;
  context: string;
  statement: string;
}> = [
  { id: "tb_ile_sei", a: "ILE", b: "SEI", context: "Saat libur akhir pekan mumpung cuaca adem...", statement: "Aku jauh lebih dominan mencari stimulus ide baru atau diskusi konseptual daripada merawat kenyamanan fisik dan memasak opor ayam lezat." },
  { id: "tb_ese_lii", a: "ESE", b: "LII", context: "Berada di tengah reuni pertemanan akrab...", statement: "Aku lebih sibuk menyebarkan atmosfer tawa ekspresif sapaan hangat daripada asyik meresapi konsistensi logika dan struktur undang-undang baku." },
  { id: "tb_eie_lsi", a: "EIE", b: "LSI", context: "Rapat koordinasi divisi kerja di bawah tekanan tinggi...", statement: "Aku lebih mengandalkan pemahaman dramatis penularan emosi masa daripada rencana penegakan tata tertib dan standar operasional tertulis kaku." },
  { id: "tb_sle_iei", a: "SLE", b: "IEI", context: "Ketika terjadi sengketa kepengurusan asrama kosan...", statement: "Aku refleks maju memimpin, menekan lawan secara vokal tegas daripada menyendiri kontemplatif membaca arah nasib dan momentum jiwa." },
  { id: "tb_see_ili", a: "SEE", b: "ILI", context: "Mendapati musuh bisnis menyerang balik secara lancang...", statement: "Aku langsung pasang badan bertarung, menuntut keadilan fisik daripada bersikap dingin merenungi ke jangka panjang dan masa fana." },
  { id: "tb_lie_esi", a: "LIE", b: "ESI", context: "Ada tawaran bisnis bermargin tinggi tapi melanggar etika etis berteman...", statement: "Aku condong mementingkan perhitungan profit hasil kerja terukur daripada mengunci batas moral dan menolak tegas demi nilai luhur." },
  { id: "tb_iee_sli", a: "IEE", b: "SLI", context: "Menyusun rencana perjalanan liburan akhir pekan...", statement: "Aku berkobar mencari puluhan opsi tujuan unik tak terduga daripada mengunci kenyamanan fisik, adem rebahan, dan memijat punggung pegal." },
  { id: "tb_lse_eii", a: "LSE", b: "EII", context: "Menghadapi rekan kerja yang kinerjanya melorot drastis...", statement: "Aku tanpa tedeng aling-aling mendesak pencapaian rencana KPI dan target angka daripada meraba perasaannya dan tulus berempati empat mata." }
];

function sanitizeIndonesianText(str: string): string {
  if (!str) return str;
  return str
    .replace(/\bAnd\b/g, "Dan")
    .replace(/\band\b/g, "dan")
    .replace(/\bdraf\b/gi, "rencana")
    .replace(/\bbatin\b/gi, "jiwa")
    .replace(/\bautopilot\b/gi, "refleks otomatis")
    .replace(/\bresonansi\b/gi, "keselarasan");
}

function generateOptions(element: InformationElement, channel: MeasurementChannel, scale: ScaleType, statement: string): QuestionOption[] {
  const options: QuestionOption[] = [];
  
  const elementKeywords: Record<InformationElement, string> = {
    Ne: "kemungkinan baru dan alternatif cerdas",
    Ni: "prediksi waktu dan makna jangka panjang",
    Se: "tekanan nyata dan aksi pasang badan spontan",
    Si: "kenyamanan sensori dan keselarasan fisik tubuh",
    Te: "efisiensi kerja dan profitabilitas riil",
    Ti: "konsistensi regulasi dan audit silsilah logika",
    Fe: "penularan emosi hangat dan atmosfer kelompok",
    Fi: "batas kejujuran relasi dekat dan kepercayaan etis"
  };

  const channelDescriptions: Record<MeasurementChannel, { name: string; anchorTemplate: string[]; meaning: string; reaction: string }> = {
    producer: {
      name: "Respons refleks spontan",
      anchorTemplate: [
        "Aku sama sekali tidak refleks menjangkau aspek ini harian.",
        "Aku jarang menggunakannya secara spontan dan butuh pemicu eksternal.",
        "Sesekali muncul secara spontan tergantung ketajaman fokusku.",
        "Cukup spontan merespons situasi harian menggunakan insting ini.",
        "Aku secara otomatis bertindak dan menggunakan radar ini secara instan."
      ],
      meaning: "Menunjukkan berfungsinya kanal utama pemrosesan informasimu secara stabil.",
      reaction: "Kamu merespons situasi secara instan dan mantap sesuai kebutuhan."
    },
    flexible: {
      name: "Keluwesan taktis adaptif",
      anchorTemplate: [
        "Aku sangat kaku dan kesulitan melenturkan langkah di bidang ini.",
        "Aku kurang fleksibel dan cenderung lamban beradaptasi.",
        "Cukup luwes bertindak jika situasinya mendesak.",
        "Sangat luwes memutar otak mendesain taktik cadangan.",
        "Langkahku sangat adaptif, cerdik, dan taktis dalam situasi apa pun."
      ],
      meaning: "Menunjukkan fungsi kreatifmu yang serbaguna dan tidak kaku dalam memecahkan hambatan.",
      reaction: "Kamu beralih metode dengan mulus tanpa menguras energi mental."
    },
    mask: {
      name: "Tuntutan etika peran sosial",
      anchorTemplate: [
        "Aku malas berpura-pura demi menjaga sopan santun pergaulan harian.",
        "Aku jarang menampilkannya di depan publik agar tidak terlihat lelah.",
        "Terkadang kupaksakan demi memenuhi tanggung jawab minimal.",
        "Sering kutampilkan demi menjaga reputasi dan kenyamanan kolektif.",
        "Aku secara sadar memoles tindakan ini agar dinilai berkelas oleh lingkungan."
      ],
      meaning: "Menunjukkan kepedulianmu membawakan topeng peran sosial demi keselarasan lingkungan.",
      reaction: "Kamu tersenyum profesional dan berperilaku sesuai ekspektasi umum."
    },
    threat: {
      name: "Celah kerentanan yang mencemaskan",
      anchorTemplate: [
        "Situasi ini sama sekali tidak mengancam rasa percaya diri saya.",
        "Hanya merasa sedikit tidak nyaman namun cepat pulih.",
        "Cukup tertekan jika terus-terusan didesak mengambil andil.",
        "Sangat tertekan, membuat langkahku kaku dan kepala pusing.",
        "Aku langsung membeku, merasa diserang habis-habisan, dan harus lari menjauh."
      ],
      meaning: "Menunjukkan titik sensitif pertahanan psikologismu yang rentan goyah.",
      reaction: "Kamu kaku terdiam, menolak berargumen, dan mengurung diri defensif."
    },
    receiver: {
      name: "Kebutuhan pelepasan yang menenangkan",
      anchorTemplate: [
        "Bantuan eksternal dalam hal ini tidak mengurangi beban kepalaku.",
        "Sedikit membantu asalkan tidak menggurui atau menceramahi.",
        "Cukup menenangkan jiwa jika ada kawan yang berinisiatif menolong.",
        "Sangat membantu membersihkan kebingungan yang kupendam.",
        "Rasanya kepalaku langsung adem dan damai mendalam, seakan seluruh beban luruh."
      ],
      meaning: "Menunjukkan rasa syukurmu atas kehadiran pelindung eksternal yang menutupi kelemahanmu.",
      reaction: "Kamu mengembuskan napas lega, tersenyum hangat, dan merasa sangat aman."
    },
    aspiration: {
      name: "Ambisi pertumbuhan dan apresiasi diri",
      anchorTemplate: [
        "Aku tidak peduli sama sekali apakah orang menyadari usahaku di sini.",
        "Biasa saja, tidak mengincar pujian atau sanjungan orang lain.",
        "Menyenangkan jika usaha kerasku sesekali disadari kelompok.",
        "Sangat berarti bagi perkembangan mentalku jika diakui andal.",
        "Aku sangat rindu dihargai; pujian tulus di bidang ini membuatku merasa bernilai."
      ],
      meaning: "Menunjukkan titik impian pertumbuhan pribadimu yang membutuhkan validasi positif.",
      reaction: "Dadamu membusung bangga, bicaramu bersemangat, dan kepercayaan dirimu berlipat ganda."
    },
    dismissive: {
      name: "Radar hebat yang disisihkan",
      anchorTemplate: [
        "Aku tidak memiliki keahlian di bidang ini untuk diabaikan.",
        "Jarang mendeteksinya karena fokusku ada pada urusan lain.",
        "Sesekali mendeteksi polanya namun tidak kupikirkan serius.",
        "Bisa mendeteksinya dengan mudah namun malas membuang waktu mengurusnya.",
        "Aku gampang sekali menemukannya namun sengaja memilih diam acuh tak acuh."
      ],
      meaning: "Keahlian bawaan yang sangat matang namun sengaja kamu sisihkan demi tujuan lain.",
      reaction: "Kamu mendeteksi celah polanya, tersenyum tipis, lalu mengabaikannya."
    },
    background: {
      name: "Frekuensi latar belakang otomatis",
      anchorTemplate: [
        "Sensor belakang kepalaku tidak peka terhadap pola ini secara otomatis.",
        "Jarang menyadari polanya berjalan sendiri tanpa kupikirkan aktif.",
        "Kadang aktif sendiri mendeteksi perubahan lingkungan.",
        "Sering merekam getaran polanya secara halus di belakang layar.",
        "Radar otomatis bawah sadarku terus-menerus memindai pola ini tanpa henti."
      ],
      meaning: "Menunjukkan berjalannya sensor bawah sadarmu sebagai penyaring data harian.",
      reaction: "Pikiranmu memproses detail lingkungan dengan cepat tanpa memicu lelah fisik."
    }
  };

  const chData = channelDescriptions[channel];

  for (let val = 1; val <= 5; val++) {
    let label = SCALE_LABELS[scale]?.[val - 1] || "Netral";
    let anchor = chData.anchorTemplate[val - 1] || "";
    
    // Inject the specific element keywords dynamically into the general templates for incredibly high fidelity!
    anchor = anchor.replace("aspek ini", elementKeywords[element])
                   .replace("bidang ini", elementKeywords[element])
                   .replace("pola ini", elementKeywords[element])
                   .replace("polanya", `pola ${elementKeywords[element]}`)
                   .replace("tindakan ini", `tindakan ${elementKeywords[element]}`)
                   .replace("radar ini", `radar ${elementKeywords[element]}`)
                   .replace("radar otomatis bawah sadarku", `radar otomatis bawah sadar ${elementKeywords[element]}`)
                   .replace("insting ini", `insting ${elementKeywords[element]}`);

    options.push({
      value: val as 1 | 2 | 3 | 4 | 5,
      label,
      anchor,
      meaning: sanitizeIndonesianText(`Menilai kesiapan ${elementKeywords[element]} pada level ${val}/5: ` + chData.meaning),
      reaction: sanitizeIndonesianText(chData.reaction)
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
      context: sanitizeIndonesianText(seed.ctx),
      scale,
      statement: sanitizeIndonesianText(seed.stmt),
      sourceSituation: `Adegan kehidupan real sehari-hari`,
      sourceResponse: sanitizeIndonesianText(seed.stmt),
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
      context: sanitizeIndonesianText(seed.ctx),
      scale,
      statement: sanitizeIndonesianText(seed.stmt),
      sourceSituation: `Uji komparasi silang batin`,
      sourceResponse: sanitizeIndonesianText(seed.stmt),
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
      context: sanitizeIndonesianText(item.context),
      scale: "comparison",
      statement: sanitizeIndonesianText(item.statement),
      sourceSituation: `Tie break ${item.a} vs ${item.b}`,
      sourceResponse: sanitizeIndonesianText(item.statement),
      responseFocus: `pembeda silang ${item.a} vs ${item.b}`,
      options: [
        { value: 1, label: `Sangat dekat Sisi B yaitu ${item.b}`, meaning: `Kencenderungan ke ${item.b}`, reaction: `Dominasi jiwa ${item.b}` },
        { value: 2, label: `Agak dekat Sisi B yaitu ${item.b}`, meaning: `Kencenderungan ke ${item.b} ringan`, reaction: `Dominasi jiwa ${item.b} ringan` },
        { value: 3, label: `Setara di Tengah`, meaning: `Netral/Seimbang`, reaction: `Seimbang` },
        { value: 4, label: `Agak dekat Sisi A yaitu ${item.a}`, meaning: `Kencenderungan ke ${item.a} ringan`, reaction: `Dominasi jiwa ${item.a} ringan` },
        { value: 5, label: `Sangat dekat Sisi A yaitu ${item.a}`, meaning: `Kencenderungan ke ${item.a}`, reaction: `Dominasi jiwa ${item.a}` }
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
