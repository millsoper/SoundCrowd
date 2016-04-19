class Api::SessionsController < ApplicationController

  def show
    if logged_in?
      render json: current_user
    else
      flash.now[:errors] = ["Please log in."]
    end
  end

  def create
    user = User.find_by_credentials(
      params[:name],
      params[:password]
    )
    if user && user.valid_password?(params[:password])
      log_in!(user)
      render json: user
    else
      flash.now[:errors] = ["Invalid credentials"]
    end
  end

  def destroy
    log_out!

    render json: {}
  end
end
