(function () {
    "use strict";
    angular
        .module("fastLaneApp")
        .factory("pedestrianService", PedestrianService);

    PedestrianService.$inject = ["$http", "$q"];

    function PedestrianService($http, $q) {
        return {
            getInjury: _getInjury,
            //checkVicinity: _checkVicinity
        }

        function _getInjury() {
            return $http.get('http://geohub.lacity.org/datasets/4ba1b8fa8d8946348b29261045298a88_0.geojson')
                .then(_injurySuccess)
                .catch(_injuryError);
        }

        function _injurySuccess(res) {
            return res;
        }

        function _injuryError(err) {
            return $q.reject(err);
        }

        //function _checkVicinity
    }
})();