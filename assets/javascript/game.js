

//setting variables for computer pick
var computerGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Different parameters setting
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//math.floor for random pick
var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

var yourGuessesLeft = function() {
  document.getElementById("guessLeft").innerHTML = "Guesses reamining: " + guessesLeft;
};

var guessCounter = function() {
  this.letterToGuess = this.computerGuesses[Math.floor(Math.random() * this.computerGuesses.length)];
};
var remainingGuesses = function() {
   document.getElementById("guessed").innerHTML = "Your Guessed alphabet(s): " + guessedLetters.join(', ');
};



var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  guessCounter();
  yourGuessesLeft();
  remainingGuesses();
}

guessCounter();
yourGuessesLeft();



document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  yourGuessesLeft();
  remainingGuesses();

  if (guessesLeft > 0){
      if (userGuess == letterToGuess){
          wins++;
          document.getElementById("wins").innerHTML = "Wins: " + wins;
          alert("Great! You are brilliant");
          reset();
            }
        }
        
  else if(guessesLeft == 0){
      losses++;
      document.getElementById("losses").innerHTML = "Losses: " + losses;
            alert("Sorry, you failed to guess in given attempts. Try next one!");
            reset();
        }
          
};

