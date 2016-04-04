var Store = require('flux/utils').Store,
    _recordings = {},
    _recent = {},
    RecordingConstants = require('../constants/recording_constants'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    RecordingStore = new Store(AppDispatcher);

var resetRecordings = function(recordings){
  _recordings = {};
  recordings.forEach(function (recording){
    _recordings[recording.id] = recording;
  });
};

var resetRecording = function(recording){
  _recordings[recording.id] = recording;
};

var resetRecent = function(recordings){
  _recent = {};
  recordings.forEach(function (recording){
    _recent[recording.id] = recording;
  });
};

RecordingStore.all = function () {
  var recordings = [];
  for (var id in _recordings) {
    recordings.push(_recordings[id]);
  }
  return recordings;
};

RecordingStore.recent = function () {
  var recent = [];
  for (var id in _recent) {
    recent.push(_recent[id]);
  }
  return recent;
};

RecordingStore.find = function (id) {
  return _recordings[id];
};

RecordingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RecordingConstants.RECORDINGS_RECEIVED:
      resetRecordings(payload.recordings);
      RecordingStore.__emitChange();
      break;
    case RecordingConstants.RECENT_RECEIVED:
      resetRecent(payload.recordings);
      RecordingStore.__emitChange();
      break;
    case RecordingConstants.RECORDING_RECEIVED:
      resetRecording(payload.recording);
      RecordingStore.__emitChange();
    case RecordingConstants.RECORDING_DELETED:
      removeRecording(payload.recording);
      RecordingStore.__emitChange();

  }
};

module.exports = RecordingStore;
