angular.module('app')
  .controller('uneSurTroisController', function($scope) {

    $scope.$parent.nomDuJeu = "Une Chance Sur Trois";
    $scope.$parent.theme = "jardin";

    $scope.vrai = function() {
      $scope.animateGreg();
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bonne réponse. Bravo !!"
      });
    };

    $scope.faux = function() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Mauvaise Réponse. À cause de l'eau environnante, il y a un risque de court-circuit, cela pourrait meme provoquer un incendie dans la maison !!"
      });
    };

    $scope.faux2 = function() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Mauvaise Réponse, le fil a etait racommoder avec du ruban adhésif, cela risque de provoquer un court-circuit !"
      });
    };
  });
