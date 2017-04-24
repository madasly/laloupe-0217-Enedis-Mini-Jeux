angular.module('app')
    .controller('coupableController', function($scope) {

      $scope.nomDuJeu = "Qui est le Coupable";


      $scope.vrai = function vrai(){
        console.log("bonne réponse");
      };
      $scope.faux = function faux(){
        console.log("Mauvaise réponse");
        
      };

    });
