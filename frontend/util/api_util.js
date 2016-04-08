var AppDispatcher = require('../dispatcher/dispatcher'),
    ApiActions = require('../actions/api_actions'),
    SessionActions = require('../actions/session_actions'),
    SessionStore = require('../stores/session_store');


var ApiUtil = {
  createFollow: function(userPair) {
    $.ajax({
      method: "POST",
      url: "api/follows",
      data: userPair,
      success: function(follow) {
        ApiActions.receiveSingleFollow(follow);
      }
    });
  },
  destroyFollow: function(id) {
    $.ajax({
      method: "DELETE",
      url: "api/follows/" + id,
      success: function(follow){
        ApiActions.receiveSingleFollow(follow);
      }
    });
  },

  fetchFollows: function(){
    $.get('api/follows', function(follows){
      ApiActions.receiveAllFollows(follows);
    });
  },
  fetchRecordings: function(){
    $.get('api/recordings', function(recordings){
      ApiActions.receiveAll(recordings);
    });
  },
  fetchRecording: function(id){
    $.ajax({
      method: "GET",
      url: "api/recordings/" + id,
      success: function(recording){
        ApiActions.receiveSingleRecording(recording);
      }
    });
  },
  deleteRecording: function (id) {
    $.ajax({
      method: "DELETE",
      url: "api/recordings/" + id,
      success: function(){
      }
    });
  },

  fetchUsers: function() {
    $.get('api/users', function(users){
      ApiActions.receiveAllUsers(users);
    });
  },
  updateUser: function(formData, id) {
    $.ajax({
      method: "PATCH",
      url: "api/users/" + id,
      processData: false,
      contentType: false,
      datatype: 'json',
      data: formData,
      success: function(user){
        ApiActions.receiveSingleUser(user);
      }
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
  deleteUser: function(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/users/" + id,
      success: function() {

      }
    });
  },
  getRecentRecordings: function() {
    $.get('api/recent', function(recordings){
      ApiActions.receiveRecent(recordings);
    });
  },
  createRecording: function(formData, callback){
    $.ajax({
      url: '/api/recordings',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(recording) {
        ApiActions.receiveSingleRecording(recording);
        callback && callback();
      }
    });
  },

  updateRecording: function(formData, id){
    $.ajax({
      method: "PATCH",
      url: "api/recordings/" + id,
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(recording){
        ApiActions.receiveSingleRecording(recording);
      }
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
