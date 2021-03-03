module LocationsHelper
  def new_location_button_url
    params[:user_id] ? new_user_location_url : new_location_url
  end

  def show_location_button_url(event)
    case params.has_key?(:user_id)
      when true
        '/users/' + params[:user_id].to_s + '/locations/' + event.id.to_s
      when false
        '/locations/' + event.id.to_s
    end     
  end

  def edit_location_button_url(event)
    case params.has_key?(:user_id)
      when true
        '/users/' + params[:user_id].to_s + '/locations/' + event.id.to_s + '/edit'
      when false
        '/locations/' + event.id.to_s + '/edit'
    end     
  end
end