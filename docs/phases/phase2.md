# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* RecordingsIndex
  - RecordingsIndexItem
* RecordingForm

### Stores
* Recording

### Actions
* ApiActions.receiveAllRecordings -> triggered by ApiUtil
* ApiActions.receiveSingleRecording
* ApiActions.deleteRecording
* RecordingActions.fetchAllRecordings -> triggers ApiUtil
* RecordingActions.fetchSingleRecording
* RecordingActions.createRecording
* RecordingActions.editRecording
* RecordingActions.destroyRecording

### ApiUtil
* ApiUtil.fetchAllRecordings
* ApiUtil.fetchSingleRecording
* ApiUtil.createRecording
* ApiUtil.editRecording
* ApiUtil.destroyRecording

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
