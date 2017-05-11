angular.module('app')
  .controller('coupableController', function($scope) {

    // variable d'information général du jeu
    $scope.$parent.nomDuJeu = "Qui est le coupable ?";
    $scope.$parent.theme = "Maison";


    // Lorsque l'utilisateur clic sur le Lapin
    $scope.vrai = function vrai() {
      $scope.animateGreg();
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Félicitation! tu as bien répondu à la question !!"
      });
    };

    // Lorsque l'utilisateur clic sur le poison
    $scope.fauxPoison = function faux() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce poison a t'il vraiment pu sortir de son aquarium pour allez manger le fil électrique ?"
      });
    };

    // Lorsque l'utilisateur clic sur l'oiseau
    $scope.fauxOiseau = function faux() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Les oiseaux n' ont pas de dents ! "
      });
    };

  });
