angular.module('app')
    .controller('uneSurTroisController', function($scope) {

      $scope.vrai = function vrai(){
        console.log("Bonne réponse");
      };

      $scope.faux = function faux(){
        console.log("Mauvaise Réponse");
      };


    });
