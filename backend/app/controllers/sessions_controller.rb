class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authorized, only: [:auto_login]
  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])  
    if @user && @user.authenticate(params[:user][:password])
      token = encode_token(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, time: time }, status: :ok
    else
      render json: {:error => @user.errors.messages}
    end 
  end

  def fb_create
    
    @user = User.find_or_create_by(username: auth['uid']) do |u|
      u.first_name = auth['info']['name']
      u.email = auth['info']['email']
      u.password = (0...20).map { ('a'..'z').to_a[rand(26)] }.join

      # u.image = auth['info']['image']
    end
   
    session[:user_id] = @user.id
    redirect_to '/welcome'
  end

  def page_requires_login
  end

  def destroy
    session.delete :user_id
    redirect_to '/'
  end

  private

  def auth
    request.env['omniauth.auth']
  end
  
end