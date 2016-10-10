'use strict';

describe('FleetModel', () => {
    let fleetModel,
        $q,
        $scope,
        model;

    beforeEach(() => {
        module('flightScheduler');

        angular.mock.module({
            '$http': {
                'post': () => $q.resolve([])
            }
        });

        inject(function(_$q_, $rootScope){
            $q         = _$q_;
            $scope     = $rootScope.$new();
            fleetModel = new FleetModel($q);
        })
    });

    describe('addNewAircraft()', () => {
        it('pushes the new aircraft to the model', () => {
            const tailNumber = 'Should this be registration number?',
                make = 'Flying Machine',
                model = '2.0',
                color = 'Rainbow';

            fleetModel.addNewAircraft(tailNumber, make, model, color);

            expect(fleetModel.fleet[fleetModel.fleet.length - 1]).toEqual({tailNumber, make, model, color});
        });
    });
});
