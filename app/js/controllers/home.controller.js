angular.module('app')
    .controller('HomeController', function($scope,ngAudio,Sound) {
      /* Here is your main controller */

      $scope.play = function(file) {
        if(Sound.getSoundStatus()) {
          ngAudio.play(file);
        }
      };
    });
