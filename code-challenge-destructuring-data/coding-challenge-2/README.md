## Looping score along with the player name

### Penulisan dengan cara biasa

Menampung nilai yang dihasilkan oleh method `entries()` ke dalam variable `scoredBy`.

```javascript
const scoredBy = Object.entries(game.scored);
console.log(scoredBy);

for (const [gol, oleh] of scoredBy) {
  console.log(`Goals ke ${gol} dicetak oleh ${oleh}`);
}
```

### Penulisan singkat

Menuliskanya langsung di pengulangan

```javascript
for (const [gol, oleh] of Object.entries(game.scored)) {
  console.log(`Goals ke ${gol} dicetak oleh ${oleh}`);
}
```

## Calculate the average of the odds

Nilai rata-rata diperoleh dari hasil penjumlahan yang terjadi di dalam proses _looping_ dibagi banyaknya nilai yang ada di dalam objek yang akan kita hitung

```javascript
const oddss = Object.values(game.odds); // Refactoring code
let avr = 0; // Nilai awal sebelum diisi kembali
for (const calcAvr of oddss) avr += calcAvr;
avr /= oddss.length; // Dibagi dengan banyaknya jumlah nilai yang ada di dalamnya

console.log(avr);
```

## Print odds

Menampilkan nilai yang ada di `game.odd`. Unt

```javascript
for (const [team, odd] of Object.entries(game.odds)) console.log(team, odd);
```

> `Objek.entries()` akan menghasilkan sebuah `arrays` yang berisikan [`key, values`] yang masing masing itu kita masukkan nilainya ke dalam variable team = `key` dan `odd` = values

karena `x` berbeda sendiri diantara property-property yang lain di dalam objek `game.odds` maka kita akan memanfaatkan ini untuk membuat pengkondisian menggunakan operator ternary

```javascript
const teamStr = team === `x` ? "draw" : `victory ${game[team]}`;
```

> Jika team (`key` dari objek `game.odd`) === x maka tampilkan kondisi 1 : 'draw'. dan jika menunjukkan hasil lain maka tampilkan kondisi 2 : 'victory `${game[team]}`'

`${game[team]}` akan merujuk ke `key` yang nilai `key` tersebut ditampung di dalam variable `team`.

Hasilnya

```javascript
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
```
