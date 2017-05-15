angular.module('app')
    .controller('AttitudeController', function($scope) {

      $scope.$parent.theme = "Maison";
      $scope.$parent.nomDuJeu = "La Bonne Attitude";

      $scope.vrai = function(){
        console.log("Bonne réponse");
        $scope.showBulle({
          show: true,
          character: "Greg",
          content: "Félicitation, c'est la bonne réponse"
        });
      };

      $scope.faux = function(){
        console.log("... Sérieux !?");
        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "Non ! La bonne attitude pour les multiprise est de ne pas les superposer !"
        });
      };

    });
