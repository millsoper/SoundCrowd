var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    HashHistory = require('react-router').hashHistory,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,

    RecordingForm = require('./components/recording-form.jsx'),
    RecordingIndex = require('./components/index'),
    Recording = require('./components/recording.jsx'),
    RecordingShow = require('./components/recording-show.jsx'),
    RecordingEdit = require('./components/recording_edit.jsx'),
    UserEdit = require('./components/user_edit.jsx'),
    Stream = require('./components/stream'),

    ApiUtil = require("./util/api_util.js"),
    SessionStore = require("./stores/session_store"),

    Index = require('./components/index.jsx'),
    Home = require('./components/home.jsx'),
    UserShow = require('./components/user-show.jsx'),
    LoginForm = require('./components/login-form.jsx'),
    SignupForm = require('./components/signup_form.jsx'),
    App = require('./components/app.jsx');

    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="recordings/new" component={RecordingForm}/>
        <Route path="recordings" component={RecordingIndex} onEnter={_requireLoggedIn}/>
        <Route path="recordings/:recordingId" component={RecordingShow}/>
        <Route path="users/:userId" component={UserShow}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="recordings/:recordingId/edit" component={RecordingEdit}/>
        <Route path="users/:userId/edit" component={UserEdit}/>
        <Route path="/stream" component={Stream}/>
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
