(function () {
    "use strict";
    angular
        .module('fastLaneApp')
        .controller('pedestrianController', PedestrianController);

    PedestrianController.$inject = ['$scope', 'pedestrianService'];

    function PedestrianController($scope, PedestrianService) {
        var vm = this;
        vm.$scope = $scope;
        vm.$onInit = _onInit;
        vm.pedestrianService = PedestrianService;
        vm.getInjury = _getInjury;
        vm.injurySuccess = _injurySuccess;
        vm.injuryError = _injuryError;

        function _onInit() {
            console.log("Pedestrians say hello");
        }

        function _getInjury() {
            vm.pedestrianService.getInjury()
                .then(vm.injurySuccess).catch(vm.injuryError);
        }

        function _injurySuccess(res) {
            console.log("injury success: " + res.data[0]);

            console.log(Object.getOwnPropertyNames(res));

            for (var key in res) {
                if (res.hasOwnProperty("data")) {
                    console.log(key + " -> " + res[key]);
                }
            }
        }

        function _injuryError(err) {
            console.log("injury error: " + err);
        }
    }
})();