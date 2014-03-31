'use strict';

var eventsApp = angular.module('eventsApp',[
	'ngRoute',
	'eventsApp.controllers'
]);

/*
eventsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/events'});
	$routeProvider.when('/events', 
		{
			templateUrl: 'partials/EventsList.html',
			controller: 'EventController'
		});
	$routeProvider.when('/eventDetails',
		{
			templateUrl: 'partials/EventDetails.html',
			controller: 'EventController'
		});
}]);
*/