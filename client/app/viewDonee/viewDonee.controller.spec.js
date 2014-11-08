'use strict';

describe('Controller: ViewdoneeCtrl', function () {

  // load the controller's module
  beforeEach(module('nashvestnServerApp'));

  var ViewdoneeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewdoneeCtrl = $controller('ViewdoneeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
