class User < ApplicationRecord  
  has_many :events
  has_many :locations, through: :events
  has_many :sports, through: :events
  has_many :sports
  has_many :locations
  
  validates :username,  :presence => true, 
                        :uniqueness => true
  validates :first_name, :presence => true
  validates :email, :presence => true, 
                    :uniqueness => true, 
                    email: true
  
  has_secure_password 
  validates :password, presence: {on: :create}, confirmation: {case_sensitive: true}, length: {minimum: 4}, allow_blank: true, allow_nil: true

  scope :active, -> { where(active: true) }
  scope :inactive, -> { where(active: false) }
end