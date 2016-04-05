var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  clickHandler: function() {
    this.context.router.push("users/" + this.props.recording.user_id );
  },
  render: function(){
    var recording = this.props.recording;
    return (
      <section className="recording-index-item">
        <div className="recording-index-pic"  onClick={this.props.onClick}>
          <img src={recording.image} className="track-image"/>
        </div>
        <ul>
          <li className="index-title">{recording.title}</li>
          <li className="index-user"><a onClick={this.clickHandler}>{recording.username}</a></li>
        </ul>
      </section>
    );
  }
});

module.exports = IndexItem;
