
describe('Component: articleList', function () {
  beforeEach(module('app'));
  var scope;
  var controller;
  var stateParams = {};

  it('defaults to a currentPage of 0', function() {
    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articleList', {$stateParams: stateParams, $scope: scope});
    });

    expect(controller.currentPage).toBeDefined();
    expect(controller.currentPage).toBe(0);
  });

  it('defaults to a counter of 0', function() {
    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articleList', {$stateParams: stateParams, $scope: scope});
    });

    expect(controller.counter).toBeDefined();
    expect(controller.counter).toBe(0);
  });

  it('accepts a new currentPage when passed through stateParams', function() {
    inject(function($rootScope, $componentController) {
      stateParams = {
        page: '4'
      }
      scope = $rootScope.$new();
      controller = $componentController('articleList', {$stateParams: stateParams, $scope: scope});
    });

    expect(controller.currentPage).toBeDefined();
    expect(controller.currentPage).toBe(4);
  });

  describe('Function: calculateArticleCount', function() {
    it('sets the article counter based on the current page', function() {
      inject(function($rootScope, $componentController) {
        stateParams = {
          page: '4'
        }
        scope = $rootScope.$new();
        controller = $componentController('articleList', {$stateParams: stateParams, $scope: scope});
      });

      // A bit hacky. Current page * number of articles per page.
      var expectedCounter = 4 * 30;

      expect(controller.counter).toBeDefined();
      expect(controller.counter).toBe(expectedCounter);
    });
  });
});
