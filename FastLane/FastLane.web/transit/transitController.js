(function () {

    "use strict";
    angular
        .module('fastLaneApp')
        .controller('transitController', TransitController);


    TransitController.$inject = ['transitService'];

    function TransitController(transitService) {
        var vm = this;

        vm.station = null;

        vm.departBtnClicked = _departBtnClicked;

        vm.arriveBtnClicked = _arriveBtnClicked;

        vm.searchBtnClicked = _searchBtnClicked;

        vm.searchTerm;

        vm.blueLine = [
            {
                "name": "Pico Station",
                "id": 80121,
                "longitude": -118.26612,
                "latitude": 34.0407299
            },
            {
                "name": "Washington Station",
                "id": 80118,
                "longitude": -118.24308,
                "latitude": 34.0196499
            },
            {
                "name": "Willowbrook - Rosa Parks Station",
                "id": 80112,
                "longitude": -118.23755,
                "latitutde": 33.9280499
            },
            {
                "name": "Vernon Station",
                "id": 80117,
                "longitude": -118.2433,
                "latitude": 34.0029199
            },
            {
                "name": "Downtown Long Beach Station",
                "id": 80101,
                "longitude": -118.19292,
                "latitude": 33.7680699
            },
            {
                "name": "Slauson Station",
                "id": 80116,
                "longitude": -118.2434,
                "latitude": 33.9887599
            },
            {
                "name": "Anaheim Street Station",
                "id": 80105,
                "longitude": -118.18938,
                "latitude": 33.7818299
            },
            {
                "name": "7th Street / Metro Center Station - Metro Blue & Expo Lines",
                "id": 80122,
                "longitude": -118.25882,
                "latitude": 34.0486099
            },
            {
                "name": "Pacific Ave Station",
                "id": 80102,
                "longitude": -118.1937,
                "latitude": 33.7722599
            },
            {
                "name": "5th Street Station",
                "id": 80154,
                "longitude": -118.18941,
                "latitude": 33.7735999
            },
            {
                "name": "San Pedro Street Station",
                "id": 80119,
                "longitude": -118.2555,
                "latitude": 34.0268099
            },
            {
                "name": "Compton Station",
                "id": 80111,
                "longitude": -118.22425,
                "latitude": 33.8974899
            },
            {
                "name": "Del Amo Station",
                "id": 80109,
                "longitude": -118.21102,
                "latitude": 33.8482199
            },
            {
                "name": "Wardlow Station",
                "id": 80108,
                "longitude": -118.19609,
                "latitude": 33.8198599
            },
            {
                "name": "Willow Street Station",
                "id": 80107,
                "longitude": -118.18983,
                "latitude": 33.8070799
            },
            {
                "name": "Florence Station",
                "id": 80115,
                "longitude": -118.24327,
                "latitude": 33.9737399
            },
            {
                "name": "Artesia Station",
                "id": 80110,
                "longitude": -118.2225,
                "latitude": 33.8760799
            },
            {
                "name": "Firestone Station",
                "id": 80114,
                "longitude": -118.2432,
                "latitude": 33.9596099
            },
            {
                "name": "1st Street Station",
                "id": 80153,
                "longitude": -118.18936,
                "latitude": 33.7687399
            },
            {
                "name": "Pacific Coast Hwy Station",
                "id": 80106,
                "longitude": -118.18938,
                "latitude": 33.7890899
            },
            {
                "name": "103rd Street / Watts Towers Station",
                "id": 80113,
                "longitude": -118.24316,
                "latitude": 33.9422199
            },
            {
                "name": "Grand / Lattc Station",
                "id": 80120,
                "longitude": -118.26933,
                "latitude": 34.0331599
            }
        ];


        function _departBtnClicked() {

            vm.searchTerm = "Pico Station";
        };

        function _arriveBtnClicked() {

            vm.searchArrival = "Washington Station";
        };

        function _searchBtnClicked() {
           
        }

    }
})();


