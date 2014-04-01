'use strict';

eventControllers.controller('EventController',function EventController($scope,$routeParams,eventData){

	$scope.setCurrentEvent = function(currentEvent){
		$scope.currentEvent = currentEvent;
	};

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};    


	eventData.getEvent($routeParams.eventId).$promise.then(
		function(response){ 
			console.log(response);
			$scope.event = response;
			
		},
		function(response){
			console.log(response)
		}
	);
	
	$scope.sortOrder = 'name';
});