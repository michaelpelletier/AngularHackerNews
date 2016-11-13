class ArticleListCtrl {
  constructor(AppConstants, Articles, $scope, $stateParams, $state, $location) {
    'ngInject';

    this.currentPage = parseInt($stateParams.page) || 0;
    this.nextPage = this.currentPage + 1;

    this._AppConstants = AppConstants;
    this._Articles = Articles;

    this.getArticles();
    this.calculateArticleCount();
  }

  calculateArticleCount() {
    // Generate the article numbers for the page since they aren't based on
    // id, but on pagination and position.
    this.counter = this.currentPage * this._AppConstants.articlesPerPage;
  }

  getArticles() {
    this.loading = true;
    this.list = [];

    this._Articles.getTopArticles(this.currentPage).then((res) => {
      this.loading = false;
      this.list = res;
    });
  }
}

let ArticleList = {
  controller: ArticleListCtrl,
  templateUrl: 'components/article-list.html'
};

export default ArticleList;
