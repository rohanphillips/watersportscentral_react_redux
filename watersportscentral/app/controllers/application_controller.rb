class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authorized
  helper_method :current_user
  helper_method :logged_in?

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?       
    !current_user.nil?
  end

  def authorized
    # redirect_to '/welcome' unless logged_in?
  end

  def owns_record(record)
    record.user_id == current_user.id
  end

  def is_admin
    current_user.admin
  end

end
