class RemoveColumnsOnRecording < ActiveRecord::Migration
  def change
    remove_column  :recordings, :url
    remove_column  :recordings, :sound_file_file_name
    remove_column  :recordings, :sound_file_content_type
    remove_column  :recordings, :sound_file_file_size
    remove_column  :recordings, :sound_file_updated_at
  end
end
