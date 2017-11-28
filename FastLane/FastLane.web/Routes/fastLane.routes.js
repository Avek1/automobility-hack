(function () {
    'use strict';

    var app = angular.module('fastLaneApp' + '.routes', []);
    app.config(_configureStates);

    _configureStates.$inject = ['$stateProvider', '$locationProvider'];

    function _configureStates($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state({
                name: 'pedestrians',
                url: '/pedestrians',
                templateUrl: '/Pedestrian_Safety/pedestrian.view.html',
                title: 'Pedestrian Safety',
                controller: 'pedestrianController'
            })
            .state({
                name: 'transit',
                url: '/transit',
                templateUrl: '/transit/transit.html',
                title: 'Transit',
                controller: 'transitController as transitCtrl'
            })
           .state({
            name: 'route',
            url: '/route',
            templateUrl: '/transit/route.html',
            title: 'Route',
            controller: 'routeController as routeCtrl'
        });
    }
})();