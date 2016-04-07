var React = require('react'),
    HomeFollowing = require('./home-following'),
    HomePlaylists = require('./home-playlists'),
    HomeRecordings = require('./home-recordings'),
    PropTypes = React.PropTypes;

var HomeOverview = React.createClass({

  render: function() {
    return (
      <section>
        <HomeRecordings clickfunction= {this.props.clickfunction} ownRecordings= {this.props.ownRecordings}/>
        <HomePlaylists clickfunction= {this.props.clickfunction}/>
        <HomeFollowing clickfunction= {this.props.clickfunction} followedUsers = {this.props.user.followed_users}/>
      </section>
    );
  }

});

module.exports = HomeOverview;
