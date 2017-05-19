angular.module('app')
    .directive('speechBubble', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'anon/directives/speech-bubble.html',
            scope: {
                character: "=character",
                flip: "=flip",
                content: "=content",
            },
        };
    });
