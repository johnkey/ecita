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

	  	this.query = function(collection,whereClause,relations){
	  		
	  		var storage = Backendless.Data.of( collection );
	  		var queryBuilder = Backendless.DataQueryBuilder.create();
	  		queryBuilder.setRelated(relations);
			queryBuilder.setWhereClause(whereClause);
			
	  		return storage.find( queryBuilder );


	  	};


});