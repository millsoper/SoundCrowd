class Api::SessionsController < ApplicationController

  def show
    if logged_in?
      render json: current_user
    else
      render json: { message: "Not logged in" }, status: 401
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
      render json: { message: "Invalid credentials" }, status: 401
    end
  end

  def destroy
    log_out!

    render json: {}
  end
end
