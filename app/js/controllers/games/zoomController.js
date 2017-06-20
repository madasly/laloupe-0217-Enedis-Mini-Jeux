angular.module('app')
    .controller('ZoomController', function($scope) {

      // variable d'information général du jeu
      $scope.$parent.props = {
          id:'zoom',
          nomDuJeu: "Zoom sur ...",
          theme: "zoom",
          consignes: [
              "Regarde ces trois vignettes et trouve celle dans laquelle la sécurité électrique est assurée."
          ],
          indice: ["Un radiateur n'est pas une étagère."],
          conseils: ["Un radiateur... sa chauffe beaucoup..."],
          audio: {
            consignes:"sound/games/zoom/zoom.mp3",
            indices:"sound/games/zoom/indicezoom.mp3",

          }
      };

      $scope.vrai = function(){
        console.log('Bonne réponse');
        $scope.showBulle({
          show: true,
          character: "Lea",
          content:
          "Félicitation! tu as bien répondu à la question !!"
        });
        $scope.$parent.showConfetti = true;
        $scope.play($scope.$parent.commun.audio.claps);
        $scope.endGame();
      };

      $scope.faux = function(){
        console.log("Mauvaise réponse");
        $scope.showBulle({
          show: true,
          character: "Greg",
          content: "Un Radiateur n'est pas une étagère !!"
        });
        $scope.play($scope.$parent.commun.audio.electric);            
      };
    });
