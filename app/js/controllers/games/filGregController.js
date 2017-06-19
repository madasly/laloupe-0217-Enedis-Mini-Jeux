angular.module('app')
  .controller('FilGregController', function($scope) {

    $scope.$parent.props = {
      nomDuJeu: "Le Fil de Greg",
      theme: "maison",
      consignes: ["Greg veut brancher la Télévision en toute sécurité.",
        "Mais il est perdu dans ce labyrinthe de fils électriques.",
        "À toi de trouver le bon en évitant les fils dénudés ou rafistolés qui sont dangereux."
      ],
      conseils: [],
      indice: [],
      audio: {

      }
    };

      $scope.faux = function(){
        console.log("mauvaise réponse");
        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "Non !! ce fil n'est vraiment pas en bon état."
        });
      };


    $scope.vrai = function() {
      console.log("bonne réponse");
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Félicitation! tu as bien répondu à la question !!"
      });
      $scope.$parent.showConfetti = true;
    };

  });
