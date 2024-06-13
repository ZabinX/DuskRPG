(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'java.util.ArrayList','javax.imageio.plugins.jpeg.JPEGQTable','javax.imageio.plugins.jpeg.JPEGHuffmanTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$resourceBaseName=this.getClass$().getName$() + "Resources";
},1);

C$.$fields$=[['S',['$resourceBaseName']]]

Clazz.newMeth(C$, 'c$$S$I',  function (formatName, childPolicy) {
;C$.superclazz.c$$S$I.apply(this,[formatName, childPolicy]);C$.$init$.apply(this);
this.setResourceBaseName$S(this.$resourceBaseName);
}, 1);

Clazz.newMeth(C$, 'addStreamElements$S',  function (parentName) {
this.addElement$S$S$I$I("dqt", parentName, 1, 4);
this.addElement$S$S$I("dqtable", "dqt", 0);
this.addAttribute$S$S$I$Z$S("dqtable", "elementPrecision", 2, false, "0");
var tabids=Clazz.new_($I$(1,1));
tabids.add$O("0");
tabids.add$O("1");
tabids.add$O("2");
tabids.add$O("3");
this.addAttribute$S$S$I$Z$S$java_util_List("dqtable", "qtableId", 2, true, null, tabids);
this.addObjectValue$S$Class$Z$O("dqtable", Clazz.getClass($I$(2)), true, null);
this.addElement$S$S$I$I("dht", parentName, 1, 4);
this.addElement$S$S$I("dhtable", "dht", 0);
var classes=Clazz.new_($I$(1,1));
classes.add$O("0");
classes.add$O("1");
this.addAttribute$S$S$I$Z$S$java_util_List("dhtable", "class", 2, true, null, classes);
this.addAttribute$S$S$I$Z$S$java_util_List("dhtable", "htableId", 2, true, null, tabids);
this.addObjectValue$S$Class$Z$O("dhtable", Clazz.getClass($I$(3)), true, null);
this.addElement$S$S$I("dri", parentName, 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("dri", "interval", 2, true, null, "0", "65535", true, true);
this.addElement$S$S$I("com", parentName, 0);
this.addAttribute$S$S$I$Z$S("com", "comment", 0, false, null);
this.addObjectValue$S$Class$I$I("com", Clazz.array(Byte.TYPE, -1), 1, 65533);
this.addElement$S$S$I("unknown", parentName, 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("unknown", "MarkerTag", 2, true, null, "0", "255", true, true);
this.addObjectValue$S$Class$I$I("unknown", Clazz.array(Byte.TYPE, -1), 1, 65533);
});

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier',  function (elementName, imageType) {
if (this.isInSubtree$S$S(elementName, this.getRootName$())) {
return true;
}return false;
});

Clazz.newMeth(C$, 'isInSubtree$S$S',  function (elementName, subtreeName) {
if (elementName.equals$O(subtreeName)) {
return true;
}var children=this.getChildNames$S(elementName);
for (var i=0; i < children.length; i++) {
if (this.isInSubtree$S$S(elementName, children[i])) {
return true;
}}
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
