

var hiddenNumber = Math.ceil(Math.random() * 10);

var guessedCorrect = false;

var guesses = '';

var gamesPlayed = 1;

var array = [] 

var playerName = String(prompt(`What is your name?`));



function guessANumber(num) {

    var numberOfTries = 1;

    console.log(hiddenNumber);

    while (!guessedCorrect) {

        var numberPicked = Number(prompt(`${playerName}, guess a number!`));
//edge cases, move top?
        if (numberPicked <= 0 || playerName === null || numberPicked === null || playerName.length <= 0 || playerName === undefined) {
            alert(`Don't want to play, huh?`);
            return null;
        };
//first win
        if (numberPicked === hiddenNumber && numberPicked <= 10 && gamesPlayed <= 1) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}!`)

            break;
//user needs to guess a higher number
        } else if (numberPicked < hiddenNumber) {
            alert(`Sorry ${playerName}, guess higher!`);
            numberOfTries++;
            guesses += numberPicked + ', ';
//user needs to guess a lower number
        } else if (numberPicked > hiddenNumber) {            
            alert(`Sorry ${playerName}, guess lower!`);
            numberOfTries++;
            guesses += numberPicked + ', ';
//user plays again, wins, beat last score            
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries < array[0]) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! And you beat your previous attempt by ${array.pop() - numberOfTries} fewer guesses!`)
            break;
//user plays again, wins, didn't beat last score        
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries > array[0]) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You did better in your last game by ${numberOfTries - array.pop()} guesses.`)
            break;
//user plays again, wins, ties last score
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries === array[0]) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You tied your last game of ${array.pop()} guesses.`)
            break;
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
//if no or undefined, return nothing
    } else if (playAgain === 'no' || playAgain === 'No' || playAgain === undefined) {        
        return null;
    }
}

//run game
guessANumber(hiddenNumber);