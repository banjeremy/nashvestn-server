'use strict';

describe('Service: Donee', function () {

  // load the service's module
  beforeEach(module('nashvestnServerApp'));

  // instantiate service
  var Donee;
  beforeEach(inject(function (_Donee_) {
    Donee = _Donee_;
  }));

  it('should do something', function () {
    expect(!!Donee).toBe(true);
  });

});
