angular.module('app')
    .controller('UneSurTroisController', function($scope) {

        $scope.$parent.props = {
            nomDuJeu: "Une Chance Sur Trois",
            theme: "jardin",
            consignes: ["Le papa de Greg et Léa a fini de bricoler...",
                "Laquelle de ces vignettes ne représente aucun risque électrique.",
                "Sauras tu la trouver ?"
            ],
            conseils: [],
            indice: [],
            audio: {
                consignes:"sound/games/chance/chance.mp3",

            }
        };

        $scope.vrai = function() {
            $scope.showBulle({
                show: true,
                character: "Greg",
                content: "Bonne réponse. Bravo !!"
            });
            $scope.$parent.showConfetti = true;
        };

        $scope.faux = function() {
            $scope.showBulle({
                show: true,
                character: "Lea",
                content: "Mauvaise Réponse. À cause de l'eau environnante, il y a un risque de court-circuit. Cela pourrait même provoquer un incendie dans la maison !!"
            });
        };

        $scope.faux2 = function() {
            $scope.showBulle({
                show: true,
                character: "Lea",
                content: "Mauvaise Réponse, le fil a été réparé avec du ruban adhésif.Cela risque de provoquer un court-circuit !"
            });
        };
    });
