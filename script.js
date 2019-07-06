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
	console.log(e.target.parentElement.parentElement.id);
}

// Event Listeners
choices.forEach((choice) => choice.addEventListener('click', play));
