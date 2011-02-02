require 'notify_me'
require 'test/unit'
require 'rack/test'

set :environment, :production

class NotifyMeTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_root_path_renders_analytics
    set :analytics_id, 'UA-XXXXX-8'
    get '/'
    assert last_response.body.include?('UA-XXXXX-8')
  end
  
  def test_root_path_no_analytics
    set :analytics_id, 'UA-XXXXX-X'
    get '/'
    assert !last_response.body.include?('UA-XXXXX-X')
  end
end