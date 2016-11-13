import moment from 'moment';

export default class CalendarController {
    constructor() {
    }

    getWeeks() {
        return [0, 1, 2, 3, 4].map(offset => {
            return moment({month: moment().month()}).week() + offset;
        });
    }

    getDays(week) {
        return [0, 1, 2, 3, 4, 5, 6].map(offset => {
            return moment().week(week).day(offset).format('MMM D');
        });
    }
}