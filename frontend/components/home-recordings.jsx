var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');

var HomeRecordings = React.createClass({

  render: function() {
    var ownRecordings;
    var handleItemClick = this.props.clickfunction;
    if (this.props.ownRecordings){
      if (this.props.ownRecordings.length === 0){
        ownRecordings = "You don't have any recordings yet.";
      } else {
        ownRecordings = this.props.ownRecordings.map(function(recording){

                          var boundClick = handleItemClick.bind(null, recording);
                          return (<IndexItem
                            onClick={boundClick}
                            recording={recording}
                            key={recording.id} />);
          });
      }
    }
    return (
      <section className="group collection-rows collections-recordings">
        <h5>Recordings</h5>
        {ownRecordings}
      </section>
    );
  }

});

module.exports = HomeRecordings;
