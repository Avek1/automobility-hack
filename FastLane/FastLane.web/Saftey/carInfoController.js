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
        templateUrl: 'Saftey/saftey.html',
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
        vm.carInfoArray = []
        vm.$onInit = onInit

        //function _tireBtn() {
        //    getCarService.getCarInfo().then(display)
        //}

        function onInit() {
            getCarService.getCarInfo().then(display)
        }

        function display(response) {
            console.log(response)
            vm.carInfoArray = response
        }
    }
})();
