import _ from 'underscore';

export default class Articles {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getTopArticles(page) {
    let request = {
      url: `${this._AppConstants.api}/topstories.json`,
      method: 'GET'
    };

    const offset = page * this._AppConstants.articlesPerPage;

    return this._$http(request).then((res) => {
      // Find articles for the page we are on.
      const paginatedItems = _.rest(res.data, offset).slice(0, this._AppConstants.articlesPerPage);

      // Get individual article data.
      return this._$q.all(_.map(paginatedItems, ((article) => {
        let articleRequest = {
          url: `${this._AppConstants.api}/item/${article}.json`,
          method: 'GET'
        }

        return this._$http(articleRequest).then((res) => res.data);
      })))
    })
  }

  getArticleById(id) {
    let deferred = this._$q.defer();

    this._$http({
      url: `${this._AppConstants.api}/item/${id}.json`,
      method: 'GET'
    }).then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
    );

    return deferred.promise;
  }
}
