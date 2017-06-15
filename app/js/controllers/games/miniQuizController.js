angular.module('app')
  .controller('MiniQuizController', function($scope) {

    // Variable d'information général du jeu
    $scope.$parent.props = {
        nomDuJeu: "Mini Quizz",
        theme: "ville",
        consignes: ["Donne la bonne réponse a la question suivante :"],
        conseils: [],
        indice: [],
        audio: {
            consignes: "sound/games/quiz/quiz.mp3"
        }
    };

    //Function en cas de bonne réponses
    $scope.vrai = function vrai() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Félicitation, tu as bien répondu à la question !!"
      });
      $scope.$parent.showConfetti = true;
    };

    // Si l'utilisateur clic sur le bouton 2
    $scope.faux1 = function faux() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Attenion!! Surtout ne touche pas à la branche !! tu risques l'électrocution voir même dans le pire des cas la mort !!"
      });
    };

    // Si l'utilisateur clic sur le bouton 3
    $scope.faux = function faux() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "ATTENTION!! Un accident peut se produire si personne ne prévient Énedis."
      });
    };
  });
