'use strict';

angular.module('nashvestnServerApp')
  .service('Donee', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function find(){
      return $http.get('/api/donees/');
    }
    function findById(id){
      return $http.get('/api/donees/' + id);
    }
    function update(donee){
      return $http.put('/api/donees/'+donee._id, donee);
    }

    return {
      update:update,
      find:find,
      findById:findById
    };

  }]);
