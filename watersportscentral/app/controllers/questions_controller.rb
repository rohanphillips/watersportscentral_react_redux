class QuestionsController < ApplicationController
  def create
    case question_params[:from_controller]
      when "locations"
        @question = Location.find(question_params[:record_id]).questions.create(user_id: question_params[:user_id], question_text: question_params[:question_text])
        redirect_to location_url(@question.locations.first.id)
      when "events"
        @question = Event.find(question_params[:record_id]).questions.create(user_id: question_params[:user_id], question_text: question_params[:question_text])
        redirect_to event_url(@question.events.first.id)
    end
  end

private

  def question_params
    params.require(:question).permit(:record_id, :event_id, :user_id, :question_text, :from_controller)
  end
end