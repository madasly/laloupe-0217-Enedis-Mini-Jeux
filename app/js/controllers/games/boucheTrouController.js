angular.module('app')
    .controller('BoucheTrouController', function($scope, $timeout) {

        $scope.$parent.props = {
            nomDuJeu: "Le Bouche-Trou",
            theme: "default",
            consignes: ["Complète ce texte à trous en utilisant les mots dans la liste."],
            conseils: [
                "Pour entretenir un jardin, les adultes peuvent utiliser des appareils électriques comme une tondeuse ou un taille-haie...",
                "Dans ces situations, nou allons voir que certaines mesures de sécurité s'imposent."
            ],
            indice: ["Tu doit reproduire une phrases qui a du sens."],
            audio: {
                conseils: "sound/games/bouchetrou/P11J17.mp3",
                consignes: "sound/games/bouchetrou/trou.mp3"
            }
        };

        /*
         * La solution (les mots sont dans le bonne ordre)
         */
        var WORDS = [
            'débrancher',
            'électrique',
            'nettoyer',
            'blesser'
        ];
        Object.freeze(WORDS); // rend constant WORDS, ce qui est utile pour éviter des bugs

        $scope.words = WORDS.slice(0); // copie l'array (puisque WORDS est constant);
        $scope.holes = WORDS.map(function() {
            return "";
        }); // pour que words et holes soient bien de la même longueur

        /*
         * Vérifie la solution
         */
        function checkSolution(proposedSolution) {
            return proposedSolution.length === WORDS.length && proposedSolution.every(function(word, index) {
                return word === WORDS[index];
            });
        }

        /*
         * Gère ce qu'il faut faire lorsque le jeu se termine
         */
        function endGame() {
            var bulle = {
                character: 'Lea',
                content: 'Bien joué !',
                show: true
            };
            $scope.showBulle(bulle);
            $scope.$parent.showConfetti = true;
        }

        /*
         * Gère ce qu'il faut faire en cas d'échec
         */
        function tryAgain() {
            var allFilled = $scope.holes.every(function(hole) {
                return hole !== '';
            });
            if (allFilled) {
                var bulle = {
                    character: 'Greg',
                    show: true,
                    content: "Essaye encore !"
                };
                $scope.showBulle(bulle);
            }
        }

        /*
         * Est déclenchée lorsque des élements sont lachés au dessus des trous
         */
        $scope.onDrop = function() {
            $timeout(function() { // sinon l'animation de déplacement se fait après l'affichage du message
                var isRightAnswer = checkSolution($scope.holes);
                if (isRightAnswer) {
                    endGame();
                } else {
                    tryAgain();
                }
            }, 200);
        };
    });
