eventsApp.factory('eventData', function($http,$q){
	return {
		getEvents : function(){
			var deferred = $q.defer();
			
			$http({method:'GET', url:'data/events.json'}).
			success(function(data,status,headers,config){
				deferred.resolve(data);
			}).
			error(function(data,status,headers,config){
				deferred.reject(status);
			});

			return deferred.promise;
		}
	};
});