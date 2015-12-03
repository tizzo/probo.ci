---
layout: "docs"
title: Step by Step
class: documentation
permalink: /docs/step-by-step/
published: true
---

Probo is here to make your development work cycle more fluid. We want you to be able to configure Probo to fit your project's needs; because Probo is highly configurable there are many ways to integrate it with your project. 
Below is a step by step example of a standard Drupal Site install with Github. This walkthrough does not use all the available parameters provided by the Drupal Plugin. You can see more available parameters in the [Probo build documentation](http://probo.ci/docs/build/#drupal-plugin).

Build Specs:
- Standard Drupal Site with a MYSQL database.
- Your repository is stored on Github.

----

## Sign in and sync your Github and Probo app. 
**Step 1: Sign into your [Probo App](https://app.probo.ci/) with GitHub.**

**Step 2: Enter your beta invite code. Use your personalized beta tester invite code that we emailed you.**     
Note: Still need an invite code? You can email [probo-support@probo.ci](mailto:probo-support@probo.ci). We are inviting beta testers in on a rolling basis. 

**Step 3: Sync your Github Repos** 


## Prepare your Database
You will need to upload your project's database to Probo. Although you can manually upload your database with the default shell plugin; we are going to use the Probo Uploader. The [Probo uploader](https://github.com/ProboCI/probo-uploader) is a CLI client for uploading files to the probo-asset-receiver. We upload the database first so we can use the Drupal Plugin task runner magic to revert features, run database updates, and clear caches. (Cache all the things!)

**Step 4: Use Drush to get your Database in a sql file.**
````
drush sql-dump > drupal_github.sql
````

**Step 5: Sanitize Your database. (optional)**
You should remove user sensitive data from your Drupal database. 
```
drush sql-sanitize
```

**Step 6: Compress your sql file.**
Although we compress and encrypt your database, it is always best practice to sanitize and compress your files.
Use the gzip format. Zipped formats will not work.
```
gzip drupal_github.sql
```

**Step 7: Install the [Probo uploader](https://github.com/ProboCI/probo-uploader) on your machine with npm.**
````
sudo npm install -g probo-uploader
````

**Step 8: Upload your database to the Probo app.** 
Each repository will have it's own token. You can find your project's token on the dashboard of your Probo app.
````
probo-uploader --token=[your-token] drupal_github.sql.gz
````

Your database is now uploaded to your TODO:[ask howard]. Currently, you can not see your database in the Probo dashboard.

## Add some more Probo magic
The real magic of Probo is automating pull requests to create test environments for you. In order to do that, you will need to add a few things to your project.

**Step 9: Create a new branch.**
cd into your project and create a new branch.
````
git checkout -b probo-build
````

**Step 10:Create your .probo.yaml file.**
You will need a .probo.yaml file in the root of your directory. You can task the Container Manager to run any number of build steps. Each step is a runnable plugin, and will get a status update sent to GitHub for the commit. * Remember that indentation and spacing is important for yaml files.
````
vim .probo.yaml
````

**Step 11: Declare your assets**
Tell Probo what database you are going to use for your Probo.builds.
Add in your Parameters. You can read more on the [docs](http://probo.ci/docs/build/) about different parameter options. 
````
assets:  
  - drupal_github.sql.gz  
steps:  
  - name: Probo site setup  
    plugin: Drupal  
    database: drupal_github.sql.gz  
    databaseGzipped: true  
    databaseUpdates: true  
    revertFeatures: true  
    clearCaches: true  
````

**Step 12: In your new branch probo-build, add and commit your files to your remote origin.**

````
git add .probo.yaml  
git commit -m"Adding .probo.yaml."  
git push -u origin probo-build   
````

**Step 13: Go to your GitHub account. You will see your new branch inside your project**
https://github.com/probobetatester/drupal_github/branches   

**Step 14: Create a pull request.**  
Click 'New Pull Request'   

**Step 15: Bask in the glory of Probo.**  
You will see the Probo build steps checked. You can now click on any detail link and it will direct you back to the Probo dashboard.

**Step 16: See your Probo build**  
In your Probo dashboard, you can click on 'View build' and your site will open in a new tab. This probo.build link uses the database defined in your .probo.yaml file and the code from your pull request. 

**Step 17: Share your Probo.build link with clients, managers even your Mom.**
This is an example of a probo.build link.
````
https://8499f7b0-44c1-4b70-be27-81c1573323a5.probo.build/
````
