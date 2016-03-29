# Phase 3: Playlists and Tags (2 days)

## Rails
### Models
* Genre
* Tag
* Tagging

### Controllers
* Api::PlaylistsController (create, destroy, index, show, update)

### Views
* playlists/index.json.jbuilder
* playlists/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* PlaylistsIndex
  - PlaylistsIndexItem
* PlaylistForm
* SearchIndex

### Stores
* Playlist

### Actions
* ApiActions.receiveAllPlaylists -> triggered by ApiUtil
* ApiActions.receiveSinglePlaylist
* ApiActions.deletePlaylist
* PlaylistActions.fetchAllPlaylists -> triggers ApiUtil
* PlaylistActions.fetchSinglePlaylist
* PlaylistActions.createPlaylist
* PlaylistActions.editPlaylist
* PlaylistActions.destroyPlaylist

### ApiUtil
* ApiUtil.fetchAllPlaylists
* ApiUtil.fetchSinglePlaylist
* ApiUtil.createPlaylist
* ApiUtil.editPlaylist
* ApiUtil.destroyPlaylist

## Gems/Libraries
