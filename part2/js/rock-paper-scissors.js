function rockPaperScissors() {
  const VALID_ANSWERS = ["rock", "paper", "scissors"]
  let computerAnswer = VALID_ANSWERS[Math.floor(Math.random() * Math.floor(3))]
  let humanAnswer = window.prompt("rock, paper or scissors?")

  if (VALID_ANSWERS.includes(humanAnswer.toLowerCase())) {
    if (computerAnswer === humanAnswer) {
      window.alert("It's a tie - try again!")
      rockPaperScissors()
    } else if (computerAnswer === 'rock') {
      humanAnswer === 'paper' ? window.alert("You won! Paper beats rock") : window.alert("You lost! Rock beats scissors")
    } else if (computerAnswer === 'scissors') {
      humanAnswer === 'rock' ? window.alert("You won! Rock beats scissors") : window.alert("You lost! Scissors beats paper")
    } else if (computerAnswer === 'paper') {
      humanAnswer === 'scissors' ? window.alert("You won! Scissors beats paper") : window.alert("You lost! Rock beats scissors")
    }
  } else {
    rockPaperScissors()
  }

}
