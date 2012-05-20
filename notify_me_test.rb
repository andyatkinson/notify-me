require 'notify_me'
require 'test/unit'
require 'rack/test'

ENV['RACK_ENV'] = 'test'

class NotifyMeTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_root_path_renders_message_and_form
    get '/'
    assert last_response.body.include?('Acme Widget will be launching soon!')
    assert last_response.body.include?('form')
  end
  
  def test_subscribe_path_without_email_renders_error
    post '/subscribe'
    assert !last_response.ok?
    assert last_response.body.include?('Email is required to subscribe!')
  end
  
  def test_subscribe_path_with_email_renders_success_message
    post '/subscribe', :email => "test@gmail.com"
    assert last_response.ok?
    assert last_response.body.include?("We'll notify test@gmail.com when Acme Widget launches!")
  end
  
  def test_subscribe_path_with_existing_email_renders_error_message
    post '/subscribe', :email => "test@gmail.com"
    assert last_response.ok?
    assert last_response.body.include?("It looks like you already subscribed with test@gmail.com, no need to do it again.")
  end
end