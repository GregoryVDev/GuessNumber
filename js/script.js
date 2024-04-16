// Générer un nombre aléatoire entre 1 et 100. (ok)
// Stocker le nombre de tours déjà joués. Commencer par 1.(ok)
// Fournir au joueur le moyen de saisir un nombre.(ok)
// Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.(ok)
// Vérifier si le nombre saisi par le joueur est correct.
// S'il est correct :
// Afficher un message de félicitations.
// Empêcher que le joueur saisisse de nouveau un nombre.
// Afficher un contrôle pour que le joueur puisse rejouer.
// S'il est faux et que le joueur a encore des tours à jouer :
// Informer le joueur que sa proposition de nombre est fausse.
// Lui permettre d'entrer une nouvelle proposition de nombre.
// Incrémenter le nombre de tours de 1.
// S'il est faux et que le joueur n'a plus de tours à jouer :
// Informer le joueur qu'il a perdu et que la partie est finie.
// Empêcher que le joueur saisisse de nouveau un nombre.
// Afficher un contrôle pour que le joueur puisse rejouer.
// Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.

let minimum = 1; // Lower Number
let maximum = 100; // High Number
const randomNumber = Math.floor(Math.random() * (maximum - minimum)) + minimum; // Put the random number
let numberTurns = 1; // Number of turns
let numberOfTrials = 10; // Trials number
let guessedNumbers = []; // Array for stock the number
const proposedNumber = document.getElementById("propositions");
let smallNumber = "Votre nombre choisi est trop petit";
let largeNumber = "Votre nombre choisi est trop grand";
let oneChance = "Attention !";
let userGuess = parseInt(guessField).value;
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

function guessField(numberOfTrials) {
  let numberChoice = document.getElementById("debug").value;
  // document.getElementById("guessField").innerHTML = numberChoise;
  turn(numberChoice);
}

// Function that returns the figures and tells you whether you've won or lost

function turn(numberChoice) {
  if (numberOfTrials > 0) {
    numberOfTrials--;
    if (numberChoice > randomNumber) {
      console.log(
        `${numberChoice} ${largeNumber} il vous reste ${numberOfTrials} essais`
      );
    } else if (numberChoice < randomNumber) {
      console.log(
        `${numberChoice} ${smallNumber} il vous reste ${numberOfTrials} essais`
      );
    } else {
      console.log("Bravo mon ami tu as trouvé !");
      endOfGame();
    }
  } else {
    console.log("Tu as perdu... Dommage !");
    endOfGame();
  }
  if (numberOfTrials === 0 && numberChoice !== randomNumber) {
    endOfGame();
  }
  // Check whether there's only one chance left

  if (numberOfTrials == 1) {
    console.log(`${oneChance} il ne te reste plus qu'${numberOfTrials} essai`);
  }
}

// Function for create the <p>

function createPara(smallNumber, largeNumber, numberChoice) {
  let para = document.createElement("p");
  let resultText = numberChoice + " " + smallNumber + " " + largeNumber;
  document.getElementById("propositions").appendChild(para); // Add the <p> in the #propositions
}

// Function end the game

function endOfGame() {
  containerButton.style.textAlign = "center";
  button.style.display = "block";
  valide.style.display = "none";
}

// Function restart the game

function Replay() {
  // Rechargez simplement la page pour recommencer une nouvelle partie
  window.location.reload();
}

// Ajoutez le gestionnaire d'événements au bouton "Rejouer"
document
  .querySelector("#container-button button")
  .addEventListener("click", Replay);
