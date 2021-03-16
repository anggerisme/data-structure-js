# Looping arrays - `for of`

`for of` pada prinsipnya bekerja dengan cara yang sama dengan perulangan for biasa

### syntax

Masih menggunakan objek yang sama

```javascript
const menu = [...rumahMakan.makanan];
for (const item of menu) console.log(item);
```

> Jadi secara penulisanya `for` diletakkan diluar kurung yang di dalam kurung tersebut di deklarasikan variable `item` yang menampung nilai-nilai yang ada di dalam `menu` (yang juga sudah dideklarasikan sebelumnya). Jadi loop `for` ini akan mengulangi seluruh nilai yang ada di `array` tersebut.

Di dalam perulangan tersebut `item` (variable yang kita buat untuk menampung nilai- arrays dari menu) mewakili nilai dari setiap perulangan terkini yang sedang berlangsung. Penulisan `console.log` diatas bisa ditulis langsung tanpa _code block_ dikarenakan hanya mengandung satu baris perintah saja.

### Mengetahui nomer index dari setiap perulangan

Ingat! variable `menu` sudah kita deklarasikan diatas yang menampung nilai dari seluruh nilai `rumahMakan.makanan`

```javascript
for (const item of menu.entries()) {
  console.log(item);
}
```

> function/method `entries` mengembalikan `key` dan `value`, Contoh : [1, "gulai ikan"] 1 merupakan `key` dan gulai ikan sebagai `value`

Penggunaan method `entries()` hanya untuk menampilkan `key` dan `value` dari suatu `array`

### menggabungkanya dalam satu array

```javascript
console.log([...menu.entries()]);
```

> Jika kita ingin menggabungkan semua nilai yang dihasilkan dalam satu `array`maka kita harus gunakan ... spread operator (untuk mengeluarkan semua nilai) dan kurung besar [] (untuk mengelompokanya dalam satu `array`)

### Destructuring hasil dari method `entries()`

Perlu diketahui mengapa kita bisa melakukan _destructuring_ karena nilai yang dikembalikan oleh method `entries()` berupa `arrays` juga. Sehingga kita bisa memanfaatkanya untuk melakukan _destructuring_ nanti.

```javascript
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}, ${item[1]}`);
}
```

> Dari perulangan didapatkan hasil berupa semua nilai dari `menu` yang disimpan di dalam variable `item` kemudian disini kita akan memanfaatkan `key` dan `value` yang dihasilkan dan men-_destructuringnya_ . Jadi nilai `item[0]` menunjukkan `key` dan `item[1]` menunjukkan `value`

Berarti kita juga bisa ubah variablenya untuk masing-masing order tanpa perlu lagi menyertakan nomer indexnya untuk membaca nilai yang ada di dalamnya :

```javascript
for (const [a, b] of menu.entries()) {
  console.log(`${a + 1}, ${b}`);
}
```

> `a` mewakili nilai item[0] : `key` dan `b` mewakili nilai `item[1]` yang merupakan `value`. Inilah keuntungan kita jika menggunakan _destructuring assignment_.
