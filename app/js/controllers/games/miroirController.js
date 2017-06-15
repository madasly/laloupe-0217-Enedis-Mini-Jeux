angular.module('app')
    .controller('MiroirController', function($scope) {
        /* Here is your main controller */
        $scope.$parent.props = {
            id:"miroir",
            nomDuJeu: "La tête à l'envers",
            theme: "default",
            consignes: ["Regarde cette phrase, elle est écrite à l'envers. Pour la déchiffrer, remets les mots et les lettres dans le bon ordre."],
            conseils: [],
            indice: [],
            audio: {
                consignes: "sound/games/miroir/tete.mp3"
            }
        };

        $scope.solution = 'quelque soit le sport surtout ne t approche pas des lignes electriques';
        $scope.solution1 = 'quelque soit le sport surtout ne t approche pas des ligne electrique';
        $scope.solution2 = 'quelque soit le sport surtout ne t\' approches pas des ligne electriques';
        $scope.solution3 = 'quelque soit le sport surtout ne t\' approche pas des lignes electriques';
        $scope.reponse = '';
        $scope.compare = function() {
            var bonneReponse = $scope.reponse.toLowerCase().trim();
            if (bonneReponse === $scope.solution || bonneReponse === $scope.solution1 || bonneReponse === $scope.solution2 || bonneReponse === $scope.solution3) {
                console.log('Bravo!');
            } else {
                console.log("Essaye Encore !!");
            }
        };
    });
//.toLowerCase.trim
