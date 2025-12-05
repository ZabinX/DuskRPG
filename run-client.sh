#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: ./run-client.sh /path/to/your/javafx-sdk"
  echo "Please provide the path to your JavaFX SDK."
  exit 1
fi

JFX_SDK_PATH=$1

echo "Using JavaFX SDK at: $JFX_SDK_PATH"

# Compile Common
javac -d . DuskFiles/Common/duskz/protocol/*.java DuskFiles/Common/duskz/util/*.java

# Compile Client
javac --module-path "$JFX_SDK_PATH/lib" --add-modules javafx.controls,javafx.fxml -cp . -d . DuskFiles/Clientz3/duskz/client/*.java DuskFiles/Clientz3/duskz/client/fx/*.java
