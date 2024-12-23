// Set a maximum value for the computer's random choice
let max = 4;

// Get the computer's random choice and store it in the 'computerChoice' variable
function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}
const computerChoice = getComputerChoice(max);

console.log("Computer Choice:", computerChoice);

// Convert user input to a number for comparison (1: rock, 2: paper, 3: scizors)
let humanPromt = prompt("rock, paper or scizors");
let wordToNumber = {
  rock: 1,
  paper: 2,
  scizors: 3,
};

const humanChoice = wordToNumber[humanPromt.toLowerCase()];

// Determine the winner based on the game's rules:
// Rock beats scissors (1 > 3), paper beats rock (2 > 1), and scissors beats paper (3 > 2)
function winner() {
  if (
    (computerChoice === 1 && humanChoice === 3) ||
    (computerChoice === 2 && humanChoice === 1) ||
    (computerChoice === 3 && humanChoice === 2)
  ) {
    console.log("You Win!");
  } else if (humanChoice === computerChoice) {
    console.log("It's a Tie!");
  } else {
    console.log("Computer Wins!");
  }
}

winner();
