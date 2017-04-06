/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var ecitaApp = angular.module("ecitaApp", [
    "ui.router", 
    "ui.bootstrap", 
    "oc.lazyLoad",  
    "ngSanitize",
    "toastr",
    "ngAutocomplete",
    "firebase",
    "ngResource",
    "ngCookies",
    "pascalprecht.translate"
]); 

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
ecitaApp.config(['$ocLazyLoadProvider','$httpProvider', function($ocLazyLoadProvider,$httpProvider) {
    $ocLazyLoadProvider.config({
        cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
    });
    $httpProvider.defaults.withCredentials = true;
//}]).constant('GLOBAL_CONFIG',{'host':'http://ecita.localhost.es'});
}]).constant('GLOBAL_CONFIG',{'host':'http://ecita.localhost.es/',
                                'api':'api/v1_0'});

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
ecitaApp.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
ecitaApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        layoutImgPath: Metronic.getAssetsPath() + 'images',
        layoutCssPath: Metronic.getAssetsPath() + 'styles'
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
ecitaApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        Metronic.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
ecitaApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
ecitaApp.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
}]);

/* Setup Layout Part - Sidebar */
ecitaApp.controller('PageHeadController', ['$scope', function($scope) {
    /*$scope.$on('$includeContentLoaded', function() {        
        Demo.init(); // init theme panel
    });*/   
}]);

/* Setup Layout Part - Footer */
ecitaApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

/* Setup Rounting For All Pages */
ecitaApp.config(['$stateProvider', '$urlRouterProvider','$translateProvider', function($stateProvider, $urlRouterProvider) {

    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/dashboard.html");

    $stateProvider

        // Dashboard
        .state('dashboard', {
            url: "/dashboard.html",
            templateUrl: "views/dashboard.html",            
            data: {pageTitle: 'Dashboard', pageSubTitle: 'statistics & reports'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'bower_components/morris.js/morris.css',
                            'styles/tasks.css',
                            
                            'bower_components/morris.js/morris.min.js',
                            'bower_components/raphael/raphael-min.js',
                            'bower_components/jquery.sparkline/dist/jquery.sparkline.min.js',

                            'scripts/index3.js',
                            'scripts/tasks.js',

                             'scripts/controllers/dashboardcontroller.js'
                        ] 
                    });
                }]
            }
        })
        
        //Contrato
        .state('contrato', {
            url: "/cuenta",
            templateUrl: "views/contrato.html",            
            data: {pageTitle: 'micuentatitle', pageSubTitle: 'micuentasubtitle'},
            controller: "DatosEmpresaCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            
                             'scripts/controllers/datosempresa.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.datos', {
            abstract:true,
            template: '<ui-view/>',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/services/misdatos.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.datos.detalle', {
            url: "/datos.html",
            templateUrl: "views/empresa.datos.html",            
            //data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Información de su cuenta'},
            controller: "EmpresaDatosCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/controllers/empresa.datos.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.datos.editar', {
            url: "/datos/editar.html",
            templateUrl: "views/empresa.datos.editar.html",            
            //data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Información de su cuenta'},
            controller: "EmpresaDatosEditarCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/controllers/empresa.datos.editar.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.facturacion', {
            abstract:true,
            template: '<ui-view/>',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/services/facturacion.js','scripts/services/modospago.js',
                             'scripts/services/tipostarjeta.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.facturacion.detalle', {
            url: "/facturacion.html",
            templateUrl: "views/empresa.facturacion.html",            
            data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Datos de facturación'},
            controller: "EmpresaFacturacionCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/controllers/empresa.facturacion.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.facturacion.editar', {
            url: "/facturacion/editar.html",
            templateUrl: "views/empresa.facturacion.editar.html",            
            data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Datos de facturación'},
            controller: "EmpresaFacturacionEditarCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/controllers/empresa.facturacion.editar.js'
                             
                        ] 
                    });
                }]
            }
        })

        .state('contrato.misservicios', {
            url: "/misservicios.html",
            templateUrl: "views/empresa.misservicios.html",            
            data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Servicios contratados'},
            controller: "EmpresaMisserviciosCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/controllers/empresa.misservicios.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.facturas', {
            abstract:true,
            template: '<ui-view/>'
        })

        .state('contrato.facturas.list', {
            url: "/facturas.html",
            templateUrl: "views/empresa.facturas.html",            
            data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Historial de facturación'},
            controller: "EmpresaFacturasCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'scripts/controllers/empresa.facturas.js'
                        ] 
                    });
                }]
            }
        })

        .state('contrato.facturas.detalle', {
            url: "/facturas/detalle.html",
            templateUrl: "views/empresa.facturas.detalle.html",            
            data: {pageTitle: 'Mi Cuenta', pageSubTitle: 'Historial de facturación'},
            controller: "EmpresaFacturasDetalleCtrl",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'ecitaApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             'styles/invoice.css',
                             'scripts/controllers/empresa.facturas.detalle.js'
                        ] 
                    });
                }]
            }
        })

        

        

}]);


/*ecitaApp.factory('csrfResponseInterceptor', ['$cookies',function ($cookies) {
        return{
            request: function(config){
                if(config.method=='POST'){
                    
                    config.headers['X-CSRF-TOKEN'] = $cookies['XSRF-TOKEN'];
                    debugger;
                    
                }
                
                return config;
            }
        }
}]);*/

ecitaApp.config(['$httpProvider', function($httpProvider) {
   
   //$httpProvider.interceptors.push('csrfResponseInterceptor');
  
   $httpProvider.defaults.xsrfCookieName='XSRF-TOKEN';
   $httpProvider.defaults.xsrfHeaderName='X-CSRF-TOKEN';
   $httpProvider.defaults.withCredentials = true;
   
 
}]);

/*configuración para i18n*/
ecitaApp.config(['$translateProvider','$translatePartialLoaderProvider', function($translateProvider,$translatePartialLoaderProvider) {
   
    $translatePartialLoaderProvider.addPart('misdatos');
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/i18n/{part}/{lang}.json'
    });
    $translateProvider.preferredLanguage('es');
}]);


/* Init global settings and run the app */
ecitaApp.run(["$rootScope", "settings", "$state",function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
}]);