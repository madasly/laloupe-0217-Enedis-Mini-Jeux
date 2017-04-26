angular.module('app')
      .controller('AttentionTrouController', function($scope) {

$scope.$parent.nomDuJeu ="attention au trou";
$scope.$parent.msgFail = {
  character: 'Léa',
  show: true,
  content: 'tu n \'as pas choisi le bon animal'
};

$scope.$parent.msgSuccess = {
  character: 'Greg',
  show: true,
  content: 'tu as trouvé le coupable!'

};

$scope.badChoice = function(){
  console.log("pas bien");

};

$scope.goodChoice = function () {
  console.log("bien!!!!!");

};



    });
