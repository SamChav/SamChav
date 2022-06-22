
//first random number in first game
var hiddenNumber = Math.ceil(Math.random() * 10);
//maintain loop until break
var guessedCorrect = false;
//empty string placeholder for exact numbers guessed by user
var guesses = '';
//count of games played, starting with 1
var gamesPlayed = 1;
//empty array will store (.push) number attempts when games end, used to provide user feedback at end of next game
var array = [] 
//store playername for game
var playerName = String(prompt(`What is your name?`));




function guessANumber(num) {
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
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}!`)
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
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries < array[0] && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! And you beat your previous attempt by ${array.pop() - numberOfTries} fewer guesses!`)
            break;
//user plays again, wins, didn't beat last score        
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries > array[0] && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You did better in your last game by ${numberOfTries - array.pop()} guesses.`)
            break;
//user plays again, wins, ties last score
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries === array[0] && numberPicked > 0) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You tied your last game of ${array.pop()} guesses.`)
            break;
        } else if (numberPicked <= 0 || numberPicked.length === 0) {
            alert(`Please pick a number between 1 and 10`)
        }
               
    }
//after game ends, asks user if they would like to play again   
    var playAgain = prompt(`${playerName}, would you like to play again? Type yes or no`);
    array.push(numberOfTries)  
    
    console.log(array)
//if the player chooses yes to play again
    if (playAgain === 'yes' || playAgain === 'Yes') {
//reset number of guesses, reset the number of tries the player had last game, increment games played by 1, generate a new random number for next game.  
        guesses = '';
        console.log(guesses)
        numberOfTries = 1;
        console.log(numberOfTries)
        gamesPlayed++;
        console.log(gamesPlayed)
        hiddenNumber = Math.ceil(Math.random() * 10);
        guessANumber(hiddenNumber);        
//if no or undefined, return nothing and game stops
    } else if (playAgain === 'no' || playAgain === 'No' || playAgain === undefined) {        
        return null;
    }
}

//run game
guessANumber(hiddenNumber);