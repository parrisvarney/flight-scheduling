'use strict';

describe('InstructorsModel', () => {
    let instructorsModel,
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

        inject(function(_$q_, $rootScope, _InstructorsModel_){
            $q         = _$q_;
            $scope     = $rootScope.$new();
            instructorsModel = _InstructorsModel_;
        })
    });

    describe('addNewInstructor()', () => {
        it('pushes the new aircraft to the model', () => {
            const name = 'Rowdy Rowdy Piper',
                ratings = ['Some test rating', 'Some other rating'];

            instructorsModel.addNewInstructor(name, ratings);

            expect(instructorsModel.instructors[instructorsModel.instructors.length - 1]).toEqual({name, ratings});
        });
    });
});
