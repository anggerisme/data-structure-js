# Looping arrays - for of

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

```javascript
for (const item of menu.entries()) {
  console.log(item);
}
```

> function/method `entries` mengembalikan `key` dan `value`, Contoh : [1, "gulai ikan"] 1 merupakan `key` dan gulai ikan sebagai `value`

### menggabungkanya dalam satu array

```javascript
console.log([...menu.entries()]);
```

> Jika kita ingin menggabungkan semua nilai yang dihasilkan dalam satu `array`maka kita harus gunakan ... spread operator (untuk mengeluarkan semua nilai) dan kurung besar [] (untuk mengelompokanya dalam satu `array`)
