var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../stores/user_store');
var ApiUtil = require('../util/api_util');

var CommentItem = React.createClass({
  getInitialState: function() {
    return (
      {user: {}}
    );
  },
  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchUser();
  },
  componentWillUnmount: function() {
    this.userListener.remove();
  },
  onChange: function(){
    var user = UserStore.find(this.props.comment.user_id);
    this.setState({user: user});
  },
  render: function() {
    var image;
    var username;
    var url;
    if (this.state.user){
      image = this.state.user.image;
      username = this.state.user.username;
      url = "#/users/" + this.state.user.id;
    }
    return (
      <section>
        <div className="comment-author"><img src={image}/></div>
        <div className="comment-text"><p><a href={url}>{username}</a> commented:</p> {this.props.comment.text}</div>
      </section>
    );
  }

});

module.exports = CommentItem;
