var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    ApiUtil = require('../util/api_util.js');

    var SignedInHeader = React.createClass({
      contextTypes: {
        router: React.PropTypes.object.isRequired
      },
      getInitialState: function(){
        return ( {content: "stream"});
      },
      generateStreamButton: function() {
        var button;
        if (this.state.content == "stream"){
          button =  <li onClick = {this.streamClick}><a className="nav-selected" href="#/">Stream</a></li>;
        } else {
          button =  <li onClick = {this.streamClick}><a href="#/">Stream</a></li>;
        }
        return button;
      },
      generateCollectionsButton: function(){
        var button;
        if (this.state.content == "collections"){
          button = <li className="nav-selected" onClick = {this.collectionsClick}><a href="#/collections">Collections</a></li>;
        } else {
          button = <li onClick = {this.collectionsClick}><a href="#/collections">Collections</a></li>;
        }
        return button;
      },
      collectionsClick: function() {
        this.setState({content: "collections"});
      },
      setButton: function() {
        this.setState({content: "stream"});
      },
      streamClick: function() {
        this.setState({content: "stream"});
      },
      clickHandler: function(){
        ApiUtil.logout();
        this.context.router.push("/");
      },
      render: function () {
        var username;
        var url = "#/users/" + SessionStore.currentUser().id;
        return (
          <div>
            <header className="signedin-header group">
              <nav className="group">
                <a href="#/" onClick={this.setButton} className="signedin_badge">
                  <img src="cloud-icon.png"/>
                </a>
                <ul className="home-nav">
                  {this.generateCollectionsButton()}
                  {this.generateStreamButton()}
                </ul>
                <ul className="signedin-nav">
                  <li className="searchdiv">
                    <input type="text" placeholder="Search" className="searchbar">
                    </input>
                    <img src="search-icon.png"/>
                  </li>
                  <li className="upload"><a href="#new">Upload</a></li>
                  <strong className="signedin_badge circle"></strong>
                    <li className="username"><a href= {url} className="nav-username">{this.props.user.username}</a></li>
                    <li><button onClick={this.clickHandler}>Logout</button></li>
                </ul>
              </nav>
            </header>

          </div>);
      }
    });

    module.exports = SignedInHeader;
