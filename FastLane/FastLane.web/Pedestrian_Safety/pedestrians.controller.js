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
        vm.auth = _auth;
        vm.authSuccess = _authSuccess;
        vm.authError = _authError;

        function _onInit() {
            console.log("Pedestrians say hello");

        }

        function _auth() {
            vm.pedestrianService.authorize()
                .then(vm.authSuccess).catch(vm.authError);
        }

        function _authSuccess(res) {
            console.log("Auth success: " + res);
        }

        function _authError(err) {
            console.log("Auth error: " + err);
        }
    }
})();