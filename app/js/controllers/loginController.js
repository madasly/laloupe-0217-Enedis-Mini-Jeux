angular.module('app')
    .controller('LoginController', function($scope, $state, Auth, ProgressionService) {
        $scope.errors = [];

        $scope.login = function() {
            if ($scope.loginForm.$valid) {
                $scope.errors = [];
                Auth.login($scope.user).then(function(result) {
                    ProgressionService.load();
                    $state.go('anon.selection');
                }).catch(function(err) {
                    $scope.errors.push(err);
                });
            }
        };
    });
