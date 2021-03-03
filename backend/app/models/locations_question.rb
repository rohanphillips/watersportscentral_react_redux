class LocationsQuestion < ApplicationRecord
  belongs_to :question
  belongs_to :location
end