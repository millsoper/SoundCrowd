var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    ApiUtil = require('../util/api_util.js');

    var SignedInHeader = React.createClass({
      contextTypes: {
        router: React.PropTypes.object.isRequired
      },
      getInitialState: function(){
        return ( {content: "home"});
      },
      generateHomeButton: function() {
        var button;
        if (this.state.content == "home"){
          button =  <li onClick={this.homeClick}><a className="nav-selected" href="#">Home</a></li>;
        } else {
          button =  <li onClick={this.homeClick}><a href="#">Home</a></li>;
        }
        return button;
      },
      generateCollectionsButton: function(){
        var button;
        if (this.state.content == "collections"){
          button = <li className="nav-selected" onClick={this.collectionsClick}><a href="#">Collections</a></li>;
        } else {
          button = <li onClick={this.collectionsClick}><a href="#">Collections</a></li>;
        }
        return button;
      },
      collectionsClick: function() {
        this.setState({content: "collections"});
        // this.context.router.push();
      },
      homeClick: function() {
        this.setState({content: "home"});
        this.context.router.push("/stream/");
      },
      clickHandler: function(){
        ApiUtil.logout();
        this.context.router.push("/");
      },
      render: function () {
        var url = "#/users/" + SessionStore.currentUser().id;
        return (
          <div>
            <header className="signedin-header group">
              <nav className="group">
                <a href="#/"className="signedin_badge">
                  <img src="cloud-icon.png"/>
                </a>
                <ul className="home-nav">
                  {this.generateCollectionsButton()}
                  {this.generateHomeButton()}
                </ul>
                <ul className="signedin-nav">
                  <li className="searchdiv">
                    <input type="text" placeholder="Search" className="searchbar">
                    </input>
                    <img src="search-icon.png"/>
                  </li>
                  <li className="upload"><a href="#/recordings/new">Upload</a></li>
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
