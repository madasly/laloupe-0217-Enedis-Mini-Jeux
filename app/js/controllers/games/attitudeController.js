angular.module('app')
    .controller('AttitudeController', function($scope) {

      $scope.$parent.props = {
          nomDuJeu: "La Bonne Attitude",
          theme: "attitude",
          consignes: [
              "Observe ces trois vignettes ; une seule montre la bonne attitude à avoir... laquelle ?"
          ],
          conseils: [
              "Dans le salon, on trouve beaucoup d'appareils électriques et souvent, il n'y a pas assez de prises pour tous les brancher.",
              "La solution, c'est d'utiliser des prises multiples ou des rallonges...",
              "Mais attention à ne pas les surcharger, cela pourrait provoquer un incendie !"
          ],
          indice: ["Il ne faut jamais empiler des multiprises !!"],
          audio: {
            conseils:"sound/games/attitude/P5J3.mp3",
            consignes:"sound/games/attitude/labonneattitude.mp3"

          }
      };

      $scope.vrai = function(){
        console.log("Bonne réponse");
        $scope.showBulle({
          show: true,
          character: "Greg",
          content: "Félicitation, c'est la bonne réponse"
        });
        $scope.$parent.showConfetti = true;
      };

      $scope.faux = function(){
        console.log("Mauvaise réponse");
        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "Non ! La bonne attitude pour les multiprises est de ne pas les superposer !"
        });
      };

    });
