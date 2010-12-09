class Tweet < ActiveRecord::Base
  validates_presence_of :json
end
