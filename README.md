Notify Me
=========
"Notify Me" is a simple 2-page web app that collects email addresses from people that want to be notified about the launch of a product. We developed it for our iPhone app [Bus Brain](http://busbrainapp.com/) so we could develop an audience for it before it was completed. We considered hosted forms from Wufoo and Google Docs, but wanted more control over the presentation. We aren't creating user records either, simply collecting email addresses.

Here is what Notify Me looks like by default:

<img src='https://github.com/andyatkinson/notify-me/raw/master/public/screenshot.png' />

Notify Me was designed for Heroku which uses Postgres as the database server, but can be used locally with sqlite. If you like the idea but want to use different tools, feel free to fork and modify Notify Me for your own needs! The intent was to keep it very simple with few dependencies, so it could be modified.

Local Installation
==================
Sqlite is used in development. Sqlite is probably installed on your machine, but you may need to install the ruby gem for it. Check the output of `gem list` for sqlite3 (e.g. `gem list | grep sqlite3-ruby`) and install it if necessary. I specified the ARCHFLAGS option for my install on OS X:

    $ sudo env ARCHFLAGS="-arch i386" gem install sqlite3-ruby

Install the Sinatra framework if you don't have it already, and the the `sinatra-sequel` gem. You can install the dependencies with the following command:

    $ gem install sinatra sinatra-sequel
 
Running the application locally
===============================
To run the application locally, just run the following command. If you want changes to get reloaded automatically, install the shotgun gem `gem install shotgun` and run the app with shotgun instead: `shotgun notify_me.rb`.

    $ ruby -rubygems notify_me.rb

Customization
=============
Notify Me is intended to be customized for your project. In `notify_me.rb` you can easily change the product name or placeholder email strings. Of course you can also edit the markup directly. Sinatra provides a `settings` feature and using it for customized strings is a nice way of indicating what you've changed.

Deploying to Heroku
===================
Install the Heroku gem to create a new server.

    $ gem install heroku

Now create a Heroku server. Enter your credentials if necessary. Heroku will automatically add a git remote named heroku. Once the server is created and the git remote is added, push the app to Heroku. The Heroku gem will print a URL where you can visit your server, for example `http://my-notify-me.heroku.com/`.

    $ heroku create my-notify-me
    $ git push heroku master

Adding a custom domain
======================
To add a customized domain name (not using subdomains) for your new Heroku server, [read their docs](http://docs.heroku.com/custom-domains) and run these commands:

    $ heroku addons:add custom_domains
    $ heroku domains:add www.example.com
    $ heroku domains:add example.com

In your DNS tool, add the following A records for the domain. I used Namecheap which has fields for 2 records, so I added the first two. Run `host example.com` to confirm the settings.

    75.101.163.44
    75.101.145.87
    174.129.212.2

Collecting email addresses locally
=================================
Since we're using sqlite locally, we can log-in to the database client tool, or use IRB and load the sequel gem.

 sqlite
 ------
    $ sqlite3 notify-me.db
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
Coverage of the controller actions is contained within `notify_me_test.rb`. Run that test with:

 - `ruby -rubygems notify_me_test.rb`. You will need to `gem install rack-test` if it is not installed already.

An additional production environment test that includes the GA script based on the environment can be run as follows:

 - `ruby -rubygems notify_me_test_production.rb`

Design 
======
A Photoshop document `notify-me.psd` is part of this repository. The PSD can be used as a starting point for design customization:

    Software: Adobe Photoshop CS5
    Size: 4.3 MB
    Dimensions: 1024x768
    Fonts: Helvetica Neue
    Creator: Nate Kadlac

Contributors
============
 - Andy Atkinson (@webandy)
 - Nate Kadlac (@kadlac)
 - David Barlow (http://madeindata.com/)
