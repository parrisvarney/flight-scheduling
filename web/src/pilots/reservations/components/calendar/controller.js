import moment from 'moment';

export default class CalendarController {
    /**
     * @param {ReservationsModel} ReservationsModel
     */
    constructor(ReservationsModel) {
        this.ReservationsModel = ReservationsModel;
        this._calendar         = this.buildCalendar();
    }

    buildCalendar(month, year) {
        const calendar = {};
        const firstWeekNumber = moment({
            month: month || moment().month(),
            year:  year || moment().year(),
        }).week();

        [0, 1, 2, 3, 4].forEach(weekOffset => {
            calendar[weekOffset] = [];
            [0, 1, 2, 3, 4, 5, 6].forEach(dayOffset => {
                calendar[weekOffset].push(moment().week(firstWeekNumber + weekOffset).day(dayOffset));
            })
        });

        return calendar;
    }

    get calendar() {
        return this._calendar;
    }

    getDayData(day) {
        return {
            displayDate: day.format('MMM D'),
            reservations: this.getDayReservations(day).length,
        };
    }

    getDayReservations(day) {
        const reservations = [];

        this.ReservationsModel.reservations.forEach(reservation => {
            if (day.isSame(moment.unix(reservation.startTime), 'day')) {
                reservations.push(reservation);
            }
        });

        return reservations;
    }
}