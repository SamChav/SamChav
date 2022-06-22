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

        if(numberPicked === 0 || playerName === null || numberPicked === null || playerName.length === 0) break;

        if(numberPicked === hiddenNumber && numberPicked <= 10 && gamesPlayed <= 1){
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}!`)

            break;

        } else if (numberPicked < hiddenNumber) {
            alert(`Sorry ${playerName}, guess higher!`);
            numberOfTries++;
            guesses += numberPicked + ', ';

        } else if (numberPicked > hiddenNumber) {            
            alert(`Sorry ${playerName}, guess lower!`);
            numberOfTries++;
            guesses += numberPicked + ', ';
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries < array[0]) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! And you beat your previous attempt by ${array.pop() - numberOfTries} fewer guesses!`)
            
            break;
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries > array[0]) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You did better in your last game by ${numberOfTries - array.pop()} guesses.`)

            break;
        } else if (gamesPlayed > 1 && numberPicked === hiddenNumber && numberPicked <= 10 && numberOfTries === array[0]) {
            guesses += numberPicked;
            guesses.length - 1;            
            alert(`Correct, ${playerName}! It took you ${numberOfTries} tries! You tried: ${guesses}! You tied your last game of ${array.pop()} guesses.`)

            break;
        }
               
    }
    var playAgain = prompt(`${playerName}, would you like to play again? Type yes or no`);
    array.push(numberOfTries)  
    
console.log(array)
    if (playAgain === 'yes' || playAgain === 'Yes') {
        
        guesses = '';
        console.log(guesses)
        numberOfTries = 1;
        console.log(numberOfTries)
        gamesPlayed++;
        console.log(gamesPlayed)
        hiddenNumber = Math.ceil(Math.random() * 10);
        guessANumber(hiddenNumber);        

    } else if (playAgain === 'no' || playAgain === 'No' || playAgain === undefined) {        
        return null;
    }
}


guessANumber(hiddenNumber);

//im sure there are some small edge cases left but this took me forever.