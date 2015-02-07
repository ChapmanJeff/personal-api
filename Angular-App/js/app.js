var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/home.html',
			controller: 'homeCtrl'
		})
		.when('/me', {
			templateUrl: 'js/me/me.html',
			controller: 'meCtrl'
		})
		.when('/skills', {
			templateUrl: 'js/skills/skills.html',
			controller: 'skillsCtrl'
		})



});