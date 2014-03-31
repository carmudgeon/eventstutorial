'use strict';
var eventControllers = angular.module('eventsApp.controllers',[]);

eventControllers.controller('EventController',function EventController($scope,eventData){

	$scope.setCurrentEvent = function(currentEvent){
		$scope.currentEvent = currentEvent;
	};

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};

	$scope.events = eventData.events;
	$scope.event = $scope.events[0];

	$scope.sortOrder = 'name';
});