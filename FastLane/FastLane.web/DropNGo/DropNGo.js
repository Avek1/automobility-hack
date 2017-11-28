(function () {
    'use strict';

    var app = angular.module('fastLaneApp');

    app.config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider.state({
            name: 'dropNGo',
            component: 'dropNGo',
            url: '/dropngo'
        });
    }

    app.component('dropNGo', {
        templateUrl: 'DropNGo/DropNGo.html',
        controller: 'dropNGoController as vm'
    })

})();

(function () {
    'use strict';
    angular.module('fastLaneApp')
        .controller('dropNGoController', dropNGoController);

    dropNGoController.$inject = ['$state'];

    function dropNGoController($state)
    {
        var vm = this;
    }

})();
