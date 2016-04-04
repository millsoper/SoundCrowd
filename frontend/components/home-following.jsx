var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');


var HomeFollowing = React.createClass({


  render: function() {
    var handleItemClick = this.props.clickfunction;
    var index_data;
    if(this.props.recordings){
      index_data = this.props.recordings.map(function(recording){

                        var boundClick = handleItemClick.bind(null, recording);
                        return (<IndexItem
                          onClick={boundClick}
                          recording={recording}
                          key={recording.id} />);
        });
    }
    return (
      <section className="group collection-rows collections-following">
        <h5>Following</h5>
        {index_data}
      </section>
    );
  }

});

module.exports = HomeFollowing;
