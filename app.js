'use strict';

var myAPP = angular.module('stripeApp', [ 'ngRoute']);

myAPP.config(function($routeProvider) {
// myAPP.config(function($routeProvider) {

        $routeProvider
             .when('/', {
                  templateUrl: 'homepage/home.html',
                  controller: 'homeController',
              })
             .when('/home', {
                  templateUrl: 'homepage/home.html',
                  controller: 'homeController',
              }).
              when('/order', {
                  templateUrl: 'pages/order.html',
                  controller: 'homeController',
              }).
              when('/cart', {
                  templateUrl: 'pages/cart.html',
                  controller: 'homeController',
              }).
              when('/confirmation', {
                  templateUrl: 'pages/confirmation.html',
                  controller: 'homeController',
              }).
              otherwise({
                  redirectTo: '/'
              });
        // use the HTML5 History API
    });