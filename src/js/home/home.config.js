function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.home', {
    url: '/?:page',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    params: {
      page: {
        value : '0',
        squash: true,
      }
    },
    resolve: {
      currentPage: function($state, $stateParams) {
        return $stateParams.page;
      }
    }
  });
};

export default HomeConfig;
