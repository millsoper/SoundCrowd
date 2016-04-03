class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def show
    @user = User.includes(:recordings).find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save

      log_in!(@user)
      render json: @user
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: { message: "Invalid parameters" }, status: 401
    end
  end

  def index
    @users = User.all
  end

    private
    def user_params
      params.require(:user).permit(:password, :username)
    end
  end
