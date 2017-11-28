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
                name: 'dropNGo',
                //component: 'dropNGo',
                url: '/dropngo',
                templateUrl: 'DropNGo/DropNGo.html',
                controller: 'dropNGoController as vm'
            })
            .state({
                name: 'vehicleInfo',
                //component: 'vehicleInfoScreen',
                url: '/vehicleInfo',
                templateUrl: 'Safety/safety.html',
                controller: 'carInfoController as cc'
            });
    }
})();