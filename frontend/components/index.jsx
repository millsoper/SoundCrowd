var React = require('react');
var IndexItem = require('./index_item');

var Index = React.createClass({
  handleItemClick: function (recording) {
    console.log("handleItemClick in index");
    console.log(this.props.history);
    this.props.history.pushState(null, "recordings/" + recording.id, {});
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    return (
      <div>
        <h1>All Tracks Index</h1>
        {
          this.props.recordings.map(function(recording){
            var boundClick = handleItemClick.bind(null, recording);
            return <IndexItem
              onClick={boundClick}
              recording={recording}
              key={recording.id} />
          })
        }
      </div>
    );
  }
});

module.exports = Index;
