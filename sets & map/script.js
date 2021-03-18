/////////////////// Set ////////////////////

const daftarMenu = new Set(["Soto", "Sate", "Nasi Goreng", "Sate", "Soto"]);

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

/////////////////// Map ////////////////////
console.log("-------- Map ----------");
/* map.set(key, value) */
const warung = new Map();
warung.set("nama", "rumah makan barokah");
warung.set(1, "warteg", "tradisional");
console.log(warung.set(2, "bekasi", "jabar"));
warung
  .set("makanan", ["soto", "gulai ikan", "rendang"])
  .set("buka", 11)
  .set("tutup", 22)
  .set(true, "Warung buka")
  .set(false, "Warung tutup");

// ----- Map Method() yang lain-----
/* ---1. map.get(key)--- */
console.log(warung.get("nama"));
console.log(warung.get(true));
console.log(warung.get(1));

/* ---2. map.delete--- */
// console.log(warung.delete("nama"));
/* ---3. map.has(key)--- */
console.log(warung.has("nama")); // true
/* ---4. map.size--- */
console.log(warung.size); //8
/* ---5. map.clear()--- */
// console.log(warung.clear());

/* ----- Menggunakan arrays sebagai Key ---- */
warung.set([1, 2], "Ini array");
console.log(warung);

console.log(warung.get([1, 2])); // Undefined

/* Solusi */
const arr = [1, 2];
warung.set(arr, "Ini array");
console.log(warung.get(arr));

/*  Penerapan map lebih jauh*/

const pukul = 21;
console.log(
  warung.get(pukul > warung.get("buka") && pukul < warung.get("tutup"))
);
