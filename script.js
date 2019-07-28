// To Randomly assign 1 of the 5 icons to the webpage
let faviconElem = document.getElementById("favicon");
faviconElem.setAttribute("href", `IMG/Favicons/favicon${Math.floor(5 * Math.random()) + 1}.ico`);

// Start of the Javascript for the actual game
const choices = document.querySelectorAll(".RPSLS > div");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

// Playing the game
function play(e) {
  console.log("e ", e);
  restart.style.display = "table"; // How to style restart button after user choice
  const playerChoice = e.target.parentElement.parentElement.id; // To declare the users choice
  const computerChoice = getComputerChoice(); // Get computers choice
  const svg = e.target.parentElement; // Get the svg the user chose
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice, playerChoice, svg);
  console.log("ptarget ", e.target.parentElement.parentElement.id);
  console.log("pchoice ", playerChoice);
  console.log("cchoice ", computerChoice);
  console.log("winner ", winner);
  console.log("svg ", e.target.parentElement); // Log the svg of the users choice
}

// Get the computers choice
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 5) + 1;
  console.log("rand number ", rand);
  if (rand == 1) {
    return "Rock";
  } else if (rand == 2) {
    return "Paper";
  } else if (rand == 3) {
    return "Scissors";
  } else if (rand == 4) {
    return "Lizard";
  } else if (rand == 5) {
    return "Spock";
  }
}

// Get the games winner/ Game Logic
function getWinner(playerChoice, computerChoice) {
  console.log("Get winner:  player ", playerChoice, "computer ", computerChoice);

  if (playerChoice == computerChoice) {
    //If they chose the same option then it's a draw
    return "Draw";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    // If user chooses Rock & Computer chooses Paper
    return "computer"; // Computer wins since Paper covers Rock
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    // If user chooses Rock & Computer chooses Scissors
    return "player"; // Player wins since Rock crushes Scissors
  } else if (playerChoice == "Rock" && computerChoice == "Lizard") {
    // If user chooses Rock & Computer chooses Lizard
    return "player"; // Player wins since Rock crushes Lizard
  } else if (playerChoice == "Rock" && computerChoice == "Spock") {
    // If user chooses Rock & Computer chooses Spock
    return "computer"; // Computer wins since Spock vaporizes Rock
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    // If user chooses Paper & Computer chooses Rock
    return "player"; // Player wins since Paper covers Rock
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    // If user chooses Paper & Computer chooses Scissors
    return "computer"; // Computer wins since Scissors cuts Paper
  } else if (playerChoice == "Paper" && computerChoice == "Lizard") {
    // If user chooses Paper & Computer chooses Lizard
    return "computer"; // Computer wins since Lizard eats Paper
  } else if (playerChoice == "Paper" && computerChoice == "Spock") {
    // If user chooses Paper & Computer chooses Spock
    return "player"; // Player wins since Paper disproves Spock
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    // If user chooses Scissors & Computer chooses Rock
    return "computer"; // Computer wins since Rock crushes Scissors
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    // If user chooses Scissors & Computer chooses Paper
    return "player"; // Player wins since Scissors cuts Paper
  } else if (playerChoice == "Scissors" && computerChoice == "Lizard") {
    // If user chooses Scissors & Computer chooses Lizard
    return "player"; // Player wins since Scissors decapitates Lizard
  } else if (playerChoice == "Scissors" && computerChoice == "Spock") {
    // If user chooses Scissors & Computer chooses Spock
    return "computer"; // Computer wins since Spock smashes Scissors
  } else if (playerChoice == "Lizard" && computerChoice == "Rock") {
    // If user chooses Lizard & Computer chooses Rock
    return "computer"; // Computer wins since Rock smashes Lizard
  } else if (playerChoice == "Lizard" && computerChoice == "Paper") {
    // If user chooses Lizard & Computer chooses Paper
    return "player"; // Player wins since Lizard eats Paper
  } else if (playerChoice == "Lizard" && computerChoice == "Scissors") {
    // If user chooses Lizard & Computer chooses Scissors
    return "computer"; // Computer wins since Scissors decapitates Lizard
  } else if (playerChoice == "Lizard" && computerChoice == "Spock") {
    // If user chooses Lizard & Computer chooses Spock
    return "player"; // Player wins since Lizard poisons Spock
  } else if (playerChoice == "Spock" && computerChoice == "Rock") {
    // If user chooses Spock & Computer chooses Rock
    return "player"; // player wins since Spock vaporizes Rock
  } else if (playerChoice == "Spock" && computerChoice == "Paper") {
    // If user chooses Spock & Computer chooses Paper
    return "computer"; // computer wins since Paper disproves Spock
  } else if (playerChoice == "Spock" && computerChoice == "Scissors") {
    // If user chooses Spock & Computer chooses Scissors
    return "player"; // player wins since Spock smashes Scissors
  } else if (playerChoice == "Spock" && computerChoice == "Lizard") {
    // If user chooses Spock & Computer chooses Lizard
    return "computer"; // computer wins since Lizard poisons Spock
  }
}

// Show the winner
function showWinner(winner, computerChoice, playerChoice, svg) {
  console.log("Show Winner:  winner ", winner, "computer ", computerChoice, "pchoice ", playerChoice);
  if (winner == "player") {
    // If the winner is the player
    scoreboard.player++; // If player wins add +1 to the score
    result.innerHTML = `
		<h1 class="text-win">You won</h1>
			<div class="result-win">
			${svg.outerHTML}
            </div>
            <p>Computer Chose ${computerChoice}</p>`;
  } else if (winner == "computer") {
    // If the winner is the computer
    scoreboard.computer++; // If computer wins add +1 to the score
    result.innerHTML = `
		<h1 class="text-lose">You Lost</h1>
			<div class="result-lose">
			${svg.outerHTML}
            </div>
            <p>Computer Chose ${computerChoice}</p>`;
  } else {
    // If the choices are the same return a draw
    result.innerHTML = `
		<h1 class="text-draw">It's a Draw</h1>
			<div class="result-draw">
			${svg.outerHTML}
            </div>
            <p>You both Chose ${computerChoice}</p>`;
  }

  // Show the score
  score.innerHTML = `
	<p>Player: ${scoreboard.player}</p>
	<p>Computer: ${scoreboard.computer}</p>
	`;

  modal.style.display = "block"; // Change from none to block
}

// Restart the Game
function restartGame() {
  scoreboard.player = 0; // Return player score back to zero
  scoreboard.computer = 0; // Return computer score back to zero
  score.innerHTML = `
	<p>Player: 0</p>
	<p>Computer: 0</p>
	`;
  restart.style.display = "none"; // Once restarted hide button again
}

// Clear the modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal); // Clear the modal when the user clicks outside
restart.addEventListener("click", restartGame); // Refresh the scores when the user clicks restart

// Restyling for arrows when hovering over a choice
function overRock() {
  var rock = document.querySelectorAll(".RockToScissors, .RockToLizard");
  rock.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outRock() {
  var rock = document.querySelectorAll(".RockToScissors, .RockToLizard");
  rock.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overPaper() {
  var myPara = document.querySelectorAll(".PaperToRock, .PaperToSpock");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outPaper() {
  var myPara = document.querySelectorAll(".PaperToRock, .PaperToSpock");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overScissors() {
  var myPara = document.querySelectorAll(".ScissorsToPaper, .ScissorsToLizard");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outScissors() {
  var myPara = document.querySelectorAll(".ScissorsToPaper, .ScissorsToLizard");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overSpock() {
  var myPara = document.querySelectorAll(".SpockToScissors, .SpockToRock");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outSpock() {
  var myPara = document.querySelectorAll(".SpockToScissors, .SpockToRock");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overLizard() {
  var myPara = document.querySelectorAll(".LizardToSpock, .LizardToPaper");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outLizard() {
  var myPara = document.querySelectorAll(".LizardToSpock, .LizardToPaper");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}
