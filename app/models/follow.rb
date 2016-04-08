class Follow < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true

  belongs_to(
    :followers,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :follower_id
  )

  belongs_to(
    :followed,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :followed_id
  )

  def find_by_pair(follower_id, followed_id)
    Follow.find_by(follower_id: follower_id, followed_id: followed_id)
  end


end
