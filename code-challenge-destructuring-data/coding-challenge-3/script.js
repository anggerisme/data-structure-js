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

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

// Count the events itself
const newSet = new Set(gameEvents.values());
console.log(newSet);

// Create arrays of gameEvents (all)
for (const [key, value] of gameEvents) {
  console.log([key, value]);
}
