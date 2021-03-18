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
