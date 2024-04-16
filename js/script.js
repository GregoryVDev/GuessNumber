let minimum = 1;
let maximum = 100;
const randomNumber = Math.floor(Math.random() * (maximum - minimum)) + minimum; // Put the random number
let numberTurns = 1; // Number of turns
let numberOfTrials = 10; // Trials number
const proposedNumber = document.getElementById("propositions");
let smallNumber = "Votre nombre choisi est trop petit";
let largeNumber = "Votre nombre choisi est trop grand";
let foundNumber = `Félicitation, tu as trouvé ${randomNumber}`;
let failNumber = "Dommage... Tu as perdu(e)";
const valide = document.getElementById("valide");
const containerButton = document.getElementById("container-button");
const button = document.querySelector("#container-button button");

debug.focus(); // Automatically selects the input
debug.addEventListener("keypress", function (e) {
  // An event that lets you press enter to skip the turn
  if (e.key === "Enter") {
    guessField();
    debug.value = ""; // Refresh the input
  }
});

// This function is called when the user submits a guess in a form field.

function guessField() {
  let numberChoice = document.getElementById("debug").value;
  // document.getElementById("guessField").innerHTML = numberChoise;
  turn(numberChoice);
}

// Function that returns the figures and tells you whether you've won or lost

function turn(numberChoice) {
  let response;
  if (!isNaN(numberChoice)) {
    // Checks if numberChoice is a number
    if (numberOfTrials > 0) {
      numberOfTrials--;
      document.getElementById("trials").innerHTML =
        "Essais restants : " + numberOfTrials;
      if (numberChoice > randomNumber) {
        response = `${numberChoice} ${largeNumber}`;
      } else if (numberChoice < randomNumber) {
        response = `${numberChoice} ${smallNumber}`;
      } else {
        response = foundNumber;
        endOfGame();
      }
    }
    if (numberOfTrials === 0 && numberChoice !== randomNumber) {
      response = failNumber;
      endOfGame();
    }
  } else {
    // Displays an error message if numberChoice is not a number
    response = "Veuillez entrer un nombre valide.";
  }
  createPara(response);
}

// Function for create the <p>
function createPara(response, numberChoice) {
  let para = document.createElement("p");
  para.textContent = response;
  document.getElementById("propositions").appendChild(para); // Add the <p> in the #propositions
  para.style.fontWeight = "600";
}

// Function end the game

function endOfGame() {
  let labelForm = document.getElementById("labelform");
  containerButton.style.textAlign = "center";
  button.style.display = "block";
  debug.style.display = "none";
}

// Function restart the game

function Replay() {
  // Simply reload the page to start a new game
  window.location.reload();
}

// Add the event handler to the "Replay" button
document
  .querySelector("#container-button button")
  .addEventListener("click", Replay);
