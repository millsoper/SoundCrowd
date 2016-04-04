# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  owen = User.create(username: 'Uncle Owen', password: 'password', image_url: 'http://vignette1.wikia.nocookie.net/starwars/images/9/91/OwenLarsHS-SWE.jpg/revision/latest?cb=20120428164235')
  beru = User.create(username: 'Aunt Beru', password: 'password', image_url: 'http://vignette2.wikia.nocookie.net/starwars/images/7/76/Beru_headshot2.jpg/revision/latest?cb=20111029215429' )
  dak = User.create(username: 'Dak', password: 'password', image_url: 'http://vignette3.wikia.nocookie.net/starwars/images/8/82/Dackralter.jpg/revision/latest?cb=20051028005822')
  greedo = User.create(username: 'Greedo', password: 'password', image_url: 'http://vignette4.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg/revision/latest?cb=20111104205225')
  guest = User.create(username: 'guest', password: 'password', image_url: 'http://vignette4.wikia.nocookie.net/starwars/images/a/ad/Stormtrooper-CotF.jpg/revision/latest?cb=20141218150219')


  Recording.create(title:"The Tosche Station" , body: "Ben Kenobi", url: "http://i.imgur.com/XHVbKxf.png" , username: owen.username, user_id: owen.id)
  Recording.create(title:"You Can Waste Time" , body: "Power converters", url: "http://i.imgur.com/WoSua78.png", username: owen.username, user_id: owen.id)
  Recording.create(title:"With Your Friends" , body: "That's what I'm afraid of", url: "http://i.imgur.com/kuQraDK.png", username: owen.username, user_id: owen.id)
  Recording.create(title:"Twin Suns" , body: "Brooding", url: "http://i.imgur.com/QShglUL.png", username: beru.username, user_id: beru.id)
  Recording.create(title:"Krayt Dragon" , body: "They will return, in greater numbers", url: "http://i.imgur.com/j1DFGPA.jpg", username: beru.username, user_id: beru.id)
  Recording.create(title:"Sandcrawler" , body: "Too accurate for storm troopers", url: "http://i.imgur.com/BXGcsCI.jpg", username: beru.username, user_id: beru.id)
  Recording.create(title:"Take On The Whole Empire" , body: "I know the feeling", url: "http://i.imgur.com/oNfvT2U.jpg", username: dak.username, user_id: dak.id)
  Recording.create(title:"Aaaakh" , body: "You're in this alone, Luke", url: "http://i.imgur.com/lFAbHlC.jpg", username: dak.username, user_id: dak.id)
  Recording.create(title:"I Shot First" , body: "Let's set the record straight", url: "http://i.imgur.com/zu1jkhi.jpg", username: greedo.username, user_id: greedo.id)
