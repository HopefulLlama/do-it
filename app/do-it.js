var doItApp = angular.module('doItApp', []);

doItApp.controller('DoItController', ['$scope', function($scope) {
	$scope.doIt = "Do It!";
}]);