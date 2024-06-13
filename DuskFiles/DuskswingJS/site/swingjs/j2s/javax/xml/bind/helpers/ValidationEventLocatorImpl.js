(function(){var P$=Clazz.newPackage("javax.xml.bind.helpers"),I$=[[0,'javax.xml.bind.helpers.Messages','java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ValidationEventLocatorImpl", null, null, 'javax.xml.bind.ValidationEventLocator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.url=null;
this.offset=-1;
this.lineNumber=-1;
this.columnNumber=-1;
this.object=null;
this.node=null;
},1);

C$.$fields$=[['I',['offset','lineNumber','columnNumber'],'O',['url','java.net.URL','object','java.lang.Object','node','org.w3c.dom.Node']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_Locator',  function (loc) {
;C$.$init$.apply(this);
if (loc == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).format$S$O("Shared.MustNotBeNull", "loc")]);
}this.url=C$.toURL$S(loc.getSystemId$());
this.columnNumber=loc.getColumnNumber$();
this.lineNumber=loc.getLineNumber$();
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_SAXParseException',  function (e) {
;C$.$init$.apply(this);
if (e == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).format$S$O("Shared.MustNotBeNull", "e")]);
}this.url=C$.toURL$S(e.getSystemId$());
this.columnNumber=e.getColumnNumber$();
this.lineNumber=e.getLineNumber$();
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (_node) {
;C$.$init$.apply(this);
if (_node == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).format$S$O("Shared.MustNotBeNull", "_node")]);
}this.node=_node;
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (_object) {
;C$.$init$.apply(this);
if (_object == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).format$S$O("Shared.MustNotBeNull", "_object")]);
}this.object=_object;
}, 1);

Clazz.newMeth(C$, 'toURL$S',  function (systemId) {
try {
return Clazz.new_($I$(2,1).c$$S,[systemId]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getURL$',  function () {
return this.url;
});

Clazz.newMeth(C$, 'setURL$java_net_URL',  function (_url) {
this.url=_url;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$I',  function (_offset) {
this.offset=_offset;
});

Clazz.newMeth(C$, 'getLineNumber$',  function () {
return this.lineNumber;
});

Clazz.newMeth(C$, 'setLineNumber$I',  function (_lineNumber) {
this.lineNumber=_lineNumber;
});

Clazz.newMeth(C$, 'getColumnNumber$',  function () {
return this.columnNumber;
});

Clazz.newMeth(C$, 'setColumnNumber$I',  function (_columnNumber) {
this.columnNumber=_columnNumber;
});

Clazz.newMeth(C$, 'getObject$',  function () {
return this.object;
});

Clazz.newMeth(C$, 'setObject$O',  function (_object) {
this.object=_object;
});

Clazz.newMeth(C$, 'getNode$',  function () {
return this.node;
});

Clazz.newMeth(C$, 'setNode$org_w3c_dom_Node',  function (_node) {
this.node=_node;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
