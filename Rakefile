task :default => :test

desc "Run all tests"
task(:test) do
  Dir['./*_test*.rb'].each { |f| load f }
end
