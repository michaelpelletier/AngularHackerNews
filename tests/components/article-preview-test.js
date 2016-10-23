describe('Component: articlePreview', function () {
  beforeEach(module('app'));
  var scope;
  var controller;
  var article = {
    id: '0',
    time: '000',
    by: 'mpelletier'
  };
  var random_index = Math.random() * (9 - 0) + 0;

  it('returns an articleNumber when there is a counter', function() {
    var random_counter = Math.random() * (50 - 0) + 10;

    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articlePreview', {$scope: scope}, {article: article, index: random_index, counter: random_counter});
    });

    // +1 to overcome base 0.
    var expected_number = random_counter + random_index + 1;
    var expected_result = `${expected_number}.`;

    expect(controller.articleNumber).toBeDefined();
    expect(controller.articleNumber).toBe(expected_result);
  });

  it('returns no articleNumber when there is no counter', function() {
    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articlePreview', {$scope: scope}, {article: article, index: random_index});
    });

    expect(controller.articleNumber).toBeDefined();
    expect(controller.articleNumber).toBe('');
  });

  it('returns a hostname / hostSearchLink when there is an article url', function() {
    article.url = 'https://github.com/michaelpelletier';

    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articlePreview', {$scope: scope}, {article: article});
    });

    expect(controller.hostName).toBeDefined();
    expect(controller.hostName).toBe('(github.com)');
    expect(controller.hostSearchLink).toBe(`https://news.ycombinator.com/from?site=github.com`)
  });

  it('returns no hostname / hostSearchLink when there is no article url', function() {
    article.url = null;

    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articlePreview', {$scope: scope}, {article: article});
    });

    expect(controller.hostName).toBeDefined();
    expect(controller.hostName).toBe('');
    expect(controller.hostSearchLink).toBe('');
  });

  it('returns a link to the author\'s profile', function() {
    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('articlePreview', {$scope: scope}, {article: article});
    });

    expect(controller.authorLink).toBeDefined();
    expect(controller.authorLink).toBe('https://news.ycombinator.com/user?id=mpelletier');
  });
});
