var React = require('react'),
    UserStore = require('../stores/user_store'),
    ApiUtil = require('../util/api_util');

    var AuthorInfo = React.createClass({
      getInitialState: function(){
        var userId = this.props.authorid;
        var user = UserStore.find(userId) || {};
        return { author: user };
      },
      componentWillReceiveProps: function(newProps) {
        ApiUtil.fetchUser(newProps.authorid);
        user = UserStore.find(newProps.authorid);
        this.setState({author: user});
      },
      componentDidMount: function() {
        this.userListener = UserStore.addListener(this._onChange);
        ApiUtil.fetchUsers();
        this.setState({ user: UserStore.find(this.props.authorid)});
      },
      componentWillUnmount: function() {
        this.userListener.remove();
      },
      _onChange: function () {
        author = UserStore.find(this.props.authorid);
        this.setState({ author: author});
      },
      render: function(){
        var url;
        if (this.state.author.image_url){
          url = this.state.author.image_url;
        }
        return (
          <div>
            <div className="author-profile-pic">
            <img src={url}/>
            </div>
            <div className="author-name">{this.props.author}</div>
          </div>
        );
      }
    });

    module.exports = AuthorInfo;
