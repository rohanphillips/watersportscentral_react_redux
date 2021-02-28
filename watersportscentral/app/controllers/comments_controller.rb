class CommentsController < ApplicationController
  def create
    case comment_params[:from_controller]
      when "locations"
        @comment = Location.find(comment_params[:record_id]).comments.create(user_id: comment_params[:user_id], comment_text: comment_params[:comment_text])
        redirect_to location_url(@comment.locations.first.id)
      when "events"
        @comment = Event.find(comment_params[:record_id]).comments.create(user_id: comment_params[:user_id], comment_text: comment_params[:comment_text])
        redirect_to event_url(@comment.events.first.id)
    end
  end

private

  def comment_params
    params.require(:comment).permit(:record_id, :event_id, :user_id, :comment_text, :from_controller)
  end
end