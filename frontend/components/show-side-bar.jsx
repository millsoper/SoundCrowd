var React = require('react');

    var SideBar = React.createClass({

      render: function(){
        var content = "loading tracks";
        if (this.props.otherRecordings){
          var user_id = this.props.author_id;
          content = this.props.otherRecordings.map(function(recording){
            if (recording.user_id == user_id){
                url = "#/recordings/" + recording.id;
                return (<li className="sidebar-list-item" key={recording.title}>
                          <div className="sidebar-pic"><img src={recording.image}/></div>
                          <a href={url}>
                            {recording.title} - <span className="sidebar-username">{recording.username}</span>
                          </a>
                        </li>);
              }
          });
        }
        return (
          <div className="side-bar">
            <ul>
            {content}
            </ul>
          </div>
        );
      }
    });

    module.exports = SideBar;
