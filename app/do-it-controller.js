doItApp.controller('DoItController', ['$scope', 'DoItQuote', 'DoItImage', function($scope, DoItQuote, DoItImage) {
	$scope.DoItQuote = DoItQuote;
	$scope.DoItImage = DoItImage; 

	$scope.doIt = {
		quote: null,
		image: null
	};

	$scope.withAudio = false;

	$scope.getRandomDoIt = function() {
		$scope.doIt.quote = DoItQuote.getRandomDoItQuote();
		$scope.doIt.image = DoItImage.getRandomDoItImage();

		if($scope.withAudio) {
			var audio = new Audio(DoItQuote.baseUrl + $scope.doIt.quote.audioName);
			audio.play();
		}
	};
}]);