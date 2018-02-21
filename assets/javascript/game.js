function show(elementId){
    document.getElementById("splashScreen").style.display="none";
    document.getElementById("hangmanGame").style.display="none";
    document.getElementById(elementId).style.display="block";
}

// Hangman word options //
var wordBank = ["sunshine", "thunder", "lightening", "hurricane", "tornado", "tsunami", "sleet", "hail", "snow", "rain"];
// variables
var guess;
var rightLetter = [];
var wrongLetter = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var underScore = [];
var docUnderScore = document.getElementsByClassName('underScore');
var docRightLetter = document.getElementsByClassName('rightLetter');
var docWrongLetter = document.getElementsByClassName('wrongLetter');

function startGame(){
    
// choses word from word option array //
randWord = Math.floor(Math.random() * wordBank.length);
// renames randomly chosen word from number in array to chosenWord
var chosenWord = wordBank[randWord];
console.log(chosenWord);
// create underscores based on word length //
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
// print underscores to screen remove comma by reintigrating letters into word (.join) 
docUnderScore[0].innerHTML = underScore.join(" ");
return underScore;
} 
console.log(generateUnderscore());
// print guesses remaining, wins and losses to screen
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
// Main Game - Capture keyboard input - user guesses
document.onkeyup = function(event) {
    //  Converts letter input to lowercase, and saves it to a variable guess
var guess = String.fromCharCode(event.which).toLowerCase();
console.log (guess);
    // see if guess is right 
    if(chosenWord.indexOf(guess) > -1) {
        // loop through entire word for multiple instances of the same letter    
        for (i = 0; i < chosenWord.length; i++){
            // replace underscore with letter then print to screen
            if(chosenWord[i] === guess) {
                underScore[i] = guess;
                rightLetter.push(guess);
                underScore[chosenWord.indexOf(guess)] = guess;
                docUnderScore[0].innerHTML = underScore.join(" ");
            }    
        } 
    }    
    else {
        wrongLetter.push(guess);
        docWrongLetter[0].innerHTML = wrongLetter.join(" ");
        guessesLeft--; 
        if (guessesLeft < 1) {
            losses++;
            document.getElementById("hangmanGame").style.display="none";
            document.getElementById("loseScreen").style.display="block";
        }
    } 

    // joins all the correctly chosen letters into a word and checks to see if all the letters in the word have been guessed
    if(underScore.join("") == chosenWord) {
        wins++;
        document.getElementById("hangmanGame").style.display="none";
        document.getElementById("winScreen").style.display="block";
    }
    }  
}     
startGame();  

 // Reset

 document.getElementById('reset').onclick = function() {
    randWord = [];
    chosenWord = [];
    underScore = []; 
    wrongLetter = [0];
    guessesLeft = 10;
    document.getElementById("winScreen").style.display="none";
    document.getElementById("loseScreen").style.display="none";
    document.getElementById("hangmanGame").style.display="block";
    startGame();
}