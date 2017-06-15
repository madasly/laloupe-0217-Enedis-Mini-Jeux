angular.module('app')
    .controller('SelectionController', function($scope, ProgressionService) {
      $scope.isDone = ProgressionService.isDone;
    });
