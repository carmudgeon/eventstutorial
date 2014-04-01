'use strict';

var eventsApp = angular.module('eventsApp',[
	'ngRoute',
	'ngResource',
	'eventsApp.services',
	'eventsApp.controllers',
]);

var eventControllers = angular.module('eventsApp.controllers',[]);

var eventServices = angular.module('eventsApp.services',[]);

eventsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/newEvent', 
	{
		templateUrl: 'partials/NewEvent.html',
		controller: 'EditEventController'
	});
	$routeProvider.when('/events', 
	{
		templateUrl: 'partials/EventsList.html',
		controller: 'EventListController'
	});
	$routeProvider.when('/eventDetails/:eventId',
	{
		templateUrl: 'partials/EventDetails.html',
		controller: 'EventController'
	});
	$routeProvider.otherwise({redirectTo: '/events'});
}]);