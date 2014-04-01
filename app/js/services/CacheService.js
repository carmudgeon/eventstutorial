'use strict';

eventServices.factory('myCache',function($cacheFactory){
	return $cacheFactory('myCache',{capacity:3});
});