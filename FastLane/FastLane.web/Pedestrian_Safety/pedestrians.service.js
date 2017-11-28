(function () {
    "use strict";
    angular
        .module("fastLaneApp")
        .factory("pedestrianService", PedestrianService);

    PedestrianService.$inject = ["$http", "$q"];

    function PedestrianService($http, $q) {
        return {
            authorize: _authorize
        }

        function _authorize() {
            return $http.get('',
                { withCredentials: true })
                .then(_authorizeSuccess)
                .catch(_authorizeError);
        }

        function _authorizeSuccess(res) {
            return res;
        }

        function _authorizeError(err) {
            return $q.reject(err);
        }
    }
})();