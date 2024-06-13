(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),p$1={},I$=[[0,'java.util.Vector','org.xml.sax.helpers.NamespaceSupport','java.util.Hashtable',['org.xml.sax.helpers.NamespaceSupport','.Context']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NamespaceSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Context',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['namespaceDeclUris'],'I',['contextPos'],'O',['contexts','org.xml.sax.helpers.NamespaceSupport.Context[]','currentContext','org.xml.sax.helpers.NamespaceSupport.Context']]
,['O',['EMPTY_ENUMERATION','java.util.Enumeration']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
this.contexts=Clazz.array($I$(4), [32]);
this.namespaceDeclUris=false;
this.contextPos=0;
this.contexts[this.contextPos]=this.currentContext=Clazz.new_($I$(4,1),[this, null]);
this.currentContext.declarePrefix$S$S("xml", "http://www.w3.org/XML/1998/namespace");
});

Clazz.newMeth(C$, 'pushContext$',  function () {
var max=this.contexts.length;
this.contexts[this.contextPos].declsOK=false;
++this.contextPos;
if (this.contextPos >= max) {
var newContexts=Clazz.array($I$(4), [max * 2]);
System.arraycopy$O$I$O$I$I(this.contexts, 0, newContexts, 0, max);
max*=2;
this.contexts=newContexts;
}this.currentContext=this.contexts[this.contextPos];
if (this.currentContext == null ) {
this.contexts[this.contextPos]=this.currentContext=Clazz.new_($I$(4,1),[this, null]);
}if (this.contextPos > 0) {
this.currentContext.setParent$org_xml_sax_helpers_NamespaceSupport_Context(this.contexts[this.contextPos - 1]);
}});

Clazz.newMeth(C$, 'popContext$',  function () {
this.contexts[this.contextPos].clear$();
--this.contextPos;
if (this.contextPos < 0) {
throw Clazz.new_(Clazz.load('java.util.EmptyStackException'));
}this.currentContext=this.contexts[this.contextPos];
});

Clazz.newMeth(C$, 'declarePrefix$S$S',  function (prefix, uri) {
if (prefix.equals$O("xml") || prefix.equals$O("xmlns") ) {
return false;
} else {
this.currentContext.declarePrefix$S$S(prefix, uri);
return true;
}});

Clazz.newMeth(C$, 'processName$S$SA$Z',  function (qName, parts, isAttribute) {
var myParts=this.currentContext.processName$S$Z(qName, isAttribute);
if (myParts == null ) {
return null;
} else {
parts[0]=myParts[0];
parts[1]=myParts[1];
parts[2]=myParts[2];
return parts;
}});

Clazz.newMeth(C$, 'getURI$S',  function (prefix) {
return this.currentContext.getURI$S(prefix);
});

Clazz.newMeth(C$, 'getPrefixes$',  function () {
return this.currentContext.getPrefixes$();
});

Clazz.newMeth(C$, 'getPrefix$S',  function (uri) {
return this.currentContext.getPrefix$S(uri);
});

Clazz.newMeth(C$, 'getPrefixes$S',  function (uri) {
var prefixes=Clazz.new_($I$(1,1));
var allPrefixes=this.getPrefixes$();
while (allPrefixes.hasMoreElements$()){
var prefix=allPrefixes.nextElement$();
if (uri.equals$O(this.getURI$S(prefix))) {
prefixes.addElement$O(prefix);
}}
return prefixes.elements$();
});

Clazz.newMeth(C$, 'getDeclaredPrefixes$',  function () {
return this.currentContext.getDeclaredPrefixes$();
});

Clazz.newMeth(C$, 'setNamespaceDeclUris$Z',  function (value) {
if (this.contextPos != 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (value == this.namespaceDeclUris ) return;
this.namespaceDeclUris=value;
if (value) this.currentContext.declarePrefix$S$S("xmlns", "http://www.w3.org/xmlns/2000/");
 else {
this.contexts[this.contextPos]=this.currentContext=Clazz.new_($I$(4,1),[this, null]);
this.currentContext.declarePrefix$S$S("xml", "http://www.w3.org/XML/1998/namespace");
}});

Clazz.newMeth(C$, 'isNamespaceDeclUris$',  function () {
return this.namespaceDeclUris;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_ENUMERATION=Clazz.new_($I$(1,1)).elements$();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.NamespaceSupport, "Context", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultNS=null;
this.declsOK=true;
this.declarations=null;
this.declSeen=false;
this.parent=null;
},1);

C$.$fields$=[['Z',['declsOK','declSeen'],'S',['defaultNS'],'O',['prefixTable','java.util.Hashtable','+uriTable','+elementNameTable','+attributeNameTable','declarations','java.util.Vector','parent','org.xml.sax.helpers.NamespaceSupport.Context']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.copyTables.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setParent$org_xml_sax_helpers_NamespaceSupport_Context',  function (parent) {
this.parent=parent;
this.declarations=null;
this.prefixTable=parent.prefixTable;
this.uriTable=parent.uriTable;
this.elementNameTable=parent.elementNameTable;
this.attributeNameTable=parent.attributeNameTable;
this.defaultNS=parent.defaultNS;
this.declSeen=false;
this.declsOK=true;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.parent=null;
this.prefixTable=null;
this.uriTable=null;
this.elementNameTable=null;
this.attributeNameTable=null;
this.defaultNS=null;
});

Clazz.newMeth(C$, 'declarePrefix$S$S',  function (prefix, uri) {
if (!this.declsOK) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["can\'t declare any more prefixes in this context"]);
if (!this.declSeen) {
p$1.copyTables.apply(this, []);
}if (this.declarations == null ) {
this.declarations=Clazz.new_($I$(1,1));
}prefix=prefix.intern$();
uri=uri.intern$();
if ("".equals$O(prefix)) {
if ("".equals$O(uri)) {
this.defaultNS=null;
} else {
this.defaultNS=uri;
}} else {
this.prefixTable.put$O$O(prefix, uri);
this.uriTable.put$O$O(uri, prefix);
}this.declarations.addElement$O(prefix);
});

Clazz.newMeth(C$, 'processName$S$Z',  function (qName, isAttribute) {
var name;
var table;
this.declsOK=false;
if (isAttribute) {
table=this.attributeNameTable;
} else {
table=this.elementNameTable;
}name=table.get$O(qName);
if (name != null ) {
return name;
}name=Clazz.array(String, [3]);
name[2]=qName.intern$();
var index=qName.indexOf$I(":");
if (index == -1) {
if (isAttribute) {
if (qName === "xmlns"  && this.b$['org.xml.sax.helpers.NamespaceSupport'].namespaceDeclUris ) name[0]="http://www.w3.org/xmlns/2000/";
 else name[0]="";
} else if (this.defaultNS == null ) {
name[0]="";
} else {
name[0]=this.defaultNS;
}name[1]=name[2];
} else {
var prefix=qName.substring$I$I(0, index);
var local=qName.substring$I(index + 1);
var uri;
if ("".equals$O(prefix)) {
uri=this.defaultNS;
} else {
uri=this.prefixTable.get$O(prefix);
}if (uri == null  || (!isAttribute && "xmlns".equals$O(prefix) ) ) {
return null;
}name[0]=uri;
name[1]=local.intern$();
}table.put$O$O(name[2], name);
return name;
});

Clazz.newMeth(C$, 'getURI$S',  function (prefix) {
if ("".equals$O(prefix)) {
return this.defaultNS;
} else if (this.prefixTable == null ) {
return null;
} else {
return this.prefixTable.get$O(prefix);
}});

Clazz.newMeth(C$, 'getPrefix$S',  function (uri) {
if (this.uriTable == null ) {
return null;
} else {
return this.uriTable.get$O(uri);
}});

Clazz.newMeth(C$, 'getDeclaredPrefixes$',  function () {
if (this.declarations == null ) {
return $I$(2).EMPTY_ENUMERATION;
} else {
return this.declarations.elements$();
}});

Clazz.newMeth(C$, 'getPrefixes$',  function () {
if (this.prefixTable == null ) {
return $I$(2).EMPTY_ENUMERATION;
} else {
return this.prefixTable.keys$();
}});

Clazz.newMeth(C$, 'copyTables',  function () {
if (this.prefixTable != null ) {
this.prefixTable=this.prefixTable.clone$();
} else {
this.prefixTable=Clazz.new_($I$(3,1));
}if (this.uriTable != null ) {
this.uriTable=this.uriTable.clone$();
} else {
this.uriTable=Clazz.new_($I$(3,1));
}this.elementNameTable=Clazz.new_($I$(3,1));
this.attributeNameTable=Clazz.new_($I$(3,1));
this.declSeen=true;
}, p$1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
