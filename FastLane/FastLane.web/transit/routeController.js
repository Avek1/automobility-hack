(function () {

    "use strict";
    angular
        .module('fastLaneApp')
        .controller('routeController', RouteController);


    RouteController.$inject = ['transitService'];

    function RouteController(transitService) {
        var vm = this;

    }
})();


