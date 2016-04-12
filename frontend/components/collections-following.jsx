var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');
var ApiUtil = require('../util/api_util');
var UserStore = require('../stores/user_store');
var SessionStore = require('../stores/session_store');


var CollectionsFollowing = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return ( {currentUser: null });
  },
  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchUsers();
  },
  componentWillUnmount: function() {
    this.userListener.remove();
  },
  onChange: function(){
    var userId = SessionStore.currentUser().id;
    var user = UserStore.find(userId);
    this.setState({ currentUser: user});
  },
  clickUser: function(id) {
    this.context.router.push("users/" + id );
  },
  render: function() {
    var handleItemClick = this.clickUser;
    var index_data;
    if(this.state.currentUser){
      if(this.state.currentUser.followed_users.length === 0){
        index_data = <section>
                      <span> You haven't followed any users.</span>
                        <div>
                          <div className="empty-index"></div>
                          <div className="empty-index"></div>
                          <div className="empty-index"></div>
                          <div className="empty-index"></div>
                          <div className="empty-index"></div>
                        </div>
                      </section>;
      } else {
        index_data = this.state.currentUser.followed_users.map(function(user){
          return (
              <section key={user.username} className="recording-index-item">
                <div className="recording-index-pic"  onClick={this.clickUser.bind(null, user.id)}>
                  <img src={user.image} className="track-image"/>
                </div>
                <ul>
                  <li key={user.username} className="index-user"><a onClick={this.clickUser.bind(null, user.id)}>{user.username}</a></li>
                </ul>
              </section>
                            );
        }.bind(this));
      }
    }
    return (
      <section className="group collection-rows collections-following">
        <h5>Following</h5>
        {index_data}
      </section>
    );
  }

});

module.exports = CollectionsFollowing;
