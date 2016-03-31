var React = require('react');
var IndexItem = require('./index_item');
var RecordingStore = require('../stores/recordings.js');
var ApiUtil = require('../util/api_util.js');

function _getAllRecordings() {
  return RecordingStore.all();
}


var Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleItemClick: function (recording) {
    console.log("handleItemClick in index");
    this.context.router.push("recordings/" + recording.id);
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    var index_data = this.props.recordings.map(function(recording){
                      var boundClick = handleItemClick.bind(null, recording);
                      return (<IndexItem
                        onClick={boundClick}
                        recording={recording}
                        key={recording.id} />);
      });

    return (
      <div>
        <h1>All Tracks Index</h1>
        {index_data}
      </div>
    );
  }
});

module.exports = Index;
