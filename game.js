// Randomly select a word for the player

var Word = require('./word.js');

var wordBank = ["bumfuzzle", "cattywampus", "piquant", "grub", "piehole", "scalawag"];

//creating a new game
function Game() {
    this.wins = 0;
    this.losses = 0;
    this.livesRemaining = 0;
    this.lettersUsed = [];
    this.word = "";

    //start new game function
    this.startNewGame = function () {
        this.livesRemaining = 10;
        this.lettersUsed = [];
        this.word = this.generateRandomWord();

        //console log welcome to hangman stuff;
        console.log('---------- WELCOME TO NODE HANGMAN ------------\n \n');
        console.log('------ PRESS ANY LETTER AND HIT ENTER TO PLAY ------');
    };

    //generates random word to string
    this.generateRandomWord = function () {
        var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        return new Word(randomWord);
    };

    //what to console log based on what is sent over from main.js
    this.printResults = function (str) {


        switch (str) {
            case "correct":
                console.log('GREAT GUESS');
                console.log('# of guesses left: ' + this.livesRemaining);
                console.log('Letters already used: ' + this.lettersUsed);
                break;
            case "wrong":
                console.log('incorrect');
                console.log('# of guesses left: ' + this.livesRemaining);
                console.log('Letters already used: ' + this.lettersUsed);
                break;
            case "already":
                console.log('already guessed');
                break;
            default:
                console.log('error');
        }

    };

    // end game function if the user no logner wants to play
    this.endGame = function () {
        console.log('Thanks for playing');
        console.log('TOTAL WINS: ' + game.wins);
        console.log('TOTAL LOSSES: ' + game.losses);
    }

}

module.exports = Game;


