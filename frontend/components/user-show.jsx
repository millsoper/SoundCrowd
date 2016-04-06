var React = require('react'),
    ReactRouter = require('react-router').Router,
    User = require('./user.jsx'),
    UserStore = require('../stores/user_store'),
    SessionStore = require('../stores/session_store.js'),
    ApiUtil = require('../util/api_util');


var UserShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    var userId = this.props.params.userId;
    var user = this._findUserById(userId) || {};
    return { user: user};
  },
  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchUser(newProps.params.userId);
    user = UserStore.find(newProps.params.userId);
    this.setState({user: user});
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
  editClickHandler: function (id) {
    this.context.router.push("users/" + id + "/edit");
  },
  deleteClickHandler: function (id) {
    ApiUtil.logout();
    ApiUtil.deleteUser(id);
    this.context.router.push("/");
  },
  _userChanged: function () {
    var userId = this.props.params.userId;
    var user = this._findUserById(userId);
    this.setState({ user: user});
  },
  handleFollowedClick: function (id) {
    this.context.router.push("users/" + id);
  },
  handleRecordingClick: function (id) {
    this.context.router.push("recordings/" + id);
  },
  render: function() {
    var followed_users;
    var current_user = SessionStore.currentUser();
    var user_profile = this.state.user.id;
    var image;
    var content = "not today Satan";
    var recordings;
    var start_date;
    var buttons;
    var that = this;
    if (this.state.user) {
      content = <h3>{this.state.user.username}</h3>;
      image = this.state.user.image;
      if (this.state.user.created_at){
      start_date = this.state.user.created_at.substring(0,10);
      }
      if (this.state.user.id === current_user.id){
        buttons = <div className="user-buttons">
                    <button onClick={this.editClickHandler.bind(null, user_profile )}
                            className="show-edit-user">Edit Profile</button>
                          <button onClick={this.deleteClickHandler.bind(null, user_profile )}
                            className="show-delete-user">Delete Account</button>
                  </div>;
      }
    }
    if (this.state.user.followed_users){
      followed_users = this.state.user.followed_users.map( function(user){
        var id = user.id;
        return (<li key={user.username}>
                  <a onClick={that.handleFollowedClick.bind(null, id)}>
                    {user.username}
                  </a>
                </li>);
      });
    }
    if (this.state.user.recordings) {
    recordings = this.state.user.recordings.map( function(recording){
      return (<li key={recording.id}>
                <a onClick={that.handleRecordingClick.bind(null, recording.id)}>
                  {recording.title}
                </a>
              </li>);
      });
    } else {
      recordings = "it isn't working";
    }

    return (
      <div className="content group user-profile">
        <div className="profile-pic">
          <img src={image}/>
          {buttons}
        </div>
        <article className = "profile-info">
          {content}

          <section>
            <h4>Recordings</h4>
            <ul>
              {recordings}
            </ul>
          </section>
          <section>
            <h4>Following</h4>
            <ul>
              {followed_users}
            </ul>
          </section>
          <section>
            <h4> Joined on:</h4>
            <p>{start_date}</p>
          </section>
        </article>

      </div>
    );
  }
});
  module.exports = UserShow;
