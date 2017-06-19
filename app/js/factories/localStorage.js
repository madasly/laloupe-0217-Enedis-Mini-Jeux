angular.module('app')
    .factory('LocalService', function() {
        return {
            get: function(key) {
                return JSON.parse(localStorage.getItem(key));
            },
            set: function(key, val) {
                return localStorage.setItem(key, JSON.stringify(val));
            },
            unset: function(key) {
                return localStorage.removeItem(key);
            },
            isSet: function(key) {
                return JSON.parse(localStorage.getItem(key)) !== null;
            }
        };
    });
