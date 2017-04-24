angular.module('app')
    .controller('coupableController', function($scope) {
      
      $scope.vrai = function vrai(){
        console.log("bonne réponse");
      };
      $scope.faux = function faux(){
        console.log("Mauvaise réponse");

      };

    });
