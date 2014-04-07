angular.module('hifidelityService', [])
    .factory('Movies', function($http) {
        return {
            get    :  function() {
                return $http.get('/api/movies');
            },
            create :  function(movieData) {
                return $http.post('/api/movies', movieData);
            }
        }
    });