(function () {
    angular.module('railApp')
        .factory('railService', railService);

    railService.$inject = ["$log", "$http"];

    function railService($log, $http) {


        var svc = {};
        svc.getStations = _getStations;
        return svc;

        function _getStations(onSuccess, onError) {

            var settings = {
                url: 'http://api.metro.net/agencies/lametro-rail/routes/801/stops',
                method: 'GET'
            };

            return $http(settings)
                .then(onSuccess, onError)

        }
        function onSuccess(Response) {
            console.log(Response)
        }


    }
})();



