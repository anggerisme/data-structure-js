# Looping arrays - for of

`for of` pada prinsipnya bekerja dengan cara yang sama dengan perulangan for biasa

## syntax

Masih menggunakan objek yang sama

```javascript
const menu = [...rumahMakan.makanan];
for (const item of menu) console.log(item);
```

> Jadi secara penulisanya `for` diletakkan diluar kurung yang di dalam kurung tersebut di deklarasikan variable `item` yang menampung nilai nilai yang ada di dalam `menu` (yang juga sudah dideklarasikan sebelumnya)
