'use strict';
var eventControllers = angular.module('eventsApp.controllers',[]);

eventControllers.controller('EventController',function($scope){
	$scope.events = [
		{name:"Angular Boot Camp part 1",date:"1/1/2014",time:'10:30 am'},
		{name:"Angular Boot Camp part 2",date:"1/1/2014",time:'11:30 am'},
		{name:"Angular Boot Camp part 3",date:"1/1/2014",time:'12:30 am'}
	];
});