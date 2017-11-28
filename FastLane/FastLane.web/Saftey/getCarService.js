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
                    Authorization: "bearer 883c0cfb-c094-46e8-aa30-481afa25c026"
                }
            }).then(resp => resp.data.tires);

            var fuel = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/fuel',
                headers: {
                    Authorization: "bearer 883c0cfb-c094-46e8-aa30-481afa25c026"
                }
            }).then(resp => resp.data);

            var location = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/location',
                headers: {
                    Authorization: "bearer 883c0cfb-c094-46e8-aa30-481afa25c026"
                }
            }).then(resp => resp.data);

            var odometer = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/odometer',
                headers: {
                    Authorization: "bearer 883c0cfb-c094-46e8-aa30-481afa25c026"
                }
            }).then(resp => resp.data);

            var isLocked = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/security',
                headers: {
                    Authorization: "bearer 883c0cfb-c094-46e8-aa30-481afa25c026"
                }
            }).then(resp => resp.data);

            return $q.all({ tires, fuel, location, odometer, isLocked });
        }
    }
})();