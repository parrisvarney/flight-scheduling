const pilotsRouting = ($stateProvider) => {
    $stateProvider
        .state({
            name:         'pilotsHome',
            url:          '/pilots/home',
            templateUrl:  'pilots/home/home.tpl.html',
            controller:   'PilotsHomeController',
            controllerAs: 'pilotsHome'
        })
        .state({
            name:         'reservations',
            url:          '/pilots/reservations',
            templateUrl:  'pilots/reservations/reservations.tpl.html',
            controller:   'ReservationsController',
            controllerAs: 'reservations'
        })
};

export default pilotsRouting;