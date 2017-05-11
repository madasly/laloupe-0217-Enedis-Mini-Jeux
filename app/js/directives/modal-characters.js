/*
 * Directive pour des modals
 * Tiré de http://adamalbrecht.com/2013/12/12/creating-a-simple-modal-dialog-directive-in-angular-js/
 */
angular.module('app').directive('modalCharacters', function() {
    return {
        restrict: 'E',
        scope: {
            show: '=',
            title: '=',
            theme: '=',
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width) {
                scope.dialogStyle.width = attrs.width;
            }
            if (attrs.height) {
                scope.dialogStyle.height = attrs.height;
            }
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        templateUrl: 'anon/directives/modal-characters.html'
    };
});
