const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  makanan: ["soto", "gulai ikan", "rendang", "sate", "nasi goreng"],
  minuman: ["es teh", "es jeruk", "kopi"],
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

  mieRebus: function (sawi, ...bumbuLain) {
    console.log(sawi);
    console.log(...bumbuLain);
  },
};

const menu = [...rumahMakan.makanan];
// console.log(menu);

// For of
for (const item of menu) console.log(item);

// Mengetahui nomer index dari setiap perulangan
for (const item of menu.entries()) {
  console.log(item);
}
// menggabungkanya dalam satu array
console.log([...menu.entries()]); // ... spread operator dan kurung besar []

// Destructuring hasil dari method entries()
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}, ${item[1]}`);
}
