(function () {

    "use strict";
    angular
        .module("fastLaneApp")
        .factory("transitService", TransitService);

    TransitService.$inject = ["$http"];

    function TransitService($http) {
 
        var svc = {};

       return svc;

       

    };
})();