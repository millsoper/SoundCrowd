var React = require('react');
var ReactRouter = require('react-router');
var UserStore = require('../stores/user_store');
var ApiUtil = require('../util/api_util');

var StreamItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
      { playing: false, user: null }
    );
  },
  userClickHandler: function() {
    this.context.router.push("/users/" + this.props.track.user_id );
  },
  componentDidMount: function() {
    var klass;
    if (this.props.track){
      klass = "audio" + this.props.track.id;
    }
    this.audio = document.getElementsByClassName(klass)[0];
    this.audio.addEventListener("ended", function(){
      this.setState({playing: false});
    }.bind(this));
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchCurrentUser;
    ApiUtil.fetchUser(this.props.track.user_id);
  },
  onChange: function() {
    var user = UserStore.find(this.props.track.user_id);
    this.setState({user: user});
  },
  componentWillUnmount: function() {
    this.userListener.remove();
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
    target.classList.toggle("stream-playing");
  },
  render: function(){
    var audio;
    var boxKlass;
    var klass;
    var url;
    var userImage;
    var recording = this.props.track;
    if (this.state.playing){
      boxKlass = "music-bar stream-playing";
    } else {
      boxKlass = "music-bar";
    }
    if (this.state.user){
      userImage = this.state.user.image;
    }
    if (recording){
      url = "#/recordings/" + recording.id;
      audio = recording.audio;
      klass = "audio" + recording.id;
    }
    return (

      <li className="stream-item group" key={recording.title}>
          <div className="index-pic" onClick={this.playTrack}>
            <img src={recording.image}></img>
          </div>
          <audio src={audio} className={klass}></audio>
          <span className="stream-created">
            <div className="stream-user"><img src={userImage}/></div>
            <p className="index-release">{recording.username} added a track on {recording.created_at.substring(0,10)}:</p>
          </span>
          <p className="index-title"><a href={url}>{recording.title}</a></p>
          <p className="index-user" onClick={this.userClickHandler}>{recording.username}</p>
          <div className={boxKlass}>
            <svg id='svg'></svg>
          </div>
      </li>

    );
  }
});

module.exports = StreamItem;
