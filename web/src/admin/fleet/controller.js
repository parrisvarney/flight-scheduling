export default class FleetController {
    /**
     * @param {$state} $state
     * @param {FleetModel} FleetModel
     */
    constructor($state, FleetModel) {
        this.$state     = $state;
        this.FleetModel = FleetModel;
    }

    addNewAircraft(tailNumber, make, model, color) {
        this.FleetModel
            .addNewAircraft(tailNumber, make, model, color)
            .then(aircraft => {
                alert(aircraft.tailNumber + " was successfully added.");

                this.$state.go('fleet');
            });
    }
}
