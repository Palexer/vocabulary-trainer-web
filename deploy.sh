#!/usr/bin/sh

# abort errors
set -e

# build
npm run build

cd dist/

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Palexer/vocabulary-trainer-web.git master:gh-pages

cd -
