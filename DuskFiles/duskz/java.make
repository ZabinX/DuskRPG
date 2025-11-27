#
# Copyright (C) 2019,2022 Michael Zucchi
#
# This is the copyright for java.make
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

# General purpose modular java makefile that supports native library
# compilation directly.  Non-recrusve implementation.
#
# Uses metamake programming with some file conventions to implement
# auto-make-like features.

# Define modules
# --------------
# java_MODULES list of java modules to compile.  The sources must
# 		exist in src/<module>/classes.  Resource files are
# 		stored in src/<module>/classes.  Source-code
# 		generators must exist in src/<module>/gen.  Native
# 		libraries must exist in src/<module>/jni.

# native_MODULES list of native-only "modules".


# Global variables

# JAVA_HOME		location of jdk.
# JAVAC			java compiler to use.  Default is 'javac' on the path.
# JAVACFLAGS		javac flags applied to all invocations.
# JAR 			jar command.
# JARFLAGS		jar flags
# JMOD			jmod command.
# JMODFLAGS		jmod flags.
# JAVAFLAGS		java flags for run targets

# Module specific variables

# <module>_JDEPMOD	Lists modules which this one depends on.

# <module>_JAVACFLAGS	Extra module-specific flags for each command.
# <module>_JARFLAGS
# <module>_JMODFLAGS

# all paths are relative to the root package name

# <module>_JAVA			Java sources.  If not set it is found from src/<module>/classes/(*.java)
# <module>_RESOURCES		.jar resources.  If not set it is found from src/<module>/classes/(not *.java)
# <module>_JAVA_GENERATED	Java generated sources.
# <module>_RESOURCES_GENERATED	Java generated sources.

# Variables for use in fragments

# gen.make and jni.make can additionally make use of these variables

# <module>_gendir	Location for files used in Java generation process (per project).
# <module>_genjavadir	Location where _JAVA_GENERATED .java files will be created (per project).
# <module>_objdir	Location for c objects (per target).
# <module>_incdir	Location for output includes, .jmod staging.
# <module>_libdir	Location for output libraries, .jmod staging.  May point to _bindir.
# <module>_bindir	Location for output commands, .jmod staging.

# Define libraries
# ----------------

# Each module can define one or more native libraries.

# These are compiled after the java sources have been compiled as that
# process also generates any native binding headers.

# <module>_NATIVE_LIBRARIES	list of libraries to build.
# library names match System.loadLibrary().

# Global variables

# <target>_LDFLAGS
# <target>_LDLIBS
# <target>_CPPFLAGS
# <target>_CFLAGS
# <target>_CC
# <target>_CXXFLAGS
# <target>_CXX
# SO		shared library suffix
# LIB		shared library prefix

# Utility functions
#
# $(call library-path,<module>,<libname>) will resolve to the library file name.

# Per library variables.

# <library>_SOURCES	.c source files for library.  Paths are relative to src/<module>/native.
# <library>_CXXSOURCES	.c source files for library.  Paths are relative to src/<module>/native.
# <library>_HEADERS	header files for install/jmod
# <library>_COMMANDS	commands/bin/scripts for install/jmod

# <library>_LDFLAGS	link flags
# <library>_LIBADD	extra objects to add to link line
# <library>_LDLIBS	link libraries
# <library>_CPPFLAGS	c and c++ pre-processor flags.  "-Isrc/<module>/jni -Ibin/include/<module>" is implicit.
# <library>_CCFLAGS	c compiler flags
# <library>_CXXFLAGS	c++ compiler flags

# <library>_DEPENDENCIES 	A list of other objects on which this library depends before linking.

# .c and .cc files have dependencies automatically generated

# Targets
# -------

# make gen		only generate java sources
# make clean		rm -rf bin
# make dist		create dist tar in bin/
# make | make jar	make all jars and jmods

# Outputs
# -------

# All intermediate and output files are written to bin/

# This layout is enforced by javac
#  bin/include/<module>/        .h files from javac -h
#  bin/modules/<module>/        .class files from javac

# This layout is convenient for netbeans
#  bin/gen/<module>/gen/	.c, exe files for generator	free use
#  bin/gen/<module>/classes/	.java files from generator	<module>_JAVA_GENERATED

# Working files
#  bin/status/			marker files for makefile

#  bin/<module>/<target>/lib	.so librareies for jmod		<module>_LIBRARIES = libname
#  bin/<module>/<target>/obj	.o, .d files for library	<libname>_SOURCES
#  bin/<module>/<target>/include .h files for jmod  		<libname>_HEADERS
#  bin/<module>/<target>/<module>.jmod	.jmod module

# Output files
#  bin/<target>/lib/		modular jar files and shared libraries for GNU/linux dev
#  bin/<target>/include/	header files for exported shared libraries
#  bin/<target>/bin/		shared libraries for microsoft dev
#  bin/<target>/jmods/		jmod files for 'jlink' use.

# ######################################################################

all_MODULES = $(java_MODULES) $(native_MODULES)

E:=
S:=$(E) $(E)
SO=$($(TARGET)_SO)
LIB=$($(TARGET)_LIB)

# Define some useful variables before including fragments
define common_variables=
$1_gendir:=bin/gen/$1/gen
$1_genjavadir:=bin/gen/$1/classes
$1_objdir:=bin/$1/$(TARGET)/obj
$1_incdir:=bin/$1/$(TARGET)/include
$1_libdir:=$$(if $$(filter windows-%,$(TARGET)),bin/$1/$(TARGET)/bin,bin/$1/$(TARGET)/lib)
$1_bindir:=bin/$1/$(TARGET)/bin
endef

define java_variables=
ifndef $1_JAVA
$1_JAVA := $$(shell cd src/$1/classes && find * -type f -name '*.java')
endif
ifndef $1_RESOURCES
$1_RESOURCES := $$(shell cd src/$1/classes && find * -type f \! -name '*.java')
endif
endef

java_libdir:=$(if $(filter windows-%,$(TARGET)),bin/$(TARGET)/bin,bin/$(TARGET)/lib)
java_bindir:=bin/$(TARGET)/bin
java_jardir:=bin/$(TARGET)/lib
java_incdir:=bin/$(TARGET)/include
java_jmoddir:=bin/$(TARGET)/jmods

$(foreach module,$(java_MODULES) $(native_MODULES),$(eval $(call common_variables,$(module))))
$(foreach module,$(java_MODULES),$(eval $(call java_variables,$(module))))

# ######################################################################

all:
jar:
gen:

.PHONY: all clean jar gen $(java_MODULES) dist
clean:
	rm -rf bin

# dist things
dist_TAR = bin/$(dist_NAME)-$(dist_VERSION).tar.gz
dist_FILES = config.make.in java.make Makefile src $(dist_EXTRA)

# Gen is things that go into the jar (sources and resources)
include $(wildcard $(all_MODULES:%=src/%/gen/gen.make))
# Native is things that go into the sdk/jmod
include $(wildcard $(all_MODULES:%=src/%/native/native.make))

# ######################################################################

# create module depencies
# variables:
# <module>_sdk is the target location of an expanded 'sdk' for this module
#  it resides in a common location bin/<target>/
# <module>_jmod is the target location of a staging area for jmod files
#  is resides in a per-module lcoation bin/<module>/<target>/
# <module>_java is all the targets that will cause the invocation of javac
#  it includes the module source, generated sources, and sentinals for generated sources

# targets:
# bin/status/<module>.depjava marks all source/generated sources are ready/updated
# bin/status/<module>.depjar all compiled class files and resources are ready/updated
# bin/status/<module>.sdk all files are available in bin/<target> as if it was an installed image

define module_vars=
$1_sdk  := $(addprefix $(java_bindir)/,$($1_COMMANDS)) $(addprefix $(java_libdir)/,$($1_LIBRARIES)) $($1_NATIVE_LIBRARIES:%=$(java_libdir)/lib%.so)
$1_jmod := $(addprefix $($1_bindir)/,$($1_COMMANDS)) $(addprefix $($1_libdir)/,$($1_LIBRARIES)) $($1_NATIVE_LIBRARIES:%=$($1_libdir)/lib%.so)
$1_java :=$($1_JAVA:%=src/$1/classes/%) $($1_JAVA_GENERATED:%=$($1_genjavadir)/%)
$1_resources:= $($1_RESOURCES:%=bin/modules/$1/%) $($1_RESOURCES_GENERATED:%=bin/modules/$1/%)
$1_depjava := $($1_API:%=bin/status/$1-%.export) $(patsubst %,bin/status/%.classes, $(filter $($1_JDEPMOD),$(java_MODULES)))

ifneq ("$$(strip $$($1_java) $$($1_depjava))", "")
bin/status/$1.depjava: $$($1_java) $$($1_depjava)
	@install -d $$(@D)
	touch $$@
bin/status/$1.depjar: bin/status/$1.classes $$($1_resources)
	@install -d $$(@D)
	touch $$@
bin/status/$1.depmod: bin/status/$1.classes $$($1_resources) $$($1_jmod)
	@install -d $$(@D)
	touch $$@
bin/status/$1.sdk: $(java_jardir)/$1.jar
jar: $(java_jardir)/$1.jar
gen: bin/status/$1.depjava
$1 all: $(java_jardir)/$1.jar $(java_jmoddir)/$1.jmod
else
# acutally not sure here?
$1 all: bin/status/$1.sdk
endif

$1-sdk sdk: bin/status/$1.sdk

bin/status/$1.sdk: $$($1_sdk) $$($1_jmod)
	@install -d $$(@D)
	touch $$@

endef

#$(foreach m,$(all_MODULES),$(info $(call module_vars,$m)))
$(foreach m,$(all_MODULES),$(eval $(call module_vars,$m)))

# ######################################################################
# notzed.nativez export-api
# ######################################################################

define api_targets=
bin/status/$1-$2.export: src/$1/gen/$2.api src/$1/gen/$2.h
bin/status/$1-$2.export:
	mkdir -p bin/gen/$1/gen bin/status
	$(NATIVEZ_HOME)/bin/export-api \
		-w bin/gen/$1/gen -d bin/gen/$1/classes $($1_APIFLAGS) $($1_$2_APIFLAGS) src/$1/gen/$2.api
	touch $$@

bin/status/$1-$2.export.d:
	@$(NATIVEZ_HOME)/bin/export-api -M -MT "$$(@:.d=) $$@" -MF $$@ \
		-w bin/gen/$1/gen -d bin/gen/$1/classes $($1_APIFLAGS) $($1_$2_APIFLAGS) src/$1/gen/$2.api 2>/dev/null

$(if $(filter clean dist gen,$(MAKECMDGOALS)),,-include bin/status/$1-$2.export.d)
endef

$(foreach m,$(all_MODULES),$(foreach a,$($m_API),$(eval $(call api_targets,$m,$a))))

# ######################################################################
# Java
# ######################################################################

# Build targets for java modules

define java_targets=

# Create (modular) jar
$(java_jardir)/$1.jar: bin/status/$1.depjar
	@install -d $$(@D)
	$(JAR) cf $$@ \
	  $(JARFLAGS) $$($(1)_JARFLAGS) \
	  -C bin/modules/$(1) .

# Create a jmod
$(java_jmoddir)/$1.jmod: bin/status/$1.depmod
	rm -f $$@
	@install -d $$(@D)
	$$(JMOD) create \
	  $$(JMODFLAGS) $$($(1)_JMODFLAGS) \
	  --target-platform $(TARGET) \
	  --class-path bin/modules/$(1) \
	  $$(if $$(wildcard bin/$(1)/$(TARGET)/include),--header-files bin/$(1)/$(TARGET)/include) \
	  $$(if $$(wildcard src/$(1)/legal),--legal-notices src/$(1)/legal) \
	  $$(if $$(wildcard bin/$(1)/$(TARGET)/bin),--cmds bin/$(1)/$(TARGET)/bin) \
	  $$(if $$(wildcard bin/$(1)/$(TARGET)/lib),--libs bin/$(1)/$(TARGET)/lib) \
	  $$@

# Create an IDE source zip, paths have to match --module-source-path
$(java_jardir)/$1-sources.zip: bin/status/$1.depjar
	@install -d $$(@D)
	$(JAR) -c -f $$@ -M \
		$$($1_JAVA:%=-C src/$1/classes %) \
		$$($1_JAVA_GENERATED:%=-C bin/gen/$1/classes %)

# resources
bin/modules/$1/%: src/$1/classes/%
	install -vD $$< $$@
bin/modules/$1/%: $($1_gejavadir)/%
	install -vD $$< $$@

# Compile module.
bin/status/$1.classes: bin/status/$1.depjava
	@install -d $$(@D)
	$(JAVAC) \
		--module-source-path "src/*/classes:bin/gen/*/classes" \
		$(if $(JAVAMODPATH),--module-path $(subst $(S),:,$(JAVAMODPATH))) \
		$(JAVACFLAGS) $($1_JAVACFLAGS) \
		-d bin/modules \
		-m $1 \
		$$($1_JAVA:%=src/$1/classes/%) \
		$$($1_JAVA_GENERATED:%=bin/gen/$1/classes/%)
	touch $$@
endef

#$(foreach module,$(java_MODULES),$(info $(call java_targets,$(module))))
$(foreach module,$(java_MODULES),$(eval $(call java_targets,$(module))))

# ######################################################################

# setup run-* targets
define run_targets=
run-$1/$2: bin/status/$1.sdk $($1_JDEPMOD:%=bin/status/%.sdk)
	LD_LIBRARY_PATH=$(FFMPEG_HOME)/lib \
	$(JAVA) \
		$(if $(strip $(JAVAMODPATH) $($1_JAVAMODPATH)),--module-path $(subst $(S),:,$(strip $(JAVAMODPATH) $($1_JAVAMODPATH)))) \
		$(JMAINFLAGS) $($1_JMAINFLAGS) \
		-m $1/$2 \
		$(ARGV)
.PHONY: run-$1/$2
endef

#$(foreach module,$(java_MODULES),$(foreach main,$($(module)_JMAIN),$(info $(call run_targets,$(module),$(main)))))
$(foreach module,$(java_MODULES),$(foreach main,$($(module)_JMAIN),$(eval $(call run_targets,$(module),$(main)))))

# ######################################################################
# C and c++ native library support
# ######################################################################

define native_library=
# Rule for library $$2 in module $$1
$2_OBJS = $(patsubst %.c, $($1_objdir)/%.o, $($2_SOURCES)) \
	$(patsubst %.cc, $($1_objdir)/%.o, $($2_CXXSOURCES))
$2_SRCS = $(addprefix src/$1/native/,$($2_SOURCES))
$2_SO = $($1_libdir)/$(LIB)$2$(SO)

# Copy anything from staging area for jmods bin/module/<target>/* to sdk area bin/<target>/*
$(java_libdir)/%: $($(1)_libdir)/%
	@install -d $$(@D)
	ln -fs $$(abspath $$<) $$@
$(java_bindir)/%: $($(1)_bindir)/%
	@install -d $$(@D)
	ln -fs $$(abspath $$<) $$@
$(java_incdir)/%: $($(1)_incdir)/%
	@install -d $$(@D)
	ln -fs $$(abspath $$<) $$@

$($1_libdir)/$(LIB)$2$(SO): $$($2_OBJS) $($2_LIBADD) $($2_DEPENDENCIES)
	@install -d $$(@D)
	$($(TARGET)_CC) -o $$@ -shared \
		$($(TARGET)_LDFLAGS) $($2_LDFLAGS) $$($2_OBJS) $($2_LIBADD) $($(TARGET)_LDLIBS) $($2_LDLIBS)

$($1_objdir)/%.o: src/$1/native/%.c
	@install -d $$(@D)
	$($(TARGET)_CC) -Isrc/$1/native -Ibin/include/$1 \
		$($(TARGET)_CPPFLAGS) $($2_CPPFLAGS) \
		$($(TARGET)_CFLAGS) $($2_CFLAGS) -c -o $$@ $$<

$($1_objdir)/%.o: src/$1/native/%.cc
	@install -d $$(@D)
	$($(TARGET)_CXX) -Isrc/$1/native -Ibin/include/$1 \
		$($(TARGET)_CPPFLAGS) $($2_CPPFLAGS) \
		$($(TARGET)_CXXFLAGS) $($2_CXXFLAGS) -c -o $$@ $$<

# auto-dependencies for c files
$($1_objdir)/%.d: src/$1/native/%.c
	@install -d $$(@D)
	@rm -f $$@
	@$($(TARGET)_CC) -MM -MT "$$(@:.d=.o) $$@" -Isrc/$1/jni -Ibin/include/$1 \
		$($(TARGET)_CPPFLAGS) $($2_CPPFLAGS) $$< -o $$@ 2>/dev/null

# auto-dependencies for c++ files
$($1_objdir)/%.d: src/$1/native/%.cc
	@install -d $$(@D)
	@rm -f $$@
	@$($(TARGET)_CXX) -MM -MT "$$(@:.d=.o) $$@" -Isrc/$1/jni -Ibin/include/$1 \
		$($(TARGET)_CPPFLAGS) $($2_CPPFLAGS) $$< -o $$@ 2>/dev/null

$(if $(filter clean dist gen,$(MAKECMDGOALS)),,-include $$($2_OBJS:.o=.d))
endef

#$(foreach module,$(all_MODULES),$(foreach library,$($(module)_NATIVE_LIBRARIES),$(info $(call native_library,$(module),$(library)))))
$(foreach module,$(all_MODULES),$(foreach library,$($(module)_NATIVE_LIBRARIES),$(eval $(call native_library,$(module),$(library)))))

# ######################################################################

dist:
	@install -d bin
	tar cfz bin/$(dist_NAME)-$(dist_VERSION).tar.gz	\
	 --transform=s,^,$(dist_NAME)-$(dist_VERSION)/,	\
	$(dist_FILES)
