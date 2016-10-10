'use strict';

describe('PilotsModel', () => {
    let pilotsModel,
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
            pilotsModel = new PilotsModel($q);
        })
    });

    describe('addNewPilot()', () => {
        it('pushes the new aircraft to the model', () => {
            const fullName = 'Should this be registration number?',
                address = 'Flying Machine',
                ratings = '2.0',
                current = 'Rainbow';

            pilotsModel.addNewPilot(fullName, address, ratings, current);

            expect(pilotsModel.pilots[pilotsModel.pilots.length - 1]).toEqual({fullName, address, ratings, current});
        });
    });
});
