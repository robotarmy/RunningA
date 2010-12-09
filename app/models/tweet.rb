class Tweet < ActiveRecord::Base
  validates_presence_of :json
  validates_uniqueness_of :json
end
