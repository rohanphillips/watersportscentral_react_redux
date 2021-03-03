module UsersHelper
  def is_admin
    current_user == nil ? false : current_user.admin
  end
end