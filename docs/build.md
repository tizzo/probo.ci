---
layout: "left-sidebar"
title: Build Configuration
class: documentation
permalink: /docs/build/
published: true
---

##Build Configuration

Probo runs builds based on a `/.probo.yaml` file found in the root of your repository. You can task the Container Manager to run any number of build steps. Each step is a runnable plugin, and will get a status update sent to Github for the commit.

When the build runs, your source code for the commit that triggered the build is automatically available to you in the `$SRC_DIR` directory inside the container.

#Available variables:

- `$SRC_DIR` : The filepath which contains the code from your pull request.
- `$ASSET_DIR` : The filepath which contains any assets you uploaded to your Probo project.
- `$BUILD_ID` : The ID for the build.

Sample `.probo.yaml` file:

```` yaml
# Each step is the build/test process
# the name of each step is the build context, and will get its own status updates
steps:
  - name: Look Around
    plugin: 'Shell'  # this is the default plugin
    command: "ls $SRC_DIR"  
  - name: Create Site
    command: "drush fec myrepo --json-config='{\"settings_php.snippets\": []}'"
````


See the [Drupal Bear](https://github.com/zivtech/bear) repository for a full example.
