class SportsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def new
    @sport = Sport.new
  end

  def create
    @sport = Sport.new(sport_params)
    if @sport.save
      redirect_to sport_url(@sport)
    else
      render :new
    end
  end

  def edit
    @sport = Sport.find(params[:id])
    if !owns_record(@sport)
      redirect_to sports_url
    end
  end

  def update
    @sport = Sport.find(params[:id])
    if @sport.valid? && current_user && owns_record(@sport)
      if params[:commit] != "Edit"
        @sport.update(sport_params)
        redirect_to sport_url
      else
        redirect_to edit_sport_url
      end
    else
      render :new
    end
  end

  def show
    @sport = Sport.find(params[:id])
  end

  def index
    if params[:user_id]
      @sports = User.find(params[:user_id]).sports
    else
      @sports = Sport.all
    end
  end
 
  private
 
  def sport_params
    params.require(:sport).permit(:name, :description).merge(user_id: session[:user_id])
  end


end