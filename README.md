# SoundCrowd

Do you love sound effects? Do you want to compare your TIE fighter scream to those of your friends?

SoundCrowd is a web application for recording, searching and listening to sound effects, inspired by Soundcloud and built using Ruby on Rails and React.js.

[Heroku link][heroku]

[heroku]: www.sound-crowd.top

SoundCrowd allows users to:

- Create an account
- Log in / Log out
- Upload audio clips
- Delete audio clips
- Listen to audio clips
- Annotate any recording with comments
- Follow other users

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

### Welcome View
![welcome]

### Landing Page
![landingPage]

###Technical Details
COMING SOON

###Future Features
* Can sign up using either Facebook or Twitter account
* Allows user to navigate through database of recordings
* Allows user to navigate through database of other users
* Dynamically updates "stream" to show recent activity of followed users
* Allow users to "like" recordings and keeps track of how many likes each recording has

###To-Do:
* [ ] Update AWS/Paperclip code to reflect recent changes
* [ ] Implement search
* [ ] Fix the comment delete render (before refresh)
* [ ] Fix the follow/unfollow render (before refresh)
* [ ] Create "like" table and store
* [ ] Make guest account and signin button
* [ ] Make stream dynamic
* [ ] Implement infinite scroll on stream

[welcome]: ./docs/images/welcome.png
[landingPage]: ./docs/images/landing.png
