angular.module('app')
  .controller('AttentionTrouController', function($scope) {


    //Information general du jeu Attention au Trou !!
    $scope.$parent.nomDuJeu = "Attention au trou !";
    $scope.$parent.theme = "Maison";

    // Quand l'utilisateur clic sur le cercle en dessous de la lampe
    $scope.badRep = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Non, a cause de la lampe il peut y avoir un fil élèctrique derrère ce mur !! "
      });
    };

    // Quand l'utilisateur clic sur le cercle en dessous de l'intérupteur
    $scope.badRep2 = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Nous ne pouvons pas faire de trou ici a cause de l'intérupteur au dessus !!"
      });
    };

    // Quand l'utilisateur clic sur le cercle a gauche de la prise
    $scope.badRep3 = function() {
      $scope.showBulle({
        show: true,
        character: "Lea",
        content: "Non, a cause de la prise de courant il peut y avoir un fil élèctrique derrère ce mur !! "
      });
    };





    $scope.goodRep = function() {
      $scope.showBulle({
        show: true,
        character: "Greg",
        content: "Bonne réponse !! Ici il ne risque pas d'avoir de fil élèctrique derrière"
      });
    };
  });
