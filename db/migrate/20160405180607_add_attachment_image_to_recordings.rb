class AddAttachmentImageToRecordings < ActiveRecord::Migration
  def self.up
    change_table :recordings do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :recordings, :image
  end
end
