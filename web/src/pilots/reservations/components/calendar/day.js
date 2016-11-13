export default class CalendarDayComponent {
    constructor() {
        this.templateUrl  = 'pilots/reservations/components/calendar/day.tpl.html';
        this.controllerAs = 'calendarVm';

        this.bindings = {
            date: '@'
        };
    }
}