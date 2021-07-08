function calculateScore(player) {
  let qbScore = (passingYards + passingTd + intercept)

  return qbScore
}

// Variables for calculations
let passingYards = (this.yards / 25)
let passingTd = (this.touchdowns * 6)
let intercept = Number(this.interceptions * -3)
// let rushYards = (this.rushing.yards * 6)

// eslint-disable-next-line no-console
console.log(passingYards)