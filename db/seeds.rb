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

  Recording.create(title:"The Tosche Station", body: "Ben Kenobi", username: owen.username, user_id: owen.id, image: File.open('app/assets/images/luke.jpg'), audio: File.open('app/assets/c3po_technical.wav'))
  Recording.create(title:"You Can Waste Time", body: "Power converters", username: owen.username, user_id: owen.id, image: File.open('app/assets/images/wookie.jpg'), audio: File.open('app/assets/luke_junk.wav'))
  Recording.create(title:"With Your Friends", body: "That's what I'm afraid of", username: owen.username, user_id: owen.id, image: File.open('app/assets/images/piett.jpg'), audio: File.open('app/assets/chewbacca_01.wav'))
  Recording.create(title:"Twin Suns", body: "Brooding", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/at-at.jpg'), audio: File.open('app/assets/jabba_laugh.wav'))
  Recording.create(title:"Krayt Dragon", body: "They will return, in greater numbers", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/tie.png'), audio: File.open('app/assets/darthvader_failedme.wav'))
  Recording.create(title:"Sandcrawler", body: "Too accurate for storm troopers", username: beru.username, user_id: beru.id, image: File.open('app/assets/images/storm.jpg'), audio: File.open('app/assets/darthvader_taughtyouwell.wav'))
  Recording.create(title:"Take On The Whole Empire", body: "I know the feeling", username: dak.username, user_id: dak.id, image: File.open('app/assets/images/endor.jpg'), audio: File.open('app/assets/jabba_laugh.wav'))
  Recording.create(title:"Aaaakh", body: "You're in this alone, Luke", username: dak.username, user_id: dak.id, image: File.open('app/assets/images/leia.jpg'), audio: File.open('app/assets/chewbacca_01.wav'))
  Recording.create(title:"I Shot First", body: "Let's set the record straight", username: greedo.username, user_id: greedo.id, image: File.open('app/assets/images/snow.jpg'), audio: File.open('app/assets/darthvader_technological.wav'))
