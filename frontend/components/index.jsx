var React = require('react');
var IndexItem = require('./index_item');
var RecordingStore = require('../stores/recordings.js');
var SessionStore = require('../stores/session_store');
var UserStore = require('../stores/user_store');
var ApiUtil = require('../util/api_util.js');

function _getAllRecordings() {
  return RecordingStore.all();
}

var Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      recordings: _getAllRecordings(), selected: "overview", user: SessionStore.currentUser()
    };
  },
  componentDidMount: function () {
    this.recordingListener = RecordingStore.addListener(this._onChange);
    this.sessionListener = RecordingStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchUsers();
    ApiUtil.fetchRecordings();
  },
  componentWillUnmount: function () {
    this.recordingListener.remove();

  },
  _onChange: function () {
    var current_user = SessionStore.currentUser().id;
    var own_recordings = UserStore.find(current_user).recordings;
    this.setState({recordings: _getAllRecordings()});
    this.setState({user: SessionStore.currentUser()});
    this.setState({own_recordings: own_recordings});
  },
  handleItemClick: function (recording) {
    console.log("handleItemClick in index");
    this.context.router.push("recordings/" + recording.id);
  },
  handleNavFollowingClick: function () {
    this.setState({selected: "following"});
  },
  handleNavOverviewClick: function () {
    this.setState({selected: "overview"});
  },
  handleNavRecordingsClick: function () {
    this.setState({selected: "recordings"});
  },
  handleNavPlaylistsClick: function () {
    this.setState({selected: "playlists"});
  },
  generateFollowingButton: function () {
    var button;
    if (this.state.selected == "following"){
      button = <li className="collections-selected"><a onClick={this.handleNavFollowingClick}>Following</a></li>;
    } else {
      button = <li><a onClick={this.handleNavFollowingClick}>Following</a></li>;
    }
    return button;
  },
  generateOverviewButton: function () {
    var button;
    if (this.state.selected == "overview"){
      button = <li className="collections-selected"><a onClick={this.handleNavOverviewClick}>Overview</a></li>;
    } else {
      button = <li><a onClick={this.handleNavOverviewClick}>Overview</a></li>;
    }
    return button;
  },
  generateRecordingsButton: function () {
    var button;
    if (this.state.selected == "recordings"){
      button = <li className="collections-selected"><a onClick={this.handleNavRecordingsClick}>Recordings</a></li>;
    } else {
      button = <li><a onClick={this.handleNavRecordingsClick}>Recordings</a></li>;
    }
    return button;
  },
  generatePlaylistsButton: function () {
    var button;
    if (this.state.selected == "playlists"){
      button = <li className="collections-selected"><a onClick ={this.handleNavPlaylistsClick}>Playlists</a></li>;
    } else {
      button = <li><a onClick ={this.handleNavPlaylistsClick}>Playlists</a></li>;
    }
    return button;
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    var index_data = this.state.recordings.map(function(recording){

                      var boundClick = handleItemClick.bind(null, recording);
                      return (<IndexItem
                        onClick={boundClick}
                        recording={recording}
                        key={recording.id} />);
      });
    var ownRecordings;
    if (this.state.own_recordings){
      ownRecordings = this.state.own_recordings.map(function(recording){

                        var boundClick = handleItemClick.bind(null, recording);
                        return (<IndexItem
                          onClick={boundClick}
                          recording={recording}
                          key={recording.id} />);
        });
    }
    return (
      <section className="content collection-nav" id="collections-overview">
        <ul className = "collection-nav-list">
          {this.generateFollowingButton()}
          {this.generatePlaylistsButton()}
          {this.generateRecordingsButton()}
          {this.generateOverviewButton()}
        </ul>
        <section className="group collection-rows collections-recordings">
          <h5>Recordings</h5>
          {ownRecordings}
        </section>
        <section className="group collection-rows collections-playlists">
          <h5>Playlists</h5>
          <p> You don't have any playlists yet.</p>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
          <div className="empty-index"></div>
        </section>
        <section className="group collection-rows collections-following">
          <h5>Following</h5>
          {index_data}
        </section>
      </section>
    );
  }
});

module.exports = Index;
