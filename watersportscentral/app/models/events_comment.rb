class EventsComment < ApplicationRecord
  belongs_to :comment
  belongs_to :event
end