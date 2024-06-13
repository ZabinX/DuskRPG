(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSXMLCharData", null, 'swingjs.xml.JSXMLNode', 'org.w3c.dom.CharacterData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setData$S',  function (data) {

node.data = data;
});

Clazz.newMeth(C$, 'getData$',  function () {
return 1 ? node.data :"";
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 1 ? node.length  :0;
});

Clazz.newMeth(C$, 'substringData$I$I',  function (offset, count) {
try {
return 1 ? node.substringData(offset, count)  :"";
} catch (t) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[2, t.toString()]);
}
});

Clazz.newMeth(C$, 'appendData$S',  function (arg) {
try {

node.appendData(arg)
} catch (t) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[2, t.toString()]);
}
});

Clazz.newMeth(C$, 'insertData$I$S',  function (offset, arg) {
try {

node.insertData(offset, arg)
} catch (t) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[2, t.toString()]);
}
});

Clazz.newMeth(C$, 'deleteData$I$I',  function (offset, count) {
try {

node.deleteData(offset, count)
} catch (t) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[2, t.toString()]);
}
});

Clazz.newMeth(C$, 'replaceData$I$I$S',  function (offset, count, arg) {
try {

node.replaceData(offset, count, arg)
} catch (t) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[2, t.toString()]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
