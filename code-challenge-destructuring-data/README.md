# Rekap materi destructuring data

Kita akan mengimplementasikan atas apa yang telah kita pelajari sejauh ini dengan _code challenge_

Berikut objek yang akan menjadi bahan _code challenge_ kita :

```javascript
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Gosan",
      "Muller",
      "Garrby",
      "Lewandowski",
    ],

    [
      "Marwin",
      "Nico",
      "Axel",
      "Mahmoud",
      "Manuel",
      "Marcel",
      "Emre can",
      "Carvalho",
      "Hazard",
      "Brandt",
      "Reus",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Garrby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2031",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
```

### 1. Memberikan nama untuk masing-masing array yang ada di property players

```javascript
const [players1, players2] = game.players;
console.log(players1, players2);
```

> Karena `arrays` yang ada di dalam property `players` ada 2 `arrays` yang terpisah maka kita dapat memberikanya nama, sehingga kita tidak perlu lagi menggunakan indeks untuk memanggilnya

### 2. Menyimpan nilai array ke dalam variable

```javascript
const [gk, ...fieldPlayer] = players1;
console.log(gk, fieldPlayer);
```

> `gk` akan mewakili indeks/order 0 dan `...fieldPlayer` akan menampung sisanya.

### 3. Menggabungkan kumpulan array dalam satu variable

```javascript
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
```

> Semua nilai yang ada di arrays `players1` dan `players2` dapat sekaligus digabungkan hanya dengan menggunakan `spread` operator

### 4. Menambahkan nilai baru ke dalam arrays

```javascript
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
```

> Kita dapat menyisipkan nilai baru pada suatu `arrays` dengan hanya menuliskanya secara biasa (dipisahkan dengan koma) disamping nilai dari `arrays` sebelumnya (`players1`).

### 5. Destructuring nested objek

#### Penulisan cara 1

```javascript
const { team1, x: draw, team2 } = game.odds; // masih menggunakan parent-nya
console.log(team1, draw, team2);
```

#### Penulisan cara 2

```javascript
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
```

> Karena `odds` merupakan salah satu `property` di dalam objek `game` maka ia ditulis di dalam kurung kurawa ketika ingin men-_destructuring_ objek `game`. Kemudian karena ia juga objek yang bersarang di objek game maka ketika kita ingin menguraikan nilai yang ada di dalamnya kita juga menyertakan `{}`.

### 6. Function untuk menerima banyak argumen

```javascript
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
```

> Ingat bahwa rest (`...`) yang digunakan sebagai parameters diatas sangat berguna untuk menampung banyak argumen sekaligus yang jika hanya menggunakan satu variable saja maka yang dapat dimasukkan ke dalam function hanya satu nilai `array` saja.
> Adapun `players.length` diatas berfungsi untuk mengetahui panjang/banyaknya nilai dari suatu array.

Mari kita gunakan function diatas :

```javascript
printGoals("Davies", "Mueller", "Lewandowski", "Kimmich"); // 4
printGoals("Davies", "Mueller"); // 2
```

### 7. Short-circuit

```javascript
team1 > team2 && console.log("Team 1 kemungkinan akan menang! 🎉");
team2 > team1 && console.log("Team 2 kemungkinan akan menang! 🎉");
```

> Pada logica operator diatas terdapat 2 nilai yaitu [team1 > team2] dan [console.log] yang dipasangkan menggunakan operator logika AND `&&`. Ingat bahwa prinsip dari logika operator adalah semuanya harus benar untuk diproses.
