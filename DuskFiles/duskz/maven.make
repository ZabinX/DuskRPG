#
# Copyright (C) 2021 Michael Zucchi
#
# This is the copyright for maven.make
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

# This lets one download maven packages using simple automake syntax.

# maven_<name>_URL = baseurl

# Define the base url.  maven_central_URL is already defined as
# maven_central_URL:=https://repo1.maven.org/maven2

# maven_<name>_JARS = group:artifact:version group:artifact:version ...

# Define the artifacts required from the given maven repository.

# That's it!

# It defines several make targets.

# make maven-init
#  Will download the jar files.

# make maven-verify
#  Will download and check the signatures using gpg.  The public key
#  required for verification must be imported to gpg separately.

# make distclean
#  Will delete .lib

# define maven central
maven_central_URL:=https://repo1.maven.org/maven2
maven_repository_URL:=https://mvnrepository.com/artifact

# find out what repositories the makefile defined
maven_REPOS=$(patsubst maven_%_URL,%,$(filter maven_%_URL,$(.VARIABLES)))

# (group artifact version baseurl)
define maven_func=
.lib/$2-$3.jar:
	mkdir -p .lib
	wget -O $$@ $(4)/$(subst .,/,$1)/$2/$3/$2-$3.jar || ( rm $$@ ; exit 1 )
.lib/$2-$3.pom:
	mkdir -p .lib
	wget -O $$@ $(4)/$(subst .,/,$1)/$2/$3/$2-$3.pom || ( rm $$@ ; exit 1 )
.lib/$2-$3.jar.asc: .lib/$2-$3.jar
	wget -O $$@ $(4)/$(subst .,/,$1)/$2/$3/$2-$3.jar.asc
	gpg --batch --verify $$@ $$< || ( rm $$@ ; echo "GPG verification failed, you may need to import the public key." ; exit 1 )
maven-init: .lib/$2-$3.jar .lib/$2-$3.pom
maven-verify: .lib/$2-$3.jar.asc
endef

maven-init:
maven-verify:

.PHONY: maven-init maven-verify

$(foreach repo,$(maven_REPOS),\
	$(foreach jar,$(maven_$(repo)_JARS), \
		$(eval $(call maven_func,$(word 1,$(subst :, ,$(jar))),$(word 2,$(subst :, ,$(jar))),$(word 3,$(subst :, ,$(jar))),$(maven_$(repo)_URL)))))

distclean:
	rm -rf .lib
