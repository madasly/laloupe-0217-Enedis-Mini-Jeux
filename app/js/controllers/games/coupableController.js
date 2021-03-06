angular.module('app')
  .controller('CoupableController', function($scope, $timeout) {

    // variable d'information général du jeu
    $scope.$parent.props = {
      id: "coupable",
      nomDuJeu: "Qui est le coupable ?",
      theme: "coupable",
      consignes: [
        "À ton avis, quel animal a grignoté ce fil électrique ?"
      ],
      conseils: [
        "Si tu as la chance d'avoir un animal chez toi, ne le laisse pas ronger les fils électriques. Car des fils abimés, ce sont des fils qui ne sont plus isolés et qui deviennent extrêmement dangereux"
      ],
      indice: ["Le coupable a des dents !"],
      audio: {
        consignes: "sound/games/coupable/guilty.mp3",
        conseils: "sound/games/coupable/P6J6.mp3"
      }
    };

    // Lorsque l'utilisateur clic sur le Lapin
    $scope.vrai = function vrai() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Félicitation! tu as bien répondu à la question !!"
      });
      $scope.$parent.showConfetti = true;
      $scope.play($scope.$parent.commun.audio.claps);
      $scope.endGame();
      $timeout(function() {
        $scope.$parent.showConfetti = false;
      }, 10000);
    };

    // Lorsque l'utilisateur clic sur le poison
    $scope.fauxPoison = function faux() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Ce poisson a t'il vraiment pu sortir de son aquarium pour allez manger le fil électrique ?"
      });
      $scope.play($scope.$parent.commun.audio.electric);
    };

    // Lorsque l'utilisateur clic sur l'oiseau
    $scope.fauxOiseau = function faux() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Les oiseaux n' ont pas de dents ! "
      });
      $scope.play($scope.$parent.commun.audio.electric);
    };

  });
