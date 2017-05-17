var character = {
    scope: {
        show: '=',
    },
    replace: true,
    transclude: true,
    link: function(scope, element, attrs) {

    }
};

angular.module('app')
    .directive('characters', function() {
        return {
            restrict: 'E',
            scope: character.scope,
            replace: character.replace, // Replace with the template below
            transclude: character.transclude, // we want to insert custom content inside the directive
            link: character.link,
            templateUrl: 'anon/directives/lea.html'
        };
    })
    .directive('lea', function() {
        return {
            restrict: 'E',
            scope: character.scope,
            replace: character.replace, // Replace with the template below
            transclude: character.transclude, // we want to insert custom content inside the directive
            link: character.link,
            templateUrl: 'anon/directives/lea.html'
        };
    })
    .directive('greg', function() {
        return {
            restrict: 'E',
            scope: character.scope,
            replace: character.replace, // Replace with the template below
            transclude: character.transclude, // we want to insert custom content inside the directive
            link: character.link,
            templateUrl: 'anon/directives/greg.html'
        };
    });
