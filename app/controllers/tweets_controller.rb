class TweetsController < ApplicationController
  def create
    Tweet.create!(params[:tweet])
    head :ok
  end
end
