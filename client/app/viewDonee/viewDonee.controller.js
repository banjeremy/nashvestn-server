'use strict';

angular.module('nashvestnServerApp')
  .controller('ViewdoneeCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.editStory = function(){
      var story = $scope.donee.story;
      Donee.update(story).then(function(response){
        $scope.storyForm = !$scope.storyForm;
      });
    };

    $scope.editSkills = function(){
      var skills = $scope.donee.skills;
      Donee.update(skills).then(function(response){
        $scope.skillsForm = !$scope.skillsForm;
      });
    };

    $scope.editGoals = function(){
      var goals = $scope.donee.goals;
      Donee.update(goals).then(function(response){
        $scope.goalsForm = !$scope.goalsForm;
      });
    };
  });//last
