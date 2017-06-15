  angular.module('app')
    .directive('tomber', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'anon/directives/games/tomber.svg.html',
        };
    });
