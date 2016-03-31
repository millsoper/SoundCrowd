class Recording < ActiveRecord::Base
  validates :user_id, :title, :body, :url, :username, presence: true
  validates :url, uniqueness: true

  
end
