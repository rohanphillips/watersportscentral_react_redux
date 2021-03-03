class CreateLocation < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.integer :user_id
      t.string :name
      t.string :description
      t.string :location_info

      t.timestamps
    end
  end
end
