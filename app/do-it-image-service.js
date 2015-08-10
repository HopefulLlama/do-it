doItApp.service('DoItImage', [function() {
	this.doItImages = [
		{path: "src/assets/boots.png", orientation: "left"},
		{path: "src/assets/crush.png", orientation: "right"},
		{path: "src/assets/illuminati-crotch.png", orientation: "left"},
		{path: "src/assets/super-saiyan.png", orientation: "right"},
		{path: "src/assets/wave.png", orientation: "left"}
	];

	this.getRandomDoItImage = function() {
		return this.doItImages[parseInt(Math.random() * (this.doItImages.length))];
	};
}]);