(function () {
    'use strict'
    var app = angular.module('fastLaneApp')
    app.config(_configureStates);
    _configureStates.$inject = ['$stateProvider']

    function _configureStates($stateProvider) {
        $stateProvider
            .state({
                name: 'vehicleInfo',
                component: 'vehicleInfoScreen',
                url: '/vehicleInfo'
            })
    }

    app.component('vehicleInfoScreen', {
        templateUrl: 'Safety/safety.html',
        controller: 'carInfoController',
        controllerAs: 'cc'
    })
})();

(function () {
    'use strict'
    angular.module('fastLaneApp')
        .controller('carInfoController', carInfoController)

    carInfoController.$inject = ['getCarService']

    function carInfoController(getCarService) {
        var vm = this;
        vm.fuel;
        vm.odometer;
        vm.location;
        vm.carInfoArray = []
        vm.$onInit = onInit

        function onInit() {
            getCarService.getCarInfo().then(display)
        }

        function display(response) {
            console.log(response)
            vm.location = response.location.data.results[0].formatted_address
            vm.fuel = Math.round(response.fuel.range)
            vm.odometer = Math.round(response.odometer.distance)
            vm.carInfoArray = response
            for (var i = 0; i < vm.carInfoArray.tires.length; i++)
            {
                vm.carInfoArray.tires[i].pressure = Math.round(vm.carInfoArray.tires[i].pressure)
            }
        }
    }
})();
