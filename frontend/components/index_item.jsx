var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
      { playing: false }
    );
  },
  clickHandler: function() {
    this.context.router.push("/users/" + this.props.recording.user_id );
  },
  componentDidMount: function() {
    var klass;
    if (this.props.recording){
      klass = "audio" + this.props.recording.id;
    }
    this.audio = document.getElementsByClassName(klass)[0];
    this.audio.addEventListener("ended", function(){
      this.setState({playing: false});
    }.bind(this));
  },
  playTrack: function (e) {
    if (this.state.playing){
      this.audio.pause();
      this.setState({ playing: false});
    } else {
      this.audio.play();
      this.setState({ playing: true});
    }
    var target = e.target;
    target.classList.toggle("button-playing");
  },
  render: function(){
    var audio;
    var klass;
    var recording = this.props.recording;
    if (recording){
      audio = recording.audio;
      klass = "audio" + recording.id;
    }
    return (
      <section className="recording-index-item">
        <div className="recording-index-pic"  onClick={this.playTrack}>
          <img src={recording.image} className="track-image"/>
          <audio src={audio} className={klass}></audio>
        </div>
        <ul>
          <li className="index-title" onClick={this.props.onClick}>{recording.title}</li>
          <li className="index-user"><a onClick={this.clickHandler}>{recording.username}</a></li>
        </ul>
      </section>
    );
  }
});

module.exports = IndexItem;
