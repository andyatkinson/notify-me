# Notify Me
"Notify Me" is a 2-page web app that collects email addresses. 

Here is what Notify Me looks like by default:

<img src='https://github.com/andyatkinson/notify-me/raw/master/public/screenshot.png' />

Notify Me was designed for Heroku which uses Postgres as the database server, but can be used locally with sqlite. If you like the idea but want to use different tools, feel free to fork and modify Notify Me for your own needs! The intent was to keep it very simple with few dependencies, so it could be modified easily.

## Installation and usage

``` bash
bundle
rackup
```

Open your browser to `http://localhost:9292/`.
 
## Customization
Notify Me is intended to be customized. In `notify_me.rb` you can change the product name, placeholder email strings, Google Analytics account ID and more. Of course you can also edit the markup of the inline templates as well. 

## Deploying to Heroku
Install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

``` bash
heroku create
heroku addons:add heroku-postgresql
git push heroku master
heroku open
```

### Viewing email addresses with sqlite locally

``` bash
sqlite3 notify-me.db
select email from subscriptions;
.quit
```

## Viewing emails addresses on Heroku
    
``` bash
heroku run console
Subscription.all.map(&:email).join(", ")
```

## Testing

``` bash
rake
```

## Design 
A Photoshop document `notify-me.psd` is part of this repository. The PSD can be used as a starting point for design customization:

    Software: Adobe Photoshop CS5
    Size: 4.3 MB
    Dimensions: 1024x768
    Fonts: Helvetica Neue
    Creator: Nate Kadlac

Copyright 2013 Andy Atkinson. MIT License.
