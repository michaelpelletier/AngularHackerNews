import moment from 'moment';

class TimeSinceCtrl {
  constructor($state) {
    'ngInject';

    // Calculate the time since.
    const articleTime = this.article.time;
    this.timeSince = moment.unix(articleTime).fromNow();
  }
}

let TimeSince = {
  bindings: {
    article: '='
  },
  controller: TimeSinceCtrl,
  templateUrl: 'components/time-since.html'
};

export default TimeSince;
