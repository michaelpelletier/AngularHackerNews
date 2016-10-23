import moment from 'moment';

class ArticlePreviewCtrl {
  constructor($state) {
    'ngInject';

    // Calculate the number of the article based on the page * number of items
    // per page + article index. Add 1 to overcome base 0. Does not exist on
    // the article view, so return nothing when there isn't a passed counter.
    if (this.counter !== undefined) {
      this.articleNumber = `${this.counter + this.index + 1}.`;
    } else {
      this.articleNumber = '';
    }

    // Parse the article url (if it exists) to get the hostname, to be
    // displayed next to the link to the article itself.
    const articleUrl = this.article.url;
    if (articleUrl) {
      const hostName = new URL(articleUrl).hostname.replace('www.', '');

      this.hostName = `(${hostName})`;
      this.hostSearchLink = `https://news.ycombinator.com/from?site=${hostName}`;
    } else {
      this.hostName = '';
      this.hostSearchLink = '';
    }

    this.authorLink = `https://news.ycombinator.com/user?id=${this.article.by}`;
  }
}

let ArticlePreview = {
  bindings: {
    article: '=',
    counter: '=',
    index: '='
  },
  controller: ArticlePreviewCtrl,
  templateUrl: 'components/article-preview.html'
};

export default ArticlePreview;
