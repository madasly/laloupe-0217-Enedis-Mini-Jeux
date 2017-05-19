angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser,ngAudio) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        $scope.logout = function() {
            Auth.logout();
        };
        $scope.show=true;

        $scope.cutSound = function () {
          if($scope.show){
            $scope.show=false;
              audio.pause();
          }else{
          $scope.show = true;
          audio.pause();
        }
        };



    });
