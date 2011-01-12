Notify Me
=========
"Notify me" is an small application to collect email addresses from people who are interested in being notified when a product launches. We developed it for BusBrain, our iPhone app, prior to completing it, so we could develop an audience even before it shipped. We considered alternatives like hosted forms, but wanted more control over the presentation.

The app is intended to be deployed on Heroku, but easy to develop locally. We use sqlite locally and Heroku uses Postgres, to store the email addresses. The application views use Haml and CSS. If you like the idea but want to use different tools, feel free to fork and modify to your liking!

Local Installation
==================
Locally sqlite is used as the database. Sqlite is probably installed already, but you may need to install the ruby gem for it. Check the output of `gem list` and see if it is installed. If it is not installed, install the ruby gem for sqlite. I specified the ARCHFLAGS option on my machine:

    $ sudo env ARCHFLAGS="-arch i386" gem install sqlite3-ruby

Then from there, install the Sinatra framework if you don't have it already, and the other dependencies. You can install the dependencies with the following command.

    $ gem install sinatra sinatra-sequel haml
 
Running the application locally
===============================
To run the application locally, just run the following command. If you want the changes to get reloaded automatically, install the shotgun gem `gem install shotgun` and run the app this way instead: `shotgun notify_me.rb`.

    $ ruby -rubygems notify_me.rb

Deploying to Heroku
===================
Install the Heroku gem to create a new server.

    $ gem install heroku

Now create a Heroku server. Enter your credentials if necessary. Heroku will automatically add a git remote named heroku. Once the server is created and the git remote is added, push the app to Heroku. The Heroku gem will print a URL where you can visit your server, for example `http://my-notify-me.heroku.com/`.

    $ heroku create my-notify-me
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