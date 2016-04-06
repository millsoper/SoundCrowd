var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');


var HomeFollowing = React.createClass({

  clickUser: function(id) {
    this.context.router.push("users/" + id );
  },
  render: function() {
    var handleItemClick = this.clickUser;
    var index_data;
    if(this.props.following){
      index_data = this.props.following.map(function(user){

                        var boundClick = handleItemClick.bind(null, user.id);
                        return (
                          <section className="recording-index-item">
                            <div className="recording-index-pic"  onClick={boundClick}>
                              <img src={user.image} className="track-image"/>
                            </div>
                            <ul>
                              <li className="index-user"><a onClick={boundClick}>{user.id}</a></li>
                            </ul>
                          </section>
                          );


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
