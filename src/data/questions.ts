import type { SocionicsQuestion, QuestionOption, InformationElement, MeasurementChannel, ScaleType, QuestionKind, SocionicsType, ModelASlot } from "../types";
import { TIM_MODELS, SLOT_TO_CHANNEL } from "./modelA";

export const ELEMENTS: InformationElement[] = ["Ne", "Ni", "Se", "Si", "Te", "Ti", "Fe", "Fi"];
export const CHANNELS: MeasurementChannel[] = ["producer", "flexible", "mask", "threat", "receiver", "aspiration", "dismissive", "background"];

export const ELEMENT_KEYWORDS: Record<InformationElement, string> = {
  Ne: "menjelajah kemungkinan celah, potensi orisinal kelompok, dan alternatif kreatif tak terduga",
  Ni: "membaca arah waktu harian, momentum batin yang matang, visi panjang, dan ramalan akhir situasi",
  Se: "merasakan tekanan nyata tindakan, batas ruang fisik, kekuasaan taktis, dan keberanian bertindak tegas",
  Si: "menjaga kenyamanan tubuh fisik, detail rasa indrawi sekitar, stabilitas batin, dan keasrian suasana santai",
  Te: "mengukur efisiensi praktis, bukti kegunaan kerja terukur, efektivitas waktu biaya, dan fakta nyata",
  Ti: "membangun struktur logis aturan, konsistensi kategori sistem, definisi kata, dan kerangka prinsip rapi",
  Fe: "membaca atmosfer semangat kelompok, aliran ekspresi emosional, gelombang sosial, dan keceriaan suasana",
  Fi: "merasakan kedekatan personal intim, jarak aman kepercayaan antarmanusia, rasa tulus, dan ikatan moral"
};

export const CHANNEL_KEYWORDS: Record<MeasurementChannel, string> = {
  producer: "produksi spontan batin yang muncul otomatis tanpa disadari sejak awalan",
  flexible: "alat sadar berkendara sosial yang luwes disesuaikan dengan konteks harian",
  mask: "topeng sosial yang diusahakan rapi agar mendapat pengakuan kapasitas diri",
  threat: "alarm batin rawan yang mudah memicu rasa tertekan, kaku, dan beku jika didesak",
  receiver: "kebutuhan bantuan dari luar yang terasa mencerahkan batin secara melegakan",
  aspiration: "dorongan batin yang haus pengakuan, pujian, dan perlahan ingin dilatih",
  dismissive: "kompetensi fungsional yang bisa kamu gunakan sekilas lalu diletakkan kembali",
  background: "kebiasaan senyap di latar belakang pikiran tanpa memerlukan performa drama"
};

const ELEMENT_PHRASES: Record<string, string> = {
  Ne: "kepalamu sangat cepat membuka cabang kemungkinan baru and celah opsi ketika jalan utama ditutup",
  Ni: "kepalamu sangat peka membaca arah waktu, momentum penting, and ke mana akhir dari rentetan kejadian ini",
  Se: "perhatianmu langsung menangkap batas kekuasaan konkret, jarak posisi fisik, and siapa yang menguasai ruang secara tegas",
  Si: "pikiranmu sangat peka terhadap koordinasi kenyamanan tubuh, detail rasa indrawi, and apakah suasana terasa pas atau mengganggu fisik",
  Te: "kepalamu otomatis mengukur kegunaan langkah praktis, efisiensi waktu-biaya, and bukti nyata yang terukur di depan mata",
  Ti: "otakmu langsung membagi bagian, merapikan hubungan logis aturan, and meletakkan semua hal ke dalam kotak kategori yang konsisten",
  Fe: "pikiranmu refleks menangkap suhu suasana emosi kelompok, gelombang ekspresi sosial sekitar, and tingkat keceriaan ruangan",
  Fi: "kepalamu peka membaca ketulusan niat personal, jarak aman kepercayaan antarmanusia, and nilai ikatan moral rahasia"
};

const CHANNEL_PHRASES: Record<string, string> = {
  producer: "Saat tombol batin ini tertekan, kamu otomatis langsung bergerak mengubah keadaan tanpa menunggu instruksi siapa pun.",
  flexible: "Sistem pikiranmu memakai kemampuan ini sebagai navigasi sosial yang luwes, bisa ditambah atau dikurangi tergantung kebutuhan.",
  mask: "Kamu sengaja menampilkan kepiawaian di area ini sebagai topeng pelindung sosial agar dinilai andal and berkepribadian patut.",
  threat: "Titik ini adalah tombol darurat yang paling sensitif. Jika didesak di area ini, batinmu merasa terancam and posturmu mendadak tegang.",
  receiver: "Kamu merasa sangat bersyukur and lego ketika ada orang lain yang secara halus mengambil alih and merapikan bagian ini untukmu.",
  aspiration: "Area ini berkaitan erat dengan rasa ingin berkembang and haus pengakuan. Pujian tulus di sini membuat semangatmu membara kembali.",
  dismissive: "Kamu menguasai bagian ini dengan cukup baik, tapi malas menjadikannya fokus obrolan karena tidak begitu penting bagi tujuan hidupmu.",
  background: "Kemampuan ini bekerja senyap di latar belakang pikiranmu bagaikan autopilot pasif, sering baru kamu sadari setelah semuanya selesai."
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
  automaticity: ["Sangat Tidak Spontan", "Harus Kupikirkan Lama", "Kadang Spontan", "Cukup Spontan", "Sangat Spontan & Refleks"],
  comfort: ["Sangat Menguras Tenaga", "Cukup Melelahkan", "Netral/Proporsional", "Cukup Nyaman", "Sangat Nyaman & Alami"],
  frequency: ["Tidak Pernah", "Jarang Sekali", "Sesekali Saja", "Cukup Sering", "Hampir Selalu"],
  threat: ["Sama Sekali Tidak Terancam", "Sedikit Risih", "Lumayan Tertekan", "Sangat Kaku & Tertekan", "Membuatku Beku, Defensif & Menghindar"],
  relief: ["Sama Sekali Tidak Membantu", "Sedikit Mengurangi Beban", "Cukup Menenangkan", "Sangat Membantu", "Sangat Melegakan & Menyembuhkan"],
  recognition: ["Tidak Ada Keinginan", "Biasa Saja", "Menyenangkan Jika Dipuji", "Sangat Berarti Bagi Batin", "Sangat Menyentuh Kebutuhan Terdalamku"],
  comparison: ["Jauh lebih dekat Sisi B", "Agak lebih dekat Sisi B", "Seimbang di Tengah", "Agak lebih dekat Sisi A", "Jauh lebih dekat Sisi A"]
};

// HAND-CRAFTED REAL-LIFE SCENARIOS AND STATEMENTS (Leaving robotic automatic generators behind!)
export const HANDCRAFTED_SCENARIOS: Record<InformationElement, Record<MeasurementChannel, string[]>> = {
  Ne: {
    producer: [
      "Kalau instruksi tugas kerjaan dari atasan atau dosen masih tidak jelas, aku biasanya refleks mulai mencari celah and mencoret-coret draf alternatif baru di draf coretan sebelum memilih satu cara pasti.",
      "Saat jalan utama proyek kelompok kami mendadak mampet and buntu, otakku secara otomatis langsung mencabangkan berbagai kemungkinan jalan keluar darurat lainnya.",
      "Saat rencana liburan mendadak batal karena masalah teknis, aku refleks menjadi orang pertama yang merakit tiga draf alternatif rute seru buat kawan-kawan.",
      "Saat ada hambatan di sistem komputer kerjaan, tanganku spontan mengotak-atik menu pencarian untuk menemukan celah rute jalan pintas tak terduga."
    ],
    flexible: [
      "Aku bisa dengan luwes memancing forum rapat dengan ide-ide kreatif and opsi tak biasa, tetapi aku mematikan mode itu begitu kembali fokus menyelesaikan draf data.",
      "Dalam diskusi kerja, aku menyodorkan proyeksi alternatif fungsional hanya sebagai alat berkendara sosial, and gampang menurunkan ekspektasi itu pas situasi berubah.",
      "Aku memakai berbagai opsi kreatif buat bernegosiasi secara rileks, tetapi begitu kesepakatan tercapai, aku langsung kembali ke rutinitas biasa.",
      "Aku gampang membuang draf ide yang baru saja kubangun demi mencoba spekulasi ide lain yang disarankan rekan diskusi rapat harian."
    ],
    mask: [
      "Di lingkungan pergaulan atau kantor baru, aku sengaja menampilkan diriku sebagai orang yang penuh visi masa depan and kaya alternatif solusi kreatif biar terlihat andal.",
      "Aku mengusahakan draf presentasiku di depan panitia selalu terlihat inovatif and kaya wawasan orisinal agar kapasitas intelektualku diakui mereka.",
      "Saat melamar pekerjaan atau proyek, aku sengaja menonjolkan kemampuan berpikir luar kotak and keberanian mengeksplorasi celah-celah industri baru.",
      "Di media sosial atau profil profesional, aku memamerkan ketertarikanku pada berbagai topik unik and hobi alternatif yang antigarusutama."
    ],
    threat: [
      "Aku mendadak panik, merasa sesak, and stres tegang kalau disodori draf SOP mati satu arah yang tidak boleh kubantah, kutawar, atau kuutak-atik sama sekali.",
      "Aku merasa sangat terkejut and defensif ketika orang terdekat memaksaku segera mengambil satu pilihan karir tetap and melarangku mencari celah lainnya.",
      "Menghadapi masa depan yang kaku tanpa ada ruang cadangan untuk berubah arah membuat batin and jalanku terasa beku and buntu.",
      "Aku gampang menutup diri and diam seribu bahasa kalau didesak merumuskan 'satu cara tunggal mutlak' saat draf rencana utama tim berantakan."
    ],
    receiver: [
      "Batin rasanya lega banget kalau ada partner diskusi yang bersedia merapikan semua ide abstrakku and dengan halus menyodorkan satu langkah terbaik buat kujalani.",
      "Aku merasa sangat tertolong jika ada rekan kerja tepercaya yang menyortir semua celah spekulasi berisiko and menjagaku tetap menginjak lantai realitas.",
      "Aku senang jika didekatkan dengan orang yang praktis, yang dengan halus memilah tumpukan draf ide di kepalaku and mengubahnya jadi draf aksi berurutan.",
      "Rasanya batin langsung damai and plong ketika kecemasan liarku tentang alternatif masa depan ditenangkan oleh penjelasan yang stabil and membumi."
    ],
    aspiration: [
      "Aku merasa sangat terharu, bangga, and bersemangat berkembang kalau ada orang yang memuji bahwa ide-ide spontan tak biasaku ternyata jenius and bernilai tinggi.",
      "Aku haus akan pujian yang membenarkan bahwa wawasan futuristik and perkiraan celah solusiku sudah menyelamatkan jalannya tim kerja harian kami.",
      "Ada kebanggaan tersembunyi di dalam dadaku ketika rekan kelompok meminta pendapatku tentang potensi terpendam dari suatu draf proyek unik.",
      "Aku diam-diam sengaja berlatih membaca tren industri modern and senang sekali jika rekan kerja memuji kejelianku melihat orisinalitas peluang."
    ],
    dismissive: [
      "Melihat celah and potensi di suatu bisnis baru itu gampang sekali bagiku, tapi aku malas mengulas detailnya lama-lama, mending kuserahkan ke rekan lain saja.",
      "Aku bisa melihat arah perkembangan draf proyek itu dengan cepat, tapi setelah kupikirkan sekilas, aku memilih langsung meletakkan fokus ke hal lain.",
      "Aku tahu ada alternatif rute jalan pintas yang lebih gampang, tapi aku malas mendebatkannya and memilih diam mengikuti draf rute tim yang panjang.",
      "Aku sering membiarkan orisinalitas pemikiranku ditaruh di laci lemari kerja daripada harus repot-repot memperjuangkannya di hadapan manajer kaku."
    ],
    background: [
      "Tanpa kusadari, tanganku sering coret-coret draf coretan alternatif ormind map di kertas binder harian saat sedang mendengar dosen atau bos berceramah.",
      "Otakku terus menyortir celah and kemungkinan lain di latar belakang layar pikiran harian, bahkan saat aku sedang asyik memasak atau mencuci piring.",
      "Aku sering refleks menemukan jawaban jalan pintas di luar draf utama pas sedang mengobrol santai membicarakan topik santai yang tidak ada hubungannya.",
      "Secara senyap, aku selalu menyiapkan draf rencana cadangan B/C/D di kepalaku untuk berjaga-jaga tanpa merasa perlu memperlihatkannya ke publik."
    ]
  },
  Ni: {
    producer: [
      "Ketika situasi rapat mendadak kacau, aku refleks menahan diri, memejamkan mata sekilas, and membaca arah perubahan momentum sebelum melangkah bertindak.",
      "Secara naluri, aku langsung merasakan perubahan tempo and tahu kapan harus mempercepat atau memperlambat gerak kerja tim sebelum masalahnya keburu meledak.",
      "Saat semua orang panik menuntut aksi cepat, batin and badanku otomatis diam tenang karena merasakan bahwa momentum perbaikan situasi belum matang.",
      "Dalam perdebatan di grup bising, aku refleks memilh diam and mengamati alur chat, karena tahu persis ke mana ujung drama percakapan ini akan bermuara."
    ],
    flexible: [
      "Aku memakai perkiraan visi and ramalan waktuku sebagai navigator luwes untuk menyusun agenda jangka panjang, and gampang menggesernya sesuai iklim harian.",
      "Aku bisa merencanakan lini masa proyek dengan sangat visioner, tapi aku sama sekali tidak merasa kaku and bisa rileks mengubah jadwalnya jika tim lelah.",
      "Aku suka membaca tren pergeseran sosial and memakainya untuk mengarahkan diskusi kawan-kawan, lalu kembali fokus menikmati rutinitas saat ini.",
      "Aku menggunakan pembacaan tanda zaman untuk membantu urusan bisnis, tetapi aku tidak membiarkan visi futuristik mengganggu kesenangan kerjaku hari ini."
    ],
    mask: [
      "Aku sengaja memoles diriku di depan atasan sebagai peramal tren berwawasan luas, bijaksana, and tahu persis arah perkembangan lima tahun ke depan.",
      "Di lingkungan baru, aku berusaha tampil dengan tatapan mata and bahasa tenang bagai filosof yang mengerti rahasia lini masa and misteri makna hidup.",
      "Saat presentasi draf proyek, aku mengusahakan agar argumen drafku selalu dikelilingi oleh analisis tren and pergeseran waktu agar terlihat prestisius.",
      "Aku suka membagikan kutipan filosofis, ramalan ekonomi global, and opini tentang arah sejarah di media sosial agar dinilai memiliki kedalaman batin."
    ],
    threat: [
      "Aku merasa sangat terancam and mendadak tegang kaku jika dipaksa bekerja dalam tempo cepat yang serampangan tanpa diberi waktu untuk merenung tenang.",
      "Aku merasa cemas and pusing setengah mati kalau lingkungan menuntutku melakukan eksekusi fisik dadakan tanpa ada kejelasan arah jangka panjangnya.",
      "Mengambil keputusan bisnis di bawah desakan waktu yang kacau and kabur membuat batin and kepalaku terasa nge-blank and lelah tertekan.",
      "Aku langsung malas and mundur jika diajak mengobrol oleh orang-orang yang terlalu sibuk mengejar target harian tanpa memikirkan makna and arah besarnya."
    ],
    receiver: [
      "Batin rasanya melegakan and adem ketika partner kerjaku yang gesit langsung memegang kendali fisik, membersihkan kekacauan taktis, and membiarkanku fokus memikirkan arah.",
      "Aku bersyukur jika ada sahabat berani yang pasang badan mengamankan batasan teritorialku saat aku sedang hanyut dalam lamunan and analisis maknaku.",
      "Rasanya plong jika ada orang praktis yang menepuk pundakku and dengan ramah berkata: 'Serahkan urusan aksi and negosiasi ini padaku, kamu yang gambar alurnya'.",
      "Aku merasa sangat terbantu ketika partnerku yang kuat langsung mengatasi gangguan mendadak di lapangan, sehingga fokus batin and konsentrasiku tidak rusak."
    ],
    aspiration: [
      "Pujian paling menyentuh bagiku adalah saat orang lain mengakui bahwa proyeksi ramalanku and pembacaan arahku tentang krisis terbukti seratus persen tepat.",
      "Aku diam-diam melatih kepekaan visi jangka panjangku and merasa sangat dihargai jika rekan kerja memuji draf lini masa buatanku sangat matang and presisi.",
      "Ada rasa bangga yang hangat ketika kawan-kawan di kelompok menyebutku sebagai pembaca tanda and momentum yang bijak di saat masa-masa sulit.",
      "Aku sangat senang jika usulanku tentang penundaan agenda kerja dipuji sebagai taktik penyelamatan yang menyelamatkan keuangan perusahaan harian."
    ],
    dismissive: [
      "Aku tahu persis ke mana arah akhir dari proyek kelompok ini akan mengalir, tapi aku malas menceritakannya and memilih ikut bergerak diam bersama tim saja.",
      "Membaca tren pergeseran minat pasar itu mudah buatku, tapi aku menganggap obrolan teori masa depan itu membosankan and mending langsung kerja konkret.",
      "Aku sering menyembunyikan firasat buruk and ramalan kegagalan di dalam batin daripada harus sibuk berdebat and dituduh pesimistis oleh rekan kelompok.",
      "Aku bisa meraba makna terdalam di balik ucapan kawan, tapi aku menganggapnya sekadar angin lalu and memilih mengalikan perhatian ke detail fisik."
    ],
    background: [
      "Secara senyap, kepalaku selalu memutar simulasi masa depan and alur perkembangan di latar belakang pikiran, pas draf tanganku sedang mengetik file data biasa.",
      "Aku sering refleks memejamkan mata and tahu kapan bel rumah akan berbunyi atau kapan pesan chat penting akan masuk sebelum layarnya menyala.",
      "Di sela-sela obrolan ramai, batin autopilot-ku terus mengaitkan tanda-tanda kecil menjadi sebuah benang merah arah sejarah tanpa perlu kuucapkan.",
      "Firasat and proyeksi lini masa harian beroperasi otomatis di otakkku bagai radar navigasi pelindung, menjagaku tetap waspada menghadapi krisis."
    ]
  },
  Se: {
    producer: [
      "Saat mendapati batas wilayah kerjaku di tim diletakkan sembarangan, tangan and bahuku refleks menegak and langsung merapikan batas kekuasaan konkret secara tegas.",
      "Kalau ada orang yang mencuri start and meremehkan hak tim kami, aku tanpa ragu langsung maju and menantang tatapan matanya untuk mengambil kendali fisik.",
      "Ketika situasi kelompok berantakan and loyo, tubuh and suaraku otomatis mengencang and langsung membagi perintah kerja aksi lapangan tanpa basa-basi.",
      "Aku refleks bersandar tegak, menatap tajam lawan bicara yang mencoba melakukan intimidasi mental, and menuntut aksi nyata detik ini juga."
    ],
    flexible: [
      "Aku bisa bersikap sangat tegas and menuntut disiplin keras dari anggota kelompok, tetapi aku bisa langsung mencair and rileks jika situasi lapangan melunak.",
      "Aku menggunakan ketegasan and tekanan fisik hanya sebagai navigasi taktis di lapangan proyek, and gampang menurunkan tensi agar rekan kerja tidak stres.",
      "Aku tahu kapan harus menekan and mengerahkan tenaga maksimal untuk memenangkan tender, and kapan harus santai membiarkan kompetitor mengambil ruang kaku.",
      "Aku luwes mengatur ritme tekanan kerja harian, bisa menjadi bos yang menuntut performa tinggi besok pagi buta and menjadi teman minum kopi yang asyik malam ini."
    ],
    mask: [
      "Di lingkungan baru, aku sengaja memakai pakaian yang rapi, berwibawa, and gestur kokoh yang dominan agar terlihat sebagai pemimpin yang kuat and disegani.",
      "Aku mengusahakan pembawaan diriku selalu terlihat tegap, bergerak penuh percaya diri, and tidak ragu melakukan jabat tangan mantap agar dihormati tim.",
      "Saat rapat dengan departemen lain, aku sengaja menonjolkan pencapaian fisik, aset konkret, and kekuasaan timku biar posisi tawar kami aman dari intervensi.",
      "Aku memoles profilku agar terlihat tangguh, menyukai tantangan fisik yang ekstrem, and sukses melakukan eksekusi proyek-proyek bernilai masif."
    ],
    threat: [
      "Aku langsung merasa risih, tertekan, and mendadak mundur tegang jika ada orang yang menggunakan kekerasan fisik verbal atau berteriak kasar di dekat telingaku.",
      "Aku merasa sangat cemas and beku ketika berada di tengah kerumunan bising yang saling dorong sabet and melakukan persaingan teritorial yang agresif.",
      "Dipaksa melakukan konfrontasi fisik langsung atau bersikap konfrontatif di depan umum membuat batin and detak jantungku berdenyut terlalu kencang.",
      "Aku gampang menutup diri and mendadak lemas tak bertenaga jika dituduh bersikap pengecut atau tidak berani bersaing memenangkan posisi penting tim."
    ],
    receiver: [
      "Batin rasanya lega and plong jika ada partner kerja yang berani pasang badan menghadapi konfrontasi luar and membersihkan gangguan premanisme di lapangan.",
      "Aku bersyukur saat didekatkan dengan orang tangguh and vokal yang dengan halus membagi peran, menyusun proteksi fisik, and membiarkanku bekerja di area santai.",
      "Rasanya sangat menenangkan jika partner kelompokku langsung bersuara tegas and menolak intervensi luar yang mencoba mengacaukan ritme damai kami.",
      "Aku merasa lego ketika ada asisten kuat yang melindungi wilayah and waktu istirahatku dari serbuan orang-orang luar yang menuntut pertemuan cepat."
    ],
    aspiration: [
      "Aku merasa sangat dihargai, bangga, and tersentuh ketika orang lain memuji ketahanan fisikku, keberanianku pasang badan, and tekad bajaku menyelesaikan proyek.",
      "Ada kepuasan batin yang mendalam pas kawan-kawan memuji kelincahanku mengambil keputusan di situasi darurat and kesigapanku mengamankan aset penting.",
      "Aku diam-diam melatih disiplin olahraga and merasa bangga jika postur and wibawa lapanganku dipuji gagah and menginspirasi ketegasan tim.",
      "Aku sangat senang jika didelegasikan memimpin barisan terdepan and dipuji sebagai eksekutor tangguh yang menyelamatkan kehormatan organisasi."
    ],
    dismissive: [
      "Aku bisa saja mengamankan batas teritorial and merebut kendali proyek ini dengan mudah, tapi bagiku itu menguras energi and mending mengalah demi damai.",
      "Aku tahu aku punya kekuatan fisik untuk memenangkan perdebatan sengit ini, tapi aku memilih diam and membiarkan orang lain mengoceh merebut panggung.",
      "Membagi-bagi perintah and menuntut kepatuhan kaku dari staf itu gampang bagiku, but itu melelahkan batin, aku mending santai and membebaskan mereka saja.",
      "Aku sering membiarkan hak-hak fisikku digeser sedikit oleh rekan departemen lain daripada harus repot memicu pertengkaran and konfrontasi panjang."
    ],
    background: [
      "Secara senyap, tubuhku selalu waspada and refleks menangkap benda jatuh atau menghindari tabrakan di jalan sebelum kepalaku sempat berpikir sadar.",
      "Di latar belakang pikiran harian, autopilot-ku terus mendeteksi pergeseran posisi and postur orang di sekitar, menjaga agar jarak asriku tetap aman.",
      "Aku refleks mempercepat langkah and menegakkan bahu saat melewati gang sepi di malam hari, radar perlindungan fisikku langsung aktif otomatis.",
      "Tangan and kakiku bergerak otomatis menyingkirkan penghalang jalan, merapikan letak kursi, and menutup pintu rapat-rapat tanpa menuntut instruksi."
    ]
  },
  Si: {
    producer: [
      "Mendapati posisi dudukku pegal atau ruangan terasa mampet sumpek, tanganku refleks langsung mematuk-matuk mengganti bantal, membuka jendela harian.",
      "Aku tanpa sadar langsung bangkit, meredupkan lampu yang menyengat mata, merapikan sedikit bantal punggung, and menyeduh teh hangat agar badan rileks.",
      "Saat kepalaku pusing and punggungku tegang lembur, batin and sensor tubuhku otomatis menyuruhku mematikan laptop and merebahkan diri di sofa empuk.",
      "Aku refleks mengusap tengkuk leher, memutar tubuh mencari sudut rebah yang pas, and langsung menjauhkan benda tajam atau bising dari dekat jangkauanku."
    ],
    flexible: [
      "Aku sangat peka and luwes menata kenyamanan fisik and detail rasa hidangan pas pesta kelompok, and bisa cepat menyesuaikan jika ada bahan yang kurang.",
      "Aku menggunakan kepekaan rasa and suhu tubuh harian sebagai navigator sosial untuk mencairkan ketegangan, and gampang rileks pas ritme kerja tim melambat.",
      "Aku tahu kapan harus memanjakan tubuh dengan spa and makanan mewah, and tahu kapan harus tangguh bertahan di tengah dingin and sumpeknya proyek lapangan.",
      "Aku luwes mengatur kenyamanan ruang kerja, bisa sangat estetis and rapi di pagi hari, and santai membiarkan buku berserakan pas malam pengerjaan tugas."
    ],
    mask: [
      "Di depan klien, aku sengaja menampilkan diriku sebagai orang yang tenang, bersih, and memiliki selera estetika and gaya hidup sehat yang sangat berkelas.",
      "Aku mengusahakan draf ruangan kerjaku and penataan mejaku selalu terlihat estetis, rapi, and wangi agar mendapat pengakuan sebagai profesional berbudaya.",
      "Saat mengundang partner kerja, aku sengaja menyajikan hidangan yang lezat, cangkir cantik, and sofa nyaman agar iklim negosiasi kami terasa ramah.",
      "Aku suka membagikan foto estetika kamar, resep masakan rumahan, and tips relaksasi fisik di media sosial agar dinilai memiliki harmoni kehidupan."
    ],
    threat: [
      "Aku langsung merasa pening, tertekan, and kehabisan tenaga jika dipaksa tinggal atau lembur berhari-hari di ruangan yang kotor, bising, and pengap udara.",
      "Aku merasa cemas, risih, and lelah tegang luar biasa jika mendapati tubuhku sakit and tidak ada obat atau kasur layak yang bisa merawatku hangat.",
      "Tuntutan untuk terus bergerak dinamis di tengah lapar and lelah fisik membuat batin and kepalaku terasa kaku, beku, and gampang tersinggung hebat.",
      "Aku gampang menutup diri and mendadak mogok kerja kalau dipaksa mengonsumsi makanan hambar yang bau atau memakai pakaian yang menyiksa kulit."
    ],
    receiver: [
      "Batin rasanya lego, tenang, and plong kalau ada kawan peka yang menyodorkan secangkir kopi hangat and bantal empuk pas aku sedang pusing lembur data.",
      "Aku merasa sangat tersentuh and bersyukur jika partner kerja mengurus detail makan siangku and memastikan asupan giziku aman tanpa kuingatkan.",
      "Rasanya batin langsung damai ketika didekatkan dengan orang berbudaya praktis yang dengan halus merapikan kekacauan fisik and keindahan kamar tidurku.",
      "Aku senang jika didekatkan dengan orang yang dengan senang hati menyediakan ruang istirahat yang asri and menjaga ritme tidurku tetap stabil and terjaga."
    ],
    aspiration: [
      "Pujian paling berharga bagiku adalah saat orang lain memuji selera estetikaku dalam menata kenyamanan and kehangatan suasana ruangan kantor asri harian.",
      "Aku haus akan apresiasi yang membenarkan bahwa draf tata letak and pilihan warna dekorasiku membuat batin and mata mereka merasa damai and tenang.",
      "Ada kebanggaan tersembunyi ketika rekan kerja menyebutku sebagai ahli dalam urusan kenyamanan fisik, detail rasa makanan, and harmoni suasana santai.",
      "Aku sangat senang jika usahaku merawat kesehatan and kenyamanan kawan kelompok dipuji sebagai penyelamat batin and energi kebersamaan tim."
    ],
    dismissive: [
      "Aku bisa merapikan letak perabot and detail hiasan meja ini agar kelihatan estetis and nyaman demi kenyamanan tim, tapi bagiku itu tidak usahlah dibesarkan.",
      "Aku tahu ada noda di karpet and letak lukisan ini miring, tapi batin and fokus utamaku sedang memikirkan arah bisnis, jadi kubiarkan saja dulu.",
      "Mempersiapkan hidangan mewah and teh mahal itu mudah bagiku, but aku menganggap kepraktisan harian jauh lebih penting and memilih makan mi instan harian.",
      "Aku sering membiarkan kasurku tidak terlipat rapi and kamar agak berantakan daripada harus menghabiskan waktu emas menulis draf di komputer."
    ],
    background: [
      "Secara senyap, autopilot tubuhku terus menyortir and membuang sampah, membasuh cangkir kotor, and meluruskan letak keset tanpa perlu kuperintahkan sadar.",
      "Di latar belakang pikiran harian, tangan and indra sensorikku otomatis mengukur suhu and kelembapan ruangan, mendinginkan batin tanpa disorot lampu drama.",
      "Aku refleks menggeser letak benda tajam and membetulkan posisi duduk kawan setim saat kami sedang hanyut membicarakan target bisnis masa depan.",
      "Detail aroma, suhu, and tekstur di sekitar terekam otomatis di memori autopilot-ku bagai kamera tersembunyi, menjaga kesegaran and daya tahan batin."
    ]
  },
  Te: {
    producer: [
      "Mendapati draf data rapat berantakan and penuh asumsi kabur, tanganku refleks langsung membuka lembar excel untuk menghitung biaya, waktu, and efisiensi nyata.",
      "Aku tanpa sadar langsung meminta bukti konkret, menyodorkan rincian angka biaya, and memangkas semua rencana yang cuma bagus di awang-awang teori.",
      "Secara naluri, aku langsung menggeser posisi negosiasi and memprioritaskan langkah praktis yang terbukti bekerja menghasilkan profit nyata dalam waktu singkat.",
      "Saat ada hambatan proses produksi kerjaan tim, aku refleks mengetik kalkulator handphone, membandingkan efisiensi angka, and memotong alur yang sia-sia."
    ],
    flexible: [
      "Aku memakai penghitungan efektivitas and analisis data logis hanya sebagai navigator luwes untuk menyusun draf anggaran, and rileks mengubahnya pas tim tim jenuh.",
      "Aku bisa dengan luwes memperdebatkan angka and memangkas budget pengeluaran, tetapi aku gampang melembutkan sikap demi menjaga harmoni pertemanan.",
      "Aku tahu kapan harus menuntut hasil konkret and laporan biaya super rinci, and tahu kapan harus santai membiarkan kawan berimajinasi melontarkan ide liar.",
      "Aku luwes mengatur target profit harian, bisa menjadi manajer proyek yang super perhitungan di pagi hari and berubah menjadi rekan mengbrol santai sore hari."
    ],
    mask: [
      "Di depan klien baru, aku sengaja menampilkan diriku sebagai pebisnis yang super efisien, berorientasi hasil, and menguasai semua detail angka keuntungan.",
      "Aku mengusahakan draf usulanku and presentasiku selalu dipenuhi oleh grafik profit, riset pasar konkret, and bukti empiris terpercaya agar kompetensiku diakui.",
      "Saat melamar kerja, aku sengaja menonjolkan keahlianku dalam memangkas biaya operasional, efektivitas waktu kerja, and menaikkan omzet penjualan tim.",
      "Di profil profesional, aku memamerkan sertifikat keahlian teknis, analisis efisiensi sistem, and proyek-proyek riil yang sukses kuubah jadi uang masif."
    ],
    threat: [
      "Aku langsung merasa pusing, risih, and sangat tertekan jika ada orang yang menuntutku menyajikan data angka and laporan keuangan secara mendadak and terburu.",
      "Aku merasa cemas and beku ketika batin and kepalaku dituduh melakukan pemborosan anggaran atau dianggap mandul and tidak menghasilkan karya bernilai konkret.",
      "Dipaksa mengurai masalah audit biaya and pajak yang rumit and berantakan sendirian membuat batin and detak jantungku berdenyut terlalu kencang kaku.",
      "Aku gampang menutup diri and mendadak mundur pasif dari barisan tim kerja jika kinerjaku dinilai tidak berguna and tidak efisien oleh manajemen rapat."
    ],
    receiver: [
      "Batin rasanya lego, tenang, and plong kalau ada partner kerja tangguh yang membantuku merapikan kalkulasi, memberiku draf data akurat, and memanduku melangkah pasti.",
      "Aku sangat bersyukur jika didekatkan dengan orang praktis yang bersedia menghitung rincian biaya and mengurusi urusan birokrasi keuangan tim kerja kami.",
      "Rasanya sangat menenangkan jika partner kelompokku langsung menyodorkan format draf kelayakan bisnis yang mencerahkan and siap pakai tanpa harus kuurai.",
      "Aku senang jika ada asisten yang dengan cerdas menyortir data-data palsu and memberiku sinyal instruksi kerja yang bersih dari asumsi-asumsi berisiko."
    ],
    aspiration: [
      "Pujian paling berarti bagiku adalah ketika manajer and tim kerja memuji kejelianku dalam menemukan cara kerja baru yang luar biasa efisien and hemat budget.",
      "Aku haus akan apresiasi yang membenarkan bahwa draf kelayakan and kalkulasi anggaran buatanku telah menyelamatkan proyek perusahaan dari kebangkrutan.",
      "Ada kebanggaan tersembunyi ketika kawan kelompok mengandalkanku untuk menyusun strategi pragmatis and menghitung harga jual produk unik kami.",
      "Aku sangat senang jika usahaku meningkatkan produktivitas and keuntungan ekonomi dipuji sebagai motor penggerak utama kesejahteraan bersama tim."
    ],
    dismissive: [
      "Menyusun rute kerja yang paling cepat and menguntungkan itu mudah bagiku, tapi aku malas menceritakannya and mending membiarkan kawan memakai cara lamanya.",
      "Aku tahu draf tim ini mengalami kebocoran anggaran kecil, tapi aku menganggap perdebatan uang receh itu membosankan and mending langsung fokus ke arah besar.",
      "Aku bisa saja mengaudit and merapikan rincian pengeluaran kelompok ini sendiri, but itu melelahkan batin, kuserahkan saja ke bagian sekretariat tim.",
      "Aku sering membiarkan peluang raup untung kecil terlewat begitu saja dari tangan daripada harus repot menuntut and bertengkar keras di departemen."
    ],
    background: [
      "Secara senyap, autopilot pikiranku terus mencari rute jalan terpendek, memotong antrean lambat, and mengevaluasi harga terbaik saat draf mataku melirik belanja harian.",
      "Di latar belakang pikiran, tangan and kalkulasiku otomatis mengukur waktu sisa pengerjaan file data kerja, mendinginkan batin dari kepanikan tim.",
      "Aku refleks membandingkan rasio kegunaan and harga barang di rak supermarket secara kilat di memori bawah sadar sebelum tanganku meraih keranjangnya.",
      "Uji coba efektivitas and pembacaan bukti nyata berjalan lancar bagai radar navigasi otomatis di kepalaku, menjagaku tetap aman and fokus melangkah produktif."
    ]
  },
  Ti: {
    producer: [
      "Mendapati draf laporan atau tata tertib kelompok berantakan and penuh kontradiksi aturan, tanganku refleks langsung membuka whiteboard untuk membuat skema hierarki.",
      "Aku secara otomatis langsung mengidentifikasi inkonsistensi kalimat, mengklasifikasikan folder data berdasarkan abjad, and menuntut logika yang runtut tegas.",
      "Secara naluri batin, aku langsung memisahkan bagian-bagian masalah, mengunci definisi istilah pokok, and menahan obrolan yang keluar dari garis bagan aturan.",
      "Saat ada kerancuan di SOP kerjaan kelompok, tanganku spontan mengetik draf tabel and memberi tanda warna koneksi panah hubungannya sampai kelihatan rapi."
    ],
    flexible: [
      "Aku memakai skema hierarki and bagan proses aturan hanya sebagai navigasi keluwesan sosial, and gampang merobohkannya pas tim jenuh and butuh bercanda rileks.",
      "Aku bisa dengan luwes merapikan logika and mengarahkan ketertiban rapat, tetapi aku gampang melunakkan draf sistem demi kenyamanan kawan sekelompok.",
      "Aku tahu kapan harus menuntut kepatuhan kaku pada detail regulasi and undang-undang, and tahu kapan harus santai membiarkan tim berekspresi bebas.",
      "Aku luwes mengatur pola klasifikasi data, bisa sangat sistematis and berstruktur rapi di pagi hari, and santai membiarkan dokumen berantakan pas malam santai."
    ],
    mask: [
      "Di depan instansi baru, aku sengaja menampilkan diriku sebagai akademisi yang super disiplin, taat regulasi, and memiliki kerangka berpikir yang sangat sistematis.",
      "Aku mengusahakan agar presentasiku and pemaparanku selalu dikelilingi oleh definisi ilmiah, nomor pasal, and bagan taksonomi rapi agar posisiku diakui tinggi.",
      "Saat melamar kerja, aku sengaja menonjolkan kemampuanku dalam merancang database berstruktur, mengaudit kepatuhan SOP tim, and merapikan kekacauan.",
      "Di profil profesional, aku memamerkan diagram alur berpikir, taksonomi teori, and sertifikat kualifikasi kepatuhan sistem yang super presisi."
    ],
    threat: [
      "Aku langsung merasa pusing, risih, and mental beku jika dipaksa menjelaskan korelasi hukum and ketertiban rumus matematika logika secara dadakan di depan forum.",
      "Aku merasa cemas and tertekan ketika kepalaku dituduh berpikir tidak logis, berstandar ganda, atau melanggar regulasi ketertiban organisasi tim.",
      "Tuntutan untuk merumuskan landasan teori and definisi definisi rumit dalam waktu cepat membuat batin and detak jantungku berdenyut terlalu kencang kaku.",
      "Aku gampang menutup diri and mendadak mogok kerja jika usahaku merapikan bagan aturan dinilai kaku and tidak berperasaan oleh departemen kelompok."
    ],
    receiver: [
      "Batin rasanya melegakan, tenang, and plong kalau ada kawan pintar yang menjelaskan struktur sistem, menyodorkanku bagan alur rapi, and mengurai keruwetan logika.",
      "Aku sangat bersyukur jika didekatkan dengan partner tertib yang bersedia merancang draf database, folder komputer, and merapikan semua kontradiksi aturan harian.",
      "Rasanya sangat tenang jika partner kelompokku langsung bersuara and memberi definisi istilah yang mencerahkan and siap pakai tanpa harus kuurai sendiri.",
      "Aku senang jika ada asisten yang dengan cerdas menyortir dokumen berantakan and memberiku sinyal instruksi kerja yang bersih and teratur terstruktur."
    ],
    aspiration: [
      "Pujian paling menyentuh bagiku adalah ketika orang lain mengakui bahwa model logika, bagan hierarki, and kerangka penjelasanku sangat presisi and jernih.",
      "Aku haus akan apresiasi yang membenarkan bahwa draf aturan and struktur klasifikasi buatanku membuat urusan organisasi tim yang rumit menjadi mudah dipahami.",
      "Ada kebanggaan terpisah ketika kawan setim mengandalkanku untuk merancang skema kerja and mendefinisikan istilah krusial di draf kesepakatan.",
      "Aku sangat senang jika usahaku mendisiplinkan ketertiban and konsistensi aturan dihargai sebagai jangkar penyelamat stabilitas and keadilan tim."
    ],
    dismissive: [
      "Merapikan susunan folder and folder komputer ini sangat mudah bagiku, tapi aku malas menceritakannya and mending membiarkan kawan memakai cara lamanya.",
      "Aku tahu draf tim ini mengalami inkonsistensi penjelasan kecil, tapi aku menganggap argumen revisi teks itu membosankan and mending langsung kerja konkret.",
      "Aku bisa saja mengaudit and menstrukturkan ulang pembagian tugas kelompok ini sendiri, but itu melelahkan batin, kuserahkan saja ke bagian sekretariat.",
      "Aku sering membiarkan draf aturanku ditaruh di laci lemari kerja daripada harus repot mendebat and adu argumen keras face-to-face di departemen tim."
    ],
    background: [
      "Secara senyap, autopilot ku terus membagi and menyortir benda berdasarkan fungsi, ukuran, and kepatutan kegunaan saat mataku melirik suasana harian.",
      "Di latar belakang pikiran harian, otak and logikaku otomatis mendeteksi pola hubung kait and relasi sebab akibat, mendinginkan batin dari kekacauan situasi.",
      "Aku refleks merapikan tumpukan kertas and mengurutkan urutan kunci di laci meja kerja secara bawah sadar sebelum tanganku meraih draf tugas berikutnya.",
      "Analisis konsistensi and penyaringan kontradiksi beroperasi otomatis bagai radar ketertiban di kepalaku, menjagaku tetap fokus and aman melangkah sistematis."
    ]
  },
  Fe: {
    producer: [
      "Mendapati suasana kelompok mendadak kaku, sunyi, and hambar, wajah and suaraku refleks langsung melontarkan banyolan and tawa ceria untuk memicu semangat.",
      "Aku secara otomatis langsung menyapa kawan baru, menaikkan intonasi suara, and menebarkan energi ceria agar mood seluruh ruangan ikut mencerah.",
      "Secara naluri, aku langsung merasakan perubahan suhu emosi kelompok and menyuntikkan gelombang ekspresif harian agar keheningan diganti kegembiraan.",
      "Saat ada drama kaku di forum pertemanan, tanganku spontan melempar candaan ringan and melebarkan senyuman sampai semua orang ikut merasa terbawa rileks."
    ],
    flexible: [
      "Aku memakai ekspresi ceria, candaan banyolan, and intonasi melengking hanya sebagai navigator luwes untuk menyatukan kelompok, and rileks pas suasana sedih.",
      "Aku bisa dengan sangat ekspresif meramaikan forum and mencairkan ketegangan rapat, tetapi aku gampang mematikan mode itu pas beralih ke tugas entri data.",
      "Aku tahu kapan harus menaikkan nada penuh semangat dramatis untuk menghidupkan panggung, and kapan harus santai membiarkan ruangan hening mengheningkan cipta.",
      "Aku luwes mengatur pancaran energiku harian, bisa menjadi sosok yang super hangat ceria di pagi hari and berubah menjadi penyendiri sunyi di malam hari."
    ],
    mask: [
      "Di depan klien baru, aku sengaja menampilkan diriku sebagai orang yang paling antusias, ekspresif, and menguasai teknik komunikasi masa yang hangat.",
      "Aku mengusahakan draf caraku menyapa and bercerita selalu penuh tawa, kontak mata manis, and vibrasi positif yang kuat agar kapasitas sosialku diakui.",
      "Saat presentasi di panggung umum, aku sengaja menonjolkan gaya teatrikal, variasi intonasi suara dramatis, and ekspresi hidup biar audiens terpesona.",
      "Di profil profesional, aku memamerkan foto-foto keceriaan tim kerja, testimoni kehangatan kolaborasi, and kegiatan sosial yang super ekspresif."
    ],
    threat: [
      "Aku langsung merasa pusing, risih, and mendadak kaku beku jika dipaksa memimpin sorak-sorai and menghidupkan keceriaan forum kaku di tengah duka.",
      "Aku merasa sangat cemas, takut salah tingkah, and tertekan ketika batin and ekspresiku disorot lampu and dituntut tampil super heboh menghibur orang.",
      "Tuntutan untuk terus tersenyum and memancarkan energi ceria buatan pas batin and badanku sedang lelah berduka membuat kepalaku pusing tertekan.",
      "Aku gampang menutup diri and mendadak mundur menyendiri jika keteateran and ekspresi hangatku dituduh palsu atau cari perhatian oleh departemen."
    ],
    receiver: [
      "Batin rasanya melegakan, tenang, and plong kalau ada kawan supel yang langsung mengambil kendali mic, memecah kesunyian, and menghidupkan tawa ruangan.",
      "kamu senang menerima sapaan hangat, ikut tersenyum meringankan beban batin, lalu membiarkan orang yang ekspresif itu memimpin sorak-sorai kelompok.",
      "Begitu orang humoris and ekspresif itu masuk, kepalamu lebih cepat terhibur and kecanggungan sosial di sekitarmu langsung runtuh.",
      "Aku merasa sangat terselamatkan ketika partner setimku yang ramah bersedia memandu keceriaan and mencairkan ketegangan rapat kaku tim kerja kami."
    ],
    aspiration: [
      "Pujian paling mencerahkan bagiku adalah ketika orang lain menyatakan bahwa candaan, senyuman, and kehadiranku telah mengembalikan keceriaan hidup mereka.",
      "Aku haus akan apresiasi yang membenarkan bahwa vibrasi positif and kehangatan ekspresiku berhasil menyelamatkan energi tim dari keputusasaan kerja.",
      "Ada kebanggaan tersembunyi pas kawan kelompok menyebutku sebagai pembawa cahaya and penyelamat semangat kebersamaan di masa-masa sulit.",
      "Aku sangat senang jika usahaku mencairkan suasana beku diakui and dipuji sebagai perekat kebahagiaan and magnet tawa yang paling andal bagi kelompok."
    ],
    dismissive: [
      "Mencairkan suasana tegang and membuat orang tertawa renyah itu gampang sekali bagiku, but aku malas melakukannya and memilih diam membaca data buku.",
      "Aku tahu semua orang di ruangan ini sedang canggung kaku, tapi aku menganggap sandiwara tawa sosial itu melelahkan and mending kutaruh fokus ke HP.",
      "Aku bisa saja melempar banyolan and memimpin keriuhan pesta kelompok ini sendiri, tapi itu menguras energi batin, kubiarkan orang lain saja yang memandu.",
      "Aku sering membiarkan senyumku surut and berekspresi datar saja daripada harus repot berpura-pura heboh and antusias di hadapan bos kaku department."
    ],
    background: [
      "Secara senyap, autopilot wajah and suaraku terus memantulkan senyuman manis, tawa penenang, and intonasi ramah pembawa damai tanpa perlu kuperintahkan.",
      "Di latar belakang pikiran harian, empati autopilot-ku terus memindai gelombang emosi and radar ketegangan batin tim setim harian untuk kuredakan.",
      "Aku refleks memperhalus desah napas and melembutkan tatapan mata ketika melihat rekan diskusi mulai tegang kaku, radar pendingin suasana aktif otomatis.",
      "Pancaran energi harmoni and penularan mood positif berjalan lancar bagai radar keselamatan sosial di batin, menjagaku and tim tetap rileks bekerja."
    ]
  },
  Fi: {
    producer: [
      "Mendapati batas personal and privasiku digeser orang asing, wajah and posturku refleks langsung memisahkan diri, mendadak kaku dingin and diam berjarak.",
      "Aku tanpa sadar langsung memotong percakapan, menutup folder percakapan pribadi, and menegakkan batas jarak aman kepercayaan secara tegas.",
      "Secara naluri, aku langsung mengukur ketulusan niat orang di depanku, and melangkah mundur setengah meter jika mencium kebohongan and manipulasi.",
      "Saat ada perkataan yang menyinggung nilai moral and ketulusan batin, aku refleks menutup tatapan mata, bersuara lirih kaku, and menjaga jarak dingin."
    ],
    flexible: [
      "Aku memakai kepekaan batas personal, jarak sosial, and sinyal kepercayaan hanya sebagai navigator luwes untuk berteman karib harian di kelompok.",
      "Aku bisa bersikap santai and bercanda intim akrab dengan siapa saja, but aku gampang menegakkan kembali batasan jarak aman pas dia mulai lancang.",
      "Aku tahu kapan harus membuka hati lebar-lebar untuk berbagi rahasia batin, and kapan harus santai memasang sekat pemisah jarak personal tepercaya.",
      "Aku luwes mengatur tingkat keakraban sosial, bisa sangat intim and hangat di dalam lingkaran dalam kelompok, and bersikap formal ramah kepada orang luar."
    ],
    mask: [
      "Di depan komunitas baru, aku sengaja menampilkan diriku sebagai sosok yang sangat santun, beretika luhur, and menjunjung moralitas tinggi yang tulus.",
      "Aku mengusahakan draf tatapan mataku and bahasa tubuhku selalu memancarkan kehalusan budi, kesetiaan janji, and ketenangan batin agar karakterku dihormati.",
      "Saat rapat koordinasi tim, aku sengaja menonjolkan nilai-nilai kemanusiaan, rasa saling menghargai, and etika berteman biar posisi timku dinilai andal.",
      "Aku memoles profil sosialku agar terlihat dekat dengan kegiatan kemanusiaan, peduli pada sesama, and loyal menjaga nilai-nilai luhur warisan keluarga."
    ],
    threat: [
      "Aku langsung merasa sesak, risih, and mendadak mundur kaku jika didesak menceritakan masalah pribadi and rahasia batin di depan umum.",
      "Aku merasa sangat cemas and terluka tegang luar biasa jika dinilai munafik, dingin, and tidak punya rasa peduli atau ketulusan oleh kawan kelompok.",
      "Tuntutan untuk bersumpah setia and menunjukkan keintiman buatan di depan partner kerja yang tidak kupercayai membuat kepalaku pusing kaku.",
      "Aku gampang menutup diri and mendadak beku jika integritas moral and batas rahasia pribadiku ditawar berisiko oleh departemen organisasi tim."
    ],
    receiver: [
      "Batin rasanya melegakan, tenang, and plong kalau ada rekan peka yang merangkul bahuku tatkala sedih, and menjamin kesetiaan and keamananku tanpa kata.",
      "Aku bersyukur jika didekatkan dengan sahabat setia yang dengan halus menjaga rahasia batin and menghargai keputusan jarak personal asriku.",
      "Rasanya sangat damai and mencerahkan batin ketika partner setimku langsung bersikap sopan santun, menghargai privasiku, and tidak banyak mencampuri urusanku.",
      "Aku senang jika didekatkan dengan orang yang dengan tulus mementingkan perasaan lelahku and memberi kehangatan batin yang bersih dari drama kerja."
    ],
    aspiration: [
      "Pujian paling menyentuh batin and membuatku bangga adalah saat sahabat karib memuji keluhuran akhlak, ketulusan cinta batin, and kesetiaan moralitas hidupku.",
      "Aku haus akan apresiasi yang membenarkan bahwa draf perlindungan and kepedulian empat mata yang kuberikan telah menyelamatkan jiwanya dari kehancuran.",
      "Ada kebanggaan tersembunyi di dalam dada pas kawan luhur menyebutku sebagai pelindung komitmen and pilar kejujuran yang paling tepercaya bagi mereka.",
      "Aku sangat senang jika usahaku merawat harmoni persahabatan and menjaga janji dipuji sebagai jangkar kesetiaan yang tak tergoyahkan oleh angin badai."
    ],
    dismissive: [
      "Membaca ketulusan and jarak batin orang di depanku itu sangat mudah bagiku, but aku malas memikirkannya and memilih diam fokus menyelesaikan kerja spreadsheet.",
      "Aku tahu dua sahabat di sampingku ini diam-diam sedang saling membenci, but aku menganggap drama relasi interpersonal itu membosankan and mending kubiarkan saja.",
      "Aku bisa saja merajut kembali tali silaturahmi yang rusak and mendamaikan kawan-kawan yang bertengkar, but itu menguras tanggi, kubiarkan mereka sendiri.",
      "Aku sering menyembunyikan batas kekecewaan moral and diam-diam mencoretnya dari daftar orang tepercaya daripada harus repot ribut mengonfrontasi langsung."
    ],
    background: [
      "Secara senyap, autopilot ku terus mengukur tingkat ketulusan suara gerak orang, menyaring kepalsuan, and menjaga area batasan moral batin tetap aman.",
      "Di latar belakang pikiran harian, empati internal autopilot-ku terus mendeteksi pergeseran rasa percaya and dinamika ikatan batin kawan tanpa terpengaruh sorrot lampu.",
      "Aku refleks memperhalus tutur kata and menurunkan intonasi volume pas melihat sahabat sedang berada di fase batin yang rapuh and menderita.",
      "Penyaringan nilai harmoni and pendeteksian getaran moralitas beroperasi otomatis bagai jangkar perlindungan jiwa di kepalaku, jagaku and tim tetap tulus bertindak."
    ]
  }
};

const CORE_CONTEXTS: Record<InformationElement, string> = {
  Ne: "Skenario Eksplorasi Kreatif & Pencarian Ide Baru",
  Ni: "Skenario Pembacaan Momentum & Arah Waktu Masa Depan",
  Se: "Skenario Keberanian Aksi & Proteksi Kekuasaan Wilayah",
  Si: "Skenario Harmoni Tubuh, Estetika & Kenyamanan Fisik",
  Te: "Skenario Efisiensi Kerja, Biaya & Hasil Praktis Konkret",
  Ti: "Skenario Analisis Aturan, Kategori & Konsistensi Logika",
  Fe: "Skenario Ekspresi Sosial & Semangat Harmoni Kelompok",
  Fi: "Skenario Ikatan Moral, Ketulusan & Jarak Kedekatan Personal"
};

// HELPER: Generates 256 core questions using the rich handcrafted scenarios database
function generateCoreQuestions(): SocionicsQuestion[] {
  const list: SocionicsQuestion[] = [];
  for (const element of ELEMENTS) {
    for (const channel of CHANNELS) {
      const scale = SCALE_MAP[channel];
      const statements = HANDCRAFTED_SCENARIOS[element][channel];
      for (let i = 0; i < 4; i++) {
        const id = `core_${element.toLowerCase()}_${channel}_0${i + 1}`;
        list.push({
          id,
          kind: "core",
          element,
          channel,
          context: `${CORE_CONTEXTS[element]} (Penyelarasan #${i + 1})`,
          scale,
          statement: statements[i],
          sourceSituation: `Konteks kehidupan harian`,
          sourceResponse: statements[i],
          responseFocus: `Penyelarasan Resonansi Batin`,
          options: generateOptions(element, channel, scale, statements[i])
        });
      }
    }
  }
  return list;
}

const HANDCRAFTED_HOLDOUTS: Record<InformationElement, Record<string, { stmt: string; context: string }>> = {
  Ne: {
    producer: {
      stmt: "Saat dihadapkan pada jalan buntu dalam diskusi kelompok, saya langsung mencetuskan tiga cara pandang baru yang belum terpikirkan oleh siapa pun.",
      context: "Terjadi kemacetan total ide ketika merancang konsep acara kumpul warga."
    },
    threat: {
      stmt: "Saya merasa sangat tidak nyaman dan gelisah bila dipaksa menebak-nebak celah alternatif tersembunyi tanpa fakta kerja nyata.",
      context: "Atasan memberikan instruksi tugas yang sengaja dibiarkan misterius dan tidak spesifik."
    },
    receiver: {
      stmt: "Saya merasa lega dan terbantu bila ada rekan yang membukakan berbagai kemungkinan kreatif ketika pemikiran saya terasa buntu.",
      context: "Merancang dekorasi panggung yang terasa monoton dan membosankan."
    },
    background: {
      stmt: "Tanpa sadar, saya selalu mengamati pola-pola kemungkinan masa depan dan alternatif tersembunyi dari keputusan sepele teman-teman.",
      context: "Mengamati obrolan santai kawan-kawan yang sedang membicarakan rencana liburan akhir tahun."
    }
  },
  Ni: {
    producer: {
      stmt: "Saya langsung bisa menebak akhir dari tren perdebatan kelompok saat itu juga, dan insting visualisasi waktu saya terbukti tepat.",
      context: "Perbedaan pendapat yang berlarut-larut terjadi di grup chat keluarga besar mengenai pembagian warisan."
    },
    threat: {
      stmt: "Saya merasa tegang dan jengkel bila dipaksa terburu-buru memprediksi nasib masa depan tanpa diberikan keleluasaan waktu batin.",
      context: "Tiba-tiba didesak membuat komitmen karir jangka panjang di bawah tenggat waktu yang mencekam."
    },
    receiver: {
      stmt: "Kehadiran orang yang peka membaca momentum batin jangka panjang terasa bagaikan pijar penyembuh keresahan hidup saya.",
      context: "Ketika merasa bingung menentukan arah tujuan hidup di tengah ketidakpastian karir."
    },
    background: {
      stmt: "Sambil mendengarkan obrolan, pikiran autopilot saya menganalisis ke mana arah pergerakan waktu dari proyek tim ini.",
      context: "Menyimak rapat koordinasi bulanan yang membahas naik turunnya performa bulanan."
    }
  },
  Se: {
    producer: {
      stmt: "Saya spontan menegur orang yang bertindak seenaknya melanggar batas kenyamanan bersama dalam forum diskusi.",
      context: "Seorang rekan berulang kali memotong pembicaraan orang lain secara tidak sopan di rapat warga."
    },
    threat: {
      stmt: "Dada saya mendadak sesak dan defensif jika ada orang asing yang mencoba menekuk kehendak fisik saya secara semena-mena.",
      context: "Seorang kenalan tiba-tiba datang tanpa diundang dan menyuruh-nyuruh merapikan rumah."
    },
    receiver: {
      stmt: "Saya sangat tertolong oleh figur tegas yang berani pasang badan membela serta menyelesaikan konfrontasi fisik untuk saya.",
      context: "Dituduh secara tidak adil oleh tetangga pemarah terkait batas tanah parkir rumah."
    },
    background: {
      stmt: "Mata saya secara refleks merekam siapa saja yang mendominasi posisi duduk, gestur kekuasaan, dan postur tubuh di dalam ruangan.",
      context: "Baru merapat masuk ke dalam cafe yang dipenuhi oleh berbagai macam pengunjung asing."
    }
  },
  Si: {
    producer: {
      stmt: "Saya langsung menyisih untuk merapikan koordinasi jarak duduk dan sirkulasi udara agar suasana santai terasa asri.",
      context: "Ruang kumpul keluarga yang sempit mulai dipenuhi oleh asap rokok dan hawa panas menyengat."
    },
    threat: {
      stmt: "Saya merasa panik dan terancam bila tubuh jasmani ini dituntut bekerja melebihi kapasitas tanpa waktu istirahat yang manusiawi.",
      context: "Instruksi pengerjaan lembur mendadak dari organisasi yang sama sekali mengabaikan jam tidur malam."
    },
    receiver: {
      stmt: "Jiwa saya terasa sangat damai dan bersyukur ketika ada kawan yang dengan telaten membawakan kasur empuk dan sup hangat saat fisik lelah.",
      context: "Kondisi badan menurun drastis dan demam sehabis mengejar draf kepatuhan organisasi luar."
    },
    background: {
      stmt: "Pikiran bawah sadar saya selalu sensitif mendeteksi keasrian rasa makanan, suhu ruangan, dan posisi tubuh agar tetap tegak rileks.",
      context: "Duduk menyimak pemaparan materi persidangan yang berlarut-larut selama tiga jam."
    }
  },
  Te: {
    producer: {
      stmt: "Saya reflek menghitung estimasi efisiensi waktu vs biaya secara runtut, menyingkirkan draf rencana abstrak tanpa hasil nyata.",
      context: "Ketika merencanakan renovasi kecil-kecilan taman belakang rumah agar tidak boros anggaran."
    },
    threat: {
      stmt: "Kepala saya terasa panas dan ingin marah jika dipaksa menyajikan laporan keuangan yang dituntut serba praktis secara terburu-buru.",
      context: "Atasan mendadak meminta kompilasi pembuktian bukti nota pengeluaran operasional dalam waktu lima belas menit."
    },
    receiver: {
      stmt: "Rasa canggung draf batin saya langsung sirna tatkala kawan yang andal logika bisnisnya datang merapikan kalkulasi operasional saya.",
      context: "Mengalami kebingungan mengelola arus kas bulanan usaha dagang rumahan yang baru dirintis."
    },
    background: {
      stmt: "Autopilot batin saya senantiasa menyortir mana tindakan yang terbukti menghasilkan manfaat praktis dan mana yang omong kosong belaka.",
      context: "Mendengarkan motivator sosial membagikan tips sukses yang terdengar puitis di hadapan umum."
    }
  },
  Ti: {
    producer: {
      stmt: "Saya langsung membagi masalah ke dalam klasifikasi definisi yang rapi, memastikan argumen keluarga tidak berputar-putar tanpa arah.",
      context: "Pertikaian sengit di grup chat keluarga yang dipicu oleh kesalahpahaman mengartikan istilah berita tertulis."
    },
    threat: {
      stmt: "Otak saya mendadak beku dan tertekan bila dipaksa patuh pada aturan birokrasi kaku yang sama sekali tidak masuk akal sehat harian.",
      context: "Menghadapi sistem administrasi kelurahan yang berbelit-belit hanya untuk mendapatkan selembar surat izin."
    },
    receiver: {
      stmt: "Saya merasa sangat damai ketika ada orang berotak cerdas yang sudi merinci kerangka berpikir logis secara tenang dan adil untuk saya.",
      context: "Kehilangan pegangan logika saat mencoba memahami buku panduan aturan pajak usaha yang rumit."
    },
    background: {
      stmt: "Secara otomatis, otak saya selalu menyortir inkonsistensi kalimat dan struktur logis dari penjelasan pembicara di podium.",
      context: "Menghadiri kuliah umum akademis tentang perkembangan teori sosial kemanusiaan."
    }
  },
  Fe: {
    producer: {
      stmt: "Saya segera melempar lelucon riang atau mencairkan atmosfer agar suasana kaku pertemuan berubah dipenuhi senyum hangat.",
      context: "Pertemuan ramah tamah pertama kali antara dua keluarga yang terlihat kaku dan saling membisu."
    },
    threat: {
      stmt: "Batin saya merasa sangat bersalah dan tertekan jika dituduh sebagai perusak keceriaan atau penyebab kemurungan kelompok.",
      context: "Rekan kerja tiba-tiba menegur saya karena wajah saya terlihat kurang bersahabat di sela jam istirahat."
    },
    receiver: {
      stmt: "Kehadiran orang yang pandai memantik tawa ceria dan gelombang ekspresi gembira terasa menyembuhkan keletihan batin saya.",
      context: "Merasa murung dan kesepian setelah melewati pekan kerja yang padat dan melelahkan raga."
    },
    background: {
      stmt: "Refleks batin saya sangat peka mencium keretakan ekspresi emosional sekilas di wajah kawan meskipun mereka menyembunyikannya.",
      context: "Sedang makan siang bersama tim kerja di kantin kantor."
    }
  },
  Fi: {
    producer: {
      stmt: "Saya langsung menyaring jarak aman kedekatan personal, melindungi kawan dekat dari pengkhianatan orang asing yang tidak tulus.",
      context: "Seorang anggota baru tim kerja mencoba menggali rahasia keuangan pribadi kawan akrab saya."
    },
    threat: {
      stmt: "Saya gampang syok dan defensif jika ranah moralitas kejujuran batin saya digugat kasar atau dihakimi secara sepihak.",
      context: "Dituduh memiliki niat jahat tersembunyi oleh tetangga baru saat memberikan masukan tentang keasrian lingkungan."
    },
    receiver: {
      stmt: "Saya merasa batin ini tersiram air sejuk nan damai saat ada sahabat sejati yang tulus merangkul, memuji integritas moral saya.",
      context: "Ketika merasa terisolasi dan dihujat akibat mempertahankan idealisme kejujuran di lingkungan kerja."
    },
    background: {
      stmt: "Autopilot perasaan saya senantiasa menakar kadar ketulusan cinta kasih, niat batin, dan keaslian jarak aman relasi manusia harian.",
      context: "Menyaksikan interaksi ramah tamah politisi dengan warga desa saat musim kampanye."
    }
  }
};

// HELPER: Generates 32 holdout questions using deterministic handcrafted real-world scenarios
function generateHoldoutQuestions(): SocionicsQuestion[] {
  const list: SocionicsQuestion[] = [];
  const testChannels: MeasurementChannel[] = ["producer", "threat", "receiver", "background"];
  for (const element of ELEMENTS) {
    testChannels.forEach((channel, idx) => {
      const id = `holdout_${element.toLowerCase()}_0${idx + 1}`;
      const scale = SCALE_MAP[channel];
      const data = HANDCRAFTED_HOLDOUTS[element]?.[channel];
      if (data) {
        list.push({
          id,
          kind: "holdout",
          element,
          channel,
          context: data.context,
          scale,
          statement: data.stmt,
          sourceSituation: `Uji komparasi silang ${element}`,
          sourceResponse: data.stmt,
          responseFocus: `verifikasi ${element}:${channel}`,
          options: generateOptions(element, channel, scale, data.stmt)
        });
      }
    });
  }
  return list;
}

// HELPER: Manually crafted Pair Discriminators with behavioral scenarios
export const PAIR_DISCRIMINATORS: SocionicsQuestion[] = [
  // 1. LII vs LSI
  {
    id: "disc_lii_lsi_01",
    kind: "tie-break",
    element: "Ti",
    channel: "producer",
    scale: "comparison",
    context: "Ketika rincian aturan tim sudah ditetapkan, tetapi interaksi anggota di lapangan menjadi sangat bising, mendesak, dan saling melanggar batas kemerdekaan.",
    statement: "Dalam mengatasi kebisingan dan perebutan kuasa fisik tersebut, responsku lebih dekat ke...",
    sourceSituation: "Tim bising melanggar batas",
    sourceResponse: "Mengutamakan penjelasan aturan atau mendesak penertiban fisik",
    responseFocus: "Aturan logis vs Penertiban fisik",
    tieBreak: { a: "LSI", b: "LII" }, // Choices 4-5 (supported by rating) boost LSI, Choices 1-2 boost LII
    options: [
      {
        value: 1,
        label: "Menarik mundur obrolan ke definisi awal dulu secara tenang, agar semua sadar letak salah pemahamannya tanpa harus adu urat saraf.",
        meaning: "Mengutamakan penataan konsep logis murni secara sabar untuk memperjelas batas teori.",
        reaction: "Kamu memilih diam mencatat inkonsistensi, lalu mengirim draf penjelasan komparatif lewat chat tertulis."
      },
      {
        value: 2,
        label: "Mengabaikan ketegangan fisik sekitar, berniat menjelaskan struktur aturan logis saat keadaan sudah sedikit mereda.",
        meaning: "Kamu memilah porsi teori terlebih dahulu sebelum mengintervensi realitas fisik.",
        reaction: "Kamu menghela napas panjang, merapikan kertas kerjamu, dan menunggu orang-orang selesai berdebat."
      },
      {
        value: 3,
        label: "Mengambil jalan tengah: memperjelas definisi aturan logis sembari sesekali menuntut ketertiban fisik forum.",
        meaning: "Menyeimbangkan penjelasan konseptual logis dengan ketegasan batasan di lapangan.",
        reaction: "Kamu mengetuk meja sesekali, meminta semua orang meredakan intonasi suara sembari merujuk aturan."
      },
      {
        value: 4,
        label: "Meminta pihak yang melanggar batas segera diam dan mematuhi tata tertib demi kelancaran agenda.",
        meaning: "Menunjuk pada kebutuhan ketertiban lapangan harian untuk menjamin integritas agenda bersama.",
        reaction: "Kamu menyela obrolan dengan nada tegas, meminta forum kembali berfokus pada agenda tertulis tim harian."
      },
      {
        value: 5,
        label: "Langsung menghentikan orang tersebut dan meminta semuanya kembali mematuhi aturan baku yang sudah disepakati secara vokal.",
        meaning: "Menuntut kepatuhan konkret secara instan demi menertibkan kegaduhan lingkungan saat itu juga.",
        reaction: "Kamu berdiri, menatap mata orang tersebut secara langsung, menghentikan kegaduhan konfrontasi, dan menegakkan kepatuhan struktur saat itu juga."
      }
    ]
  },
  // 2. ILE vs IEE
  {
    id: "disc_ile_iee_01",
    kind: "tie-break",
    element: "Ne",
    channel: "producer",
    scale: "comparison",
    context: "Ketika kelompok sedang mendiskusikan spekulasi ide baru yang belum pernah diuji di pasar harian.",
    statement: "Penilaian utamaku terhadap rute kelayakan ide tersebut didasarkan pada...",
    sourceSituation: "Spekulasi gagasan baru",
    sourceResponse: "Kelayakan sistem logis versus resonansi etis hubungan manusia",
    responseFocus: "Struktur logika vs Relasi personal",
    tieBreak: { a: "ILE", b: "IEE" },
    options: [
      {
        value: 1,
        label: "Fokus menyelami respons batin, mengutamakan kehangatan hubungan antarafiliasi dan menjaga nilai ikatan moral agar tetap selaras.",
        meaning: "Mengutamakan aspek etika hubungan manusia di atas skema logika teknis.",
        reaction: "Kamu tersenyum hangat, menanyakan perasaan anggota tim, dan memastikan tidak ada hati yang tersinggung oleh ide tersebut."
      },
      {
        value: 2,
        label: "Mengutamakan penyelarasan moral kelompok dan rasa nyaman kawan-kawan sebelum membahas rincian teknis.",
        meaning: "Menggugah komitmen etis kelompok sebagai pilar utama penerimaan inovasi baru.",
        reaction: "Kamu membujuk forum dengan cerita inspiratif personal agar motivasi internal mereka selaras dengan ide baru."
      },
      {
        value: 3,
        label: "Melihat bahwa logika kelayakan sistem dan keharmonisan hati manusia sama pentingnya dalam menguji sebuah inovasi.",
        meaning: "Mengambil titik tengah antara ketepatan logika sistem dengan empati kemanusiaan.",
        reaction: "Kamu membuat bagan coretan yang membagi porsi kelayakan teknis model bisnis dan kenyamanan relasi personal tim."
      },
      {
        value: 4,
        label: "Melihat seberapa koheren sistem gagasan tersebut jika dibedah dalam kerangka teori dan kategori klasifikasi yang rapi.",
        meaning: "Menganalisis sistematika logika ide demi menjamin ketepatan struktur implementasi.",
        reaction: "Kamu menunjukkan celah-celah teoretis pada skema ide tersebut, menyarankan struktur klasifikasi yang lebih modular."
      },
      {
        value: 5,
        label: "Menganalisis konsistensi logika struktural gagasan secara teoretis murni, mengabaikan respons emosional demi akurasi analisis.",
        meaning: "Menuntut kepatuhan logika rasional penuh tanpa kompromi pada kenyamanan sosial kelompok.",
        reaction: "Kamu membongkar total kontradiksi definisi di papan tulis, menyodorkan draf fungsional baru secara teoretis murni."
      }
    ]
  },
  // 3. SEI vs SLI
  {
    id: "disc_sei_sli_01",
    kind: "tie-break",
    element: "Si",
    channel: "producer",
    scale: "comparison",
    context: "Setelah penat bekerja seharian, saat ingin bersantai bersama di sebuah ruangan kumpul kasual tim.",
    statement: "Untuk membangun kenyamanan fisik yang damai, perhatian batin beralih ke...",
    sourceSituation: "Santai setelah penat",
    sourceResponse: "Menciptakan keceriaan emosi vs Merapikan fasilitas praktis",
    responseFocus: "Atmosfer emosional vs Ketenangan praktis",
    tieBreak: { a: "SEI", b: "SLI" },
    options: [
      {
        value: 1,
        label: "Mencari keheningan penuh, merapikan fasilitas fisik secara senyap, menyeduh teh hangat, dan menikmati kedamaian tanpa obrolan yang melelahkan.",
        meaning: "Berfokus pada pemulihan energi fisik mandiri secara senyap.",
        reaction: "Kamu menyalakan diffuser beraroma melati, meredupkan lampu ruangan harian, dan bersandar menikmati keheningan indrawi."
      },
      {
        value: 2,
        label: "Fokus pada kenyamanan fisik ruang dan instrumen praktis sekitar, tanpa merasa perlu memperindah suasana sosial.",
        meaning: "Mengutamakan kestabilan raga daripada merespons atmosfer keceriaan sosial.",
        reaction: "Kamu membawakan bantal pelindung punggung dan duduk tenang menyimak sembari memakan camilan biskuit hangat."
      },
      {
        value: 3,
        label: "Menikmati ketenangan fisik indrawi sembari sesekali tersenyum ramah mendengarkan candaan kawan sekeliling.",
        meaning: "Menyeimbangkan kenyamanan indrawi internal dengan suasana kebersamaan sosial sekitar.",
        reaction: "Kamu menyandarkan raga dengan rileks sembari menyeduh minuman hangat untuk dinikmati bersama kawan."
      },
      {
        value: 4,
        label: "Memancing obrolan kasual yang hangat dan melempar celetukan riang agar suasana santai dipenuhi oleh tawa kebersamaan.",
        meaning: "Menggunakan ekspresi emosional ringan untuk menghidupkan kenyamanan indrawi.",
        reaction: "Kamu melempar celetukan lucu kasual untuk memancing senyum kawan yang terlihat kelelahan bekerja."
      },
      {
        value: 5,
        label: "Aktif menyebarkan keceriaan atmosfer sosial, menyetel musik gembira, bercanda lepas, dan meleburkan kekakuan emosional kelompok.",
        meaning: "Menggerakkan energi keceriaan ekspresi emosional kelompok sebagai pilar utama kenyamanan batin bersama.",
        reaction: "Kamu memputar musik ceria, memandu gelombang tawa heboh, mendistribusikan makanan enak, dan merangkul kehangatan."
      }
    ]
  },
  // 4. ESE vs EIE
  {
    id: "disc_ese_eie_01",
    kind: "tie-break",
    element: "Fe",
    channel: "producer",
    scale: "comparison",
    context: "Saat berada di tengah-tengah acara pesta atau kumpul besar untuk menaikkan gelombang kebersamaan.",
    statement: "Ujung fokus utama dari ekspresi emosional dan dorongan energiku adalah...",
    sourceSituation: "Menyemangati kumpul besar",
    sourceResponse: "Kenyamanan jasmani saat ini vs Visi filosofis masa depan",
    responseFocus: "Kenyamanan indrawi vs Visi emosional",
    tieBreak: { a: "ESE", b: "EIE" },
    options: [
      {
        value: 1,
        label: "Menyalakan imajinasi masa depan, membimbing kelompok merenungi visi batin jangka panjang yang bernada dramatis filosofis.",
        meaning: "Mengarahkan energi emosional kelompok ke visi perubahan makro masa depan.",
        reaction: "Kamu berorasi dengan tatapan tajam visioner, menyuarakan makna filosofis hidup, dan menggugah batin pendengar."
      },
      {
        value: 2,
        label: "Membawa suasana kelompok ke arah refleksi tren perubahan, mengobarkan komitmen emosional demi impian kolektif agung kelak.",
        meaning: "Menggunakan prediksi tren historis untuk menggugah semangat kolektif.",
        reaction: "Kamu menceritakan prediksi dramatik tentang masa depan tim, menggugah batin kawan-kawan dengan metafora puitis."
      },
      {
        value: 3,
        label: "Menyeimbangkan ekspresi emosional antara inspirasi visi masa depan dan sajian pemenuhan kenyamanan suasana saat ini.",
        meaning: "Penyelarasan antara visi filosofis masa depan dengan kenikmatan suasana gembira saat ini.",
        reaction: "Kamu memandu jalannya acara dengan riang sembari sesekali menyelipkan ulasan hikmah bijaksana tentang kehidupan."
      },
      {
        value: 4,
        label: "Memastikan kenyamanan fisik konkret peserta, memastikan sirkulasi udara baik, makanan lezat, dan tawa gembira harian.",
        meaning: "Membidiki kesegaran raga jasmani sebagai pilar utama atmosfer emosi kelompok.",
        reaction: "Kamu sibuk mengecek ketersediaan hidangan lezat hangat and menata bantal kursi agar kawan-kawan tidak pegal badannya."
      },
      {
        value: 5,
        label: "Merayakan kepuasan indrawi seutuhnya dengan tawa riang fisik, hidangan lezat hangat, tanpa mau menyentuh drama batin berat.",
        meaning: "Membebaskan kelompok dari ketegangan drama batin dengan kegembiraan indrawi nyata.",
        reaction: "Kamu tertawa terbahak-bahak, menyodorkan makanan enak penutup, memeluk hangat sahabat, dan merayakan kesegaran raga."
      }
    ]
  },
  // 5. SLE vs SEE
  {
    id: "disc_sle_see_01",
    kind: "tie-break",
    element: "Se",
    channel: "producer",
    scale: "comparison",
    context: "Ketika kelompok harus segera menguasai kontrol teritori serta pembagian tugas di bawah tekanan berat krisis.",
    statement: "Alat utama yang refleks kupakai untuk memandu jalannya eksekusi tim harian adalah...",
    sourceSituation: "Kontrol teritori di bawah krisis",
    sourceResponse: "Aturan hirarki logis vs Dinamika relasi personal",
    responseFocus: "Sistem objektif vs Aliansi personal",
    tieBreak: { a: "SLE", b: "SEE" },
    options: [
      {
        value: 1,
        label: "Membaca loyalitas orang, mendekati hati mereka secara rahasia untuk merangkul sekutu, dan mengamankan pengaruh kekuasaan personal.",
        meaning: "Merajut aliansi interpersonal tepercaya demi mengendalikan situasi lapangan.",
        reaction: "Kamu merapat membisikkan instruksi khusus ke kawan dekat tepercaya, mengunci dukungan personalnya, dan mengisolasi peragu."
      },
      {
        value: 2,
        label: "Memilah siapa saja kawan tepercaya yang tulus mau mendukung langkah tim, memakai muslihat negosiasi interpersonal yang luwes.",
        meaning: "Menggunakan pengaruh karisma interpersonal untuk mengarahkan kehendak kelompok.",
        reaction: "Kamu menepuk pundak anggota tim dengan santun, menanyakan kesiapan hatinya membantu perjuangan sebelum memberi tugas."
      },
      {
        value: 3,
        label: "Menyeimbangkan pembagian tugas secara objektif dengan pembinaan hubungan diplomatis personal batin.",
        meaning: "Mengambil jalan tengah antara ketertiban struktur logis dengan harmoni afiliasi personal.",
        reaction: "Kamu membagi lembar draf tugas secara tertulis sembari mengajak anggota tim makan bersama membahas batasnya."
      },
      {
        value: 4,
        label: "Menyusun pembagian operasi tugas secara objektif matematis sesuai deskripsi kerja guna memastikan efisiensi roda sistem.",
        meaning: "Mengarahkan ketertiban sistem berdasarkan pemetaan wewenang operasional nonsentimental.",
        reaction: "Kamu mengompilasikankan bagan wewenang tim secara hierarkis dan menuntut semua pihak tertib pada deskripsi kerja."
      },
      {
        value: 5,
        label: "Menegakkan disiplin aturan penugasan kerja secara meluas tanpa pandang bulu, melacak target operasional secara tegas kaku.",
        meaning: "Menegakkan kepatuhan aturan struktural secara mutlak tanpa kompromi pada dinamika emosi relasi.",
        reaction: "Kamu menetapkan draf evaluasi di meja, membacakan poin-poin pelanggaran sistem secara dingin, dan mengganti personel lamban instan."
      }
    ]
  },
  // 6. IEI vs ILI
  {
    id: "disc_iei_ili_01",
    kind: "tie-break",
    element: "Ni",
    channel: "producer",
    scale: "comparison",
    context: "Saat melihat tanda-tanda bahwa situasi proyek organisasi akan mengalami kemunduran momentum jangka panjang.",
    statement: "Kecenderungan alami kepalaku dalam merenungi masa depan tersebut dilingkupi oleh...",
    sourceSituation: "Organisasi mundur momentum",
    sourceResponse: "Pemberdayaan emosional hubungan vs Perhitungan biaya ekonomi praktis",
    responseFocus: "Atmosfer hubungan vs Efisiensi fungsional",
    tieBreak: { a: "IEI", b: "ILI" },
    options: [
      {
        value: 1,
        label: "Melakukan evaluasi angka realitas, kalkulasi kerugian pragmatis secara dingin, mempersiapkan rencana pemangkasan biaya operasional.",
        meaning: "Mengutamakan keselamatan materi kegunaan praktis daripada membakar emosi kelompok.",
        reaction: "Kamu membuka rincian anggaran pengeluaran, menandai pemborosan angka di dokumen, dan menyarankan aksi realistis."
      },
      {
        value: 2,
        label: "Tutup mata terhadap sentimen perasaan, memikirkan struktur keefektifan fungsional di balik layar komputer untuk menghemat daya.",
        meaning: "Mengkristalkan analisis risiko operasional secara objektif di belakang layar.",
        reaction: "Kamu duduk menyendiri menyusun analisis risiko kegagalan sistematis di komputer lembar kerjamu."
      },
      {
        value: 3,
        label: "Mengevaluasi tren masa depan dengan menimbang kelayakan materi pragmatis serta dampak motivasi emosional tim secara seimbang.",
        meaning: "Menyeimbangkan antara prakiraan fungsional logis dengan dinamika semangat psikologis tim.",
        reaction: "Kamu memberikan masukan ramalan tren masa depan yang mengombinasikan faktor psikologi sosial dan hitungan aset."
      },
      {
        value: 4,
        label: "Membangun optimisme hati kawan, menebar empati dan kata-kata penyejuk jiwa agar mentalitas batin tim tidak hancur didera krisis.",
        meaning: "Menggunakan empati puitis untuk menyeimbangkan pesimisme realitas operasional.",
        reaction: "Kamu tersenyum teduh, menyapa kawan dekat empat mata, dan memberikan wejangan puitis penenang batin."
      },
      {
        value: 5,
        label: "Merajut harapan indah yang membakar motivasi batin, membingkai krisis sebagai momentum spiritual yang menggerakkan persatuan.",
        meaning: "Membangun inspirasi emosional kolektif sebagai solusi utama menggerakkan roda organisasi terpuruk.",
        reaction: "Kamu menyuarakan kata-kata harapan spiritual penyejuk batin secara teatrikal, membangkitkan senyum haru kawan."
      }
    ]
  },
  // 7. LIE vs LSE
  {
    id: "disc_lie_lse_01",
    kind: "tie-break",
    element: "Te",
    channel: "producer",
    scale: "comparison",
    context: "Dalam memimpin jalannya operasional kerja harian agar produktivitas tim melambung tinggi ke puncak keberhasilan.",
    statement: "Gaya sadar yang kupakai untuk mengarahkan rute aktivitas draf kerja tersebut adalah...",
    sourceSituation: "Memimpin produktivitas tim",
    sourceResponse: "Investasi masa depan berspekulasi vs Detail kenyamanan jasmani harian",
    responseFocus: "Visi masa depan vs Kenyamanan raga harian",
    tieBreak: { a: "LIE", b: "LSE" },
    options: [
      {
        value: 1,
        label: "Fokus menjaga kualitas detail hasil kerja, memastikan stamina fisik staf terjaga prima, ventilasi udara rapi, dan pengerjaan teliti.",
        meaning: "Mengutamakan kualitas pengerjaan fisik raga di lapangan sebagai pondasi efisiensi harian.",
        reaction: "Kamu merapikan letak meja mesin kerja, menyiapkan minum suplemen vitamin tim, dan menuntut standar hasil yang presisi."
      },
      {
        value: 2,
        label: "Menuntut keaslian rasa dan mutu praktis produk agar teruji andal secara fisik, pantang terburu-buru demi kualitas mutunya.",
        meaning: "Mengamankan kontrol kualitas hasil kerja konkrit daripada sekadar mengejar waktu.",
        reaction: "Kamu menyortir sampel bahan baku harian dan meminta tim membetulkan jahitan atau sambungan pengerjaan."
      },
      {
        value: 3,
        label: "Menyeimbangkan target bisnis yang ambisius dengan pemenuhan kenyamanan jasmani serta kesehatan raga rekan kerja sehari-hari.",
        meaning: "Menyelaraskan akselerasi target tren bisnis dengan kesejahteraan fisik jasmani harian staf.",
        reaction: "Kamu menyusun linimasa target bulanan yang fleksibel dipadu dengan agenda rekreasi pijat bersama tim."
      },
      {
        value: 4,
        label: "Mengamati spekulasi pasar baru, siap memangkas waktu santai demi merebut peluang usaha yang melipatgandakan aset.",
        meaning: "Mengeksplorasi oportunitas investasi baru di kala senggang dengan sigap.",
        reaction: "Kamu mengajukan penawaran ekspansi sistem draf bisnis baru ke partner eksternal di sela-sela akhir pekan."
      },
      {
        value: 5,
        label: "Mengambil jalur spekulasi tren futuristik, melompati kenyamanan rutinitas demi mengamankan momentum pasar secepat kilat.",
        meaning: "Melakukan aksi akselerasi dinamika merebut peluang bisnis futuristik di atas stamina jasmani normatif.",
        reaction: "Kamu memesan tiket perjalanan bisnis mendadak, mengganti rencana operasional tim secara kilat, dan mengejar peluang."
      }
    ]
  },
  // 8. ESI vs EII
  {
    id: "disc_esi_eii_01",
    kind: "tie-break",
    element: "Fi",
    channel: "producer",
    scale: "comparison",
    context: "Ketika mendengarkan laporan bahwa ada orang terdekat di lingkaran sosial kami berbuat curang dan melanggar moral kejujuran.",
    statement: "Refleks batin pertama yang mendominasi penilaian terdalam jiwaku adalah...",
    sourceSituation: "Gosip kecurangan teman",
    sourceResponse: "Ampunan moral alternatif versus pasang batas dingin menguji loyalitas",
    responseFocus: "Ruang pengampunan vs Batas proteksi moral",
    tieBreak: { a: "EII", b: "ESI" },
    options: [
      {
        value: 1,
        label: "Mencari motif batin tak terlihat di balik kesalahannya, percaya bahwa setiap manusia punya alasan emosional khusus, and memberi ampunan.",
        meaning: "Mengutamakan pemberian ruang rehabilitasi moral dan memaafkan ketidaksempurnaan manusia.",
        reaction: "Kamu mendoakan ketenangan jiwanya, memaafkan kesalahannya di lubuk batin harian secara tenang."
      },
      {
        value: 2,
        label: "Menghindari penghakiman sosial yang kasar, merangkul jiwanya dengan menyimak cerita sisi batinnya secara sabar penuh empati.",
        meaning: "Berempati menggali luka batin pelaku daripada buru-buru menyematkan sanksi sosial.",
        reaction: "Kamu menahan diri tidak ikut menghujat di grup chat, memilih mengirim pesan empati pribadi menanyakan kondisi emosinya."
      },
      {
        value: 3,
        label: "Menjaga batas kenyamanan integritas persahabatan tetapi tetap menyisakan ruang penjelasan moral yang ramah bagi pelaku.",
        meaning: "Menyeimbangkan keadilan integritas komitmen etis dengan pemahaman sisi kemanusiaan.",
        reaction: "Kamu mendengarkan kasus tersebut secara tenang sembari mengingatkannya tentang kepatutan etis hubungan persahabatan."
      },
      {
        value: 4,
        label: "Menjaga jarak aman kepercayaan personal, menandai hitam-putih komitmen moralnya, dan enggan lagi membicarakan urusan batin.",
        meaning: "Membatasi diri dari relasi moral yang terbukti lancung demi menjaga integritas pribadi.",
        reaction: "Kamu membalas chat orang tersebut seperlunya dengan kalimat formal yang kaku, dingin, and langsung menutup curhat pribadinya."
      },
      {
        value: 5,
        label: "Membatasi diri secara tak tertembus, mencoret kepercayaan moral padanya selamanya, dan memasang pandangan dingin melindungi diri.",
        meaning: "Menegakkan pemutusan hubungan etis secara mutlak demi membela kebenaran tulus dan melindungi lingkaran intim.",
        reaction: "Kamu memblokir nomor kontaknya, berbalik arah membuang muka jika berpapasan, dan pasang radar dingin melindungi kawan dekat."
      }
    ]
  }
];

// Helper to find hand-crafted pair discriminators combined with dynamic discriminators
export function getDiscriminatorsForPair(type1: SocionicsType, type2: SocionicsType): SocionicsQuestion[] {
  const manual = PAIR_DISCRIMINATORS.filter(
    q => (q.tieBreak?.a === type1 && q.tieBreak?.b === type2) || 
         (q.tieBreak?.a === type2 && q.tieBreak?.b === type1)
  );
  
  const dyn = generateDynamicDiscriminator(type1, type2);
  
  // Combine manual and dynamic to get a robust suite of 3-5 tie-breakers
  const combined = [...manual, ...dyn];
  
  // Deduplicate by ID
  const seenIds = new Set<string>();
  const uniqueQuestions: SocionicsQuestion[] = [];
  for (const q of combined) {
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      uniqueQuestions.push(q);
    }
  }
  
  // Register them in the master registries so they resolve
  uniqueQuestions.forEach(q => {
    if (!QUESTION_BY_ID.has(q.id)) {
      ALL_QUESTIONS.push(q);
      QUESTION_BY_ID.set(q.id, q);
    }
  });
  
  return uniqueQuestions; 
}

// Fallback dynamic generator matching Model A contrasting functions (No variables / type leaked)
export function generateDynamicDiscriminator(type1: SocionicsType, type2: SocionicsType): SocionicsQuestion[] {
  const slots1 = TIM_MODELS[type1].slots;
  const slots2 = TIM_MODELS[type2].slots;
  
  const contrastElements: Array<{ element: InformationElement; deltaWeight: number }> = [];
  const slotVal = {
    base: 10,
    creative: 8,
    demonstrative: 6,
    ignoring: 4,
    role: 2,
    mobilizing: 1,
    suggestive: 0,
    polr: -5
  };
  
  ELEMENTS.forEach(element => {
    const slot1 = (Object.keys(slots1) as ModelASlot[]).find(k => slots1[k] === element)!;
    const slot2 = (Object.keys(slots2) as ModelASlot[]).find(k => slots2[k] === element)!;
    const val1 = slotVal[slot1] ?? 0;
    const val2 = slotVal[slot2] ?? 0;
    const diff = Math.abs(val1 - val2);
    if (diff > 0) {
      contrastElements.push({ element, deltaWeight: diff });
    }
  });
  
  contrastElements.sort((a,b) => b.deltaWeight - a.deltaWeight);
  
  // Slice 3 elements for the 3 dynamic tie-breaker questions!
  const picked = contrastElements.slice(0, 3);
  const result: SocionicsQuestion[] = [];
  
  picked.forEach((p, index) => {
    const element = p.element;
    const valType1 = slots1.base === element || slots1.creative === element;
    
    const strongType = valType1 ? type1 : type2;
    const weakType = valType1 ? type2 : type1;
    
    const keywords = ELEMENT_KEYWORDS[element];
    const stmt = `Dalam ranah ${keywords.toLowerCase()}, kecenderungan kognitif dan responsku biasanya terasa jauh lebih dekat ke...`;
    const id = `tb_dyn_${type1.toLowerCase()}_${type2.toLowerCase()}_0${index + 1}`;
    
    result.push({
      id,
      kind: "tie-break",
      element,
      channel: "producer",
      scale: "comparison",
      context: `Bayangkan kejadian ini: Situasi sekitar menuntut keputusan cepat terkait: ${keywords}.`,
      statement: `Saat keadaan lingkungan menuntut kita menyikapi atau mengekspresikan hal di atas, mana gaya respon harian yang mewakili dirimu?`,
      sourceSituation: `Pembeda dinamis ${type1} - ${type2}`,
      sourceResponse: stmt,
      responseFocus: `resolusi ${type1}:${type2}`,
      tieBreak: { a: strongType, b: weakType },
      options: [
        {
          value: 1,
          label: "Sangat jarang mengandalkan hal ini dalam merespons situasi harian",
          meaning: "Kamu merasa ranah kognisi ini bukanlah area kekuatan batin harianmu, and cenderung menyerahkannya ke orang lain.",
          reaction: "kamu memilih membiarkan rekan kerja mengatasi area ini, menunggu instruksi kerja, and memilih posisi netral."
        },
        {
          value: 2,
          label: "Hanya sesekali memakai cara ini ketika benar-benar dituntut keadaan",
          meaning: "Kamu menyadari area ini terkadang dibutuhkan, tetapi bukan pilihan pertama yang spontan terlaksana dalam batinmu.",
          reaction: "kamu menyimak dinamika kelompok sekilas, membiarkan orang lain memimpin, and bersikap santun menyelesaikannya."
        },
        {
          value: 3,
          label: "Seimbang di tengah, memakai keduanya secara proporsional sesuai kebutuhan ruangan",
          meaning: "Kedua gaya bertindak ini dirasakan sama-sama hidup di dalam batinmu tergantung kondisi darurat lapangan.",
          reaction: "kamu memperhatikan getaran batinmu harian, merasa kedua opsi ini bisa saling melengkapi hidupmu."
        },
        {
          value: 4,
          label: "Cukup sering and terbiasa menerapkan penanganan ini dengan percaya diri",
          meaning: "Kamu merasa andal and percaya diri di area kognisi ini, serta lancar merumuskan draf solusi praktisnya.",
          reaction: "kamu mengambil andil peran aktif di area ini, perlahan-lahan menata keadaan agar kembali kondusif."
        },
        {
          value: 5,
          label: "Sangat spontan, andal, and menjadi tumpuan tindakan utama saya",
          meaning: "Kemampuan ini adalah salah satu tumpuan kekuatan jiwamu, yang refleks berjalan di garis terdepan secara andal.",
          reaction: "kamu langsung bergerak cepat memimpin aksi utama di area ini, mendedikasikan fokusmu murni untuk kelancarannya."
        }
      ]
    });
  });
  
  return result;
}

function generateTieBreakQuestions(): SocionicsQuestion[] {
  return PAIR_DISCRIMINATORS;
}

function generateOptions(element: InformationElement, channel: MeasurementChannel, scale: ScaleType, situation: string): QuestionOption[] {
  return [1, 2, 3, 4, 5].map((val) => {
    const customMeaning = getMeaning(element, channel, val);
    const customReaction = getReaction(element, channel, val, situation);

    return {
      value: val as any,
      label: SCALE_LABELS[scale][val - 1] || "",
      meaning: customMeaning,
      reaction: customReaction
    };
  });
}

function getMeaning(element: InformationElement, channel: MeasurementChannel, value: number): string {
  const chPhrase = CHANNEL_PHRASES[channel] || "";
  const elPhrase = ELEMENT_PHRASES[element] || "";

  if (channel === "mask" || channel === "dismissive") {
    if (value === 1) return `Kapasitas ini hampir tidak pernah kamu jadikan jangkar harian. Kepalamu memilih melangkah di koridor lain yang terasa jauh lebih natural. ${chPhrase}`;
    if (value === 2) return `Kamu sesekali memakai pola ini di forum sosial jika keadaannya mendesak, tapi sesudahnya kamu buru-buru melepasnya kembali. ${chPhrase}`;
    if (value === 3) return `Kemampuannya lumayan terlatih dalam takaran terbatas. Kadang ${elPhrase}, kadang kamu memilih mengabaikannya begitu saja. ${chPhrase}`;
    if (value === 4) return `Pola ini cukup sering and konsisten kamu gunakan dalam rutinitas kerja harianmu untuk menjaga kualitas hasil. ${chPhrase}`;
    return `Pola ini sudah melekat kuat bagai bayangan kedua. Kamu mempraktikkannya dengan sangat fasih tanpa rasa canggung lagi. ${chPhrase}`;
  }

  if (channel === "producer" || channel === "background" || channel === "flexible") {
    if (value === 1) return `Proses ini bukan default awal dari sirkuit batinmu. Di situasi seperti ini, ${elPhrase}, tapi biasanya baru tergerak setelah ada dorongan keras dari luar. ${chPhrase}`;
    if (value === 2) return `Kamu sebenarnya bisa melakukan hal ini, but kepalamu butuh pause, mengambil napas, and menyusun urutan aksi dulu sebelum bergerak. ${chPhrase}`;
    if (value === 3) return `Mode ini bekerja naik-turun tergantung iklim batin. Kadang kamu langsung bergerak refleks, kadang kamu merasa terlalu malas and lelah. ${chPhrase}`;
    if (value === 4) return `Pola ini sangat dekat dengan respons spontan pertamamu pas mendapati pemicu di lapangan, sebelum sempat menyusun draf pertahanan. ${chPhrase}`;
    return `Pola ini sudah kayak autopilot murni. Begitu ada sinyal di lapangan, ${elPhrase}, bergerak tepat pada detiknya tanpa butuh berpikir keras lagi. ${chPhrase}`;
  }

  if (channel === "threat") {
    if (value === 1) return `Tuntutan semacam ini sama sekali tidak menyentuh alarm trauma atau kerentanan batinmu. Kamu tetap bisa berpikir and melangkah dengan tenang. ${chPhrase}`;
    if (value === 2) return `Kamu merasakan sedikit gesekan kecil and kaget di dada, tapi kamu masih gampang mengontrol diri and kembali tersenyum rileks. ${chPhrase}`;
    if (value === 3) return `Alarm darurat di kepalamu mulai berdering samar. Sebagian energi batinmu terserap untuk memikirkan ketakutan salah atau dipermalukan. ${chPhrase}`;
    if (value === 4) return `Tuntutan ini gampang menekan tombol sensitifmu. Kamu mulai memasang tameng pelindung batin, gerakmu kaku, and pandanganmu waspada. ${chPhrase}`;
    return `Tuntutan ini langsung memicu benturan di alarm terdalammu. Otakmu bisa beku mendadak, and kamu hanya pengin melarikan diri and menghilang seketika. ${chPhrase}`;
  }

  if (channel === "receiver") {
    if (value === 1) return `Bantuan di wilayah ini terasa biasa saja and tidak banyak menyembuhkan keresahan batinmu. Kamu tetap condong memegangnya sendiri. ${chPhrase}`;
    if (value === 2) return `Ada sedikit rasa adem, but tidak sampai bikin kepalamu bersedia melepas kendali and menuruti arahan orang tersebut sepenuhnya. ${chPhrase}`;
    if (value === 3) return `Bantuan orang tersebut lumayan menenangkan jiwamu. Kamu merasa tidak sendirian and bisa mencairkan ketegangan sedikit demi sedikit. ${chPhrase}`;
    if (value === 4) return `Bantuan ini sangat mencerahkan batinmu. Begitu orang yang mengerti cara kerjanya masuk, awan mendung di kepalamu langsung tersapu bersih. ${chPhrase}`;
    return `Bantuan ini menyentuh sarang kesembuhan terdalammu. Rasanya bagaikan ada mukjizat yang mengangkat tumpukan batu berat yang selama ini menyiksa batinmu. ${chPhrase}`;
  }

  if (channel === "aspiration") {
    if (value === 1) return `Pujian atau sorotan di area ini terasa hambar and lewat begitu saja di telinga tanpa mengubah suasana batin and rencanamu harian. ${chPhrase}`;
    if (value === 2) return `Opini atau pujian itu enak didengar sekilas, but tidak sampai mengobarkan api ambisi atau membuatmu ingin berlatih melipatgandakan performa. ${chPhrase}`;
    if (value === 3) return `Pujian ini lumayan merangsang gairah kerjamu. Kadang kamu merasa bangga, kadang kamu bersikap biasa saja and mengabaikan pujian tersebut. ${chPhrase}`;
    if (value === 4) return `Pujian ini sangat menyentuh bagian dari dirimu yang haus akan pengakuan. Kamu bertekad merawat kemampuan ini and melatihnya lebih giat. ${chPhrase}`;
    return `Pujian and validasi di area ini masuk ke tingkat batin yang sangat dalam. Kamu bisa mereplay kalimatnya berkali-kali di kepala and merasa luar biasa bangga. ${chPhrase}`;
  }

  return "";
}

function getReaction(element: InformationElement, channel: MeasurementChannel, value: number, situation: string): string {
  if (channel === "mask") {
    const list = [
      "kamu memilih menutup wajah datar and bersikap dingin apa adanya tanpa repot memasang topeng hiasan sosial.",
      "kamu baru mencoba menyembulkan senyum tipis setelah melirik ekspresi orang lain, tapi kata-katamu masih tertahan kaku.",
      "kamu dengan luwes memainkan peran tangguh itu selama satu jam, lalu langsung pamit pulang and merebahkan tubuh di kamar.",
      "kamu sangat mahir menjaga intonasi and pilihan kalimat di depan umum agar dinilai hebat meski pundakmu terasa tegang cape.",
      "kamu langsung memasang mode performa prima, menyalami semua orang, and mempertahankan retorika anggunmu secara konstan berkilau."
    ];
    return `Pas lagi menghadapi ${situation.toLowerCase()}, ${list[value - 1]}`;
  }

  if (channel === "threat") {
    if (value === 1) return `Pas lagi menghadapi ${situation.toLowerCase()}, kamu tetap tersenyum rileks, bernapas dalam and teratur, and mengambil satu langkah tanpa sibuk membela diri.`;
    if (value === 2) return `Pas lagi menghadapi ${situation.toLowerCase()}, kamu sempat mengerutkan dahi and menggigit bibir sekilas, but detik berikutnya tetap kembali tenang.`;

    const bases: Record<string, string> = {
      Ne: "kamu langsung menutup buku, membelalakan mata tegang, and menolak keras mengeluarkan alternatif karena merasa semua celah masa depan terkunci",
      Ni: "kamu bolak-balik menatap jarum jam berkali-kali, napasmu memburu kaku, and kamu nge-blank setengah mati karena draf waktu tim bergeser kacau",
      Se: "bahumu langsung membeku kaku, suaramu mendadak bergetar meninggi, and kamu mundur setengah langkah ke sudut pintu karena merasa teritorialmu diinjak kasar",
      Si: "kamu memegang perut and dahi tegang, napasmu pendek terengah-engah, and kamu tidak sanggup lagi fokus karena seluruh indra sensor ruangan terasa menyiksa tubuh",
      Te: "pas jemarimu gempar kaku mengetik komputer, kepalamu terasa pusing berat and kamu mendadak menutup spreadsheet karena takut angka kelayakan modalmu hancur salah",
      Ti: "kamu langsung menghapus coretan panah di papan tulis, menatapi draf dengan pandangan kosong beku, and nge-blank saat ditantang menunjukkan dasar aturan pasal",
      Fe: "ekspresi senyummu mendadak kaku beku bagai patung lilin, nadamu dibuat-buat gemetar, and kamu menunduk dalam-dalam menghindari sorrot mata kawan yang gaduh",
      Fi: "kamu menggenggam ponsel erat-erat, matamu menatap tajam dingin defensif, and kamu menutup percakapan secara kilat karena merasa ketulusan moralmu diinjak"
    };
    const b = bases[element] || "";
    if (value === 3) return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, meski kamu masih memaksakan diri menyelesaikan langkah pentingnya.`;
    if (value === 4) return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, lalu kamu langsung memundurkan badan and ingin menyerahkan tanggung jawab sepenuhnya.`;
    return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, kemudian kamu langsung melangkah pergi meninggalkan ruangan untuk menyelamatkan batinmu.`;
  }

  if (channel === "receiver") {
    if (value === 1) return `Pas lagi menghadapi ${situation.toLowerCase()}, bantuan itu kamu dengar sekilas but kamu tetap melanjutkan mengetik and membereskannya sendiri.`;
    if (value === 2) return `Pas lagi menghadapi ${situation.toLowerCase()}, kamu mengambil sebagian kecil draf bantuan orang itu, mengangguk sopan, lalu kembali memegang kendali sisa tugas sendirian.`;

    const bases: Record<string, string> = {
      Ne: "bahumu langsung melemas rileks, kamu membuka binder and lari menunjuk draf alternatif baru dengan antusias gembira",
      Ni: "tensi kepalamu turun, kamu mengembuskan napas panjang mencerahkan batin, and mengikuti ritme lini masa yang disusun kembali oleh partner setim secara tenang",
      Se: "postur tegangmu mencair rileks, kamu mundur satu langkah memberikan panggung teritorial secara lego kepada orang kuat yang melindungimu tulus",
      Si: "rahang and lehermu yang kaku melonggar rileks, kamu menerima cangkir teh hangat and bersandar santai di sofa empuk membiarkan badanmu kembali bertenaga",
      Te: "kamu langsung menyerahkan semua draf data kotor ke partner tangguh tersebut, and batinmu terasa plong melihat spreadsheets di layar rampung cepat",
      Ti: "kamu mengangguk takjub, tersenyum lebar menatap bagan hierarki yang dirapikan si partner tepercaya, and merasa tidak perlu lagi mengurai rumus tiada akhir",
      Fe: "wajahmu langsung ceria bersinar, kamu ikut tertawa kencang and melontarkan banyolan baru, energi mencerahkan batin mengalir deras memenuhi ruangan",
      Fi: "matamu basah berkaca-kaca karena terharu tulus, kamu menurunkan bahu and mulai bicara jujur empat mata menceritakan seluruh beban komitmenmu"
    };
    const b = bases[element] || "";
    if (value === 3) return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, tetapi kamu masih menyimpan draf kendali kecil di tanganmu.`;
    if (value === 4) return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, and kamu gampang mengikuti seluruh arahan partner tanpa resistensi batin lagi.`;
    return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, sampai-sampai kawan di sebelahmu bisa menangkap dengan jelas perubahan melow and legonya batinmu.`;
  }

  if (channel === "aspiration") {
    if (value === 1) return `Pas lagi menghadapi ${situation.toLowerCase()}, kamu cuma mengangguk, bilang makasih datar tanpa ekspresi, and langsung beralih membaca draf kerjaan lain.`;
    if (value === 2) return `Pas lagi menghadapi ${situation.toLowerCase()}, kamu melempar senyuman tipis sekilas and menyimpan draf validasinya di ingatan tanpa mengubah rutinitas harimu.`;

    const bases: Record<string, string> = {
      Ne: "kamu refleks membuka laci meja kerja, menulis draf skema inovatif baru di binder, and berbisik semangat ke kawan kerja: 'Aku punya ide gila baru lagi!'",
      Ni: "wajahmu mendongak penuh binar visioner, kamu diam-diam mencatat kalimat pujiannya di diary, and makin yakin dengan insting ramalan arah momentum berikutnya",
      Se: "punggungmu langsung tegak dominan, kamu memegang meja dengan mantap, and langsung membelah tugas kepemimpinan taktis di krisis dengan nada mantap",
      Si: "kamu tersenyum lebar penuh harmoni, mengusap leher hangat, and menjadi makin bersemangat merawat detail kesehatan jasmani and kasur santaimu harian",
      Te: "tanganmu langsung membuka file data excel baru, menaruh target hemat biaya yang lebih ambisius, and pengin membuktikan keahlian efensimu kembali",
      Ti: "kamu merapikan letak binder, membersihkan whiteboards, and tersenyum bangga meletakkan bagan hierarki penjelasmu di display layar monitor kelompok",
      Fe: "kamu tertawa lepas penuh pesona, menepuk-nepuk pundak teman setim, and melempar gurauan segar membakar energi keceriaan barisan kelompok harian",
      Fi: "kamu tertegun haru di bangku, menatap punggung sahabat setiamu penuh cinta tulus, and bertekad menjaga komitmen persahabatan rahasia kalian selamanya"
    };
    const b = bases[element] || "";
    if (value === 3) return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, walau dorongan semangatnya bisa surut kembali pas malam sepi tiba.`;
    if (value === 4) return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, lalu kamu sengaja mencari peluang proyek lain untuk mematangkan performamu.`;
    return `Pas lagi menghadapi ${situation.toLowerCase()}, ${b}, and getaran bangga di dalam dadamu terus terngiang-ngiang mencerahkan batinmu harian.`;
  }

  // Fallback to dynamic real action list depending on element
  const actions: Record<InformationElement, string[]> = {
    Ne: [
      "kamu menggeleng pasrah, menatap tumpukan binder di hadapanmu, and terdiam kaku malas memikirkan jalan pintas lain harian.",
      "kamu melirik satu alternatif, mengangguk kecil, and berhenti untuk mencatat draf kecil di pojokan binder.",
      "kamu mengetuk-ngetuk whiteboard, mengajukan satu draf alternatif baru, and menimbang reaksi tim dengan tenang.",
      "kamu langsung bergeser condong, merebut pulpen and mencoret draf rencana A, lalu merapikan draf rute cabang B di memo kerja.",
      "tanganmu gemetar bersemangat membuat peta kemungkinan ormind map bercabang lebar, matamu menyala terang, and suaramu meledak gembira menceritakan peluang baru."
    ],
    Ni: [
      "kamu terus melangkah cepat menubruk target kerjaan tim, mengabaikan aba-aba jeda, sampai urusan harianmu bertabrakan kacau.",
      "kamu berhenti mengecek layar gawai sekilas, menghela napas pasrah, and memilih menunggu sampai tempo drama reda.",
      "kamu memejamkan mata tiga detik, mendengarkan detak jam dinding, and menimbang kapan waktu terbaik untuk bersuara tegas.",
      "kamu menahan tangan teman sekerjamu dengan satu sentuhan mantap, and berkata lirih mantap: 'Sabar, jangan sekarang, bergerak lurus besok fajar'.",
      "tubuhmu bergeming santai di tengah hiruk-pikuk kepanikan, bibirmu tersenyum tipis meramalkan hasil badai kerja secara akurat, and langkah kakimu meluncur rileks di waktu paling krusial."
    ],
    Se: [
      "kamu memundurkan bahu meliuk pasrah, menunduk menatap alas sepatu, and membiarkan orang keras itu menunjuk-nunjuk wajahmu.",
      "kamu menggeser tubuh ke balik punggung teman, pura-pura sibuk membolak-balik draf laporan agar luput dari sorot konfrontasi lapang.",
      "kamu menegakkan dagu sekilas, menaruh tangan tegak di pinggang celana, and berdiri bersiap seandainya tim memintamu bentrok.",
      "kamu melangkah tegap ke titik tengah barisan kerja, memukul meja satu kali dengan mantap, and membagi draf koordinasi aksi dengan suara berat.",
      "matamu menatap menusuk langsung ke bola mata penentang, bahumu tegak menguasai batas teritorial fisik, and tanganmu memindahkan kursi penghalang dengan satu sentakan bertenaga."
    ],
    Si: [
      "kamu bertahan duduk membungkuk di kursi kayu yang keras and panas selama tiga jam lembur, and baru sadar setelah punggungmu terasa linu lumpuh.",
      "kamu mengusap bahu lelah, memutar-mutar pergelangan kaki, and melanjutkan mengetik spreadsheets di ruangan pengap bising.",
      "kamu berdiri sejenak untuk membetulkan letak bantal kursi, meregangkan lengan, and meminum segelas air hangat agar badan rileks.",
      "kamu langsung menutup tirai jendela yang menyilaukan mata, menurunkan suhu AC ruangan kerja tim, and bersandar rileks di bantal sofa.",
      "tanganmu refleks menyingkirkan kertas berantakan, menyalakan diffuser aroma melati, memejamkan mata menikmati pijatan punggung, and tersenyum lega menikmati kesegaran fisik."
    ],
    Te: [
      "kamu hanya mendengar perdebatan panjang tanpa berani membuka kalkulator and menyuarakan kerugian biaya secara riil fungsional.",
      "kamu meluncurkan spreadsheets sekilas, melihat grafik kerugian, but malas meneruskan karena kepala terasa lelah memikirkan hitungan.",
      "kamu merapikan kacamata, membuka lembar draf pengeluaran tim rapat, and mulai menjumlahkan margin keuntungan logis.",
      "kamu menunjuk detail waktu pengerjaan yang tidak efektif langsung di komputer layar monitor, and menuntut direktur memangkas bonus tim.",
      "jarimu mengetor cepat ringkas tombol angka kalkulator, melemparkan print-out rincian biaya riil langsung ke tengah barisan meja rapat, and memangkas proses pemborosan energi."
    ],
    Ti: [
      "kamu membiarkan puluhan file kerjaan bertumpuk tumpang tindih acak-acakan di layar desktop komputer and mencari manual draf target lewat search.",
      "kamu mencoret-coret kotak and panah keterkaitan kecil di pinggir memo, lalu menghela dahi lelah and menutup kembali kodenya.",
      "kamu menyimak diam, mencocokkan pasal and aturan di pikiran autopilot-mu, and menandai bagian alur sistem yang cacat logika.",
      "kamu mengambil spidol hitam, menggambar peta hierarki bagan and draf taksonomi aturan tim secara presisi and simetris di papan tulis.",
      "tanganmu langsung membuat tabel and skema urut alfabetis, menyodorkan draf definisi and kategori presisi yang anti-kontradiksi, and langsung merapikan regulasi."
    ],
    Fe: [
      "kamu duduk kaku and dingin tanpa bersuara, membiarkan keheningan ruangan tim kerja terasa mencengkeram and canggung menakutkan.",
      "kamu memaksakan senyum tipis yang terlihat gemetar and pura-pura membaca binder agar tidak perlu melirik kawan rapat.",
      "kamu mengangguk ramah, ikut melepas tawa sedang saat ada teman setim melempar guyonan, and menjaga agar ekspresimu tidak murung kaku.",
      "kamu melontarkan tawa riang mendongak tinggi, menepuk pundak rekan kerja, and menceritakan anekdot hangat yang langsung mencairkan kebekuan batin tim.",
      "suaramu langsung naik satu oktaf memandu tepuk tangan heboh, tubuh and ekspresi wajahmu menular ceria membara, and semua orang di barisan ikut melompat gembira."
    ],
    Fi: [
      "kamu membiarkan orang luar itu mengorek rahasia pribadimu and baru merasa tidak nyaman setelah batas integritas moralmu telanjur dinjak kasar.",
      "kamu bergeser sepuluh sentimeter menjauh di sofa, membalas pertanyaan pribadinya secara santun and dingin, berharap ia mengerti batas jarak.",
      "kamu mendengarkan keluhan teman empat mata secara tenang tanpa buru-buru menghakimi, and memiringkan kepala menjaga keheningan tulus batin.",
      "kamu langsung membisikkan kata-kata hangat penenang, menggenggam telapak tangan sahabatmu tulus, and meyakinkannya bahwa air matanya aman bersamamu.",
      "kamu menghentikan tatapan mata seketika, rahang and wajahmu mengeras dingin kaku layaknya es dari kutub, and secara fisik kamu langsung berbalik berdiri melangkah pergi menjauh."
    ]
  };

  const currentList = actions[element] || [];
  const suffixValue = currentList[value - 1] || "";

  if (channel === "dismissive") {
    const listSuffixes = [
      ", and batinmu memang tidak punya minat sedikit pun buat memikirkan kegunaannya.",
      ", but kamu cepat mengoper urusan itu ke sekretariat karena bukan prioritas utamamu.",
      ", lalu kamu mengecek sekilas seberapa genting situasinya sebelum melengos acuh.",
      ", kemudian setelah tanggung jawab selesai kamu langsung berpaling memikirkan mimpimu.",
      ", and kamu menyelesaikan tugas melow itu dengan dingin and rapi tanpa mau membicarakannya kembali."
    ];
    const cleanSuffix = suffixValue.endsWith(".") ? suffixValue.slice(0, -1) : suffixValue;
    return `Pas lagi menghadapi ${situation.toLowerCase()}, ${cleanSuffix}${listSuffixes[value - 1]}`;
  }

  if (channel === "background") {
    const listSuffixes = [
      ", though proses autopilot itu hampir tidak berjalan di belakang layar batinmu.",
      ", but kamu masih perlu konsentrasi penuh and menyerap energi cadangan demi menstabilkan langkah.",
      ", and kamu sering baru sadar belakangan bahwa autopilot tubuhmu sudah menyelesaikannya diam-diam.",
      ", sementara fokus kognitif and pikiran utamamu tetap mengembara bebas di urusan karir besar.",
      ", bahkan sebelum kepalamu sadar, tangan and raga autopilot-mu sudah bergerak merapikannya secara kilat."
    ];
    const cleanSuffix = suffixValue.endsWith(".") ? suffixValue.slice(0, -1) : suffixValue;
    return `Pas lagi menghadapi ${situation.toLowerCase()}, ${cleanSuffix}${listSuffixes[value - 1]}`;
  }

  return `Pas lagi menghadapi ${situation.toLowerCase()}, ${suffixValue}`;
}

export const ALL_QUESTIONS: SocionicsQuestion[] = [];

// Systematic build execution
const createAllQuestions = () => {
  const core = generateCoreQuestions();
  const holdout = generateHoldoutQuestions();
  const tieBreak = generateTieBreakQuestions();
  ALL_QUESTIONS.push(...core, ...holdout, ...tieBreak);
};

createAllQuestions();

export const getCoreQuestions = () => ALL_QUESTIONS.filter((q) => q.kind === "core");
export const getHoldoutQuestions = () => ALL_QUESTIONS.filter((q) => q.kind === "holdout");
export const getTieBreakQuestions = () => ALL_QUESTIONS.filter((q) => q.kind === "tie-break");
export const QUESTION_BY_ID = new Map(ALL_QUESTIONS.map((q) => [q.id, q] as const));

// Standar backup mapping
export const SOCIONICS_QUESTIONS = getCoreQuestions();
