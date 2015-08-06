doItApp.controller('DoItController', ['$scope', 'DoItText', function($scope, DoItText) {
	$scope.doIt = {
		text: null
	};

	$scope.getRandomDoIt = function() {
		$scope.doIt.text = DoItText.getRandomDoItText();
	};
}]);