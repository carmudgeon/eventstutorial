'use strict';

eventControllers.controller('EditEventController',function($scope,eventData){

	$scope.saveEvent = function(obj,newEventForm){
		console.log(newEventForm);
		if (newEventForm.$valid) {
			eventData.saveEvent(obj).$promise.then(
				function(response){
					console.log('success',response);
				},
				function(response){
					console.log('failure',response);
				}
			);
		};		
	};
	$scope.cancelEdit = function(){
		window.location = '/index.html';
	};

});