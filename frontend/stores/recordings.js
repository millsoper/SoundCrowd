var Store = require('flux/utils').Store,
    _recordings = [],
    _recent = [],
    RecordingConstants = require('../constants/recording_constants'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    RecordingStore = new Store(AppDispatcher);

var resetRecordings = function(recordings){
  _recordings = recordings.slice(0);
};

var resetRecent = function(recordings){
  _recent = recordings.slice(0);
};

RecordingStore.all = function () {
  return _recordings.slice(0);
};

RecordingStore.recent = function () {
  return _recent.slice(0);
};

RecordingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RecordingConstants.RECORDINGS_RECEIVED:
      var result = resetRecordings(payload.recordings);
      RecordingStore.__emitChange();
      break;
    case RecordingConstants.RECENT_RECEIVED:
      var return_result = resetRecent(payload.recordings);
      RecordingStore.__emitChange();
      break;
  }
};

module.exports = RecordingStore;
