angular.module('app')
    .controller('panneauController', function($scope) {

      $scope.faux = function(){
        console.log("Mauvaise réponse");
      };

      $scope.vrai = function(){
        console.log("Bravo !! C'est la bonne réponse");
      };

    });
