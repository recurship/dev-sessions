#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build for gh-pages

./node_modules/.bin/ng build --prod --base-href "https://narainsagar.github.io/angular4-advanced-routing-demo/"

# Deploy: Publish the /dist folder using angular-cli-ghpages

./node_modules/.bin/angular-cli-ghpages
