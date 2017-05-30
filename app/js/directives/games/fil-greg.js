angular.module('app')
    .directive('filGreg', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'anon/directives/games/fil-greg.svg.html',
        };
    });
