module SportsHelper
  def new_sport_button_url
    params[:user_id] ? new_user_sport_url : new_sport_url
  end

  def show_sport_button_url(event)
    case params.has_key?(:user_id)
      when true
        '/users/' + params[:user_id].to_s + '/sports/' + event.id.to_s 
      when false
        '/sports/' + event.id.to_s
    end     
  end

  def edit_sport_button_url(event)
    case params.has_key?(:user_id)
      when true
        '/users/' + params[:user_id].to_s + '/sports/' + event.id.to_s + '/edit'
      when false
        '/sports/' + event.id.to_s + '/edit'
    end     
  end
end
