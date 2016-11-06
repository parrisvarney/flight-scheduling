'use strict';
describe('ReservationsController', () => {
    let scope,
        $q,
        $state,
        $controller,
        ReservationsModel;

    beforeEach(function() {
        module('ui.router');
        module('flightScheduler');

        angular.mock.module({
            '$state': {
                'go': () => $q.resolve()
            },
            'ReservationsModel': {
            },
        });

        inject(function(_$controller_, $rootScope, _$state_, _$q_, _ReservationsModel_){
            scope             = $rootScope.$new();
            $controller       = _$controller_('ReservationsController as Reservations', {$scope: scope});
            $q                = _$q_;
            $state            = _$state_;
            ReservationsModel = _ReservationsModel_;
        })
    });

    xdescribe('', () => {
        xit('', () => {
        });
    });
});
