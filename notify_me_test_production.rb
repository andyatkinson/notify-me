require 'bundler'
Bundler.require :default, :test

require 'minitest/autorun'
require 'rack/test'

require_relative './notify_me'

set :environment, :production

class NotifyMeTestProduction < MiniTest::Unit::TestCase
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_root_path_renders_analytics
    app.set :analytics_id, 'UA-XXXXX-8'
    get '/'
    assert last_response.body.include?('UA-XXXXX-8')
  end
  
  def test_root_path_no_analytics
    app.set :analytics_id, 'UA-XXXXX-X'
    get '/'
    assert !last_response.body.include?('UA-XXXXX-X')
  end
end
