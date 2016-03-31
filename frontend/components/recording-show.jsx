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
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var recordingId = this.props.params.recordingId;
    var recording = this._findRecordingById(recordingId) || {} ;
    return { recording: recording };
  },
  _findRecordingById: function (id) {
    var res;
     RecordingStore.all().forEach(function (recording) {
      if (id == recording.id) {
        res = recording;
      }
    }.bind(this));
     return res;
  },
  componentDidMount: function () {
    this.recordingListener = RecordingStore.addListener(this._recordingChanged);
    ApiUtil.fetchRecording();
  },
  componentWillUnmount: function () {
    this.recordingListener.remove();
  },
  _recordingChanged: function () {
    var recordingId = this.props.params.recordingId;
    var recording = this._findRecordingById(recordingId);
    this.setState({ recording: recording });
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
          <section className="show-side-bar">
            <h4><a href="/" >Back to Track Index</a></h4>
            <SideBar/>
          </section>
          <section className="author-info">
            <AuthorInfo author={this.state.recording.username}/>
          </section>
          <section>
            <PlayFooter current_song={this.state.recording.title}/>
          </section>
        </div>
      );
  }
});

module.exports = RecordingShow;
