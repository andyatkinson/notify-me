require 'rubygems'
require 'bundler'

Bundler.require

require './notify_me'
run Sinatra::Application
