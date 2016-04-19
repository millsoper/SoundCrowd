var Store = require('flux/utils').Store,
    CommentConstants = require('../constants/comment_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

  var CommentStore = new Store(AppDispatcher);

  var _comments = {};

  var _tracks = {};

  var resetComments = function(comments) {
    _comments = {};
    _tracks = {};
    comments.forEach(function (comment) {
      _comments[comment.id] = comment;
      if (_tracks[comment.track_id]){
        _tracks[comment.track_id].push(comment);
      } else {
        _tracks[comment.track_id] = [comment];
      }
    });
  };


  var resetComment = function(comment) {
    _comments[comment.id] = comment;
    if (_tracks[comment.track_id]){
      _tracks[comment.track_id].push(comment);
    }else{
      _tracks[comment.track_id] = [comment];
    }
  };

  CommentStore.all = function() {
    var comments = [];
    for (var id in _comments) {
      comments.push(_comments[id]);
    }
    return comments;
  };

  CommentStore.findComment = function(id) {
    return  _comments[id];
  };

  CommentStore.findByTrack = function(trackId){
    return _tracks[trackId];
  }
  var deleteComment = function(comment){
    delete _comments[comment.id];
    delete _tracks[comment.track_id][comment];
  }

  CommentStore.__onDispatch = function (payload) {
    switch (payload.actionType) {
      case CommentConstants.COMMENTS_RECEIVED:
        resetComments(payload.comments);
        CommentStore.__emitChange();
        break;
      case CommentConstants.COMMENT_RECEIVED:
        resetComment(payload.comment);
        CommentStore.__emitChange();
        break;
      case CommentConstants.COMMENT_DELETED:
        deleteComment(payload.comment);
        CommentStore.__emitChange();
        break;
    }
  };

  module.exports = CommentStore;
