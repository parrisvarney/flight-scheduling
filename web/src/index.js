'use strict';
// Import angular
import angular from 'angular';
import 'angular-ui-router';

// Import angular material
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material/angular-material.css';

// Import project modules
import adminRouting from './admin/routing';
import pilotsRouting from './pilots/routing';

// Import controllers and models
import FleetController from './admin/fleet/controller';
import FleetModel from './admin/fleet/model';
import PilotsController from './admin/pilots/controller';
import PilotsModel from './admin/pilots/model';
import InstructorsController from './admin/instructors/controller';
import InstructorsModel from './admin/instructors/model';

import ReservationsController from './pilots/reservations/controller';
import ReservationsModel from './pilots/reservations/model';
import CalendarComponent from './pilots/reservations/components/calendar';
import CalendarDayComponent from './pilots/reservations/components/calendar-day';

// Initialize project
angular.module('flightScheduler', [
    'ui.router',
    'ngMaterial'
])
.config(adminRouting)
.controller('MainController', ['$scope', function($scope) {}])
.controller('AdminHomeController', ['$scope', function($scope) {}])
.controller('FleetController', FleetController)
.service('FleetModel', FleetModel)
.controller('PilotsController', PilotsController)
.service('PilotsModel', PilotsModel)
.controller('InstructorsController', InstructorsController)
.service('InstructorsModel', InstructorsModel)

.config(pilotsRouting)
.controller('PilotsHomeController', ['$scope', function($scope) {}])
.controller('ReservationsController', ReservationsController)
.service('ReservationsModel', ReservationsModel)
.component('calendar', new CalendarComponent())
.component('day', new CalendarDayComponent())
;