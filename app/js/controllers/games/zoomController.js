angular.module('app')
    .controller('ZoomController', function($scope) {

      // variable d'information général du jeu
      $scope.$parent.nomDuJeu = "Zoom Sur ...";
      $scope.$parent.theme = "Maison";

      $scope.vrai = function(){
        console.log('Bonne réponse');
        $scope.showBulle({
          show: true,
          character: "Greg",
          content:
          "Félicitation! tu as bien répondu à la question !!"
        });
      };

      $scope.faux = function(){
        console.log("Mauvaise réponse");
        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "Un Radiateur n'est pas une étagère !!"
        });
      };
    });
