angular.module('app')
  .factory('Sound', function(LocalService, ngAudio) {
      return {
        cutSound: function() {
          audio.mute();

        }
      };
  });
