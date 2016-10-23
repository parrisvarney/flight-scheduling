/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _controller = __webpack_require__(1);

	var _controller2 = _interopRequireDefault(_controller);

	var _model = __webpack_require__(2);

	var _model2 = _interopRequireDefault(_model);

	var _controller3 = __webpack_require__(3);

	var _controller4 = _interopRequireDefault(_controller3);

	var _model3 = __webpack_require__(4);

	var _model4 = _interopRequireDefault(_model3);

	var _controller5 = __webpack_require__(5);

	var _controller6 = _interopRequireDefault(_controller5);

	var _model5 = __webpack_require__(6);

	var _model6 = _interopRequireDefault(_model5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('flightScheduler', ['ui.router', 'ngMaterial']).config(function ($stateProvider) {
	    $stateProvider.state({
	        name: 'default',
	        url: '',
	        templateUrl: 'admin/home/home.tpl.html',
	        controller: 'AdminHomeController',
	        controllerAs: 'adminHome'
	    }).state({
	        name: 'admin',
	        url: '/admin/home',
	        templateUrl: 'admin/home/home.tpl.html',
	        controller: 'AdminHomeController',
	        controllerAs: 'adminHome'
	    }).state({
	        name: 'fleet',
	        url: '/admin/fleet',
	        templateUrl: 'admin/fleet/fleet.tpl.html',
	        controller: 'FleetController',
	        controllerAs: 'fleet'
	    }).state({
	        name: 'new-aircraft',
	        url: '/admin/fleet/new',
	        templateUrl: 'admin/fleet/new.tpl.html',
	        controller: 'FleetController',
	        controllerAs: 'fleet'
	    }).state({
	        name: 'pilots',
	        url: '/admin/pilots',
	        templateUrl: 'admin/pilots/pilots.tpl.html',
	        controller: 'PilotsController',
	        controllerAs: 'pilots'
	    }).state({
	        name: 'new-pilot',
	        url: '/admin/pilots/new',
	        templateUrl: 'admin/pilots/new.tpl.html',
	        controller: 'PilotsController',
	        controllerAs: 'pilots'
	    }).state({
	        name: 'instructors',
	        url: '/admin/instructors',
	        templateUrl: 'admin/instructors/instructors.tpl.html',
	        controller: 'InstructorsController',
	        controllerAs: 'instructors'
	    }).state({
	        name: 'new-instructor',
	        url: '/admin/instructors/new',
	        templateUrl: 'admin/instructors/new.tpl.html',
	        controller: 'InstructorsController',
	        controllerAs: 'instructors'
	    });
	}).controller('MainController', ['$scope', function ($scope) {}]).controller('AdminHomeController', ['$scope', function ($scope) {}]).controller('FleetController', _controller2.default).service('FleetModel', _model2.default).controller('PilotsController', _controller4.default).service('PilotsModel', _model4.default).controller('InstructorsController', _controller6.default).service('InstructorsModel', _model6.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FleetController = function () {
	    /**
	     * @param {$state} $state
	     * @param {FleetModel} FleetModel
	     */
	    function FleetController($state, FleetModel) {
	        _classCallCheck(this, FleetController);

	        this.$state = $state;
	        this.FleetModel = FleetModel;
	    }

	    _createClass(FleetController, [{
	        key: "addNewAircraft",
	        value: function addNewAircraft(tailNumber, make, model, color) {
	            var _this = this;

	            this.FleetModel.addNewAircraft(tailNumber, make, model, color).then(function (aircraft) {
	                alert(aircraft.tailNumber + " was successfully added.");

	                _this.$state.go('fleet');
	            });
	        }
	    }]);

	    return FleetController;
	}();

	exports.default = FleetController;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FleetModel = function () {
	    function FleetModel($q) {
	        _classCallCheck(this, FleetModel);

	        var testAircraft = [{ tailNumber: 'N8092H', make: 'Piper', model: 'Warrior II', color: 'White Blue Gold' }, { tailNumber: 'N3021C', make: 'Piper', model: 'Warrior II', color: 'White Blue Red' }, { tailNumber: 'N276ND', make: 'Piper', model: 'Warrior III', color: 'Green Beige' }];

	        this.$q = $q;
	        this._fleet = testAircraft;
	    }

	    _createClass(FleetModel, [{
	        key: 'addNewAircraft',
	        value: function addNewAircraft(tailNumber, make, model, color) {
	            var aircraft = { tailNumber: tailNumber, make: make, model: model, color: color };
	            this._fleet.push(aircraft);

	            return this.$q.resolve(aircraft);
	        }
	    }, {
	        key: 'fleet',
	        get: function get() {
	            return this._fleet;
	        }
	    }]);

	    return FleetModel;
	}();

	exports.default = FleetModel;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PilotsController = function () {
	    /**
	     * @param {$state} $state
	     * @param {PilotsModel} PilotsModel
	     */
	    function PilotsController($state, PilotsModel) {
	        _classCallCheck(this, PilotsController);

	        this.$state = $state;
	        this.PilotsModel = PilotsModel;
	    }

	    _createClass(PilotsController, [{
	        key: "addNewPilot",
	        value: function addNewPilot(fullName, address, ratings, current) {
	            var _this = this;

	            this.PilotsModel.addNewPilot(fullName, address, ratings, current).then(function (pilot) {
	                alert(pilot.fullName + " was successfully added.");

	                _this.$state.go('pilots');
	            });
	        }
	    }]);

	    return PilotsController;
	}();

	exports.default = PilotsController;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PilotsModel = function () {
	    function PilotsModel($q) {
	        _classCallCheck(this, PilotsModel);

	        var testPilots = [{ fullName: 'Parris Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true }, { fullName: 'Kerri Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true }, { fullName: 'Parris Varney Jr', address: '54 Appleton St', ratings: ['Private Pilot'], current: true }, { fullName: 'Wes Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true }, { fullName: 'Buddah Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true }];

	        this.$q = $q;
	        this._pilots = testPilots;
	    }

	    _createClass(PilotsModel, [{
	        key: 'addNewPilot',
	        value: function addNewPilot(fullName, address, ratings, current) {
	            var aircraft = { fullName: fullName, address: address, ratings: ratings, current: current };
	            this._pilots.push(aircraft);

	            return this.$q.resolve(aircraft);
	        }
	    }, {
	        key: 'pilots',
	        get: function get() {
	            return this._pilots;
	        }
	    }]);

	    return PilotsModel;
	}();

	exports.default = PilotsModel;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InstructorsController = function () {
	    /**
	     * @param {$state} $state
	     * @param {InstructorsModel} InstructorsModel
	     */
	    function InstructorsController($state, InstructorsModel) {
	        _classCallCheck(this, InstructorsController);

	        this.$state = $state;
	        this.InstructorsModel = InstructorsModel;
	    }

	    _createClass(InstructorsController, [{
	        key: "addNewInstructor",
	        value: function addNewInstructor(name, ratings) {
	            var _this = this;

	            this.InstructorsModel.addNewInstructor(name, ratings).then(function (instructor) {
	                alert(instructor.name + " was successfully added.");

	                _this.$state.go('instructors');
	            });
	        }
	    }]);

	    return InstructorsController;
	}();

	exports.default = InstructorsController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InstructorsModel = function () {
	    function InstructorsModel($q) {
	        _classCallCheck(this, InstructorsModel);

	        var instructors = [{ name: 'Surojeet Ghatak', ratings: ['Private Pilot', 'Instruments'] }, { name: 'Derek LeGasse', ratings: ['Private Pilot', 'Instruments'] }, { name: 'Skip Charleston', ratings: ['Private Pilot'] }];

	        this.$q = $q;
	        this._instructors = instructors;
	    }

	    _createClass(InstructorsModel, [{
	        key: 'addNewInstructor',
	        value: function addNewInstructor(name, ratings) {
	            var instructor = { name: name, ratings: ratings };
	            this._instructors.push(instructor);

	            return this.$q.resolve(instructor);
	        }
	    }, {
	        key: 'instructors',
	        get: function get() {
	            return this._instructors;
	        }
	    }]);

	    return InstructorsModel;
	}();

	exports.default = InstructorsModel;

/***/ }
/******/ ]);