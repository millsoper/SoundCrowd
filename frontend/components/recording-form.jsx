var React = require('react'),
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session_store.js'),
    ReactRouter = require('react-router');

var RecordingForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      title: "",
      body: "",
      user_id: SessionStore.currentUser().id,
      username: SessionStore.currentUser().username,
      imageFile: null,
      imageUrl: null,
      audio: null,
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("recording[title]", this.state.title);
    formData.append("recording[body]", this.state.body);
    formData.append("recording[image]", this.state.imageFile);
    formData.append("recording[audio]", this.state.audio);
    formData.append("recording[username]", this.state.username);
    formData.append("recording[user_id]", this.state.user_id);
    var router = this.context.router;
    ApiUtil.createRecording(formData);
    this.navigateToHome();
  },
  navigateToHome: function(){
    this.context.router.push("");
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToHome();
  },
  handleTitleChange: function (e) {
    this.setState({ title: e.currentTarget.value });
  },
  handleAudioChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      this.setState({ audio: file });
    }.bind(this);

    reader.readAsDataURL(file);
  },
  handleBodyChange: function (e) {
    this.setState({ body: e.currentTarget.value });
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
    var imageUrl;
    var title;
    var body;
    var audio;
    if (this.state.imageUrl){
      imageUrl = this.state.imageUrl;
    }
    if (this.state.body){
      body = this.state.body;
    }
    if (this.state.title){
      title = this.state.title;
    }
    if (this.state.audio){
      audio = this.state.audio;
    }
    return (
        <div className="new-recording-form group">
          <h3>Add a Recording</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="upload-track-pic">
              <img className="form-pic"src={imageUrl}/>

            </div>
            <label>Title</label>
              <input type="text"
                     onChange={this.handleTitleChange}
                     value={title}/>
            <br/>
            <label>Image</label>
              <input min='0'
                     type="file"
                     onChange={this.handleFileChange}/>
            <br/>
            <label>Body</label>
              <input min='0' type="text"
                     onChange={this.handleBodyChange}
                     value={body}/>
            <br/>
              <label>Audio</label>
                <input min='0'
                       type="file"
                       onChange={this.handleAudioChange}/>
              <br/>
            <ul>
              <li><input type="submit" value="create recording"/></li>
              <li><button onClick={this.handleCancel}>Cancel</button></li>
            </ul>
          </form>

        </div>
    );
  }
});

module.exports = RecordingForm;
