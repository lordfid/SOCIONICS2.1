/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Profile, QuadraType, ModelAPosition, IntertypeRelation } from '../types';

export const SOCIONICS_PROFILES: Record<string, Omit<Profile, 'modelA'>> = {
  ILE: {
    id: 'ILE',
    fullname: 'Intuitive Logical Extratim',
    alias: 'The Seeker / Don Quixote',
    quadra: 'Alpha',
    mbtiEquivalent: 'ENTP',
    enneagramTrend: 'Tipe 7w8 atau 7w6 (Enthusiast / Innovator)',
    description: 'Bapak Intelektual Seratus Ide tapi Selalu Kehilangan Kabel Casan. Orang yang memulai omongan tentang cuaca di kafe, lalu lima menit kemudian sudah menjelaskan arsitektur kota terapung di Mars and kenapa kalender Masehi harus segera diganti.',
    stereotypes: [
      'Debat kusir jam 2 pagi soal terminologi.',
      'Meja belajar berkabut tumpukan buku and draf proyek terbengkalai.',
      'Suka bikin solusi super canggih buat masalah yang sebenarnya nggak ada.'
    ],
    vibe: 'Canggung-aktif, energik pas dapet topik seru, tatapan matanya suka jelalatan nyari jalan pintas atau pintu rahasia di ruangan.',
    hiddenThoughts: 'Mau menyelesaikan proyek ini sekarang, tapi tiba-tiba ada sepuluh kemungkinan lain yang jauh lebih menantang batin.',
    pros: [
      'Gampang adaptasi sama info baru.',
      'Pemecah masalah and pencari celah ulung pas yang lain pada mentok.',
      'Sabar and gak pernah ngehakimi keanehan orang.'
    ],
    cons: [
      'Sering ngilang tanpa kabar pas urusan sudah masuk ke bagian detail membosankan.',
      'Suka bikin janji besar pas lagi antusias, terus lupa pas ketertarikannya pindah.',
      'Ngeubah kritik kelakuan jadi debat kusir semantik.'
    ],
    roast: 'Kamu bisa merancang skema masa depan energi nuklir umat manusia, tapi butuh ekspedisi tim penyelamat SAR nasional cuma buat nyari kunci motormu yang barusan kamu letakin di samping cangkir kopi.',
    brutalConclusion: 'ILE adalah pengembara ide yang sanggup menemukan dua puluh jalan keluar, memilih ketiganya sekaligus, lalu lupa sebenarnya tadi dirinya mau pergi ke mana.',
    recommendations: {
      books: ['Sapiens (Yuval Noah Harari)', 'Gödel, Escher, Bach (Douglas Hofstadter)'],
      movies: ['Inception (2010)', 'Everything Everywhere All at Once (2022)'],
      music: ['Hans Zimmer - Interstellar OST', 'Daft Punk (Electronic/Synth Fusion)'],
      careers: ['Inovator Start-up', 'Analis Strategis', 'Riset Produk', 'Penulis Fiksi Spekulatif'],
      destinations: ['Reykjavik, Islandia (Eksplorasi Alam & Geothermal)', 'Akihabara, Tokyo'],
      gifts: ['Notebook kulit berkelas', 'Puzzles mekanis kayu rumit', 'Kamera saku fungsional'],
      healthyCircles: 'Teman-teman yang menghargai ledakan idemu tanpa memaksa kamu langsung merapikan rak sepatu semenit kemudian (sirkel SEI / LII / IEE yang suportif).',
      experiment7Days: [
        'Tulis 10 ide gila per hari di buku catatan kecil, tanpa harus mewujudkannya semuanya sekaligus.',
        'Selesaikan 1 tugas administratif biasa (bayar kost/rapikan berkas) sebelum jam 10 pagi tanpa diselingi buka Tab Chrome baru!'
      ],
      hobbies: ['Bermain Catur Kilat', 'Fotografi Jalanan', 'Coding Proyek Iseng', 'Nyobain rute lari baru'],
      appearanceTips: 'Sentuhan kasual tapi berkelas. Kaos polo tipis dipadu jaket denim gelap and sepatu kets bersih—biar kelihatan pinter tapi nggak terlalu asal-asalan.',
      roleModels: ['Albert Einstein (Fisikawan)', 'Nikola Tesla (Inovator Sejati)', 'Richard Feynman']
    },
    behavioralDynamics: {
      lifestyle: 'Penuh kekacauan kreatif. Menganggap kenyamanan sebagai hal sekunder, tapi batinnya gampang bermanja-manja kalau disediain makanan enak and sofa empuk oleh kawan dekat.',
      thinkingStyle: 'Melompat, bercabang, and cenderung membangun menara logika tinggi sebelum memeriksa apakah tanah pondasinya cukup kuat.',
      interpersonalApproach: 'Mendekati orang dengan badai rasa penasaran: nanya masa kecil, pendapat tentang teori konspirasi, tapi mendadak menjauh pas lawan bicaranya mulai curhat melodrama terlalu sendu.',
      worldview: 'Melihat dunia sebagai simulasi eksperimen raksasa penuh peluang tak terbatas yang tak boleh dikurung oleh dogma kaku atau birokrasi kuno.',
      angerStyle: 'Lebih banyak menyela kata, menertawakan ketidaklogisan argumen musuh, lalu melempar lima teori sekaligus biar musuh pusing sendiri. Setelah bertengkar langsung bersikap biasa lagi seolah tak terjadi apa-apa.',
      affectionStyle: 'Mengirimkan link artikel aneh, menawarkan petualangan baru, and mengingat detail ganjil kelakuanmu yang bahkan dirimu sendiri nggak sadar.',
      animosityStyle: 'Melecehkan kecerdasan musuh secara sarkas, memperlakukan mereka kayak tanaman hias yang nggak bisa mikir.',
      envyStyle: 'Tiba-tiba pengen jadi orang paling kompeten and menarik perhatian di ruangan saat ada saingan intelektual masuk.',
      ambitionStyle: 'Ingin dikenal sebagai penemu pintu keluar baru ketika semua orang hanya melihat dinding.'
    }
  },
  SEI: {
    id: 'SEI',
    fullname: 'Sensory Ethical Introtim',
    alias: 'The Epicurean / SFI / Dumas',
    quadra: 'Alpha',
    mbtiEquivalent: 'ISFJ',
    enneagramTrend: 'Tipe 9w8 atau 2w3 (Peacemaker / Helper)',
    description: 'Manusia tersantai yang dapat menemukan sofa ternyaman dalam radius lima puluh meter and menciptakan suasana santai tanpa perlu program kerja formal. Selalu memastikan perut semua orang kenyang and suhu ruangan asri.',
    stereotypes: [
      'Memilih tempat duduk murni berdasarkan keempukan bantal.',
      'Menjawab pesan penting hanya saat suasana batinnya lagi rileks.',
      'Menghindari percakapan berfirasat berat yang merusak mood bersantai.'
    ],
    vibe: 'Lembut, ramah, wajahnya santai penuh senyum geli mengamati kelakuan berisik manusia di sekitarnya.',
    hiddenThoughts: 'Kalian silakan debat kusir geopolitik sampai subuh, kue buatan saya sudah masak and saya mau selonjoran nonton serial hangat.',
    pros: [
      'Ahli menciptakan keindahan visual, kenyamanan fisik, and estetika kamar.',
      'Sangat peka and cepat meredam ketegangan emosional kawan.',
      'Humor taktisnya selalu membuat suasana kumpul terasa ringan.'
    ],
    cons: [
      'Sering berkata setuju di depan muka orang demi kedamaian batin, tapi gak pernah dikerjain.',
      'Suka menghukum orang secara pasif-agresif lewat penarikan kehangatan and senyuman.',
      'Sangat keras kepala and defensif menyangkut rutinitas kenyamanan fisiknya.'
    ],
    roast: 'Kamu bisa menjadikan penghindaran konflik sebagai gaya hidup estetik yang nampak asri. Masalah karir belum selesai, tanggung jawab terbengkalai, tapi lilin kamarmu sudah wangi vanila and lagu latarmu syahdu parah.',
    brutalConclusion: 'SEI adalah penyelamat sejati semua orang dari kepanikan stres gila, kecuali stres yang timbul karena mereka tidak kunjung dapet kepastian dari jawabanmu.',
    recommendations: {
      books: ['The Art of Simple Living (Shunmyo Masuno)', 'The Secret Garden (Frances Hodgson Burnett)'],
      movies: ['Little Forest (2018)', 'The Grand Budapest Hotel (2014)'],
      music: ['Lofi Chillhop Beats', 'Lagu Folk Akustik yang menenangkan'],
      careers: ['Desainer Interior', 'Ahli Kuliner / Chef', 'Konselor Hubungan', 'Pekerja Pelayanan Sosial'],
      destinations: ['Ubud, Bali (SPA & Sawah Asri Hening)', 'Kyoto, Jepang'],
      gifts: ['Lilin aromaterapi lavender premium', 'Cangkir keramik buatan tangan', 'Guling bulu angsa ultra-empuk'],
      healthyCircles: 'Kawan-kawan yang ramah tanpa banyak menuntut panggung ambisi kaku (sirkel ILE / LII / ESE).',
      experiment7Days: [
        'Katakan tidak pada satu ajakan nongkrong yang sebenarnya menyiksa energi fisikmu hari ini.',
        'Selesaikan satu rincian administrasi finansial kusam yang kamu tunda seraya ditemani es krim.'
      ],
      hobbies: ['Membuat Kue', 'Merawat Tanaman Hias', 'Menata Kamar Tidur', 'Nge-SPA harian'],
      appearanceTips: 'Kain berbahan rajut lembut, warna-warna bumi hangat (beige, terracotta). Santai tapi tetap sedap didekap.',
      roleModels: ['Paul McCartney (Musisi)', 'Alexander Dumas', 'Marcello Mastroianni']
    },
    behavioralDynamics: {
      lifestyle: 'Pencari ketenangan harian, peka estetika visual, and menghargai kedamaian sirkel.',
      thinkingStyle: 'Konkret berbasis sensasi riil saat ini, ogah pusing memikirkan teori masa depan.',
      interpersonalApproach: 'Mendekat lewat suguhan camilan lezat and candaan santai, menjauh secara senyap kalau suasananya menuntut kompetisi brutal.',
      worldview: 'Dunia ini sudah terlalu bising; tugas kita adalah memperhalus perjalanan and menikmati indahnya jeda waktu harian.',
      angerStyle: 'Senyum masih terpasang di bibir tapi getaran batinnya mendingin tajam, and komunikasi memendek drastis. Disarankan meditasi asri.',
      affectionStyle: 'Membikinkan teh hangat, menyelimutimu saat ketiduran di sofa, and mengingat makanan kesukaan batinmu.',
      animosityStyle: 'Memutus total layanan kenyamanan and memperlakukan musuh kayak lemari kayu tak bernyawa.',
      envyStyle: 'Iri melihat orang agresif pamer kemakmuran karir di medsos, tapi cepat diatasi dengan cara rebahan nyaman.',
      ambitionStyle: 'Membangun kerajaan kenyamanan tidur kecil mandiri yang asri and bebas dari gangguan preman luar.'
    }
  },
  ESE: {
    id: 'ESE',
    fullname: 'Ethical Sensory Extratim',
    alias: 'The Enthusiast / Hugo',
    quadra: 'Alpha',
    mbtiEquivalent: 'ESFJ',
    enneagramTrend: 'Tipe 2w1 atau 3w2 (Helper / Achiever)',
    description: 'Polisi Ketertiban Suasana and Panitia Acara Utama yang Nggak Pernah Secara Resmi Dipilih. Datang langsung ngerapiin letak piring, nanya kenapa ada kawan yang bengong di pojokan, lalu ngerasa punya kewajiban moral biar semua orang nggak kelaparan.',
    stereotypes: [
      'Ngasih reaksi wajah lengkap 3D buat tiap gosip.',
      'Suka ngirim makanan ke tetangga atau kawan tanpa alasan ultah.',
      'Paling nggak tahan melihat suasana canggung di lift atau grup WhatsApp.'
    ],
    vibe: 'Terlihat jelas, terdengar nyaring, ekspresi mukanya super hidup and jalannya ringan kayak penari balet masuk panggung kuis.',
    hiddenThoughts: 'Kok dia mukanya datar kayak pemakaman gitu sih? Apa dia marah sama aku? Aku harus segera mencairkan batinnya!',
    pros: [
      'Pemandu komunitas yang sangat andal menyatukan manusia.',
      'Sangat hangat, perhatian, and responsif terhadap kebutuhan praktis orang.',
      'Mampu membuat acara kumpul-kumpul biasa terasa seperti festival besar.'
    ],
    cons: [
      'Menuntut partisipasi emosional aktif dari seluruh peserta (antipati suara datar).',
      'Mengubah bantuan sukarela menjadi katalog utang budi moral jangka panjang.',
      'Suka melebarkan masalah pribadi menjadi tontonan panggung publik.'
    ],
    roast: 'Kamu menganggap setiap wajah datar di kafe sebagai panggilan darurat emosional batin yang harus segera diselamatkan. Kadang orang mukanya datar bukan karena sedih, tapi mukanya emang lagi tidak menjalankan pertunjukan.',
    brutalConclusion: 'ESE adalah tipe orang yang akan memastikan seluruh tamu merasa dilibatkan kuis, termasuk kawan introvert yang aslinya sudah bersembunyi di toilet biar nggak usah dilibatkan.',
    recommendations: {
      books: ['How to Win Friends and Influence People (Dale Carnegie)', 'Les Misérables (Victor Hugo)'],
      movies: ['Mamma Mia! (2008)', 'The Sound of Music'],
      music: ['Pop Ceria Upbeat', 'Broadway Musicals yang megah'],
      careers: ['Event Organizer', 'Human Resources', 'Public Relations', 'Pendidik/Guru', 'Chef/Hospitality Owner'],
      destinations: ['Theme Park seru', 'Pasar Kuliner Malam Rame'],
      gifts: ['Kue buatan sendiri dikemas cantik', 'Voucher belanja bersama', 'Aksesori rumah yang hangat'],
      healthyCircles: 'Orang-orang jujur yang menghargai pelayananmu tanpa memanfaatkan kebaikan hatimu untuk urusan transaksional.',
      experiment7Days: [
        'Biarkan satu hari penuh berlalu tanpa menanya "kamu gak apa-apa?" ke orang yang memasang wajah datar.',
        'Belajar bilang "nggak" ketika ditawari memimpin kepanitiaan baru di komplek.'
      ],
      hobbies: ['Memasak porsi besar', 'Mengorganisir kumpul keluarga', 'Bernyanyi di paduan suara', 'Dekorasi ruangan'],
      appearanceTips: 'Gaya klasik-elegan dengan aksen aksesoris berwarna cerah (seperti jam merah atau syal pastel).',
      roleModels: ['Jules Verne (Penulis)', 'Johann Strauss (Komposer)', 'Hugh Jackman']
    },
    behavioralDynamics: {
      lifestyle: 'Sangat dinamis, sibuk mengurus kenyamanan orang lain, and tak betah diam sendirian.',
      thinkingStyle: 'Subjektif emosional, digerakkan nilai kepatutan sosial and kepedulian nyata.',
      interpersonalApproach: 'Langsung menyapa akrab, mengulurkan bimbingan praktis, and mengabsen kehadiran teman.',
      worldview: 'Masyarakat akan harmonis kalau etika pergaulan dijunjung tinggi and semua orang mau saling menyapa hangat.',
      angerStyle: 'Suara meninggi, mencecar kesalahan, and emosi ditumpahkan langsung di forum umum agar semua orang menyaksikan ketidakadilan musuh.',
      affectionStyle: 'Membetulkan posisi selimut tidurmu, membawakan buah naga segar asri, and selalu mengabari keadaan.',
      animosityStyle: 'Menyindir keras di muka umum atau nulis status bernada kritik moral terselubung di medsos.',
      envyStyle: 'Iri melihat kawan lain dapet sanksi denda dimaafkan begitu saja gara-gara mukanya pasrah melodrama.',
      ambitionStyle: 'Membangun dinasti pengaruh and lingkaran barisan loyalitas yang paling kokoh di komplek.'
    }
  },
  LII: {
    id: 'LII',
    fullname: 'Logical Intuitive Introtim',
    alias: 'The Analyst / Robespierre',
    quadra: 'Alpha',
    mbtiEquivalent: 'INTP',
    enneagramTrend: 'Tipe 5w4 atau 5w6 (Observer / Specialist)',
    description: 'Kolektor Kejelasan Definisi Kata and Arsitek Struktur. LII adalah orang yang bisa mendengar cerita tentang perselingkuhan yang mengharukan, lalu mendadak memotong pembicaraan karena penggunaan kata "selalu" tidak konsisten secara logika.',
    stereotypes: [
      'Nge-koreksi premis debat padahal orangnya lagi curhat emosional.',
      'Suka bikin klasifikasi draf folder di laptop berdasarkan rumpun filsafat.',
      'Paling tidak tahan melihat kebebasan dogma tanpa argumen teoretis.'
    ],
    vibe: 'Tenang, waspada, kokoh di balik kesederhanaan berjarak, tatapan mengevaluasi ketepatan argumen.',
    hiddenThoughts: 'Definisi keadilan sosialmu barusan secara prinsip indah, tapi kerangka berpikir dasar logikamu rumpang total.',
    pros: [
      'Kejernihan kognitif mutlak dalam mengurai keruwetan masalah.',
      'Sangat demokratis, adil, and menjunjung kesetaraan hakiki.',
      'Konsisten memegang prinsip berpikir and mandiri secara intelektual.'
    ],
    cons: [
      'Gampang membeku/panik batin menghadapi luapan emosional histeris.',
      'Suka mengurung diri and abai terhadap penampilan fisik di luar.',
      'Bicaranya kaku bersambungan mirip draf manual instruksi alat berat.'
    ],
    roast: 'Kamu bisa menjelaskan secara ilmiah kenapa hidup ini tidak boleh dipetakkan ke dalam kategori simpel kaku, lalu kamu menghabiskan akhir pekan memasukkan seluruh jenis teh di kamarmu ke dalam sub-folder Excel.',
    brutalConclusion: 'LII adalah pengurai kekacauan konsep yang sanggup menebak akhir takdir peradaban, tapi batinnya lumpuh seketika pas kawan bertanya "kamu lagi mikirin apa?"',
    recommendations: {
      books: ['Principia Mathematica (Bertrand Russell)', 'Critique of Pure Reason (Immanuel Kant)'],
      movies: ['The Imitation Game (2014)', 'A Beautiful Mind (2001)'],
      music: ['Johann Sebastian Bach (Mathematical Classical)', 'Fira Code playlist'],
      careers: ['Peneliti Fundamental', 'Sistem Analis', 'Matematikawan', 'Software Architect', 'Akademisi Filsafat'],
      destinations: ['München, Jerman (Kota Teknologi & Museum)', 'Pojok perpustakaan sunyi'],
      gifts: ['Buku filsafat bersampul kaku', 'Server mini pribadi', 'Pembersih sela keyboard taktis'],
      healthyCircles: 'Kawan-kawan yang menghargai presisi pemikiranmu tanpa memaksa kamu mengobrol cemas harian (sirkel ILE / SEI / ESE).',
      experiment7Days: [
        'Dengarkan curhat kawan sampai rampung tanpa sekalipun mengoreksi tata bahasanya!',
        'Sengaja pergi nongkrong santai tanpa membawa analisis performa kelakuan di kepalamu.'
      ],
      hobbies: ['Menulis Opini Panjang', 'Menganalisis Kode Sistem', 'Menggambar Diagram Alur', 'Belajar Bahasa Kuno'],
      appearanceTips: 'Kemeja linen lurus, celana chino abu-abu gelap, and jam tangan minimalis fungsional.',
      roleModels: ['Rene Descartes (Filsuf)', 'Immanuel Kant', 'Albert Einstein']
    },
    behavioralDynamics: {
      lifestyle: 'Tenang, minimalis, and mengabdi sepenuhnya untuk kebenaran logika internal.',
      thinkingStyle: 'Sangat jernih, deduktif, and mengupas masalah sampai ke akar pondasi definisinya.',
      interpersonalApproach: 'Menjaga jarak batin aman yang dingin di awal, baru melunak pas kawan tersebut andal memegang janji.',
      worldview: 'Alam semesta ini dijalankan oleh jalinan kebenaran logika yang kokoh, and tugas kita adalah meruntuhkan bias dogma palsu.',
      angerStyle: 'Sikap makin kaku formal, intonasi mendingin tajam, and membedah kelemahan argumen lawan secara runut. Disarankan meditasi kamar.',
      affectionStyle: 'Membimbingmu memahami urusan sains rumit secara sabar, and mendedikasikan waktu logikanya demi merawat sistem belajarmu.',
      animosityStyle: 'Mengabaikan argumen lawan karena dinilai tidak valid secara metodologi ilmiah.',
      envyStyle: 'Iri melihat pembawa omong kosong dapet sorot pemujaan sirkel komplek. Saran: sadari keandalanmu adalah intan sejati.',
      ambitionStyle: 'Mewujudkan kerangka berpikir orisinal baru yang bisa dipakai menata jalannya dunia.'
    }
  },
  EIE: {
    id: 'EIE',
    fullname: 'Ethical Intuitive Extratim',
    alias: 'The Performer / Hamlet',
    quadra: 'Beta',
    mbtiEquivalent: 'ENFJ',
    enneagramTrend: 'Tipe 4w3 atau 3w4 (Individualist / Achiever)',
    description: 'Sutradara Panggung Tragedi Kehidupan Sehari-hari. EIE tidak mengalami hari buruk biasa; dirinya sedang menjalani babak kedua dari naskah klasik tentang loyalitas, kesetiaan batin yang dikhianati, and konsekuensi sejarah roda takdir.',
    stereotypes: [
      'Menjadikan keterlambatan pesan WhatsApp sebagai simbol pengkhianatan nilai.',
      'Suka bikin kutipan bermakna filosofis tinggi di status Instagram.',
      'Paling ahli membuat semua orang merasa terlibat dalam urusan besar.'
    ],
    vibe: 'Dramatis, elegan, matanya menyapu tajam kayak elang nyari reaksi penonton di bangku bioskop ruangan.',
    hiddenThoughts: 'Aku tahu ada ketegangan batin terselubung di antara kita, mari tunjukkan drama ini ke panggung biar semua orang sadar keseriusannya.',
    pros: [
      'Sangat karismatik, visioner, and sanggup membakar semangat massa.',
      'Mampu menyuarakan ketegangan batin yang dihindari semua orang.',
      'Peka banget terhadap perkembangan waktu and momentum hubungan.'
    ],
    cons: [
      'Suka sengaja memancing konflik demi merasakan getaran emosi yang nyata.',
      'Menganggap ketidaksetujuan ide biasa sebagai serangan personal terhadap harga diri.',
      'Melakukan manipulasi suasana menggunakan narasi moral kepahlawanan dirinya.'
    ],
    roast: 'Kamu bisa memprediksi keruntuhan hubungan asmara kawanmu berdasarkan getaran nada bicaranya barusan. Padahal kasirnya tidak sedang memberi pertanda buruk maut; mesin gesek kartu kreditnya memang lagi eror.',
    brutalConclusion: 'EIE adalah tipe orang yang tidak sekadar meninggalkan ruangan rapat, melainkan menutup pintu secara dramatis ala adegan pemungkas sebelum babak iklan TV.',
    recommendations: {
      books: ['The Grapes of Wrath (John Steinbeck)', 'Hamlet (William Shakespeare)'],
      movies: ['The Gilded Cage', 'Tarkovsky filmography / Melancholia (2011)'],
      music: ['Opera Megah', 'Lagu bernada sendu gotik eksklusif', 'Orchestra instrumental penuh tegangan'],
      careers: ['Aktor/Sutradara Panggung', 'Politisi Karismatik', 'Spesialis Kampanye Kreatif', 'Psikolog Massa'],
      destinations: ['Venesia, Italia (Romantisisme Kanal Tua)', 'Situs Teater Kuno Yunani'],
      gifts: ['Pena bulu angsa atau lilin segel lilin merah mewah', 'Syall sutra vintage bercorak simbolis', 'Buku harian bersampul kulit eksklusif'],
      healthyCircles: 'Teman-teman tangguh berkepribadian kokoh (seperti sirkel LSI / SLE) yang bisa meredam drama emosimu tanpa ikut panik terbawa arus udara.',
      experiment7Days: [
        'Biarkan satu hari penuh berlalu tanpa membuat postingan status melodrama tentang makna terselubung di medsos.',
        'Selesaikan satu tugas bersih-bersih dapur fisik secara konkret demi membiasakan batin berteman dengan realitas biasa.'
      ],
      hobbies: ['Menulis Puisi/Naskah', 'Nonton Festival Film Seni', 'Koleksi Barang Vintage', 'Debat Teatrikal'],
      appearanceTips: 'Gaya pakaian dramatis-eksklusif. Kemeja hitam satin pas badan, blazer motif unik, and parfum beraroma kayu cendana pekat yang meninggalkan jejak aroma di ruangan.',
      roleModels: ['William Shakespeare (Sastrawan)', 'Adolf Hitler? No, Charlie Chaplin (Seni Kedalaman Emosi)', 'Frederic Chopin']
    },
    behavioralDynamics: {
      lifestyle: 'Penuh intensitas batin, menuntut kedalaman arti, and ogah hidup dalam keseharian monoton membosankan.',
      thinkingStyle: 'Subjektif-simbolis, menghubungkan kejadian acak sekarang dengan pola takdir kosmis masa depan.',
      interpersonalApproach: 'Mendekat lewat tatapan mata intens and percakapan malam berat, menjauh (ghosting) kalau lawan bicaranya dinilai dangkal and dingin kayak robot besi.',
      worldview: 'Hidup ini adalah pertempuran moral berkelanjutan antara pahlawan and penjahat nilai sejati, and netralitas adalah kejahatan paling besar.',
      angerStyle: 'Mengemas konflik ke dalam tuntutan moral sejarah, menempatkan musuh sebagai tokoh jahat pengorbanan batin, and berteriak dramatis. Disarankan olahraga kardio biar batin tenang.',
      affectionStyle: 'Mdedikasikan lagu khusus buat kisah cinta kalian, membela kehormatanmu dengan berani di depan publik, and membuat jalinan asmara terasa abadi.',
      animosityStyle: 'Melabeli musuh sebagai pengkhianat peradaban and memutus akses hubungan secara teatrikal.',
      envyStyle: 'Iri pas orang lain dianggap memiliki cinta yang jauh lebih tulus and dalam. Saran: sadari keaslian batinmu sudah cukup orisinal.',
      ambitionStyle: 'Meninggalkan jejak sejarah emosi yang bakal dikenang and dibicarakan orang bahkan setelah dirinya wafat.'
    }
  },
  LSI: {
    id: 'LSI',
    fullname: 'Logical Sensory Introtim',
    alias: 'The Structurist / Maxim Gorky',
    quadra: 'Beta',
    mbtiEquivalent: 'ISTJ',
    enneagramTrend: 'Tipe 1w9 atau 6w5 (Reformer / Guardian)',
    description: 'Konstitusi Berjalan dengan Sepatu Rapi. Manusia paling ingat kesepakatan ronda malam komplek tiga bulan lalu yang kawan lain bahkan mengiranya cuma candaan obrolan santai di pos kamling.',
    stereotypes: [
      'Nge-katalog letak remot AC and gantungan kunci secara saklek.',
      'Suka bikin denda buat anggota kost yang telat buang sampah.',
      'Paling benci sama ketidakteraturan, keributan gak jelas, and orang plin-plan.'
    ],
    vibe: 'Kokoh, tegas, gerakannya hemat tapi bertujuan jelas, and tatapan matanya sedisiplin inspektur militer.',
    hiddenThoughts: 'Kenapa orang dewasa harus berkali-kali diingatkan aturan mematikan lampu setelah keluar dari kamar mandi? Sungguh tidak tertib.',
    pros: [
      'Sangat disiplin, andal dalam situasi krisis, and punya kontrol diri baja.',
      'Menjaga standar operasional and ketertiban kelompok dengan adil.',
      'Pelindung terpercaya bagi orang-orang lemah di sekelilingnya.'
    ],
    cons: [
      'Gampang berubah kasar and represif kalau otoritas aturannya dipertanyakan.',
      'Sangat sulit bertoleransi sama metode baru yang belum masuk daftar SOP resmi.',
      'Suka berasumsi buruk pada kebebasan spontan kawan introvert.'
    ],
    roast: 'Kamu tidak keras kepala; kenyataan saja di lapangan yang terus-menerus gagal mengikuti Standar Operasional Prosedur (SOP) otakmu. Kalau dunia gak sejalan, jelas yang bermasalah adalah dunianya.',
    brutalConclusion: 'LSI adalah tipe orang yang sanggup merubah obrolan arisan ringan menjadi undang-undang dasar lengkap dengan sanksi pidana pelanggaran kedaulatan warga komplek.',
    recommendations: {
      books: ['The Prince (Niccolò Machiavelli)', 'On War (Carl von Clausewitz)'],
      movies: ['Inspector Maigret series', 'The Gendarme of Saint-Tropez (1964)'],
      music: ['Marches Militer Klasik', 'Gothic Metal / Industrial yang berirama presisi'],
      careers: ['Pemeriksa Keuangan / Auditor', 'Perwira Militer / Polisi', 'Sistem Administrator', 'Apoteker Presisi', 'Manager Operasional'],
      destinations: ['Jenewa, Swiss (Kota Hukum Internasional)', 'Museum Militer Klasik'],
      gifts: ['Kotak perkakas pertukangan lengkap baja premium', 'Jam tangan militer tahan banting guncangan water-resistant', 'Agenda kulit berencana kalender super-rapi'],
      healthyCircles: 'Teman-teman asri yang bisa menghargai ketertibanmu tanpa merusak jiwa spontan mereka (sirkel EIE / SLE yang asyik).',
      experiment7Days: [
        'Sengaja biarkan satu tumpukan baju kotor terletak di kasur selama 12 jam tanpa langsung dibereskan secara agresif pusing batin!',
        'Biarkan kawanmu mengubah jadwal nongkrong mendadak tanpa kamu marahi pasal kesepakatannya.'
      ],
      hobbies: ['Menembak Sasaran', 'Pembuatan Model Miniatur Kayu', 'Restorasi Barang Rusak', 'Berolahraga Kebugaran'],
      appearanceTips: 'Potongan rambut cepak/rapi, serasi, fungsional-minimalist. Sepaket kemeja oxford katun kaku, celana katun lurus, and sepatu kulit hitam mengkilap dipoles rapi.',
      roleModels: ['Nikita Mikhalkov (Sutradara/Aktor)', 'Johann Sebastian Bach', 'Margaret Thatcher']
    },
    behavioralDynamics: {
      lifestyle: 'Sangat terstruktur, mandiri, and mempertahankan garis batas wilayah miliknya dengan ketat.',
      thinkingStyle: 'Sistemik, logis-praktis, and membedah masalah berdasarkan bagan instruksi formal.',
      interpersonalApproach: 'Menjaga jarak batin aman yang dingin di awal, sangat formal, baru melunak pas tahu kawan tersebut taat komitmen kerja.',
      worldview: 'Dunia ini hanya bisa selamat dari kehancuran absolut kalau ada hukum, penegak sanksi tegas, and disiplin ketat bagi semua warga.',
      angerStyle: 'Rahang mengeras rapat, intonasi suara memendek tajam, and instruksi berubah menjadi perintah mutlak. Jika dilanggar siap-siap adu fisik.',
      affectionStyle: 'Menjaga keselamatan fisikmu, membetulkan genteng rumah yang bocor, and merawat urusan administrasi pajakmu tanpa pamrih kata berbunga.',
      animosityStyle: 'Mencatat daftar kesalahan pelanggaran aturanmu secara rapi di arsip memori batinnya, and memberikan hukuman dingin.',
      envyStyle: 'Iri melihat kawan teledor yang dapet kelonggaran aturan terus dari bos. Saran: sadari kelonggaran kadang perlu buat dinamika batin.',
      ambitionStyle: 'Menegakkan pilar keadilan sistemik and ketertiban hakiki di tempat kerjanya.'
    }
  },
  SLE: {
    id: 'SLE',
    fullname: 'Sensory Logical Extratim',
    alias: 'The Organizer / Zhukov',
    quadra: 'Beta',
    mbtiEquivalent: 'ESTP',
    enneagramTrend: 'Tipe 8w7 atau 8w9 (Challenger / Leader)',
    description: 'Panglima Perang Teritorial Tanpa Pasukan Resmi. SLE masuk ke ruangan and secara alami langsung menakar: siapa yang megang kendali sejati di sini, siapa yang cuma banyak bacot, and wilayah mana yang bisa direbut sebelum rapat minggu depan.',
    stereotypes: [
      'Suka menantang adu argumen langsung di forum publik.',
      'Gaya bahasa tubuh dominan and nggak sungkan merebut ruang fisik kursi.',
      'Sangat cepat mengambil alih komando krisis pas yang lain pada bingung.'
    ],
    vibe: 'Kuat, kokoh, berdiri tegak tanpa keraguan sekelumit pun, bahasa tubuhnya memancarkan aura "ini wilayah kekuasaanku".',
    hiddenThoughts: 'Kalau kalian kelamaan berdebat kusir tidak jelas, mending aku potong sekarang and aku pimpin komandonya biar urusan cepat kelar.',
    pros: [
      'Sangat tangguh, berani mengambil risiko besar, and efisien dalam krisis maut.',
      'Pelindung baja bagi sirkel dekat and orang-orang yang berada di bawah tanggung jawabnya.',
      'Mengubah hambatan berat jadi tantangan seru yang harus ditaklukkan.'
    ],
    cons: [
      'Gampang banget nindas and meremehkan kelemahan batin orang lain.',
      'Ogah menerima jawaban "nggak" kalau hasrat kekuasaannya sudah menetapkan target.',
      'Sulit minta maaf secara tulus tanpa menyelipkan argumen pembenaran taktis.'
    ],
    roast: 'Kamu sanggup merubah permainan monopoli santai keluarga menjadi operasi intelijen ekspansi wilayah geopolitik. Tidak semua hal di muka bumi butuh pemenang, bawahan, and demonstrasi intimidasi fisik, kawan.',
    brutalConclusion: 'SLE adalah tipe orang yang nggak bakal repot-repot mengetuk pintu kamarmu, karena kakinya sibuk menendang engsel pintu hingga jebol demi kepastian akses.',
    recommendations: {
      books: ['The Art of War (Sun Tzu)', 'Meditations (Marcus Aurelius)'],
      movies: ['Gladiator (2000)', 'The Godfather (1972)'],
      music: ['Hard Rock bertenaga', 'EDM bertenaga bass tinggi', 'Lagu-lagu berderap mars penuh motivasi'],
      careers: ['Direktur Utama Krisis', 'Pakar Negosiasi Konflik', 'Pengusaha Ekspansif', 'Atlet Profesional Tarung', 'Komandan Militer Taktis'],
      destinations: ['Sparta, Yunani (Situs Prajurit Tangguh)', 'Gedung Bursa Saham Wall Street'],
      gifts: ['Aparatus tinju samsak gantung kamar luar biasa kokoh', 'Alat piring panggang BBQ taman stainless steel fungsional', 'Parfum maskulin berkelas bold'],
      healthyCircles: 'Teman-teman lembut berjiwa puitis (seperti sirkel IEI / EIE) yang sabar mendinginkan badai api energimu lewat musik and imajinasi rujukan.',
      experiment7Days: [
        'Sengaja biarkan kawan akrabmu yang memutuskan tempat and menu makan malam tanpa kamu intervensi seujung kuku pun!',
        'Saat mengobrol harian santai, letakkan HP and dengerin kawan tanpa menyelipkan tantangan taruhan kompetitif.'
      ],
      hobbies: ['Bela Diri Praktis (Muay Thai/BJJ)', 'Mengendarai Motor Gede', 'Bermain Game Strategi Perang', 'Petualangan Alam Liar Berisiko'],
      appearanceTips: 'Gaya sporty-tegas and modis. Jaket bomber gelap kualitas premium, kemeja rajut ketat menunjukkan kontur otot tubuh, and sepatu sneakers lari tangguh.',
      roleModels: ['Georgy Zhukov (Panglima Legendaris)', 'Napoleon Bonaparte', 'Arnold Schwarzenegger']
    },
    behavioralDynamics: {
      lifestyle: 'Penuh persaingan, aktif bergerak, and ogah hidup berpangku tangan merenungi nasib di kamar.',
      thinkingStyle: 'Pragmatis-taktis, langsung menusuk ke sasaran inti masalah and menghitung kekuatan musuh.',
      interpersonalApproach: 'Mendekat dengan jabat tangan kencang and tatapan uji kekuatan, menjauh secara tegas kalau kawan tersebut dinilai tidak berani mempertahankan batas pribadinya.',
      worldview: 'Hidup ini adalah arena turnamen tinju raksasa berkelanjutan, and siapa pun yang malas menjaga kekuatan fisik and kekuatan finansial bakal habis diinjak roda zaman.',
      angerStyle: 'Tatapan mata memicing fokus, aura batin menegang kayak singa siap menerkam, and meledak dalam perdebatan agresi langsung. Disarankan olahraga tinju beladiri taktis.',
      affectionStyle: 'Membela kehormatanmu secara fisik dari gangguan preman, membagikan tips saham prospektif, and merancang draf rencana pensiun masa tua asri kalian bersama.',
      animosityStyle: 'Memutus total jalinan kerja sama bisnis and membiarkan musuh tersisih dari rantai kemakmuran tanpa perlu agresi jalanan.',
      envyStyle: 'Iri melihat kawan lain dapet sanksi denda dimaafkan begitu saja gara-gara mukanya pasrah melodrama.',
      ambitionStyle: 'Menjadi puncak rantai makanan pimpinan eksekutif and pilar keamanan utama kelompoknya.'
    }
  },
  IEI: {
    id: 'IEI',
    fullname: 'Intuitive Ethical Introtim',
    alias: 'The Romantic / Esenin',
    quadra: 'Beta',
    mbtiEquivalent: 'INFJ',
    enneagramTrend: 'Tipe 4w5 atau 9w1 (Individualist / Peacemaker)',
    description: 'Penyair Kabut Masa Depan and Sutradara Imajinasi Senyap. Kelihatannya sedang berdiam diri santai di sudut sofa ruangan kafe, padahal separuh jiwanya lagi jalan-jalan di tahun 2050 sambil memutar latar musik sedih tentang kehancuran kkota.',
    stereotypes: [
      'Ngirim kode duka lewat lagu-lagu Spotify misterius di status.',
      'Suka menunda urusan kerjaan konkret demi menunggu hadirnya "momen takdir".',
      'Paling peka mendeteksi perubahan angin ketegangan emosional hubungan.'
    ],
    vibe: 'Klasik, melayang, anggun, tatapan matanya seolah menyimpan rahasia dunia yang sengaja enggan dijelaskan.',
    hiddenThoughts: 'Aku sudah memprediksi kehancuran pola hubungan kalian berdua sejak hari pertama kenalan, tapi biarlah takdir berjalan mengajari.',
    pros: [
      'Imajinatif tinggi, peka nuansa kemanusiaan, and punya intuisi waktu luar biasa tepat.',
      'Sanggup memengaruhi gejolak suasana hati kelompok tanpa agresi langsung.',
      'Sangat berempati and memahami sisi paling rapuh batin manusia.'
    ],
    cons: [
      'Suka memelihara penderitaan batin (romantisasi kesedihan) sebagai bukti kedalaman jiwa.',
      'Sangat malas and gampang lumpuh pas dituntut bertanggung jawab urusan finansial harian.',
      'Suka menghilang misterius (ghosting) saat diuji kelalaian komitmen harian.'
    ],
    roast: 'Kamu bisa menghabiskan waktu seminggu penuh mengurung diri cuma buat menunggu "hari yang tepat" and pencahayaan kamar yang pas untuk mematangkan batin. Padahal naskah hidup tak peduli dekorasi estetikmu, kawan.',
    brutalConclusion: 'IEI adalah tipe orang yang tampak misterius karena separuh komunikasinya dikirim melalui cuaca batin yang tak terbaca.',
    recommendations: {
      books: ['The Gilded Cage', 'The Esoteric Hermeticism', 'The Prophet (Kahlil Gibran)'],
      movies: ['The Gilded Cage', 'Tarkovsky filmography / Melancholia (2011)'],
      music: ['Indie Folk Dreamy Melow', 'Ambient space music', 'Lagu-lagu puitis bernuansa sunyi'],
      careers: ['Penulis Novel Fantasi', 'Konselor Psikologi Batin', 'Kurator Galeri Seni', 'Penerjemah Bahasa Isyarat Budaya'],
      destinations: ['St. Petersburg, Rusia (Sastra & Musim Dingin)', 'Kuil Kuno Sunyi'],
      gifts: ['Lampu tidur proyektor rasi bintang galaksi kamar', 'Buku antologi puisi klasik langka', 'Aroma parguman teh putih (White Tea) estetik'],
      healthyCircles: 'Kawan-kawan tangguh berdaya dorong baja (seperti sirkel SLE / LSI) yang ngebantu kamu mendarat nyata ke realitas tanpa merusak mimpi-mimpimu.',
      experiment7Days: [
        'Selesaikan satu rincian transaksi kuangan tepat waktu pada hari pertama tanpa menunggu tanggal ganjil mistis!',
        'Ngobrol langsung secara verbal dengan tetangga komplek rumah selama 5 menit tanpa menggunakan isyarat mata misterius.'
      ],
      hobbies: ['Menulis Jurnal Mimpi', 'Koleksi Barang Vintage Antik', 'Meramal Tarot Iseng', 'Nonton Film Indie Sunyi'],
      appearanceTips: 'Gaya vintage-misterius. oversized cardigan rajut pastel, syal wol lembut, kacamata bulat.',
      roleModels: ['Sergey Esenin (Penyair Rusia)', 'Fyodor Dostoyevsky', 'Hans Christian Andersen']
    },
    behavioralDynamics: {
      lifestyle: 'Pelik, puitis, mengabaikan urusan fisik praktis dapur, and betah berselancar di samudera fantasi jiwanya.',
      thinkingStyle: 'Asosiatif, temporal-intuisi, mengalir lambat laun kayak riak air takdir.',
      interpersonalApproach: 'Mendekat lewat kiriman pesan lagu bermakna ambigu, menjauh kalau suasananya menuntut kompetisi brutal.',
      worldview: 'Realitas kasat mata ini cuma kulit luar palsu sementara roda kehidupan seutuhnya digerakkan oleh harmoni getaran batin.',
      angerStyle: 'Sembunyi di dalam kamar, menulis catatan batin sendu, and mengabaikan chat WhatsApp musuh secara dingin.',
      affectionStyle: 'Membisikkan puisi indah ciptaan pribadinya khusus buat kamu, dengerin seluruh curhat rahasia batinmu berjam-jam, and menatapmu penuh binar syahdu.',
      animosityStyle: 'Mengutuk eksistensi jiwa musuh lewat keheningan spiritual yang menakutkan batin.',
      envyStyle: 'Iri melihat kawan lain nampak asyik and lincah berdansa di keramaian dunia tanpa beban pikiran rumit.',
      ambitionStyle: 'Menjadi rujukan inspirasi batin and pembisik takdir rahasia di balik layar bagi para pemimpin besar dunia.'
    }
  },
  SEE: {
    id: 'SEE',
    fullname: 'Sensory Ethical Extratim',
    alias: 'The Leader / Napoleon',
    quadra: 'Gamma',
    mbtiEquivalent: 'ESFP',
    enneagramTrend: 'Tipe 2w3 atau 8w7 (Helper / Challenger)',
    description: 'SEE bisa memasuki kelompok baru and dalam waktu singkat mengetahui siapa berpengaruh, siapa berseteru, siapa membutuhkan validasi, and siapa diam-diam ingin diajak pergi.',
    stereotypes: [
      'Mengetahui siapa sebenarnya dekat meski semua orang bersikap sopan.',
      'Membela orang lain dengan tindakan nyata and bertenaga seketika.',
      'Suka memotong pembicaraan sosial demi memantapkan posisi teritorial.'
    ],
    vibe: 'Terbuka, berani bertenaga, sadar penampilan, tatapan mata ngebombardir ketulusan batinmu.',
    hiddenThoughts: 'Aku diam bukan karena setuju, tapi aku pengen lihat seberapa jauh bualanmu bisa bertahan.',
    pros: [
      'Radar luar biasa tajam mendeteksi silsilah relasi and ketulusan kawan.',
      'Sangat hangat, supel, and pelindung setia sirikil dekat.',
      'Pragmatis, andal dlm eksekusi taktis, and pandai bernegosiasi.'
    ],
    cons: [
      'Suka menuntut pembuktian kesetiaan ekstrem berkala dari sahabatnya.',
      'Posesif, transaksional, and mengelola rahasia kawan sbg alat tawar.',
      'Cenderung mendikte and meremehkan orang yang bermuka kusam.'
    ],
    roast: 'Kamu menyebut aksi sidak HP pasangan secara diam-diam sebagai "sekadar mawas diri". Kalau kamu harus membagi peta siapa naksir siapa di kantor sebelum jam makan siang, itu bukan firasat lagi. Itu badan intelijen domestik.',
    brutalConclusion: 'SEE adalah tipe orang yang membuat semua kawan merasa dipilih, lalu diam-diam mencatat siapa saja yang tidak memilih memilihnya balik.',
    recommendations: {
      books: ['In War and Piece (Leo Tolstoy)', 'The Art of Persuasion'],
      movies: ['The Great Gatsby (2013)', 'Napoleon (2023)'],
      music: ['R&B Pop sensual berenergi', 'Lagu-lagu pesta dansa disko Latin ceria'],
      careers: ['Politisi Diplomat', 'Spesialis Negosiasi Bisnis', 'Presenter Panggung Hiburan', 'Konsultan Sumber Daya Manusia', 'Pakar Kampanye Massa'],
      destinations: ['Paris, Prancis (Keindahan Estetika & Istana Versailles)', 'Resor Pantai Mewah Ibiza'],
      gifts: ['Parfum branded beraroma sensual tahan lama', 'Aksesori pakaian berani bertenaga', 'Voucher makan malam privat di restoran bintang lima'],
      healthyCircles: 'Teman-teman analitif jernih penenang batin (seperti sirkel ILI / LIE) yang bisa menasehati tindakan finansialmu tanpa kemarahan emosional.',
      experiment7Days: [
        'Belajar menahan diri seharian penuh tanpa memeriksa daftar log telepon masuk pasangan!',
        'Biarkan satu rahasia kawan terkubur aman selamanya di dalam kepalamu tanpa diceritakan ke siapa pun demi bahan obrolan kafe.'
      ],
      hobbies: ['Berdansa Salsa/Samba', 'Mengoleksi Pakaian Desainer', 'Mengatur Rapat Kemitraan', 'Traveling Sosial Mewah'],
      appearanceTips: 'Gaya pakaian berani fitted body, aksen warna emas/krem solid premium.',
      roleModels: ['Julius Caesar', 'Napoleon Bonaparte', 'Elizabeth Taylor']
    },
    behavioralDynamics: {
      lifestyle: 'Pesta kemakmuran relasi, penuh drama cinta tulus, and aktif memimpin jejaring sosial komplek.',
      thinkingStyle: 'Subjektif-politik, mengukur segala sesuatu dari jarak dekat relasi and posisi kekuasaan konkret.',
      interpersonalApproach: 'Mendekat dengan jabat tangan kencang, menjauh seketika pas loyalitas kerjamu diragukan.',
      worldview: 'Dunia ini dijalankan oleh jalinan kepentingan and emosi riil manusia, and tidak ada sistem kaku yang tidak bisa dinegosiasikan pakai karisma.',
      angerStyle: 'Cecaran agresi tajam langsung, membongkar kelemahan moral lawan di depan umum, and memaksa lawan segera bertekuk lutut. Disarankan olahraga tinju beladiri taktis.',
      affectionStyle: 'Membeli unit apartemen buat kenyamanan hari tuamu, melindungimu mati-matian dari cibiran mertua, and meluangkan waktu kencan mewah harian.',
      animosityStyle: 'Memblokir total akses sosial musuh di lingkaran komplek perumahan, and meruntuhkan pengaruh reputasi mereka.',
      envyStyle: 'Iri melihat kawan plin-plan bermuka asri dapet panggung kemuliaan sosial modal senyum palsu.',
      ambitionStyle: 'Membangun dinasti pengaruh and lingkaran barisan loyalitas yang paling kokoh di kotanya.'
    }
  },
  ILI: {
    id: 'ILI',
    fullname: 'Intuitive Logical Introtim',
    alias: 'The Critic / Balzac',
    quadra: 'Gamma',
    mbtiEquivalent: 'INTJ',
    enneagramTrend: 'Tipe 5w6 atau 8w9 (Observer / Challenger)',
    description: 'Bapak Ramalan Kelam and Penasihat Keamanan Hemat Daya. ILI mending duduk diam menyemburkan sinisme di pojokan rapat, memandangi rencana kerjaan kalian yang muluk-muluk, and menunggu bencana kegagalan terjadi biar dia bisa bilang "sudah kuduga sejak awal".',
    stereotypes: [
      'Sinisme humor kering tingkat dewa yang terlambat dicerna orang.',
      'Suka menolak rencana kawan berlibur modal argumen hitungan cuaca and eror maskapai.',
      'Sangat hemat energi batin (gerakannya lambat kayak mode low-power baterai HP).'
    ],
    vibe: 'Dingin, misterius-lelah, tatapan matanya skeptis murni seolah baru bangun dari tidur panjang meratapi nasib dunia.',
    hiddenThoughts: 'Optimisme kalian barusan hanyalah nama sopan untuk ketidaktahuan fakta risiko di lapangan, mari bersiap menikmati pameran kegagalan kalian.',
    pros: [
      'Daya prediksi masa depan luar biasa tajam and akurat.',
      'Sangat realistis, pragmatis, and andal mendeteksi cacat tersembunyi sistem.',
      'Tempat curhat taktis terbaik kalau butuh solusi super-dingin and jujur.'
    ],
    cons: [
      'Suka menjadikan pesimisme and pasivitas batin sbg bukti kebijaksanaan.',
      'Gampang terpuruk jatuh ke lubang melankolia and mengurung diri berhari-hari.',
      'Menyembunyikan kepedulian di balik dinding sinisme menusuk batin.'
    ],
    roast: "Kamu menyebut dirimu 'realistis sejati' karena 'aku kan sudah memperingatkan kalian sejak awal' terdengar jauh lebih terhormat, ketimbang jujur mengakui bahwa kamu terlalu takut mencoba tapi girang pas kawanmu jatuh gagal.",
    brutalConclusion: 'ILI adalah tipe orang yang sanggup membawa payung hitam lebar pas langit lagi cerah terik, lalu nampak kecewa berat pas hujan badai tak kunjung turun buat membuktikan ramalannya.',
    recommendations: {
      books: ['Antifragile (Nassim Nicholas Taleb)', 'Thus Spoke Zarathustra (Friedrich Nietzsche)'],
      movies: ['The Big Short (2015)', 'Blade Runner 2049 (2017)'],
      music: ['Dark Techno minimalis', 'Klasik instrumental piano penuh kesunyian malam'],
      careers: ['Analis Risiko Strategis', 'Manajer Investasi Finansial', 'Ilmuwan Kriptografi', 'Programmer Keamanan Data', 'Penulis Opini Politik'],
      destinations: ['Heidelberg, Jerman (Kota Sunyi Para Filsuf Eksklusif)', 'Kamar Gelap dengan Kopi Hitam'],
      gifts: ['Kaos polos hitam katun bambu super nyaman', 'Kopi robusta organik giling murni tanpa pemanis', 'Alat pembuat kopi presisi Aeropress'],
      healthyCircles: 'Teman-teman produsen tindakan ekspansif (seperti sirkel LIE / SEE) yang ngebantu batinmu berdaya gerak tanpa banyak menuntut panggung keceriaan palsu.',
      experiment7Days: [
        'Saat kawanmu membagikan rencana barunya yang ambisius, tahan dirimu selama 24 jam untuk tidak melontarkan daftar risiko kegagalan konkretnya!',
        'Sengaja pergi jalan kaki di taman kota sore hari tanpa menggunakan headset and biarkan mukamu tersapu semilir angin riil.'
      ],
      hobbies: ['Menulis Opini Kripto/Pasar', 'Membaca Teori Conspirasi Tingkat Tinggi', 'Bermain Game Strategi Sulit', 'Riset Mandiri Sejarah Kuno'],
      appearanceTips: 'Gaya minimalis serba gelap (all-black). Kaos hitam polos dipadu jaket parka gelap fungsional, celana kargo minimalis, and sepatu slip-on kain nyaman.',
      roleModels: ['Friedrich Nietzsche (Filsuf)', 'Karl Gustav Jung', 'Isaac Newton']
    },
    behavioralDynamics: {
      lifestyle: 'Hemat energi, selektif memilih pergaulan kafe, and mengabdi sepenuhnya untuk kebenaran prediksi taktis.',
      thinkingStyle: 'Abstrak-strategis, jernih memandang kecenderungan garis waktu masa depan.',
      interpersonalApproach: 'Menjaga jarak batin super-dingin di awal, baru mendekat pelan-pelan pas lawan bicara dinilai punya otak and gak baperan.',
      worldview: 'Dunia ini diatur oleh siklus pasang surut roda hukum alam yang dingin, and mayoritas manusia hanyalah busa mainan yang bakal hanyut sia-sia.',
      angerStyle: 'Komentar berubah makin keringmenusuk batin, membeberkan katalog kegagalan musuh di masa lalu secara spesifik tanpa emosi histeris. Disarankan meditasi jalan kaki tenang.',
      affectionStyle: 'Membantumu merancang rencana mitigasi krisis finansial karir masa depanmu, and memvalidasi kebenaran teorimu secara objektif.',
      animosityStyle: 'Menunggu waktu membuktikan kebenaran ramalan buruknya terhadap musuh sambil senyum sinis dari kejauhan.',
      envyStyle: 'Iri melihat kawan teledor bermuka asri dapet jalan mulus kemakmuran tanpa perlu mikir keras risiko.',
      ambitionStyle: 'Menjadi penasehat agung di balik tirai yang menuntun jalannya kapal perang ke pelabuhan kemenangan tanpa repot-repot memegang kemudi langsung.'
    }
  },
  LIE: {
    id: 'LIE',
    fullname: 'Logical Intuitive Extratim',
    alias: 'The Entrepreneur / Jack London',
    quadra: 'Gamma',
    mbtiEquivalent: 'ENTJ',
    enneagramTrend: 'Tipe 3w4 atau 8w7 (Achiever / Challenger)',
    description: 'Mesin Lokomotif Efisiensi Finansial Tanpa Tombol Rem. LIE tidak mengenal istilah "waktu luang biasa"; yang ada hanyalah slot waktu kosong di kalender yang belum dimanfaatkan secara strategis untuk ekspansi bisnis.',
    stereotypes: [
      'Gaya berjalan super cepat memotong antrean kafe seolah mengejar kereta takdir.',
      'Suka nanya margin dividen pas lagi nongkrong kumpul sate kawan komplek.',
      'Paling merasa bersalah and batin gelisah kalau tidak produktif selama 12 jam.'
    ],
    vibe: 'Terarah, sibuk, membawa draf proyekan, and suaranya bergaung dinamis mendominasi ruang rapat.',
    hiddenThoughts: 'Gagasan kalian barusan secara konsep indah and estetis nan puitis, tapi di mana lembar kalkulasi laba-rugi operasionalnya bagi kas kita?',
    pros: [
      'Sangat produktif, visioner strategis, and andal mengubah potensi abu-abu jadi mesin duit konkret.',
      'Berani mengambil keputusan sulit and tanggung jawab krisis finansial.',
      'Cepat banget mengevaluasi and belajar dari kegagalan operasional.'
    ],
    cons: [
      'Mengukur kadar kehormatan and kebahagiaan manusia murni dari produktivitas kerja.',
      'Menjadikan hubungan dekat/keluarga sebagai proyek perbaikan sistem yang harus dievaluasi bulanan.',
      'Mengabaikan sinyal sakit tubuh batinnya sendiri sampai fisiknya ambruk stroke mendadak.'
    ],
    roast: 'Kamu tidak pergi berlibur santai ke pantai tropis keindahan alam; kamu memindahkan markas operasional kerjamu ke pinggir pasir kafe, lengkap dengan laptop menyala and lembar koordinasi profit relaksasi tim.',
    brutalConclusion: 'LIE adalah tipe orang yang sanggup merubah bencana banjir komplek perumahan menjadi peluang rintisan start-up penjualan jas hujan and sewa perahu karet instat.',
    recommendations: {
      books: ['Blue Ocean Strategy', 'The Hard Thing About Hard Things (Ben Horowitz)'],
      movies: ['The Secret Life of Walter Mitty (2013)', 'Dead Poets Society'],
      music: ['Indie Pop ceria berwarna-warni', 'Lagu-lagu yang membangkitkan gairah petualangan santai'],
      careers: ['Founder Start-up Ekspedisi', 'Manajer Investasi Ventura Kekayaan', 'Direktur Pengembangan Bisnis Global', 'Konsultan Pemulihan Perusahaan Bangkrut'],
      destinations: ['Shenzhen, Tiongkok (Kota Inovasi Industri Kilat)', 'Pusat Keuangan Singapura'],
      gifts: ['Mouse gaming ergonomis mutakhir penunjang ketepatan klik laptop', 'Smartwatch pengukur detak jantung and kualitas tidur tidur', 'Buku biografi pimpinan dunia bisnis bersampul kaku'],
      healthyCircles: 'Teman-teman penyayang kedamaian emosional (seperti sirkel ESI / ILI) yang ngebantu batinmu meletakkan beban kerjaan sejenak demi menikmati sarapan teh hangat.',
      experiment7Days: [
        'Matikan total laptop and HP pribadi selama 4 jam penuh pada hari Minggu sore, and habiskan waktu makan malam bersama keluarga tanpa bicara cuan!',
        'Saat ada kawan curhat melodrama, dengarkan saja sampai habis tanpa menawarkan 5 draf penyelesaian konkret taktis.'
      ],
      hobbies: ['Berinvestasi Portofolio Saham', 'Menulis Blueprint Bisnis Iseng', 'Olahraga Ekstrim Bersepeda Gunung', 'Mempelajari Hukum Pajak Global'],
      appearanceTips: 'Gaya fungsional-profesional. Setelan kemeja linen gelap berkualitas fitted-body, celana slacks lurus, jam tangan pintar mutakhir, and alas kaki sneakers kulit perkotaan.',
      roleModels: ['Bill Gates (Founder)', 'Steve Jobs', 'Jack London (Penulis Pengembara Tangguh)']
    },
    behavioralDynamics: {
      lifestyle: 'Sangat dinamis, terjadwal ketat, and mengabdi sepenuhnya untuk kebenaran performa kognitif.',
      thinkingStyle: 'Logis-praktis, futuristik-intuisi, menggerakkan sekeliling menuju hasil konkret.',
      interpersonalApproach: 'Mendekat dengan tawaran kerja sama and pembagian peluang bisnis, menjauh kalau kawan tersebut lamban and suka mengeluh mengasihani diri.',
      worldview: 'Dunia ini adalah hamparan peluang produktif tak terbatas yang menanti ditata secara efisien oleh manusia-manusia tangguh berkompetensi tinggi.',
      angerStyle: 'Sikap tidak sabar yang meningkat tajam, mencecar kegagalan konkret and biaya pemborosan taktis musuh secara bertenaga. Disarankan lari maraton harian.',
      affectionStyle: 'Membelikanmu polis asuransi jiwa terbaik, membagikan tips saham prospektif, and merancang draf rencana pensiun masa tua asri kalian bersama.',
      animosityStyle: 'Memutus total jalinan kerja sama bisnis and membiarkan musuh tersisih dari rantai kemakmuran tanpa perlu agresi jalanan.',
      envyStyle: 'Iri melihat kawan malas dapet simpati and popularitas cuma modal ngedumel santai di sosmed.',
      ambitionStyle: 'Mendikte arah peradaban masa depan lewat kesuksesan ekspansi jaringan korporasi and inovasi teknologi miliknya.'
    }
  },
  ESI: {
    id: 'ESI',
    fullname: 'Ethical Sensory Introtim',
    alias: 'The Guardian / Dreiser',
    quadra: 'Gamma',
    mbtiEquivalent: 'ISFP',
    enneagramTrend: 'Tipe 4w5 atau 1w2 (Individualist / Reformer)',
    description: 'Kurator Museum Sejarah Perilaku Buruk and Benteng Moralitas Sunyi. ESI mungkin nampak tenang and santai dengerin obrolan kafe, padahal kepalanya lagi menyidang moral caramu memperlakukan pramusaji, janji telatmu, and caramu menjelekkan nama mantan.',
    stereotypes: [
      'Menyimpan draf kesalahan perilaku musuh dari tahun lalu lengkap dengan tanggal and jam.',
      'Sangat setia kawan (siap pasang badan jagain kamu dari serangan preman komplek).',
      'Punya batas wilayah privasi ketat yang gak boleh sembarangan dilompati kawan baru.'
    ],
    vibe: 'Tenang, waspada, kokoh di balik keanggunan berjarak, tatapan mengevaluasi ketulusan batinmu.',
    hiddenThoughts: 'Aku diam saja dari tadi bukan karena setuju, tapi aku pengen lihat seberapa jauh rasa tak tahu dirimu bakal membawa bualan ini.',
    pros: [
      'Punya kompas moralitas batin yang luar biasa kokoh and konsisten.',
      'Sangat peka mendeteksi kemunafikan, eksploitasi, and topeng palsu manusia.',
      'Pelindung terpercaya bagi sirkel dekatnya.'
    ],
    cons: [
      'Suka menyimpan dendam batin and mengawetkan satu kesalahan orang menjadi dosa abadi.',
      'Sangat curigaan and skeptis berlebih terhadap kebaikan spontan orang baru.',
      'Gampang terjebak posesif transaksional berbungkus norma kepatutan.'
    ],
    roast: 'Kamu bukan pendendam biasa. Kamu cuma mengelola museum sejarah perilaku buruk, lengkap dengan tanggal, konteks, rekonstruksi kejadian, and tur berpemandu saat konflik berikutnya.',
    brutalConclusion: 'ESI adalah tipe orang yang dapat memaafkan kesalahanmu, tapi arsipnya tetap disimpan untuk kepentingan penelitian.',
    recommendations: {
      books: ['Notes from Underground (Fyodor Dostoyevsky)', 'The Financier (Theodore Dreiser)'],
      movies: ['The Godfather (1972)', 'Schindlers List (1993)'],
      music: ['Sergey Rachmaninoff - Piano Concerto No. 2', 'Lagu melankolis klasik biola ganda'],
      careers: ['Konselor Medis', 'Peternak Organik', 'Perwira Keamanan Sistem', 'Apoteker', 'Spesialis Pengasuhan Anak'],
      destinations: ['Salzburg, Austria (Lembah Hijau Tradisional)', 'Kastil Abad Pertengahan Sunyi'],
      gifts: ['Lampu minyak aromaterapi keramik handmade', 'Dompet kulit fungsional kualitas draf ekstrim', 'Buku catatan bersorot asri klasik'],
      healthyCircles: 'Teman-teman taktis berdaya dorong efisiensi (seperti sirkel LIE / SEE) yang ngebantu mencairkan prasangka batinmu.',
      experiment7Days: [
        'Biarkan satu kelalaian kecil kawan bergulir lewat tanpa kamu masukkan ke arsip dossier kelakuan batin!',
        'Ngobrol santai tanpa mencurigai kebaikan tetangga komplek rumah baru.'
      ],
      hobbies: ['Merawat Hewan Jalanan', 'Pembuatan Kaligrafi Tradisional', 'Kerajinan Tangan Kulit', 'Berkebun Sayur'],
      appearanceTips: 'Pakaian terstruktur kaku rapi. Blazer abu-abu gelap katun tebal dipadu kemeja putih kaku fitted-body, and sepatu kulit fungsional.',
      roleModels: ['Vincent van Gogh (Artist)', 'Theodore Dreiser', 'Leonardo DiCaprio']
    },
    behavioralDynamics: {
      lifestyle: 'Teratur, waspada, and mengabdi sepenuhnya demi menjaga keluarga dari polusi luar.',
      thinkingStyle: 'Subjektif-konkret, mengukur kebenaran dari ketulusan tindakan and perilaku asri.',
      interpersonalApproach: 'Menjaga jarak batin waspada, sangat selektif memilih kawan dekat, tapi loyal tiada batas pas gerbang kepercayaannya terbuka.',
      worldview: 'Dunia ini dipenuhi korupsi moral and eksploitasi, tugas kita adalah melindungi sirkel dekat kita dari pengaruh buruk luar.',
      angerStyle: 'Batas wilayah dijelaskan secara dingin-tajam-menusuk langsung ke motif busuk lawan, and komunikasi diputus final seketika. Disarankan olahraga renang hening.',
      affectionStyle: 'Merapikan kekacauan kamarmu secara detail, memasak bubur hangat saat kamu demam, and konsisten melindungimu dari fitnah orang luar.',
      animosityStyle: 'Melemparkan tatapan mematikan dingin, and memperlakukan musuh kayak hantu gentayangan.',
      envyStyle: 'Iri melihat kawan plin-plan bermuka asri dapet panggung kemuliaan sosial modal senyum palsu.',
      ambitionStyle: 'Menjadi benteng pertahanan moral and pilar perlindungan terpercaya bagi keluarganya.'
    }
  },
  LSE: {
    id: 'LSE',
    fullname: 'Logical Sensory Extratim',
    alias: 'The Director / Sherlock Holmes',
    quadra: 'Delta',
    mbtiEquivalent: 'ESTJ',
    enneagramTrend: 'Tipe 1w2 atau 3w4 (Reformer / Achiever)',
    description: 'Tulang Punggung Peradaban Kerja Nyata. LSE adalah orang yang melihat masalah jembatan rusak komplek yang bertahun-tahun didiemin warga, lalu langsung ngerapiin perkakasnya, benerin aspalnya sendiri, sambil mengeluh ngedumel tentang kualitas kerja masyarakat.',
    stereotypes: [
      'Ngebenerin blender rusak kawan komplek sambil mengajari cara pakai mesin yang benar.',
      'Suka nanya draf progres tugas tim tiap 4 jam sekali.',
      'Paling tidak tahan melihat kebebasan malas and orang menunda pekerjaan.'
    ],
    vibe: 'Aktif, necis, tegap, and suaranya lantang fungsional.',
    hiddenThoughts: 'Kalau bukan aku sendiri yang turun tangan ngerjain urusan ini, komplek perumahan ini bakal roboh berantakan dalam tiga hari.',
    pros: [
      'Sangat disiplin, pekerja keras tiada tanding, and selalu menepati janji komitmen.',
      'Mampu merancang sistem kerja praktis yang sangat efisien and berkinerja tinggi.',
      'Menunjukkan kasih sayang lewat pelayanan konkret tanpa drama melodrama.'
    ],
    cons: [
      'Sangat mikromanajemen and suka memaksa semua orang memakai metode kerjanya.',
      'Menganggap istirahat santai di hari Minggu siang sebagai gejala pemalasan jiwa.',
      'Suka menimbun kelelahan and kejengkelan dalam hati sampai akhirnya meledak marah.'
    ],
    roast: 'Kamu membantu kawan tanpa diminta, mengambil alih porsi pengerjaannya, melarang kawan menyentuh perkakasnya karena ngeri salah hasil, lalu kamu marah ngedumel kencang seolah-olah kamu tertindas ngerjain semuanya sendirian. Siklus kerja kerasmu efisien parah.',
    brutalConclusion: 'LSE adalah tipe orang yang sanggup menyelamatkan seluruh hari tersiksa warga komplek, lalu mengajak kawan lain piknik santai bertarif draf operasional.',
    recommendations: {
      books: ['The Lean Startup', 'Sherlock Holmes complete anthology (Arthur Conan Doyle)'],
      movies: ['Sherlock series (BBC)', 'Apollo 13 (1995)'],
      music: ['Classic Symphonic yang berenergi and berstruktur runut', 'Lagu folk berderap semangat perjuangan'],
      careers: ['Direktur Operasional Proyek', 'Insinyur Sipil Utama', 'Kepala Logistik Internasional', 'Spesialis Audit Standardisasi Mutu', 'Manager Konstruksi'],
      destinations: ['London, Inggris (Kepatuhan Hukum & Arsitektur Klasik Tegas)', 'Pabrik Manufaktur Canggih Toyota'],
      gifts: ['Panci presto stainless steel baja anti karat fungsional dapur', 'Alat pengukur dimensi laser jarak jauh presisi tinggi', 'Kemeja oxford fitted kaku warna biru dongker formal'],
      healthyCircles: 'Teman-teman pendorong imajinasi and belas kasih lembut (seperti sirkel EII / IEE) yang ngebantu jiwamu rileks tanpa tuntutan performa kerja.',
      experiment7Days: [
        'Sengaja habiskan satu hari penuh di hari Minggu hanya untuk selonjoran rebahan di kasur tanpa memegang/membersihkan sikat komplek!',
        'Saat melihat kesalahan kecil kawanmu memegang pisau blender, biarkan dia belajar mengalami kesalahannya sendiri tanpa kamu sela.'
      ],
      hobbies: ['Pertukangan Kayu Mandiri', 'Mengatur Jadwal Pemeliharaan Rumah', 'Olahraga Kebugaran Angkat Beban', 'Membaca Dokumenter Detektif'],
      appearanceTips: 'Kemeja polo biru marinir, celana chino beige lurus, and sepatu kulit fungsional.',
      roleModels: ['Sherlock Holmes', 'Sergei Korolev (Sains Roket)', 'Angela Merkel']
    },
    behavioralDynamics: {
      lifestyle: 'Disiplin baja, mengabdi sepenuhnya untuk kebenaran performa fisik and mutu kerja nyata.',
      thinkingStyle: 'Logis-konkret harian, menguraikan masalah secara prosedural taktis.',
      interpersonalApproach: 'Menyapa tegas akrab, langsung ngasih bantuan taktis tanpa basa-basi curhat, baru melunak pas komitmen kerjamu terbukti mulus.',
      worldview: 'Peradaban ini dibangun oleh tetesan keringat kerja keras and standardisasi mutu yang kokoh, and siapa saja yang malas harus didepak mundur.',
      angerStyle: 'Suara memotong kencang barisan kata lawan, membeberkan kronologi kegagalan operasional secara merinci menusuk logika, and menuntut ganti rugi nyata.',
      affectionStyle: 'Membetulkan kran wastafel kostmu yang mampet, mengisi kulkasmu dengan pasokan susu segar, and merapikan rincian pajak asetmu.',
      animosityStyle: 'Mengambil alih total akses kendali perkakas di hadapan musuh, and mengabaikan keluhan melodrama mereka.',
      envyStyle: 'Iri melihat kawan malas dapet simpati and popularitas cuma modal ngedumel santai di sosmed.',
      ambitionStyle: 'Menjadi tulang punggung kemakmuran, keamanan fisik, and standardisasi mutu terbaik bagi seluruh sirkel hidupnya.'
    }
  },
  EII: {
    id: 'EII',
    fullname: 'Ethical Intuitive Introtim',
    alias: 'The Psychologist / INFp / Dostoevsky',
    quadra: 'Delta',
    mbtiEquivalent: 'INFJ',
    enneagramTrend: 'Tipe 9w1 atau 4w5 (Peacemaker / Individualist)',
    description: 'Pusat Menyembuhkan Luka Batin and Penjaga Harapan Harapan Manusia yang Tersisa. EII melihat seseorang bertindak menyebalkan and dalam hati membatin: "Kelakuannya buruk, tapi mungkin ada duka masa kecil tak tersembuhkan yang belum diprosesnya."',
    stereotypes: [
      'Ngasih kesempatan berbuat baik ke-100 buat orang yang jelas-jelas toxic.',
      'Suka bikin draf catatan harian penuh kritik tajam penyiksaan batin terhadap diri sendiri.',
      'Paling peka mendeteksi ketidakjujuran batin orang lain.'
    ],
    vibe: 'Lembut, tenang, asri, tatapan mata ngebawa damai seketika ke dalam forum tegang.',
    hiddenThoughts: 'Aku paham motif menusukmu hari ini, jiwamu sebenarnya sedang cemas and butuh bimbingan cinta tulus.',
    pros: [
      'Empati tiada tanding harian, pendengar curhat batin terbaik tanpa vonis.',
      'Sangat tulus, memegang integritas moralitas tinggi, and berprinsip kokoh.',
      'Mampu membimbing kawan memulihkan diri dari patah batin.'
    ],
    cons: [
      'Sering bernavigasi jadi martir kedukaan batin (menanggung duka sendirian).',
      'Mudah sesak napas/cemas batin menghadapi agresi wilayah kaku.',
      'Mendem dongkol and mendadak memutus pacar/kawan tanpa diskusi.'
    ],
    roast: 'Kamu sanggup melihat setitik berkas cahaya kebaikan di dalam dada musuhmu, bahkan pas musuhmu sendiri lagi sibuk mencuri dompetmu, memotong kabel internet kostmu, and meminta kesempatan ke-101 buat membuktikan bahwa dia punya potensi jadi teknisi listrik terpercaya. Pola empatimu ekstrem, kawan.',
    brutalConclusion: 'EII adalah tipe orang yang memberi manusia kesempatan berkembang sampai manusia itu tumbuh nyaman mengecewakannya.',
    recommendations: {
      books: ['The Idiot (Fyodor Dostoyevsky)', 'Mans Search for Meaning (Viktor Frankl)'],
      movies: ['The Green Mile (1999)', 'The Shawshank Redemption'],
      music: ['Klasik piano lembut syahdu penuh perenungan harian', 'Lagu folk liris akustik bernada damai asri'],
      careers: ['Konselor Psikologi Batin', 'Guru Kepribadian Anak Rawan', 'Penulis Karya Sastra Humanis', 'Pengembang Organisasi Nirlaba Kemanusiaan', 'Perawat Paliatif Kasih'],
      destinations: ['Kyoto, Jepang (Ketenangan Taman Zen Swasana Hening)', 'Panti Asuhan Sunyi Damai'],
      gifts: ['Buku catatan bersampul kain katun daur ulang ramah lingkungan', 'Teh chamomile organik menenangkan batin kamar', 'Pot tanaman hias meja sukulen mini asri'],
      healthyCircles: 'Teman-teman pelopor tindakan konkret and berdaya tertib baja (seperti sirkel LSE / SLI) yang melindungimu dari agresi luar tanpa mengeksploitasi kebaikan jiwamu.',
      experiment7Days: [
        'Tetapkan satu garis batasan tegas denda konkrit seketika pada orang toxic yang melanggar pribasimu hari ini!',
        'Luapkan rasa dongkol batinmu secara verbal kencang di depan kaca kamar mandi komplek rumah tanpa perlu disensor moral!'
      ],
      hobbies: ['Menulis Catatan Kebatinan', 'Fotografi Suasana Hening', 'Relawan Kemanusiaan', 'Merawat Tanaman Sukulen'],
      appearanceTips: 'Dress katun pastel lembut, oversized outerwear rajutan tangan, and sepatu flat kulit lembut fungsional.',
      roleModels: ['Fyodor Dostoyevsky (Sastrawan Humanis)', 'Vincent van Gogh', 'Nicholas II']
    },
    behavioralDynamics: {
      lifestyle: 'Asri, santai berjarak, mengabdi sepenuhnya demi menjaga kesucian jalinan persahabatan and pertobatan moral harian.',
      thinkingStyle: 'Subjektif-intuisi emosional, peka memandang dinamika batiniah terdalam manusia.',
      interpersonalApproach: 'Menjaga jarak batin waspada yang sopan, ramah tulus di awal, baru membuka ruang intim terdalam pas ketulusan moralmu teruji mengkristal.',
      worldview: 'Dunia ini dipenuhi oleh luka-luka batin yang butuh disembuhkan lewat belas kasih saksama, and kekerasan murni maut hanyalah pemicu luka baru.',
      angerStyle: 'Bukan berteriak kasar; melainkan raut muka sedih kecewa mendalam menusuk moral lawan, and perlahan menjauh senyap selamanya. Disarankan latihan yoga hening kamar.',
      affectionStyle: 'Mendengarkan curhat krisis eksistensialmu berjam-jam tanpa bosan, ngasih draf solusi asri kedamaian batin, and mendoakan keselamatan jiwamu.',
      animosityStyle: 'Menarik diri total di balik tameng mentalitas kaku, menganggap argumen lawan tidak valid secara sains and mengabaikannya selamanya.',
      envyStyle: 'Iri melihat kawan teledor bermuka asri dapet jalan mulus kemakmuran tanpa perlu mikir keras risiko.',
      ambitionStyle: 'Membangun mercusuar kedai kedamaian batin and pemulihan moral bagi sesama manusia terbuang di sekelilingnya.'
    }
  },
  IEE: {
    id: 'IEE',
    fullname: 'Intuitive Ethical Extratim',
    alias: 'The Reporter / Seeker / Huxley',
    quadra: 'Delta',
    mbtiEquivalent: 'ENFP',
    enneagramTrend: 'Tipe 7w6 atau 4w3 (Innovator / Individualist)',
    description: 'Bapak Konsultasi Peluang Hidup Mendadak and Mak Comblang Sosial Komplek. Baru kumpul santai di kafe dua puluh menit, langsung bisa melihat empat kemungkinan masa depan karirmu, tiga bakat tersembunyimu, and pasangan yang cocok buat menjinakkan batin liarmu.',
    stereotypes: [
      'Ngajak kolaborasi proyek seru pas ketemu di kafe, terus ngilang pas draf proposal jadi.',
      'Suka menjodoh-jodohkan teman komplek memanfaatkan radar kecocokan emosinya.',
      'Paling gampang bosan sama rutinitas administratif and kaku.'
    ],
    vibe: 'Terbuka, asri-ceria, penuh rasa ingin tahu tinggi, and gerak tubuhnya lincah menyebarkan kehangatan batin.',
    hiddenThoughts: 'Kamu itu orang yang sangat unik and menarik batin, mari kita bongkar belenggunya biar hidupmu mekar berwarna-warni!',
    pros: [
      'Radar luar biasa tajam mendeteksi potensi kebaikan and bakat tersembunyi manusia.',
      'Sangat hangat, supel, and pandai membangun jembatan pertemanan antar-circle.',
      'Membawa harapan and humor segar di tengah situasi kerja yang mandek kaku.'
    ],
    cons: [
      'Ganya kedekatan emosional intens di awal yang mendadak berkurang drastis dlm seminggu.',
      'Ngebuat banyak proyek sosial setengah matang lalu ditinggal begitu saja gara-gara bosan.',
      'Mengganti kedekatan lama dengan kawan baru tanpa membereskan luka komitmen lama.'
    ],
    roast: 'Hobi mengajak kolaborasi proyek besar pas nongkrong seru di kafe, tapi mendadak tidak ada tanda kehidupan pas draf proposal rincian kerja jadi dikirim.',
    brutalConclusion: 'IEE adalah tipe orang yang membukakan gerbang peluang baru dalam hidupmu, lalu dirinya lupa berjanji ngebantu kamu memindahkan sofa.',
    recommendations: {
      books: ['Please Understand Me', 'The Huxley philosophy essays', 'The Alchemist (Paulo Coelho)'],
      movies: ['The Secret Life of Walter Mitty (2013)', 'Dead Poets Society'],
      music: ['Indie Pop ceria berwarna-warni', 'Lagu-lagu yang membangkitkan gairah petualangan santai'],
      careers: ['Mak Comblang / Matchmaker Profesional', 'Analis Minat Bakat SDM', 'Penulis Memoar Dokumenter Travel', 'Sutradara Kampanye Sosial Kreatif', 'Psikolog Konseling Karir'],
      destinations: ['Amsterdam, Belanda (Kebebasan Berpikir & Kanal Ceria)', 'Festival Seni Alternatif Burning Man'],
      gifts: ['Kamera polaroid instan warna pastel lucu', 'Buku komik ilustrasi inspirasi perjalanan unik', 'Set stiker laptop bertema humor eksklusif'],
      healthyCircles: 'Teman-teman berkarakter kokoh and terstruktur praktis (seperti sirkel SLI / LSE) yang ngebantu mewujudkan idemu jadi produk nyata.',
      experiment7Days: [
        'Selesaikan satu proyek dekorasi kamar/coding iseng yang berjalan sampai selesai tanpa membuka ide sampingan baru!',
        'Tahan dirimu selama 24 jam untuk tidak membagikan janji kolaborasi baru ke kawan nongkrong kafe.'
      ],
      hobbies: ['Nge-Vlog Harian', 'Menulis Jurnal Jernih', 'Café Hopping', 'Menyatukan Kawan Lama'],
      appearanceTips: 'Kombinasi warna pakaian seru eklektik (kaos retro dipadu kulot linen krem), and kacamata frame bundar.',
      roleModels: ['Mark Twain (Penulis)', 'Wolfgang Amadeus Mozart', 'Eldar Ryazanov']
    },
    behavioralDynamics: {
      lifestyle: 'Penuh warna, supel, and mengalir dari satu kegembiraan sosial ke petualangan ide baru.',
      thinkingStyle: 'Asosiatif gila-gilaan, peka memandang celah-celah solusi orisinal.',
      interpersonalApproach: 'Langsung ngebombardir kamu dengan curhat akrab and nanya hobi pribadimu, menjauh kalau suasananya menuntut performa hitungan uang kaku.',
      worldview: 'Dunia ini penuh rahasia and potensi kemakmuran manusia yang menakjubkan batin, and tugas kita adalah melepaskan belenggu rutinitas maut.',
      angerStyle: 'Banyak menjelaskan perspektif hidupnya panjang lebar secara emosional, and langsung menyimpulkan ketidakautentikan karakter moral lawan. Disarankan latihan lari pagi.',
      affectionStyle: 'Membayangkan ribuan rencana masa depan indah fiktif buat kalian berdua, ngasih bimbingan validasi personal, and memelukmu asri.',
      animosityStyle: 'Menggeser posisi musuh dari lingkaran prioritas persahabatannya menuju kategori "asing biasa" dlm tempo semalam.',
      envyStyle: 'Iri melihat kawan plin-plan bermuka asri dapet panggung kemuliaan sosial modal senyum palsu.',
      ambitionStyle: 'Mewujudkan dunia yang mengizinkan setiap manusia mengekspresikan bakat asri terdalamnya tanpa belenggu dogma.'
    }
  },
  SLI: {
    id: 'SLI',
    fullname: 'Sensory Logical Introtim',
    alias: 'The Craftsman / Inspector Maigret',
    quadra: 'Delta',
    mbtiEquivalent: 'ISTP',
    enneagramTrend: 'Tipe 9w8 atau 5w6 (Peacemaker / Observer)',
    description: 'Empu Ketenangan Batin and Ahli Efisiensi Fungsional Diam-Diam. SLI nampak santai berbaring di sofa komplek, nampak tidak punya ambisi buat menguasai dunia panggung kuis, padahal aslinya dirinya merintis kebun batin yang super-nyaman and fungsional.',
    stereotypes: [
      'Pilih perkakas pertukangan murni dari kualitas besi baja fungsional.',
      'Suka melayangkan komentar pendek akurat 3 detik yang menyudahi rapat 2 jam.',
      'Paling anti keramaian basa-basi sosial and orang kencang omong kosong.'
    ],
    vibe: 'Santai, senyap, gerakannya luar biasa hemat and bertujuan praktis tinggi, mukanya datar-geli melihat keributan manusia.',
    hiddenThoughts: 'Kalian silakan bikin kepanitiaan nasional komplek cuma buat memecahkan masalah kran bocor, biar aku benerin sendiri dlm semalam tanpa ribut.',
    pros: [
      'Keahlian fungsional fisik luar biasa tinggi and andal.',
      'Sangat tenang di tengah badai kepanikan sosial, and mandiri penuh.',
      'Menciptakan kenyamanan and harmoni ruang secara praktis-elegan.'
    ],
    cons: [
      'Menjadikan slogan "ogah drama" sbg tameng pembenaran cuek abai total.',
      'Bisa mendadak memutus total layanan bantuan (ghosting kawan) pas suasananya berisik.',
      'Sangat keras kepala and defensif menyangkut rutinitas kenyamanan fisiknya.'
    ],
    roast: 'Kamu menganggap dirimu fleksibel and supel bergaul, asalkan kawan komplekmu tidak merubah jadwal pergi, lokasi parkir, suhu AC ruangan, tingkat kebisingan kafe, and posisi bantal sofa kesayangan hatimu. Fleksibilitasmu asri parah.',
    brutalConclusion: 'SLI adalah tipe orang yang mampu menyelesaikan masalah apa pun setelah lebih dulu menentukan apakah masalah itu pantas mengganggu kenyamanannya.',
    recommendations: {
      books: ['The Craftsman (Richard Sennett)', 'Walden (Henry David Thoreau)'],
      movies: ['The Gendarme of Saint-Tropez (1964)', 'Inspector Maigret classics'],
      music: ['Acoustic Folk instrumental tenang', 'Blues melow bernuansa sunyi malam'],
      careers: ['Insinyur Presisi Manufaktur', 'Arsitek Lanskap Fungsional', 'Desainer Produk Minimalis', 'Ekstrim Solo Traveler Guide', 'Pakar Restorasi Motor Klasik'],
      destinations: ['Swiss Alps (Keheningan Pegunungan Es & Salju)', 'Pojok Kebun Teh Sunyi'],
      gifts: ['Remot multi-fungsi fungsional berbahan kokoh', 'Pisau lipat serba guna Swiss Army baja tahan karat asli', 'Bantal terapi kesehatan tulang leher fungsional'],
      healthyCircles: 'Teman-teman imajinatif SUPEL penyebar harapan (seperti sirkel IEE / EII) yang menghargai ketenanganmu.',
      experiment7Days: [
        'Cobalah ngobrol langsung secara verbal mengungkapkan rasa terima kasih tulusmu pada pasangan sebelum tidur tanpa bungkusan humor sinis!',
        'Selesaikan satu tugas perbaikan fisik meja dapur yang kamu tunda minggu lalu dlm tempo 30 menit.'
      ],
      hobbies: ['Memperbaiki Mesin Klasik', 'Mendaki Gunung Solo', 'Memahat Kayu Minimalis', 'Menonton Film Dokumenter Sains'],
      appearanceTips: 'Kaos katun bambu hitam tebal, celana kargo modular coklat tua, and sepatu lari tangguh.',
      roleModels: ['Jean Gabin (Aktor)', 'Agatha Christie', 'Georges Simenon']
    },
    behavioralDynamics: {
      lifestyle: 'Hemat gerak-bahasa, mandiri penuh, and mengabdi sepenuhnya untuk kebenaran kenyamanan fisik harmoni.',
      thinkingStyle: 'Logis-fungsional harian, meminimalkan kerangka teori yang tidak bisa disentuh jemari.',
      interpersonalApproach: 'Menjaga jarak batin senyap di awal, baru melunak pas tahu kawan tersebut rela dititipkan kunci rumahnya tanpa drama basa-basi.',
      worldview: 'Dunia ini sudah dipenuhi oleh kepanikan sosial and omong kosong tak fungsional, tugas kita adalah merapikan sudut kecil tempat tinggal kita biar asri and berfungsi tenang.',
      angerStyle: 'Penghentian total seluruh layanan bantuan and komunikasi senyap dingin kayak es batu raksasa. Disarankan olahraga bersepeda gunung hening.',
      affectionStyle: 'Menge-cat ulang dinding kamarmu dengan warna menenangkan, membersihkan filter AC kostmu biar udaramu asri kembali, and membagikan draf tips fungsional harian.',
      animosityStyle: 'Mengabaikan seluruh eksistensi fisik musuh secara dingin seolah mereka hanyalah partikel debu melayang.',
      envyStyle: 'Iri melihat kawan ribut dapet sorot pemujaan sosial komplek.',
      ambitionStyle: 'Merawat kelangsungan kenyamanan hidup and fungsionalitas ruang pribadinya dari gangguan panggung dunia luar.'
    }
  }
};

// Full Model A position generator based on standard Socionics configurations
export const getModelAPositions = (typeId: string): ModelAPosition[] => {
  const elements = getIMElementsForType(typeId);
  const positionNames = [
    'Base (Program) - Kekuatan utama diri dalam menyaring realitas secara reflek.',
    'Creative - Metode taktis berinteraksi and menyalurkan karya ke dunia luar.',
    'Role - Topeng formal adaptasi sosial di lingkungan baru.',
    'Vulnerable (PoLR) - Titik rawan batin, paling sensitif kena agresi kritik.',
    'Suggestive (Dual-Seeking) - Kebutuhan batin terdalam yang dihargai and butuh disuplai.',
    'Mobilizing (Activating) - Mesin bakar semangat diri pas dapet stimulus asri.',
    'Ignoring (Observing) - Kemampuan kuat di balik layar yang diabaikan karena membosankan.',
    'Demonstrative - Keahlian alami tersembunyi yang keluar otomatis pas krisis melanda.'
  ];
  const positionsDesc = [
    'Caramu memproses situasi secara otomatis and menjadi landasan batin utama.',
    'Caramu mengeksekusi ide and melebarkan pengaruh nyata keluar.',
    'Topeng kepatutum sosial yang kamu pakai saat berhadapan dengan orang asing.',
    'Titik paling rapuh. Sentuhan kaku di area ini terasa bagaikan sepatu boot menginjak luka basah.',
    'Area kebutuhan batin terdalam. Kamu bersyukur pada siapa saja yang mau menyuplai kenyamanan di sini.',
    'Mesin penyuntik energi semangat diri harian.',
    'Keahlian kuatmu di latar belakang yang jarang kamu diskusikan.',
    'Kelakuan alamiah tersembunyimu yang keluar tak terduga menyelamatkan krisis.'
  ];

  return elements.map((el, i) => ({
    position: i + 1,
    name: positionNames[i],
    element: el,
    description: positionsDesc[i]
  }));
};

const getIMElementsForType = (typeId: string): string[] => {
  const mapping: Record<string, string[]> = {
    ILE: ['Ne', 'Ti', 'Se', 'Fi', 'Si', 'Fe', 'Ni', 'Te'],
    SEI: ['Si', 'Fe', 'Ni', 'Te', 'Ne', 'Ti', 'Se', 'Fi'],
    ESE: ['Fe', 'Si', 'Te', 'Ni', 'Ti', 'Ne', 'Fi', 'Se'],
    LII: ['Ti', 'Ne', 'Fi', 'Se', 'Fe', 'Si', 'Te', 'Ni'],
    EIE: ['Fe', 'Ni', 'Te', 'Si', 'Ti', 'Se', 'Fi', 'Ne'],
    LSI: ['Ti', 'Se', 'Fi', 'Ne', 'Fe', 'Ni', 'Te', 'Si'],
    SLE: ['Se', 'Ti', 'Ne', 'Fi', 'Ni', 'Fe', 'Si', 'Te'],
    IEI: ['Ni', 'Fe', 'Si', 'Te', 'Se', 'Ti', 'Ne', 'Fi'],
    SEE: ['Se', 'Fi', 'Ne', 'Ti', 'Ni', 'Te', 'Si', 'Fe'],
    ILI: ['Ni', 'Te', 'Si', 'Fe', 'Se', 'Fi', 'Ne', 'Ti'],
    LIE: ['Te', 'Ni', 'Se', 'Fi', 'Fi', 'Se', 'Ti', 'Ne'], 
    ESI: ['Fi', 'Se', 'Ti', 'Ne', 'Te', 'Ni', 'Fe', 'Si'],
    LSE: ['Te', 'Si', 'Fe', 'Ni', 'Fi', 'Ne', 'Ti', 'Se'],
    EII: ['Fi', 'Ne', 'Ti', 'Se', 'Te', 'Si', 'Fe', 'Ni'],
    IEE: ['Ne', 'Fi', 'Se', 'Ti', 'Si', 'Te', 'Ni', 'Fe'],
    SLI: ['Si', 'Te', 'Ni', 'Fe', 'Ne', 'Fi', 'Se', 'Ti']
  };
  
  return mapping[typeId] || mapping['ILE'];
};

// Returns Intertype Relations dynamically by analyzing Model A symmetry (Mathematical group action from Tencer)
export const calculateIntertypeRelations = (typeId: string): IntertypeRelation[] => {
  const relations = [
    { targetType: getDualityPartner(typeId), relationName: 'Duality (Mutual Complementation)', relationType: 'Duality', compatibilityPercent: 98, description: 'Hubungan paling harmonis and saling melengkapi batin bagai kunci and gembok gembira. Titik PoLR-mu terlindungi kokoh oleh Base partner.' },
    { targetType: getActivationPartner(typeId), relationName: 'Activation (Saling Menyemangati)', relationType: 'Activation', compatibilityPercent: 90, description: 'Saling menyuntikkan baterai semangat harian yang membara, tapi rentan bikin lelah karena perbedaan ritme tubuh batin harian.' },
    { targetType: getMirrorPartner(typeId), relationName: 'Mirror (Cermin Cara Berpikir)', relationType: 'Mirror', compatibilityPercent: 85, description: 'Punya kesamaan cara pandang and nilai Quadra, rujukan teorinya mirip tapi eksekusi tindakannya saling mengisi.' },
    { targetType: getConflictorPartner(typeId), relationName: 'Conflict (Perang Dingin Alami)', relationType: 'Conflict', compatibilityPercent: 15, description: 'Hubungan paling melelahkan batin. Tanpa sadar base terkuat partner terus-menerus menusuk keras area rapuh PoLR-mu bagaikan sepatu but baja menginjak luka basah.' },
    { targetType: getSupervisorPartner(typeId), relationName: 'Supervision (Tuntutan Otoritas Kaku)', relationType: 'Supervision', compatibilityPercent: 45, description: 'Kamu diposisikan sebagai pihak yang dinilai keliru moral/SOP bertahap oleh partner (Pengawas), gampang merasa kerdil and dihakimi.' },
    { targetType: getSuperviseePartner(typeId), relationName: 'Supervisee (Pihak yang Kamu Awasi)', relationType: 'Supervisee', compatibilityPercent: 55, description: 'Kamu nampak selalu peka ketidakefektifan prosedur kerjanya, and tergoda mementori tindakannya tanpa ampun.' },
    { targetType: getSuperegoPartner(typeId), relationName: 'Super-Ego (Saling Segan)', relationType: 'Super-Ego', compatibilityPercent: 35, description: 'Saling mengagumi kedudukan dari kejauhan, tapi kalau terlalu dekat batin saling canggung and segan.' },
    { targetType: getContrastPartner(typeId), relationName: 'Extinguishment / Contrary (Kontras Sudut Pandang)', relationType: 'Contrast', compatibilityPercent: 40, description: 'Memiliki fungsi terkuat bunderan yang sama tapi terbalik arah batinnya, membicarakan masalah yang sama memakai bahasa asing berbeda.' },
    { targetType: getQuasiPartner(typeId), relationName: 'Quasi-Identity (Mirip Palsu)', relationType: 'Quasi-Identity', compatibilityPercent: 50, description: 'Tampak mirip di luar sama-sama kutu buku/aktif, tapi kalau didekati motivasi and penyelesaian masalah bertolak belakang.' },
    { targetType: getIdentityPartner(typeId), relationName: 'Identity (Kembaran Spiritual)', relationType: 'Identity', compatibilityPercent: 65, description: 'Tipe yang sama persis denganmu. Guru and murid yang sangat efisien mentransfer draf pelajaran, tapi cepet bosan karena tidak ada hal orisinal baru.' }
  ];

  return relations;
};

// Helper methods determining algebraic group targets in Socionics
const getDualityPartner = (id: string): string => {
  const pairs: Record<string, string> = {
    ILE: 'SEI', SEI: 'ILE', LII: 'ESE', ESE: 'LII',
    EIE: 'LSI', LSI: 'EIE', SLE: 'IEI', IEI: 'SLE',
    SEE: 'ILI', ILI: 'SEE', LIE: 'ESI', ESI: 'LIE',
    LSE: 'EII', EII: 'LSE', IEE: 'SLI', SLI: 'IEE'
  };
  return pairs[id];
};

const getActivationPartner = (id: string): string => {
  const pairs: Record<string, string> = {
    ILE: 'ESE', SEI: 'LII', LII: 'SEI', ESE: 'ILE',
    EIE: 'SLE', LSI: 'IEI', SLE: 'EIE', IEI: 'LSI',
    SEE: 'LIE', ILI: 'ESI', LIE: 'SEE', ESI: 'ILI',
    LSE: 'IEE', EII: 'SLI', IEE: 'LSE', SLI: 'EII'
  };
  return pairs[id];
};

const getMirrorPartner = (id: string): string => {
  const mirror: Record<string, string> = {
    ILE: 'LII', LII: 'ILE', ESE: 'SEI', SEI: 'ESE',
    EIE: 'IEI', IEI: 'EIE', LSI: 'SLE', SLE: 'LSI',
    SEE: 'ESI', ESI: 'SEE', LIE: 'ILI', ILI: 'LIE',
    LSE: 'SLI', SLI: 'LSE', EII: 'IEE', IEE: 'EII'
  };
  return mirror[id];
};

const getConflictorPartner = (id: string): string => {
  const pairs: Record<string, string> = {
    ILE: 'ESI', SEI: 'LIE', ESE: 'ILI', LII: 'SEE',
    EIE: 'SLI', LSI: 'IEE', SLE: 'EII', IEI: 'LSE',
    SEE: 'LII', ILI: 'ESE', LIE: 'SEI', ESI: 'ILE',
    LSE: 'IEI', EII: 'SLE', IEE: 'LSI', SLI: 'EIE'
  };
  return pairs[id];
};

const getSupervisorPartner = (id: string): string => {
  const supervisorMap: Record<string, string> = {
    ILE: 'SEI', LII: 'ILE', ESE: 'LII', SEI: 'ESE',
    SLE: 'IEI', LSI: 'SLE', EIE: 'LSI', IEI: 'EIE',
    SEE: 'ILI', ESI: 'SEE', LIE: 'ESI', ILI: 'LIE',
    LSE: 'SLI', EII: 'LSE', IEE: 'EII', SLI: 'IEE'
  };
  return supervisorMap[id] || 'SEI';
};

const getSuperviseePartner = (id: string): string => {
  const superviseeMap: Record<string, string> = {
    SEI: 'ILE', ILE: 'LII', LII: 'ESE', ESE: 'SEI',
    IEI: 'SLE', SLE: 'LSI', LSI: 'EIE', EIE: 'IEI',
    ILI: 'SEE', SEE: 'ESI', ESI: 'LIE', LIE: 'ILI',
    SLI: 'LSE', LSE: 'EII', EII: 'IEE', IEE: 'SLI'
  };
  return superviseeMap[id] || 'ILE';
};

const getSuperegoPartner = (id: string): string => {
  const superego: Record<string, string> = {
    ILE: 'SEE', SEI: 'ILI', ESE: 'LIE', LII: 'ESI',
    EIE: 'SLI', LSI: 'IEE', SLE: 'EII', IEI: 'LSE',
    SEE: 'ILE', ILI: 'SEI', LIE: 'ESE', ESI: 'LII',
    LSE: 'IEI', EII: 'SLE', IEE: 'LSI', SLI: 'EIE'
  };
  return superego[id] || 'SEE';
};

const getContrastPartner = (id: string): string => {
  const contrastMap: Record<string, string> = {
    ILE: 'ILI', SEI: 'SEE', ESE: 'LIE', LII: 'ESI',
    EIE: 'EII', LSI: 'LSE', SLE: 'SLI', IEI: 'IEE',
    ILI: 'ILE', SEE: 'SEI', LIE: 'ESE', ESI: 'LII',
    EII: 'EIE', LSE: 'LSI', SLI: 'SLE', IEE: 'IEI'
  };
  return contrastMap[id];
};

const getQuasiPartner = (id: string): string => {
  const trueQuasi: Record<string, string> = {
    ILE: 'LIE', LIE: 'ILE', SEI: 'ESI', ESI: 'SEI',
    ESE: 'SEE', SEE: 'ESE', LII: 'ILI', ILI: 'LIE',
    EIE: 'IEE', IEE: 'EIE', LSI: 'SLI', SLI: 'LSI',
    SLE: 'LSE', LSE: 'SLE', IEI: 'EII', EII: 'IEI'
  };
  return trueQuasi[id];
};

const getIdentityPartner = (id: string): string => {
  return id;
};

// Socionics profile instantiator with complete Model A
export const getFullSocionicsProfile = (typeId: string): Profile => {
  const baseProfile = SOCIONICS_PROFILES[typeId] || SOCIONICS_PROFILES['ILE'];
  return {
    ...baseProfile,
    modelA: getModelAPositions(typeId)
  } as Profile;
};
