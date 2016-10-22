'use strict';
describe('InstructorsController', () => {
    let scope,
        $q,
        $state,
        $controller,
        InstructorsModel;

    beforeEach(function() {
        module('ui.router');
        module('flightScheduler');

        angular.mock.module({
            '$state': {
                'go': () => $q.resolve()
            },
            'InstructorsModel': {
                'addNewInstructor': () => $q.resolve(),
            },
        });

        inject(function(_$controller_, $rootScope, _$state_, _$q_, _InstructorsModel_){
            scope            = $rootScope.$new();
            $controller      = _$controller_('InstructorsController as fleet', {$scope: scope});
            $q               = _$q_;
            $state           = _$state_;
            InstructorsModel = _InstructorsModel_;
        })
    });

    describe('addNewInstructor()', () => {
        it('should call InstructorsModel.addNewInstructor using the arguments name, ratings', () => {
            const name  = 'José',
                ratings = ['Green', 'Blue'];

            spyOn(InstructorsModel, 'addNewInstructor').and.returnValue($q.resolve());
            $controller.addNewInstructor(name, ratings);

            expect(InstructorsModel.addNewInstructor).toHaveBeenCalledWith(name, ratings);
        });

        it('changes state to "instructors" after adding the new instructor', () => {
            const mockInstructor = {instructor: 'some instructor'};
            spyOn(InstructorsModel, 'addNewInstructor').and.returnValue($q.resolve(mockInstructor));
            spyOn($state, 'go');

            $controller.addNewInstructor();
            scope.$digest();

            expect($state.go).toHaveBeenCalledWith('instructors');
        });
    });
});
