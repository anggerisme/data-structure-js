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
  ["Panjang", "meter"],
  ["Massa", "kilogram"],
  ["Waktu", "sekon"],
  ["Kuat arus listrik", "ampere"],
  ["Suhu", "kelvin"],
  ["Intensitas cahaya", "candela"],
  ["Jumlah zat", "mol"],
]);

console.log(besFisika);

// Mengubah object menjadi map
console.log(Object.entries(rumahMakan.jamBuka));
const mapJamBuka = new Map(Object.entries(rumahMakan.jamBuka));
console.log(mapJamBuka);
