#!/bin/bash

PACKAGES=$(cat package.json | jq -r '.workspaces | join(" ")')

eval $NPM_UPGRADE

for f in $PACKAGES; do
  echo "Checking $f ..."
  npx npm-check -u -d $f
done