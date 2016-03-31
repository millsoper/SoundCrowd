var AppDispatcher = require('../dispatcher/dispatcher');
var RecordingConstants = require('../constants/recording_constants');

var ApiActions = {
  receiveAll: function(recordings){
    AppDispatcher.dispatch({
      actionType: RecordingConstants.RECORDINGS_RECEIVED,
      recordings: recordings
    });
  }
}

module.exports = ApiActions;
