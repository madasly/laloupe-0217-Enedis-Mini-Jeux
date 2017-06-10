angular.module('app')
    .directive('conseils', function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'anon/directives/conseils.html',
            scope: {
                texte: "=",
                image: "="
            },
        };
    });
