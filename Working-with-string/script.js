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
