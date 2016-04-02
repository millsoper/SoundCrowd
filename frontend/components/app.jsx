var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    SignedInHeader = require('./signed_in_header.jsx'),
    ApiUtil = require('../util/api_util.js'),
    Modal = require('react-modal'),
    SessionForm = require('./session_form.jsx'),
    SignupForm = require('./signup_form.jsx');

App = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
      return {
        currentUser: null, modalIsOpen: false
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
    openModal: function () {
      this.setState({modalIsOpen:true});
    },
    closeModal: function () {
      this.setState({modalIsOpen: false});
    },
    render: function () {
    var button, user;
      if (SessionStore.isLoggedIn()) {

        //X  require ApiUtil in header component
        //X  create button with clickHandler
        //in clickHandler, call ApiUtil.logout
        //and pass in a callback that redirects using push
      user = this.state.currentUser;
      }
    var content;
    if (SessionStore.isLoggedIn()) {
      return (
          <SignedInHeader user= {user} inheritedchildren = {this.props.children}/>
      );
    } else {
      var customStyles = {
          content : {
            top                   : '50%',
            border                : 'none',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
        };
        Modal.setAppElement('body');
      return (
        <div className ="landing-page">
          <section className="masthead">
            <nav>
              <div className="masthead-logo">
                <img src="cloud-icon.png"></img>
                <p>soundcrowd</p>
              </div>
              <ul>
                <li><a onClick={this.openModal}>Login</a></li>
                <li><a className="masthead-signup" onClick={this.openModal}>Create Account</a></li>
              </ul>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={false}
                style={customStyles} >

                <SessionForm></SessionForm>

              </Modal>
            </nav>
            <h3>Find the stories you love. Discover new things. Connect directly with storytellers.</h3>
          </section>
        </div>
      );
    }

  }
});

module.exports = App;
