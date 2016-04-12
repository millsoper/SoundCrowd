var React = require('react');
var PropTypes = React.PropTypes;
var CommentItem = require('./comment_item');
var ApiUtil = require('../util/api_util.js');
var CommentStore = require('../stores/comment_store');

var CommentBlock = React.createClass({
  getInitialState: function(){
    return (
      {currentUser: this.props.currentUser, track: this.props.track, comments: []}
    );
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({comments: newProps.track.comments});
  },
  componentDidMount: function () {
    this.commentListener = CommentStore.addListener(this._onChange);
    ApiUtil.fetchComments();
  },
  componentWillUnmount: function () {
    this.commentListener.remove();
  },
  _onChange: function () {
    var comments = CommentStore.findByTrack(this.props.track.id);
    this.setState({comments: comments});
  },
  submitHandler: function () {
    var comment = document.getElementsByClassName("make-comment")[0].value
    formData = {comment: {
      user_id: this.props.currentUser.id,
      text: comment,
      track_id: this.props.track.id
      }
    };
    ApiUtil.createComment(formData);
  },
  render: function() {
    var comments;
    if(this.state.comments){
      comments = this.state.comments.map( function(comment){
        return (
          <li key={comment.id + "s"}><CommentItem comment={comment}/></li>
        );
      });
    }
    return (
      <section className="comment-block group">
        <div className="comment-input group">
          <input className="make-comment" type="text" placeholder="What do you think?"></input>
          <div onClick={this.submitHandler} className="comment-button">comment</div>
        </div>
        <div className="track-comments">
          <ul>
            {comments}
          </ul>
        </div>
      </section>
    );
  }

});

module.exports = CommentBlock;
