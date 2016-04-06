var React = require('react'),
    PropTypes = React.PropTypes,
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session_store.js'),
    RecordingStore = require('../stores/recordings');

var RecordingEditForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    var trackId = this.props.params.recordingId;
    var track = RecordingStore.find(trackId) || {};
    return ({
      title: track.title,
      body: track.body,
      sound: track.url,
      user_id: SessionStore.currentUser().id,
      username: SessionStore.currentUser().username,
      imageFile: null,
      imageUrl: track.image,
    });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchRecording(newProps.params.recordingId);
    var track = RecordingStore.find(newProps.params.recordingId);
    this.setState({title: track.title, body: track.body, sound: track.url, imageUrl: track.image});

  },
  componentDidMount: function () {
    this.recordingsListener = RecordingStore.addListener(this._onChange);
    var trackId = this.props.params.recordingId;
    ApiUtil.fetchRecording(trackId);
    this.trackId = trackId;
  },
  componentWillUnmount: function () {
    this.recordingsListener.remove();
  },
  _onChange: function() {
    var trackId = this.props.params.recordingId;
    var track = RecordingStore.find(trackId);
    if (track){
    this.setState({title: track.title, body: track.body, sound: track.url, imageUrl: track.image});

    this.trackId = track.id;}
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("recording[title]", this.state.title);
    formData.append("recording[body]", this.state.body);
    if (this.state.imageFile){
    formData.append("recording[image]", this.state.imageFile);
    }
    formData.append("recording[url]", this.state.sound);
    formData.append("recording[username]", this.state.username);
    formData.append("recording[user_id]", this.state.user_id);
    ApiUtil.updateRecording(formData, this.trackId);
    this.navigateToHome();
  },
  navigateToHome: function(){
    this.context.router.push("/");
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToHome();
  },
  handleTitleChange: function (e) {
    this.setState({ title: e.currentTarget.value });
  },
  handleSoundChange: function (e) {
    this.setState({ sound: e.currentTarget.value });
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
    var image;
    var title;
    var body;
    var sound;
    if (this.state.imageUrl) {
      image = this.state.imageUrl;
    }
    if (this.state.title) {
      title = this.state.title;
    }
    if (this.state.body) {
      body = this.state.body;
    }
    if (this.state.sound) {
      sound = this.state.sound;
    }
    return (
        <div className="new-recording-form group">
          <h3>Add a Recording</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="upload-track-pic">
              <p>Update Picture</p>
              <img className = "form-pic" src={image}></img>
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
              <label>Sound Url</label>
                <input min='0' type="text"
                       onChange={this.handleSoundChange}
                       value={sound}/>
            <br/>
            <ul>
              <li><input type="submit" value="update recording"/></li>
              <li><button onClick={this.handleCancel}>Cancel</button></li>
            </ul>
          </form>

        </div>
    );
  }
});

module.exports = RecordingEditForm;
