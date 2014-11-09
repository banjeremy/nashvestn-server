'use strict';

angular.module('nashvestnServerApp')
  .controller('ViewdoneeCtrl',['$scope', 'Donee', '$routeParams', function ($scope, Donee, $routeParams) {

    $scope.newUpdate = {};
    $scope.updates = [];
    $scope.newSkills = [];

    if ($routeParams.id){
      Donee.findById($routeParams.id).success(function(donee){
        $scope.donee = donee;
        $scope.newSkills = $scope.donee.skills;
      });
    }

    $scope.editStory = function(){
      var story = $scope.donee.story;
      Donee.update({'story':story, '_id':$routeParams.id}).then(function(){
        $scope.storyForm = !$scope.storyForm;
      });
    };

    $scope.editSkills = function(){
      var skills = String($scope.newSkills).split(',');

      Donee.update({'skills': skills, '_id':$routeParams.id}).then(function(){
        $scope.skillsForm = !$scope.skillsForm;
        $scope.donee.skills = $scope.newSkills = skills;
      });

    };

    $scope.editGoals = function(){
      var goal = $scope.donee.goal;
      Donee.update({'goal':goal, '_id':$routeParams.id}).then(function(){
        $scope.goalsForm = !$scope.goalsForm;
      });
    };
    $scope.addUpdate = function(){
      var update = {
        timestamp: new Date().toISOString(),
        text : $scope.newUpdateText
      };
      var updates = $scope.donee.updates.reverse();;
      updates.push(update);
      updates.reverse();

      Donee.update({'updates':updates, '_id':$routeParams.id}).then(function(response){
        $scope.newUpdate = {};
        $scope.donee.updates = updates;
      });
    };
  }]);//last
