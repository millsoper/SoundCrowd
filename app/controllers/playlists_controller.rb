class PlaylistsController < ApplicationController
  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      redirect_to playlists_url
    else
      flash.now[:errors] = @playlist.errors.full_messages
      render :new
    end
  end

  def show

  end

  def index
    
  end

  private
  def playlist_params
    params.require(:playlist).permit(:user_id, :title, :tracks)
  end
end
