class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
    end
    render json: @comment
  end

  def index
    @comments = Comment.all
  end

  def comment_params
    params.require(:comment).permit(:user_id, :track_id, :text)
  end
end
