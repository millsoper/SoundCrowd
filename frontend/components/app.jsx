var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    SignedInHeader = require('./signed_in_header.jsx'),
    ApiUtil = require('../util/api_util.js'),
    Modal = require('react-modal'),
    EntryPage = require('./entry_page.jsx'),
    SignupForm = require('./signup_form.jsx');

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
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function() {
      this.sessionStoreToken.remove();
    },

    handleChange: function() {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    } else {
      this.setState({ currentUser: null });
      }
    },
    componentWillReceiveProps: function (newProps) {
     ApiUtil.fetchCurrentUser();
    },
    render: function () {
    var button, user;
      if (SessionStore.isLoggedIn()) {
      user = this.state.currentUser;
      }
    var content;
    if (SessionStore.isLoggedIn()) {
      return (
        <div>
          <SignedInHeader user= {user}/>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <EntryPage/>
      );
    }

  }
});

module.exports = App;
