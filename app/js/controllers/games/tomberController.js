angular.module('app')
  .controller('TomberController', function($scope) {

    $scope.$parent.nomDuJeu = "Ne tombe pas dans le panneau!";

    $scope.badChoice = function() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Mauvaise réponse. Ce pecheur respecte bien les consignes de sécurité"
      });
    };

    $scope.goodChoice = function() {
      $scope.animateGreg();
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bonne réponse !! Ce pécheurs ce mets en danger en dessous des ligne élèctrique"
      });
    };

  });
