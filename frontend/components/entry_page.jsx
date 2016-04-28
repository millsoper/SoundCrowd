var React = require('react'),
    Modal = require('react-modal'),
    SessionForm = require('./session_form.jsx'),
    PropTypes = React.PropTypes,
    ApiUtil = require('../util/api_util'),
    EntryIndex = require('./entry_index.jsx');

var EntryPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return { modalIsOpen: false, formtype: "login" };
  },
  openSignUpModal: function () {
    this.setState({modalIsOpen:true});
    this.setState({formtype: "signup"});
  },
  openLogInModal: function () {
    this.setState({modalIsOpen:true});
    this.setState({formtype: "login"});
  },
  guestSignIn: function(){
    debugger;
      var router = this.context.router;
      var loginInfo = { name: "Aunt Beru", password: "password"};

      ApiUtil.login(loginInfo, function() {
        router.push("/");
      });
  },
  closeModal: function () {
    this.setState({modalIsOpen: false});
  },
  render: function() {
    var customStyles = {
        content : {
          top                   : '30%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight          : '-50%',
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
              <li><a onClick={this.openLogInModal}>Login</a></li>
              <li><a className="masthead-beru" onClick={this.guestSignIn}>Sign in as Aunt Beru</a></li>
              <li><a className="masthead-signup" onClick={this.openSignUpModal}>Create Account</a></li>
            </ul>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              shouldCloseOnOverlayClick={false}
              style={customStyles} >

              <SessionForm opento= {this.state.formtype}></SessionForm>

            </Modal>
          </nav>
          <div className="entry-search">
            <h3>Find the sounds you love. Discover new worlds. Connect directly with other artists.</h3>
            <input type="text" placeholder="Search for stories, storytellers, tags" className="entry-search-bar"></input>
            <p>or</p>
            <a onClick={this.openLogInModal} className="entry-add">Add Your Own</a>
          </div>
        </section>
        <EntryIndex clickaction={this.openLogInModal}/>
      </div>
    );

  }

});

module.exports = EntryPage;
