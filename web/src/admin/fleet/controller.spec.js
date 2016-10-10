'use strict';
describe('FleetController', () => {
    let scope,
        $q,
        $state,
        $controller,
        FleetModel;

    beforeEach(function() {
        module('ui.router');
        module('flightScheduler');

        angular.mock.module({
            '$state': {
                'go': () => $q.resolve()
            },
            'FleetModel': {
                'addNewAircraft': () => $q.resolve(),
            },
        });

        inject(function(_$controller_, $rootScope, _$state_, _$q_, _FleetModel_){
            scope            = $rootScope.$new();
            $controller      = _$controller_('FleetController as fleet', {$scope: scope});
            $q               = _$q_;
            $state           = _$state_;
            FleetModel       = _FleetModel_;
        })
    });

    describe('addNewAircraft()', () => {
        it('should call FleetModel.saveNewAircraft using the arguments tailNumber, make, model, color', () => {
            const tailNumber = 'Breakfast',
                make         = 'Toast',
                model        = 'Butter',
                color        = 'Jelly';

            spyOn(FleetModel, 'addNewAircraft').and.returnValue($q.resolve());
            $controller.addNewAircraft(tailNumber, make, model, color);

            expect(FleetModel.addNewAircraft).toHaveBeenCalledWith(tailNumber, make, model, color);
        });

        it('changes state to "fleet" after adding the new aircraft', () => {
            const mockAircraft = {tailNumber: 'some plane'};
            spyOn(FleetModel, 'addNewAircraft').and.returnValue($q.resolve(mockAircraft));
            spyOn($state, 'go');

            $controller.addNewAircraft();
            scope.$digest();

            expect($state.go).toHaveBeenCalledWith('fleet');
        });
    });
});
