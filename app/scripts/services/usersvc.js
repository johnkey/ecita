'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.UserSvc
 * @description
 * # UserSvc
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .service('UserSvc', function () {
    

      this.getCurrentUser = async function (){
      		
      		var currentUser = await Backendless.UserService.getCurrentUser();

      		return currentUser;
    	}

    	this.getCurrentClientId = async function (){
      		
      		var currentUser = await Backendless.UserService.getCurrentUserId();

      		var loadRelationsQueryBuilder; 
			loadRelationsQueryBuilder = Backendless.LoadRelationsQueryBuilder.create();
			loadRelationsQueryBuilder.setRelationName( "cliente" );
      		var cliente = await Backendless.Data.of( "Users" ).loadRelations(currentUser, loadRelationsQueryBuilder );
      		 
      		return cliente[0].objectId;
    	}

  });
