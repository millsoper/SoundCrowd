var React = require('react'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var RecordingForm = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      title: "",
      body: "",
      user_id:"",
      username:"",
      url: ""
    };
  },
  handleSubmit: function(event){
    event.preventDefault();
    var recording = Object.assign({}, this.state);
    ApiUtil.createRecording(recording);
    this.navigateToHome();
  },
  navigateToHome: function(){
    this.props.history.pushState(null, "/");
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToHome();
  },

  render: function(){
    return (
        <div className="new-recording-form group">
          <h3>Add a Recording</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="upload-track-pic"><p>Upload A Picture</p></div>
            <label>Title</label>
              <input type="text" valueLink={this.linkState('title')}/>
            <br/>
            <label>Image Url</label>
              <input min='0' type="text" valueLink={this.linkState('url')}/>
            <br/>
            <label>Body</label>
              <input min='0' type="text" valueLink={this.linkState('body')}/>
            <br/>
            <label>UserID</label>
              <input min='0' type="text" valueLink={this.linkState('user_id')}/>
            <br/>
            <label>Username</label>
              <input min='0' type="text" valueLink={this.linkState('username')}/>
            <br/>
            <ul>
              <li><input type="submit" value="create recording"/></li>
              <li><button onClick={this.handleCancel}>Cancel</button></li>
            </ul>
          </form>

        </div>
    );
  }
});

module.exports = RecordingForm;
