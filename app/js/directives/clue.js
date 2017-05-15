angular.module('app')
    .directive('clue', function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'anon/directives/clue.html',
            scope: {},
            transclude: true,
        };
    });
