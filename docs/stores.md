# Flux Stores

### RecordingStore

Holds all persisted recording data.

##### Actions:
- `receiveAllRecordings`
- `receiveSingleRecording`
- `removeRecording`

##### Listeners:
- `RecordingsIndex` (passes to `RecordingIndexItem` via props)
- `RecordingDetail`

### RecordingFormStore

Holds un-persisted recording data to send to the API.

##### Actions:
- `receiveRecordingFormParams`

##### Listeners:
- `RecordingForm`

### PlaylistStore

Holds all persisted playlist data.

##### Actions:
- `receiveAllPlaylists`
- `receiveSinglePlaylist`
- `removePlaylist`

##### Listeners:
- `PlaylistIndex`

### PlaylistFormStore

Holds un-persisted playlist data to send to the API.

##### Actions:
- `receivePlaylistFormParams`

##### Listeners:
- `PlaylistForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
