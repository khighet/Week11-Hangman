// Randomly select a word for the player

var Word = require('./word.js');

var gameWords = ["bumfuzzle", "cattywampus", "piquant", "grub", "piehole", "scalawag"];

function StartGame() {
    this.wins = 0;
    this.losses = 0;
    this.guessesLeft = 0;
    this.lettersGuessed = [];
    this.word;

    this.startNewGame = function() {
        this.guessesLeft = 6;
        this.lettersGuessed = [];
        this.word = this.generateRandomWord();

    };

    this.generateRandomWord = function() {
        var randomWord = gameWords[ Math.floor(Math.random() * gameWords.length) ];
        var currentWord = new Word(randomWord);

        return currentWord;
    };


    module.exports = StartGame;


