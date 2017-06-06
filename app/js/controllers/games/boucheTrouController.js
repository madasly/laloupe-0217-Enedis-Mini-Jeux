angular.module('app')
    .controller('BoucheTrouController', function ($scope, $timeout) {

        $scope.$parent.props = {
            nomDuJeu: "Le Bouche-Trou",
            theme: "default",
            consignes: ["Complète ce texte à trous en utilisant les mots dans la liste."],
            conseils: [
                "Pour entretenir un jardin, les adultes peuvent utiliser des appareils électriques comme une tondeuse ou un taille-haie...",
                "Dans ces situations, nou allons voir que certaines mesures de sécurité s'imposent."
            ],
            indice: [],
            audio: {
                conseils: "sound/games/bouchetrou/P11J17.mp3",
                consignes: "sound/games/bouchetrou/trou.mp3"
            }
        };

        // TODO rendre l'affichage des mots aléatoires
        $scope.text = {
            sentence: [
                "Il est très important de", "_",
                "un appareil", "_", "avant de le", "_",
                ". Si tes parents n'y pensent pas, ils risquent de se",
                "_"
            ],
            words: ["débrancher", "électrique", "débrancher", "blesser"],
            holes: []
        };

        /*
         * Vérifie la solution
         */
        function checkSolution(proposedSolution) {
            return proposedSolution.length === text.words.length && proposedSolution.every(function (word, index) {
                return word === text.words[index];
            });
        }

        /*
         * Gère ce qu'il faut faire lorsque le jeu se termine
         */
        function endGame() {
            var bulle = {
                character: 'Greg',
                content: 'Bien joué !',
                show: true
            };
            $scope.showBulle(bulle);
        }

        /*
         * Gère ce qu'il faut faire en cas d'échec
         */
        function tryAgain() {
            var allFilled = $scope.holes.every(function (hole) {
                return hole !== '';
            });
            if (allFilled) {
                var bulle = {
                    character: 'Lea',
                    show: true,
                    content: "Essaye encore !"
                };
                $scope.showBulle(bulle);
            }
        }

        /*
         * Est déclenchée lorsque des éléments sont lachés au dessus des trous
         */
        $scope.onDrop = function (test) {
            console.log(test);
            $timeout(function () { // sinon l'animation de déplacement se fait après l'affichage du message
                var isRightAnswer = checkSolution($scope.holes);
                if (isRightAnswer) {
                    endGame();
                } else {
                    tryAgain();
                }
            }, 200);
        };
    });