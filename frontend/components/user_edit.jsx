var React = require('react'),
    PropTypes = React.PropTypes,
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    SessionStore = require('../stores/session_store.js'),
    UserStore = require('../stores/user_store');

var UserEditForm = React.createClass({

  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    var userId = this.props.params.recordingId;
    var user = UserStore.find(userId) || {};
    this.userId = userId;
    return ({
      username: SessionStore.currentUser().username,
      image: SessionStore.currentUser().image,
    });
  },
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(newProps.params.userId);
  },
  componentDidMount: function () {
    this.usersListener = UserStore.addListener(this._onChange);
    var userId = this.props.params.user_id;
    ApiUtil.fetchUser(userId);
  },
  componentWillUnmount: function () {
    this.usersListener.remove();
  },
  _onChange: function() {
    var userId = this.props.params.user_id;
    var user = UserStore.find(userId);
    this.setState({username: user.username, image: user.image});
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var user = Object.assign({}, this.state);
    ApiUtil.updateUser(user, this.props.params.userId);
    this.navigateToHome();
  },
  navigateToHome: function(){
    this.props.history.pushState(null, "");
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToHome();
  },

  render: function(){
    var image = this.state.image.url;
    return (
        <div className="new-recording-form group">
          <h3>Edit Profile</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="upload-track-pic"><p>Update Picture</p><img className = "form-pic" src={image}></img></div>
            <label>Username</label>
              <input type="text" valueLink={this.linkState('username')}/>
            <br/>
            <label>Image</label>
              <input min='0' type="file" valueLink={this.linkState('image')}/>
            <br/>
            <ul>
              <li><input type="submit" value="update profile"/></li>
              <li><button onClick={this.handleCancel}>Cancel</button></li>
            </ul>
          </form>

        </div>
    );
  }
});

module.exports = UserEditForm;
