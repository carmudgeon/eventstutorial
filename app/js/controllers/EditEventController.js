'use strict';

eventControllers.controller('EditEventController',function($scope){

	$scope.saveEvent = function(obj,newEventForm){
		console.log(newEventForm);
		if (newEventForm.$valid) {
			alert(JSON.stringify(obj));
		};		
	};
	$scope.cancelEdit = function(){
		window.location = 'index.html';
	};

});