angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth, ProgressionService) {
        var alreadyLogged = Auth.isAuthenticated;
        console.log('In anon.regist');
        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                if (!alreadyLogged) {
                    ProgressionService.save();
                }
                $state.go('anon.selection');
            });
        };
    });
