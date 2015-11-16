---
published: false
---

## A New Post
Howard Tyson, Vice President of Engineering at Zivtech, recently gave a talk at DrupalCon Barcelona about Probo.CI, our new continuous integration tool that’s currently in beta. If you’d like a demo or to participate in the Probo.CI beta, email [info@probo.ci](mailto:info@probo.ci).

You may already have a continuous integration system in place, or perhaps you’ve looked at one. There are a few continuous integration tools aside from Zivtech’s Probo.CI, such as Travis, Circle, and Drone.io.

Your current CI system probably connects to your version control repository. It probably sees when you push new code or when you create pull requests from feature branches. It probably runs tests: maybe a computer can look at some things and tell you if tests passed or failed. If you've gotten that far, you are light years ahead of most Drupal folks. But….

Drupal is hard to test

Your system probably doesn't help you with quality assurance outside of what a computer can look at. And a lot of Drupal is really difficult to test. In fact, I'd go so far as to say that perfect automated testing is impossible with Drupal.

There's too much code to test for any given site because we have this web application for building web applications. You can build a ridiculous amount of stuff while writing very little code just by assembling these pre-built components together and configuring them. The catch is that nothing can do the integration testing for you to indicate how all those pieces are going to fit with your custom code and your particular configuration.

Too much code, too much configuration

The permutation of all the possible configuration options is essentially infinite. In the Drupal community, the way we approach everything is to say, "Let's not duplicate efforts. Let's pool all of our efforts into larger projects."

We say, "You want to do something with dates?" Rather than writing three lines of form API stuff and including a couple of lines of JavaScript to pick a date and save into a database table, we say, "Here's Date module. Enjoy 10,000 lines of PHP code that you're now responsible for."

You're probably not going to execute all of that code, but you're going to have it. It's going to be on your site and it's going to be sitting there, waiting for someone to click some button that turns it on and makes it start messing with stuff that you probably haven't tested.

The other thing that makes it almost impossible to get perfect testing for Drupal is that there's too much in the database. There's a huge amount of configuration in the database and while it's really instructive and useful to do brand new, blue sky builds where you say, "Let me build this as an install profile from scratch," there's still a huge amount of stuff that can go into the database, can change on production, and can break stuff.

The problem with Drupal is that it's really difficult to build some kind of automated test suite where a computer can really tell you that 100% of the stuff you care about isn't broken. What’s the solution? Probo.ci.

Stay tuned for Part 2 of Howard’s talk on revolutionizing user acceptance testing through Probo.ci.
