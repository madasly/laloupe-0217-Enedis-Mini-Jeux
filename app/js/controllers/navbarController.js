angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser,ngAudio, Sound, ProgressionService) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        $scope.logout = function() {
            Auth.logout();
        };
        $scope.isSoundOn= Sound.getSoundStatus();

        $scope.toggleSound = function () {
          Sound.toggleSound();
          $scope.isSoundOn = Sound.getSoundStatus();
        };

        $scope.max = ProgressionService.getNumberOfGames();
        $scope.currentProgress = ProgressionService.getNumberOfGamesDone();

        $scope.$watch(ProgressionService.getNumberOfGamesDone, function(newProgress) {
            $scope.currentProgress = newProgress;
        });
    });
