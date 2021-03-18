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

// ----- Looping score along with the player name -----
/* Penulisan cara 1 */
// const scoredBy = Object.entries(game.scored);
// console.log(scoredBy);

// for (const [gol, oleh] of scoredBy) {
//   console.log(`Goals ke ${gol} dicetak oleh ${oleh}`);
// }

/* Penulisan cara 2 */
for (const [gol, oleh] of game.scored.entries()) {
  console.log(`Goals ke ${gol} dicetak oleh ${oleh}`);
}

/* ////////////////////////////////// */
// ----- calculate the average of the odds -----

const odds = Object.values(game.odds);
let avr = 0;
for (const calcAvr of odds) avr += calcAvr;
avr /= odds.length;

console.log(avr);

/* ////////////////////////////////// */
// // ----- Print odds -----
for (const [team, odd] of Object.entries(game.odds)) {
  //   console.log(team, odd);
  const teamStr = team === `x` ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// for (const listOdd of odd) kata += `${listOdd} ,`;

// console.log(kata);

// // ----- Bonus -----

// const scores = Object.entries(game.scored);
// console.log(scores);
// for (const list of scores) console.log(`${list[1]}, ${list[0]}`);

// for (const list of scores) {
//   console.log(list);
// }

// for(const l of g)
