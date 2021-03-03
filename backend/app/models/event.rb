class Event < ApplicationRecord
  belongs_to :user
  belongs_to :location
  belongs_to :sport

  has_many :events_questions
  has_many :questions, through: :events_questions

  has_many :events_comments
  has_many :comments, through: :events_comments

  validates :name,  :presence => true
  validates :description,  :presence => true
end