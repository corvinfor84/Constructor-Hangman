// constructor to display letters individually.
function theLetters(letters){
	this.letters = letters;
	this.visible = false;
	this.letDisplay = function(){
		// ternary operator - shows "-" if this.visible is false. 
		return !(this.visible) ? "-" : this.letters;
	};
};

module.exports = theLetters;