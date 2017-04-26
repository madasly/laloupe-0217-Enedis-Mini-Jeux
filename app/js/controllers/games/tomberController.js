angular.module('app')
      .controller('TomberController', function($scope) {

$scope.$parent.nomDuJeu ="Ne tombe pas dans le panneau!";
$scope.$parent.msgFail = {
  character: 'Léa',
  show: true,
  content: ''
};

$scope.$parent.msgSuccess = {
  character: 'Greg',
  show: true,
  content: ''

};

$scope.badChoice = function(){
  console.log("pas bien");

};

$scope.goodChoice = function () {
  console.log("bien!!!!!");

};



    });
