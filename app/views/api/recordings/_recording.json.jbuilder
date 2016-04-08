json.extract! recording, :id, :user_id, :username, :title, :body, :image, :audio, :created_at

json.comments do
  json.array!(recording.comments) do |comment|
    json.extract! comment, :id, :user_id, :track_id, :text
  end
end
