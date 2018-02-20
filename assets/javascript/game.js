// Hangman word options //
var wordBank = ["sunshine", "thunder", "lightening", "hurricane"];              // Selected word
// choses word from word option array //
var randWord = Math.floor(Math.random() * wordBank.length);
// renames randomly chosen word chosenWord for game
var chosenWord = wordBank[randWord];
// creates and array for right and wrong letter guesses
var rightLetter = [];
var wrongLetter = [];

console.log(chosenWord);

// Create underscores based on word length //
var underScore = []; 
var docUnderScore = document.getElementsByClassName('underScore');

var generateUnderscore = () => {
    for(i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
    docUnderScore[0].innerHTML = underScore(" ")
    }

console.log(generateUnderscore());

// Captures keyboard input. 
document.onkeyup = function(event) {

    //  Converts letter input to lowercase, and saves it to a variable guess
    var guess = String.fromCharCode(event.which).toLowerCase();
 
console.log (guess);

    // loop through entire word for multiple instances of the same letter    
    for (i = 0; i < chosenWord.length; i++){
 
    // if guess is right push letter to right letter array then replaces underscore with the right letter
        if(chosenWord.indexOf(guess) > -1) {
        rightLetter.push(guess);
       
        underScore[chosenWord.indexOf(guess)] = guess;

console.log(rightLetter);
console.log(underScore);
 
    // joins all the correctly chosen letters into a word and checks to see if all the letters in the word have been guessed
            if(underScore.join("") == chosenWord) {
            alert("YOU WIN!!");
            }   

        else wrongLetter.push(guess);
console.log(wrongLetter);
 }
}
}



var geusses = [ ];      // Stored geusses
var lives ;             // Lives
var counter ;           // Count correct geusses