class Recording < ActiveRecord::Base
  validates :user_id, :title, :body, :image, :username, presence: true
  validates :url, uniqueness: true

  belongs_to :user

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.most_recent
    Recording.order(created_at: :desc)
  end


end
