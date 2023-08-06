#!/bin/bash

# Function to check if a package is already installed
function is_package_installed() {
  npm list -g "$1" &>/dev/null
}

# Function to install a package if it's not already installed
function install_package() {
  if is_package_installed "$1"; then
    echo "$1 is already installed."
  else
    npm install --save-dev "$1"
  fi
}

# Install dev dependencies using npm
install_package css-loader
install_package file-loader
install_package html-webpack-plugin
install_package mini-css-extract-plugin
install_package postcss-loader
install_package postcss-preset-env
install_package style-loader
install_package url-loader
install_package webpack-bundle-analyzer

echo "Dev dependencies installation complete."
