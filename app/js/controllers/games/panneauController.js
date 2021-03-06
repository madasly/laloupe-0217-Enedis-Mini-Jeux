angular.module('app')
  .controller('PanneauController', function($scope) {
    var testingMerge = "je test un merge";
    $scope.$parent.props = {
      id: 'panneau',
      nomDuJeu: "Le Bon Panneau !",
      theme: "ville",
      consignes: [
        "Sur tous les coffrets électriques, il y a un panneau qui signifie \"danger électricité\".",
        "Parmis les panneaux dessinés ci-contre, lequel est-ce ?"
      ],
      conseils: ["Regarde bien l'icone au millieu de chaque panneau."],
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
      $scope.play($scope.$parent.commun.audio.electric);
    };

    //  Quand l'utilisateur clic sur le panneau de droite (produit inflammable)
    $scope.faux = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Ce panneau représente une flamme, cela veut dire que c'est un produit inflammable"
      });
      $scope.play($scope.$parent.commun.audio.electric);
    };

    // Quand lutilisateur clic sur le panneau danger élétricque
    $scope.vrai = function() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bravo c'est la bonne réponse !"
      });
      $scope.$parent.showConfetti = true;
      $scope.play($scope.$parent.commun.audio.claps);
      $scope.endGame();

    };
  });
