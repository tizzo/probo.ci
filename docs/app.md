---
layout: "docs"
title: Using the Probo App
class: documentation
permalink: /docs/app/
published: true
---
The Probo App is currently being opened to Beta testers on a rolling basis. This documentation is for Beta testers.

The Probo App is found at https://app.probo.ci . Log in with your GitHub or Stash account and enter your invite code.

On the Dashboard you can toggle on a repository to be used with Probo.

Next you need to create a .probo.yaml file in the root of your codebase to configure your builds. You can do this in a new git branch. See documentation on Build Configuration.

To include assets (for example, your site's database) so that they are available to every Probo build, use the Probo Uploader https://github.com/ProboCI/probo-uploader . More information will be found on your project page within the Probo app.

Create a pull request in GitHub or Stash for the branch that includes the .probo.yaml file. You should see the steps in your .probo.yaml file building both on your pull request and in the Probo app. If a step fails, look at the details in the Probo app for the full console output. Adjust your .probo.yaml or get help in our support room. When you commit a change to a branch with a pull request, a new build will be created.
