class Recording < ActiveRecord::Base
  validates :user_id, :title, :body, :url, :username, presence: true
  validates :url, uniqueness: true

  def self.most_recent
    Recording.order(created_at: :desc)
  end


end
