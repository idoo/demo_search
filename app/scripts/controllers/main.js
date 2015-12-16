'use strict';

/**
 * @ngdoc function
 * @name Search App controller MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchApp
 */
angular.module('searchApp')
  .controller('MainCtrl', function ($scope, dataResource) {
    $scope.dataset = dataResource;
  });
