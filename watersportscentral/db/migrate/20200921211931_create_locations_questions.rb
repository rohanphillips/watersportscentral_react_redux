class CreateLocationsQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :locations_questions do |t|
      t.integer :location_id
      t.integer :question_id
    end
  end
end
