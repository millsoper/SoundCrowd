var Store = require('flux/utils').Store;
var _recordings = [];
var RecordingConstants = require('../constants/recording_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var RecordingStore = new Store(AppDispatcher);

var resetRecordings = function(recordings){
  _recordings = recordings.slice(0);
};

RecordingStore.all = function () {
  return _recordings.slice(0);
};

RecordingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RecordingConstants.RECORDINGS_RECEIVED:
      var result = resetRecordings(payload.recordings);
      RecordingStore.__emitChange();
      break;
  }
};

module.exports = RecordingStore;
