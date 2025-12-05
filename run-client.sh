#!/bin/bash
set -e
# Compile Common
javac -d . DuskFiles/Common/duskz/protocol/*.java DuskFiles/Common/duskz/util/*.java
# Compile Client
javac -cp . -d . DuskFiles/Clientz3/duskz/client/*.java DuskFiles/Clientz3/duskz/client/fx/*.java
