angular.module('app')
  .controller('MiniQuizController', function($scope) {

    // Variable d'information général du jeu
    $scope.$parent.nomDuJeu = "Mini Quizz";
    $scope.$parent.theme = "Ville";

    //Function en cas de bonne réponses
    $scope.vrai = function vrai() {
      $scope.animateGreg();
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Félicitation tu as bien répondu a la question !!"
      });
    };

    // Si l'utilisateur clic sur le bouton 2
    $scope.faux1 = function faux() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Non !! Surtout ne touche pas à la branche !! tu risques l'électrocution voir même dans le pire des cas la mort !!"
      });
    };

    // Si l'utilisateur clic sur le bouton 3
    $scope.faux = function faux() {
      $scope.animateLea();
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Mauvaise réponse. Si personne ne prévient Énedis il y a encore plus de risque qu'il y ai des accidents."
      });
    };
  });
