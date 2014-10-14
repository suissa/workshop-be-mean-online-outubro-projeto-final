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

    })
    .controller('MyCtrl1', function ($scope) {
      // write Ctrl here

    })
    .controller('MyCtrl2', function ($scope) {
      // write Ctrl here

    })
    .controller('BeerListController', BeerListController)
    .controller('BeerShowController', BeerShowController)
    .controller('BeerCreateController', BeerCreateController)
    .controller('BeerEditController', BeerEditController);

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

    $scope.remove = function (beer) {
      if(confirm('Deseja mesmo remover ' + beer.name + '?')){

        var url = '/api/beers/' + beer._id,
          method = 'DELETE';

        $http({
          url: url,
          method: method
        })
        .success(function(data){
          console.log('Data: ', data);
          alert('Cerveja ' + beer.name + ' removida com SUCESSO!');
          var index = $scope.beers.indexOf(beer);
          console.log('Index', index);
          $scope.beers.splice(index, 1);
        })
        .error(function(err){
          console.log('Erro: ', err);
          alert('Cerveja ' + beer.name + ' não pode ser removida!');
        });
      } else {
        alert('Mas que bom manolo!');
      }
    }
  }

  function BeerShowController ($scope, $http, $routeParams) {
    var id = $routeParams.id,
      url = '/api/beers/' + id,
      method = 'GET';

    $http({
      url: url,
      method: method
    })
    .success(function(data){
      console.log('Show: ', data);
      $scope.beer = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    });
  }

// Create
  function BeerCreateController ($scope, $http) {
    var url = '/api/beers/',
      method = 'POST';

    $scope.save = function (beer) {

      $http({
        url: url,
        method: method,
        data: beer
      })
      .success(function(data){
        console.log('Create: ', data);
        $scope.beer = data;
      })
      .error(function(err){
        console.log('Erro: ', err);
      });

    };
  }

// Edit
  function BeerEditController ($scope, $http, $routeParams) {
    var id = $routeParams.id,
      url = '/api/beers/' + id,
      method = 'GET';

    $http({
      url: url,
      method: method
    })
    .success(function(data){
      console.log('Show: ', data);
      $scope.beer = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    });

    $scope.save = function (beer) {

      var id = $routeParams.id,
        url = '/api/beers/' + id,
        method = 'PUT';

      $http({
        url: url,
        method: method,
        data: beer
      })
      .success(function(data){
        console.log('Update: ', data);
      })
      .error(function(err){
        console.log('Erro: ', err);
      });

    };
  }
  BeerListController.$inject = ['$scope', '$http', '$routeParams'];
  BeerShowController.$inject = ['$scope', '$http', '$routeParams'];
  BeerCreateController.$inject = ['$scope', '$http'];
  BeerEditController.$inject = ['$scope', '$http', '$routeParams'];
}());

