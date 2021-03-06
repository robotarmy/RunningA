require File.expand_path('../boot', __FILE__)
require 'rails/all'

Bundler.require(:default, Rails.env) if defined?(Bundler)

module RunningA
  class Application < Rails::Application
    config.encoding = "utf-8"
    config.filter_parameters += [:password]

    config.generators do |g|
      g.template_engine :haml # haml-rails
    end
  end
end
