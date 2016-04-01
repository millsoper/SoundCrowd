var React = require('react'),
    ApiUtil = require('../util/api_util');

var SignupForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      name: "",
      password: ""
    };
  },

  render: function() {
    return (
    <div>
      <div className="signin-header group">
        <div className="form-content-header">
          <div className="signin-header-logo">
            <img src="cloud-icon.png"/>
            <p>SoundCrowd</p>
          </div>
          <nav className="signin-nav">
            <ul>
              <li><a href="#/login">Log in</a></li>
              <li className="signin-selected"><a href="#/signup">Sign up</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="form-content group">
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">What's your email?</label>
            <input onChange={this.updateName} type="text" value={this.state.name}/>
            <label htmlFor="password">Choose a Password</label>
            <input onChange={this.updatePassword} type="password" value={this.state.password}/>

            <button>Create Account</button>
          </form>
      </div>
    </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login(this.state, function() {
      router.push("/");
    });
  },

  updateName: function(e) {
    this.setState({ name: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }
});

module.exports = SignupForm;
