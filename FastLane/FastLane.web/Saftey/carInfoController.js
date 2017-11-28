(function () {
    angular.module('fastLaneApp')
        .controller('carInfoController', carInfoController)

    carInfoController.$inject = ['getCarService']

    function carInfoController(getCarService) {
        var vm = this;
        vm.carInfoArray = []
        //vm.$onInit = onInit
        vm.tireBtn = _tireBtn

        function _tireBtn() {
            getCarService.getTireInfo().then(display)
        }

        //function onInit() {
        //    getCarService.getTireInfo().then(display)
        //}

        function display(response) {
            console.log(response)
            vm.carInfoArray = response
        }
    }
})();

(function () {
    var app = angular.module('fastLaneApp')
    app.config(_configureStates)

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
        controllerAs: 'sc'
    })
})();