class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in!(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def log_out!
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  private

  def ensure_logged_in
    unless logged_in?
      render text: "You must log in", status: 401
    end
  end

  def ensure_logged_out
    redirect_to recordings_url if logged_in?
  end
end
