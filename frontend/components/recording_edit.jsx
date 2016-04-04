var React = require('react'),
    PropTypes = React.PropTypes,
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    SessionStore = require('../stores/session_store.js'),
    RecordingStore = require('../stores/recordings');

var RecordingEditForm = React.createClass({

  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    var trackId = this.props.params.recordingId;
    var track = RecordingStore.find(trackId) || {};
    return ({
      title: track.title,
      body: track.body,
      user_id: SessionStore.currentUser().id,
      username: SessionStore.currentUser().username,
      url: track.url,
    });
  },
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchRecording(newProps.params.recordingId);
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
    this.setState({title: track.title, body: track.body, url: track.url});
    this.trackId = track.id;
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var recording = Object.assign({}, this.state);
    ApiUtil.updateRecording(recording, this.trackId);
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
    var url = this.state.url;
    return (
        <div className="new-recording-form group">
          <h3>Add a Recording</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="upload-track-pic"><p>Update Picture</p><img className = "form-pic" src={url}></img></div>
            <label>Title</label>
              <input type="text" valueLink={this.linkState('title')}/>
            <br/>
            <label>Image Url</label>
              <input min='0' type="text" valueLink={this.linkState('url')}/>
            <br/>
            <label>Body</label>
              <input min='0' type="text" valueLink={this.linkState('body')}/>
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
