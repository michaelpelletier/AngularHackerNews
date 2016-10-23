import marked from 'marked';
import _ from 'underscore';

class ArticleCtrl {
  constructor(article, Comments, $rootScope) {
    'ngInject';

    this.article = article;
    $rootScope.setPageTitle(this.article.title);

    // Get first level of comments.
    Comments.getCommentsByParent(this.article).then((comments) => {
      this.comments = _.filter(comments, ((comment) => {
        // Filter out deleted comments. Probably should do this on the API
        // side, really.
        return !comment.deleted;
      }));
    });
  }
}

export default ArticleCtrl;
