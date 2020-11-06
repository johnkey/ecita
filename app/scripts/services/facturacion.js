'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.facturacion
 * @description
 * # facturacion
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .factory('FacturacionSvc', ['BackendlessService','UserSvc',function (backendlessService,userSvc) {
    

    this.get = async function (){
  		
  		var clientId = await userSvc.getCurrentClientId();

  		var where = "CLIENTES[datosFacturacion].objectId='" + clientId + "'";

        return backendlessService.query('DATOS_FACTURACION',where,[ "medioPago"]);
  	  	  	
    }
    return this;
  }]);
