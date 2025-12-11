#!/bin/bash

# This script packages the DuskZ JavaFX client into a native application bundle.

# --- Configuration ---
# Ensure the JAVAFX_HOME environment variable is set.
if [ -z "$JAVAFX_HOME" ]; then
  echo "Error: JAVAFX_HOME environment variable is not set."
  echo "Please set it to the directory of your JavaFX SDK."
  echo "Example: export JAVAFX_HOME=/path/to/javafx-sdk-19"
  exit 1
fi

APP_NAME="DuskZ"
MAIN_CLASS="duskz.client.fx.DuskFX"
MAIN_MODULE="duskz.client"
OUTPUT_DIR="release"
MODULE_PATH="bin/modules:bin/linux-amd64/lib:$JAVAFX_HOME/lib:.lib"

# --- Main Script ---
echo "Using JavaFX from: $JAVAFX_HOME"

# Clean up previous release
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# Run the jpackage command
jpackage --type app-image \
  --name "$APP_NAME" \
  --dest "$OUTPUT_DIR" \
  --module-path "$MODULE_PATH" \
  --module "$MAIN_MODULE/$MAIN_CLASS"

echo "Successfully created application in the '$OUTPUT_DIR' directory."
