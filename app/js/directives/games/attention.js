angular.module('app')
    .directive('attention', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'anon/directives/games/attention.svg.html',
        };
    });
