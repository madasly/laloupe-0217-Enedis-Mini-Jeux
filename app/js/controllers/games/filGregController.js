angular.module('app')
    .controller('filGregController', function($scope) {

      $scope.$parent.nomDuJeu = "Le Fil de Greg";
      $scope.$parent.theme = "Maison";

      $scope.faux = function(){
        console.log("mauvaise réponse");
        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "Non !! ce fil n'est vraiment pas en bonne état"
        });
      };

      $scope.vrai = function(){
        console.log("bonne réponse");
        $scope.showBulle({
          show: true,
          character: "Greg",
          content: "Félicitation! tu as bien répondu à la question !!"
        });
      };

    });
