angular.module('app')
    .directive('window', function() {
        return {
            restrict: 'A',
            templateUrl: 'anon/directives/window.html',
            scope: {
                onClose:"&onClose",
                showConfetti: "=confetti",
            },
            transclude: true,
            replace: true,
            link: function(scope, element, attrs) {
                scope.hideModal = function() {
                    scope.onClose();
                };
            }
        };
    });
