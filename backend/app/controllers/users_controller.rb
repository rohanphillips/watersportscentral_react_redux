class UsersController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_url(@user.id)
    else
      render :new
    end
  end

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
    @user = User.find(params[:id])
    if params[:id] != current_user.id.to_s && is_admin == false
      redirect_to not_admin_user_url
    end
  end

  def index
    if is_admin
      @users = User.all
    else
      redirect_to not_admin_user_url
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
