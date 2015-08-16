doItApp.service('DoItQuote', [function() {
	this.baseUrl = "src/assets/audio/";
	this.doItQuote = [
		{text: "Do it!", audioName: "do-it-1.mp3"},
		{text: "Just do it!",  audioName: "just-do-it-1.mp3"},
		{text: "Don't let your dreams be dreams.", audioName: "dont-let-your-dreams-be-dreams.mp3"},
		{text: "Yesterday you said tomorrow, so just do it!", audioName: "yesterday-you-said-tomorrow.mp3"},
		{text: "Make your dreams come true.", audioName: "make-your-dreams-come-true.mp3"},
		{text: "Just do it.", audioName: "just-do-it-2.mp3"},
		{text: "Some people dream of success, while you're going to wake up and work hard at it.", audioName: "some-people-dream-of-success.mp3"},
		{text: "Nothing is impossible!", audioName: "nothing-is-impossible.mp3"},
		{text: "You should get to the point where anyone else would quit and you're not going to stop there.", audioName: "get-to-the-point-where-anyone-else-would-quit.mp3"},
		{text: "NO! What are you waiting for?!", audioName: "no-what-are-you-waiting-for.mp3"},
		{text: "DO IT!",  audioName: "do-it-2.mp3"},
		{text: "JUST... DO IT!", audioName: "just-do-it-3.mp3"},
		{text: "YES YOU CAN!",  audioName: "yes-you-can.mp3"},
		{text: "JUST do it.", audioName: "just-do-it-4.mp3"},
		{text: "If you're tired of starting over, stop giving up.", audioName: "if-youre-tired-of-starting-over.mp3"}
	];

	this.getRandomDoItQuote = function() {
		return this.doItQuote[parseInt(Math.random() * (this.doItQuote.length))];
	};
}]);