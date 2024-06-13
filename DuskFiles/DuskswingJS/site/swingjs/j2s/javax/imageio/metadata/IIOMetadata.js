(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),p$1={},I$=[[0,'javax.imageio.metadata.IIOMetadataFormatImpl','java.security.AccessController','Thread','javax.imageio.metadata.IIOMetadataNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IIOMetadata");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nativeMetadataFormatName=null;
this.nativeMetadataFormatClassName=null;
this.extraMetadataFormatNames=null;
this.extraMetadataFormatClassNames=null;
this.defaultController=null;
this.controller=null;
},1);

C$.$fields$=[['Z',['standardFormatSupported'],'S',['nativeMetadataFormatName','nativeMetadataFormatClassName'],'O',['extraMetadataFormatNames','String[]','+extraMetadataFormatClassNames','defaultController','javax.imageio.metadata.IIOMetadataController','+controller']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z$S$S$SA$SA',  function (standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames) {
;C$.$init$.apply(this);
this.standardFormatSupported=standardMetadataFormatSupported;
this.nativeMetadataFormatName=nativeMetadataFormatName;
this.nativeMetadataFormatClassName=nativeMetadataFormatClassName;
if (extraMetadataFormatNames != null ) {
if (extraMetadataFormatNames.length == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["extraMetadataFormatNames.length == 0!"]);
}if (extraMetadataFormatClassNames == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["extraMetadataFormatNames != null && extraMetadataFormatClassNames == null!"]);
}if (extraMetadataFormatClassNames.length != extraMetadataFormatNames.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["extraMetadataFormatClassNames.length != extraMetadataFormatNames.length!"]);
}this.extraMetadataFormatNames=extraMetadataFormatNames.clone$();
this.extraMetadataFormatClassNames=extraMetadataFormatClassNames.clone$();
} else {
if (extraMetadataFormatClassNames != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["extraMetadataFormatNames == null && extraMetadataFormatClassNames != null!"]);
}}}, 1);

Clazz.newMeth(C$, 'isStandardMetadataFormatSupported$',  function () {
return this.standardFormatSupported;
});

Clazz.newMeth(C$, 'getNativeMetadataFormatName$',  function () {
return this.nativeMetadataFormatName;
});

Clazz.newMeth(C$, 'getExtraMetadataFormatNames$',  function () {
if (this.extraMetadataFormatNames == null ) {
return null;
}return this.extraMetadataFormatNames.clone$();
});

Clazz.newMeth(C$, 'getMetadataFormatNames$',  function () {
var nativeName=this.getNativeMetadataFormatName$();
var standardName=this.isStandardMetadataFormatSupported$() ? "javax_imageio_1.0" : null;
var extraNames=this.getExtraMetadataFormatNames$();
var numFormats=0;
if (nativeName != null ) {
++numFormats;
}if (standardName != null ) {
++numFormats;
}if (extraNames != null ) {
numFormats+=extraNames.length;
}if (numFormats == 0) {
return null;
}var formats=Clazz.array(String, [numFormats]);
var index=0;
if (nativeName != null ) {
formats[index++]=nativeName;
}if (standardName != null ) {
formats[index++]=standardName;
}if (extraNames != null ) {
for (var i=0; i < extraNames.length; i++) {
formats[index++]=extraNames[i];
}
}return formats;
});

Clazz.newMeth(C$, 'getMetadataFormat$S',  function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}if (this.standardFormatSupported && formatName.equals$O("javax_imageio_1.0") ) {
return $I$(1).getStandardFormatInstance$();
}var formatClassName=null;
if (formatName.equals$O(this.nativeMetadataFormatName)) {
formatClassName=this.nativeMetadataFormatClassName;
} else if (this.extraMetadataFormatNames != null ) {
for (var i=0; i < this.extraMetadataFormatNames.length; i++) {
if (formatName.equals$O(this.extraMetadataFormatNames[i])) {
formatClassName=this.extraMetadataFormatClassNames[i];
break;
}}
}if (formatClassName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported format name"]);
}try {
var cls=null;
var o=this;
var loader=$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.IIOMetadata$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IIOMetadata$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.o.getClass$().getClassLoader$();
});
})()
), Clazz.new_(P$.IIOMetadata$1.$init$,[this, {o:o}]))]);
try {
cls=Clazz.forName(formatClassName, true, loader);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
loader=$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.IIOMetadata$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "IIOMetadata$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(3).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.IIOMetadata$2.$init$,[this, null]))]);
try {
cls=Clazz.forName(formatClassName, true, loader);
} catch (e1) {
if (Clazz.exceptionOf(e1,"ClassNotFoundException")){
cls=Clazz.forName(formatClassName, true, ClassLoader.getSystemClassLoader$());
} else {
throw e1;
}
}
} else {
throw e;
}
}
var meth=cls.getMethod$S$ClassA("getInstance", Clazz.array(Class, -1, []));
return meth.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, []));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var ex=Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t obtain format"]);
ex.initCause$Throwable(e);
throw ex;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getStandardChromaNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardDataNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardDocumentNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardTextNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardTileNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode',  function (root, node) {
if (node != null ) {
root.appendChild$org_w3c_dom_Node(node);
}}, p$1);

Clazz.newMeth(C$, 'getStandardTree$',  function () {
var root=Clazz.new_($I$(4,1).c$$S,["javax_imageio_1.0"]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardChromaNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardCompressionNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardDataNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardDimensionNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardDocumentNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardTextNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardTileNode$()]);
p$1.append$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, this.getStandardTransparencyNode$()]);
return root;
});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node',  function (formatName, root) {
this.reset$();
this.mergeTree$S$org_w3c_dom_Node(formatName, root);
});

Clazz.newMeth(C$, 'setController$javax_imageio_metadata_IIOMetadataController',  function (controller) {
this.controller=controller;
});

Clazz.newMeth(C$, 'getController$',  function () {
return this.controller;
});

Clazz.newMeth(C$, 'getDefaultController$',  function () {
return this.defaultController;
});

Clazz.newMeth(C$, 'hasController$',  function () {
return (this.getController$() != null );
});

Clazz.newMeth(C$, 'activateController$',  function () {
if (!this.hasController$()) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["hasController() == false!"]);
}return this.getController$().activate$javax_imageio_metadata_IIOMetadata(this);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
