function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.article', {
    url: '/item?id',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article/article.html',
    title: 'Article',
    resolve: {
      article: function(Articles, $state, $stateParams) {
        return Articles.getArticleById($stateParams.id).then(
          (article) => article,
          (err) => $state.go('app.home')
        )
      }
    }
  });
};

export default ArticleConfig;
