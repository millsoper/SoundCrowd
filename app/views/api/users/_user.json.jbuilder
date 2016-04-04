json.extract! user, :id, :username, :image_url, :created_at

json.recordings do
  json.array!(user.recordings) do |recording|
    json.partial! 'api/recordings/recording', recording: recording
  end
end
