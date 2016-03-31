var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],
  render: function(){
    var recording = this.props.recording;
    return (
        <div className="recording-index-item" onClick={this.props.onClick}>
          <img src={recording.url} className="track-image"/>
          {recording.title}
          <br/>
          Text: {recording.body || "No reviews yet"}
          <br/>
        </div>
    );
  }
});

module.exports = IndexItem;
