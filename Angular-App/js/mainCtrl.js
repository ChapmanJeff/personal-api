var app = angular.module('app');

app.controller('mainCtrl', function ($scope, mainService) {
$scope.text = 'Jeff'

$scope.getData = function() {
		mainService.getData().then(function(res) {
			console.log(res);
			$scope.data = res.data;
			console.log($scope.data)
			$scope.hobbies = $scope.data.hobbies;
			$scope.mentions = $scope.data.mentions;
			$scope.occupation = $scope.data.occupation;
			$scope.references = $scope.data.references;
			$scope.skills = $scope.data.skills;
			console.log($scope.skills);
		})
	};
$scope.getData();

$scope.postData = function(mentions) {
	console.log(mentions);
	mainService.postData(mentions).then(function(res) {
		console.log('res');
		$scope.getData();
		$scope.url = '';
	})
}

$scope.postRefData = function(name) {
	mainService.postRefData(name).then(function(res) {
		console.log('res');
		$scope.getData();
		$scope.Refname = '';
	})
}

$scope.changeLoc = function(location) {
	mainService.putLoc(location).then(function(res) {
		$scope.getData();
		$scope.locChange = '';
	})
}

});

