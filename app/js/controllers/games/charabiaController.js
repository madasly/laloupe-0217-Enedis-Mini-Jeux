angular.module('app')
  .controller('CharabiaController', function($scope, $timeout) {
    $scope.gameLoaded = false;
    $scope.indexMot = 0;
    $scope.bascule = true;
    $scope.animation = ["charabia-animRotate", "charabia-animGaucheDroite", "charabia-animDeplacement"];
    $scope.$parent.props = {
      id: "charabia",
      nomDuJeu: "C'est quoi ce Charabia",
      theme: "maison",
      consignes: [
        "Pour déchiffrer ce message codé qui t'explique comment débrancher un appareil électrique sans danger, supprime toutes les mauvaises lettres."
      ],
      conseils: ["Soit, rapide, agile !!"],
      indice: ["Les lettres à supprimer sont souvent des Z."],
      audio: {
        consignes: "sound/games/charabia/charabia.mp3"
      },
      onLoad: function() {
        $scope.gameLoaded = true;
      }
    };
    $scope.animationMot = $scope.animation[0];

    function nextAnimation() {
      $scope.animationMot = $scope.animation[$scope.indexMot % $scope.animation.length];

    }

    //Function qui compte le nombre de Z dans un mot en function du current mot
    var lesZ = function(mot) {
      var compteurZ = 0;
      for (i = 0; i < mot.length; i++) {
        if (mot[i].peutDisparaitre === true) {
          compteurZ++;
        }
      }
      return compteurZ;
    };


    function construstorLetter(lettre, index) {
      var carte = {
        lettre: lettre,
        aDisparu: false,
        peutDisparaitre: (lettre === "Z"),
        classes: []
      };
      return carte;
    }
    var MSG_CODE = ("C'ESZZT TRZEZS DAZNGEZREZUZX DEZ TIZRER SZURZ LZE FZIL D'UZN AZPPAZREIL EZLECTZRIZQUE " +
      "PZOUZR LZE DEBRZANZCZHER! IZL FZAZUT TOZUJZZOURZS LEZ PRENZDZRE PZAR LAZ FIZCHZE " +
      "PZOUZR LZE DECOZNNZECTERZ.");

    $scope.charabiaDecode = MSG_CODE.replace(/[zZ]/g, '').split(' ');
    $scope.charabia = MSG_CODE.split(' ').map(function(mot) {
      return mot.split("").map(construstorLetter);
    });


    $scope.compteurFaux = 0;
    var compteur = 0;
    $scope.select = function(carte) {
      var nombreDeZ = lesZ($scope.charabia[$scope.indexMot]);
      //SI mauvaise réponse (clic sur autre chose qu'un Z)
      if (carte.peutDisparaitre === false) {
        $scope.compteurFaux++;
        console.log($scope.compteurFaux);
        carte.classes.push('flash charabia-red');
      }
      if ($scope.compteurFaux >= 5) {
        $scope.play($scope.$parent.commun.audio.electric);
        console.log("PERDU LACHE LE CLAVIER");
      }
      // Si clic sur le bonne réponse (un Z)
      if (carte.peutDisparaitre === true) {
        compteur++;
        carte.classes.push('bounceOut');

      }
      if (compteur === nombreDeZ) {
        $timeout(function() {
          $scope.bascule = false;
          $timeout(function() {
            $scope.indexMot++;
            nextAnimation();
            $scope.bascule = true;
          }, 750);
        }, 750);

        compteur = 0;
      }
    };







  });
