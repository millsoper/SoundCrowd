var React = require('react'),
    ReactRouter = require('react-router').Router,
    Recording = require('./recording.jsx'),
    RecordingStore = require('../stores/recordings'),
    ApiUtil = require('../util/api_util'),
    AuthorInfo = require('./author_info'),
    PlayButton = require('./play-button'),
    PlayFooter = require('./play-footer'),
    SideBar = require('./show-side-bar');




var RecordingShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillReceiveProps: function (newProps) {
   ApiUtil.fetchRecordings(parseInt(newProps.params.recordingId));
  },
  getInitialState: function () {
    var recordingId = this.props.params.recordingId;
    var recording = this._findRecordingById(recordingId) || {} ;
    return { recording: recording };
  },
  _findRecordingById: function (id) {
    var foundTrack;
    var otherTracks = [];
     RecordingStore.all().forEach(function (recording) {
      if (id == recording.id) {
        foundTrack = recording;
      } else {
        otherTracks.push(recording);
      }
    }.bind(this));
     return [foundTrack, otherTracks];
  },
  componentDidMount: function () {
    this.recordingListener = RecordingStore.addListener(this._recordingChanged);
    ApiUtil.fetchRecordings();
  },
  componentWillUnmount: function () {
    this.recordingListener.remove();
  },
  _recordingChanged: function () {
    var recordingId = this.props.params.recordingId;
    var allRecordings = this._findRecordingById(recordingId);
    var recording = allRecordings[0];
    var otherRecordings = allRecordings[1];
    this.setState({ recording: recording});
    this.setState({otherRecordings: otherRecordings });
  },
  render: function () {

    return (
        <div className = "group">
          <div className="detailblock group">
            <div className="detail-info">
              <div><PlayButton/></div>
              <ul>
                <li>{this.state.recording.title}</li>
                <li>{this.state.recording.username}</li>
              </ul>
            </div>
            <div  className = "detail-pic" ><img src={this.state.recording.url}/></div>
          </div>
          <div className="home-body group">
            <section className="show-side-bar">
              <h4>More Tracks By This Artist</h4>
              <SideBar author_id={this.state.recording.user_id} otherRecordings={this.state.otherRecordings}/>
            </section>
            <section className="author-info">
              <AuthorInfo author={this.state.recording.username}/>
            </section>
            <section>
              <PlayFooter current_song={this.state.recording.title}/>
            </section>
          </div>
        </div>
      );
  }
});

module.exports = RecordingShow;
