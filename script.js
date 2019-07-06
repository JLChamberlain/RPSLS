// To Randomly assign 1 of the 5 icons to the webpage
let faviconElem = document.getElementById('favicon');
faviconElem.setAttribute('href', `IMG/Favicons/favicon${Math.floor(5 * Math.random()) + 1}.ico`);

// Start of the Javascript for the actual game
const choices = document.querySelectorAll('.RPSLS > div');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
	player: 0,
	computer: 0,
};

// Playing the game
function play(e) {
	restart.style.display = 'table'; // How to style restart button after user choice
	const playerChoice = e.target.parentElement.parentElement.id; //To declare the users choice
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice, computerChoice);
	showWinner(winner, computerChoice);
	// Test this with other choices --> console.log(playerChoice, computerChoice, winner); // Log choices and who the winner was.
}

// Get the computers choice
function getComputerChoice() {
	const rand = Math.random();
	if (rand < 0.34) {
		return 'Rock';
	}
	else if (rand <= 0.67) {
		return 'Paper';
	}
	else {
		return 'Scissors';
	}
}

// Get the games winner/ Game Logic
function getWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) { //If they choice the same option then it's a draw
		return 'Draw';
	}

	else if (playerChoice === 'Rock') { // If user choices Rock
		if (computerChoice === 'Paper') { // But computer chooses Paper
			return 'computer'; // Computer wins since Paper covers Rock 
		}
		else {
			return 'player';
		}
	}

	else if (playerChoice === 'Paper') { // If user choices Paper
		if (computerChoice === 'Scissors') { // But computer chooses Scissors
			return 'computer'; // Computer wins since Scissors cuts Paper
		}
		else {
			return 'player';
		}
	}

	else if (playerChoice === 'Scissors') { // If user choices Scissors
		if (computerChoice === 'Rock') { // But computer choices Rock
			return 'computer'; // Computer wins since Rock crushes Scissors
		}
		else {
			return 'player';
		}
	}
}

// Show the winner
function showWinner(winner, computerChoice) {
	if (winner === 'player') { // If the winner is the player
		scoreboard.player++; // If player wins add +1 to the score
		result.innerHTML = `
		<h1 class="text-win">You won</h1>
			<div class="result">
			${computerChoice} 
            </div>
            <p>Computer Chose ${computerChoice}</p>`;
	}

	else if (winner === 'computer') { // If the winner is the computer
		scoreboard.computer++; // If computer wins add +1 to the score
		result.innerHTML = `
		<h1 class="text-lose">You Lost</h1>
			<div class="result">
			${computerChoice} 
            </div>
            <p>Computer Chose ${computerChoice}</p>`;
	}

	else { // If the choices are the same return a draw
		result.innerHTML = `
		<h1>It's a Draw</h1>
			<div class="result">
			${computerChoice} 
            </div>
            <p>Computer Chose ${computerChoice}</p>`;
	}

	// Show the score
	score.innerHTML = `
	<p>Player: ${scoreboard.player}</p>
	<p>Computer: ${scoreboard.computer}</p>
	`;

	modal.style.display = 'block'; // Change from none to block
}

// Restart the Game
function restartGame() {
	scoreboard.player = 0; // Return player score back to zero
	scoreboard.computer = 0; // Return computer score back to zero
	score.innerHTML = `
	<p>Player: 0</p>
	<p>Computer: 0</p>
	`;
}

// Clear the modal
function clearModal(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

// Event Listeners
choices.forEach((choice) => choice.addEventListener('click', play));
window.addEventListener('click', clearModal); // Clear the modal when the user clicks outside
restart.addEventListener('click', restartGame); // Refresh the scores when the user clicks restart
