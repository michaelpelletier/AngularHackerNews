import _ from 'underscore';

export default class Comments {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getCommentsByParent(parent) {
    // Get all comments for a parent (may be an article or another comment)
    return this._$q.all(_.map(parent.kids, ((comment) => {
      let commentRequest = {
        url: `${this._AppConstants.api}/item/${comment}.json`,
        method: 'GET'
      }

      return this._$http(commentRequest).then((res) => res.data);
    })));
  }
}
