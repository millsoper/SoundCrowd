class AddIndexToUsers < ActiveRecord::Migration
  def change
    add_index :users, :session_token
    add_index :users, :username
  end
end
