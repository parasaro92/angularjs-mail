var myApp = angular
  .module('myApp', ['ngRoute'])

myApp.config(function($routeProvider){

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
      // controllerAs: 'inbox'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

});