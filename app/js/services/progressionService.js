angular.module('app')
    .service('ProgressionService', function(LocalService) {
        var progressionOriginale = {
            'attention': {
                done: false
            }
        };

        if (!LocalService.isSet('progression')) {
            LocalService.set('progression', progressionOriginale);
        }
        return {
            isDone: function(gameName) {
                return LocalService.get('progression')[gameName].done;
            }
        };
    });
