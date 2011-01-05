Notify Me
=========
"Notify me" is an small application to collect email addresses from people who are interested in being notified when a product launches. We developed it for BusBrain, our iPhone app, prior to completing it, so we could develop an audience even before it shipped. We considered alternatives like hosted forms, but wanted more control over the presentation.

The app is intended to be deployed on Heroku, but easy to develop locally. We use sqlite locally and Heroku uses Postgres, to store the email addresses. The application views use Haml and Sass. If you like the idea but want to use different tools, feel free to fork and modify to your liking!

Installation
============

 - `gem install sinatra sinatra-sequel sqlite3-ruby`
 
Running the application
=======================

 - `ruby -rubygems notify_me.rb`

Testing
=======
Coverage of the controller actions is contained within `notify_me_test.rb`. Run the test cases with `ruby -rubygems notify_me_test.rb`. You will need to `gem install rack-test` if it is not installed already.


Contributors
============

 - Andy Atkinson (@webandy)
 - Nate Kadlac (@kadlac)