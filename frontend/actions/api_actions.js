var AppDispatcher = require('../dispatcher/dispatcher');
var RecordingConstants = require('../constants/recording_constants');
var UserConstants = require('../constants/user_constants');
var FollowConstants = require('../constants/follow_constants');
var CommentConstants = require('../constants/comment_constants');

var ApiActions = {
  receiveSingleFollow: function(follow){
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_RECEIVED,
      follow: follow
    });
  },
  receiveAllFollows: function(follows){
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOWS_RECEIVED,
      follows: follows
    });
  },
  receiveSingleComment: function(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    })
  },
  receiveComments: function(comments){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    })
  },
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
