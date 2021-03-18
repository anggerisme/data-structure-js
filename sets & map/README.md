# Sets

## Pengertian Sets

Sets merupakan kumpulan nilai/value (tanpa key/property) yang hanya menampilkan nilai yang unik saja. Artinya jika terdapat nilai yang sama persis maka `Sets` hanya akan menampilkan salah satunya saja.

```javascript
const orderSets = new Set(["Soto", "Sate", "Nasi Goreng", "Sate", "Soto"]);

console.log(orderSets);
```

> Meskipun terdapat 2 'Soto' dan 2 'Sate' tetapi hanya ditampilkan satu saja karena keduanya sama persis.

Keyword `new` digunakan untuk membuat _instance_ dari objek lain yang ingin di _copy_.

### Case sensitive

```javascript
console.log(new Set("bambang")); // bamng
console.log(new Set("Bambang")); // Bambng
```

> Meskipun b dan B huruf yang sama tetapi set memberlakukan CASE SENSITIVE dan hanya menampilkan element yang benar benar unik

## Methods Set

### set.size

Mengetahui banyaknya nilai dalam sebuah `set`

```javascript
console.log(daftarMenu.size);
```

### set.has(value)

Untuk menge-check ada/tidaknya nilai dalam sebuah `set`

```javascript
console.log(daftarMenu.has("Soto"));
```

### set.add(value)

Menyisipkan nilai baru ke dalam sebuah `Set`

```javascript
console.log(daftarMenu.add("Mie ayam"));
```

### set.clear()

Menghapus semua nilai yang ada di sebuah `set`

```javascript
console.log(daftarMenu.clear());
```

### set.delete(value)

Menghapus salah satu `value` (ditulis dalam kurung value-nya)

```javascript
console.log(daftarMenu.delete("Nasi Goreng"));
```

## Lebih dalam tentang `Set`

### `Set` tidak menggunaakn index

Dapatkah kita menggunakan index/order untuk mendapatkan nilai/value dari suatu set? Jawabanya jelas tidak, jika kita memasukkan angka ke dalamnya berapapun itu hasilnya tetap `undefined`. Karena set tidak menggunakan index, dan karena `Set` hanya menampilkan elements yang unik maka tidak ada alasan untuk menggunakan index lagi

### `Set` termasuk iterable

Karena `Set` termasuk _iterable_ maka kita dapat menggunakanya dalam perulangan

```javascript
for (const menu of daftarMenu) {
  console.log(menu);
}
```

const

#### Contoh kasus

```javascript
const daftarPegawai = ["Koki", "Pelayan", "Kasir", "Pelayan", "Koki"];
const posisi = new Set(daftarPegawai);
console.log(posisi); // {"Koki", "Pelayan", "Kasir"}
```

Mengubahnya menjadi nilai array

```javascript
const posisi1 = [...new Set(daftarPegawai)];
console.log(posisi1); // ["Koki", "Pelayan", "Kasir"]
```

> Dengan menggunakan spread operator `...` maka kita dapat mengubahnya menjadi array baru

## Kesimpulan `Set`

Penggunaan `Set` tidak untuk menggantikan `arrays` tetapi `Set` ditujukan untuk menghindari perulangan nilai sehingga lebih efisien.

# Map

`Map` merupakan kumpulan dari elemen yang tiap tiap elementnya disimpan dalam `key`(anggap saja property) dan `value pair` (Nilai yang menyertainya). Map _memetakan_ `key` dengan `value pair`/pasanganya.

## Perbedaan map dan object

Perbedaanya dengan object ialah bahwa `map` memiliki tipe `key` yang bisa bermacam macam (tidak hanya string, bisa angka dll), sedangkan pada object, `key` hanya boleh jika itu berupa `string`, kita tidak dapat menggunakan angka sebagai `key`nya/property-nya.

## Contoh kasus

```javascript
const warung = new Map();
warung.set("nama", "rumah makan barokah");
warung.set(1, "warteg", "tradisional");
console.log(warung.set(2, "bekasi", "jabar"));
```

> Kita bisa memasukkan nilai ke dalam `map()` tanpa harus memasukkanya secara langsung ke dalam parameternya. Prinsipnya sama ketika kita memanggil function, cukup panggil namanya saja dan otomatis mengembalikan nilai map

kesamaan formasi dengan `set.add()` :

```javascript
warung.set("nama", "rumah makan barokah");
```

> Memiliki fungsi yang sama seperti method `add` yang dipunyai `Set` yaitu menyisipkan nilai baru ke array

Seperti yang saya tuliskan diatas, bahwa dengan `Map` kita dapat menuliskan `key` dengan tipe data apapun selain `string`

```javascript
warung.set(1, "warteg", "tradisional");
```

> Key dari map `warung.set` diatas menggunakan nomer sebagai `key`-nya. Ini hal yang tidak bisa kita lakukan pada `object`

Lebih jauh lagi kita bisa menambahkan berbagai macam tipe data sebagai `key` nya :

```javascript
warung
  .set("makanan", ["soto", "gulai ikan", "rendang"])
  .set("buka", 11)
  .set("tutup", 22)
  .set(true, "Warung buka")
  .set(false, "Warung tutup");
```

> Sekilas hampir mirip dengan object jika kita perhatikan, tetapi jauh lebih powerfull dan fleksible untuk kita manipulasi. Bahkan kita bisa menyertakan nilai boolean sebagai `key` disana.

## Map method()

### 1. map.get(key)

Untuk membaca/mengambil data dari `Map` kita perlu method `get` untuk mengaksesnya

```javascript
console.log(warung.get("nama")); // Tipe string-> rumah makan barokah
console.log(warung.get(true)); // Tipe boolean-> rumah makan barokah
console.log(warung.get(1)); // Tipe number-> rumah makan barokah
```

> Jangan gunakan tanda petik ('') karena ia akan dianggap sebagai string.

### 2. map.has(key)

Seperti pada `Set`, kita juga dapat memeriksa apakah Map mempunyai suatu `Key` tertentu atau tidak

```javascript
console.log(warung.has("nama")); // true
```

> Apakah `Map` warung mempunyai (`has`) `Key` yang namanya `nama`? Ya!

### 3. map.size(key)

Mengetahui banyaknya elements dalam suatu `Map`

```javascript
console.log(warung.size);
```

### 4. map.delete(key)

Menghapus elements dari sebuah `Map` melalui `Key`nya

```javascript
console.log(warung.delete("nama"));
```

### 5. map.clear()

Menghapus seluruh elemen dari sebuah `Map`

```javascript
console.log(warung.clear());
```

## Penerapan map lebih jauh

Setalah kita mengetahui bahwa `key` pada `Map` bisa kita masukkan tipe data apapun (khususnya boolean) Disini kita akan memanfaatkanya untuk menentukan suatu kondisi sehingga akan menghasilkan output `true` atau `false` yang pada akhirnya nilai output ini (boolean) bisa kita manfaatkan untuk memanggil element dari `Map` yang kita inginkan

```javascript
const pukul = 21;
console.log(
  warung.get(pukul > warung.get("buka") && pukul < warung.get("tutup"))
);
```

> Kita tahu bahwa pukul 21 diatas jam `buka` : 11 dan dibawah jam `tutup` : 22 sehingga nilainya `true` yang nilai `true` ini kemudian akan memanggil lagi elements yang ber-`Key` `true` sehingga output akhir yang kita dapatkan adalah warung buka 🎉

### Menggunakan arrays sebagai Key

Kita bisa menggunakan `arrays` sebagai `Key` tentu saja

```javascript
warung.set([1, 2], "Ini array");
console.log(warung);
```

> `[1,2]` sekarang merupakan Key dari value 'Ini array'

Tetapi ada yang aneh disini ketika kita memanggil `Key` arrays ini

```javascript
console.log(warung.get([1, 2])); // Undefined
```

tidak seperti pemanggilan `Key` seperti yang kita pelajari diatas. Arrays sebagai `Key` dan Arrays yang ada di console adalah 2 object yang **berbeda** di memory heap walaupun sama secara nilainya [1,2] sama persis. Yang dianggap sebagai object di _memory heap_ adalah Arrays yang berada di `Map` `warung.set` bukan yang di console

Solusinya :
Masukkan arrays ke dalam suatu variable dengan tipe string

```javascript
const arr = [1, 2];
warung.set(arr, "Ini array");
console.log(warung.get(arr)); // ini array
```
