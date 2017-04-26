angular.module('app')
    .controller('coupableController', function($scope) {

      $scope.$parent.nomDuJeu = "Qui est le coupable ?";

      $scope.$parent.msgFail = [{
        character: 'Greg',
        content: 'Mauvaise réponse',
        show: true
      }, {
        character: 'Lea',
        content: 'Le coupable n',
        show: true
      }];
      $scope.$parent.msgSuccess = [{
        character: 'Greg',
        content: 'Bravo tu as gagné !!',
        show: true
      }, {
        character: 'Lea',
        content: 'Si tu as la chance d\'avoir des animaux domestique a la maison, fait bien attention qu\'il ne ronge pas les fils électriques',
        show: true
      }];

      $scope.vrai = function vrai(){
        console.log("bonne réponse");
      };
      $scope.faux = function faux(){
        console.log("Mauvaise réponse");

      };

    });
