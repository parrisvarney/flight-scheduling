'use strict';

describe('ReservationsModel', () => {
    let ReservationsModel,
        $q,
        $scope;

    beforeEach(() => {
        module('flightScheduler');

        angular.mock.module({
            '$http': {
                'post': () => $q.resolve([])
            }
        });

        inject(function(_$q_, $rootScope, _ReservationsModel_){
            $q                = _$q_;
            $scope            = $rootScope.$new();
            ReservationsModel = _ReservationsModel_;
        })
    });

    xdescribe('', () => {
        xit('', () => {
        });
    });
});
