describe('Component: timeSince', function () {
  beforeEach(module('app'));
  var scope;
  var controller;

  beforeEach(inject(function($rootScope, $componentController){
    var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    var unixTime = yesterday / 1000;

    var article = {
      id: '0',
      time: unixTime,
    }

    scope = $rootScope.$new();
    controller = $componentController('timeSince', {$scope: scope}, {article: article});
  }));

  it('returns a time difference for when the post occurred', function() {
    expect(controller.timeSince).toBeDefined();
    expect(controller.timeSince).toBe('a day ago');
  });
});
