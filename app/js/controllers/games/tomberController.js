angular.module('app')
  .controller('TomberController', function($scope) {
    $scope.$parent.props = {
        nomDuJeu: "Ne tombe pas dans le panneau!",
        theme: "default",
        consignes: [
            "Sur ce dessin, deux pêcheurs n'ont pas respecté les consignes de sécurité pour pêcher.",
            "Lesquels?"
        ],
        conseils: [],
        indice: [],
        audio: {
            consignes: "sound/games/tombepanneau/panneau.mp3",
            savais: "sound/games/tombepanneau/savais.mp3"
        }
     };


    $scope.badChoice = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Mauvaise réponse. Ce pêcheur respecte bien les consignes de sécurité."
      });
    };

    $scope.goodChoice = function() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bonne réponse !! Ce pêcheur se met en danger en dessous des lignes élèctriques"
      });
    };

  });
