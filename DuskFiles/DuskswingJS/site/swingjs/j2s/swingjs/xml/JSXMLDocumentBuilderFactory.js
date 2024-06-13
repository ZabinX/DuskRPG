(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'java.util.Hashtable','swingjs.xml.JSXMLDocumentBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLDocumentBuilderFactory", null, 'javax.xml.parsers.DocumentBuilderFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.attrs=Clazz.new_($I$(1,1));
this.features=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['builder','swingjs.xml.JSXMLDocumentBuilder','attrs','java.util.Map','+features']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setAttribute$S$O',  function (name, value) {
this.attrs.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getAttribute$S',  function (name) {
return this.attrs.get$O(name);
});

Clazz.newMeth(C$, 'setFeature$S$Z',  function (name, value) {
this.features.put$O$O(name, Boolean.valueOf$Z(value));
});

Clazz.newMeth(C$, 'getFeature$S',  function (name) {
return (this.features.get$O(name) === Boolean.TRUE );
});

Clazz.newMeth(C$, 'newDocumentBuilder$',  function () {
return Clazz.new_($I$(2,1).c$$java_util_Map$java_util_Map$swingjs_xml_JSXMLDocumentBuilderFactory,[this.attrs, this.features, this]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
