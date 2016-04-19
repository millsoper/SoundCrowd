var React = require('react'),
    ApiUtil = require('../util/api_util');

var SignupForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },

  render: function() {
    var errors;
    if (this.state.errors){
      errors = this.state.errors;
    }
    return (
          <div className="form-content group">
          <p>{errors}</p>
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <label htmlFor="username">What's your email?</label>
            <input onChange={this.updateUsername} type="text" value={this.state.username}/>
            <label htmlFor="password">Choose a Password</label>
            <input onChange={this.updatePassword} type="password" value={this.state.password}/>

            <button>Create Account</button>
          </form>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;
    if (this.state.password === ""){
      this.setState({errors: "Password cannot be blank."});
    }
    if (this.state.username === ""){
      this.setState({errors: "Username cannot be blank"});
    }
    if (this.state.username !== "" && this.state.password !== ""){
      ApiUtil.createUser(this.state, function() {
      router.push("/#");
      })
    };
  },

  updateUsername: function(e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }
});

module.exports = SignupForm;
