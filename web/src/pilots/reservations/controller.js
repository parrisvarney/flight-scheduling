export default class ReservationsController {
    /**
     * @param {$state} $state
     * @param {ReservationsModel} ReservationsModel
     */
    constructor($state, ReservationsModel) {
        this.$state            = $state;
        this.ReservationsModel = ReservationsModel;

        this.calendarModel = null;
    }
}
