(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GIFMetadata", null, 'javax.imageio.metadata.IIOMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'fatal$org_w3c_dom_Node$S',  function (node, reason) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[reason, node]);
}, 1);

Clazz.newMeth(C$, 'getStringAttribute$org_w3c_dom_Node$S$S$Z$SA',  function (node, name, defaultValue, required, range) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Required attribute " + name + " not present!" );
}}var value=attr.getNodeValue$();
if (range != null ) {
if (value == null ) {
C$.fatal$org_w3c_dom_Node$S(node, "Null value for " + node.getNodeName$() + " attribute " + name + "!" );
}var validValue=false;
var len=range.length;
for (var i=0; i < len; i++) {
if (value.equals$O(range[i])) {
validValue=true;
break;
}}
if (!validValue) {
C$.fatal$org_w3c_dom_Node$S(node, "Bad value for " + node.getNodeName$() + " attribute " + name + "!" );
}}return value;
}, 1);

Clazz.newMeth(C$, 'getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I',  function (node, name, defaultValue, required, bounded, min, max) {
var value=C$.getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(node, name, null, required, null);
if (value == null  || "".equals$O(value) ) {
return defaultValue;
}var intValue=defaultValue;
try {
intValue=Integer.parseInt$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
C$.fatal$org_w3c_dom_Node$S(node, "Bad value for " + node.getNodeName$() + " attribute " + name + "!" );
} else {
throw e;
}
}
if (bounded && (intValue < min || intValue > max ) ) {
C$.fatal$org_w3c_dom_Node$S(node, "Bad value for " + node.getNodeName$() + " attribute " + name + "!" );
}return intValue;
}, 1);

Clazz.newMeth(C$, 'getFloatAttribute$org_w3c_dom_Node$S$F$Z',  function (node, name, defaultValue, required) {
var value=C$.getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(node, name, null, required, null);
if (value == null ) {
return defaultValue;
}return Float.parseFloat$S(value);
}, 1);

Clazz.newMeth(C$, 'getIntAttribute$org_w3c_dom_Node$S$Z$I$I',  function (node, name, bounded, min, max) {
return C$.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, name, -1, true, bounded, min, max);
}, 1);

Clazz.newMeth(C$, 'getFloatAttribute$org_w3c_dom_Node$S',  function (node, name) {
return C$.getFloatAttribute$org_w3c_dom_Node$S$F$Z(node, name, -1.0, true);
}, 1);

Clazz.newMeth(C$, 'getBooleanAttribute$org_w3c_dom_Node$S$Z$Z',  function (node, name, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Required attribute " + name + " not present!" );
}}var value=attr.getNodeValue$();
if (value.equals$O("TRUE") || value.equals$O("true") ) {
return true;
} else if (value.equals$O("FALSE") || value.equals$O("false") ) {
return false;
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Attribute " + name + " must be 'TRUE' or 'FALSE'!" );
return false;
}}, 1);

Clazz.newMeth(C$, 'getBooleanAttribute$org_w3c_dom_Node$S',  function (node, name) {
return C$.getBooleanAttribute$org_w3c_dom_Node$S$Z$Z(node, name, false, true);
}, 1);

Clazz.newMeth(C$, 'getEnumeratedAttribute$org_w3c_dom_Node$S$SA$I$Z',  function (node, name, legalNames, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Required attribute " + name + " not present!" );
}}var value=attr.getNodeValue$();
for (var i=0; i < legalNames.length; i++) {
if (value.equals$O(legalNames[i])) {
return i;
}}
C$.fatal$org_w3c_dom_Node$S(node, "Illegal value for attribute " + name + "!" );
return -1;
}, 1);

Clazz.newMeth(C$, 'getEnumeratedAttribute$org_w3c_dom_Node$S$SA',  function (node, name, legalNames) {
return C$.getEnumeratedAttribute$org_w3c_dom_Node$S$SA$I$Z(node, name, legalNames, -1, true);
}, 1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S$S$Z',  function (node, name, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Required attribute " + name + " not present!" );
}}return attr.getNodeValue$();
}, 1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S',  function (node, name) {
return C$.getAttribute$org_w3c_dom_Node$S$S$Z(node, name, null, true);
}, 1);

Clazz.newMeth(C$, 'c$$Z$S$S$SA$SA',  function (standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames) {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node',  function (formatName, root) {
if (formatName.equals$O(this.nativeMetadataFormatName)) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}this.mergeNativeTree$org_w3c_dom_Node(root);
} else if (formatName.equals$O("javax_imageio_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}this.mergeStandardTree$org_w3c_dom_Node(root);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'getColorTable$org_w3c_dom_Node$S$Z$I',  function (colorTableNode, entryNodeName, lengthExpected, expectedLength) {
var red=Clazz.array(Byte.TYPE, [256]);
var green=Clazz.array(Byte.TYPE, [256]);
var blue=Clazz.array(Byte.TYPE, [256]);
var maxIndex=-1;
var entry=colorTableNode.getFirstChild$();
if (entry == null ) {
C$.fatal$org_w3c_dom_Node$S(colorTableNode, "Palette has no entries!");
}while (entry != null ){
if (!entry.getNodeName$().equals$O(entryNodeName)) {
C$.fatal$org_w3c_dom_Node$S(colorTableNode, "Only a " + entryNodeName + " may be a child of a " + entry.getNodeName$() + "!" );
}var index=C$.getIntAttribute$org_w3c_dom_Node$S$Z$I$I(entry, "index", true, 0, 255);
if (index > maxIndex) {
maxIndex=index;
}red[index]=(C$.getIntAttribute$org_w3c_dom_Node$S$Z$I$I(entry, "red", true, 0, 255)|0);
green[index]=(C$.getIntAttribute$org_w3c_dom_Node$S$Z$I$I(entry, "green", true, 0, 255)|0);
blue[index]=(C$.getIntAttribute$org_w3c_dom_Node$S$Z$I$I(entry, "blue", true, 0, 255)|0);
entry=entry.getNextSibling$();
}
var numEntries=maxIndex + 1;
if (lengthExpected && numEntries != expectedLength ) {
C$.fatal$org_w3c_dom_Node$S(colorTableNode, "Unexpected length for palette!");
}var colorTable=Clazz.array(Byte.TYPE, [3 * numEntries]);
for (var i=0, j=0; i < numEntries; i++) {
colorTable[j++]=red[i];
colorTable[j++]=green[i];
colorTable[j++]=blue[i];
}
return colorTable;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
