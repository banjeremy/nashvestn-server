'use strict';

angular.module('nashvestnServerApp')
  .controller('ViewdoneeCtrl',['$scope', 'Donee', '$routeParams', function ($scope, Donee, $routeParams) {

    $scope.newUpdate = {};
    $scope.updates = [];

    if ($routeParams.id){
      Donee.findById($routeParams.id).success(function(donee){
        $scope.donee = donee;
      });
    }

    $scope.editStory = function(){
      var story = $scope.donee.story;
      Donee.update({story:story}).then(function(){
        $scope.storyForm = !$scope.storyForm;
      });
    };

    $scope.editSkills = function(){
      var skills = $scope.donee.skills;
      Donee.update({skills:skills}).then(function(){
        $scope.skillsForm = !$scope.skillsForm;
      });
    };

    $scope.editGoals = function(){
      var goals = $scope.donee.goals;
      Donee.update({goals:goals}).then(function(){
        $scope.goalsForm = !$scope.goalsForm;
      });
    };
    $scope.addUpdate = function(){
      var update = {
        date : new Date(),
        text : $scope.donee.newUpdate.text
      };
      Donee.update({update:update}).then(function(response){
        $scope.updates.push(response.data.update);
        $scope.newUpdate = {};
      });
    };
  }]);//last
