var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../stores/user_store');
var ApiUtil = require('../util/api_util');
var SessionStore = require('../stores/session_store');

var CommentItem = React.createClass({
  getInitialState: function() {
    return (
      {user: {}}
    );
  },
  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchUsers();
    ApiUtil.fetchCurrentUser();
  },
  componentWillUnmount: function() {
    this.userListener.remove();
  },
  onChange: function(){
    var user = UserStore.find(this.props.comment.user_id);
    var currentUser = SessionStore.currentUser();
    this.setState({user: user});
    this.setState({currentUser: currentUser});
  },
  handleDelete: function() {
    var id = this.props.comment.id;
    ApiUtil.deleteComment(id);
  },
  render: function() {
    var image;
    var username;
    var url;
    var button;
    if (this.state.user){
      image = this.state.user.image;
      username = this.state.user.username;
      url = "#/users/" + this.state.user.id;
      if (this.state.currentUser){
        if(this.state.currentUser.id == this.state.user.id){
          button = <p onClick={this.handleDelete} className="x">X</p>;
        }
      }
    }
    return (
      <section className="comment-item">
        {button}
        <div className="comment-author"><img src={image}/></div>
        <div className="comment-text"><p><a href={url}>{username}</a> commented:</p> {this.props.comment.text}</div>
      </section>
    );
  }

});

module.exports = CommentItem;
