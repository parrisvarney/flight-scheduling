export default class ReservationsModel {
    constructor($q) {
        const testReservations = [
            {startTime: '1479733425', duration: '0200', aircraft: 'N8092H', pilot: 'Parris Varney', instructor: null},
            {startTime: '1479819692', duration: '0200', aircraft: 'N8092H', pilot: 'Parris Varney', instructor: null},
            {startTime: '1479303094', duration: '0200', aircraft: 'N8092H', pilot: 'Parris Varney', instructor: null},
        ];

        this.$q     = $q;
        this._reservations = testReservations;
    }

    get reservations() {
        return this._reservations;
    }
}
