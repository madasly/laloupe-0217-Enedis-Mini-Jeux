var character = {
    scope: {
        show: '=',
        animate: '=',
    },
    replace: true,
    transclude: true,
    link: function(scope, element, attrs) {

    }
};

angular.module('app')
    .directive('characters', function() {
        return {
            restrict: 'A',
            scope: {
                greg: "=greg",
                lea: "=lea",
                bulle: "=bulle",
            },
            replace: true, // Replace with the template below
            link: function(scope, element, attrs) {

            },
            templateUrl: 'anon/directives/characters.html'
        };
    })
    .directive('lea', function($timeout) {
        return {
            restrict: 'E',
            scope: character.scope,
            replace: character.replace, // Replace with the template below
            transclude: character.transclude, // we want to insert custom content inside the directive
            link: character.link,
            templateUrl: 'anon/directives/lea.html'
        };
    })
    .directive('greg', function($timeout) {
        return {
            restrict: 'E',
            scope: character.scope,
            replace: character.replace, // Replace with the template below
            transclude: character.transclude, // we want to insert custom content inside the directive
            link: character.link,
            templateUrl: 'anon/directives/greg.html'
        };
    });
