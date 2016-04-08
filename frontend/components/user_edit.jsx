var React = require('react'),
    PropTypes = React.PropTypes,
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session_store.js'),
    UserStore = require('../stores/user_store');

var UserEditForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    var userId = this.props.params.recordingId;
    var user = UserStore.find(userId) || {};
    this.userId = userId;
    return ({
      username: SessionStore.currentUser().username,
      imageFile: null,
      imageUrl: SessionStore.currentUser().image,
    });
  },
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(newProps.params.userId);
  },
  componentDidMount: function () {
    this.usersListener = UserStore.addListener(this._onChange);
    var userId = this.props.params.userId;
    ApiUtil.fetchUser(userId);
  },
  componentWillUnmount: function () {
    this.usersListener.remove();
  },
  _onChange: function() {
    var userId = this.props.params.userId;
    var user = UserStore.find(userId);
    if (user){
    this.setState({username: user.username, imageUrl: user.image});
    }
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("user[username]", this.state.username);
    if (this.state.imageFile){
    formData.append("user[image]", this.state.imageFile);
    }
    ApiUtil.updateUser(formData, this.props.params.userId);
    this.navigateToHome();
  },
  navigateToHome: function(){
    this.context.router.push("/users/" + this.props.params.userId);
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToHome();
  },
  handleUsernameChange: function (e) {
    this.setState({ username: e.currentTarget.value });
  },
  handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ imageFile: file, imageUrl: result });
    }.bind(this);
    reader.readAsDataURL(file);
  },

  render: function(){
    var image;
    var username;
    if (this.state.imageUrl){
      image = this.state.imageUrl;
    }
    if (this.state.username){
      username = this.state.username;
    }
    return (
        <div className="content new-recording-form group">
          <h3>Edit Profile</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="upload-track-pic"><p>Update Picture</p><img className = "form-pic" src={image}></img></div>
            <label>Username</label>
              <input type="text"
                     onChange={this.handleUsernameChange}
                     value={username}/>
            <br/>
            <label>Image</label>
              <input min='0'
                     type="file"
                     onChange={this.handleFileChange}/>
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
