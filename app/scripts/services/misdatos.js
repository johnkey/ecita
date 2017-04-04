'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.MisDatos
 * @description
 * # MisDatos
 * Factory in the ecitaApp.
 */
angular.module('ecitaApp')
  .factory('MisDatosSvc', ['$resource','GLOBAL_CONFIG',function ($resource,globalConfig) {
    

    var MisDatos = $resource(globalConfig.host + globalConfig.api + '/misdatos/:id');
 

    // Public API here
    return MisDatos;
  }]);
