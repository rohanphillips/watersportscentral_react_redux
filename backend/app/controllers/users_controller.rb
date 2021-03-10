class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authorized, only: [:auto_login]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)    
    if @user.save
      token = encode_token(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, time: time, user: @user }, status: :ok
    else
      render json: {:error => @user.errors.messages}
    end
  end

  def

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.valid?      
      if params[:commit] != "Edit"
        @user.update(user_params)        
        
        redirect_to user_url
      else
        redirect_to edit_user_url
      end
    else
      render :new
    end
  end

  def show    
    if logged_in_user then
      @user = User.find(params[:id])
      if params[:id] != current_user.id.to_s && is_admin == false
        redirect_to not_admin_user_url
      end
    end;
  end

  def index
    # byebug
    if logged_in_user.admin
      @users = User.all;
      # token = encode_token(user_id: logged_in_user.id)
      # time = Time.now + 24.hours.to_i
      render json: {users: @users }, status: :ok
    else
      render json: {:error => 'Not Authorized'}
    end
  end

  def destroy
    if logged_in_user.admin
      @user = User.find(params[:id]);
      @user.destroy
      render json: {}, status: :ok
    else
      render json: {:error => 'Not Authorized'}
    end
    
  end

  def active
    @users = User.all.active
  end

  def inactive
    @users = User.all.inactive
  end
 
  private
 
  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :password_confirmation, :active, :admin)
  end

  def not_admin_user_url
    '/users/' + current_user.id.to_s
  end
  
  def valid_commit
    params[:commit] != "Edit" || params[:commit]
  end

end
