angular.module('app')
    .controller('uneSurTroisController', function($scope) {

      $scope.$parent.nomDuJeu = "Une Chance Sur Trois";
      $scope.$parent.theme = "jardin";

      $scope.vrai = function vrai(){
        console.log("Bonne réponse");
      };

      $scope.faux = function faux(){
        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "mon cul sur la commode"
        });
      };
    });
