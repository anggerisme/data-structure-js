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

```javascript
const gameEvents = new Map([
  [17, "β½ GOAL"],
  [36, "π Substitution"],
  [47, "β½ GOAL"],
  [61, "π Substitution"],
  [64, "π¨ Yellow card"],
  [69, "π₯Red card"],
  [70, "π Substitution"],
  [72, "π Substitution"],
  [76, "β½ GOAL"],
  [80, "β½ GOAL"],
  [92, "π¨ Yellow card"],
]);
```
