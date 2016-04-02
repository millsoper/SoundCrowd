var React = require('react'),
    PropTypes = React.PropTypes,
    ApiUtil = require('../util/api_util'),
    RecordingStore = require('../stores/recordings');

function _getAllRecordings() {
      return RecordingStore.all();
    }

var EntryIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      recordings: _getAllRecordings(),
    };
  },
  componentDidMount: function () {
    this.recordingListener = RecordingStore.addListener(this._onChange);
    ApiUtil.fetchRecordings();
  },
  componentWillUnmount: function () {
    this.recordingListener.remove();
  },
  _onChange: function () {
    this.setState({recordings: _getAllRecordings()});
  },

  render: function() {
    var content = this.state.recordings.map( function (recording, index){
      if (index < 6){
        return (
          <li><a onClick={this.props.clickaction}><div className="index-pic"><img src={recording.url}></img></div>
              <p className="entry-index-title">{recording.title}</p>
              <p className="entry-index-user">{recording.username}</p></a>
          </li>
        );
      }
    }.bind(this));
    return (
      <section className="entry-track-index group">
        <h4>Listen to the newest stories</h4>
        <ul>
          {content}
        </ul>
      </section>
    );
  }

});

module.exports = EntryIndex;
