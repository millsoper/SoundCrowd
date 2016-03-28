# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Recordings

- `GET /api/recordings`
  - Recordings index/search
  - accepts `tag_name` query param to list Recordings by tag
- `POST /api/recordings`
- `GET /api/recordings/:id`
- `PATCH /api/recordings/:id`
- `DELETE /api/recordings/:id`

### Genres

- `GET /api/genres`
- `POST /api/genres`
- `GET /api/genres/:id`
- `PATCH /api/genres/:id`
- `DELETE /api/genres/:id`
- `GET /api/genres/:id/notes`
  - index of all recordings for a genre

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`
- `GET /api/users/:id/comments`
  - index of all comments for a user
- 'GET /api/recordings/:id/comments'
  - index of all comments for a recording

### Tags

- A recording's tags will be included in the recording show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/recordings/:recording_id/tags`: add tag to recording by name
  - if recording doesn't already exist, it will be created
- `DELETE /api/recordings/:recording_id/tags/:tag_name`: remove tag from recording by name
