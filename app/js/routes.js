angular.module('app')
  .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
    $stateProvider
      .state('anon', {
        abstract: true,
        data: {
          access: AccessLevels.anon
        },
        views: {
          'navbar@': {
            templateUrl: 'anon/navbar.html',
            controller: 'NavbarController'
          }
        }
      })
      .state('anon.home', {
        url: '/',
        views: {
          'content@': {
            templateUrl: 'anon/home.html',
            controller: 'MainController'
          }
        }
      })
      .state('anon.register', {
        url: '/',
        views: {
          'content@': {
            templateUrl: 'anon/register.html',
            controller: 'RegisterController'
          }
        }
      })
      .state('anon.login', {
        url: '/login',
        views: {
          'content@': {
            templateUrl: 'anon/login.html',
            controller: 'LoginController'
          }
        }
      })
      .state('anon.games', {
        abstract: true,
        url: '/games',
        views: {
          'content@': {
            templateUrl: 'anon/game.html',
            controller: 'GameController'
          }
        },
      })
      .state('anon.games.charabia', {
        url: '/charabia',
        views: {
          'game': {
            templateUrl: 'anon/games/charabia.html',
            controller: 'CharabiaController'
          }
        }
      })
      .state('anon.games.attentionTrou', {
        url: '/attentionTrou',
        views: {
          'game': {
            templateUrl: 'anon/games/attention_au_trou.html',
            controller: 'AttentionTrouController',
          }
        }
      })
      .state('anon.games.miroir', {
        url: '/miroir',
        views: {
          'game': {
            templateUrl: 'anon/games/miroir.html',
            controller: 'MiroirController'
          }
        },
      })
      .state('anon.games.coupable', {
        url: '/coupable',
        views: {
          'game': {
            templateUrl: 'anon/games/coupable.html',
            controller: 'CoupableController'
          }
        },
      })
      .state('anon.games.miniQuiz', {
        url: '/miniQuiz',
        views: {
          'game': {
            templateUrl: 'anon/games/miniQuiz.html',
            controller: 'MiniQuizController'
          }
        },
      })
      .state('anon.games.boucheTrou', {
        url: '/bouche-trou',
        views: {
          'game': {
            templateUrl: 'anon/games/bouche-trou.html',
            controller: 'BoucheTrouController'
          }
        },
      })
      .state('anon.games.panneau', {
        abstract: true,
        views: {
          'game': {
            templateUrl: 'anon/games/panneau.html',
            controller: 'PanneauController',
          }
        }
      })
      .state('anon.games.panneau.panneau', {
        url: '/panneau',
        templateUrl: 'anon/games/panneau.svg.html'
      })

      .state('anon.games.filGreg', {
        abstract: true,
        views: {
          'game': {
            templateUrl: 'anon/games/fil_greg.html',
            controller: 'FilGregController'
          }
        },
      })
      .state('anon.games.filGreg.filGreg', {
        url: '/fil-greg',
        templateUrl: 'anon/games/fil-greg.svg.html'
      })

      .state('anon.games.uneSurTrois', {
        url: '/une-chance-sur-trois',
        views: {
          'game': {
            templateUrl: 'anon/games/une_sur_trois.html',
            controller: 'UneSurTroisController'
          }
        },
      })
      .state('anon.games.vraiOuFaux', {
        url: '/vrai_ou_faux',
        views: {
          'game': {
            templateUrl: 'anon/games/vrai_ou_faux.html',
            controller: 'VraiOuFauxController'
          }
        },
      })
      .state('anon.games.attitude', {
        url: '/attitude',
        views: {
          'game': {
            templateUrl: 'anon/games/attitude.html',
            controller: 'AttitudeController'
          }
        },
      })
      .state('anon.games.tomber', {
        url: '/tomber',
        views: {
          'game': {
            templateUrl: 'anon/games/tomber.html',
            controller: 'TomberController'
          }
        }

      });

    $stateProvider
      .state('user', {
        abstract: true,
        url: '/user',
        views: {
          'navbar@': {
            templateUrl: 'user/navbar.html',
            controller: 'NavbarController'
          }
        },
        data: {
          access: AccessLevels.user
        }
      })
      .state('user.dashboard', {
        url: '/dashboard',
        views: {
          'content@': {
            templateUrl: 'user/dashboard.html',
            controller: 'DashboardController'
          }
        }
      })
      .state('user.profile', {
        url: '/profile',
        views: {
          'content@': {
            templateUrl: 'user/profile.html',
            controller: 'ProfileController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
