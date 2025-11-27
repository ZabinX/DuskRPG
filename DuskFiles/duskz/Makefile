
dist_VERSION=0.1.99
dist_NAME=duskz
dist_EXTRA=

include config.make

java_MODULES =					\
	duskz.common				\
	duskz.client				\
	duskz.server				\
	duskz.tools

duskz.client_JDEPMOD = duskz.common
duskz.server_JDEPMOD = duskz.common

duskz.editor_JDEPMOD = duskz.common duskz.client
duskz.viewer_JDEPMOD = duskz.common duskz.client

# auto-generate the <module>_COMMANDS variables
define install-bin=
$1_COMMANDS = $(notdir $(wildcard src/$1/$(TARGET)/bin/*))
bin/$1/$(TARGET)/bin/%: src/$1/$(TARGET)/bin/%
	install -D -t $$(@D) $$<
endef
$(foreach mod,$(java_MODULES),$(eval $(call install-bin,$(mod))))

include java.make

xmlbind = jakarta.xml.bind:jakarta.xml.bind-api:4.0.0	\
	jakarta.activation:jakarta.activation-api:2.1.1	\
	com.sun.xml.bind:jaxb-impl:4.0.1		\
	com.sun.xml.bind:jaxb-core:4.0.2

# two possible javascript engines
# nashorn can't find methods on any objects for some reason
#nashorn +=				\
#	org.openjdk.nashorn:nashorn-core:15.4	\
#	org.ow2.asm:asm:7.3.1			\
#	org.ow2.asm:asm-commons:7.3.1		\
#	org.ow2.asm:asm-tree:7.3.1		\
#	org.ow2.asm:asm-analysis:7.3.1		\
#	org.ow2.asm:asm-util:7.3.1

rhino =	org.mozilla:rhino:1.7.14		\
	org.mozilla:rhino-engine:1.7.14

maven_central_JARS = $(xmlbind) $(rhino)

include maven.make

oldgame=game-2.7.3
oldgame=../../ext/DuskRPG/DuskFiles/Dusk2.7.3

run-server-old: duskz.server
	cd $(oldgame) && \
	$(JAVA) \
		--module-path $(realpath .lib):$(realpath bin/$(TARGET)/lib) \
		-m duskz.server/duskz.server.DuskServer

run-server: duskz.server
	$(JAVA) \
		--module-path .lib:bin/$(TARGET)/lib \
		-m duskz.server/duskz.server.entityz.GameServer game

run-client: duskz.client
	$(JAVA) \
		$(if $(JAVAMODPATH),--module-path $(subst $(S),:,$(JAVAMODPATH))) \
		-m duskz.client/duskz.client.fx.DuskFX

run-viewer: duskz.tools
	$(JAVA) \
		$(if $(JAVAMODPATH),--module-path $(subst $(S),:,$(JAVAMODPATH))) \
		-m duskz.tools/duskz.viewer.MapViewer

run-editor: duskz.tools
	$(JAVA) \
		$(if $(JAVAMODPATH),--module-path $(subst $(S),:,$(JAVAMODPATH))) \
		-m duskz.tools/duskz.viewer.MapViewer

convert-client: duskz.tools
	$(JAVA) \
		$(if $(JAVAMODPATH),--module-path $(subst $(S),:,$(JAVAMODPATH))) \
		-m duskz.tools/duskz.tool.Convert client rc somedusk


ifeq ($(TARGET),linux-amd64)
jlink_MODPATH = $(JAVA_HOME)/jmods:/usr/local/javafx-jmods
else
jlink_MODPATH = /usr/local/$(TARGET)/jdk/jmods:/usr/local/$(TARGET)/javafx-jmods
endif

# need to make rhino modular for jlink to work
bin/org.mozilla.rhino-1.7.14.jar: .lib/rhino-1.7.14.jar .lib/rhino-engine-1.7.14.jar
	mkdir -p bin/tmp/org.mozilla.rhino
	cd bin/tmp/org.mozilla.rhino && $(JAVA_HOME)/bin/jar xf $(realpath .lib/rhino-engine-1.7.14.jar)
	cd bin/tmp/org.mozilla.rhino && $(JAVA_HOME)/bin/jar xf $(realpath .lib/rhino-1.7.14.jar)
	jar cfm bin/org.mozilla.rhino.jar bin/tmp/org.mozilla.rhino/META-INF/MANIFEST.MF \
		-C bin/tmp/org.mozilla.rhino META-INF \
		-C bin/tmp/org.mozilla.rhino org
	$(JAVA_HOME)/bin/jdeps --generate-module-info bin/gen bin/org.mozilla.rhino.jar
	javac -cp rhino.jar -d bin/tmp/org.mozilla.rhino bin/gen/org.mozilla.rhino/module-info.java
	jar cfm bin/org.mozilla.rhino-1.7.14.jar~ bin/tmp/org.mozilla.rhino/META-INF/MANIFEST.MF \
		-C bin/tmp/org.mozilla.rhino META-INF \
		-C bin/tmp/org.mozilla.rhino org  \
		-C bin/tmp/org.mozilla.rhino module-info.class
	mv $@~ $@

bin/status/org.mozilla.rhino.engine.classes: .lib/rhino-engine-1.7.14.jar
	$(JAVA_HOME)/bin/jdeps --generate-module-info bin/gen/ --module-path .lib $<
	mkdir -p bin/modules/org.mozilla.rhino.engine
	cd bin/modules/org.mozilla.rhino.engine && $(JAVA_HOME)/bin/jar xf $(realpath $<)
	$(JAVAC) -d bin/modules/org.mozilla.rhino.engine \
		--module-path .lib:bin/modules \
		bin/gen/org.mozilla.rhino.engine/module-info.java

#jarname=$(word 2,$(subst :, ,$1))-$(word 3,$(subst :, ,$1)).jar
define jarname
$(word 2,$(subst :, ,$1))-$(word 3,$(subst :, ,$1)).jar
endef

#		--strip-debug
link: duskz.client duskz.server duskz.common bin/org.mozilla.rhino-1.7.14.jar
	rm -rf bin/$(TARGET)/image bin/$(TARGET)/tmp
	mkdir -p bin/$(TARGET)/tmp
	$(foreach artifact,$(xmlbind),( cd bin/$(TARGET)/tmp && ln -s ../../../.lib/$(call jarname,$(artifact)) ); )
	cd bin/$(TARGET)/tmp ; ln -s ../../org.mozilla.rhino-1.7.14.jar
	$(JAVA_HOME)/bin/jlink \
		--module-path bin/$(TARGET)/jmods:bin/$(TARGET)/tmp:$(jlink_MODPATH) \
		--add-modules duskz.client,duskz.server,org.mozilla.rhino \
		--bind-services \
		--no-man-pages \
		--compress 2 \
		--output bin/$(TARGET)/image
	cd bin/$(TARGET)/image && \
	7za a ../../$(dist_NAME)-$(dist_VERSION)-$(TARGET).zip .
