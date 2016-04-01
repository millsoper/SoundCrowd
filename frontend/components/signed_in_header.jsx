var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    ApiUtil = require('../util/api_util.js');

    var SignedInHeader = React.createClass({
      contextTypes: {
        router: React.PropTypes.object.isRequired
      },
      clickHandler: function(){
        ApiUtil.logout();
        this.context.push("/");
      },
      render: function () {
        return (
          <div>
            <header className="signedin-header group">
              <a href="#/"className="signedin_badge">
                <img src="cloud-icon.png"/>
              </a>
              <ul className="home-nav">
                <li><a href="#">Collections</a></li>
                <li><a className="nav-selected" href="#">Home</a></li>
              </ul>
              <ul className="signedin-nav">
                <li className="searchdiv">
                  <input type="text" placeholder="Search" className="searchbar">
                  </input>
                  <img src="search-icon.png"/>
                </li>
                <li className="upload"><a href="#/recordings/new">Upload</a></li>
                <strong className="signedin_badge circle"></strong>
                  <li className="username"><a href="#/users/" className="nav-username">{this.props.user.username}</a></li>
                  <li><button onClick={this.clickHandler}>Logout</button></li>
              </ul>
            </header>
            {this.props.inheritedchildren}
          </div>);
      }
    });

    module.exports = SignedInHeader;
