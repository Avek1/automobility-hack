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
            console.log(vm.carInfoArray.tires[0].location)
        }
    }
})();