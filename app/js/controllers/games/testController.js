angular.module('app')
      .controller('TestController', function($scope) {
$scope.badRep = function(){
  console.log("pas bien");
};
$scope.goodRep = function () {
  console.log("bien!!!!!");

};



    });
