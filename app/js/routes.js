angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider, AccessLevels) {
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
      .state('anon.selection', {
        url: '/selection',
        views: {
          'content@': {
            templateUrl: 'anon/selection.html',
            controller: 'SelectionController'
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
      .state('anon.games.attention', {
        url: '/attention',
        views: {
          'game': {
            templateUrl: 'anon/games/attention.html',
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
      .state('anon.games.zoom', {
        url: '/zoom',
        views: {
          'game': {
            templateUrl: 'anon/games/zoom.html',
            controller: 'ZoomController'
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
        url: '/panneau',
        views: {
          'game': {
            templateUrl: 'anon/games/panneau.html',
            controller: 'PanneauController',
          }
        }
      })
      .state('anon.games.filGreg', {
        url: '/fil-greg',
        views: {
          'game': {
            templateUrl: 'anon/games/fil-greg.html',
            controller: 'FilGregController'
          }
        },
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
