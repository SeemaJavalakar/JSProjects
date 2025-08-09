const actaulNumber = parseInt(Math.round(Math.random()*100)+1);

const submit = document.querySelector("#subt");
const userInout = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHigh =  document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const remainingGuesses = document.querySelector(".remainingGuesses");
const p = document.createElement('p');
let preGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault(); 
    const guess = parseInt(userInout.value);
    validateGuess(guess);  })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100) {
        displayMessage("Please enter a valid number between 1 and 100.");
        return;
    }
    if(guess===actaulNumber){
      endGame("Congratulations! You got it right!");
    }
    else{ 
      preGuess.push(guess); 
      if(numGuess===11){
        displayGuess(guess);
      displayMessage(`Game Over. Random number was ${actaulNumber}`)  
    endGame();    }
      else{
        displayGuess(guess);
        checkGuess(guess);
      
      }
    }
}

function checkGuess(guess){
  if(guess == actaulNumber){
    displayMessage("Congratulations! You got it right!");
   endGame()}
   else if(guess < actaulNumber){
    displayMessage("Last guess was too low!");} 
     else if(guess > actaulNumber){
    displayMessage("Last guess was too high!");}
  }

function displayGuess(guess){
    userInout.value = "";
    prevGuesses.innerHTML += `${guess }`
    numGuess++;
    remainingGuesses.innerHTML = `${11 - numGuess}`;
    
}

function displayMessage(msg){
   lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame(){
   userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}

function newGame(){
   const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    actaulNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
