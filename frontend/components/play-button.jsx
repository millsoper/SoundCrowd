var React = require('react');

    var PlayButton = React.createClass({
      getInitialState: function () {
        return (
          { playing: false }
        );
      },
      componentDidMount: function() {
        this.audio = document.getElementsByClassName("audio")[0];
        this.audio.addEventListener("ended", function(){
          this.setState({playing: false});
          var button = document.getElementsByClassName("big-play-button")[0];
          button.classList.toggle("button-playing");
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
        var buttonClass;
        if (this.props.audio){
          audio = this.props.audio;
        }
        return (
          <div onClick={this.playTrack} className="big-play-button">
            <audio src={audio} className="audio"></audio>
          </div>

        );
      }
    });

    module.exports = PlayButton;
