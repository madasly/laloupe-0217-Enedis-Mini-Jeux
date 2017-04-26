angular.module('app')
    .controller('miniQuizController', function($scope) {
      $scope.$parent.nomDuJeu = "Mini Quizz";
      $scope.vrai = function vrai(){
        console.log("bravo");
      };
      $scope.faux = function faux(){
        console.log("mauvaise reponse");
      };
    });
