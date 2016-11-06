export default class ReservationsModel {
    constructor($q) {
        const testReservations = [
            {date: '2016-12-12 13:00:00', duration: '0200', aircraft: 'N8092H', pilot: 'Parris Varney', instructor: null},
            {date: '2016-12-13 12:30:00', duration: '0200', aircraft: 'N8092H', pilot: 'Parris Varney', instructor: null},
            {date: '2016-12-14 16:30:00', duration: '0200', aircraft: 'N8092H', pilot: 'Parris Varney', instructor: null},
        ];

        this.$q     = $q;
        this._Reservations = testReservations;
    }

    get Reservations() {
        return this._Reservations;
    }
}
