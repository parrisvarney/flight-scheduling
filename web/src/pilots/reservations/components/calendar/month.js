import CalendarController from './controller';

export default class CalendarComponent {
    constructor() {
        this.templateUrl  = 'pilots/reservations/components/calendar/month.tpl.html';
        this.controller   = CalendarController;
        this.controllerAs = 'calendarVm';
    }
}