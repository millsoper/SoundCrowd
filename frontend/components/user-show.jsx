var React = require('react'),
    ReactRouter = require('react-router').Router,
    User = require('./user.jsx'),
    UserStore = require('../stores/user_store'),
    SessionStore = require('../stores/session_store.js'),
    ApiUtil = require('../util/api_util');


var UserShow = React.createClass({
  getInitialState: function(){
    var userId = this.props.params.userId;
    var user = this._findUserById(userId) || {};
    return { user: user};
  },
  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchUser(newProps.params.user_id);
  },
  _findUserById: function(id) {
    var res = UserStore.find(id);
    return res;
  },
  componentDidMount: function() {
    this.userListener = UserStore.addListener(this._userChanged);
    ApiUtil.fetchUsers();
    this.setState({ recordings: this.state.user.recordings});
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  _userChanged: function () {
    var userId = this.props.params.userId;
    var user = this._findUserById(userId);
    this.setState({ user: user});
  },
  render: function() {
    var content = "not today Satan";
    var recordings;
    if (this.state.user) {
      content = this.state.user.username;
    }
    if (this.state.user.recordings) {
    recordings = this.state.user.recordings.map( function(recording){
      return <li key={recording.id}>{recording.title}</li>;
      });
    } else {
      recordings = "it isn't working";
    }

    return (
      <div className="content">
        {content}
        <ul>
          {recordings}
        </ul>
      </div>
    );
  }
});
  module.exports = UserShow;
