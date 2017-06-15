angular.module('app')
  .controller('TomberController', function($scope) {
    $scope.$parent.props = {
        nomDuJeu: "Ne tombe pas dans le panneau!",
        theme: "default",
        consignes: [
            "Sur ce dessin, deux pêcheurs n'ont pas respecté les consignes de sécurité pour pêcher.",
            "Lesquels?"
        ],
        conseils: ["Ne pèche jamais près des lignes élèctriques a hautes tension."],
        indice: ["Les pécheux en danger on quelque choses au dessus d'eux."],
        audio: {
            consignes: "sound/games/tombepanneau/panneau.mp3"
        }
     };


    $scope.badChoice = function() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Mauvaise réponse. Ce pêcheur respecte bien les consignes de sécurité."
      });
    };

    $scope.goodChoice = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Bonne réponse !! Ce pêcheur se met en danger en dessous des lignes élèctriques"
      });
      $scope.$parent.showConfetti = true;
    };

  });
