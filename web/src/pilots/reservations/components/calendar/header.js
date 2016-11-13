export default class CalendarHeaderComponent {
    constructor() {
        this.templateUrl  = 'pilots/reservations/components/calendar/header.tpl.html';
        this.controllerAs = 'calendarVm';

        this.bindings = {
            day: '@'
        };
    }
}