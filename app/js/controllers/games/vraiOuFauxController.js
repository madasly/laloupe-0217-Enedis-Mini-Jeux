//Controller du jeux Vrai ou Faux du livret
angular.module('app')
  .controller('VraiOuFauxController', function($scope) {
    $scope.$parent.props = {
        id: "vrai-ou-faux",
        nomDuJeu: "Vrai ou Faux",
        theme: "default",
        consignes: ["Parmi les affirmations suivantes, distingue les vraies des fausses en cliquant sur le bon bouton."],
        conseils: ["Lis attentivement la question, avant de répondre."],
        indice: ["il n'y as pas d'indice pour ce jeu. Désolé."],
        audio: {
            consignes: "sound/games/vrai/vrai.mp3"
        }
    };



    $scope.cacheBouton = false;

    $scope.question1 = 'Aucun risque de s\'électrocuter si l\'on utilise un sèche-cheveux avec les mains mouillées.';
    $scope.question2 = 'Si je touche un lave-linge qui grésille ou qui picote le bout de mes doigts, je préviens tout de suite mes parents.';
    $scope.question3 = 'Il n\'est pas dangereux de se servir d\'un appareil électrique dans l\'eau';
    $scope.question4 = 'Pour faire sécher sa serviette plus vite, on peut la poser sur le radiateur électrique, meme si ce n\'est pas un sèche-serviette';
    $scope.question5 = 'Je ne change jamais une ampoule les pieds mouillés';

    $scope.reponse = [{
        question: $scope.question1,
        reponse: false
      },
      {
        question: $scope.question2,
        reponse: true
      },
      {
        question: $scope.question3,
        reponse: false
      },
      {
        question: $scope.question4,
        reponse: false
      },
      {
        question: $scope.question5,
        reponse: true
      }
    ];
    $scope.currentQuestion = $scope.reponse[0].question;

    var compteur = 0;

    $scope.vraiOuFaux = function(reponseUtilisateur) {
      if ($scope.reponse[compteur].reponse === reponseUtilisateur) {
        if (compteur !== 4) {
          compteur++;
          $scope.showBulle({
            show: true,
            character: "Greg",
            content: "Bonne réponse"
          });
          $scope.currentQuestion = $scope.reponse[compteur].question;
        } else {
          $scope.cacheBouton = true;
          $scope.showBulle({
            show: true,
            character: "Greg",
            content: "Félicitation tu as bien répondu à toutes les questions !!"
          });
          $scope.$parent.showConfetti = true;
          $scope.play($scope.$parent.commun.audio.claps);            
          $scope.endGame();
        }
      } else {

        $scope.showBulle({
          show: true,
          character: "Lea",
          content: "Mauvaise réponse !"
        });
        $scope.play($scope.$parent.commun.audio.electric);
      }
    };
  });
