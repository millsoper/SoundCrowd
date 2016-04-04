var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');

var HomePlaylists = React.createClass({

  render: function() {
    return (
      <section className="group collection-rows collections-playlists">
        <h5>Playlists</h5>
        <p> You don't have any playlists yet.</p>
        <div className="empty-index"></div>
        <div className="empty-index"></div>
        <div className="empty-index"></div>
        <div className="empty-index"></div>
        <div className="empty-index"></div>
      </section>
    );
  }

});

module.exports = HomePlaylists;
