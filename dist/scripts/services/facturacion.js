'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.facturacion
 * @description
 * # facturacion
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .factory('FacturacionSvc', ['$resource','GLOBAL_CONFIG',function ($resource,globalConfig) {
    

    var facturacion = $resource(globalConfig.host + globalConfig.api + '/facturacion/:id');

    
    // Public API here
    return facturacion;
  }]);
