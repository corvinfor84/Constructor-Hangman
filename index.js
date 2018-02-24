var word = require("./word.js");
var prompt = require("prompt");
console.log("Start Game")
console.log("Guess a Letter to figure out the city")

prompt.start();

game = {
 	wordList: ['Chicago', 'Seattle', 'Dallas', 'Austin', 'Baltimore', 'Memphis', 'Miami', 'Orlando', 'Instanbul', 'Rome', 'Budapest'],
 	wordsWon: 0,
 	guessesLeft: 10,
 	selectedWord: null,
 	
 	startGame: function (wrd) {
 		this.reset();
 		this.selectedWord = new word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);
 		this.selectedWord.getWord();
 		this.playerStart();
 	},

 	reset: function(){
 		this.guessesLeft = 10;
 	},

 	playerStart: function(){
 		var self = this;
 		prompt.get(['userChoice'], function(err, result){
 			console.log("You guessed: " + result.userChoice);
 			var letGuessed = self.selectedWord.userTry(result.userChoice);

 			if(letGuessed == 0) {
 				console.log("WRONG");
 				self.guessesLeft--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.selectedWord.findWord()){
 						console.log("You guessed all the letters correctly \nGame Over you Win \nRestart The Game");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesLeft);
 			console.log("x-x-x-x-x-x-x-x");
 			if((self.guessesLeft > 0) && (self.selectedWord.seen == false)){
 				self.playerStart();
 			}
 			else if(self.guessesLeft ==0){
 				console.log("Game over. Correct Word ", self.selectedWord.used);
 			} else {
 				console.log(self.selectedWord.toString());
 			}
 		});

 	}


};

game.startGame();