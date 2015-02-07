var app = angular.module('app');

app.service('mainService', function ($http) {

	this.getData = function () {
		console.log("Working1")
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/user'  
		})
	}

	this.postData = function(mentions) {
		console.log(mentions);
		return $http({
			method: 'POST',
			url: 'http://localhost:9999/mentions',
			data: {mention : mentions}
		})
	}

	this.postRefData = function(name) {
		return $http({
			method: 'POST',
			url: 'http://localhost:9999/references',
			data: {reference : name}
		})
	}

	this.putLoc = function(loc) {
		return $http({
			method: 'PUT',
			url: 'http://localhost:9999/location',
			data: {location : loc}
		})
	}

});