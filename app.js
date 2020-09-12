'use strict';

var myAPP = angular.module('stripeApp', [ 'ngRoute']);

myAPP.config(function($routeProvider) {
        $routeProvider
             .when('/', {
                  templateUrl: 'pages/home.html',
                  controller: 'orderController',
              })
             .when('/home', {
                  templateUrl: 'pages/home.html',
                  controller: 'orderController',
              }).
              when('/order', {
                  templateUrl: 'pages/home.html',
                  controller: 'orderController',
              }).
              when('/cart', {
                  templateUrl: 'pages/home.html',
                  controller: 'orderController',
              }).
              when('/confirmation', {
                  templateUrl: 'pages/home.html',
                  controller: 'orderController',
              });
    });

myAPP.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}])