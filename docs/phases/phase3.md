# Phase 3: Genres and Tags (2 days)

## Rails
### Models
* Genre
* Tag
* Tagging

### Controllers
* Api::GenresController (create, destroy, index, show, update)

### Views
* genres/index.json.jbuilder
* genres/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* GenresIndex
  - GenresIndexItem
* GenreForm
* SearchIndex

### Stores
* Genre

### Actions
* ApiActions.receiveAllGenres -> triggered by ApiUtil
* ApiActions.receiveSingleGenre
* ApiActions.deleteGenre
* GenreActions.fetchAllGenres -> triggers ApiUtil
* GenreActions.fetchSingleGenre
* GenreActions.createGenre
* GenreActions.editGenre
* GenreActions.destroyGenre

### ApiUtil
* ApiUtil.fetchAllGenres
* ApiUtil.fetchSingleGenre
* ApiUtil.createGenre
* ApiUtil.editGenre
* ApiUtil.destroyGenre

## Gems/Libraries
