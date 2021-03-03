module EventsHelper

  def sport_id_field(event)
    if event.sport.nil?
      select_tag "event[sport_id]", options_from_collection_for_select(Sport.all, :id, :name)
    else
      # hidden_field_tag "event[sport_id]", event.sport_id
      select_tag "event[sport_id]", options_from_collection_for_select(Sport.all, :id, :name, event.sport.id)
    end
  end

  def location_id_field(event)
    if event.location.nil?
      select_tag "event[location_id]", options_from_collection_for_select(Location.all, :id, :name)
    else
      # hidden_field_tag "event[sport_id]", event.sport_id
      select_tag "event[location_id]", options_from_collection_for_select(Location.all, :id, :name, event.location.id)
    end
  end

  def new_event_button_url
    params[:user_id] ? new_user_event_url : new_event_url
  end

  def show_event_button_url(event)
    case params.has_key?(:user_id)
      when true
        '/users/' + params[:user_id].to_s + '/events/' + event.id.to_s 
      when false
        '/events/' + event.id.to_s
    end     
  end

  def edit_event_button_url(event)
    case params.has_key?(:user_id)
      when true
        '/users/' + params[:user_id].to_s + '/events/' + event.id.to_s + '/edit'
      when false
        '/events/' + event.id.to_s + '/edit'
    end     
  end

end