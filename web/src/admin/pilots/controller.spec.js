'use strict';

describe('PilotsController', () => {
    let scope,
        $q,
        $state,
        $controller,
        PilotsModel;

    beforeEach(function() {
        module('ui.router');
        module('flightScheduler');

        angular.mock.module({
            '$state': {
                'go': () => $q.resolve()
            },
            'PilotsModel': {
                'addNewPilot': () => $q.resolve(),
            },
        });

        inject(function(_$controller_, $rootScope, _$state_, _$q_, _PilotsModel_){
            scope            = $rootScope.$new();
            $controller      = _$controller_('PilotsController as pilot', {$scope: scope});
            $q               = _$q_;
            $state           = _$state_;
            PilotsModel       = _PilotsModel_;
        })
    });

    describe('addNewPilot()', () => {
        it('should call PilotsModel.addNewPilot using the arguments tailNumber, make, model, color', () => {
            const fullName = 'Lunch',
                address    = 'Milk steak over hard',
                ratings    = 'Raw jellybeans',
                current    = 'Beak';

            spyOn(PilotsModel, 'addNewPilot').and.returnValue($q.resolve());
            $controller.addNewPilot(fullName, address, ratings, current);

            expect(PilotsModel.addNewPilot).toHaveBeenCalledWith(fullName, address, ratings, current);
        });

        it('changes state to "fleet" after adding the new aircraft', () => {
            const mockPilot = {fullName: 'Link'};
            spyOn(PilotsModel, 'addNewPilot').and.returnValue($q.resolve(mockPilot));
            spyOn($state, 'go');

            $controller.addNewPilot();
            scope.$digest();

            expect($state.go).toHaveBeenCalledWith('pilots');
        });
    });
});
