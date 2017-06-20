angular.module('app')
    .directive('window', function() {
        return {
            restrict: 'E',
            templateUrl: 'anon/directives/window.html',
            scope: {
                onClose:"&onClose",
                onShow:"&onShow",
                showConfetti: "=confetti",
                display:"="
            },
            transclude: true,
            replace: true,
            link: function(scope, element, attrs) {
                scope.$watch(function() {return scope.display;}, function(isShownNow, previouslyShown) {
                    console.log('t :', attrs.t);
                    console.log('isShownNow :', isShownNow, '| previouslyShown :', previouslyShown);
                    if (isShownNow) {
                        console.log('triggering onShow');
                        scope.onShow();
                    }
                });

                scope.hideModal = function() {
                    scope.onClose();
                };
            }
        };
    });
