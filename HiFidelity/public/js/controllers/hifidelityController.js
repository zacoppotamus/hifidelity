'use strict';

angular.module('hifidelityController', [])
    .controller('mainController', function($scope, $http, Movies) {
        Movies.get()
            .success(function(data) {
                $scope.movies = data;
            });

        // Movies.create();
    });