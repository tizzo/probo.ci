---
layout: left-sidebar
title: Stash Integration
class: documentation
permalink: /docs/stash/
---
##Stash Integration

Probo integrates with [Stash](https://www.atlassian.com/software/stash) (a version control application created by Atlassian). Within the Stash pull request user interface, Probo adds a link indicating the Probo site builds.

Clicking on that link brings up a pop up window listing all the Probo sandbox site builds, their automated test status, and their site links. Senior developers who are reviewing the pull request can see whether any automated tests failed against a Probo site build.

Click on a Probo sandbox site link to go to an isolated copy of the site, which is built with the code from the pull request. Play with the site to see any effects from the pull request. Send this link to the business user who requested the functionality, so that they can visually and interactively verify if the desired changes align with their expectations.
