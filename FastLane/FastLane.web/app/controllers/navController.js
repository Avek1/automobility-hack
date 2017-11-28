(function () {


    angular.module('railApp')
        .controller('navController', NavController);

    NavController.$inject = ["$window", 'railService', 'toastr'];

    function NavController($window, railService, toastr) {


        var vm = this;

        vm.stations = {};

        vm.$onInit = _onInit;

        function _onInit() {

            railService.getStations(_stationSuccess, _stationError);

        }


        function _stationSuccess(response) {
        
            vm.stations = response.data.items;


        };

        function _stationError(response) {
         
        };

    }
})();