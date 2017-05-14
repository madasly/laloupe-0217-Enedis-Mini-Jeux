angular.module('app')
    .controller('filGregController', function($scope) {

      $scope.badrep = function(){
        console.log("mauvaise réponse");
      };

      $scope.goodrep = function(){
        console.log("bonne réponse");
      };

    });
