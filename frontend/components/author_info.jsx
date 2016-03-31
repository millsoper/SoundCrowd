var React = require('react');

    var AuthorInfo = React.createClass({
      render: function(){
        return (
          <div>
            <div className="author-profile-pic">
            <p>profile pic</p>
            </div>
            <div className="author-name">{this.props.author}</div>
          </div>
        );
      }
    });

    module.exports = AuthorInfo;
