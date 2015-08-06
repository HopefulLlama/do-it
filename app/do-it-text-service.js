doItApp.service('DoItText', [function() {
	this.doItText = [
		"Do it!",
		"Just do it!", 
		"Don't let your dreams be dreams.",
		"Yesterday you said tomorrow, so just do it!",
		"Make your dreams come true.",
		"Just do it.",
		"Some people dream of success, while you're going to wake up and work hard at it.",
		"Nothing is impossible!",
		"You should get to the point where anyone else would quit and you're not going to stop there.",
		"NO! What are you waiting for?!",
		"DO IT!", 
		"JUST DO IT!",
		"YES YOU CAN!", 
		"If you're tired of starting over, stop giving up."
	];

	this.getRandomDoItText = function() {
		return this.doItText[parseInt(Math.random() * (this.doItText.length))];
	};
}]);