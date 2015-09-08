#!/bin/bash
# 
# Delete gh-pages branch before travis rebuilds site to remove caches

if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

set -e

git config --local user.name "Travis CI"
git config --local user.email "jcole@zivtech.com"
git clone -q https://${GH_TOKEN}@github.com/ProboCI/probo.ci.git to_delete > /dev/null 2>&1
cd to_delete
git checkout gh-pages
git push -q https://${GH_TOKEN}@github.com/ProboCI/probo.ci.git --delete gh-pages > /dev/null 2>&1
cd .. && rm -rf to_delete