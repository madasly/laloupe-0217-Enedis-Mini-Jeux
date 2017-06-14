angular.module('app')
  .controller('PanneauController', function($scope) {

    $scope.$parent.props = {
        nomDuJeu: "Le Bon Panneau !",
        theme: "ville",
        consignes: [
            "Sur tous les coffrets électrique, il y a un panneau qui signifie \"danger électricité\".",
            "Parmis les panneaux dessinées ci-contre, lequel est-ce ?"
        ],
        conseils: ["Regarde bien l'icone au millieu de chaque panneaux."],
        indice: ["La bonne réponse n'est pas une l'icone de flamme."],
        audio: {
            conseils: "sound/games/bonpanneau/P14J23.mp3",
            consignes: "sound/games/bonpanneau/bon.mp3"
        }
    };


    // Quand l'utilisateur clic sur le panneau de gauche (flocon de neige)
    $scope.faux1 = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce panneau représente un flocon de neige. il n'y a pas de lien entre un flocon de neige et l'électricité"
      });
    };

    //  Quand l'utilisateur clic sur le panneau de droite (produit inflammable)
    $scope.faux = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce panneau représente une flamme, cela veut dire que c'est un produit inflammable"
      });
    };

    // Quand lutilisateur clic sur le panneau danger élétricque
    $scope.vrai = function() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bravo c'est la bonne réponse !"
      });
      $scope.$parent.showConfetti = true;
    };
  });
