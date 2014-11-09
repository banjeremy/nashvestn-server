'use strict';

angular.module('nashvestnServerApp')
  .service('Donee', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function update(donee){
      return $http.put('/api/donees/:id', donee);
    }

    return {update:update};

  }]);
