var letter = require('./letters.js');

function word(used){
	this.used = used;
	this.seen = false;
	this.characters = [];
	this.useLetter = function(){
		for(var i = 0; i < this.used.length; i++){
			this.characters.push( new theLetters(this.used[i]));
		}
	};

	this.getWord = function(){
		this.seen = this.characters.every(function(current){
			return current.visible;
		});
		return this.seen;
	};

	this.userTry = function(userChoice){
		var attempt = 0;
		for(var i = 0; i < this.characters.length; i++){
			if(this.characters[i].letters == userChoice){
				this.characters[i].visible = true;
				attempt++;
			}

		}
			return attempt;

	};

	this.toString = function(){
		var string = '';
		for(var i = 0; i < this.characters.length; i++){
			string += this.characters[i].letDisplay();
		}
		return string;
	};


} 
console.log("words.js is loaded!");

module.exports = word;