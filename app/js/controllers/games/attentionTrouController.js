angular.module('app')
    .controller('AttentionTrouController', function($scope) {
        $scope.$parent.nomDuJeu = "Attention au trou !";
        $scope.$parent.description = "Attention avant de percer un mur, il faut vérifier qu'aucun fil électrique n'est caché derrière... Car, si la perceuse en touche un, ça peut être dangereux !";
        $scope.badRep = function() {
            console.log("pas bien");
        };
        $scope.goodRep = function() {
            console.log("bien!!!!!");
        };
    });
