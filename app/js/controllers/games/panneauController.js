angular.module('app')
  .controller('panneauController', function($scope) {

    // Variable d'information général du jeu
    $scope.$parent.theme = "Ville";
    $scope.$parent.nomDuJeu = "Le Bon Panneau !";


    // Quand l'utilisateur clic sur le panneau de gauche (flocon de neige)
    $scope.faux1 = function() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce panneau représente un flocon de neige. il n'y a pas de lien entre un flocon de neige et l'électricité"
      });
    };

    //  Quand l'utilisateur clic sur le panneau de droite (produit inflammable)
    $scope.faux = function() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce panneau représente une flamme, cela veut dire que c'est un produit inflammable"
      });
    };

    // Quand lutilisateur clic sur le panneau danger élétricque
    $scope.vrai = function() {
      $scope.animateGreg();
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bravo c'est la bonne réponse !"
      });
        $scope.animateGreg();
    };
  });
