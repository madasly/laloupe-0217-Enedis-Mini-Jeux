angular.module('app')
    .directive('indice', function() {
        return {
            restrict: 'A',
            templateUrl: 'anon/directives/indice.html',
            scope: {},
            transclude: true
        };
    });
