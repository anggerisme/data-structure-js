const daftarMenu = Set(["Soto", "Sate", "Nasi Goreng", "Sate", "Soto"]);

console.log(daftarMenu);
/* CASE SENSITIVE */
console.log(new Set("bambang"));
console.log(new Set("Bambang"));

// ----- Method In Set -----

/* add() -> menyisipkan nilai baru*/
console.log(daftarMenu.add("Mie rebus"));
/* size() -> Menampilkan banyaknya nilai */
console.log(daftarMenu.size);
/* has() -> untuk mengecek ada/tidaknya nilai dalam set*/
console.log(daftarMenu.has("Soto"));
/* delete() -> menghapus element tertentu*/
console.log(daftarMenu.delete("Nasi Goreng"));
console.log(daftarMenu);
/* clear() -> menghapus seluruh element*/
// console.log(daftarMenu.clear()); // undefined
// console.log(daftarMenu); //0

//----- Sets are iterable -----
for (const menu of daftarMenu) {
  console.log(menu);
}

/* Contoh kasus */
const daftarPegawai = ["Koki", "Pelayan", "Kasir", "Pelayan", "Koki"];
const posisi = new Set(daftarPegawai);
console.log(posisi); // Menghasilkan object
/* Mengubahnya menjadi nilai array */
const posisi1 = [...new Set(daftarPegawai)];
console.log(posisi1);
