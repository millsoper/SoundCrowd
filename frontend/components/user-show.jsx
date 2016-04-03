var React = require('react'),
    ReactRouter = require('react-router').Router,
    User = require('./user.jsx'),
    UserStore = require('../stores/users'),
    ApiUtil = require('../util/api_util');


var UserShow = React.createClass({
  // getInitialState: function(){
  //   var userId = this.props.params.userId;
  //   var user = this._findUserById(userId) || {};
  //   return { recording: recording };
  // },
  // _findUserById: function(id) {
  //   var res;
  //   UserStore.all().forEach(function (user){
  //     if (id == user.id) {
  //       res = user;
  //     }
  //   }.bind(this));
  //   return res;
  // },
  // componentDidMount: function() {
  //   this.userListener = UserStore.addListener(this._userChanged);
  //   ApiUtil.fetchUser();
  // },
  // componentWillUnmount: function () {
  //   this.userListener.remove();
  // },
  // _userChanged: function () {
  //   var userId = this.props.params.userId;
  //   var user = this._findUserById(userId);
  //   this.setState({ user: user });
  // },
  render: function() {
    return (
      <div className="content">
        User Profile Page -- set to form for viewing and editing own profile.
      </div>
    );
  }
});
  module.exports = UserShow;
