json.search_results do
  json.array! @results.map(&:searchable) do |result|
    case result
    when User
      json.partial! "api/users/user", user: result
    when Recording
      json.partial! "api/recordings/recording", recording: result
    end
    json._type result.class.to_s
  end
end
