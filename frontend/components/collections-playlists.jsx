var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');

var CollectionsPlaylists = React.createClass({

  render: function() {
    return (
      <section className="group collection-rows collections-playlists">
        <h5>Playlists</h5>
        <span> You don't have any playlists yet.</span>
        <div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
        </div>
      </section>
    );
  }

});

module.exports = CollectionsPlaylists;
