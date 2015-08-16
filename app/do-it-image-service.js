doItApp.service('DoItImage', [function() {
	this.baseUrl = "src/assets/images/";
	this.doItImages = [
		{path: "boots.png", orientation: "left"},
		{path: "crush.png", orientation: "right"},
		{path: "illuminati-crotch.png", orientation: "left"},
		{path: "super-saiyan.png", orientation: "right"},
		{path: "wave.png", orientation: "left"}
	];

	this.getRandomDoItImage = function() {
		return this.doItImages[parseInt(Math.random() * (this.doItImages.length))];
	};
}]);