/*
 * Ce controller contient toute la logique pour faire parler Greg et Léa
 * Les controllers inclus dans la page peuvent utiliser les fonctions de ce controller
 * comme ci elles étaient les leurs
 */
angular.module('app')
    .controller('GameController', function($scope) {
        $scope.bulle = {
            show: false,
            character: '',
            content: ''
        };
        $scope.nomDuJeu = "";
        $scope.theme = "";

        // $scope.options =  {
        //   consigne: {
        //     playlist: []
        //   },
        //   indice: {
        //     playlist: []
        //   },
        //   info: {
        //     playlist: []
        //   },
        //   text: {
        //     playlist: []
        //   }
        // };



        /*
         * Affiche les bulles
         */
        $scope.showBulle = function(bulle) {
            $scope.bulle = bulle;
        };


    });
