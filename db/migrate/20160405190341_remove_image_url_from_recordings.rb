class RemoveImageUrlFromRecordings < ActiveRecord::Migration
  def change
    remove_column :recordings, :image_url, :string
  end
end
