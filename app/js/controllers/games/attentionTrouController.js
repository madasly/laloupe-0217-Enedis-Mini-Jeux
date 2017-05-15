angular.module('app')
    .controller('AttentionTrouController', function($scope) {


        //Information general du jeu Attention au Trou !!
        $scope.$parent.props = {
            nomDuJeu: "Attention au trou !",
            theme: "maison",
            consignes: [
                "Léa et son papa veulent poser des étagères ..",
                "Ils doivent donc faire attention à l'endroit où ils percent le mur",
                "Aide-les à trouver le bon !"
            ],
            indice: [
                "Prête bien attention à l'emplacement des installations électriques !",
                "Dans le doute, coupe l'électricité au disjoncteur."
            ]
        };

        // Quand l'utilisateur clic sur le cercle en dessous de la lampe
        $scope.badRep = function() {
            $scope.animateLea();
            $scope.showBulle({
                show: true,
                character: "Lea",
                content: "Non, il peut y avoir un fil électrique derrière ce mur à cause de la lampe  !! "
            });
        };

        // Quand l'utilisateur clic sur le cercle en dessous de l'intérupteur
        $scope.badRep2 = function() {
            $scope.animateLea();
            $scope.showBulle({
                show: true,
                character: "Lea",
                content: "Nous ne pouvons pas faire de trou ici à cause de l'interrupteur au dessus !!"
            });
        };

        // Quand l'utilisateur clic sur le cercle a gauche de la prise
        $scope.badRep3 = function() {
            $scope.animateLea();
            $scope.showBulle({
                show: true,
                character: "Lea",
                content: "Non, il peut y avoir un fil électrique derrière ce mur à cause de la prise de courant  !! "
            });
        };





        $scope.goodRep = function() {
            $scope.animateGreg();
            $scope.showBulle({
                show: true,
                character: "Greg",
                content: "Bonne réponse !! Ici il ne risque pas d'avoir de fil électrique derrière"
            });
        };
    });
