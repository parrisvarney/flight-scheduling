'use strict';

angular.module('flightScheduler', [
    'ui.router',
    'ngMaterial'
])
.config(($stateProvider) => {
    $stateProvider
        .state({
            name:         'default',
            url:          '',
            templateUrl:  'admin/home/home.tpl.html',
            controller:   'AdminHomeController',
            controllerAs: 'adminHome'
        })
        .state({
            name:         'admin',
            url:          '/admin/home',
            templateUrl:  'admin/home/home.tpl.html',
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
            name:         'new-aircraft',
            url:          '/admin/fleet/new',
            templateUrl:  'admin/fleet/new.tpl.html',
            controller:   'FleetController',
            controllerAs: 'fleet'
        })
        .state({
            name:         'pilots',
            url:          '/admin/pilots',
            templateUrl:  'admin/pilots/pilots.tpl.html',
            controller:   'PilotsController',
            controllerAs: 'pilots'
        })
        .state({
            name:         'new-pilot',
            url:          '/admin/pilots/new',
            templateUrl:  'admin/pilots/new.tpl.html',
            controller:   'PilotsController',
            controllerAs: 'pilots'
        })
        .state({
            name:         'instructors',
            url:          '/admin/instructors',
            templateUrl:  'admin/instructors/instructors.tpl.html',
            controller:   'InstructorsController',
            controllerAs: 'instructors'
        })
        .state({
            name:         'new-instructor',
            url:          '/admin/instructors/new',
            templateUrl:  'admin/instructors/new.tpl.html',
            controller:   'InstructorsController',
            controllerAs: 'instructors'
        });
})
.controller('MainController', ['$scope', function($scope) {}])
.controller('AdminHomeController', ['$scope', function($scope) {}])
.controller('FleetController', FleetController)
.service('FleetModel', FleetModel)
.controller('PilotsController', PilotsController)
.service('PilotsModel', PilotsModel)
.controller('InstructorsController', InstructorsController)
.service('InstructorsModel', InstructorsModel)
;

