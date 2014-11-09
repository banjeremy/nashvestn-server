'use strict';

describe('Directive: printer', function () {

  // load the directive's module and view
  beforeEach(module('nashvestnServerApp'));
  beforeEach(module('components/printer/printer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<printer></printer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the printer directive');
  }));
});