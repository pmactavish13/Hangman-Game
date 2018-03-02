function show(elementId) {
  document.getElementById("splashScreen").style.display="none";
  document.getElementById("hangmanGame").style.display="none";
  document.getElementById("loseScreen").style.display="none";
  document.getElementById("winScreen").style.display="none";
  document.getElementById(elementId).style.display="block";
}  
// variables - global
var winsCounter = (0);
var lossesCounter = (0);
var guessesLeft = 10;
var wordBank = ["sunshine", "thunder", "lightening", "hurricane", "tornado", "tsunami", "sleet", "hail", "snow", "rain"];
var randWord = ""
var chosenWord = [];
var underScore = [];
var guess;
var wrongLetter = [];
var playing = true

// start Game parameters
function startGame() { 
  console.log(chosenWord);
  console.log(underScore)
  console.log(guessesLeft);
  document.getElementById("winsCounter").innerHTML = winsCounter;
  document.getElementById("lossesCounter").innerHTML = lossesCounter;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("notLetter").innerHTML = "Press a Letter to Begin"
}

// choses word from word option array //
randWord = Math.floor(Math.random() * wordBank.length);

// renames randomly chosen word from number in array to chosenWord
chosenWord = wordBank[randWord];

// creates a loop to run = to the length of the array
for(var i = 0; i < chosenWord.length; i++) { 

  // pushes _ into the global underScore array each time the for loop runs
  underScore.push("_");
    
  //print underscores to screen remove comma by reintigrating letters into word (.join) 
  document.getElementById("underScore").innerHTML = underScore.join(" "); 
  }  

// Main Game Play 
// Capture keyboard input - user guesses
document.onkeyup = function(keyPressed) {

  // checks if key pressed has a value of 65 to 90 - the values of A to Z in javascript
  
  if (keyPressed.which <= 65 && keyPressed.which < 91) {
    // Error message if a letter is not pressed
    document.getElementById('notLetter').style.color = "rgba(194, 19, 19, 0.824)";
    document.getElementById("notLetter").innerHTML = "Please Press a Letter" + "<br />" + wrongLetter.join(" ");
    }
  
  if (keyPressed.which >= 65 && keyPressed.which <=90) {
  
    // erases error message when a letter is pressed and returns screen to just wrong guesses
    document.getElementById('notLetter').style.color = "#0c0d57";
    document.getElementById("notLetter").innerHTML = wrongLetter.join(" ")
    
    // sets a global value to guess
    keyPressed = guess;

    // Converts letter input unicode value to string, it uppercase letter, and saves it to a variable guess
    guess = String.fromCharCode(event.which).toLowerCase();

    // check if guessed letter is in word
    if(chosenWord.indexOf(guess) > -1) {

      // loop through entire array for multiple instances of the same letter    
      for (i = 0; i < chosenWord.length; i++){

        // replace underscore with letter then print to screen
        if(chosenWord[i] == guess) {
          underScore[i] = guess;
          underScore[chosenWord.indexOf(guess)] = guess;
          document.getElementById("underScore").innerHTML = underScore.join(" ");
        }  
      }
    } 

  // joins all the correctly chosen letters into a word and checks to see if all the letters in the word have been guessed
  if (underScore.join("") === chosenWord) {
    winsCounter++;
    randWord = ""
    chosenWord = [];
    underScore = [];
    guess;
    wrongLetter = [];
    guessesLeft = 10
    document.getElementById("hangmanGame").style.display="none";
    document.getElementById("winScreen").style.display="block";
  }
  
  // guess was wrong and you still have lives remaing
  if(chosenWord.indexOf(guess) <= -1) {
    guessesLeft--;
    wrongLetter.push(guess);
    document.getElementById("notLetter").innerHTML = wrongLetter.join(" ")
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
  } 
  
  // if no guesses left
  if (guessesLeft < 1) {
    lossesCounter++;
    document.getElementById("lossesCounter").innerHTML = lossesCounter;
    document.getElementById("correct").innerHTML = chosenWord;
    randWord = ""
    chosenWord = [];
    underScore = [];
    guess;
    wrongLetter = [];
    guessesLeft = 10
    // document.getElementById("notLetter").innerHTML = wrongLetter
    document.getElementById("hangmanGame").style.display="none";
    document.getElementById("loseScreen").style.display="block";
  } 
}       
                 
}              
startGame();