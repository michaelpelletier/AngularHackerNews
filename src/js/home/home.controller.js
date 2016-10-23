class HomeCtrl {
  constructor(AppConstants, currentPage, $scope) {
    'ngInject';

    $scope.setPageTitle('Home');
    this.appName = AppConstants.appName;
  }
}

export default HomeCtrl;
