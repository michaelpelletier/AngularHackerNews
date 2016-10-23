import marked from 'marked';
import moment from 'moment';
import _ from 'underscore';

class CommentCtrl {
  constructor(Comments, $sce) {
    'ngInject';

    // Should really be sanitized but I'm noticing that the json I get
    // back isn't always "correct" and has tags left in it. Shame on you, HN.
    this.commentBody = $sce.trustAsHtml(marked(this.comment.text, { sanitize: false }));

    // Link to the actual website since I haven't built this.
    this.authorLink = `https://news.ycombinator.com/user?id=${this.comment.by}`;

    // Get the subcomments for this comment.
    Comments.getCommentsByParent(this.comment).then((sub_comments) => {
      this.sub_comments = _.filter(sub_comments, ((sub_comment) => {
        // Filter out deleted comments.
        return !sub_comment.deleted;
      }));
    });

    this.collapsed = false;
    this.collapse = '[-]';
  }

  // Hide comment and subcomments.
  toggleCollapse() {
    if (this.collapsed) {
      this.collapsed = false;
      this.collapse = '[-]';
    } else {
      this.collapsed = true;
      this.collapse = '[+]';
    }
  }
}

let Comment = {
  bindings: {
    comment: '='
  },
  controller: CommentCtrl,
  templateUrl: 'components/comment.html'
};

export default Comment;
