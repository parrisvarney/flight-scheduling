import moment from 'moment';

export default class CalendarComponent {
    constructor() {
        this.templateUrl  = 'pilots/reservations/components/calendar.tpl.html';
        this.controllerAs = 'calendarComponent';
    }

    controller() {
        const date = new Date(),
            firstOfMonth = moment([date.getFullYear(), date.getMonth()]);
        let day          = 1;

        this.getDay = (dayOfWeek) => {
            if (day > 1 || dayOfWeek == firstOfMonth.format('dd')) {
                return day++;
            }
        }
    }
}