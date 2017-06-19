angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth, ProgressionService) {
        var alreadyLogged = Auth.isAuthenticated;
        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                if (!alreadyLogged) {
                    ProgressionService.save();
                }
                $state.go('anon.home');
            });
        };
    });
