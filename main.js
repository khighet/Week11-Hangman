// Contains the logic of app

var inquirer = require('inquirer');
var Game = require('./game.js');


function promptInput() {
	inquirer.prompt([
	{
		type: 'input',
		name: 'userGuess',
		message: 'Guess a letter'
		
	}
}