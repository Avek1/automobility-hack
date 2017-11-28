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
                    Authorization: "Bearer 6321a9a2-71ff-45dc-9d77-68bf8b584eb2"
                }
            }).then(resp => resp.data.tires);

            var fuel = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/fuel',
                headers: {
                    Authorization: "Bearer 6321a9a2-71ff-45dc-9d77-68bf8b584eb2"
                }
            }).then(resp => resp.data);

            var location = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/location',
                headers: {
                    Authorization: "Bearer 6321a9a2-71ff-45dc-9d77-68bf8b584eb2"
                }
            }).then(getZipCode);

            function getZipCode(response) {
                var long = response.data.longitude;
                var lat = response.data.latitude;
                
                return $http({

                    method: 'GET',
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key='  //ask for api key, do not push api key to github
                })
            }

            var odometer = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/odometer',
                headers: {
                    Authorization: "Bearer 6321a9a2-71ff-45dc-9d77-68bf8b584eb2"
                }
            }).then(resp => resp.data);

            var isLocked = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/security',
                headers: {
                    Authorization: "Bearer 6321a9a2-71ff-45dc-9d77-68bf8b584eb2"
                }
            }).then(resp => resp.data);

            return $q.all({ tires, fuel, location, odometer, isLocked });
        }
    }
})();