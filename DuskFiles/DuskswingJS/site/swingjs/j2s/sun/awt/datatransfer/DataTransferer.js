(function(){var P$=Clazz.newPackage("sun.awt.datatransfer"),p$1={},I$=[[0,'java.util.HashMap','sun.awt.datatransfer.DataTransferer','java.util.Collections',['sun.awt.datatransfer.DataTransferer','.IndexedComparator'],'java.io.InputStream','java.io.Reader',['sun.awt.datatransfer.DataTransferer','.CharsetComparator'],'java.util.HashSet','java.awt.datatransfer.DataFlavor','java.util.ArrayList',['sun.awt.datatransfer.DataTransferer','.DataFlavorComparator'],'sun.awt.SunToolkit','java.awt.AWTError','java.security.AccessController','java.util.TreeSet','java.util.TreeMap',['sun.awt.datatransfer.DataTransferer','.IndexOrderComparator'],'java.util.Arrays','StringBuffer','java.io.ByteArrayOutputStream','java.io.ByteArrayInputStream','java.io.File','java.io.StringReader','java.io.InputStreamReader','java.lang.reflect.Modifier','java.io.SequenceInputStream','java.util.Stack','java.awt.EventQueue','sun.awt.AppContext']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataTransferer", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['IndexedComparator',1033],['CharsetComparator',9],['DataFlavorComparator',9],['IndexOrderComparator',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['defaultEncoding'],'O',['charArrayClass','Class','+byteArrayClass','plainTextStringFlavor','java.awt.datatransfer.DataFlavor','+javaTextEncodingFlavor','standardEncodings','java.util.SortedSet','textMIMESubtypeCharsetSupport','java.util.Map','textNatives','java.util.Set','nativeCharsets','java.util.Map','+nativeEOLNs','+nativeTerminators','transferer','sun.awt.datatransfer.DataTransferer','DEPLOYMENT_CACHE_PROPERTIES','String[]','deploymentCacheDirectoryList','java.util.ArrayList','defaultCharsetComparator','sun.awt.datatransfer.DataTransferer.CharsetComparator','defaultFlavorComparator','sun.awt.datatransfer.DataTransferer.DataFlavorComparator']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.transferer == null ) {
{
if (C$.transferer == null ) {
var name=$I$(12).getDataTransfererClassName$();
if (name != null ) {
var action=((P$.DataTransferer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTransferer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var cls=null;
var method=null;
var ret=null;
try {
cls=Clazz.forName(this.$finals$.name);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
var cl=ClassLoader.getSystemClassLoader$();
if (cl != null ) {
try {
cls=cl.loadClass$S(this.$finals$.name);
} catch (ee) {
if (Clazz.exceptionOf(ee,"ClassNotFoundException")){
ee.printStackTrace$();
throw Clazz.new_($I$(13,1).c$$S,["DataTransferer not found: " + this.$finals$.name]);
} else {
throw ee;
}
}
}} else {
throw e;
}
}
if (cls != null ) {
try {
method=cls.getDeclaredMethod$S$ClassA("getInstanceImpl", Clazz.array(Class, -1, []));
method.setAccessible$Z(true);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
e.printStackTrace$();
throw Clazz.new_($I$(13,1).c$$S,["Cannot instantiate DataTransferer: " + this.$finals$.name]);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
e.printStackTrace$();
throw Clazz.new_($I$(13,1).c$$S,["Access is denied for DataTransferer: " + this.$finals$.name]);
}
} else {
throw e$$;
}
}
}if (method != null ) {
try {
ret=method.invoke$O$OA(null, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
e.printStackTrace$();
throw Clazz.new_($I$(13,1).c$$S,["Cannot instantiate DataTransferer: " + this.$finals$.name]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
e.printStackTrace$();
throw Clazz.new_($I$(13,1).c$$S,["Cannot access DataTransferer: " + this.$finals$.name]);
}
} else {
throw e$$;
}
}
}return ret;
});
})()
), Clazz.new_(P$.DataTransferer$1.$init$,[this, {name:name}]));
C$.transferer=$I$(14).doPrivileged$java_security_PrivilegedAction(action);
}}}}return C$.transferer;
}, 1);

Clazz.newMeth(C$, 'canonicalName$S',  function (encoding) {
if (encoding == null ) {
return null;
}return encoding;
}, 1);

Clazz.newMeth(C$, 'getTextCharset$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (!C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor)) {
return null;
}var encoding=flavor.getParameter$S("charset");
return (encoding != null ) ? encoding : C$.getDefaultTextCharset$();
}, 1);

Clazz.newMeth(C$, 'getDefaultTextCharset$',  function () {
if (C$.defaultEncoding != null ) {
return C$.defaultEncoding;
}return null;
}, 1);

Clazz.newMeth(C$, 'doesSubtypeSupportCharset$java_awt_datatransfer_DataFlavor',  function (flavor) {
var subType=flavor.getSubType$();
if (subType == null ) {
return false;
}var support=C$.textMIMESubtypeCharsetSupport.get$O(subType);
if (support != null ) {
return (support === Boolean.TRUE );
}var ret_val=(flavor.getParameter$S("charset") != null );
C$.textMIMESubtypeCharsetSupport.put$O$O(subType, (ret_val) ? Boolean.TRUE : Boolean.FALSE);
return ret_val;
}, 1);

Clazz.newMeth(C$, 'doesSubtypeSupportCharset$S$S',  function (subType, charset) {
var support=C$.textMIMESubtypeCharsetSupport.get$O(subType);
if (support != null ) {
return (support === Boolean.TRUE );
}var ret_val=(charset != null );
C$.textMIMESubtypeCharsetSupport.put$O$O(subType, (ret_val) ? Boolean.TRUE : Boolean.FALSE);
return ret_val;
}, 1);

Clazz.newMeth(C$, 'isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor',  function (flavor) {
if ($I$(9).stringFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}if (!"text".equals$O(flavor.getPrimaryType$()) || !C$.doesSubtypeSupportCharset$java_awt_datatransfer_DataFlavor(flavor) ) {
return false;
}var rep_class=flavor.getRepresentationClass$();
if (flavor.isRepresentationClassReader$() || Clazz.getClass(String).equals$O(rep_class) || flavor.isRepresentationClassCharBuffer$() || C$.charArrayClass.equals$O(rep_class)  ) {
return true;
}if (!(flavor.isRepresentationClassInputStream$() || flavor.isRepresentationClassByteBuffer$() || C$.byteArrayClass.equals$O(rep_class)  )) {
return false;
}var charset=flavor.getParameter$S("charset");
return (charset != null ) ? C$.isEncodingSupported$S(charset) : true;
}, 1);

Clazz.newMeth(C$, 'isFlavorNoncharsetTextType$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (!"text".equals$O(flavor.getPrimaryType$()) || C$.doesSubtypeSupportCharset$java_awt_datatransfer_DataFlavor(flavor) ) {
return false;
}return (flavor.isRepresentationClassInputStream$() || flavor.isRepresentationClassByteBuffer$() || C$.byteArrayClass.equals$O(flavor.getRepresentationClass$())  );
}, 1);

Clazz.newMeth(C$, 'isEncodingSupported$S',  function (encoding) {
if (encoding == null ) {
return false;
}return false;
}, 1);

Clazz.newMeth(C$, 'standardEncodings$',  function () {
if (C$.standardEncodings == null ) {
var tempSet=Clazz.new_($I$(15,1).c$$java_util_Comparator,[C$.defaultCharsetComparator]);
tempSet.add$O("US-ASCII");
tempSet.add$O("ISO-8859-1");
tempSet.add$O("UTF-8");
tempSet.add$O("UTF-16BE");
tempSet.add$O("UTF-16LE");
tempSet.add$O("UTF-16");
tempSet.add$O(C$.getDefaultTextCharset$());
C$.standardEncodings=$I$(3).unmodifiableSortedSet$java_util_SortedSet(tempSet);
}return C$.standardEncodings.iterator$();
}, 1);

Clazz.newMeth(C$, 'adaptFlavorMap$java_awt_datatransfer_FlavorMap',  function (map) {
if (Clazz.instanceOf(map, "java.awt.datatransfer.FlavorTable")) {
return map;
}return ((P$.DataTransferer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTransferer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.datatransfer.FlavorTable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getNativesForFlavors$java_awt_datatransfer_DataFlavorA',  function (flavors) {
return this.$finals$.map.getNativesForFlavors$java_awt_datatransfer_DataFlavorA(flavors);
});

Clazz.newMeth(C$, 'getFlavorsForNatives$SA',  function (natives) {
return this.$finals$.map.getFlavorsForNatives$SA(natives);
});

Clazz.newMeth(C$, 'getNativesForFlavor$java_awt_datatransfer_DataFlavor',  function (flav) {
var natives=this.getNativesForFlavors$java_awt_datatransfer_DataFlavorA(Clazz.array($I$(9), -1, [flav]));
var nat=natives.get$O(flav);
if (nat != null ) {
var list=Clazz.new_($I$(10,1).c$$I,[1]);
list.add$O(nat);
return list;
} else {
return $I$(3).EMPTY_LIST;
}});

Clazz.newMeth(C$, 'getFlavorsForNative$S',  function (nat) {
var flavors=this.getFlavorsForNatives$SA(Clazz.array(String, -1, [nat]));
var flavor=flavors.get$O(nat);
if (flavor != null ) {
var list=Clazz.new_($I$(10,1).c$$I,[1]);
list.add$O(flavor);
return list;
} else {
return $I$(3).EMPTY_LIST;
}});
})()
), Clazz.new_(P$.DataTransferer$2.$init$,[this, {map:map}]));
}, 1);

Clazz.newMeth(C$, 'registerTextFlavorProperties$S$S$S$S',  function (nat, charset, eoln, terminators) {
var format=this.getFormatForNativeAsLong$S(nat);
C$.textNatives.add$O(format);
C$.nativeCharsets.put$O$O(format, (charset != null  && charset.length$() != 0 ) ? charset : C$.getDefaultTextCharset$());
if (eoln != null  && eoln.length$() != 0  && !eoln.equals$O("\n") ) {
C$.nativeEOLNs.put$O$O(format, eoln);
}if (terminators != null  && terminators.length$() != 0 ) {
var iTerminators=Integer.valueOf$S(terminators);
if (iTerminators.intValue$() > 0) {
C$.nativeTerminators.put$O$O(format, iTerminators);
}}});

Clazz.newMeth(C$, 'isTextFormat$J',  function (format) {
return C$.textNatives.contains$O(Long.valueOf$J(format));
});

Clazz.newMeth(C$, 'getCharsetForTextFormat$Long',  function (lFormat) {
return C$.nativeCharsets.get$O(lFormat);
});

Clazz.newMeth(C$, 'getFormatsForTransferable$java_awt_datatransfer_Transferable$java_awt_datatransfer_FlavorTable',  function (contents, map) {
var flavors=contents.getTransferDataFlavors$();
if (flavors == null ) {
return Clazz.new_($I$(16,1));
}return this.getFormatsForFlavors$java_awt_datatransfer_DataFlavorA$java_awt_datatransfer_FlavorTable(flavors, map);
});

Clazz.newMeth(C$, 'getFormatsForFlavor$java_awt_datatransfer_DataFlavor$java_awt_datatransfer_FlavorTable',  function (flavor, map) {
return this.getFormatsForFlavors$java_awt_datatransfer_DataFlavorA$java_awt_datatransfer_FlavorTable(Clazz.array($I$(9), -1, [flavor]), map);
});

Clazz.newMeth(C$, 'getFormatsForFlavors$java_awt_datatransfer_DataFlavorA$java_awt_datatransfer_FlavorTable',  function (flavors, map) {
var formatMap=Clazz.new_($I$(1,1).c$$I,[flavors.length]);
var textPlainMap=Clazz.new_($I$(1,1).c$$I,[flavors.length]);
var indexMap=Clazz.new_($I$(1,1).c$$I,[flavors.length]);
var textPlainIndexMap=Clazz.new_($I$(1,1).c$$I,[flavors.length]);
var currentIndex=0;
for (var i=flavors.length - 1; i >= 0; i--) {
var flavor=flavors[i];
if (flavor == null ) continue;
if (flavor.isFlavorTextType$() || flavor.isFlavorJavaFileListType$() || $I$(9).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor) || flavor.isRepresentationClassSerializable$() || flavor.isRepresentationClassInputStream$() || flavor.isRepresentationClassRemote$()  ) {
var natives=map.getNativesForFlavor$java_awt_datatransfer_DataFlavor(flavor);
currentIndex+=natives.size$();
for (var iter=natives.iterator$(); iter.hasNext$(); ) {
var lFormat=this.getFormatForNativeAsLong$S(iter.next$());
var index=Integer.valueOf$I(currentIndex--);
formatMap.put$O$O(lFormat, flavor);
indexMap.put$O$O(lFormat, index);
if (("text".equals$O(flavor.getPrimaryType$()) && "plain".equals$O(flavor.getSubType$()) ) || flavor.equals$java_awt_datatransfer_DataFlavor($I$(9).stringFlavor) ) {
textPlainMap.put$O$O(lFormat, flavor);
textPlainIndexMap.put$O$O(lFormat, index);
}}
currentIndex+=natives.size$();
}}
formatMap.putAll$java_util_Map(textPlainMap);
indexMap.putAll$java_util_Map(textPlainIndexMap);
var comparator=Clazz.new_($I$(17,1).c$$java_util_Map$Z,[indexMap, false]);
var sortedMap=Clazz.new_($I$(16,1).c$$java_util_Comparator,[comparator]);
sortedMap.putAll$java_util_Map(formatMap);
return sortedMap;
});

Clazz.newMeth(C$, 'getFormatsForTransferableAsArray$java_awt_datatransfer_Transferable$java_awt_datatransfer_FlavorTable',  function (contents, map) {
return C$.keysToLongArray$java_util_SortedMap(this.getFormatsForTransferable$java_awt_datatransfer_Transferable$java_awt_datatransfer_FlavorTable(contents, map));
});

Clazz.newMeth(C$, 'getFormatsForFlavorAsArray$java_awt_datatransfer_DataFlavor$java_awt_datatransfer_FlavorTable',  function (flavor, map) {
return C$.keysToLongArray$java_util_SortedMap(this.getFormatsForFlavor$java_awt_datatransfer_DataFlavor$java_awt_datatransfer_FlavorTable(flavor, map));
});

Clazz.newMeth(C$, 'getFormatsForFlavorsAsArray$java_awt_datatransfer_DataFlavorA$java_awt_datatransfer_FlavorTable',  function (flavors, map) {
return C$.keysToLongArray$java_util_SortedMap(this.getFormatsForFlavors$java_awt_datatransfer_DataFlavorA$java_awt_datatransfer_FlavorTable(flavors, map));
});

Clazz.newMeth(C$, 'getFlavorsForFormat$J$java_awt_datatransfer_FlavorTable',  function (format, map) {
return this.getFlavorsForFormats$JA$java_awt_datatransfer_FlavorTable(Clazz.array(Long.TYPE, -1, [format]), map);
});

Clazz.newMeth(C$, 'getFlavorsForFormats$JA$java_awt_datatransfer_FlavorTable',  function (formats, map) {
var flavorMap=Clazz.new_($I$(1,1).c$$I,[formats.length]);
var mappingSet=Clazz.new_($I$(8,1).c$$I,[formats.length]);
var flavorSet=Clazz.new_($I$(8,1).c$$I,[formats.length]);
for (var i=0; i < formats.length; i++) {
var format=formats[i];
var nat=this.getNativeForFormat$J(format);
var flavors=map.getFlavorsForNative$S(nat);
for (var iter=flavors.iterator$(); iter.hasNext$(); ) {
var flavor=iter.next$();
if (flavor.isFlavorTextType$() || flavor.isFlavorJavaFileListType$() || $I$(9).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor) || flavor.isRepresentationClassSerializable$() || flavor.isRepresentationClassInputStream$() || flavor.isRepresentationClassRemote$()  ) {
var lFormat=Long.valueOf$J(format);
var mapping=C$.createMapping$O$O(lFormat, flavor);
flavorMap.put$O$O(flavor, lFormat);
mappingSet.add$O(mapping);
flavorSet.add$O(flavor);
}}
}
for (var flavorIter=flavorSet.iterator$(); flavorIter.hasNext$(); ) {
var flavor=flavorIter.next$();
var natives=map.getNativesForFlavor$java_awt_datatransfer_DataFlavor(flavor);
for (var nativeIter=natives.iterator$(); nativeIter.hasNext$(); ) {
var lFormat=this.getFormatForNativeAsLong$S(nativeIter.next$());
var mapping=C$.createMapping$O$O(lFormat, flavor);
if (mappingSet.contains$O(mapping)) {
flavorMap.put$O$O(flavor, lFormat);
break;
}}
}
return flavorMap;
});

Clazz.newMeth(C$, 'getFlavorsForFormatsAsSet$JA$java_awt_datatransfer_FlavorTable',  function (formats, map) {
var flavorSet=Clazz.new_($I$(8,1).c$$I,[formats.length]);
for (var i=0; i < formats.length; i++) {
var nat=this.getNativeForFormat$J(formats[i]);
var flavors=map.getFlavorsForNative$S(nat);
for (var iter=flavors.iterator$(); iter.hasNext$(); ) {
var flavor=iter.next$();
if (flavor.isFlavorTextType$() || flavor.isFlavorJavaFileListType$() || $I$(9).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor) || flavor.isRepresentationClassSerializable$() || flavor.isRepresentationClassInputStream$() || flavor.isRepresentationClassRemote$()  ) {
flavorSet.add$O(flavor);
}}
}
return flavorSet;
});

Clazz.newMeth(C$, 'getFlavorsForFormatAsArray$J$java_awt_datatransfer_FlavorTable',  function (format, map) {
return this.getFlavorsForFormatsAsArray$JA$java_awt_datatransfer_FlavorTable(Clazz.array(Long.TYPE, -1, [format]), map);
});

Clazz.newMeth(C$, 'getFlavorsForFormatsAsArray$JA$java_awt_datatransfer_FlavorTable',  function (formats, map) {
return C$.setToSortedDataFlavorArray$java_util_Set(this.getFlavorsForFormatsAsSet$JA$java_awt_datatransfer_FlavorTable(formats, map));
});

Clazz.newMeth(C$, 'createMapping$O$O',  function (key, value) {
return $I$(18,"asList$OA",[Clazz.array(java.lang.Object, -1, [key, value])]);
}, 1);

Clazz.newMeth(C$, 'getBestCharsetForTextFormat$Long$java_awt_datatransfer_Transferable',  function (lFormat, localeTransferable) {
var charset=null;
if (localeTransferable != null  && this.isLocaleDependentTextFormat$J((lFormat).valueOf())  && localeTransferable.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(C$.javaTextEncodingFlavor) ) {
try {
charset= String.instantialize(localeTransferable.getTransferData$java_awt_datatransfer_DataFlavor(C$.javaTextEncodingFlavor), "UTF-8");
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"java.awt.datatransfer.UnsupportedFlavorException")){
} else {
throw cannotHappen;
}
}
} else {
charset=this.getCharsetForTextFormat$Long(lFormat);
}if (charset == null ) {
charset=C$.getDefaultTextCharset$();
}return charset;
}, p$1);

Clazz.newMeth(C$, 'translateTransferableString$S$J',  function (str, format) {
var lFormat=Long.valueOf$J(format);
var charset=p$1.getBestCharsetForTextFormat$Long$java_awt_datatransfer_Transferable.apply(this, [lFormat, null]);
var eoln=C$.nativeEOLNs.get$O(lFormat);
if (eoln != null ) {
var length=str.length$();
var buffer=Clazz.new_($I$(19,1).c$$I,[length * 2]);
for (var i=0; i < length; i++) {
if (str.startsWith$S$I(eoln, i)) {
buffer.append$S(eoln);
i+=eoln.length$() - 1;
continue;
}var c=str.charAt$I(i);
if (c == "\n") {
buffer.append$S(eoln);
} else {
buffer.append$C(c);
}}
str=buffer.toString();
}var bytes=str.getBytes$S(charset);
var terminators=C$.nativeTerminators.get$O(lFormat);
if (terminators != null ) {
var numTerminators=terminators.intValue$();
var terminatedBytes=Clazz.array(Byte.TYPE, [bytes.length + numTerminators]);
System.arraycopy$O$I$O$I$I(bytes, 0, terminatedBytes, 0, bytes.length);
for (var i=bytes.length; i < terminatedBytes.length; i++) {
terminatedBytes[i]=(0|0);
}
bytes=terminatedBytes;
}return bytes;
}, p$1);

Clazz.newMeth(C$, 'translateBytesOrStreamToString$java_io_InputStream$BA$J$java_awt_datatransfer_Transferable',  function (str, bytes, format, localeTransferable) {
if (bytes == null ) {
bytes=C$.inputStreamToByteArray$java_io_InputStream(str);
}str.close$();
var lFormat=Long.valueOf$J(format);
var charset=p$1.getBestCharsetForTextFormat$Long$java_awt_datatransfer_Transferable.apply(this, [lFormat, localeTransferable]);
var eoln=C$.nativeEOLNs.get$O(lFormat);
var terminators=C$.nativeTerminators.get$O(lFormat);
var count;
if (terminators != null ) {
var numTerminators=terminators.intValue$();
 search : for (count=0; count < (bytes.length - numTerminators + 1); count+=numTerminators) {
for (var i=count; i < count + numTerminators; i++) {
if (bytes[i] != 0) {
continue search;
}}
break search;
}
} else {
count=bytes.length;
}var converted= String.instantialize(bytes, 0, count, charset);
if (eoln != null ) {
var buf=converted.toCharArray$();
var eoln_arr=eoln.toCharArray$();
converted=null;
var j=0;
var match;
for (var i=0; i < buf.length; ) {
if (i + eoln_arr.length > buf.length) {
buf[j++]=buf[i++];
continue;
}match=true;
for (var k=0, l=i; k < eoln_arr.length; k++, l++) {
if (eoln_arr[k] != buf[l]) {
match=false;
break;
}}
if (match) {
buf[j++]="\n";
i+=eoln_arr.length;
} else {
buf[j++]=buf[i++];
}}
converted= String.instantialize(buf, 0, j);
}return converted;
}, p$1);

Clazz.newMeth(C$, 'translateTransferable$java_awt_datatransfer_Transferable$java_awt_datatransfer_DataFlavor$J',  function (contents, flavor, format) {
var obj;
var stringSelectionHack;
try {
obj=contents.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
if (obj == null ) {
return null;
}if (flavor.equals$java_awt_datatransfer_DataFlavor($I$(9).plainTextFlavor) && !(Clazz.instanceOf(obj, "java.io.InputStream")) ) {
obj=contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(9).stringFlavor);
if (obj == null ) {
return null;
}stringSelectionHack=true;
} else {
stringSelectionHack=false;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.datatransfer.UnsupportedFlavorException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
if (stringSelectionHack || (Clazz.getClass(String).equals$O(flavor.getRepresentationClass$()) && C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format)  ) ) {
return p$1.translateTransferableString$S$J.apply(this, [p$1.removeSuspectedData$java_awt_datatransfer_DataFlavor$java_awt_datatransfer_Transferable$S.apply(this, [flavor, contents, obj]), format]);
} else if (flavor.isRepresentationClassReader$()) {
if (!(C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot transfer non-text data as Reader"]);
}var r=obj;
var buf=Clazz.new_($I$(19,1));
var c;
while ((c=r.read$()) != -1){
buf.append$C(String.fromCharCode(c));
}
r.close$();
return p$1.translateTransferableString$S$J.apply(this, [buf.toString(), format]);
} else if (flavor.isRepresentationClassCharBuffer$()) {
if (!(C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot transfer non-text data as CharBuffer"]);
}return null;
} else if (C$.charArrayClass.equals$O(flavor.getRepresentationClass$())) {
if (!(C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot transfer non-text data as char array"]);
}return p$1.translateTransferableString$S$J.apply(this, [ String.instantialize(obj), format]);
} else if (flavor.isRepresentationClassByteBuffer$()) {
} else if (C$.byteArrayClass.equals$O(flavor.getRepresentationClass$())) {
var bytes=obj;
if (C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) ) {
var sourceEncoding=C$.getTextCharset$java_awt_datatransfer_DataFlavor(flavor);
return p$1.translateTransferableString$S$J.apply(this, [ String.instantialize(bytes, sourceEncoding), format]);
} else {
return bytes;
}} else if ($I$(9).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
if (!this.isImageFormat$J(format)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Data translation failed: not an image format"]);
}var image=obj;
var bytes=this.imageToPlatformBytes$java_awt_Image$J(image, format);
if (bytes == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Data translation failed: cannot convert java image to native format"]);
}return bytes;
}var bos=Clazz.new_($I$(20,1));
if (this.isFileFormat$J(format)) {
if (!$I$(9).javaFileListFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["data translation failed"]);
}var list=obj;
var fileList=Clazz.new_($I$(10,1));
var nFiles=0;
for (var i=0; i < list.size$(); i++) {
var o=list.get$I(i);
if (Clazz.instanceOf(o, "java.io.File") || Clazz.instanceOf(o, "java.lang.String") ) {
++nFiles;
}}
var files=Clazz.array(String, [nFiles]);
for (var i=0, j=0; i < list.size$(); i++) {
var o=list.get$I(i);
var file=p$1.castToFile$O.apply(this, [o]);
fileList.add$O(file.getCanonicalPath$());
}
for (var fileName, $fileName = fileList.iterator$(); $fileName.hasNext$()&&((fileName=($fileName.next$())),1);) {
var bytes=fileName.getBytes$();
bos.write$BA$I$I(bytes, 0, bytes.length);
bos.write$I(0);
}
bos.write$I(0);
} else if (flavor.isRepresentationClassInputStream$()) {
var is=obj;
var eof=false;
var avail=is.available$();
var tmp=Clazz.array(Byte.TYPE, [avail > 8192 ? avail : 8192]);
do {
var ret;
if (!(eof=(ret=is.read$BA$I$I(tmp, 0, tmp.length)) == -1)) {
bos.write$BA$I$I(tmp, 0, ret);
}} while (!eof);
is.close$();
if (C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) ) {
var bytes=bos.toByteArray$();
bos.close$();
var sourceEncoding=C$.getTextCharset$java_awt_datatransfer_DataFlavor(flavor);
return p$1.translateTransferableString$S$J.apply(this, [ String.instantialize(bytes, sourceEncoding), format]);
}} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["data translation failed"]);
}var ret=bos.toByteArray$();
bos.close$();
return ret;
});

Clazz.newMeth(C$, 'translateBytes$BA$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable',  function (bytes, flavor, format, localeTransferable) {
return this.translateBytesOrStream$java_io_InputStream$BA$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable(null, bytes, flavor, format, localeTransferable);
});

Clazz.newMeth(C$, 'translateStream$java_io_InputStream$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable',  function (str, flavor, format, localeTransferable) {
return this.translateBytesOrStream$java_io_InputStream$BA$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable(str, null, flavor, format, localeTransferable);
});

Clazz.newMeth(C$, 'translateBytesOrStream$java_io_InputStream$BA$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable',  function (str, bytes, flavor, format, localeTransferable) {
if (str == null ) {
str=Clazz.new_($I$(21,1).c$$BA,[bytes]);
}if (this.isFileFormat$J(format)) {
if (!$I$(9).javaFileListFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["data translation failed"]);
}if (bytes == null ) {
bytes=C$.inputStreamToByteArray$java_io_InputStream(str);
}var filenames=this.dragQueryFile$BA(bytes);
if (filenames == null ) {
str.close$();
return null;
}var files=Clazz.array($I$(22), [filenames.length]);
for (var i=0; i < filenames.length; i++) {
files[i]=Clazz.new_($I$(22,1).c$$S,[filenames[i]]);
}
str.close$();
return $I$(18).asList$OA(files);
} else if (Clazz.getClass(String).equals$O(flavor.getRepresentationClass$()) && C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format)  ) {
return p$1.translateBytesOrStreamToString$java_io_InputStream$BA$J$java_awt_datatransfer_Transferable.apply(this, [str, bytes, format, localeTransferable]);
} else if ($I$(9).plainTextFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
return Clazz.new_([p$1.translateBytesOrStreamToString$java_io_InputStream$BA$J$java_awt_datatransfer_Transferable.apply(this, [str, bytes, format, localeTransferable])],$I$(23,1).c$$S);
} else if (flavor.isRepresentationClassInputStream$()) {
return p$1.translateBytesOrStreamToInputStream$java_io_InputStream$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable.apply(this, [str, flavor, format, localeTransferable]);
} else if (flavor.isRepresentationClassReader$()) {
if (!(C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot transfer non-text data as Reader"]);
}var is=p$1.translateBytesOrStreamToInputStream$java_io_InputStream$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable.apply(this, [str, $I$(9).plainTextFlavor, format, localeTransferable]);
var unicode=C$.getTextCharset$java_awt_datatransfer_DataFlavor($I$(9).plainTextFlavor);
var reader=Clazz.new_($I$(24,1).c$$java_io_InputStream$S,[is, unicode]);
return p$1.constructFlavoredObject$O$java_awt_datatransfer_DataFlavor$Class.apply(this, [reader, flavor, Clazz.getClass($I$(6))]);
} else if (flavor.isRepresentationClassCharBuffer$()) {
if (!(C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot transfer non-text data as CharBuffer"]);
}return null;
} else if (C$.charArrayClass.equals$O(flavor.getRepresentationClass$())) {
if (!(C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot transfer non-text data as char array"]);
}return p$1.translateBytesOrStreamToString$java_io_InputStream$BA$J$java_awt_datatransfer_Transferable.apply(this, [str, bytes, format, localeTransferable]).toCharArray$();
} else if (flavor.isRepresentationClassByteBuffer$()) {
if (C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) ) {
bytes=p$1.translateBytesOrStreamToString$java_io_InputStream$BA$J$java_awt_datatransfer_Transferable.apply(this, [str, bytes, format, localeTransferable]).getBytes$S(C$.getTextCharset$java_awt_datatransfer_DataFlavor(flavor));
} else {
if (bytes == null ) {
bytes=C$.inputStreamToByteArray$java_io_InputStream(str);
}}return null;
} else if (C$.byteArrayClass.equals$O(flavor.getRepresentationClass$())) {
if (C$.isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flavor) && this.isTextFormat$J(format) ) {
return p$1.translateBytesOrStreamToString$java_io_InputStream$BA$J$java_awt_datatransfer_Transferable.apply(this, [str, bytes, format, localeTransferable]).getBytes$S(C$.getTextCharset$java_awt_datatransfer_DataFlavor(flavor));
} else {
return (bytes != null ) ? bytes : C$.inputStreamToByteArray$java_io_InputStream(str);
}} else if ($I$(9).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
if (!this.isImageFormat$J(format)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["data translation failed"]);
}var image=this.platformImageBytesOrStreamToImage$java_io_InputStream$BA$J(str, bytes, format);
str.close$();
return image;
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["data translation failed"]);
});

Clazz.newMeth(C$, 'translateBytesOrStreamToInputStream$java_io_InputStream$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable',  function (str, flavor, format, localeTransferable) {
return p$1.constructFlavoredObject$O$java_awt_datatransfer_DataFlavor$Class.apply(this, [str, flavor, Clazz.getClass($I$(5))]);
}, p$1);

Clazz.newMeth(C$, 'removeSuspectedData$java_awt_datatransfer_DataFlavor$java_awt_datatransfer_Transferable$S',  function (flavor, contents, str) {
if (null == System.getSecurityManager$()  || !flavor.isMimeTypeEqual$S("text/uri-list") ) {
return str;
}var ret_val="";
var allowedFiles=Clazz.new_([str.length$()],$I$(19,1).c$$I);
for (var i=0; i < str.split$S("(\\s)+").length; i++) {
var fileName=str.split$S("(\\s)+")[i];
var file=Clazz.new_($I$(22,1).c$$S,[fileName]);
if (file.exists$() && C$.isFileInWebstartedCache$java_io_File(file) ) {
continue;
}if (0 != allowedFiles.length$()) {
allowedFiles.append$S("\\r\\n");
}allowedFiles.append$S(fileName);
}
ret_val=allowedFiles.toString();
return ret_val;
}, p$1);

Clazz.newMeth(C$, 'castToFile$O',  function (fileObject) {
var filePath=null;
if (Clazz.instanceOf(fileObject, "java.io.File")) {
filePath=(fileObject).getCanonicalPath$();
} else if (Clazz.instanceOf(fileObject, "java.lang.String")) {
filePath=fileObject;
}return Clazz.new_($I$(22,1).c$$S,[filePath]);
}, p$1);

Clazz.newMeth(C$, 'isFileInWebstartedCache$java_io_File',  function (f) {
if (C$.deploymentCacheDirectoryList.isEmpty$()) {
for (var cacheDirectoryProperty, $cacheDirectoryProperty = 0, $$cacheDirectoryProperty = C$.DEPLOYMENT_CACHE_PROPERTIES; $cacheDirectoryProperty<$$cacheDirectoryProperty.length&&((cacheDirectoryProperty=($$cacheDirectoryProperty[$cacheDirectoryProperty])),1);$cacheDirectoryProperty++) {
var cacheDirectoryPath=System.getProperty$S(cacheDirectoryProperty);
if (cacheDirectoryPath != null ) {
try {
var cacheDirectory=(Clazz.new_($I$(22,1).c$$S,[cacheDirectoryPath])).getCanonicalFile$();
if (cacheDirectory != null ) {
C$.deploymentCacheDirectoryList.add$O(cacheDirectory);
}} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
}}
}for (var it=C$.deploymentCacheDirectoryList.iterator$(); it.hasNext$(); ) {
var deploymentCacheDirectory=it.next$();
for (var dir=f; dir != null ; dir=dir.getParentFile$()) {
if (dir.equals$O(deploymentCacheDirectory)) {
return true;
}}
}
return false;
}, 1);

Clazz.newMeth(C$, 'constructFlavoredObject$O$java_awt_datatransfer_DataFlavor$Class',  function (arg, flavor, clazz) {
var dfrc=flavor.getRepresentationClass$();
if (clazz.equals$O(dfrc)) {
return arg;
} else {
var constructors=null;
try {
constructors=$I$(14,"doPrivileged$java_security_PrivilegedAction",[((P$.DataTransferer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTransferer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.dfrc.getConstructors$();
});
})()
), Clazz.new_(P$.DataTransferer$3.$init$,[this, {dfrc:dfrc}]))]);
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[se.getMessage$()]);
} else {
throw se;
}
}
var constructor=null;
for (var j=0; j < constructors.length; j++) {
if (!$I$(25,"isPublic$I",[constructors[j].getModifiers$()])) {
continue;
}var ptypes=constructors[j].getParameterTypes$();
if (ptypes != null  && ptypes.length == 1  && clazz.equals$O(ptypes[0]) ) {
constructor=constructors[j];
break;
}}
if (constructor == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["can't find <init>(L" + clazz + ";)V for class: " + dfrc.getName$() ]);
}try {
return constructor.newInstance$OA(Clazz.array(java.lang.Object, -1, [arg]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'concatData$O$O',  function (obj1, obj2) {
var str1=null;
var str2=null;
if (Clazz.instanceOf(obj1, Clazz.array(Byte.TYPE, -1))) {
var arr1=obj1;
if (Clazz.instanceOf(obj2, Clazz.array(Byte.TYPE, -1))) {
var arr2=obj2;
var ret=Clazz.array(Byte.TYPE, [arr1.length + arr2.length]);
System.arraycopy$O$I$O$I$I(arr1, 0, ret, 0, arr1.length);
System.arraycopy$O$I$O$I$I(arr2, 0, ret, arr1.length, arr2.length);
return ret;
} else {
str1=Clazz.new_($I$(21,1).c$$BA,[arr1]);
str2=obj2;
}} else {
str1=obj1;
if (Clazz.instanceOf(obj2, Clazz.array(Byte.TYPE, -1))) {
str2=Clazz.new_($I$(21,1).c$$BA,[obj2]);
} else {
str2=obj2;
}}return Clazz.new_($I$(26,1).c$$java_io_InputStream$java_io_InputStream,[str1, str2]);
}, p$1);

Clazz.newMeth(C$, 'convertData$O$java_awt_datatransfer_Transferable$J$java_util_Map$Z',  function (source, contents, format, formatMap, isToolkitThread) {
var ret=null;
if (isToolkitThread) try {
var stack=Clazz.new_($I$(27,1));
var dataConverter=((P$.DataTransferer$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTransferer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.done=false;
},1);

C$.$fields$=[['Z',['done']]]

Clazz.newMeth(C$, 'run$',  function () {
if (this.done) {
return;
}var data=null;
try {
var flavor=this.$finals$.formatMap.get$O(Long.valueOf$J(this.$finals$.format));
if (flavor != null ) {
data=this.b$['sun.awt.datatransfer.DataTransferer'].translateTransferable$java_awt_datatransfer_Transferable$java_awt_datatransfer_DataFlavor$J.apply(this.b$['sun.awt.datatransfer.DataTransferer'], [this.$finals$.contents, flavor, this.$finals$.format]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
data=null;
} else {
throw e;
}
}
try {
this.b$['sun.awt.datatransfer.DataTransferer'].getToolkitThreadBlockedHandler$.apply(this.b$['sun.awt.datatransfer.DataTransferer'], []).lock$();
this.$finals$.stack.push$O(data);
this.b$['sun.awt.datatransfer.DataTransferer'].getToolkitThreadBlockedHandler$.apply(this.b$['sun.awt.datatransfer.DataTransferer'], []).exit$();
} finally {
this.b$['sun.awt.datatransfer.DataTransferer'].getToolkitThreadBlockedHandler$.apply(this.b$['sun.awt.datatransfer.DataTransferer'], []).unlock$();
this.done=true;
}
});
})()
), Clazz.new_(P$.DataTransferer$4.$init$,[this, {contents:contents,formatMap:formatMap,format:format,stack:stack}]));
var appContext=$I$(12).targetToAppContext$O(source);
this.getToolkitThreadBlockedHandler$().lock$();
if (appContext != null ) {
appContext.put$O$O("DATA_CONVERTER_KEY", dataConverter);
}$I$(12).executeOnEventHandlerThread$O$Runnable(source, dataConverter);
while (stack.empty$()){
this.getToolkitThreadBlockedHandler$().enter$();
}
if (appContext != null ) {
appContext.remove$O("DATA_CONVERTER_KEY");
}ret=stack.pop$();
} finally {
this.getToolkitThreadBlockedHandler$().unlock$();
}
 else {
var flavor=formatMap.get$O(Long.valueOf$J(format));
if (flavor != null ) {
ret=this.translateTransferable$java_awt_datatransfer_Transferable$java_awt_datatransfer_DataFlavor$J(contents, flavor, format);
}}return ret;
});

Clazz.newMeth(C$, 'processDataConversionRequests$',  function () {
if ($I$(28).isDispatchThread$()) {
var appContext=$I$(29).getAppContext$();
this.getToolkitThreadBlockedHandler$().lock$();
try {
var dataConverter=appContext.get$O("DATA_CONVERTER_KEY");
if (dataConverter != null ) {
dataConverter.run$();
appContext.remove$O("DATA_CONVERTER_KEY");
}} finally {
this.getToolkitThreadBlockedHandler$().unlock$();
}
}});

Clazz.newMeth(C$, 'keysToLongArray$java_util_SortedMap',  function (map) {
var keySet=map.keySet$();
var retval=Clazz.array(Long.TYPE, [keySet.size$()]);
var i=0;
for (var iter=keySet.iterator$(); iter.hasNext$(); i++) {
retval[i]=(iter.next$()).longValue$();
}
return retval;
}, 1);

Clazz.newMeth(C$, 'keysToDataFlavorArray$java_util_Map',  function (map) {
return C$.setToSortedDataFlavorArray$java_util_Set$java_util_Map(map.keySet$(), map);
}, 1);

Clazz.newMeth(C$, 'setToSortedDataFlavorArray$java_util_Set',  function (flavorsSet) {
var flavors=Clazz.array($I$(9), [flavorsSet.size$()]);
flavorsSet.toArray$OA(flavors);
$I$(18).sort$OA$java_util_Comparator(flavors, C$.defaultFlavorComparator);
return flavors;
}, 1);

Clazz.newMeth(C$, 'setToSortedDataFlavorArray$java_util_Set$java_util_Map',  function (flavorsSet, flavorToNativeMap) {
var flavors=Clazz.array($I$(9), [flavorsSet.size$()]);
flavorsSet.toArray$OA(flavors);
var comparator=Clazz.new_($I$(11,1).c$$java_util_Map$Z,[flavorToNativeMap, false]);
$I$(18).sort$OA$java_util_Comparator(flavors, comparator);
return flavors;
}, 1);

Clazz.newMeth(C$, 'inputStreamToByteArray$java_io_InputStream',  function (str) {
var baos=Clazz.new_($I$(20,1));
var len=0;
var buf=Clazz.array(Byte.TYPE, [8192]);
while ((len=str.read$BA(buf)) != -1){
baos.write$BA$I$I(buf, 0, len);
}
return baos.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'getPlatformMappingsForNative$S',  function (nat) {
return Clazz.new_($I$(10,1));
});

Clazz.newMeth(C$, 'getPlatformMappingsForFlavor$java_awt_datatransfer_DataFlavor',  function (df) {
return Clazz.new_($I$(10,1));
});

C$.$static$=function(){C$.$static$=0;
C$.textNatives=$I$(3,"synchronizedSet$java_util_Set",[Clazz.new_($I$(8,1))]);
C$.nativeCharsets=$I$(3,"synchronizedMap$java_util_Map",[Clazz.new_($I$(1,1))]);
C$.nativeEOLNs=$I$(3,"synchronizedMap$java_util_Map",[Clazz.new_($I$(1,1))]);
C$.nativeTerminators=$I$(3,"synchronizedMap$java_util_Map",[Clazz.new_($I$(1,1))]);
{
var tCharArrayClass=null;
var tByteArrayClass=null;
try {
tCharArrayClass=Clazz.forName("[C");
tByteArrayClass=Clazz.forName("[B");
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"ClassNotFoundException")){
} else {
throw cannotHappen;
}
}
C$.charArrayClass=tCharArrayClass;
C$.byteArrayClass=tByteArrayClass;
var tPlainTextStringFlavor=null;
try {
tPlainTextStringFlavor=Clazz.new_(["text/plain;charset=Unicode;class=java.lang.String"],$I$(9,1).c$$S);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"ClassNotFoundException")){
} else {
throw cannotHappen;
}
}
C$.plainTextStringFlavor=tPlainTextStringFlavor;
var tJavaTextEncodingFlavor=null;
try {
tJavaTextEncodingFlavor=Clazz.new_(["application/x-java-text-encoding;class=\"[B\""],$I$(9,1).c$$S);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"ClassNotFoundException")){
} else {
throw cannotHappen;
}
}
C$.javaTextEncodingFlavor=tJavaTextEncodingFlavor;
var tempMap=Clazz.new_($I$(1,1).c$$I,[17]);
tempMap.put$O$O("sgml", Boolean.TRUE);
tempMap.put$O$O("xml", Boolean.TRUE);
tempMap.put$O$O("html", Boolean.TRUE);
tempMap.put$O$O("enriched", Boolean.TRUE);
tempMap.put$O$O("richtext", Boolean.TRUE);
tempMap.put$O$O("uri-list", Boolean.TRUE);
tempMap.put$O$O("directory", Boolean.TRUE);
tempMap.put$O$O("css", Boolean.TRUE);
tempMap.put$O$O("calendar", Boolean.TRUE);
tempMap.put$O$O("plain", Boolean.TRUE);
tempMap.put$O$O("rtf", Boolean.FALSE);
tempMap.put$O$O("tab-separated-values", Boolean.FALSE);
tempMap.put$O$O("t140", Boolean.FALSE);
tempMap.put$O$O("rfc822-headers", Boolean.FALSE);
tempMap.put$O$O("parityfec", Boolean.FALSE);
C$.textMIMESubtypeCharsetSupport=$I$(3).synchronizedMap$java_util_Map(tempMap);
};
C$.DEPLOYMENT_CACHE_PROPERTIES=Clazz.array(String, -1, ["deployment.system.cachedir", "deployment.user.cachedir", "deployment.javaws.cachedir", "deployment.javapi.cachedir"]);
C$.deploymentCacheDirectoryList=Clazz.new_($I$(10,1));
C$.defaultCharsetComparator=Clazz.new_($I$(7,1).c$$Z,[false]);
C$.defaultFlavorComparator=Clazz.new_($I$(11,1).c$$Z,[false]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTransferer, "IndexedComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['order']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (order) {
;C$.$init$.apply(this);
this.order=order;
}, 1);

Clazz.newMeth(C$, 'compareIndices$java_util_Map$O$O$Integer',  function (indexMap, obj1, obj2, fallbackIndex) {
var index1=indexMap.get$O(obj1);
var index2=indexMap.get$O(obj2);
if (index1 == null ) {
index1=fallbackIndex;
}if (index2 == null ) {
index2=fallbackIndex;
}return index1.compareTo$Integer(index2);
}, 1);

Clazz.newMeth(C$, 'compareLongs$java_util_Map$O$O$Long',  function (indexMap, obj1, obj2, fallbackIndex) {
var index1=indexMap.get$O(obj1);
var index2=indexMap.get$O(obj2);
if (index1 == null ) {
index1=fallbackIndex;
}if (index2 == null ) {
index2=fallbackIndex;
}return index1.compareTo$Long(index2);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTransferer, "CharsetComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.datatransfer.DataTransferer','.IndexedComparator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['defaultEncoding'],'O',['charsets','java.util.Map','DEFAULT_CHARSET_INDEX','Integer','+OTHER_CHARSET_INDEX','+WORST_CHARSET_INDEX','+UNSUPPORTED_CHARSET_INDEX']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (order) {
;C$.superclazz.c$$Z.apply(this,[order]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'compare$O$O',  function (obj1, obj2) {
var charset1=null;
var charset2=null;
if (this.order == true ) {
charset1=obj1;
charset2=obj2;
} else {
charset1=obj2;
charset2=obj1;
}return this.compareCharsets$S$S(charset1, charset2);
});

Clazz.newMeth(C$, 'compareCharsets$S$S',  function (charset1, charset2) {
charset1=C$.getEncoding$S(charset1);
charset2=C$.getEncoding$S(charset2);
var comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.charsets, charset1, charset2, C$.OTHER_CHARSET_INDEX);
if (comp == 0) {
return charset2.compareTo$S(charset1);
}return comp;
});

Clazz.newMeth(C$, 'getEncoding$S',  function (charset) {
if (charset == null ) {
return null;
} else if (!$I$(2).isEncodingSupported$S(charset)) {
return "UNSUPPORTED";
} else {
var canonicalName=$I$(2).canonicalName$S(charset);
return (C$.charsets.containsKey$O(canonicalName)) ? canonicalName : charset;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_CHARSET_INDEX=Integer.valueOf$I(2);
C$.OTHER_CHARSET_INDEX=Integer.valueOf$I(1);
C$.WORST_CHARSET_INDEX=Integer.valueOf$I(0);
C$.UNSUPPORTED_CHARSET_INDEX=Integer.valueOf$I(-2147483648);
{
var charsetsMap=Clazz.new_($I$(1,1).c$$I$F,[8, 1.0]);
charsetsMap.put$O$O($I$(2).canonicalName$S("UTF-16LE"), Integer.valueOf$I(4));
charsetsMap.put$O$O($I$(2).canonicalName$S("UTF-16BE"), Integer.valueOf$I(5));
charsetsMap.put$O$O($I$(2).canonicalName$S("UTF-8"), Integer.valueOf$I(6));
charsetsMap.put$O$O($I$(2).canonicalName$S("UTF-16"), Integer.valueOf$I(7));
charsetsMap.put$O$O($I$(2).canonicalName$S("US-ASCII"), C$.WORST_CHARSET_INDEX);
var defEncoding=$I$(2,"canonicalName$S",[$I$(2).getDefaultTextCharset$()]);
if (charsetsMap.get$O(C$.defaultEncoding) == null ) {
charsetsMap.put$O$O(C$.defaultEncoding, C$.DEFAULT_CHARSET_INDEX);
}charsetsMap.put$O$O("UNSUPPORTED", C$.UNSUPPORTED_CHARSET_INDEX);
C$.charsets=$I$(3).unmodifiableMap$java_util_Map(charsetsMap);
};
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTransferer, "DataFlavorComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.datatransfer.DataTransferer','.IndexedComparator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['flavorToFormatMap','java.util.Map','charsetComparator','sun.awt.datatransfer.DataTransferer.CharsetComparator']]
,['O',['exactTypes','java.util.Map','+primaryTypes','+nonTextRepresentations','+textTypes','+decodedTextRepresentations','+encodedTextRepresentations','UNKNOWN_OBJECT_LOSES','Integer','+UNKNOWN_OBJECT_WINS','UNKNOWN_OBJECT_LOSES_L','Long','+UNKNOWN_OBJECT_WINS_L']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (order) {
;C$.superclazz.c$$Z.apply(this,[order]);C$.$init$.apply(this);
this.charsetComparator=Clazz.new_($I$(7,1).c$$Z,[order]);
this.flavorToFormatMap=$I$(3).EMPTY_MAP;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (map) {
C$.c$$java_util_Map$Z.apply(this, [map, true]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$Z',  function (map, order) {
;C$.superclazz.c$$Z.apply(this,[order]);C$.$init$.apply(this);
this.charsetComparator=Clazz.new_($I$(7,1).c$$Z,[order]);
var hashMap=Clazz.new_([map.size$()],$I$(1,1).c$$I);
hashMap.putAll$java_util_Map(map);
this.flavorToFormatMap=$I$(3).unmodifiableMap$java_util_Map(hashMap);
}, 1);

Clazz.newMeth(C$, 'compare$O$O',  function (obj1, obj2) {
var flavor1=null;
var flavor2=null;
if (this.order == true ) {
flavor1=obj1;
flavor2=obj2;
} else {
flavor1=obj2;
flavor2=obj1;
}if (flavor1.equals$java_awt_datatransfer_DataFlavor(flavor2)) {
return 0;
}var comp=0;
var primaryType1=flavor1.getPrimaryType$();
var subType1=flavor1.getSubType$();
var mimeType1=primaryType1 + "/" + subType1 ;
var class1=flavor1.getRepresentationClass$();
var primaryType2=flavor2.getPrimaryType$();
var subType2=flavor2.getSubType$();
var mimeType2=primaryType2 + "/" + subType2 ;
var class2=flavor2.getRepresentationClass$();
if (flavor1.isFlavorTextType$() && flavor2.isFlavorTextType$() ) {
comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.textTypes, mimeType1, mimeType2, C$.UNKNOWN_OBJECT_LOSES);
if (comp != 0) {
return comp;
}if ($I$(2).doesSubtypeSupportCharset$java_awt_datatransfer_DataFlavor(flavor1)) {
comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.decodedTextRepresentations, class1, class2, C$.UNKNOWN_OBJECT_LOSES);
if (comp != 0) {
return comp;
}comp=this.charsetComparator.compareCharsets$S$S($I$(2).getTextCharset$java_awt_datatransfer_DataFlavor(flavor1), $I$(2).getTextCharset$java_awt_datatransfer_DataFlavor(flavor2));
if (comp != 0) {
return comp;
}}comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.encodedTextRepresentations, class1, class2, C$.UNKNOWN_OBJECT_LOSES);
if (comp != 0) {
return comp;
}} else {
comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.primaryTypes, primaryType1, primaryType2, C$.UNKNOWN_OBJECT_LOSES);
if (comp != 0) {
return comp;
}comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.exactTypes, mimeType1, mimeType2, C$.UNKNOWN_OBJECT_WINS);
if (comp != 0) {
return comp;
}comp=$I$(4).compareIndices$java_util_Map$O$O$Integer(C$.nonTextRepresentations, class1, class2, C$.UNKNOWN_OBJECT_LOSES);
if (comp != 0) {
return comp;
}}return $I$(4).compareLongs$java_util_Map$O$O$Long(this.flavorToFormatMap, flavor1, flavor2, C$.UNKNOWN_OBJECT_LOSES_L);
});

C$.$static$=function(){C$.$static$=0;
C$.UNKNOWN_OBJECT_LOSES=Integer.valueOf$I(-2147483648);
C$.UNKNOWN_OBJECT_WINS=Integer.valueOf$I(2147483647);
C$.UNKNOWN_OBJECT_LOSES_L=Long.valueOf$J([0,549755813888,-1]);
C$.UNKNOWN_OBJECT_WINS_L=Long.valueOf$J([16777215,549755813887,1]);
{
{
var exactTypesMap=Clazz.new_($I$(1,1).c$$I$F,[4, 1.0]);
exactTypesMap.put$O$O("application/x-java-file-list", Integer.valueOf$I(0));
C$.exactTypes=$I$(3).unmodifiableMap$java_util_Map(exactTypesMap);
}{
var primaryTypesMap=Clazz.new_($I$(1,1).c$$I$F,[1, 1.0]);
primaryTypesMap.put$O$O("application", Integer.valueOf$I(0));
C$.primaryTypes=$I$(3).unmodifiableMap$java_util_Map(primaryTypesMap);
}{
var nonTextRepresentationsMap=Clazz.new_($I$(1,1).c$$I$F,[3, 1.0]);
nonTextRepresentationsMap.put$O$O(Clazz.getClass($I$(5)), Integer.valueOf$I(0));
C$.nonTextRepresentations=$I$(3).unmodifiableMap$java_util_Map(nonTextRepresentationsMap);
}{
var textTypesMap=Clazz.new_($I$(1,1).c$$I$F,[16, 1.0]);
textTypesMap.put$O$O("text/plain", Integer.valueOf$I(0));
textTypesMap.put$O$O("application/x-java-serialized-object", Integer.valueOf$I(1));
textTypesMap.put$O$O("text/calendar", Integer.valueOf$I(2));
textTypesMap.put$O$O("text/css", Integer.valueOf$I(3));
textTypesMap.put$O$O("text/directory", Integer.valueOf$I(4));
textTypesMap.put$O$O("text/parityfec", Integer.valueOf$I(5));
textTypesMap.put$O$O("text/rfc822-headers", Integer.valueOf$I(6));
textTypesMap.put$O$O("text/t140", Integer.valueOf$I(7));
textTypesMap.put$O$O("text/tab-separated-values", Integer.valueOf$I(8));
textTypesMap.put$O$O("text/uri-list", Integer.valueOf$I(9));
textTypesMap.put$O$O("text/richtext", Integer.valueOf$I(10));
textTypesMap.put$O$O("text/enriched", Integer.valueOf$I(11));
textTypesMap.put$O$O("text/rtf", Integer.valueOf$I(12));
textTypesMap.put$O$O("text/html", Integer.valueOf$I(13));
textTypesMap.put$O$O("text/xml", Integer.valueOf$I(14));
textTypesMap.put$O$O("text/sgml", Integer.valueOf$I(15));
C$.textTypes=$I$(3).unmodifiableMap$java_util_Map(textTypesMap);
}{
var decodedTextRepresentationsMap=Clazz.new_($I$(1,1).c$$I$F,[4, 1.0]);
decodedTextRepresentationsMap.put$O$O($I$(2).charArrayClass, Integer.valueOf$I(0));
decodedTextRepresentationsMap.put$O$O(Clazz.getClass(String), Integer.valueOf$I(2));
decodedTextRepresentationsMap.put$O$O(Clazz.getClass($I$(6)), Integer.valueOf$I(3));
C$.decodedTextRepresentations=$I$(3).unmodifiableMap$java_util_Map(decodedTextRepresentationsMap);
}{
var encodedTextRepresentationsMap=Clazz.new_($I$(1,1).c$$I$F,[3, 1.0]);
encodedTextRepresentationsMap.put$O$O($I$(2).byteArrayClass, Integer.valueOf$I(0));
encodedTextRepresentationsMap.put$O$O(Clazz.getClass($I$(5)), Integer.valueOf$I(2));
C$.encodedTextRepresentations=$I$(3).unmodifiableMap$java_util_Map(encodedTextRepresentationsMap);
}};
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTransferer, "IndexOrderComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.datatransfer.DataTransferer','.IndexedComparator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['indexMap','java.util.Map']]
,['O',['FALLBACK_INDEX','Integer']]]

Clazz.newMeth(C$, 'c$$java_util_Map',  function (indexMap) {
;C$.superclazz.c$$Z.apply(this,[true]);C$.$init$.apply(this);
this.indexMap=indexMap;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$Z',  function (indexMap, order) {
;C$.superclazz.c$$Z.apply(this,[order]);C$.$init$.apply(this);
this.indexMap=indexMap;
}, 1);

Clazz.newMeth(C$, 'compare$O$O',  function (obj1, obj2) {
if (this.order == false ) {
return -$I$(4).compareIndices$java_util_Map$O$O$Integer(this.indexMap, obj1, obj2, C$.FALLBACK_INDEX);
} else {
return $I$(4).compareIndices$java_util_Map$O$O$Integer(this.indexMap, obj1, obj2, C$.FALLBACK_INDEX);
}});

C$.$static$=function(){C$.$static$=0;
C$.FALLBACK_INDEX=Integer.valueOf$I(-2147483648);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
