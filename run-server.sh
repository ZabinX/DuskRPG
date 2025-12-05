#!/bin/bash
set -e
# Compile Common
javac -d . DuskFiles/Common/duskz/protocol/*.java DuskFiles/Common/duskz/util/*.java
# Compile Server
javac -cp . -d . DuskFiles/Serverz3/duskz/server/*.java DuskFiles/Serverz3/duskz/server/entity/*.java
# Run Server from the data directory
cd DuskFiles/DuskComet-Richter
java -cp ../../ duskz.server.DuskServer
