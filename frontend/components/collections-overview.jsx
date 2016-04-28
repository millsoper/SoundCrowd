var React = require('react'),
    CollectionsFollowing = require('./collections-following'),
    CollectionsPlaylists = require('./collections-playlists'),
    CollectionsRecordings = require('./collections-recordings'),
    PropTypes = React.PropTypes;

var CollectionsOverview = React.createClass({

  render: function() {
    return (
      <section>
        <CollectionsRecordings/>
        <CollectionsFollowing/>
      </section>
    );
  }

});

module.exports = CollectionsOverview;
