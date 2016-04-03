json.extract! user, :id, :username

json.recordings do
  json.array!(user.recordings) do |recording|
    json.partial! 'api/recordings/recording', recording: recording
  end
end
