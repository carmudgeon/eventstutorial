'use strict';

directives.directive('eventThumbnail',function(){
	return {
		restrict: 'E',
		templateUrl:'partials/directives/eventThumbnail.html',
		scope: {
			event: "=event"
		}
	}
});