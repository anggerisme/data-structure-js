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

## Nilai boolean untuk memanggil Key

Seperti yang sudah kita pelajari sebelumnya kita dapat menghasilkan nilai `boolean` dari suatu kondisi yang akan memanggil Key yang bernilai `boolean`.
Pertama-tama kita akan membuat kotak dialog `prompt()` untuk menerima masukkan yang akan menentukan apakah `correct` === 3. Ini tergantung dari apa yang user masukkan

```javascript
const jawaban = Number(prompt("Masukkan jawaban"));
console.log(jawaban);
```

> `Number` digunakan untuk mengkonversi apapun yang dimasukkan user menjadi number/angka. selain itu akan bernilai `NaN`

Kemudian input diatas akan menentukan apakah Key `correct` bernilai `3` atau tidak. Jika bernilai `3` (_true_) maka Key yang bertipe boolean `true` akan ditampilkan, sedangkan jika tidak sama dengan `3` (_false_) akan ditampilkan `Key` yang bertipe boolean `false`

```javascript
console.log(besFisika.get(besFisika.get("correct") === jawaban));
```

> besFisika.get() akan mendapatkan nilainya dari hasil konfirmasi apakah `Key` `correct` === jawaban. `jawaban` ini jika di isi 3 maka true dan sebaliknya.

## Mengubah Map menjadi array

Mudah saja kita tinggal tambahkan `[]` dan untuk menampilkan semua isinya cukup tambahkan `spread operator`

```javascript
console.log([...besFisika]);
```
