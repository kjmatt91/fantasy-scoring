// Switch Case function for player selection
function calculateScore(player) {
  let score = 0

  switch (player.position) {
    case ('QB'):
      score = calculateQBScore(player.stats)
      break
    case ('RB'):
      score = calculateRBScore(player.stats)
      break
    case ('WR'):
      score = calculateWRScore(player.stats)
      break
    case ('TE'):
      score = calculateTEScore(player.stats)
      break

    default:
      return 0
  }

  return score
}

// QB Score function
function calculateQBScore(stats) {
  let passingTouchdownScore = stats.passing.touchdowns * scoringTouchdown
  let passingYardsScore = stats.passing.yards / 25
  let rushingTouchdownScore = stats.rushing.touchdowns * scoringTouchdown
  let rushingYards = stats.rushing.yards / 10

  return passingTouchdownScore + passingYardsScore + rushingTouchdownScore + rushingYards
}

// RB Score function
function calculateRBScore(stats) {
  let receivingYardsScore = stats.receiving.yards / 10
  let receptionScore = stats.receiving.receptions * received

  return receivingYardsScore + receptionScore
}

// WR Score function
function calculateWRScore(stats) {
  let rushingFumblesScore = stats.rushing.fumbles * turnover

  return rushingFumblesScore
}

// TE Score function
function calculateTEScore(stats) {
  let receivingFumblesScore = stats.receiving.fumbles * turnover

  return receivingFumblesScore
}

// Default variable for Calculations
const scoringTouchdown = 6
const turnover = -3
const received = 1

modules.exports = calculateScore
