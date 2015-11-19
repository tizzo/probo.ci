---
layout: "docs"
title: Using the Probo App
class: documentation
permalink: /docs/app/
published: true
---
The [Probo App](https://app.probo.ci/ "Probo App") is currently being opened to Beta testers on a rolling basis. This documentation is for Beta testers.

The Probo App is found at https://app.probo.ci/. [Login with GitHub](https://app.probo.ci/auth/github "Login with GitHub") or login with Stash. Then enter your beta invite code.

On the [Probo Dashboard](https://app.probo.ci/dashboard "Probo Dashboard") you can toggle on or off repositories to be used with Probo that are available to your GitHub or Stash account.

{% image 'probo-dashboard.png' alt="Probo Dashboard screenshot" class="full-width" %}

Next you need to create a .probo.yaml file in the root of your codebase to configure your Probo builds. You can do this in a new git branch. See documentation on [Probo Build Configuration](http://probo.ci/docs/build/ "Probo Build Configuration") for specific details on how to setup the .probo.yaml file.

Include important website assets like your site's database dump so that those assets are available to every Probo build with the [Probo Uploader](https://github.com/ProboCI/probo-uploader "Probo Uploader"). More information will be found on your project page within the Probo App on how to upload assets to your project.

Create a pull request in GitHub or Stash for the branch that includes the .probo.yaml file. You should see the steps in your .probo.yaml file building both on your pull request and in the Probo app. If a step fails, look at the details in the Probo app for the full console output. Adjust your .probo.yaml or get help in our support room. When you commit a change to a branch with a pull request, a new build will be created.
