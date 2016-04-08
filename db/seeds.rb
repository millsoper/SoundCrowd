# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  owen = User.create(username: 'Uncle Owen', password: 'password', image: File.open('app/assets/images/uncle_owen.jpg'))
  beru = User.create(username: 'Aunt Beru', password: 'password', image: File.open('app/assets/images/aunt_beru.jpg'))
  dak = User.create(username: 'Dak', password: 'password', image: File.open('app/assets/images/dak_ralter.jpg'))
  greedo = User.create(username: 'Greedo', password: 'password', image: File.open('app/assets/images/greedo.jpg'))
  guest = User.create(username: 'guest', password: 'password', image: File.open('app/assets/images/kylo_ren.jpg'))

  Follow.create(follower_id: owen.id, followed_id: greedo.id)
  Follow.create(follower_id: owen.id, followed_id: beru.id)
  Follow.create(follower_id: owen.id, followed_id: dak.id)
  Follow.create(follower_id: dak.id, followed_id: beru.id)
  Follow.create(follower_id: beru.id, followed_id: owen.id)
  Follow.create(follower_id: beru.id, followed_id: dak.id)
  Follow.create(follower_id: beru.id, followed_id: guest.id)
  Follow.create(follower_id: dak.id, followed_id: greedo.id)
  Follow.create(follower_id: guest.id, followed_id: greedo.id)
  Follow.create(follower_id: owen.id, followed_id: guest.id)

tech =  Recording.create(title:"Don't Get Technical", body: "C3P0 tells off R2D2 for talking jargon.", username: owen.username, user_id: owen.id, image: File.open('app/assets/images/boba-fett.jpg'), audio: File.open('app/assets/c3po_technical.wav'))
junk =  Recording.create(title:"A Piece of Junk", body: "What a piece of junk!", username: owen.username, user_id: owen.id, image: File.open('app/assets/images/wookie.jpg'), audio: File.open('app/assets/luke_junk.wav'))
warble =  Recording.create(title:"Wrrrrh", body: "Chewbacca speaks his mind", username: owen.username, user_id: owen.id, image: File.open('app/assets/images/piett.jpg'), audio: File.open('app/assets/chewbacca_01.wav'))
laugh =  Recording.create(title:"Booming Laughter", body: "Jidee Jedi: Jabba laughs in the face of danger", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/at-at.jpg'), audio: File.open('app/assets/jabba_laugh.wav'))
  Recording.create(title:"Failure", body: "You're in command now....Admiral Piett.", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/tie.png'), audio: File.open('app/assets/darthvader_failedme.wav'))
  Recording.create(title:"Obi Wan", body: "Obi Wan taught you well", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/storm.jpg'), audio: File.open('app/assets/darthvader_taughtyouwell.wav'))
chosen =  Recording.create(title:"Take On The Whole Empire", body: "You were meant to be the Chosen One!", username: dak.username, user_id: dak.id, image: File.open('app/assets/images/endor.jpg'), audio: File.open('app/assets/obiwan_chosenone.wav'))
nerf =  Recording.create(title:"Nerfherder", body: "Scruffy looking nerfherder", username: dak.username, user_id: dak.id, image: File.open('app/assets/images/leia.jpg'), audio: File.open('app/assets/nerfherder.wav'))
proud =  Recording.create(title:"Don't Be Too Proud", body: "Don't be too proud of this technological terror you've constructed.", username: greedo.username, user_id: greedo.id, image: File.open('app/assets/images/snow.jpg'), audio: File.open('app/assets/darthvader_technological.wav'))
  Recording.create(title:"Warble", body: "Chewbacca expounds on the beauties of space", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/missing.png'), audio: File.open('app/assets/Chewie-chatting.wav'))


Comment.create(user_id: beru.id, track_id: proud.id, text: "So rude.")
Comment.create(user_id: dak.id, track_id: proud.id, text: "I know, right?")
Comment.create(user_id: owen.id, track_id: proud.id, text: "Have you seen Luke?")
Comment.create(user_id: dak.id, track_id: proud.id, text: "Check the Tosche Station, lol")

Comment.create(user_id: beru.id, track_id: laugh.id, text: "Creepy as hell.")
Comment.create(user_id: dak.id, track_id: laugh.id, text: "So glad I didn't survive until this movie")

Comment.create(user_id: greedo.id, track_id: warble.id, text: "Do you have a longer version of this?")

Comment.create(user_id: owen.id, track_id: junk.id, text: "I'm so done with this kid.")
