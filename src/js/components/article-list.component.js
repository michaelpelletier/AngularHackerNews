class ArticleListCtrl {
  constructor(AppConstants, Articles, $scope, $stateParams, $state, $location) {
    'ngInject';

    this.currentPage = parseInt($stateParams.page) || 0;
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

  showMoreArticles() {
    this.currentPage += 1;
    this.getArticles();
    this.calculateArticleCount();
  }

  getArticles() {
    this.loading = true;
    this.list = [];

    this._Articles.getTopArticles(this.currentPage).then((res) => {
      this.loading = false;
      this.list = res;
      // Why don't you just work.
      // this.state.go('.', {page: this.currentPage});
      // window.history.pushState({}, `page ${this.currentPage}`, `#/?page=${this.currentPage}`);
    });
  }
}

let ArticleList = {
  controller: ArticleListCtrl,
  templateUrl: 'components/article-list.html'
};

export default ArticleList;
