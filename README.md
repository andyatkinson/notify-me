Notify Me
=========
"Notify me" is an small application to collect email addresses from people who are interested in being notified when a product launches. We developed it for BusBrain, our iPhone app, prior to completing it, so we could develop an audience even before it shipped. We considered alternatives like hosted forms, but wanted more control over the presentation.

The app is intended to be deployed on Heroku, but easy to develop locally. We use sqlite locally and Heroku uses Postgres, to store the email addresses. The application views use Haml and CSS. If you like the idea but want to use different tools, feel free to fork and modify to your liking!

Local Installation
==================
Locally sqlite is used. It may be installed already on your system, to install the Ruby gem for sqlite, I specified the ARCHFLAGS option.

    $ sudo env ARCHFLAGS="-arch i386" gem install sqlite3-ruby

Then from there, install the Sinatra framework if you don't have it already, and the other dependencies.

    $ gem install sinatra sequel sinatra-sequel
 
Running the application locally
===============================

    $ ruby -rubygems notify_me.rb

Deploying to Heroku
===================
Install the Heroku gem to create a new server.

    $ gem install heroku

Now create a Heroku server, add the remote git repository, and push the code to Heroku. The Heroku gem will print a URL where you can visit your server.

    $ heroku create my_notify_me
    $ git remote add heroku git@heroku.com:my_notify_me.git
    $ git push heroku master

Collecting email addresses locally
=================================
Since we're using sqlite locally, we can log-in to the database client tool, or use IRB and load the sequel gem.

 sqlite
 ------
    $ sqlite3 subscriptions.db
    $ select email from subscriptions;
    $ .quit

 IRB
 ---
    $ irb -rubygems
    $ require 'notify_me'
    $ Subscription.all.map(&:email).join(", ") # get a comma-separated list of email addresses

Collecting email addresses from the Heroku server
=================================================
Log-in to the Heroku server to fetch the email addresses. Logging-in to the console is:
    
    $ heroku console

From the console, fetch the email addresses the same way as using IRB locally.

    $ Subscription.all.map(&:email).join(", ")

Testing
=======
Coverage of the controller actions is contained within `notify_me_test.rb`. Run the test cases with `ruby -rubygems notify_me_test.rb`. You will need to `gem install rack-test` if it is not installed already.


Design 
======
A Photoshop document `notify_me.psd` is part of this repository. The PSD can be used as a starting point for customization on your project:

    Software: Adobe Photoshop CS5
    Size: 4.3 MB
    Dimensions: 1024x768
    Fonts: Helvetica Neue

Contributors
============

 - Andy Atkinson (@webandy)
 - Nate Kadlac (@kadlac)