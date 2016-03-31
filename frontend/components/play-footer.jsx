var React = require('react');

    var PlayFooter = React.createClass({
      render: function(){
        return (
          <div className="play-footer">
            <p className="track-name">Now Playing {this.props.current_song}</p>
          </div>
        );
      }
    });

    module.exports = PlayFooter;
