#!/bin/bash

# Set the path to the directory containing the images
directory_path="./"

# Counter for the index
index=1
keyname="retratos"

# Iterate through all .jpg and .jpeg files in the directory
for image_file in "$directory_path"/*.jpg "$directory_path"/*.jpeg; do
    # Get the file extension
    extension="${image_file##*.}"

    # Rename the file to "familiares_<index>"
    new_filename="${directory_path}${keyname}_$index.$extension"
    mv "$image_file" "$new_filename"

    # Increment the index
    ((index++))
done

echo "Image files in the current directory renamed to ${keyname}_<index>."
