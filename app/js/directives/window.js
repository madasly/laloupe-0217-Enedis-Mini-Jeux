angular.module('app')
    .directive('window', function() {
        return {
            restrict: 'A',
            templateUrl: 'anon/directives/window.html',
            scope: {
                onClose:"&onClose"
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
