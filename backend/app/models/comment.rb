class Comment < ApplicationRecord
  has_many :events_comments
  has_many :events, through: :events_comments

  has_many :locations_comments
  has_many :locations, through: :locations_comments

  validates :comment_text,  :presence => true
end