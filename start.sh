#!/bin/bash

# Prompt the user for the project name
read -p "Enter the project name: " project_name

# Replace spaces with hyphens
project_name=${project_name// /-}

# Remove periods
project_name=${project_name//./}

# Convert to lowercase
project_name=$(echo "$project_name" | tr '[:upper:]' '[:lower:]')

# Check if the directory already exists
if [ ! -d "$project_name" ]; then
    mkdir "$project_name"
    cd "$project_name" || exit
    touch index.js
else
    cd "$project_name" || exit
fi

# Start nodemon for index.js
nodemon index.js &

# Open the project in Visual Studio Code
code .

exit 0