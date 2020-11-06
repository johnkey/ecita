'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.MisDatos
 * @description
 * # MisDatos
 * Factory in the ecitaApp.
 */
angular.module('ecitaApp')
  .factory('MisDatosSvc', ['BackendlessService','UserSvc',function (backendlessService,userSvc) {
    

  	this.get = async function (){
  		
  		var clientId = await userSvc.getCurrentClientId();

  		var id = {objectId:clientId,
                  loadRelations:'contacto' };
        return backendlessService.get('clientes',id);
  	  	  	
    }



  	return this;
}]);
