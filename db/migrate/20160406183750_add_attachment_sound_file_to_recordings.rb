class AddAttachmentSoundFileToRecordings < ActiveRecord::Migration
  def self.up
    change_table :recordings do |t|
      t.attachment :sound_file
    end
  end

  def self.down
    remove_attachment :recordings, :sound_file
  end
end
