angular.module('app')
      .controller('AttentionTrouController', function($scope) {

        $scope.$parent.nomDuJeu = "Attention au trou !";
$scope.badRep = function(){
  console.log("pas bien");

};

$scope.goodChoice = function () {
  console.log("bien!!!!!");

};



    });
