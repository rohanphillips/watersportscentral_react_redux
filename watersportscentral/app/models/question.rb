class Question < ApplicationRecord
  has_many :events_questions
  has_many :events, through: :events_questions

  has_many :locations_questions
  has_many :locations, through: :locations_questions

  validates :question_text,  :presence => true
end