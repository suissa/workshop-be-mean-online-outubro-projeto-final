(function(){

  'use strict';

  /* Controllers */

  angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, $http) {

      $http({
        method: 'GET',
        url: '/api/name'
      }).
      success(function (data, status, headers, config) {
        $scope.name = data.name;
      }).
      error(function (data, status, headers, config) {
        $scope.name = 'Error!';
      });

    }).
    controller('MyCtrl1', function ($scope) {
      // write Ctrl here

    }).
    controller('MyCtrl2', function ($scope) {
      // write Ctrl here

    }).
    controller('BeerListController', BeerListController);

  function BeerListController ($scope, $http) {
    var url = '/api/beers',
      method = 'GET';

    $http({
      url: url,
      method: method
    })
    .success(function(data){
      console.log('Data: ', data);
      $scope.beers = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    });
  }

  BeerListController.$inject = ['$scope', '$http'];

}());

