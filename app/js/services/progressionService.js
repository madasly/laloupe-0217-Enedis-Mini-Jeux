angular.module('app')
    .service('ProgressionService', function(LocalService, UserService, Auth, CurrentUser) {
        var progressionOriginale = {
            'attention-trou': {
                done: false
            },
            'attitude': {
                done: false
            },
            'bouche-trou': {
                done: false
            },
            'charabia': {
                done: false
            },
            'coupable': {
                done: false
            },
            'fil-greg': {
                done: false
            },
            'mini-quizz': {
                done: false
            },
            'miroir': {
                done: false
            },
            'panneau': {
                done: false
            },
            'tomber': {
                done: false
            },
            'vrai-ou-faux': {
                done: false
            },
            'une-chance-sur-trois': {
                done: false
            },
            'zoom': {
                done: false
            }
        };

        if (Auth.isAuthenticated) {
            var user = CurrentUser.user();
            if (user.progression !== undefined) {
                LocalService.set('progression', user.progression);
            }
        }

        if (!LocalService.isSet('progression')) {
            LocalService.set('progression', progressionOriginale);
        }

        return {
            isDone: function(gameName) {
                return LocalService.get('progression')[gameName].done;
            },
            markAsDone: function(gameName) {
                var progression = LocalService.get('progression');
                progression[gameName].done = true;
                LocalService.set('progression', progression);
                if (Auth.isAuthenticated()) {
                    var user = CurrentUser.user();
                    user.progression = progression;
                    console.log('saving progress... | user: ',user._id);
                    UserService.update(user._id, user);
                }
            },
            getNumberOfGames: function() {
                return Object.keys(progressionOriginale).length;
            },
            getNumberOfGamesDone: function() {
                var progression = LocalService.get('progression');
                return Object.keys(progression).filter(function(key) {
                    return progression[key].done;
                }).length;
            },
        };
    });
