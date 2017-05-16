angular.module('app')
    .directive('indice', function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'anon/directives/indice.html',
            scope: {
                texte: "=",
                image: "="
            },
        };
    });
