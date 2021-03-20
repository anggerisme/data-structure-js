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
      open: 12,
      close: 22,
    },
    jum: {
      open: 11,
      close: 23,
    },
    sab: {
      open: 0,
      close: 24,
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

const besFisika = new Map([
  ["Pertanyaan", "Sebutkan contoh besaran pokok fisika"],
  [("Panjang", "meter")],
  [1, "Massa : kilogram"],
  [2, " Waktu : sekon"],
  [3, "Kuat arus listrik : ampere"],
  [4, "Suhu : Kelvin"],
  ["correct", 3],
  [true, "Intensitas cahaya : candela"],
  [false, "Jumlah zat : mol"],
]);

console.log(besFisika);

// Mengubah object menjadi map
console.log(Object.entries(rumahMakan.jamBuka));
const mapJamBuka = new Map(Object.entries(rumahMakan.jamBuka));
console.log(mapJamBuka);

// Looping over Map
console.log(besFisika.get("Pertanyaan"));
for (const [key, value] of besFisika) {
  if (typeof key === "number") console.log(`${key} satuan ${value}`);
}

// Boolean untuk memanggil Key
const jawaban = Number(prompt("Masukkan jawaban"));
console.log(jawaban);

console.log(besFisika.get(besFisika.get("correct") === jawaban));
