(function () {
    angular.module('fastLane')
        .service('getCarService', getCarService)
    getCarService.$inject = ['$http', '$q']

    function getCarService($http, $q) {
        this.getTireInfo = function () {
            var tires = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/tires',
                headers: {
                    Authorization: "bearer a3a1416d-53bc-4025-b760-e74129d35310"
                }
            }).then(resp => resp.data.tires);

            var fuel = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/fuel',
                headers: {
                    Authorization: "bearer a3a1416d-53bc-4025-b760-e74129d35310"
                }
            }).then(resp => resp.data);

            var location = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/location',
                headers: {
                    Authorization: "bearer a3a1416d-53bc-4025-b760-e74129d35310"
                }
            }).then(resp => resp.data);

            var odometer = $http({
                method: 'GET',
                url: 'https://api.smartcar.com/v1.0/vehicles/3563ad5c-d92b-4152-ac57-c720bdbd9fb6/odometer',
                headers: {
                    Authorization: "bearer a3a1416d-53bc-4025-b760-e74129d35310"
                }
            }).then(resp => resp.data);

            return $q.all({ tires, fuel, location, odometer });
        }
    }
})();