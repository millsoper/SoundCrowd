# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  owen = User.create(username: 'Uncle Owen', password: 'password')
  beru = User.create(username: 'Aunt Beru', password: 'password')
  dak = User.create(username: 'Dak', password: 'password')
  greedo = User.create(username: 'Greedo', password: 'password')

  Recording.create(title:"Song 1" , body: "track description and transcript", url: "http://i.imgur.com/XHVbKxf.png" , username: owen.username, user_id: owen.id)
  Recording.create(title:"Song 2" , body: "track description and transcript", url: "http://imgur.com/WoSua78", username: owen.username, user_id: owen.id)
  Recording.create(title:"Song 3" , body: "track description and transcript", url: "http://imgur.com/kuQraDK", username: owen.username, user_id: owen.id)
  Recording.create(title:"Song 4" , body: "track description and transcript", url: "http://i.imgur.com/QShglUL.png", username: beru.username, user_id: beru.id)
  Recording.create(title:"Song 5" , body: "track description and transcript", url: "http://i.imgur.com/j1DFGPA.jpg", username: beru.username, user_id: beru.id)
  Recording.create(title:"Song 6" , body: "track description and transcript", url: "http://i.imgur.com/BXGcsCI.jpg", username: beru.username, user_id: beru.id)
  Recording.create(title:"Song 7" , body: "track description and transcript", url: "http://i.imgur.com/oNfvT2U.jpg", username: dak.username, user_id: dak.id)
  Recording.create(title:"Song 8" , body: "track description and transcript", url: "http://i.imgur.com/lFAbHlC.jpg", username: dak.username, user_id: dak.id)
  Recording.create(title:"Song 9" , body: "track description and transcript", url: "http://i.imgur.com/zu1jkhi.jpg", username: greedo.username, user_id: greedo.id)
