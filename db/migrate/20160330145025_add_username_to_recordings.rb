class AddUsernameToRecordings < ActiveRecord::Migration
  def change
    add_column :recordings, :username, :string
  end
end
