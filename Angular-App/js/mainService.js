var app = angular.module('app');

app.service('mainService', function ($http) {

	this.getData = function () {
		console.log("Working")
		return $http({
			method: 'GET',
			url: 'localhost:9999/location' 
		})
	}


});