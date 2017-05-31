angular.module('app')
    .directive('panneau', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'anon/directives/games/panneau.svg.html',
        };
    });
