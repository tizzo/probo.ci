#!/bin/bash
# 
# Delete gh-pages branch before travis rebuilds site to remove caches

set -e

git push -q https://#{ENV['GH_TOKEN']}@github.com/ProboCI/probo.ci.git --delete gh-pages > /dev/null 2>&1
