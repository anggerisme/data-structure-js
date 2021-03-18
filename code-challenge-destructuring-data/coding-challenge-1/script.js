// ----- Challenge -----

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Memberikan nama untuk masing-masing array yang ada di property players
const [players1, players2] = game.players;
console.log(players1, players2);

//2. Menyimpan suatu nilai dalam array ke dalam variable
const [gk, ...fieldPlayer] = players1;
console.log(gk, fieldPlayer);

//3. Menggabungkan kumpulan array dalam satu variable
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. Menambahkan nilai baru ke dalam arrays
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

console.log("------ 5 ---------");
//5. Destructuring nested objek
/* Penulisan cara 1 */
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
/* Penulisan cara 2 */
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Rest Parameters : Parameters yang dapat menerima banyak argumen
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Mueller", "Lewandowski", "Kimmich");
printGoals("Davies", "Mueller");

team1 > team2 && console.log(`Team 1 kemungkinan akan menang! 🎉`);
team1 < team2 && console.log(`Team 2 kemungkinan akan menang! 🎉`);
