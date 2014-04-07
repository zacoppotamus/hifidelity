angular.module('hifidelityService', [])
    .factory('Movies', function($http) {
        return {
            get    :  function() {
                return $http.get('/api/movies');
            },
            create :  function(movieData) {
                var data = {title : "The Matrix", year : 1999};
                return $http.post('/api/movies', data);
            }
        }
    });