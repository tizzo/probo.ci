---
layout: "docs"
title: GitHub Integration
class: documentation
permalink: /docs/github/
published: true
---
Probo integrates with [GitHub](http://github.com/), a popular version control application for open source projects. In the GitHub pull request user interface, Probo adds a list of sandbox site builds, their automated test status, and their test links. Senior developers who are reviewing the pull request can immediately see whether any automated tests failed against a Probo site build.

{% image 'probo-github-builds.png' alt="Probo YAML configuration file" class="full-width" %}

For each Probo sandbox site build, click the "Details" link to be directed to an isolated copy of the site, which uses code from the pull request.
