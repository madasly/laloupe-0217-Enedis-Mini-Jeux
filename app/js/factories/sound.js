angular.module('app')
  .factory('Sound', function(LocalService, ngAudio) {
    if (LocalService.get('audio') === null) {
      LocalService.set('audio', true);
    }
    return {
      toggleSound: function() {
        if (LocalService.get('audio')) {
          LocalService.set('audio', false);
          ngAudio.mute();
        } else {
          LocalService.set('audio', true);
        }
      },
      getSoundStatus: function() {
        return LocalService.get('audio');
      }
    };
  });
