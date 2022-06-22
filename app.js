
//first random number in first game
var hiddenNumber = Math.ceil(Math.random() * 10);
//maintain loop until break
var guessedCorrect = false;
//empty string placeholder for exact numbers guessed by user
var guesses = '';
//count of games played, starting with 1
var gamesPlayed = 1;
//empty arrayScore will store (.push) number attempts when games end, used to provide user feedback at end of next game
var arrayScore = [];
//this empty array will store player names
var arrayName = [];

//can use a var like var num = Number(numberPicked) (which would be a num)
//use ternary statements?
//use more functions

function guessANumber(num) {
//create playername for game
    var playerName = String(prompt(`What is your name?`));
//set and reset number of tries (number of guesses user has made) to 1
    var numberOfTries = 1;

    console.log(hiddenNumber);

    while (!guessedCorrect) {
//user picks number
        var numberPicked = Number(prompt(`${playerName}, guess a number!`));
        
//first game win condition
        if (numberPicked === hiddenNumber && numberPicked <= 10 && gamesPlayed <= 1 && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}!`);
            break;
//user needs to guess a higher number
        } else if (numberPicked < hiddenNumber && numberPicked > 0) {
            alert(`Sorry ${playerName}, guess higher!`);
            numberOfTries++;
            guesses += numberPicked + ', ';
//user needs to guess a lower number
        } else if (numberPicked > hiddenNumber && numberPicked > 0) {            
            alert(`Sorry ${playerName}, guess lower!`);
            numberOfTries++;
            guesses += numberPicked + ', ';
//user plays again, wins, beat last score            
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries < arrayScore.slice(-1) && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! And you beat the previous attempt by ${arrayScore.slice(-1) - numberOfTries} fewer guesses!`);
            break;
//user plays again, wins, didn't beat last score        
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries > arrayScore.slice(-1) && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You did better last game by ${numberOfTries - arrayScore.slice(-1)} guesses.`);
            break;
//user plays again, wins, ties last score
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries === arrayScore.slice(-1) && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You tied the previous game of ${arrayScore.slice(-1)} guesses.`);
            break;
//needs to pick a number            
        } else if (numberPicked < 0 || numberPicked.length < 0 || numberPicked != Number) {
            alert(`Please pick a number (between 1 and 10)`);
        }
               
    }
//after game ends, asks user if they would like to play again   
    var playAgain = prompt(`${playerName}, would you like to play again? Type yes or no`);
    arrayScore.push(numberOfTries);
    console.log(arrayScore);
//this pushes player names to an array if theyre not already in it
    if (!arrayName.includes(playerName)) {
        arrayName.push(playerName);
        console.log(arrayName);
    }
//if the player chooses yes to play again
    if (playAgain === 'yes' || playAgain === 'Yes') {
//reset number of guesses, reset the number of tries the player had last game, increment games played by 1, generate a new random number for next game, and rerun the game or loop.
        guesses = '';
        console.log(guesses)
        numberOfTries = 1;
        console.log(numberOfTries)        
        gamesPlayed++;
        console.log(gamesPlayed);
        hiddenNumber = Math.ceil(Math.random() * 10);
        guessANumber(hiddenNumber);  
           
//if no or undefined, return nothing and game stops
    } else if (playAgain === 'no' || playAgain === 'No' || playAgain === undefined) {        
        return null;
    }
}

//run game
guessANumber(hiddenNumber);