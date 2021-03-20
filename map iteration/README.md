# Map iteration

## Mengubah object menjadi map

Jika kita perhatikan struktur yang dihasilkan oleh `Object.entries()` akan menghasilkan nilai yang sama yaitu [`key, value`] sehingga kita bisa manfaatkan hal ini untuk mengubah suatu `object` ke `Map`

```javascript
console.log(Object.entries(rumahMakan.jamBuka));
const mapJamBuka = new Map(Object.entries(rumahMakan.jamBuka));
console.log(mapJamBuka);
```

![Console log!](https://github.com/anggerisme/data-structure-js/blob/main/map%20iteration/img/carbon.png)
