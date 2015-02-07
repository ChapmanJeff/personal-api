var app = angular.module('app');

app.controller('mainCtrl', function ($scope, mainService) {
$scope.text = 'Jeff'

$scope.getData = function() {
		mainService.getData().then(function(res) {
			console.log(res);
			// $scope.data = res.data;
		})
	};
$scope.getData();
});

