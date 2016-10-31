const pilotsRouting = ($stateProvider) => {
    $stateProvider
        .state({
            name:         'pilotsHome',
            url:          '/pilots/home',
            templateUrl:  'pilots/home/home.tpl.html',
            controller:   'PilotsHomeController',
            controllerAs: 'pilotsHome'
        })
};

export default pilotsRouting;