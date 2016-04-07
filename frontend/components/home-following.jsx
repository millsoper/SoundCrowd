var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');


var HomeFollowing = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  clickUser: function(id) {
    this.context.router.push("users/" + id );
  },
  render: function() {
    var handleItemClick = this.clickUser;
    var index_data;
    if(this.props.followedUsers){
      console.log("success");
      index_data = this.props.followedUsers.map(function(user){
        return (
            <section className="recording-index-item">
              <div className="recording-index-pic"  onClick={this.clickUser.bind(null, user.id)}>
                <img src={user.image} className="track-image"/>
              </div>
              <ul>
                <li className="index-user"><a onClick={this.clickUser.bind(null, user.id)}>{user.username}</a></li>
              </ul>
            </section>
                          );
      }.bind(this));
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
