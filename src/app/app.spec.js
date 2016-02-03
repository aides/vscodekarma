'use strict';

// If I put breakpoints in this file, none of them is hit
describe('Application module', function() {
  beforeEach(function() {
    module('myApp');
  });

  it('should pass', function() {
    expect(true).toBe(true);
  });
});
