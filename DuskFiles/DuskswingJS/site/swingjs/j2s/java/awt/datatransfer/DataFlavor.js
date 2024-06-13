(function(){var P$=Clazz.newPackage("java.awt.datatransfer"),p$1={},I$=[[0,'java.io.InputStream','java.awt.datatransfer.MimeTypeParameterList','java.awt.datatransfer.MimeType','sun.awt.datatransfer.DataTransferer',['java.awt.datatransfer.DataFlavor','.TextFlavorComparator'],'java.util.Collections','java.util.Arrays','java.io.StringReader','java.io.CharArrayReader','java.io.ByteArrayInputStream','java.io.InputStreamReader','java.io.Reader','java.util.List']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataFlavor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['TextFlavorComparator',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['atom'],'S',['humanPresentableName'],'O',['mimeType','java.awt.datatransfer.MimeType','representationClass','Class']]
,['O',['ioInputStreamClass','Class','stringFlavor','java.awt.datatransfer.DataFlavor','+imageFlavor','+plainTextFlavor','+javaFileListFlavor','textFlavorComparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'tryToLoadClass$S$ClassLoader',  function (className, fallback) {
return Clazz.forName(className);
}, 1);

Clazz.newMeth(C$, 'createConstant$Class$S',  function (rc, prn) {
try {
return Clazz.new_(C$.c$$Class$S,[rc, prn]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createConstant$S$S',  function (mt, prn) {
try {
return Clazz.new_(C$.c$$S$S,[mt, prn]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_awt_datatransfer_MimeTypeParameterList$Class$S',  function (primaryType, subType, params, representationClass, humanPresentableName) {
;C$.$init$.apply(this);
if (primaryType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["primaryType"]);
}if (subType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["subType"]);
}if (representationClass == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["representationClass"]);
}if (params == null ) params=Clazz.new_($I$(2,1));
params.set$S$S("class", representationClass.getName$());
if (humanPresentableName == null ) {
humanPresentableName=params.get$S("humanPresentableName");
if (humanPresentableName == null ) humanPresentableName=primaryType + "/" + subType ;
}try {
this.mimeType=Clazz.new_($I$(3,1).c$$S$S$java_awt_datatransfer_MimeTypeParameterList,[primaryType, subType, params]);
} catch (mtpe) {
if (Clazz.exceptionOf(mtpe,"java.awt.datatransfer.MimeTypeParseException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["MimeType Parse Exception: " + mtpe.getMessage$()]);
} else {
throw mtpe;
}
}
this.representationClass=representationClass;
this.humanPresentableName=humanPresentableName;
this.mimeType.removeParameter$S("humanPresentableName");
}, 1);

Clazz.newMeth(C$, 'c$$Class$S',  function (representationClass, humanPresentableName) {
C$.c$$S$S$java_awt_datatransfer_MimeTypeParameterList$Class$S.apply(this, ["application", "x-java-serialized-object", null, representationClass, humanPresentableName]);
if (representationClass == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["representationClass"]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (mimeType, humanPresentableName) {
;C$.$init$.apply(this);
if (mimeType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["mimeType"]);
}try {
p$1.initialize$S$S$ClassLoader.apply(this, [mimeType, humanPresentableName, this.getClass$().getClassLoader$()]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.awt.datatransfer.MimeTypeParseException")){
var mtpe = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["failed to parse:" + mimeType]);
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cnfe = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["can't find specified class: " + cnfe.getMessage$()]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$S$S$ClassLoader',  function (mimeType, humanPresentableName, classLoader) {
;C$.$init$.apply(this);
if (mimeType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["mimeType"]);
}try {
p$1.initialize$S$S$ClassLoader.apply(this, [mimeType, humanPresentableName, classLoader]);
} catch (mtpe) {
if (Clazz.exceptionOf(mtpe,"java.awt.datatransfer.MimeTypeParseException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["failed to parse:" + mimeType]);
} else {
throw mtpe;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (mimeType) {
;C$.$init$.apply(this);
if (mimeType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["mimeType"]);
}try {
p$1.initialize$S$S$ClassLoader.apply(this, [mimeType, null, this.getClass$().getClassLoader$()]);
} catch (mtpe) {
if (Clazz.exceptionOf(mtpe,"java.awt.datatransfer.MimeTypeParseException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["failed to parse:" + mimeType]);
} else {
throw mtpe;
}
}
}, 1);

Clazz.newMeth(C$, 'initialize$S$S$ClassLoader',  function (mimeType, humanPresentableName, classLoader) {
if (mimeType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["mimeType"]);
}this.mimeType=Clazz.new_($I$(3,1).c$$S,[mimeType]);
var rcn=this.getParameter$S("class");
if (rcn == null ) {
if ("application/x-java-serialized-object".equals$O(this.mimeType.getBaseType$())) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no representation class specified for:" + mimeType]);
 else this.representationClass=Clazz.getClass($I$(1));
} else {
this.representationClass=C$.tryToLoadClass$S$ClassLoader(rcn, classLoader);
}this.mimeType.setParameter$S$S("class", this.representationClass.getName$());
if (humanPresentableName == null ) {
humanPresentableName=this.mimeType.getParameter$S("humanPresentableName");
if (humanPresentableName == null ) humanPresentableName=this.mimeType.getPrimaryType$() + "/" + this.mimeType.getSubType$() ;
}this.humanPresentableName=humanPresentableName;
this.mimeType.removeParameter$S("humanPresentableName");
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
var string=this.getClass$().getName$();
string+="[" + p$1.paramString.apply(this, []) + "]" ;
return string;
});

Clazz.newMeth(C$, 'paramString',  function () {
var params="";
params+="mimetype=";
if (this.mimeType == null ) {
params+="null";
} else {
params+=this.mimeType.getBaseType$();
}params+=";representationclass=";
if (this.representationClass == null ) {
params+="null";
} else {
params+=this.representationClass.getName$();
}return params;
}, p$1);

Clazz.newMeth(C$, 'getTextPlainUnicodeFlavor$',  function () {
var encoding=null;
var transferer=$I$(4).getInstance$();
if (transferer != null ) {
encoding=transferer.getDefaultUnicodeEncoding$();
}return Clazz.new_(C$.c$$S$S,["text/plain;charset=" + encoding + ";class=java.io.InputStream" , "Plain Text"]);
}, 1);

Clazz.newMeth(C$, 'selectBestTextFlavor$java_awt_datatransfer_DataFlavorA',  function (availableFlavors) {
if (availableFlavors == null  || availableFlavors.length == 0 ) {
return null;
}if (C$.textFlavorComparator == null ) {
C$.textFlavorComparator=Clazz.new_($I$(5,1));
}var bestFlavor=$I$(6,"max$java_util_Collection$java_util_Comparator",[$I$(7).asList$OA(availableFlavors), C$.textFlavorComparator]);
if (!bestFlavor.isFlavorTextType$()) {
return null;
}return bestFlavor;
}, 1);

Clazz.newMeth(C$, 'getReaderForText$java_awt_datatransfer_Transferable',  function (transferable) {
var transferObject=transferable.getTransferData$java_awt_datatransfer_DataFlavor(this);
if (transferObject == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["getTransferData() returned null"]);
}if (Clazz.instanceOf(transferObject, "java.io.Reader")) {
return transferObject;
} else if (Clazz.instanceOf(transferObject, "java.lang.String")) {
return Clazz.new_($I$(8,1).c$$S,[transferObject]);
} else if (Clazz.instanceOf(transferObject, Clazz.array(Character.TYPE, -1))) {
return Clazz.new_($I$(9,1).c$$CA,[transferObject]);
}var stream=null;
if (Clazz.instanceOf(transferObject, "java.io.InputStream")) {
stream=transferObject;
} else if (Clazz.instanceOf(transferObject, Clazz.array(Byte.TYPE, -1))) {
stream=Clazz.new_($I$(10,1).c$$BA,[transferObject]);
}if (stream == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["transfer data is not Reader, String, CharBuffer, char array, InputStream, ByteBuffer, or byte array"]);
}var encoding=this.getParameter$S("charset");
return (encoding == null ) ? Clazz.new_($I$(11,1).c$$java_io_InputStream,[stream]) : Clazz.new_($I$(11,1).c$$java_io_InputStream$S,[stream, encoding]);
});

Clazz.newMeth(C$, 'getMimeType$',  function () {
return (this.mimeType != null ) ? this.mimeType.toString() : null;
});

Clazz.newMeth(C$, 'getRepresentationClass$',  function () {
return this.representationClass;
});

Clazz.newMeth(C$, 'getHumanPresentableName$',  function () {
return this.humanPresentableName;
});

Clazz.newMeth(C$, 'getPrimaryType$',  function () {
return (this.mimeType != null ) ? this.mimeType.getPrimaryType$() : null;
});

Clazz.newMeth(C$, 'getSubType$',  function () {
return (this.mimeType != null ) ? this.mimeType.getSubType$() : null;
});

Clazz.newMeth(C$, 'getParameter$S',  function (paramName) {
if (paramName.equals$O("humanPresentableName")) {
return this.humanPresentableName;
} else {
return (this.mimeType != null ) ? this.mimeType.getParameter$S(paramName) : null;
}});

Clazz.newMeth(C$, 'setHumanPresentableName$S',  function (humanPresentableName) {
this.humanPresentableName=humanPresentableName;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
return ((Clazz.instanceOf(o, "java.awt.datatransfer.DataFlavor")) && this.equals$java_awt_datatransfer_DataFlavor(o) );
});

Clazz.newMeth(C$, 'equals$java_awt_datatransfer_DataFlavor',  function (that) {
if (that == null ) {
return false;
}if (this === that ) {
return true;
}if (this.representationClass == null ) {
if (that.getRepresentationClass$() != null ) {
return false;
}} else {
if (!this.representationClass.equals$O(that.getRepresentationClass$())) {
return false;
}}if (this.mimeType == null ) {
if (that.mimeType != null ) {
return false;
}} else {
if (!this.mimeType.match$java_awt_datatransfer_MimeType(that.mimeType)) {
return false;
}if ("text".equals$O(this.getPrimaryType$()) && $I$(4).doesSubtypeSupportCharset$java_awt_datatransfer_DataFlavor(this) && this.representationClass != null    && !(this.isRepresentationClassReader$() || Clazz.getClass(String).equals$O(this.representationClass) || this.isRepresentationClassCharBuffer$() || $I$(4).charArrayClass.equals$O(this.representationClass)  ) ) {
}}return true;
});

Clazz.newMeth(C$, 'equals$S',  function (s) {
if (s == null  || this.mimeType == null  ) return false;
return this.isMimeTypeEqual$S(s);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var total=0;
if (this.representationClass != null ) {
total+=this.representationClass.hashCode$();
}if (this.mimeType != null ) {
var primaryType=this.mimeType.getPrimaryType$();
if (primaryType != null ) {
total+=primaryType.hashCode$();
}if ("text".equals$O(primaryType) && $I$(4).doesSubtypeSupportCharset$java_awt_datatransfer_DataFlavor(this) && this.representationClass != null    && !(this.isRepresentationClassReader$() || Clazz.getClass(String).equals$O(this.representationClass) || this.isRepresentationClassCharBuffer$() || $I$(4).charArrayClass.equals$O(this.representationClass)  ) ) {
}}return total;
});

Clazz.newMeth(C$, 'match$java_awt_datatransfer_DataFlavor',  function (that) {
return this.equals$java_awt_datatransfer_DataFlavor(that);
});

Clazz.newMeth(C$, 'isMimeTypeEqual$S',  function (mimeType) {
if (mimeType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["mimeType"]);
}if (this.mimeType == null ) {
return false;
}try {
return this.mimeType.match$java_awt_datatransfer_MimeType(Clazz.new_($I$(3,1).c$$S,[mimeType]));
} catch (mtpe) {
if (Clazz.exceptionOf(mtpe,"java.awt.datatransfer.MimeTypeParseException")){
return false;
} else {
throw mtpe;
}
}
});

Clazz.newMeth(C$, 'isMimeTypeEqual$java_awt_datatransfer_DataFlavor',  function (dataFlavor) {
return p$1.isMimeTypeEqual$java_awt_datatransfer_MimeType.apply(this, [dataFlavor.mimeType]);
});

Clazz.newMeth(C$, 'isMimeTypeEqual$java_awt_datatransfer_MimeType',  function (mtype) {
if (this.mimeType == null ) {
return (mtype == null );
}return this.mimeType.match$java_awt_datatransfer_MimeType(mtype);
}, p$1);

Clazz.newMeth(C$, 'isMimeTypeSerializedObject$',  function () {
return this.isMimeTypeEqual$S("application/x-java-serialized-object");
});

Clazz.newMeth(C$, 'getDefaultRepresentationClass$',  function () {
return C$.ioInputStreamClass;
});

Clazz.newMeth(C$, 'getDefaultRepresentationClassAsString$',  function () {
return this.getDefaultRepresentationClass$().getName$();
});

Clazz.newMeth(C$, 'isRepresentationClassInputStream$',  function () {
return C$.ioInputStreamClass.isAssignableFrom$Class(this.representationClass);
});

Clazz.newMeth(C$, 'isRepresentationClassReader$',  function () {
return Clazz.getClass($I$(12)).isAssignableFrom$Class(this.representationClass);
});

Clazz.newMeth(C$, 'isRepresentationClassCharBuffer$',  function () {
return false;
});

Clazz.newMeth(C$, 'isRepresentationClassByteBuffer$',  function () {
return false;
});

Clazz.newMeth(C$, 'isRepresentationClassSerializable$',  function () {
return Clazz.getClass(java.io.Serializable,[]).isAssignableFrom$Class(this.representationClass);
});

Clazz.newMeth(C$, 'isRepresentationClassRemote$',  function () {
return false;
});

Clazz.newMeth(C$, 'isFlavorSerializedObjectType$',  function () {
return false;
});

Clazz.newMeth(C$, 'isFlavorRemoteObjectType$',  function () {
return this.isRepresentationClassRemote$() && this.isRepresentationClassSerializable$() && this.isMimeTypeEqual$S("application/x-java-remote-object")  ;
});

Clazz.newMeth(C$, 'isFlavorJavaFileListType$',  function () {
if (this.mimeType == null  || this.representationClass == null  ) return false;
return Clazz.getClass($I$(13),['add$O','add$I$O','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','copyOf$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','of$','of$O','of$O$O','of$O$O$O','of$O$O$O$O','of$O$O$O$O$O','of$O$O$O$O$O$O','of$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O','of$OA','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$O','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$OA']).isAssignableFrom$Class(this.representationClass) && this.mimeType.match$java_awt_datatransfer_MimeType(C$.javaFileListFlavor.mimeType) ;
});

Clazz.newMeth(C$, 'isFlavorTextType$',  function () {
return ($I$(4).isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(this) || $I$(4).isFlavorNoncharsetTextType$java_awt_datatransfer_DataFlavor(this) );
});

Clazz.newMeth(C$, 'clone$',  function () {
var newObj=Clazz.clone(this);
if (this.mimeType != null ) {
(newObj).mimeType=this.mimeType.clone$();
}return newObj;
});

Clazz.newMeth(C$, 'normalizeMimeTypeParameter$S$S',  function (parameterName, parameterValue) {
return parameterValue;
});

Clazz.newMeth(C$, 'normalizeMimeType$S',  function (mimeType) {
return mimeType;
});

C$.$static$=function(){C$.$static$=0;
C$.ioInputStreamClass=Clazz.getClass($I$(1));
C$.stringFlavor=C$.createConstant$Class$S(Clazz.getClass(String), "Unicode String");
C$.imageFlavor=C$.createConstant$S$S("image/x-java-image; class=java.awt.Image", "Image");
C$.plainTextFlavor=C$.createConstant$S$S("text/plain; charset=unicode; class=java.io.InputStream", "Plain Text");
C$.javaFileListFlavor=C$.createConstant$S$S("application/x-java-file-list;class=java.util.List", null);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataFlavor, "TextFlavorComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.datatransfer.DataTransferer','.DataFlavorComparator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'compare$O$O',  function (obj1, obj2) {
var flavor1=obj1;
var flavor2=obj2;
if (flavor1.isFlavorTextType$()) {
if (flavor2.isFlavorTextType$()) {
return C$.superclazz.prototype.compare$O$O.apply(this, [obj1, obj2]);
} else {
return 1;
}} else if (flavor2.isFlavorTextType$()) {
return -1;
} else {
return 0;
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
