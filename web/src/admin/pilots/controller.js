export default class PilotsController {
    /**
     * @param {$state} $state
     * @param {PilotsModel} PilotsModel
     */
    constructor($state, PilotsModel) {
        this.$state     = $state;
        this.PilotsModel = PilotsModel;
    }

    addNewPilot(fullName, address, ratings, current) {
        this.PilotsModel
            .addNewPilot(fullName, address, ratings, current)
            .then(pilot => {
                alert(pilot.fullName + " was successfully added.");

                this.$state.go('pilots');
            });
    }
}
