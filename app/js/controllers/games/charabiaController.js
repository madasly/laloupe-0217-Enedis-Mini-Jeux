var REPONSE = "C'EST TRÈS DANGEREUX DE TIRER SUR LE FIL D'UN APPAREIL ÉLECTRIQUE POUR LE DÉBRANCHER! IL FAUT TOUJOURS LE PRENDRE PAR LA FICHE POUR LE DÉCONNECTER.";
angular.module('app')
    .controller('CharabiaController', function($scope) {
        $scope.$parent.props = {
            nomDuJeu: "C'est quoi ce Charabia",
            theme: "maison",
            consignes: [
                "Pour déchiffrer ce message codé qui t'explique comment débrancher un appareil électrique sans danger, supprime toutes les lettres Z."
            ],
            conseils: [],
            indice: [],
            audio: {}
        };
        $scope.newText = '';
        $scope.compare = function() {
            console.log('content', $scope.newText.content);
            if ($scope.newText.toUpperCase() === REPONSE) {

                console.log('Bravo!');
            } else {

                console.log('Il ne faut pas oublier de supprimer tous les z!');
            }
        };
    });
//
