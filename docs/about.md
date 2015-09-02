---
layout: left-sidebar
title: About Probo
class: documentation
permalink: /docs/about/
---
##What is Probo?

Probo is an [open sourced](https://github.com/ProboCI/probo) Quality Assurance (QA) tool for developers and an User Acceptance Testing (UAT) tool for business users. Probo creates various sandbox test sites as the team develops so that other users can see and interact with changes earlier and more frequently throughout development  with “earlier and more frequently throughout development

###Probo for Automated QA

Probo integrates with version control applications (Github and Stash) to run automated QA tests upon every pull request. When a developer submits a pull request, Probo automatically builds sandbox sites and runs each test against a Probo sandbox site. From Github or Stash, the pull request reviewer can see the status of all each test run and click into its respective sandbox site to interact within it. If a test fails, then the team knows that there is a problem with the code submitted, saving reviewers, -- who are often senior developers, -- valuable time. Probo uses Docker to create these isolated sandbox sites on demand, so these sites stay available for as long as they are needed.

###Probo for Business UAT

The sandbox sites created by Probo can also be used for business users to provide earlylier UAT feedback. Business owners no longer have to wait until the end when a dedicated UAT environment is updated. The sandbox sites are created with realistic data and content from a backup (such as  from a production site). Visually demonstrate each development change to your business user, so that there is no misunderstanding about the end results before the end of your development period, when (and the code is merged).