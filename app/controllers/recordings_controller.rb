class RecordingsController < ApplicationController
  def new
    @recording = Recording.new
  end

  def create
    @recording = Recording.new(recording_params)
    if @recording.save
      redirect_to recordings_url
    else
      flash.now[:errors] = @recording.errors.full_messages
      render :new
    end
  end

  def show
    @recording = Recording.find(params[:id])
  end

  def index
    @recordings = Recording.all
  end

  private
  def recording_params
    params.require(:recording).permit(:user_id, :username, :title, :body, :url)
  end
end
