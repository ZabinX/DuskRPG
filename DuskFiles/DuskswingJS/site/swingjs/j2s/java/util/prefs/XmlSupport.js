(function(){var P$=Clazz.newPackage("java.util.prefs"),I$=[[0,'org.xml.sax.InputSource','java.io.StringReader','java.util.ArrayList','java.util.prefs.Preferences','javax.xml.parsers.DocumentBuilderFactory','AssertionError',['java.util.prefs.XmlSupport','.Resolver'],['java.util.prefs.XmlSupport','.EH'],'javax.xml.transform.TransformerFactory','javax.xml.transform.dom.DOMSource','javax.xml.transform.stream.StreamResult','java.io.BufferedWriter','java.io.OutputStreamWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Resolver',10],['EH',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'export$java_io_OutputStream$java_util_prefs_Preferences$Z',  function (os, p, subTree) {
if ((p).isRemoved$()) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed"]);
var doc=C$.createPrefsDoc$S("preferences");
var preferences=doc.getDocumentElement$();
preferences.setAttribute$S$S("EXTERNAL_XML_VERSION", "1.0");
var xmlRoot=preferences.appendChild$org_w3c_dom_Node(doc.createElement$S("root"));
xmlRoot.setAttribute$S$S("type", (p.isUserNode$() ? "user" : "system"));
var ancestors=Clazz.new_($I$(3,1));
for (var kid=p, dad=kid.parent$(); dad != null ; kid=dad, dad=kid.parent$()) {
ancestors.add$O(kid);
}
var e=xmlRoot;
for (var i=ancestors.size$() - 1; i >= 0; i--) {
e.appendChild$org_w3c_dom_Node(doc.createElement$S("map"));
e=e.appendChild$org_w3c_dom_Node(doc.createElement$S("node"));
e.setAttribute$S$S("name", ancestors.get$I(i).name$());
}
C$.putPreferencesInXml$org_w3c_dom_Element$org_w3c_dom_Document$java_util_prefs_Preferences$Z(e, doc, p, subTree);
C$.writeDoc$org_w3c_dom_Document$java_io_OutputStream(doc, os);
}, 1);

Clazz.newMeth(C$, 'putPreferencesInXml$org_w3c_dom_Element$org_w3c_dom_Document$java_util_prefs_Preferences$Z',  function (elt, doc, prefs, subTree) {
var kidsCopy=null;
var kidNames=null;
/*sync org.eclipse.jdt.core.dom.FieldAccess*/((prefs).lock);
{
if ((prefs).isRemoved$()) {
elt.getParentNode$().removeChild$org_w3c_dom_Node(elt);
return;
}var keys=prefs.keys$();
var map=elt.appendChild$org_w3c_dom_Node(doc.createElement$S("map"));
for (var i=0; i < keys.length; i++) {
var entry=map.appendChild$org_w3c_dom_Node(doc.createElement$S("entry"));
entry.setAttribute$S$S("key", keys[i]);
entry.setAttribute$S$S("value", prefs.get$S$S(keys[i], null));
}
if (subTree) {
kidNames=prefs.childrenNames$();
kidsCopy=Clazz.array($I$(4), [kidNames.length]);
for (var i=0; i < kidNames.length; i++) kidsCopy[i]=prefs.node$S(kidNames[i]);

}}if (subTree) {
for (var i=0; i < kidNames.length; i++) {
var xmlKid=elt.appendChild$org_w3c_dom_Node(doc.createElement$S("node"));
xmlKid.setAttribute$S$S("name", kidNames[i]);
C$.putPreferencesInXml$org_w3c_dom_Element$org_w3c_dom_Document$java_util_prefs_Preferences$Z(xmlKid, doc, kidsCopy[i], subTree);
}
}}, 1);

Clazz.newMeth(C$, 'importPreferences$java_io_InputStream',  function (is) {
try {
var doc=C$.loadPrefsDoc$java_io_InputStream(is);
var xmlVersion=doc.getDocumentElement$().getAttribute$S("EXTERNAL_XML_VERSION");
if (xmlVersion.compareTo$S("1.0") > 0) throw Clazz.new_(Clazz.load('java.util.prefs.InvalidPreferencesFormatException').c$$S,["Exported preferences file format version " + xmlVersion + " is not supported. This java installation can read" + " versions " + "1.0" + " or older. You may need" + " to install a newer version of JDK." ]);
var xmlRoot=doc.getDocumentElement$().getChildNodes$().item$I(0);
var prefsRoot=(xmlRoot.getAttribute$S("type").equals$O("user") ? $I$(4).userRoot$() : $I$(4).systemRoot$());
C$.ImportSubtree$java_util_prefs_Preferences$org_w3c_dom_Element(prefsRoot, xmlRoot);
} catch (e) {
if (Clazz.exceptionOf(e,"org.xml.sax.SAXException")){
throw Clazz.new_(Clazz.load('java.util.prefs.InvalidPreferencesFormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createPrefsDoc$S',  function (qname) {
try {
var di=$I$(5).newInstance$().newDocumentBuilder$().getDOMImplementation$();
var dt=di.createDocumentType$S$S$S(qname, null, "http://java.sun.com/dtd/preferences.dtd");
return di.createDocument$S$S$org_w3c_dom_DocumentType(null, qname, dt);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.parsers.ParserConfigurationException")){
throw Clazz.new_($I$(6,1).c$$O,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'loadPrefsDoc$java_io_InputStream',  function ($in) {
var dbf=$I$(5).newInstance$();
dbf.setIgnoringElementContentWhitespace$Z(true);
dbf.setValidating$Z(true);
dbf.setCoalescing$Z(true);
dbf.setIgnoringComments$Z(true);
try {
var db=dbf.newDocumentBuilder$();
db.setEntityResolver$org_xml_sax_EntityResolver(Clazz.new_($I$(7,1)));
db.setErrorHandler$org_xml_sax_ErrorHandler(Clazz.new_($I$(8,1)));
return db.parse$org_xml_sax_InputSource(Clazz.new_($I$(1,1).c$$java_io_InputStream,[$in]));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.parsers.ParserConfigurationException")){
throw Clazz.new_($I$(6,1).c$$O,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeDoc$org_w3c_dom_Document$java_io_OutputStream',  function (doc, out) {
try {
var tf=$I$(9).newInstance$();
try {
tf.setAttribute$S$O("indent-number",  new Integer(2));
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
} else {
throw iae;
}
}
var t=tf.newTransformer$();
t.setOutputProperty$S$S("doctype-system", doc.getDoctype$().getSystemId$());
t.setOutputProperty$S$S("indent", "yes");
t.transform$javax_xml_transform_Source$javax_xml_transform_Result(Clazz.new_($I$(10,1).c$$org_w3c_dom_Node,[doc]), Clazz.new_([Clazz.new_([Clazz.new_($I$(13,1).c$$java_io_OutputStream$S,[out, "UTF-8"])],$I$(12,1).c$$java_io_Writer)],$I$(11,1).c$$java_io_Writer));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.transform.TransformerException")){
throw Clazz.new_($I$(6,1).c$$O,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'ImportSubtree$java_util_prefs_Preferences$org_w3c_dom_Element',  function (prefsNode, xmlNode) {
var xmlKids=xmlNode.getChildNodes$();
var numXmlKids=xmlKids.getLength$();
var prefsKids;
/*sync org.eclipse.jdt.core.dom.FieldAccess*/((prefsNode).lock);
{
if ((prefsNode).isRemoved$()) return;
var firstXmlKid=xmlKids.item$I(0);
C$.ImportPrefs$java_util_prefs_Preferences$org_w3c_dom_Element(prefsNode, firstXmlKid);
prefsKids=Clazz.array($I$(4), [numXmlKids - 1]);
for (var i=1; i < numXmlKids; i++) {
var xmlKid=xmlKids.item$I(i);
prefsKids[i - 1]=prefsNode.node$S(xmlKid.getAttribute$S("name"));
}
}for (var i=1; i < numXmlKids; i++) C$.ImportSubtree$java_util_prefs_Preferences$org_w3c_dom_Element(prefsKids[i - 1], xmlKids.item$I(i));

}, 1);

Clazz.newMeth(C$, 'ImportPrefs$java_util_prefs_Preferences$org_w3c_dom_Element',  function (prefsNode, map) {
var entries=map.getChildNodes$();
for (var i=0, numEntries=entries.getLength$(); i < numEntries; i++) {
var entry=entries.item$I(i);
prefsNode.put$S$S(entry.getAttribute$S("key"), entry.getAttribute$S("value"));
}
}, 1);

Clazz.newMeth(C$, 'exportMap$java_io_OutputStream$java_util_Map',  function (os, map) {
var doc=C$.createPrefsDoc$S("map");
var xmlMap=doc.getDocumentElement$();
xmlMap.setAttribute$S$S("MAP_XML_VERSION", "1.0");
for (var i=map.entrySet$().iterator$(); i.hasNext$(); ) {
var e=i.next$();
var xe=xmlMap.appendChild$org_w3c_dom_Node(doc.createElement$S("entry"));
xe.setAttribute$S$S("key", e.getKey$());
xe.setAttribute$S$S("value", e.getValue$());
}
C$.writeDoc$org_w3c_dom_Document$java_io_OutputStream(doc, os);
}, 1);

Clazz.newMeth(C$, 'importMap$java_io_InputStream$java_util_Map',  function (is, m) {
try {
var doc=C$.loadPrefsDoc$java_io_InputStream(is);
var xmlMap=doc.getDocumentElement$();
var mapVersion=xmlMap.getAttribute$S("MAP_XML_VERSION");
if (mapVersion.compareTo$S("1.0") > 0) throw Clazz.new_(Clazz.load('java.util.prefs.InvalidPreferencesFormatException').c$$S,["Preferences map file format version " + mapVersion + " is not supported. This java installation can read" + " versions " + "1.0" + " or older. You may need" + " to install a newer version of JDK." ]);
var entries=xmlMap.getChildNodes$();
for (var i=0, numEntries=entries.getLength$(); i < numEntries; i++) {
var entry=entries.item$I(i);
m.put$O$O(entry.getAttribute$S("key"), entry.getAttribute$S("value"));
}
} catch (e) {
if (Clazz.exceptionOf(e,"org.xml.sax.SAXException")){
throw Clazz.new_(Clazz.load('java.util.prefs.InvalidPreferencesFormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.XmlSupport, "Resolver", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.xml.sax.EntityResolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'resolveEntity$S$S',  function (pid, sid) {
if (sid.equals$O("http://java.sun.com/dtd/preferences.dtd")) {
var is;
is=Clazz.new_([Clazz.new_(["<?xml version=\"1.0\" encoding=\"UTF-8\"?><!-- DTD for preferences --><!ELEMENT preferences (root) ><!ATTLIST preferences EXTERNAL_XML_VERSION CDATA \"0.0\"  ><!ELEMENT root (map, node*) ><!ATTLIST root          type (system|user) #REQUIRED ><!ELEMENT node (map, node*) ><!ATTLIST node          name CDATA #REQUIRED ><!ELEMENT map (entry*) ><!ATTLIST map  MAP_XML_VERSION CDATA \"0.0\"  ><!ELEMENT entry EMPTY ><!ATTLIST entry          key CDATA #REQUIRED          value CDATA #REQUIRED >"],$I$(2,1).c$$S)],$I$(1,1).c$$java_io_Reader);
is.setSystemId$S("http://java.sun.com/dtd/preferences.dtd");
return is;
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid system identifier: " + sid]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.XmlSupport, "EH", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.xml.sax.ErrorHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'error$org_xml_sax_SAXParseException',  function (x) {
throw x;
});

Clazz.newMeth(C$, 'fatalError$org_xml_sax_SAXParseException',  function (x) {
throw x;
});

Clazz.newMeth(C$, 'warning$org_xml_sax_SAXParseException',  function (x) {
throw x;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
