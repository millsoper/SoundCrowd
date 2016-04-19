class Recording < ActiveRecord::Base
  validates :user_id, :title, :body, :image, :username, :audio, presence: true
  include PgSearch
  multisearchable :against => [:username, :title, :body]

  has_many(
  :comments,
  class_name: 'Comment',
  primary_key: :id,
  foreign_key: :track_id
  )

  belongs_to :user

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  def self.most_recent
    Recording.order(created_at: :desc)
  end


end
