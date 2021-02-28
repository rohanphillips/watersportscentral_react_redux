class CreateEventsQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :events_questions do |t|
      t.integer :event_id
      t.integer :question_id
    end
  end
end
