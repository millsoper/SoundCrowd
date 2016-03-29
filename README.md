# SoundCrowd

[Heroku link][heroku]

[heroku]: https://soundcrowd-.herokuapp.com/

## Minimum Viable Product

SoundCrowd is a web application for recording, searching and listening to oral history, inspired by Soundcloud and built using Ruby on Rails and React.js. SoundCrowd allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Upload and delete audio clips
- [ ] Listen to audio clips
- [ ] Tag one's own recordings
- [ ] Create playlists
- [ ] Search recordings by tags
- [ ] Annotate any recording with comments

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
- [ ] authentication
- [ ] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Recordings Model, API, and basic APIUtil (1.5 days)

**Objective:** Recordings can be created, listened to, tagged and destroyed through
the API.

- [ ] create `Recording` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`RecordingsController`)
- [ ] jBuilder views for recordings
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Recordings can be created, listened to, tagged and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each recording component, building out the flux loop as needed.
  - [ ] `RecordingsIndex`
  - [ ] `RecordingIndexItem`
  - [ ] `RecordingForm`
- [ ] save Recordings to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

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

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] Genre CRUD
  - [ ] adding Comment requires a Recording
  - [ ] deleting Comments
  - [ ] viewing Comments by User
  - [ ] viewing Comments by Recording
- Use CSS to style new views

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

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
