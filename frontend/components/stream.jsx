var React = require('react');
var PropTypes = React.PropTypes;
var RecordingStore = require('../stores/recordings');
var ApiUtil = require('../util/api_util');
var UserStore = require('../stores/user_store');
var SessionStore = require('../stores/session_store');
var StreamItem = require('./stream-item');

function _getRecentRecordings() {
      return RecordingStore.recent();
    }


var Stream = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
      return {
        recordings: _getRecentRecordings(),
        users: UserStore.all(),
        currentUser: SessionStore.currentUser()
      };
    },
    componentDidMount: function () {
      this.recordingListener = RecordingStore.addListener(this._onChange);
      this.userListener = UserStore.addListener(this._onChange);
      this.sessionListener = SessionStore.addListener(this._onChange);
      ApiUtil.getRecentRecordings();
      ApiUtil.fetchCurrentUser();
      ApiUtil.fetchUsers();
    },
    componentWillUnmount: function () {
      this.recordingListener.remove();
      this.userListener.remove();
      this.sessionListener.remove();
    },
    _onChange: function () {
      this.setState({recordings: _getRecentRecordings()});
      this.setState({users: UserStore.all()});
      this.setState({currentUser: SessionStore.currentUser()});
    },

    render: function() {
        var usersHash = {};

        var content = this.state.recordings.map( function (recording){
        {

          return ( <StreamItem track = {recording}/>);

        }
      }.bind(this));
      return (
        <section className="stream content group">
          <section className="left group">
            <div className="stream-header">
              <h2>Stream</h2>
            </div>
            <h4>Listen to the newest sounds on your stream:</h4>
            <ul>
              {content}
            </ul>
          </section>
          <section className="right group">
            <h4>Who to follow</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </section>
    );
  }

});

module.exports = Stream;
