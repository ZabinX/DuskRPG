(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Properties','java.util.Hashtable','swingjs.JSUtil','javajs.util.PT']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLTransformer", null, 'javax.xml.transform.Transformer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.outputProperties=Clazz.new_($I$(1,1));
this.params=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['nIndent'],'S',['indentSpaces'],'O',['source','javax.xml.transform.Source','doc','swingjs.xml.JSXMLDocument','resolver','javax.xml.transform.URIResolver','outputProperties','java.util.Properties','params','java.util.Map','listener','javax.xml.transform.ErrorListener']]]

Clazz.newMeth(C$, 'c$$javax_xml_transform_Source',  function (source) {
Clazz.super_(C$, this);
this.source=source;
this.outputProperties.put$O$O("version", "1.0");
this.outputProperties.put$O$O("encoding", "UTF-8");
this.outputProperties.put$O$O("standalone", "no");
}, 1);

Clazz.newMeth(C$, 'transform$javax_xml_transform_Source$javax_xml_transform_Result',  function (xmlSource, outputTarget) {
try {
if (Clazz.instanceOf(xmlSource, "javax.xml.transform.dom.DOMSource")) {
this.doc=(xmlSource).getNode$();
} else {
$I$(3,"notImplemented$S",["transform " + xmlSource.getClass$().getName$()]);
return;
}var doIndent="yes".equals$O(this.getOutputProperty$S("indent"));
var indent=!doIndent ? null : this.getOutputProperty$S("{http://xml.apache.org/xslt}indent-amount");
if (doIndent) {
var nIndent=(indent == null  ? 2 : Math.max(0, Math.min($I$(4).parseInt$S(indent), 10)));
this.indentSpaces="          ".substring$I$I(0, nIndent);
p$1.indentDoc$org_w3c_dom_Node$S.apply(this, [this.doc.getFirstChild$(), "\n"]);
}var s=p$1.getXmlDeclaration.apply(this, []) + p$1.getDocType.apply(this, []);
s+=new XMLSerializer().serializeToString(this.doc.doc) ||null;
s+="\n";
if (Clazz.instanceOf(outputTarget, "javax.xml.transform.stream.StreamResult")) {
var w=(outputTarget).getWriter$();
w.write$S(s);
}} catch (e) {
throw Clazz.new_(Clazz.load('javax.xml.transform.TransformerException').c$$Throwable,[e]);
}
});

Clazz.newMeth(C$, 'getXmlDeclaration',  function () {
var encoding=this.getOutputProperty$S("encoding");
var version=this.getOutputProperty$S("version");
if (version !== "1.0" ) System.out.println$S("SwingJS XML version must be 1.0");
if (encoding !== "UTF-8" ) System.out.println$S("SwingJS XML encoding must be UTF-8");
return "<?xml version=\"" + version + "\"" + " encoding=\"" + encoding + "\"" + " standalone=\"" + this.getOutputProperty$S("standalone") + "\"?>\n" ;
}, p$1);

Clazz.newMeth(C$, 'getDocType',  function () {
var pub=this.getOutputProperty$S("doctype-public");
var sys=this.getOutputProperty$S("doctype-system");
var root=this.doc.getFirstChild$().getNodeName$();
return (pub == null  || sys == null   ? null : "<!DOCTYPE " + root + " PUBLIC \"" + pub + "\" \"" + sys + "\">\n" );
}, p$1);

Clazz.newMeth(C$, 'indentDoc$org_w3c_dom_Node$S',  function (node, indent) {
if (!node.hasChildNodes$() || node.getFirstChild$().getNodeType$() == 3 ) return;
var list=node.getChildNodes$();
for (var i=list.getLength$(); --i >= 0; ) {
var child=list.item$I(i);
p$1.indentDoc$org_w3c_dom_Node$S.apply(this, [child, indent + this.indentSpaces]);
var text=this.doc.createTextNode$S(indent + this.indentSpaces);
node.insertBefore$org_w3c_dom_Node$org_w3c_dom_Node(text, child);
}
node.appendChild$org_w3c_dom_Node(this.doc.createTextNode$S(indent));
}, p$1);

Clazz.newMeth(C$, 'setParameter$S$O',  function (name, value) {
this.params.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getParameter$S',  function (name) {
return this.params.get$O(name);
});

Clazz.newMeth(C$, 'clearParameters$',  function () {
this.params.clear$();
});

Clazz.newMeth(C$, 'setURIResolver$javax_xml_transform_URIResolver',  function (resolver) {
this.resolver=resolver;
});

Clazz.newMeth(C$, 'getURIResolver$',  function () {
return this.resolver;
});

Clazz.newMeth(C$, 'setOutputProperties$java_util_Properties',  function (oformat) {
this.outputProperties=oformat;
});

Clazz.newMeth(C$, 'getOutputProperties$',  function () {
return this.outputProperties;
});

Clazz.newMeth(C$, 'setOutputProperty$S$S',  function (name, value) {
this.outputProperties.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getOutputProperty$S',  function (name) {
return this.outputProperties.getProperty$S(name);
});

Clazz.newMeth(C$, 'setErrorListener$javax_xml_transform_ErrorListener',  function (listener) {
this.listener=listener;
});

Clazz.newMeth(C$, 'getErrorListener$',  function () {
return this.listener;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
