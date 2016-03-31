
var ApiActions = require('../actions/api_actions');


var ApiUtil = {
  fetchRecordings: function(){
    $.get('api/recordings', function(recordings){
      ApiActions.receiveAll(recordings);
    });
  },
  fetchRecording: function(){

  },
  createRecording: function(data){
    $.post('api/recordings', { recording: data }, function(recording) {
      ApiActions.receiveAll([recording]);
    });
  }
};

module.exports = ApiUtil;
