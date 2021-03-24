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
    if logged_in_user then
      @location = Location.find(params[:id])
      if @location.valid?   
        if @location.update(location_params)
          @locations = Location.all
          render json: {location: @location, locations: @locations}, status: :ok
        else
          render json: {error: {message: "Location update error", errors: @location.errors}}
        end
      else
        render json: {error: {message: "Location not found"}}
      end
    end
  end

  def show
    @location = Location.find(params[:id])
  end

  def index
    @locations = Location.all
    render json: {locations: @locations}, status: :unprocessable_entity
  end

  def destroy
    if logged_in_user
      @location = Location.find(params[:id]);
      @location.destroy
      render json: {}, status: :ok
    else
      render json: {:error => 'Not Authorized'}
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