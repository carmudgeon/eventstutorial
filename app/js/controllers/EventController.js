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

	eventData.getEvents().then(
		function(event){
			$scope.events = event;
		},
		function(statusCode){
			console.log(statusCode);
		});

	$scope.event = {};

	$scope.sortOrder = 'name';
});