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
          // repasser descriptionshown en true et modalClosedOne en false
        $scope.clueShown = false;
        $scope.descriptionShown = false;
        $scope.description = "";
        $scope.nomDuJeu = "";
        $scope.theme = "";
        $scope.modalClosedOnce = true;

        $scope.lea = {
            animate: false,
            show: false
        };
        $scope.charactersShown = false;
        $scope.greg = {
            animate: false,
            show: false
        };
        /*
         * Affiche les bulles
         */
        $scope.showBulle = function(bulle) {
            $scope.bulle = bulle;
            $scope.charactersShown = true;
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
            $scope.lea.animate = true;
            $scope.lea.show = true;
            $scope.greg.show = false;
            $timeout(function() {
                $scope.lea.animate = false;
            }, 1000);
        };

        //Code qui permet d'animer Greg
        $scope.animateGreg = function() {
            $scope.charactersShown = true;
            $scope.greg.animate = true;
            $scope.greg.show = true;
            $scope.lea.show = false;
            $timeout(function() {
                $scope.greg.animate = false;
            }, 1000);
        };
    });
