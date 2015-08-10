doItApp.controller('DoItController', ['$scope', 'DoItText', 'DoItImage', function($scope, DoItText, DoItImage) {
	$scope.doIt = {
		text: null,
		image: null
	};

	$scope.getRandomDoIt = function() {
		$scope.doIt.text = DoItText.getRandomDoItText();
		$scope.doIt.image = DoItImage.getRandomDoItImage();
	};
}]);