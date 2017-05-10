angular.module('app')
  .controller('coupableController', function($scope) {

    $scope.vrai = function vrai() {
      console.log("bonne réponse");
    };
    $scope.faux = function faux() {
      console.log("Mauvaise réponse");

    };
    // $scope.$parent.options.consigne.playlist = ['/sound/games/coupable/P6J6.mp3']

  });
