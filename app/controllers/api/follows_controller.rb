class Api::FollowsController < ApplicationController

  def show

  end

  def create
    @follow = Follow.create(follow_params)
    render json: @follow
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow
      @follow.destroy
    end
    render json: @follow
  end

  def index
    @follows = Follow.all
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
