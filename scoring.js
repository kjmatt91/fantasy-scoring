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
  }

  return score
}

// QB Score function
function calculateQBScore(stats) {
  let passingTouchdownScore = stats.passing.touchdowns * td
  let passingYardsScore = stats.passing.yards / 25
  let rushingTouchdownScore = stats.rushing.touchdowns * td
  let rushingYards = stats.rushing.yards / 10

  return passingTouchdownScore + passingYardsScore + rushingTouchdownScore + rushingYards
}

// RB Score function
function calculateRBScore(stats) {
  let rushingYardsScore = stats.rushing.yards / 10
  let rushingTouchdownScore = stats.rushing.touchdowns * td
  let rushingFumbleScore = stats.rushing.fumbles * turnover
  let receptionScore = stats.receiving.receptions * received
  let receivingYardsScore = stats.receiving.yards / 10
  let receivingTouchdownScore = stats.receiving.touchdowns * td
  let receivingFumbleScore = stats.receiving.fumbles * turnover
  let kickreturnYardsScore = stats.return.kickreturn.yards / 15
  let kickreturnTouchdownScore = stats.return.kickreturn.touchdowns * td
  let kickreturnFumbleScore = stats.return.kickreturn.fumbles * turnover
  let puntreturnYardsScore = stats.return.puntreturn.yards / 15
  let puntreturnTouchdownScore = stats.return.puntreturn.touchdowns * td
  let puntreturnFumbleScore = stats.return.puntreturn.fumbles * turnover

  return rushingYardsScore + rushingTouchdownScore + rushingFumbleScore + receivingYardsScore +
  receptionScore + receivingTouchdownScore + receivingFumbleScore + kickreturnYardsScore + kickreturnTouchdownScore +
  kickreturnFumbleScore + puntreturnYardsScore + puntreturnTouchdownScore + puntreturnFumbleScore
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
const td = 6
const turnover = -3
const received = 1

module.exports = calculateScore
