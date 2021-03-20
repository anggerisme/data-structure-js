const kata = "ini adalah kalimAt";
console.log(kata.length);

// ----- Method indexOf() -----
/* IndexOf -> Menampilkan indek array yang pertama */
console.log(kata.indexOf("a")); //5
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
