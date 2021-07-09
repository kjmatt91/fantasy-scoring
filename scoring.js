function calculateScore(player) {
  let score = 0;
  switch(player.position) {
    case("QB"):
    score = calculateQBScore(player.stats);
    break;
    case("RB"):
    score = calculateRBScore(player.stats);
    break;
    case("WR"):
    score = calculateWRScore(player.stats);
    break;
    case("TE"):
    score = calculateTEScore(player.stats);
    break;

    default:
      return 0
  }
}

function calculateQBScore(stats) {
}

// Variable for Calculations
const scoringTouchdown = 6,
const turnover = -3,
let passingYards = (stats.passing.yards / 25),
let rushingYards =(stats.rushing.yards / 10)
