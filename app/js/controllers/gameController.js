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

        // Code qui permet d'animer Léa
        $scope.animLea = false;
        $scope.animateLea = function(){
          $scope.animLea = true;
          $timeout(function(){
            $scope.animLea = false;
          }, 1000);
        };

        //Code qui permet d'animer Greg
        $scope.animGreg = false;
        $scope.animateGreg = function(){
          $scope.animGreg = true;
          $timeout(function(){
            $scope.animGreg = false;
          }, 1000);
        };
    });
