/*
 * Ce controller contient toute la logique pour faire parler Greg et Léa
 * Les controllers inclus dans la page peuvent utiliser les fonctions de ce controller
 * comme ci elles étaient les leurs
 */
angular.module('app')
    .controller('GameController', function($scope, $timeout) {
        $scope.bulle = {
            show: false,
            character: '',
            content: ''
        };

        $scope.clueShown = false;
        $scope.descriptionShown = true;
        $scope.description = "";
        $scope.nomDuJeu = "";
        $scope.theme = "";
        $scope.modalClosedOnce = false;
        $scope.animLea = false;
        $scope.leaShown = false;
        $scope.charactersShown = false;
        $scope.animGreg = false;
        $scope.gregShown = false;

        /*
         * Affiche les bulles
         */
        $scope.showBulle = function(bulle) {
            $scope.bulle = bulle;
        };

        $scope.toggleClue = function() {
            $scope.clueShown = !$scope.clueShown;
        };

        $scope.toggleDescription = function() {
            $scope.descriptionShown = !$scope.descriptionShown;
        };

        $scope.loadGameView = function () {
            $scope.modalClosedOnce = true;
        };

        // Code qui permet d'animer Léa

        $scope.animateLea = function() {
            $scope.charactersShown = true;
            $scope.animLea = true;
            $scope.leaShown = true;
            $scope.gregShown = false;
            $timeout(function() {
                $scope.animLea = false;
            }, 1000);
        };

        //Code qui permet d'animer Greg
        $scope.animateGreg = function() {
            $scope.charactersShown = true;
            $scope.animGreg = true;
            $scope.gregShown = true;
            $scope.leaShown = false;
            $timeout(function() {
                $scope.animGreg = false;
            }, 1000);
        };
    });
