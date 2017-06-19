angular.module('app')
    .controller('AttentionTrouController', function($scope,ngAudio,Sound) {


        //Informations générales du jeu Attention au Trou !!
        $scope.$parent.props = {
            id:"attention-trou",
            nomDuJeu: "Attention au trou !",
            theme: "attention-trou",
            consignes: [
                "Léa et son papa veulent poser des étagères ...",

                "Ils doivent donc faire attention à l'endroit où ils percent le mur.",

                "Aide-les à trouver le bon !"
            ],
            indice: [
                "Prête bien attention à l'emplacement des installations électriques !",
                "Dans le doute, coupe l'électricité au disjoncteur."
            ],
            conseils: [
                "Attention!! Avant de percer un mur, il faut vérifier qu'aucun fil électrique n'est caché derrière...",
                "Si la perceuse en touche un, ça peut être dangeureux !"
            ],
            audio: {
                conseils: "sound/games/attention/P9J13.mp3",
                consignes:"sound/games/attention/attention.mp3",
                indice: "sound/games/attention/indice.mp3"
            }
        };

        // Quand l'utilisateur clic sur le cercle en dessous de la lampe
        $scope.badRep = function() {
            $scope.showBulle({
                show: true,
                character: "Greg",
                content: "Attention!! Il peut y avoir un fil électrique derrière ce mur, la lampe est trop près  !! "
            });
            $scope.play($scope.$parent.commun.audio.electric);
        };

        // Quand l'utilisateur clic sur le cercle en dessous de l'intérupteur
        $scope.badRep2 = function() {
            $scope.showBulle({
                show: true,
                character: "Greg",
                content: "Attention!! Il peut y avoir un fil électrique derrière ce mur, l'interrupteur est trop près !!"
            });
            $scope.play($scope.$parent.commun.audio.electric);
        };

        // Quand l'utilisateur clic sur le cercle a gauche de la prise
        $scope.badRep3 = function() {
            $scope.showBulle({
                show: true,
                character: "Greg",
                content: "Attention!! Il peut y avoir un fil électrique derrière ce mur, la prise de courant est trop près  !! "
            });
            $scope.play($scope.$parent.commun.audio.electric);


        };


        $scope.goodRep = function() {
            $scope.showBulle({
                show: true,
                character: "Lea",
                content: "Bonne réponse !! Il ne risque pas d'avoir de fil électrique à cet endroit"
            });
            $scope.$parent.showConfetti = true;
            $scope.play($scope.$parent.commun.audio.claps);
            $scope.endGame();
        };
    });
