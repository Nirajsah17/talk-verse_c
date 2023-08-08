#!/bin/bash

##__author__1 = 'Pallawi'
##__author__2 = 'Niraj'
###----------------------------------------------------
## Build application
###----------------------------------------------------

echo "Cleaning up build"
rm -r build
npm run build:style
npm run build$1
cp -r data build/data