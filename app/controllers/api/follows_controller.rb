class Api::FollowsController < ApplicationController

  def show

  end

  def create
    follow = Follow.create(follow_params)
  end

  def destroy
    follow = Follow.find(params[:id])
    follow.destroy
  end

  def follow_params
    params.require(:follows).permit(:follower_id, :followed_id)
  end
end
