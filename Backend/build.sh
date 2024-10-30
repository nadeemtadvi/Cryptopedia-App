#!/bin/bash

# Create the dist directory if it doesn't exist
mkdir -p dist

# Transpile the index.js file to the dist directory using Babel
npx babel index.js -o dist/index.js
