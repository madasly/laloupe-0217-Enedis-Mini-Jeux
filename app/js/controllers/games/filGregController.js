angular.module('app')
  .controller('FilGregController', function($scope) {

    $scope.$parent.props = {
      id: 'fil-greg',
      nomDuJeu: "Le Fil de Greg",
      theme: "maison",
      consignes: ["Greg veut brancher la Télévision en toute sécurité.",
        "Mais il est perdu dans ce labyrinthe de fils électriques.",
        "À toi de trouver le bon en évitant les fils dénudés ou rafistolés qui sont dangereux."
      ],
      conseils: ["Tu dois trouver le bon fil en évitant les fils dénudés ou rafistolés qui sont dangereux."],
      indice: ["Ce n'est pas le fil de gauche."],
      audio: {
        consignes: "sound/games/filgreg/fil.mp3"
      }
    };

    $scope.faux = function() {
      console.log("mauvaise réponse");
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Non !! ce fil n'est vraiment pas en bon état."
      });
      $scope.play($scope.$parent.commun.audio.electric);
    };


    $scope.vrai = function() {
      console.log("bonne réponse");
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Félicitation! tu as bien répondu à la question !!"
      });
      $scope.$parent.showConfetti = true;
      $scope.play($scope.$parent.commun.audio.claps);
      $scope.endGame();
    };

  });
