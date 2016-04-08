class Comment < ActiveRecord::Base
  validates :user_id, :track_id, :text, presence: true

  belongs_to(
    :recording,
    class_name: 'Recording',
    primary_key: :id,
    foreign_key: :track_id
  )

  belongs_to(
    :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id
  )


end
