var React = require('react'),
    LoginForm = require('./login-form'),
    SignUpForm = require('./signup_form'),
    PropTypes = React.PropTypes;

var SessionForm = React.createClass({
  getInitialState: function(){
    return ( {content: "login"});
  },
  signInClick: function() {
    this.setState({content: "login"});
  },
  generateSignInButton: function() {
    var button;
    if (this.state.content == "signup"){
      button =  <li className="signin-selected"><a onClick={this.signUpClick}>Sign up</a></li>;
    } else {
      button =  <li><a onClick={this.signUpClick}>Sign up</a></li>;
    }
    return button;
  },
  generateSignUpButton: function(){
    var button;
    if (this.state.content == "login"){
      button = <li className="signin-selected"><a onClick={this.signInClick}>Log in</a></li>;
    } else {
      button = <li><a onClick={this.signInClick}>Log in</a></li>;
    }
    return button;
  },
  signUpClick: function() {
    this.setState({content: "signup"});
  },
  setContent: function (){
    var content;
    if (this.state.content == "signup"){
      content = <SignUpForm/>;
    } else {
      content = <LoginForm/>;
    }
    return content;
  },
  render: function() {
  var modalContent = this.setContent();

    return (
    <section>
      <div className="signin-header group">
        <div className="form-content-header">
          <div className="signin-header-logo">
            <img src="cloud-icon.png"/>
            <p>SoundCrowd</p>
          </div>
          <nav className="signin-nav">
            <ul>
              {this.generateSignUpButton()}
              {this.generateSignInButton()}
            </ul>
          </nav>
        </div>
      </div>
      {modalContent}
    </section>
    );
  }

});

module.exports = SessionForm;
