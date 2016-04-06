var React = require('react'),
    UserStore = require('../stores/user_store'),
    ApiUtil = require('../util/api_util');

    var AuthorInfo = React.createClass({
      contextTypes: {
        router: React.PropTypes.object.isRequired
      },
      getInitialState: function(){
        var userId = this.props.authorid;
        var user = UserStore.find(userId) || {};
        return { author: user };
      },
      componentWillReceiveProps: function(newProps) {
        var user;
        if (newProps.authorid){
        ApiUtil.fetchUser(newProps.authorid);
        user = UserStore.find(newProps.authorid);
        }
        this.setState({author: user});
      },
      componentDidMount: function() {
        this.userListener = UserStore.addListener(this._onChange);
        ApiUtil.fetchUsers();
        // this.setState({ user: UserStore.find(this.props.authorid)});
      },
      componentWillUnmount: function() {
        this.userListener.remove();
      },
      _onChange: function () {
        author = UserStore.find(this.props.authorid);
        this.setState({ author: author});
      },
      handleClick: function (id) {
        this.context.router.push("/users/" + id);
      },
      render: function(){
        var image;
        var id;
        if (this.state.author){
          image = this.state.author.image;
          id = this.state.author.id;
        }
        return (
          <div>
            <a onClick={this.handleClick.bind(null, id)}>
              <div className="author-profile-pic">
              <img src={image}/>
              </div>
              <div className="author-name">{this.props.author}</div>
            </a>
          </div>
        );
      }
    });

    module.exports = AuthorInfo;
