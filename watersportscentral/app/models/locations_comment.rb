class LocationsComment < ApplicationRecord
  belongs_to :comment
  belongs_to :location
end