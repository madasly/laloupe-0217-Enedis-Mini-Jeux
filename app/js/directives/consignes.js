angular.module('app')
    .directive('consignes', function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'anon/directives/consignes.html',
            scope: {
                texte: "=",
                image: "="
            },
        };
    });
