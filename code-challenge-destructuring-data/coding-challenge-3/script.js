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

// Count the events itself
const newSet = new Set(gameEvents.values());
console.log(newSet);

// Create arrays of gameEvents (all)
for (const [key, value] of gameEvents) {
  console.log([key, value]);
}

// Count the average of events
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Remove the yellow card at 64
console.log(gameEvents.delete(64));
console.log(gameEvents);

// Marking the events whether the first half or second
for (const [min, events] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF ${min} : ${events}`);
}
