var AppDispatcher = require('../dispatcher/dispatcher'),
    ApiActions = require('../actions/api_actions'),
    SessionActions = require('../actions/session_actions'),
    SessionStore = require('../stores/session_store');


var ApiUtil = {
  fetchRecordings: function(){
    $.get('api/recordings', function(recordings){
      ApiActions.receiveAll(recordings);
    });
  },
  fetchUsers: function() {
    $.get('api/users', function(users){
      ApiActions.receiveAllUsers(users);
    });
  },
  fetchUser: function(id) {
    $.ajax({
      method: "GET",
      url: "api/users/" + id,
      success: function(user){
        ApiActions.receiveSingleUser(user);
      }
    });
  },
  getRecentRecordings: function() {
    $.get('api/recent', function(recordings){
      ApiActions.receiveRecent(recordings);
    });
  },
  createRecording: function(data){
    $.post('api/recordings', { recording: data }, function(recording) {
      ApiActions.receiveAll([recording]);
    });
  },
  login: function(credentials, callback){
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },
  logout: function() {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
      }
    });
  },
  createUser: function(credentials, callback){
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: {user: credentials},
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },
  fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  }
};

module.exports = ApiUtil;
