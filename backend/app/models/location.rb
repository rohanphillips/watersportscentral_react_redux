class Location < ApplicationRecord
  belongs_to :user
  has_many :events
  has_many :users, through: :events

  has_many :locations_questions
  has_many :questions, through: :locations_questions

  has_many :locations_comments
  has_many :comments, through: :locations_comments

  validates :name,  :presence => true,
                :uniqueness => true
  validates :description,  :presence => true
end