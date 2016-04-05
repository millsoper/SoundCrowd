json.extract! user, :id, :username, :created_at, :image

json.recordings do
  json.array!(user.recordings) do |recording|
    json.partial! 'api/recordings/recording', recording: recording
  end
end

json.followed_users do
  json.array!(user.followed_users) do |followed|
    json.extract! followed, :id, :username, :created_at
  end
end
