# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  owen = User.create(username: 'Uncle Owen', password: 'password', image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/uncle_owen.jpg'))
  beru = User.create(username: 'Aunt Beru', password: 'password', image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/aunt_beru.jpg'))
  dak = User.create(username: 'Dak', password: 'password', image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/dak_ralter.jpg'))
  greedo = User.create(username: 'Greedo', password: 'password', image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/greedo.jpg'))
  guest = User.create(username: 'guest', password: 'password', image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/kylo_ren.jpg'))

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

  Recording.create(title:"The Tosche Station" , body: "Ben Kenobi", url: "1" , username: owen.username, user_id: owen.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/luke.jpg'))
  Recording.create(title:"You Can Waste Time" , body: "Power converters", url: "2", username: owen.username, user_id: owen.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/wookie.jpg'))
  Recording.create(title:"With Your Friends" , body: "That's what I'm afraid of", url: "3", username: owen.username, user_id: owen.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/piett.jpg'))
  Recording.create(title:"Twin Suns" , body: "Brooding", url: "", username: beru.username, user_id: beru.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/at-at.jpg'))
  Recording.create(title:"Krayt Dragon" , body: "They will return, in greater numbers", url: "4", username: beru.username, user_id: beru.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/tie.png'))
  Recording.create(title:"Sandcrawler" , body: "Too accurate for storm troopers", url: "5", username: beru.username, user_id: beru.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/storm.jpg'))
  Recording.create(title:"Take On The Whole Empire" , body: "I know the feeling", url: "6", username: dak.username, user_id: dak.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/endor.jpg'))
  Recording.create(title:"Aaaakh" , body: "You're in this alone, Luke", url: "7", username: dak.username, user_id: dak.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/leia.jpg'))
  Recording.create(title:"I Shot First" , body: "Let's set the record straight", url: "8", username: greedo.username, user_id: greedo.id, image: File.open('/Users/appacademy/Desktop/soundcrowd/app/assets/images/snow.jpg'))
