// ////////////// Working with string part 1 //////////////

const kata = "ini adalah kalimAt";
console.log(kata.length);

// ----- Method indexOf() -----
// Zero Base -> perhitunga dari 0
/* IndexOf -> Menampilkan indek array yang pertama */
console.log(kata.indexOf("k")); //5
/* Jika tidak ditemukan akan menampilkan -1 */
console.log(kata.indexOf("KalimAt"));

// ----- Method lastIndexOf() -----
/* LastindexOf -> Menampilkan indek array yang terakhir */
console.log(kata.lastIndexOf("i"));

// ----- Method slice() -----
/* slice -> memotong string dari urutan ke  */
console.log(kata.slice(4));
/* slice -> memotong string dari urutan ke sampai sebelum urutan ke  */
console.log(kata.slice(4, 10));
/* memotong spasi (' ')  */
console.log(kata.slice(0, kata.indexOf(" ")));
/* memotong spasi dari spasi paling terakhir +1 untuk menambah karakter setelah spasi ("")  */
console.log(kata.slice(kata.lastIndexOf(" ") + 1));
/* Memulai perpotongan dari urutan paling terakhir ke arah yang berlawanan  <-- */
console.log(kata.slice(-1)); // Menampilkan nilai paling akhir
console.log(kata.slice(-7));
/*
 */
console.log(kata.slice(1, -1));

// ----- Penerapan pada contoh kasus -----

const checkMiddleSeat = function (seat) {
  // menentukan nilai s nanti dihitung dari nilai paling akhir
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😃");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("31E");

// ----- Catatan -----
/* Kita tahu bahwa string adalah primitive tetapi mengapa jadi mengapa string mempunyai method? Bukankah methods hanya ada di object seperti arrays? Ya itu benar! Saat kita memanggil method di dalam string Javascript di belakang layar akan mengubah string primitive menjadi string object dengan content yang sama dan darisanalah penyebabnya string bisa mempunyai method. Proses ini di namakan Boxing yang berarti mengambil string dan lalu menempatkanya sebagai objects*/

console.log(typeof new String("Angger")); // {'angger} -> Object

/* Setelah proses ini selesei javascript akan mengembalikanya sebagai string primitive lagi. Semua method string mengembalikan nilai primitive. Bahkan jika memanggil ketika itu adalah string object */
console.log(typeof new String("Angger").slice()); // string

// ////////////// Working with string part 2 //////////////

/* Mengubah semua huruf menjadi huruf kecil (lower) */
console.log(kata.toLowerCase());
/* Mengubah semua huruf menjadi huruf Besar (Upper) */
console.log(kata.toUpperCase());

// ----- Contoh -----
/* Mengubah kalimat yang susunan katanya berantakan menjadi rapi */
const kataSalah = "KaLiMaT";
/* Mengubah semuanya ke huruf kecil terlebih dahulu */
const kataLower = kataSalah.toLowerCase();
const kataBenar = kataLower[0].toUpperCase() + kataLower.slice(1);
console.log(kataBenar);

/* ----- Trim ----- */
const email = "kontak@angger.me";
const loginEmail = "  Kontak@Angger.me "; // Penulisan salah

/* Penulisan normal */
const normalizeEmail = loginEmail.toLowerCase();
const trimmedEmail = normalizeEmail.trim(); // trim() Remove unused white space
/* Penulisan singkat */
const trimmedEmail1 = loginEmail.toLowerCase().trim(); // Digabungkan
console.log(email === trimmedEmail1);

// ---- Replacing -----
/* Mengganti spesifik value dengan value lain  */
const priceGP = "288,93 £";
const priceUS = priceGP.replace("£", "$");
console.log(priceUS);
/* Replace() hanya mengganti/replace value pertama tidak semua value ikut berubah*/
const announcement =
  "All passengers come to boarding door 23. Boarding door 23";
console.log(announcement.replace("door", "gate")); // hanya door urutan pertama yg berubah
console.log(announcement.replaceAll("door", "gate")); // merubah semua value
// Regular ekspression : melakukan pemeriksaan terhadap suatu data/substring dlm suatu string. Merupakan istilah yang digunakan sebagai metode pencarian yang dikodekan
console.log(announcement.replace(/door/g, "gate")); // Cari kata 'door' dan ganti dengan gate
