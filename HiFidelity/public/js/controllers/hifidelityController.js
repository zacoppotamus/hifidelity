'use strict';

angular.module('hifidelityController', [])
    .controller('mainController', function($scope, $http, Movies) {
        $scope.formData = {};
        Movies.get()
            .success(function(data) {
                $scope.movies = data;
            });

        $scope.addMovie = function() {
            if (!$.isEmptyObject($scope.formData)) {
                Movies.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.movies = data;
                    });
            }
        };
    });