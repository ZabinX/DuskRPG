#!/bin/bash
set -e

# Compile Common and Server together
javac -d . \
  DuskFiles/Common/duskz/protocol/*.java \
  DuskFiles/Common/duskz/util/*.java \
  DuskFiles/Serverz3/duskz/server/*.java \
  DuskFiles/Serverz3/duskz/server/entity/*.java

# Run Server from the data directory
cd DuskFiles/DuskComet-Richter
java -cp ../../ duskz.server.DuskServer
