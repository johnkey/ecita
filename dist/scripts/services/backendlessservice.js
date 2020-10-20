'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.BackendlessService
 * @description
 * # BackendlessService
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .service('BackendlessService',function () {
    	
    	this.get = function(collection,id){
	  		
	  		return Backendless.Data.of( collection ).findById( id );
	  	};


});