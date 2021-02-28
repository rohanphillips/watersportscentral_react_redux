class CreateLocationsComments < ActiveRecord::Migration[6.0]
  def change
    create_table :locations_comments do |t|
      t.integer :location_id
      t.integer :comment_id
    end
  end
end
