class AddAttachmentAudioToRecordings < ActiveRecord::Migration
  def self.up
    change_table :recordings do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :recordings, :audio
  end
end
