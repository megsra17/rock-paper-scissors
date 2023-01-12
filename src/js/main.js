import "../css/styles.css";

import {
  rockEl,
  paperEl,
  scissorsEl,
  resultEl,
  humanScoreEl,
  computerScoreEl,
} from "./element";

import { getRandomIdx } from "./helpers";

//define Rock / Paper / Scissors
var choice = ["r", "p", "s"];
var humanScore = 0;
var computerScore = 0;
var clickable = true;

function resetUI() {
  clickable = true;
  resultEl.innerText = "Rock Paper Scissors";
  choicesElements.forEach(function (el) {
    el.style.display = "block";
    el.classList.remove("loser");
    var spans = el.querySelectorAll("span");
    for (var i = 0; i < spans.length; i++) {
      spans[i].remove();
    }
  });
}

function updateScores() {
  humanScoreEl.innerText = humanScore;
  computerScoreEl.innerText = computerScore;
}

function showResults(personChoiceEl, robotChoiceEl, result) {
  clickable = false;
  resultEl.innerText = result;
  updateScores();
  //hide all 3
  choicesElements.forEach(function (el) {
    el.style.display = "none";
  });
  personChoiceEl.style.display = "block";
  robotChoiceEl.style.display = "block";

  var personSpan = document.createElement("span");
  personSpan.innerText = "You";
  personChoiceEl.appendChild(personSpan);
  var robotSpan = document.createElement("span");
  robotSpan.innerText = "Computer";
  robotChoiceEl.appendChild(robotSpan);

  if (result === "YOU WON") {
    robotChoiceEl.classList.add("loser");
  } else if (result === "YOU LOST") {
    personChoiceEl.classList.add("loser");
  }

  setTimeout(function () {
    resetUI();
  }, 3000);
}

function startRound(event) {
  if (!clickable) return;
  var personChoiceEl = event.target;
  if (event.target.matches("img")) {
    personChoiceEl = event.target.parentElement;
  } else {
    personChoiceEl = event.target;
  }
  var personChoice = personChoiceEl.dataset.letter;

  var robot = getRandomIdx(choice.length);
  var robotChoice = choice[robot];
  var robotChoiceEl = document.querySelector(
    '[data-letter="' + robotChoice + '"]'
  );

  var result;
  if (personChoice === robotChoice) {
    result = "TIED";
  } else if (
    (personChoice === "r" && robotChoice === "s") ||
    (personChoice === "p" && robotChoice === "r") ||
    (personChoice === "s" && robotChoice === "p")
  ) {
    humanScore++;
    result = "YOU WON";
  } else {
    result = "YOU LOST";
    computerScore++;
  }

  showResults(personChoiceEl, robotChoiceEl, result);
}

rockEl.addEventListener("click", startRound);
scissorsEl.addEventListener("click", startRound);
paperEl.addEventListener("click", startRound);

if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.log("HRM Error", err);
    }
  });
}
