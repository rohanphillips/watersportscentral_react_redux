class LocationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authorized, only: [:auto_login] 

  def create    
    @location = Location.new(location_params)
    if @location.save
      @locations = Location.all
      render json: {location: @location, locations: @locations}, status: :ok
    else
      render json: {error: {message: "Location creation error", errors: @location.errors}}
    end
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    @location = Location.find(params[:id])
    if @location.valid?   
      if params[:commit] == "Create Comment"
        @comment = @location.comments.create(comment_params)
        redirect_to location_url
      elsif params[:commit] != "Edit"
        @location.update(location_params)
        redirect_to location_url
      else
        redirect_to edit_location_url
      end
    else
      render :new
    end
  end

  def show
    @location = Location.find(params[:id])
  end

  def index
    if logged_in_user
      @locations = Location.all
      render json: {locations: @locations}, status: :ok
    else
      render json: {error: {message: "Not logged in"}}
    end
  end
 
  private
 
  def location_params
    params.require(:location).permit(:name, :description, :location_info).merge(user_id: logged_in_user.id)
  end

  def comment_params
    params.require(:comment).permit(:content, :user_id, :comment_text)
  end
end