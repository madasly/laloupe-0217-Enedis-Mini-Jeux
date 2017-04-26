angular.module('app')
  .controller('panneauController', function($scope) {

    $scope.$parent.nomDuJeu = "Le Bon Panneau !";

    $scope.$parent.msgFail = [{
      character: 'Greg',
      content: 'Mon log',
      show: true
    }, {
      character: 'Lea',
      content: 'Ton log',
      show: true
    }];

    
    $scope.$parent.msgSuccess = [];

    $scope.faux = function() {
      console.log("mauvaise réponse");

    };

    $scope.vrai = function() {
      console.log("Bravo !! C'est la bonne réponse");
    };

  });
