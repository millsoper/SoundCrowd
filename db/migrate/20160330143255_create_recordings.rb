class CreateRecordings < ActiveRecord::Migration
  def change
    create_table :recordings do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.string :url, null: false

      t.timestamps
    end

    add_index :recordings, :user_id
  end
end
