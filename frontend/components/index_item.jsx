var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  render: function(){
    var recording = this.props.recording;
    return (
      <div className="recording-index-item" onClick={this.props.onClick}>
        <div className="recording-index-pic">
          <img src={recording.url} className="track-image"/>
        </div>
        <ul>
          <li className="index-title">{recording.title}</li>
          <li className="index-user">{recording.username}</li>
        </ul>
      </div>
    );
  }
});

module.exports = IndexItem;
