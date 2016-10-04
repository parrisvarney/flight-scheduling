'use strict';
angular.module('flightScheduler', [
    'ui.router',
    'ngMaterial'
])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state({
            name:         'admin',
            url:          '/admin/home',
            templateUrl:  'admin/fleet/home.tpl.html',
            controller:   'AdminHomeController',
            controllerAs: 'adminHome'
        })
        .state({
            name:         'fleet',
            url:          '/admin/fleet',
            templateUrl:  'admin/fleet/fleet.tpl.html',
            controller:   'FleetController',
            controllerAs: 'fleet'
        })
        .state({
            name:         'new',
            url:          '/admin/fleet/new',
            templateUrl:  'admin/fleet/new.tpl.html',
            controller:   'FleetController',
            controllerAs: 'fleet'
        })
}])
.controller('MainController', ['$scope', function($scope) {
}])
.controller('AdminHomeController', ['$scope', function($scope) {
}])
.controller('FleetController', FleetController)
.service('FleetModel', FleetModel)
;

