var AppDispatcher = require('../dispatcher/dispatcher');
var RecordingConstants = require('../constants/recording_constants');
var UserConstants = require('../constants/user_constants');

var ApiActions = {
  receiveAll: function(recordings){
    AppDispatcher.dispatch({
      actionType: RecordingConstants.RECORDINGS_RECEIVED,
      recordings: recordings
    });
  },
  receiveSingleRecording: function(recording){
    AppDispatcher.dispatch({
      actionType: RecordingConstants.RECORDING_RECEIVED,
      recording: recording
    });
  },
  receiveRecent: function(recordings){
    AppDispatcher.dispatch({
      actionType: RecordingConstants.RECENT_RECEIVED,
      recordings: recordings
    });
  },
  receiveAllUsers: function(users){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },
  receiveSingleUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};

module.exports = ApiActions;
