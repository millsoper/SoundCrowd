var React = require('react');
var PropTypes = React.PropTypes;
var CommentItem = require('./comment_item');

var CommentBlock = React.createClass({
  getInitialState: function(){
    return (
      {currentUser: this.props.currentUser, track: this.props.track}
    );
  },
  componentDidMount: function () {

  },
  componentWillUnmount: function () {
    // this.commentListener.remove();
  },
  _onChange: function () {

  },
  submitHandler: function () {

  },
  render: function() {
    var comments;
    if(this.props.track.comments){
      comments = this.props.track.comments.map( function(comment){
        return (
          <li key={comment.id}><CommentItem comment={comment}/></li>
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
