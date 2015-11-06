---
layout: "docs"
title: Build Configuration
class: documentation
permalink: /docs/build/
published: true
---
Probo runs builds based on a `/.probo.yaml` file found in the root of your repository. You can task the Container Manager to run any number of build steps. Each step is a runnable plugin, and will get a status update sent to Github for the commit.

When the build runs, your source code for the commit that triggered the build is automatically available to you in the `$SRC_DIR` directory inside the container.

The .probo.yaml is split into a section for **'assets'** and a section for **'steps'**.

### Assets

Assets is where you indicate which assets to import into this build. These can be any assets that you've uploaded with the (Probo Uploader)[http://probo.ci/docs/uploader/].

For example, if you need to use a an asset you've uploaded with filename dev.sql.gz, start .probo.yaml file with:
{% highlight yaml%}
assets:
  - dev.sql.gz
{% endhighlight %}

### Steps

Steps are the commands to run for the build. These are typically steps for setting up a site and running tests. 

Each step must have a `name`. The name of each step is the build context, and will get its own status updates.

Each step also has a `plugin`. The default plugin is `shell`.

Depending on the `plugin` you specify, you may have other parameters depending on the step plugin used. The shell plugin requires a parameter for 'command'.

For example, a few steps using the 'shell' plugin:
{% highlight yaml%}
steps:
  - name: Run behat tests
    plugin: shell
    command: 'cd tests ; composer install ; bin/behat'
  - name: Another example test with default shell plugin
    command: 'echo "Hello World!"'
{% endhighlight %}

#### Drupal Plugin

The Drupal plugin provides options for your build steps if you are using Probo for a Drupal site. 

Here is the list of available options:

##### Directory Configuration

`makeFile`
  - The name of the make file to run to generate the install directory.
  - Accepts a **string** value.

`profileName`
  - The profile name used in creating a symlink to this directory if a make file is specified with the `makeFile` option and used to select the profile to install if the `runInstall` option is selected.
  - Accepts a **string** value.

`runInstall`
  - If set, run `drush site-install` to perform a fresh install of the site using the `profileName` as the install profile and allowing the `installArgs` option to configure the install.
  - Accepts a **boolean** value.

`installArgs`
  - A set of parameters to concatenate onto the `drush site-install` command if the `runInstall` option is set.
  - Defaults to ''.
  - Accepts a **string** value.

`siteFolder` 
  - Specifies the site folder to use for this build (the folder within the Drupal `sites` folder).
  - Defaults to `default`.
  - Accepts a **string** value.

##### Database Configuration

`database`
  - The name of the database to import if specified. Note that this database *must be added as an asset separately*.
  - Accepts a **string** value.

`databaseGzipped`
  - Whether the database was sent gzipped and whether it should therefore be gunzipped before importing.
  - Accepts a **boolean** value.

##### Additional Options

`databaseUpdates`
  - Determines whether to run `drush updb` after the build is finished.
  - Accepts a **boolean** value.

`clearCaches`
  - Whether to clear all caches after the build is finished. 
  - Defaults to true.
  - Accepts a **boolean** value.

`revertFeatures`
  - Whether to revert features using `drush fra` after the build is finished.
  - Accepts a **boolean** value.

#### Available variables:

You can use several variables within your `.probo.yaml` file.

- `$SRC_DIR` : The filepath which contains the code from your pull request.
- `$ASSET_DIR` : The filepath which contains any assets you uploaded to your Probo project.
- `$BUILD_ID` : The ID for the build.

### Sample `.probo.yaml` files:

#### Developing on a site with a database.

{% highlight yaml%}
assets:
  - dev.sql.gz
steps:
  - name: Import the database
    command: 'gunzip -c $ASSET_DIR/dev.sql.gz | `mysql foo` ; rm $ASSET_DIR/dev.sql.gz'
  - name: Move code in place
    command: 'mv $SRC_DIR /var/www/foo/code'
  - name: Run behat tests
    command: 'cd /var/www/foo/code/tests ; composer install ; bin/behat'
{% endhighlight %}

#### Developing on a Drupal site with a database.

{% highlight yaml%}
assets:
  - mydb.sql.gz
steps:
  - name: Probo site setup
    plugin: Drupal
    database: mydb.sql.gz
    databaseGzipped: true
    databaseUpdates: true
    revertFeatures: true
{% endhighlight %}

#### Developing a Drupal module.

{% highlight yaml%}
steps:
  - name: Create a D7 site
    command: "drush fec drupal7 --json-config='{\"settings_php.snippets\": []}'"
  - name: Add our module code
    command: 'cp -r $SRC_DIR /var/www/drupal7/webroot/sites/all/modules'
  - name: Enable our module, 'foo'.
    command: 'drush --root=/var/www/drupal7/webroot en foo -y'
  - name: Fix permissions
    command: 'chown -R www-data:www-data /var/www/fetcherserver/webroot/sites/default/files'
{% endhighlight %}

### Iterating until your build configuration succeeds:

Create a new branch in git and add the new `.probo.yaml` file in the root of the repository. Create a new Pull Request for that branch. You should see your build steps running on the pull request.

Look at the build details in the Probo app. You can see the output from each step. The output often helps you see what went wrong.

Edit your `.probo.yaml` file and commit the changes. Commits to an open pull request will trigger a new build.

Once your build configuration is working, merge your pull request.
