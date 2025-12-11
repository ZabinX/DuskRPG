# This file is a configuration file for the Makefile.
# It is recommended to copy this file to config.make and edit it.

# The target platform.
TARGET ?= linux-amd64

# The path to the JavaFX SDK.
JAVAFX_HOME ?= /usr/local/javafx-sdk

# The path to the JDK.
#JAVA_HOME ?= /usr/local/jdk

# The path to the JavaFX modules.
JAVAMODPATH ?= $(JAVAFX_HOME)/lib .lib

# Commands
JAVAC ?= $(JAVA_HOME)/bin/javac
JAR ?= $(JAVA_HOME)/bin/jar
JMOD ?= $(JAVA_HOME)/bin/jmod
