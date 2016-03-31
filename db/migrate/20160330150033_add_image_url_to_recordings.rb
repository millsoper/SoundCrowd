class AddImageUrlToRecordings < ActiveRecord::Migration
  def change
    add_column :recordings, :image_url, :string
  end
end
