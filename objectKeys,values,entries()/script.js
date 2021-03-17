const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  minuman: ["es teh", "es jeruk", "kopi"],
  makanan: ["soto", "gulai ikan", "rendang"],
  order: function (minumanIndex, makananIndex) {
    return [this.minuman[minumanIndex], this.makanan[makananIndex]];
  },
  jamBuka: {
    kam: {
      buka: 12,
      tutup: 22,
    },
    jum: {
      buka: 11,
      tutup: 23,
    },
    sab: {
      buka: 0,
      tutup: 24,
    },
  },
  pesanan: function ({
    minumanIndex = 1,
    makananIndex = 0,
    alamat,
    pukul = "20:00",
  }) {
    console.log(
      `Pesanan diterima! ${this.minuman[minumanIndex]} dan ${this.makanan[makananIndex]} siap diantarkan ke alamat ${alamat} pukul ${pukul}`
    );
  },
};
// ----- Object.keys -----
/* Mengembalikan NAMA PROPERTY dari suatu objek dalam bentuk arrays */
const properties = Object.keys(rumahMakan.jamBuka);
console.log(properties); // kam, jum, sab -> nama nama property objek jamBuka

console.log(`We are buka on ${properties.length}`); //3
/* Mengurai semua propertynya menggunakan perulangan for of  */
let bukaStr = `We are buka on ${properties.length} days :`;
for (const day of properties) {
  bukaStr += `${day}, `;
}
console.log(bukaStr);

// ----- Object.value -----
/* Mengembalikan nilai dari suatu property dalam object */
const values = Object.values(rumahMakan.jamBuka);
console.log(values);

// ----- Object entries -----
/* Mengembalikan key dan values*/
const entries = Object.entries(rumahMakan.jamBuka);
console.log(entries);
/* Destructuring Objek entries */
for (const x of entries) {
  console.log(x);
}

/* Karena hasil dari entries adalah [key, values] yang mana ini adalah arrays maka kita dapat men-destructuringnya*/
for (const [key, { buka, tutup }] of entries) {
  console.log(
    `rumah Makan buka di hari ${key} buka di pukul ${buka}, dan tutup pukul ${tutup}`
  );
}
