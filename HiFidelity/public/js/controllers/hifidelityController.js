'use strict';

angular.module('hifidelityController', [])
    .controller('mainController', function($scope, $http, Movies) {
        $scope.formData = {};
        $scope.ratings = [1,2,3,4,5,6,7,8,9,10];
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