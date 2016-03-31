var React = require('react');
var RecordingStore = require('../stores/recordings');
var ApiUtil = require('../util/api_util');
var Index = require('./index');


function _getAllRecordings() {
  return RecordingStore.all();
}

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _recordingsChanged: function(){
    this.setState({recordings: _getAllRecordings()});
  },
  getInitialState: function(){
    return {
      recordings: _getAllRecordings(),
    };
  },
  componentDidMount: function(){
    this.recordingListener = RecordingStore.addListener(this._recordingsChanged);
    ApiUtil.fetchRecordings();
  },
  componentWillUnmount: function(){
    this.recordingListener.remove();
  },
  handleRecordingClick: function (recording) {
    this.props.history.pushState(null, "recordings/" + recording.id);
  },
  render: function(){
    return(
      <div>

        <div className="half">
          <Index recordings={this.state.recordings} history={this.props.history} />
        </div>
      </div>
    );
  }
});

module.exports = Home;
