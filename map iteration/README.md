# Map iteration

## Mengubah object menjadi map

Jika kita perhatikan struktur yang dihasilkan oleh `Object.entries()` akan menghasilkan nilai yang sama yaitu [`key, value`] sehingga kita bisa manfaatkan hal ini untuk mengubah suatu `object` ke `Map`

```javascript
console.log(Object.entries(rumahMakan.jamBuka));
const mapJamBuka = new Map(Object.entries(rumahMakan.jamBuka));
console.log(mapJamBuka);
```

Dibawah ini merupakan hasil `console.log` dari object `RumahMakan.jamBuka` yang memiliki struktur arrays [`key`, `value`] yang sama dengan Map `besFisika` <br>
![Console log!](https://github.com/anggerisme/data-structure-js/blob/main/map%20iteration/img/carbon.png)

Struktur Map `besFisika` : <br>
![Console log!](https://github.com/anggerisme/data-structure-js/blob/main/map%20iteration/img/carbon1.png)

## Looping over Map

Perlu diketahui bahwa yang bisa kita looping adalah `Key` yang bertipe **number**.

```javascript
for (const [key, value] of besFisika) {
  if (typeof key === "number") console.log(`${key} satuan ${value}`);
}
```
