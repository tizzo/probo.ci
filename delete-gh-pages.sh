#!/bin/bash
# 
# Delete gh-pages branch before travis rebuilds site to remove caches

set -e

git config --local user.name "Travis CI"
git config --local user.email "travis@travis-ci.org"
git clone -q https://${GH_TOKEN}@github.com/ProboCI/probo.ci.git to_delete > /dev/null 2>&1
cd to_delete
git checkout gh-pages
git push -q https://${GH_TOKEN}@github.com/ProboCI/probo.ci.git --delete gh-pages > /dev/null 2>&1
cd .. && rm -rf to_delete