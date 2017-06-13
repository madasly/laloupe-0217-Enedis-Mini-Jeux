angular.module('app')
  .controller('CoupableController', function($scope) {

    // variable d'information général du jeu
    $scope.$parent.props = {
        nomDuJeu: "Qui est le coupable ?",
        theme: "coupable",
        consignes: [
            "À ton avis, quel animal a grignoté ce fil électrique ?"
        ],
        conseils: [
            "Si tu as la chance d'avoir un animal chez toi, ne le laisse pas ronger les fils électriques. Car des fils abimés, ce sont des fils qui ne sont plus isolés et qui deviennent extrêmement dangereux"
        ],
        indice: [],
        audio: {
            consignes: "sound/games/coupable/guilty.mp3",
            conseils:"sound/games/coupable/P6J6.mp3"
        }
    };

    // Lorsque l'utilisateur clic sur le Lapin
    $scope.vrai = function vrai() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Félicitation! tu as bien répondu à la question !!"
      });
    };

    // Lorsque l'utilisateur clic sur le poison
    $scope.fauxPoison = function faux() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce poison a t'il vraiment pu sortir de son aquarium pour allez manger le fil électrique ?"
      });
    };

    // Lorsque l'utilisateur clic sur l'oiseau
    $scope.fauxOiseau = function faux() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Les oiseaux n' ont pas de dents ! "
      });
    };

  });
