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

### GenreStore

Holds all persisted genre data.

##### Actions:
- `receiveAllGenres`
- `receiveSingleGenre`
- `removeGenre`

##### Listeners:
- `GenreIndex`

### GenreFormStore

Holds un-persisted genre data to send to the API.

##### Actions:
- `receiveGenreFormParams`

##### Listeners:
- `GenreForm`

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
