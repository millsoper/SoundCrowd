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

    ApiUtil = require("./util/api_util.js"),
    SessionStore = require("./stores/session_store"),

    Index = require('./components/index.jsx'),
    Home = require('./components/home.jsx'),
    UserShow = require('./components/user-show.jsx'),
    LoginForm = require('./components/login-form.jsx'),
    SignupForm = require('./components/signup_form.jsx'),
    App = React.createClass({
        contextTypes: {
          router: React.PropTypes.object.isRequired
        },
        getInitialState: function() {
          return {
            currentUser: null
          };
        },

        componentDidMount: function() {
          this.sessionStoreToken = SessionStore.addListener(this.handleChange);
          this.handleChange();
        },

        componentWillUnmount: function() {
          this.sessionStoreToken.remove();
        },

      handleChange: function() {
        if (SessionStore.isLoggedIn()) {
          this.setState({ currentUser: SessionStore.currentUser() });
        } else {
          this.context.router.push("/login");
        }
      },
      render: function () {
        var button, user;

        if (this.state.currentUser) {
          button = <button onClick={ApiUtil.logout}>Logout</button>;
          user = this.state.currentUser;
          }
        var content;
        if (this.state.currentUser) {
          return (
            <div>
              <header className="signedin-header group">
                <strong className="signedin_badge">
                  <img src="cloud-icon.png"/>
                </strong>
                <ul className="home-nav">
                  <li><a href="#">Collections</a></li>
                  <li><a className="nav-selected" href="#">Home</a></li>
                </ul>
                <ul className="signedin-nav">
                  <li className="searchdiv">
                    <input type="text" placeholder="Search" className="searchbar">
                      <img src="search-icon.png"/>
                    </input>
                  </li>
                  <li className="upload"><a href="#/recordings/new">Upload</a></li>
                  <strong className="signedin_badge circle"></strong>
                    <li className="username"><a href="#/users/" className="nav-username"></a></li>
                    <li>{button}</li>
                </ul>
              </header>
              {this.props.children}
            </div>
          );
        } else {
          return (
            <div className="content">
              {this.props.children}
            </div>
          );
        }

      }
    });


    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
          <Route path="recordings/new" component={RecordingForm}/>
          <Route path="recordings" component={RecordingIndex} onEnter={_requireLoggedIn}/>
          <Route path="recordings/:recordingId" component={RecordingShow}/>
          <Route path="users/:userId" component={UserShow}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
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
