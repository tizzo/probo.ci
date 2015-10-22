---
layout: post
title: Introducing Probo CI
author: Howard Tyson
---
<div class="message">
<a href="http://probo.ci/">Probo.CI</a> is a new <a href="https://github.com/ProboCI/probo">open source</a> continuous integration system designed from the ground up to work with Drupal.
</div>

{% image 'probo_blog.jpg' alt="Probo Workflow" class="full-width" %}

[Probo.CI](http://probo.ci/) is a new [open source](https://github.com/ProboCI/probo) continuous integration system designed from the ground up to work with Drupal. It integrates with Githhub to build your pull requests and post the status of your builds back to the Github PR, just like travis.ci. The part that is different from travis.ci is that it does not tear down your environment at the end and but instead posts a link to that environment on the github issue for easy code review, client feedback, and project manager evaluation. In order to save on resources with large numbers of containers, Probo shuts down containers while you're not using them and starts them up again on demand to give you just-in-time access to your development environments. Probo is designed to be easy to extend and easy to wire into a broader devops ecosystem.

Under the hood, Probo.ci is written in [Node.js](https://nodejs.org/) and powered by [Docker](https://www.docker.com/).  This means that with just a little configuration you can run on your own container images and test your Drupal sites on whatever versions of whatever services your stack needs. Probo is implemented using a microservice architecture and ships with services for receiving Github notifications of push and pull request events and posting statuses back to the status API, another for creating, starting, and stopping the containers, and a third for proxying incoming requests to the correct container (and starting the container if it was stopped to save on resources). It also ships with tools for use as a local test runner (especially helpful when you're getting your project ready to build server side).
