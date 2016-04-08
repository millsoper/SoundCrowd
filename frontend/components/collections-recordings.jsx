var React = require('react');
var PropTypes = React.PropTypes;
var IndexItem = require('./index_item');
var ApiUtil = require('../util/api_util');
var UserStore = require('../stores/user_store');
var SessionStore = require('../stores/session_store');
var RecordingStore = require('../stores/recordings');

var CollectionsRecordings = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return ( {currentUser: null });
  },
  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    this.recordingListener = RecordingStore.addListener(this.onChange);
    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchUsers();
    ApiUtil.fetchRecordings();
  },
  componentWillUnmount: function() {
    this.userListener.remove();
    this.recordingListener.remove();
  },
  onChange: function(){
    var userId = SessionStore.currentUser().id;
    var user = UserStore.find(userId);
    this.setState({ currentUser: user});
  },
  handleItemClick: function (recording) {
    this.context.router.push("recordings/" + recording.id);
  },
  render: function() {
    var ownRecordings;
    var handleItemClick = this.handleItemClick;
    if (this.state.currentUser){
      if (this.state.currentUser.recordings.length === 0){
        ownRecordings = "You don't have any recordings yet.";
      } else {
        ownRecordings = this.state.currentUser.recordings.map(function(recording){

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

module.exports = CollectionsRecordings;
