var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    HashHistory = require('react-router').hashHistory,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,

    RecordingForm = require('./components/recording-form.jsx'),
    Recording = require('./components/recording.jsx'),
    RecordingShow = require('./components/recording-show.jsx'),
    RecordingEdit = require('./components/recording_edit.jsx'),
    UserEdit = require('./components/user_edit.jsx'),
    Stream = require('./components/stream'),

    ApiUtil = require("./util/api_util.js"),
    SessionStore = require("./stores/session_store"),

    CollectionsIndex = require('./components/collections_index.jsx'),
    CollectionsOverview = require('./components/collections-overview'),
    CollectionsRecordings = require('./components/collections-recordings'),
    CollectionsPlaylists = require('./components/collections-playlists'),
    CollectionsFollowing = require('./components/collections-following'),

    Home = require('./components/home.jsx'),
    UserShow = require('./components/user-show.jsx'),
    LoginForm = require('./components/login-form.jsx'),
    SignupForm = require('./components/signup_form.jsx'),
    App = require('./components/app.jsx');

    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Stream} onEnter={_requireLoggedIn}/>
        <Route path="/collections" component={CollectionsIndex} onEnter={_requireLoggedIn}>
          <IndexRoute component={CollectionsOverview}/>
          <Route path="recordings" component={CollectionsRecordings}/>
          <Route path="playlists" component={CollectionsPlaylists}/>
          <Route path="following" component={CollectionsFollowing}/>
        </Route>
        <Route path="/recordings/:recordingId" component={RecordingShow}/>
        <Route path="/new" component={RecordingForm}/>
        <Route path="/recordings/:recordingId/edit" component={RecordingEdit}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/users/:userId/edit" component={UserEdit} onEnter={_requireLoggedIn}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="users/:userId" component={UserShow}/>

      </Route>

    );


    document.addEventListener("DOMContentLoaded", function () {
      ReactDOM.render(
        <Router history={ HashHistory }>{routes}</Router>,
        document.getElementById('root')
      );
    });

    function _requireLoggedIn(nextState, replace, asyncCompletionCallBack) {
      if (!SessionStore.currentUserHasBeenFetched()) {
        ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
      } else {
        _redirectIfNotLoggedIn();
      }

      function _redirectIfNotLoggedIn() {
        if (!SessionStore.isLoggedIn()) {
          replace("/login");
        }
        asyncCompletionCallBack();
      }
    }
