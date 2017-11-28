(function () {
    'use strict';
    window.APP = window.APP || {};
    APP.NAME = "fastLaneApp";
    angular
        .module(APP.NAME, ['ui.router', APP.NAME + '.routes', 'ngRoute']);
})();