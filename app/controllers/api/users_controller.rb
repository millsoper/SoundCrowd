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
      session[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.all
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json:@user
  end

    private
    def user_params
      params.require(:user).permit(:password, :username, :image)
    end
  end
