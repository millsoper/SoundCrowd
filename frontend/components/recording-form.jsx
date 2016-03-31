var React = require('react'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var RecordingForm = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function(){
    return {
      title: "",
      description: "",

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
        <div>
          <h3>Add a Recording</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" valueLink={this.linkState('title')}/>
            <br/>
            <label>Image Url</label>
            <input min='0' type="text" valueLink={this.linkState('image_url')}/>
            <br/>
            <label>Body</label>
            <input min='0' type="text" valueLink={this.linkState('body')}/>
            <br/>
            <label>Longitude</label>
            <input type="text" disabled="true"/>
            <br/>
            <input type="submit" value="create recording"/>
          </form>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
    );
  }
});

module.exports = RecordingForm;
