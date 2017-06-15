/*
 * Ce controller contient toute la logique pour faire parler Greg et Léa
 * Les controllers inclus dans la page peuvent utiliser les fonctions de ce controller
 * comme ci elles étaient les leurs
 */



angular.module('app')
    .controller('GameController', function($scope, $timeout, $state, ngAudio, Sound, ProgressionService) {
        /*
         * Gestion des fenêtres
         */
        // Cette objet contient tous les états possibles d'affichage pour la fenêtre de base
        var WINDOWS = Object.freeze({
            game: 0,
            consignes: 1,
            conseils: 2,
            indice: 3,
            characters: 4
        });
        $scope.WINDOWS = WINDOWS;
        $scope.show = WINDOWS.consignes;
        $scope.gameLoadedOnce = false;
        $scope.showConfetti = false;

        /*
         * Gestion des variables changeables par les enfants
         */
        $scope.props = {
            id: "",
            nomDuJeu: "",
            theme: "default",
            consignes: [],
            conseils: [],
            indice: [],
            audio: {},
            onLoad: function() {}
        };
        $scope.onLoad = function() {
          if (!$scope.gameLoadedOnce) {
            $scope.props.onLoad();
          }
        };

        $scope.play = function(file) {
          if(Sound.getSoundStatus()) {
            ngAudio.play(file);
          }
        };

        $scope.endGame = function() {
          var gameName = $scope.props.id;
          ProgressionService.markAsDone(gameName);
        };

        /*
         * Gestion des bulles
         */
        $scope.bulle = {
            show: false,
            character: '',
            content: ''
        };
        $scope.lea = {
            animate: false,
            show: false,
        };
        $scope.greg = {
            animate: false,
            show: false
        };

        $scope.showBulle = function(bulle) {
            $scope.bulle = bulle;
            if (bulle.character.toLowerCase() === 'lea') {
                $scope.animateLea();
            } else {
                $scope.animateGreg();
            }
            $scope.toggle(WINDOWS.characters);
        };

        $scope.toggle = function(window) {
            if (window === WINDOWS.game) {
                $scope.gameLoadedOnce = true;
            }
            console.log("Changing to :", window);
            $scope.show = window;
        };

        // TODO refactoriser les personnages
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

        $scope.back = function() {
            $state.go('anon.selection');
        };
    });
