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
        vm.checkVicinity = _checkVicinity;
        vm.injuryArray = [];
        vm.highInjuryArray = [];
        vm.sortedArray = [];
        vm.countArray = [];

        function _onInit() {
            console.log("Pedestrians say, 'hello'");
            vm.getInjury();
        }

        function _getInjury() {
            vm.pedestrianService.getInjury()
                .then(vm.injurySuccess).catch(vm.injuryError);
        }

        function _injurySuccess(res) {
            for (var i = 0; i < res.data.features.length; i++) {
                var tempId = res.data.features[i].properties.OBJECTID,
                    tempName = res.data.features[i].properties.STNAME,
                    tempCoord = res.data.features[i].geometry.coordinates[0],
                    tempCount = res.data.features[i].geometry.coordinates.length,
                    tempObj = {
                        id: tempId,
                        name: tempName,
                        coord: tempCoord,
                        count: tempCount
                    }

                vm.injuryArray.push(tempObj);
                vm.countArray.push(tempCount);
                if (res.data.features[i].geometry.coordinates.length > 31) {
                    vm.highInjuryArray.push(res.data.features[i].geometry.coordinates);
                }
            }
            vm.sortedArray = vm.injuryArray.sort(function (a, b) { return b - a });
        }

        function _injuryError(err) {
            console.log("injury error: " + err);
        }

        function _checkVicinity(long, lat, num) {
            var tempArray = [];
            for (var i = 0; i < vm.highInjuryArray.length; i++) {
                for (var t = 0; t < vm.highInjuryArray[i].length; t++) {
                    var long1 = Math.abs(vm.highInjuryArray[i][t][0]) - Math.abs(long),
                        lat1 = vm.highInjuryArray[i][t][1] - lat,
                        sum = Math.abs(long1) + Math.abs(lat1);
                    tempArray.push(sum);
                }
            }
            tempArray.sort(function (a, b) { return a - b });
            tempArray.splice(num);
            
            return tempArray;
        }
    }
})();