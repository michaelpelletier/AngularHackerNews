describe('Component: comment', function () {
  beforeEach(module('app'));
  var scope;
  var controller;

  beforeEach(inject(function($rootScope, $componentController){
    var comment = {
      id: '0',
      by: 'mpelletier',
      text: '<p>Test</p>'
    }

    scope = $rootScope.$new();
    controller = $componentController('comment', {$scope: scope}, {comment: comment});
  }));

  it('returns the comment text as HTML', function() {
    expect(controller.commentBody).toBeDefined();
    expect(controller.commentBody).toMatch(/Test/);
    expect(controller.commentBody).not.toBe('<p>Test</p>');
  });

  it('returns a link to the author\'s profile', function() {
    expect(controller.authorLink).toBeDefined();
    expect(controller.authorLink).toBe('https://news.ycombinator.com/user?id=mpelletier');
  });

  it('intializes its comments as uncollapsed', function() {
    expect(controller.collapsed).toBeDefined();
    expect(controller.collapsed).toBe(false);
    expect(controller.collapse).toBeDefined();
    expect(controller.collapse).toBe('[-]');
  });

  describe('Function: toggleCollapse', function() {
    it('sets collapsed to true if it is currently false', function() {
      expect(controller.collapsed).toBeDefined();
      expect(controller.collapse).toBeDefined();

      controller.collapsed = false;
      controller.collapse = '[-]';

      controller.toggleCollapse();

      expect(controller.collapsed).toBe(true);
      expect(controller.collapse).toBe('[+]');
    });

    it('sets collapsed to false if it is currently true', function() {
      expect(controller.collapsed).toBeDefined();
      expect(controller.collapse).toBeDefined();

      controller.collapsed = true;
      controller.collapse = '[+]';

      controller.toggleCollapse();

      expect(controller.collapsed).toBe(false);
      expect(controller.collapse).toBe('[-]');
    });

  });


    //     this.commentBody = $sce.trustAsHtml(marked(this.comment.text, { sanitize: false }));
  //
  //     this.authorLink = `https://news.ycombinator.com/user?id=${this.comment.by}`;
  //
  //     this.collapsed = false;
  //     this.collapse = '[-]';
  //   }
  //
  //   // Hide comment and subcomments.
  //   toggleCollapse() {
  //     if (this.collapsed) {
  //       this.collapsed = false;
  //       this.collapse = '[-]';
  //     } else {
  //       this.collapsed = true;
  //       this.collapse = '[+]';
  //     }
  //   }
  // }

});
