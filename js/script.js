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
let smallNumber = "Votre nombre choisi est trop petit";
let largeNumber = "Votre nombre choisi est trop grand";
let oneChance = "Attention !";
let userGuess = parseInt(guessField).value;
const containerButton = document.getElementById("container-button");
const button = document.getElementById("container-button button");

// This function is called when the user submits a guess in a form field.

function guessField(numberOfTrials) {
  let numberChoise = document.getElementById("debug").value;
  // document.getElementById("guessField").innerHTML = numberChoise;
  turn(numberChoise);
}

// Function that returns the figures and tells you whether you've won or lost

function turn(numberChoise) {
  if (numberOfTrials > 0) {
    numberOfTrials--;
    if (numberChoise > randomNumber) {
      console.log(`${largeNumber} il vous reste ${numberOfTrials} essais`);
    } else if (numberChoise < randomNumber) {
      console.log(`${smallNumber} il vous reste ${numberOfTrials} essais`);
    } else {
      console.log("Bravo mon ami tu as trouvé !");
      endOfGame();
    }
  } else {
    console.log("Tu as malheureusement perdu... Dommage !");
    endOfGame();
  }
  if (numberOfTrials === 0 && numberChoise !== randomNumber) {
    endOfGame();
  }
}

// Function that takes you back to the end of the game

function endOfGame() {
  console.log("Game Over");
  containerButton.style.textAlign = "center";
}
