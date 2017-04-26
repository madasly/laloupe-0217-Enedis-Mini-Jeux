angular.module('app')
  .controller('panneauController', function($scope) {

    $scope.$parent.nomDuJeu = "Le Bon Panneau !";

    $scope.$parent.msgFail = [{
      character: 'Greg',
      content: 'Mauvaise réponse',
      show: true
    }, {
      character: 'Lea',
      content: 'Mauvaise réponse, Le symbole de la boite doit etre en lien ave  c l\'électricité',
      show: true
    }];


    $scope.$parent.msgSuccess = [{
      character: 'Greg',
      content: 'Bravo tu as gagné !!',
      show: true
    }, {
      character: 'Lea',
      content: 'Si tu croise de nouveau ce symbole, fait bien attention. Cela veut dire qu\'il y a un danger électrique',
      show: true
    }];

    $scope.faux = function() {
      console.log("mauvaise réponse");

    };

    $scope.vrai = function() {
      console.log("Bravo !! C'est la bonne réponse");
    };

  });
