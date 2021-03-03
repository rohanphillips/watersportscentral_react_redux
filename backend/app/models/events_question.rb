class EventsQuestion < ApplicationRecord
  belongs_to :question
  belongs_to :event
end