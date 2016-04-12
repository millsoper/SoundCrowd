# SoundCrowd

[Heroku link][heroku]

[heroku]: https://soundcrowd-.herokuapp.com/

## Minimum Viable Product

SoundCrowd is a web application for recording, searching and listening to oral history, inspired by Soundcloud and built using Ruby on Rails and React.js. SoundCrowd allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [X] Create an account
- [X] Log in / Log out
- [X] Upload audio clips
- [X] Delete audio clips
- [X] Listen to audio clips
- [ ] Tag one's own recordings
- [ ] Create playlists
- [ ] Search recordings by tags
- [X] Annotate any recording with comments
- [X] Follow other users

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Recordings Model, API, and basic APIUtil (1.5 days)

**Objective:** Recordings can be created, listened to, tagged and destroyed through
the API.

- [X] create `Recording` model
- [X] seed the database with a small amount of test data
- [X] CRUD API for recordings (`RecordingsController`)
- [X] jBuilder views for recordings
- [X] setup Webpack & Flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Recordings can be created, listened to, tagged and destroyed with the user interface.

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- implement each recording component, building out the flux loop as needed.
  - [X] `RecordingsIndex`
  - [X] `RecordingIndexItem`
  - [X] `RecordingForm`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [X] create a basic style guide
- [X] position elements on the page
- [X] add basic colors & styles

### Phase 5: Recording Playlists (1 day)

**Objective:** Recordings belong to Playlists and can be viewed by Playlist.

- [ ] create `Playlist` model
- build out API, Flux loop, and components for:
  - [ ] Playlist CRUD
  - [ ] adding Recording requires either a notebook or a User
  - [ ] moving recordings to a different Playlist
  - [ ] viewing recordings by Playlist
- Use CSS to style new views

Phase 3 adds organization to the Recordings. Recordings belong to a Playlist,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Recordings can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for Recordings
  - [ ] adding tags to Recordings
  - [ ] creating tags while adding Recordings
  - [ ] searching Recording by tag
- [ ] Style new elements

### Phase 7: Recording Comments (1 day)

**Objective:** Comments belong to Recordings and Users, and can be viewed by Recording or User.

- [X] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] Genre CRUD
  - [X] adding Comment requires a Recording
  - [ ] deleting Comments
  - [X] viewing Comments by Recording
- Use CSS to style new views

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [X] Get feedback on my UI from others
- [X] Refactor HTML classes & CSS rules
- [X] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Follow streams of favorite users or tags
- [ ] Pagination / infinite scroll for Recordings Index/Stream
- [ ] Make Comments at specific junctures in Recordings
- [ ] Make Comments searchable by blocks of text
- [ ] Exchange messages with other users
- [ ] Record messages on site

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
