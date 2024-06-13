(function(){var P$=Clazz.newPackage("java.awt.datatransfer"),p$1={},I$=[[0,'java.util.HashMap','java.util.HashSet','Thread','java.awt.datatransfer.MimeType','sun.awt.datatransfer.DataTransferer','java.awt.datatransfer.DataFlavor','StringBuilder','java.util.ArrayList','java.util.LinkedList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SystemFlavorMap", null, null, ['java.awt.datatransfer.FlavorMap', 'java.awt.datatransfer.FlavorTable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nativeToFlavor=Clazz.new_($I$(1,1));
this.flavorToNative=Clazz.new_($I$(1,1));
this.getNativesForFlavorCache=Clazz.new_($I$(1,1));
this.getFlavorsForNativeCache=Clazz.new_($I$(1,1));
this.disabledMappingGenerationKeys=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['nativeToFlavor','java.util.Map','+flavorToNative','+getNativesForFlavorCache','+getFlavorsForNativeCache','disabledMappingGenerationKeys','java.util.Set']]
,['S',['JavaMIME'],'O',['flavorMaps','java.util.HashMap','UNICODE_TEXT_CLASSES','String[]','+ENCODED_TEXT_CLASSES']]]

Clazz.newMeth(C$, 'getDefaultFlavorMap$',  function () {
var contextClassLoader=$I$(3).currentThread$().getContextClassLoader$();
if (contextClassLoader == null ) {
contextClassLoader=ClassLoader.getSystemClassLoader$();
}var fm;
{
fm=C$.flavorMaps.get$O(contextClassLoader);
if (fm == null ) {
fm=Clazz.new_(C$);
C$.flavorMaps.put$O$O(contextClassLoader, fm);
}}return fm;
}, 1);

Clazz.newMeth(C$, 'parseAndStoreReader$java_io_BufferedReader',  function ($in) {
while (true){
var line=$in.readLine$();
if (line == null ) {
return;
}if (line.length$() > 0) {
var firstChar=line.charAt$I(0);
if (firstChar != "#" && firstChar != "!" ) {
while (p$1.continueLine$S.apply(this, [line])){
var nextLine=$in.readLine$();
if (nextLine == null ) {
nextLine=("");
}var loppedLine=line.substring$I$I(0, line.length$() - 1);
var startIndex=0;
for (; startIndex < nextLine.length$(); startIndex++) {
if (" \t\r\n\f".indexOf$I(nextLine.charAt$I(startIndex)) == -1) {
break;
}}
nextLine=nextLine.substring$I$I(startIndex, nextLine.length$());
line= String.instantialize(loppedLine + nextLine);
}
var len=line.length$();
var keyStart=0;
for (; keyStart < len; keyStart++) {
if (" \t\r\n\f".indexOf$I(line.charAt$I(keyStart)) == -1) {
break;
}}
if (keyStart == len) {
continue;
}var separatorIndex=keyStart;
for (; separatorIndex < len; separatorIndex++) {
var currentChar=line.charAt$I(separatorIndex);
if (currentChar == "\\") {
++separatorIndex;
} else if ("=: \t\r\n\f".indexOf$I(currentChar) != -1) {
break;
}}
var valueIndex=separatorIndex;
for (; valueIndex < len; valueIndex++) {
if (" \t\r\n\f".indexOf$I(line.charAt$I(valueIndex)) == -1) {
break;
}}
if (valueIndex < len) {
if ("=:".indexOf$I(line.charAt$I(valueIndex)) != -1) {
++valueIndex;
}}while (valueIndex < len){
if (" \t\r\n\f".indexOf$I(line.charAt$I(valueIndex)) == -1) {
break;
}++valueIndex;
}
var key=line.substring$I$I(keyStart, separatorIndex);
var value=(separatorIndex < len) ? line.substring$I$I(valueIndex, len) : "";
key=p$1.loadConvert$S.apply(this, [key]);
value=p$1.loadConvert$S.apply(this, [value]);
try {
var mime=Clazz.new_($I$(4,1).c$$S,[value]);
if ("text".equals$O(mime.getPrimaryType$())) {
var charset=mime.getParameter$S("charset");
if ($I$(5,"doesSubtypeSupportCharset$S$S",[mime.getSubType$(), charset])) {
var transferer=$I$(5).getInstance$();
if (transferer != null ) {
transferer.registerTextFlavorProperties$S$S$S$S(key, charset, mime.getParameter$S("eoln"), mime.getParameter$S("terminators"));
}}mime.removeParameter$S("charset");
mime.removeParameter$S("class");
mime.removeParameter$S("eoln");
mime.removeParameter$S("terminators");
value=mime.toString();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.datatransfer.MimeTypeParseException")){
e.printStackTrace$();
continue;
} else {
throw e;
}
}
var flavor;
try {
flavor=Clazz.new_($I$(6,1).c$$S,[value]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
flavor=Clazz.new_($I$(6,1).c$$S$S,[value, null]);
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
ee.printStackTrace$();
continue;
} else {
throw ee;
}
}
} else {
throw e;
}
}
if ("text".equals$O(flavor.getPrimaryType$())) {
p$1.store$O$O$java_util_Map.apply(this, [value, key, this.flavorToNative]);
p$1.store$O$O$java_util_Map.apply(this, [key, value, this.nativeToFlavor]);
} else {
p$1.store$O$O$java_util_Map.apply(this, [flavor, key, this.flavorToNative]);
p$1.store$O$O$java_util_Map.apply(this, [key, flavor, this.nativeToFlavor]);
}}}}
}, p$1);

Clazz.newMeth(C$, 'continueLine$S',  function (line) {
var slashCount=0;
var index=line.length$() - 1;
while ((index >= 0) && (line.charAt$I(index--) == "\\") ){
++slashCount;
}
return (slashCount % 2 == 1);
}, p$1);

Clazz.newMeth(C$, 'loadConvert$S',  function (theString) {
var aChar;
var len=theString.length$();
var outBuffer=Clazz.new_($I$(7,1).c$$I,[len]);
for (var x=0; x < len; ) {
aChar=theString.charAt$I(x++);
if (aChar == "\\") {
aChar=theString.charAt$I(x++);
if (aChar == "u") {
var value=0;
for (var i=0; i < 4; i++) {
aChar=theString.charAt$I(x++);
switch (aChar.$c()) {
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
{
value=(value << 4) + aChar.$c() - 48;
break;
}case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
{
value=(value << 4) + 10 + aChar.$c()  - 97;
break;
}case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
{
value=(value << 4) + 10 + aChar.$c()  - 65;
break;
}default:
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Malformed \\uxxxx encoding."]);
}}
}
outBuffer.append$C(String.fromCharCode(value));
} else {
if (aChar == "t") {
aChar="\t";
} else if (aChar == "r") {
aChar="\r";
} else if (aChar == "n") {
aChar="\n";
} else if (aChar == "f") {
aChar="\f";
}outBuffer.append$C(aChar);
}} else {
outBuffer.append$C(aChar);
}}
return outBuffer.toString();
}, p$1);

Clazz.newMeth(C$, 'store$O$O$java_util_Map',  function (hashed, listed, map) {
var list=map.get$O(hashed);
if (list == null ) {
list=Clazz.new_($I$(8,1).c$$I,[1]);
map.put$O$O(hashed, list);
}if (!list.contains$O(listed)) {
list.add$O(listed);
}}, p$1);

Clazz.newMeth(C$, 'nativeToFlavorLookup$S',  function (nat) {
var flavors=this.nativeToFlavor.get$O(nat);
if (nat != null  && !this.disabledMappingGenerationKeys.contains$O(nat) ) {
var transferer=$I$(5).getInstance$();
if (transferer != null ) {
var platformFlavors=transferer.getPlatformMappingsForNative$S(nat);
if (!platformFlavors.isEmpty$()) {
if (flavors != null ) {
platformFlavors.removeAll$java_util_Collection(Clazz.new_($I$(2,1).c$$java_util_Collection,[flavors]));
platformFlavors.addAll$java_util_Collection(flavors);
}flavors=platformFlavors;
}}}if (flavors == null  && C$.isJavaMIMEType$S(nat) ) {
var decoded=C$.decodeJavaMIMEType$S(nat);
var flavor=null;
try {
flavor=Clazz.new_($I$(6,1).c$$S,[decoded]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception \"" + e.getClass$().getName$() + ": " + e.getMessage$() + "\"while constructing DataFlavor for: " + decoded );
} else {
throw e;
}
}
if (flavor != null ) {
flavors=Clazz.new_($I$(8,1).c$$I,[1]);
this.nativeToFlavor.put$O$O(nat, flavors);
flavors.add$O(flavor);
this.getFlavorsForNativeCache.remove$O(nat);
this.getFlavorsForNativeCache.remove$O(null);
var natives=this.flavorToNative.get$O(flavor);
if (natives == null ) {
natives=Clazz.new_($I$(8,1).c$$I,[1]);
this.flavorToNative.put$O$O(flavor, natives);
}natives.add$O(nat);
this.getNativesForFlavorCache.remove$O(flavor);
this.getNativesForFlavorCache.remove$O(null);
}}return (flavors != null ) ? flavors : Clazz.new_($I$(8,1).c$$I,[0]);
}, p$1);

Clazz.newMeth(C$, 'flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z',  function (flav, synthesize) {
var natives=this.flavorToNative.get$O(flav);
if (flav != null  && !this.disabledMappingGenerationKeys.contains$O(flav) ) {
var transferer=$I$(5).getInstance$();
if (transferer != null ) {
var platformNatives=transferer.getPlatformMappingsForFlavor$java_awt_datatransfer_DataFlavor(flav);
if (!platformNatives.isEmpty$()) {
if (natives != null ) {
platformNatives.removeAll$java_util_Collection(Clazz.new_($I$(2,1).c$$java_util_Collection,[natives]));
platformNatives.addAll$java_util_Collection(natives);
}natives=platformNatives;
}}}if (natives == null ) {
if (synthesize) {
var encoded=C$.encodeDataFlavor$java_awt_datatransfer_DataFlavor(flav);
natives=Clazz.new_($I$(8,1).c$$I,[1]);
this.flavorToNative.put$O$O(flav, natives);
natives.add$O(encoded);
this.getNativesForFlavorCache.remove$O(flav);
this.getNativesForFlavorCache.remove$O(null);
var flavors=this.nativeToFlavor.get$O(encoded);
if (flavors == null ) {
flavors=Clazz.new_($I$(8,1).c$$I,[1]);
this.nativeToFlavor.put$O$O(encoded, flavors);
}flavors.add$O(flav);
this.getFlavorsForNativeCache.remove$O(encoded);
this.getFlavorsForNativeCache.remove$O(null);
} else {
natives=Clazz.new_($I$(8,1).c$$I,[0]);
}}return natives;
}, p$1);

Clazz.newMeth(C$, 'getNativesForFlavor$java_awt_datatransfer_DataFlavor',  function (flav) {
var retval=null;
var refval=this.getNativesForFlavorCache.get$O(flav);
if (retval != null ) {
return Clazz.new_($I$(8,1).c$$java_util_Collection,[retval]);
}if (flav == null ) {
retval=Clazz.new_([this.nativeToFlavor.keySet$()],$I$(8,1).c$$java_util_Collection);
} else if (this.disabledMappingGenerationKeys.contains$O(flav)) {
retval=p$1.flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z.apply(this, [flav, !true]);
} else if ($I$(5).isFlavorCharsetTextType$java_awt_datatransfer_DataFlavor(flav)) {
if ("text".equals$O(flav.getPrimaryType$())) {
retval=this.flavorToNative.get$O(flav.mimeType.getBaseType$());
if (retval != null ) {
retval=Clazz.new_($I$(8,1).c$$java_util_Collection,[retval]);
}}var textPlainList=this.flavorToNative.get$O("text/plain");
if (textPlainList != null  && !textPlainList.isEmpty$() ) {
textPlainList=Clazz.new_($I$(8,1).c$$java_util_Collection,[textPlainList]);
if (retval != null  && !retval.isEmpty$() ) {
textPlainList.removeAll$java_util_Collection(Clazz.new_($I$(2,1).c$$java_util_Collection,[retval]));
retval.addAll$java_util_Collection(textPlainList);
} else {
retval=textPlainList;
}}if (retval == null  || retval.isEmpty$() ) {
retval=p$1.flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z.apply(this, [flav, true]);
} else {
var explicitList=p$1.flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z.apply(this, [flav, !true]);
if (!explicitList.isEmpty$()) {
explicitList=Clazz.new_($I$(8,1).c$$java_util_Collection,[explicitList]);
explicitList.removeAll$java_util_Collection(Clazz.new_($I$(2,1).c$$java_util_Collection,[retval]));
retval.addAll$java_util_Collection(explicitList);
}}} else if ($I$(5).isFlavorNoncharsetTextType$java_awt_datatransfer_DataFlavor(flav)) {
retval=this.flavorToNative.get$O(flav.mimeType.getBaseType$());
if (retval == null  || retval.isEmpty$() ) {
retval=p$1.flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z.apply(this, [flav, true]);
} else {
var explicitList=p$1.flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z.apply(this, [flav, !true]);
if (!explicitList.isEmpty$()) {
retval=Clazz.new_($I$(8,1).c$$java_util_Collection,[retval]);
explicitList=Clazz.new_($I$(8,1).c$$java_util_Collection,[explicitList]);
explicitList.removeAll$java_util_Collection(Clazz.new_($I$(2,1).c$$java_util_Collection,[retval]));
retval.addAll$java_util_Collection(explicitList);
}}} else {
retval=p$1.flavorToNativeLookup$java_awt_datatransfer_DataFlavor$Z.apply(this, [flav, true]);
}this.getNativesForFlavorCache.put$O$O(flav, retval);
return Clazz.new_($I$(8,1).c$$java_util_Collection,[retval]);
});

Clazz.newMeth(C$, 'getFlavorsForNative$S',  function (nat) {
var rval=this.getFlavorsForNativeCache.get$O(nat);
if (rval != null ) {
return rval.clone$();
}var retval=Clazz.new_($I$(9,1));
if (nat == null ) {
var natives=this.getNativesForFlavor$java_awt_datatransfer_DataFlavor(null);
var dups=Clazz.new_([natives.size$()],$I$(2,1).c$$I);
for (var natives_iter=natives.iterator$(); natives_iter.hasNext$(); ) {
var flavors=this.getFlavorsForNative$S(natives_iter.next$());
for (var flavors_iter=flavors.iterator$(); flavors_iter.hasNext$(); ) {
var flavor=flavors_iter.next$();
if (dups.add$O(flavor)) {
retval.add$O(flavor);
}}
}
} else {
var flavors=p$1.nativeToFlavorLookup$S.apply(this, [nat]);
if (this.disabledMappingGenerationKeys.contains$O(nat)) {
return flavors;
}var dups=Clazz.new_([flavors.size$()],$I$(2,1).c$$I);
var flavorsAndbaseTypes=p$1.nativeToFlavorLookup$S.apply(this, [nat]);
for (var flavorsAndbaseTypes_iter=flavorsAndbaseTypes.iterator$(); flavorsAndbaseTypes_iter.hasNext$(); ) {
var value=flavorsAndbaseTypes_iter.next$();
if (Clazz.instanceOf(value, "java.lang.String")) {
var baseType=value;
var subType=null;
try {
var mimeType=Clazz.new_($I$(4,1).c$$S,[baseType]);
subType=mimeType.getSubType$();
} catch (mtpe) {
if (Clazz.exceptionOf(mtpe,"java.awt.datatransfer.MimeTypeParseException")){
Clazz.assert(C$, this, function(){return (false)});
} else {
throw mtpe;
}
}
if ($I$(5).doesSubtypeSupportCharset$S$S(subType, null)) {
if ("text/plain".equals$O(baseType) && dups.add$O($I$(6).stringFlavor) ) {
retval.add$O($I$(6).stringFlavor);
}for (var i=0; i < C$.UNICODE_TEXT_CLASSES.length; i++) {
var toAdd=null;
try {
toAdd=Clazz.new_([baseType + ";charset=Unicode;class=" + C$.UNICODE_TEXT_CLASSES[i] ],$I$(6,1).c$$S);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"ClassNotFoundException")){
} else {
throw cannotHappen;
}
}
if (dups.add$O(toAdd)) {
retval.add$O(toAdd);
}}
for (var charset_iter=$I$(5).standardEncodings$(); charset_iter.hasNext$(); ) {
var charset=charset_iter.next$();
for (var i=0; i < C$.ENCODED_TEXT_CLASSES.length; i++) {
var toAdd=null;
try {
toAdd=Clazz.new_([baseType + ";charset=" + charset + ";class=" + C$.ENCODED_TEXT_CLASSES[i] ],$I$(6,1).c$$S);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"ClassNotFoundException")){
} else {
throw cannotHappen;
}
}
if (toAdd.equals$java_awt_datatransfer_DataFlavor($I$(6).plainTextFlavor)) {
toAdd=$I$(6).plainTextFlavor;
}if (dups.add$O(toAdd)) {
retval.add$O(toAdd);
}}
}
if ("text/plain".equals$O(baseType) && dups.add$O($I$(6).plainTextFlavor) ) {
retval.add$O($I$(6).plainTextFlavor);
}} else {
for (var i=0; i < C$.ENCODED_TEXT_CLASSES.length; i++) {
var toAdd=null;
try {
toAdd=Clazz.new_([baseType + ";class=" + C$.ENCODED_TEXT_CLASSES[i] ],$I$(6,1).c$$S);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"ClassNotFoundException")){
} else {
throw cannotHappen;
}
}
if (dups.add$O(toAdd)) {
retval.add$O(toAdd);
}}
}} else {
var flavor=value;
if (dups.add$O(flavor)) {
retval.add$O(flavor);
}}}
}var arrayList=Clazz.new_($I$(8,1).c$$java_util_Collection,[retval]);
this.getFlavorsForNativeCache.put$O$O(nat, arrayList);
return arrayList.clone$();
});

Clazz.newMeth(C$, 'getNativesForFlavors$java_awt_datatransfer_DataFlavorA',  function (flavors) {
if (flavors == null ) {
var flavor_list=this.getFlavorsForNative$S(null);
flavors=Clazz.array($I$(6), [flavor_list.size$()]);
flavor_list.toArray$OA(flavors);
}var retval=Clazz.new_($I$(1,1).c$$I$F,[flavors.length, 1.0]);
for (var i=0; i < flavors.length; i++) {
var natives=this.getNativesForFlavor$java_awt_datatransfer_DataFlavor(flavors[i]);
var nat=(natives.isEmpty$()) ? null : natives.get$I(0);
retval.put$O$O(flavors[i], nat);
}
return retval;
});

Clazz.newMeth(C$, 'getFlavorsForNatives$SA',  function (natives) {
if (natives == null ) {
var native_list=this.getNativesForFlavor$java_awt_datatransfer_DataFlavor(null);
natives=Clazz.array(String, [native_list.size$()]);
native_list.toArray$OA(natives);
}var retval=Clazz.new_($I$(1,1).c$$I$F,[natives.length, 1.0]);
for (var i=0; i < natives.length; i++) {
var flavors=this.getFlavorsForNative$S(natives[i]);
var flav=(flavors.isEmpty$()) ? null : flavors.get$I(0);
retval.put$O$O(natives[i], flav);
}
return retval;
});

Clazz.newMeth(C$, 'addUnencodedNativeForFlavor$java_awt_datatransfer_DataFlavor$S',  function (flav, nat) {
if (flav == null  || nat == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null arguments not permitted"]);
}var natives=this.flavorToNative.get$O(flav);
if (natives == null ) {
natives=Clazz.new_($I$(8,1).c$$I,[1]);
this.flavorToNative.put$O$O(flav, natives);
} else if (natives.contains$O(nat)) {
return;
}natives.add$O(nat);
this.getNativesForFlavorCache.remove$O(flav);
this.getNativesForFlavorCache.remove$O(null);
});

Clazz.newMeth(C$, 'setNativesForFlavor$java_awt_datatransfer_DataFlavor$SA',  function (flav, natives) {
if (flav == null  || natives == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null arguments not permitted"]);
}this.flavorToNative.remove$O(flav);
for (var i=0; i < natives.length; i++) {
this.addUnencodedNativeForFlavor$java_awt_datatransfer_DataFlavor$S(flav, natives[i]);
}
this.disabledMappingGenerationKeys.add$O(flav);
this.getNativesForFlavorCache.remove$O(flav);
this.getNativesForFlavorCache.remove$O(null);
});

Clazz.newMeth(C$, 'addFlavorForUnencodedNative$S$java_awt_datatransfer_DataFlavor',  function (nat, flav) {
if (nat == null  || flav == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null arguments not permitted"]);
}var flavors=this.nativeToFlavor.get$O(nat);
if (flavors == null ) {
flavors=Clazz.new_($I$(8,1).c$$I,[1]);
this.nativeToFlavor.put$O$O(nat, flavors);
} else if (flavors.contains$O(flav)) {
return;
}flavors.add$O(flav);
this.getFlavorsForNativeCache.remove$O(nat);
this.getFlavorsForNativeCache.remove$O(null);
});

Clazz.newMeth(C$, 'setFlavorsForNative$S$java_awt_datatransfer_DataFlavorA',  function (nat, flavors) {
if (nat == null  || flavors == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null arguments not permitted"]);
}this.nativeToFlavor.remove$O(nat);
for (var i=0; i < flavors.length; i++) {
this.addFlavorForUnencodedNative$S$java_awt_datatransfer_DataFlavor(nat, flavors[i]);
}
this.disabledMappingGenerationKeys.add$O(nat);
this.getFlavorsForNativeCache.remove$O(nat);
this.getFlavorsForNativeCache.remove$O(null);
});

Clazz.newMeth(C$, 'encodeJavaMIMEType$S',  function (mimeType) {
return (mimeType != null ) ? C$.JavaMIME + mimeType : null;
}, 1);

Clazz.newMeth(C$, 'encodeDataFlavor$java_awt_datatransfer_DataFlavor',  function (flav) {
return (flav != null ) ? C$.encodeJavaMIMEType$S(flav.getMimeType$()) : null;
}, 1);

Clazz.newMeth(C$, 'isJavaMIMEType$S',  function (str) {
return (str != null  && str.startsWith$S$I(C$.JavaMIME, 0) );
}, 1);

Clazz.newMeth(C$, 'decodeJavaMIMEType$S',  function (nat) {
return (C$.isJavaMIMEType$S(nat)) ? nat.substring$I$I(C$.JavaMIME.length$(), nat.length$()).trim$() : null;
}, 1);

Clazz.newMeth(C$, 'decodeDataFlavor$S',  function (nat) {
var retval_str=C$.decodeJavaMIMEType$S(nat);
return (retval_str != null ) ? Clazz.new_($I$(6,1).c$$S,[retval_str]) : null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.JavaMIME="JAVA_DATAFLAVOR:";
C$.flavorMaps=Clazz.new_($I$(1,1));
C$.UNICODE_TEXT_CLASSES=Clazz.array(String, -1, ["java.io.Reader", "java.lang.String", "java.nio.CharBuffer", "\"[C\""]);
C$.ENCODED_TEXT_CLASSES=Clazz.array(String, -1, ["java.io.InputStream", "java.nio.ByteBuffer", "\"[B\""]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
