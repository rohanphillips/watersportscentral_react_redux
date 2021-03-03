class Sport < ApplicationRecord
  
  validates :name,  :presence => true, 
                        :uniqueness => true
  validates :description,  :presence => true
  
  belongs_to :user
  has_many :events
  has_many :users, through: :events
  
  scope :search, -> (search_text) {Sport.where("name LIKE ?", "%" + search_text + "%") }

end