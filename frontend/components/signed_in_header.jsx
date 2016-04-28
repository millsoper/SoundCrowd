var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    SearchResultStore = require('../stores/search_result_store'),
    UserStore = require('../stores/user_store'),
    SearchResults = require('./search_results'),
    ApiUtil = require('../util/api_util.js');

    var SignedInHeader = React.createClass({
      contextTypes: {
        router: React.PropTypes.object.isRequired
      },
      getInitialState: function(){
        return ( {content: "stream", currentSearch: ""});
      },
      componentDidMount: function() {
        this.resultListener = SearchResultStore.addListener(this.handleResultChange);
        this.userListener = UserStore.addListener(this.handleUserChange);
        document.addEventListener("click", this.exitSearch);
      },
      exitSearch: function () {
        this.setState({ currentSearch: "" });
        this.setState({results: null});
      },
      handleResultChange: function () {
        this.setState({ results: SearchResultStore.all()})
      },
      handleUserChange: function () {
        var current_user = SessionStore.currentUser().id;
        var user = UserStore.find(current_user);
        this.setState({currentUser: user});
      },
      componentWillUnmount: function() {
        this.resultListener.remove();
        this.userListener.remove();
        document.removeEventListener("click", this.exitSearch);
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
      search: function () {
        ApiUtil.search(this.state.currentSearch);
      },
      clickHandler: function(){
        ApiUtil.logout();
        this.context.router.push("/");
      },
      handleInputChange: function(e){
        var that = this;
        var currentSearch = e.currentTarget.value;
        this.setState({ currentSearch: currentSearch }, function () {
          if (currentSearch.length > 1) {
            that.search();
          }
        });
      },
      render: function () {
        var username;
        var image;
        var searchResults;

        if (this.state.results) {
          searchResults = this.state.results
        }
        if (this.state.currentUser){
          image = this.state.currentUser.image;
        }
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
                    <input
                      type="text"
                      placeholder="Search tracks"
                      value={this.state.currentSearch}
                      onChange={ this.handleInputChange }
                      className="searchbar">
                    </input>
                    <SearchResults results={searchResults}/>
                    <img src="search-icon.png"/>
                  </li>
                  <li className="upload"><a href="#new">Upload</a></li>
                  <a href={url} className="nav-profile-pic circle"><img src={image}></img></a>
                    <li className="username"><a href= {url} className="nav-username">{this.props.user.username}</a></li>
                    <li><button onClick={this.clickHandler}>Logout</button></li>
                </ul>
              </nav>
            </header>

          </div>);
      }
    });

    module.exports = SignedInHeader;
