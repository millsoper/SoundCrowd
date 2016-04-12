var Store = require('flux/utils').Store,
    FollowConstants = require('../constants/follow_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

  var FollowStore = new Store(AppDispatcher);

  var _follows = {};

  var resetFollows = function(follows) {
    _follows = {};
    follows.forEach(function (follow) {
      var key = follow.follower_id + '' + follow.followed_id;
      _follows[key] = follow;
    });
  };

  var resetFollow = function(follow) {
    var key = follow.follower_id + '' + follow.followed_id;
    _follows[key] = follow;
  };

  FollowStore.all = function() {
    var follows = [];
    for (var key in _follows) {
      follows.push(_follows[key]);
    }
    return follows;
  };

  FollowStore.find = function(userPair) {
    var key = userPair[0] + '' + userPair[1];
    return  _follows[key];
  };

  FollowStore.__onDispatch = function (payload) {
    switch (payload.actionType) {
      case FollowConstants.FOLLOWS_RECEIVED:
        resetFollows(payload.follows);
        FollowStore.__emitChange();
        break;
      case FollowConstants.FOLLOW_RECEIVED:
        resetFollow(payload.follow);
        FollowStore.__emitChange();
        break;
    }
  };

  module.exports = FollowStore;
