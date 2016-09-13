// Should contain all of the methods which will check the letters guessed versus the random word selected.


var Letter = require('./letter.js');

//Constructor for word
var Word = function(wrd) {
	this.word = wrd;
	this.letrs = [];
	this.found = false;
	this.getLetrs = function() {
		for(var i=0; i<this.word.length; i++) {
			this.letrs.push(new letter.Letter(this.word[i]));
		}
	};
	// Finds the word
	this.findWord = function() {
		var counter = 0;
		for(var i=0; i<this.letrs.length; i++) {
			if(this.letrs[i].appear) {
				counter++;
			}
		}
		if(counter == this.letrs.length) {
			this.found = true;
		}
		return this.found;
	};
	// Checks if correct letter is found
	this.ifFound = function(guessLetter) {
		var returnChar = 0;
		for (var i=0; i<this.letrs.length; i++) {
			if(this.letrs[i].character == guessLetter) {
				this.letrs[i].appear = true;
				returnChar++;
			}
		}
		return returnChar;
	};
	// Renders the word
	this.wordRender = function() {
		var strng = "";
		for(var i=0; i<this.letrs.length; i++) {
			strng += this.letrs[i].getCharacter();
		}
		return strng;
	}
}

module.exports = Word;


