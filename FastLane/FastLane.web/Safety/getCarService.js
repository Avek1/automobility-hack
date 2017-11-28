(function () {
    'use strict'
    angular.module('fastLaneApp')
        .service('getCarService', getCarService)
    getCarService.$inject = ['$http', '$q']

    function getCarService($http, $q) {
        this.getCarInfo = function () {
            var tires = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/tires',
                headers: {
                    Authorization: "Bearer 3154297b-8db2-459f-9f18-8e2b757bbca5"
                }
            }).then(resp => resp.data.tires);

            var fuel = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/fuel',
                headers: {
                    Authorization: "Bearer 3154297b-8db2-459f-9f18-8e2b757bbca5"
                }
            }).then(resp => resp.data);

            var location = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/location',
                headers: {
                    Authorization: "Bearer 3154297b-8db2-459f-9f18-8e2b757bbca5"
                }
            }).then(getZipCode);

            function getZipCode(response) {
                var long = response.data.longitude;
                var lat = response.data.latitude;
                var googleApi; //ask for api key, do not push api key to github
                return $http({
                    method: 'GET',
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=' + googleApi
                })
            }

            var odometer = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/odometer',
                headers: {
                    Authorization: "Bearer 3154297b-8db2-459f-9f18-8e2b757bbca5"
                }
            }).then(resp => resp.data);

            var isLocked = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/security',
                headers: {
                    Authorization: "Bearer 3154297b-8db2-459f-9f18-8e2b757bbca5"
                }
            }).then(resp => resp.data);

            return $q.all({ tires, fuel, location, odometer, isLocked });
        }
    }
})();