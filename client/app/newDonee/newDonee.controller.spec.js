'use strict';

describe('Controller: NewdoneeCtrl', function () {

  // load the controller's module
  beforeEach(module('nashvestnServerApp'));

  var NewdoneeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewdoneeCtrl = $controller('NewdoneeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
