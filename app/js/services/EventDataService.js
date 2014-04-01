'use strict';

eventServices.factory('eventData', function($resource){
	var resource = $resource('../data/:id',{id:'@id'});
	return {
		getEvent: function(eventId){
			return  resource.get({id:eventId});
		},
		saveEvent: function(event){
			return resource.save(event);
		},
		getAllEvents: function(){
			/*return resource.query();*/
			return resource.get({id:'events.json'});
		}
	};
});