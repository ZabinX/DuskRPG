(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','swingjs.JSUtil','javajs.util.Rdr','java.io.BufferedReader','swingjs.xml.JSSAXContentHandler','swingjs.api.js.DOMNode','swingjs.xml.JSSAXAttributes','javajs.util.AU']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSSAXParser", null, null, ['org.xml.sax.Parser', 'org.xml.sax.XMLReader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htPrefixMap=Clazz.new_($I$(1,1));
this.tempChars=Clazz.array(Character.TYPE, [1024]);
},1);

C$.$fields$=[['Z',['havePre','ver2'],'O',['resolver','org.xml.sax.EntityResolver','dtdHandler','org.xml.sax.DTDHandler','docHandler','org.xml.sax.DocumentHandler','contentHandler','org.xml.sax.ContentHandler','errorHandler','org.xml.sax.ErrorHandler','htPrefixMap','java.util.Map','tempChars','char[]','currentNode','swingjs.api.js.DOMNode','props','java.util.Map']]]

Clazz.newMeth(C$, 'getXMLReader$',  function () {
return this;
});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
});

Clazz.newMeth(C$, 'setEntityResolver$org_xml_sax_EntityResolver',  function (resolver) {
this.resolver=resolver;
});

Clazz.newMeth(C$, 'setDTDHandler$org_xml_sax_DTDHandler',  function (handler) {
this.dtdHandler=handler;
});

Clazz.newMeth(C$, 'setDocumentHandler$org_xml_sax_DocumentHandler',  function (handler) {
this.docHandler=handler;
});

Clazz.newMeth(C$, 'setErrorHandler$org_xml_sax_ErrorHandler',  function (handler) {
this.errorHandler=handler;
});

Clazz.newMeth(C$, 'parse$S',  function (fileName) {
this.parseXMLString$S($I$(2).getFileAsString$S(fileName));
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource',  function (source) {
this.parse$org_xml_sax_InputSource$I(source, 0);
});

Clazz.newMeth(C$, 'parseToDOM$org_xml_sax_InputSource',  function (is) {
return this.parseXML$S(p$1.getString$org_xml_sax_InputSource.apply(this, [is]));
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource$I',  function (source, mode) {
this.parseXMLString$S$I(p$1.getString$org_xml_sax_InputSource.apply(this, [source]), mode);
});

Clazz.newMeth(C$, 'parseXMLString$S',  function (data) {
this.parseXMLString$S$I(data, 0);
});

Clazz.newMeth(C$, 'parseXMLString$S$I',  function (data, mode) {
try {
this.parseDocument$swingjs_api_js_DOMNode$I(this.parseXML$S(data), mode);
} catch (e) {
p$1.error$Throwable.apply(this, [e]);
}
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler',  function (source, handler) {
this.setContentHandler$org_xml_sax_ContentHandler(handler);
this.parse$org_xml_sax_InputSource$I(source, 0);
});

Clazz.newMeth(C$, 'getString$org_xml_sax_InputSource',  function (source) {
var rdr=source.getCharacterStream$();
if (rdr == null ) {
return $I$(3,"fixUTF$BA",[$I$(3,"streamToBytes$java_io_InputStream",[source.getByteStream$()])]);
}if (!(Clazz.instanceOf(rdr, "java.io.BufferedReader"))) rdr=Clazz.new_($I$(4,1).c$$java_io_Reader,[rdr]);
var data=Clazz.array(String, [1]);
$I$(3).readAllAsString$java_io_BufferedReader$I$Z$SA$I(rdr, -1, false, data, 0);
return data[0];
}, p$1);

Clazz.newMeth(C$, 'parseXML$S',  function (data) {
return $I$(2).jQuery.parseXML(p$1.removeProcessing$S.apply(this, [data]));
});

Clazz.newMeth(C$, 'removeProcessing$S',  function (data) {
return data;
}, p$1);

Clazz.newMeth(C$, 'error$Throwable',  function (e) {
System.err.println$O(e);

e.stack && System.out.println(e.stack);
var ee=Clazz.new_(Clazz.load('org.xml.sax.SAXParseException').c$$S$org_xml_sax_Locator,["Invalid Document", null]);
if (this.errorHandler == null ) throw (ee);
 else this.errorHandler.fatalError$org_xml_sax_SAXParseException(ee);
}, p$1);

Clazz.newMeth(C$, 'registerPrefixes$swingjs_api_js_DOMNode',  function (node) {
var names=Clazz.array(String, [0]);

names = node.getAttributeNames();
for (var i=names.length; --i >= 0; ) {
var name=names[i];
var isDefault;
if (!(isDefault=name.equals$O("xmlns")) && !name.startsWith$S("xmlns:") ) continue;
var prefix=(isDefault ? "##default:" : name.substring$I(6) + ":");
var val=C$.getAttribute$swingjs_api_js_DOMNode$S(node, name);
this.htPrefixMap.put$O$O(prefix, val);
this.htPrefixMap.put$O$O(val + ":", val);
this.htPrefixMap.put$O$O(val, prefix);
}
});

Clazz.newMeth(C$, 'getNamespaceForAttributeName$S',  function (name) {
var pt=name.indexOf$S(":");
if (pt < 0) return "";
var uri=this.htPrefixMap.get$O(name.substring$I$I(0, pt + 1));
if (uri != null ) return uri;
System.out.println$S("!! JSSAXParser could not find " + name);
return "";
});

Clazz.newMeth(C$, 'getAttribute$swingjs_api_js_DOMNode$S',  function (node, name) {
return (node.getAttribute(name) ||null);
}, 1);

Clazz.newMeth(C$, 'parseDocument$swingjs_api_js_DOMNode$I',  function (doc, mode) {
if (this.docHandler == null  && this.contentHandler == null  ) this.contentHandler=Clazz.new_($I$(5,1));
this.ver2=(this.contentHandler != null );
p$1.setNode$swingjs_api_js_DOMNode.apply(this, [doc]);
if (mode == 2) return;
if (this.ver2) this.contentHandler.startDocument$();
 else this.docHandler.startDocument$();
var element=$I$(6).getAttr(doc, "firstChild");

var type;
while (element && (type = element.nodeType) != 1) { element = element.nextSibling;
}
p$1.walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I.apply(this, [null, element, this.havePre, mode]);
if (this.ver2) this.contentHandler.endDocument$();
 else this.docHandler.endDocument$();
});

Clazz.newMeth(C$, 'walkDOMTree$swingjs_api_js_DOMNode$I',  function (node, mode) {
p$1.walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I.apply(this, [null, node, false, mode]);
});

Clazz.newMeth(C$, 'walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I',  function (root, node, skipTag, mode) {
var localName=($I$(6).getAttr(node, "localName"));
var nodeName=$I$(6).getAttr(node, "nodeName");
var uri=$I$(6).getAttr(node, "namespaceURI");
if (localName == null ) {
if (mode != 0) return;
p$1.getTextData$swingjs_api_js_DOMNode$Z.apply(this, [node, true]);
} else if (!skipTag) {
this.registerPrefixes$swingjs_api_js_DOMNode(node);
var atts=Clazz.new_($I$(7,1).c$$swingjs_api_js_DOMNode,[node]);
p$1.setNode$swingjs_api_js_DOMNode.apply(this, [node]);
if (this.ver2) this.contentHandler.startElement$S$S$S$org_xml_sax_Attributes(uri, localName, nodeName, atts);
 else this.docHandler.startElement$S$org_xml_sax_AttributeList(localName, atts);
}if (root == null ) root=node;
var isRoot=(node === root );
node=$I$(6).getAttr(node, "firstChild");
while (node != null ){
if (isRoot || mode == 0 ) p$1.walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I.apply(this, [root, node, false, mode]);
node=$I$(6).getAttr(node, "nextSibling");
}
if (localName == null  || skipTag ) return;
if (this.ver2) this.contentHandler.endElement$S$S$S(uri, localName, nodeName);
 else this.docHandler.endElement$S(localName);
}, p$1);

Clazz.newMeth(C$, 'getChildren$swingjs_api_js_DOMNode',  function (node) {
return $I$(6).getAttr(node, "children");
}, 1);

Clazz.newMeth(C$, 'getSimpleInnerText$swingjs_api_js_DOMNode',  function (node) {
var children=C$.getChildren$swingjs_api_js_DOMNode(node);
return (children == null  || children.length > 0  ? "" : $I$(6).getAttr(node, "textContent"));
}, 1);

Clazz.newMeth(C$, 'getTextData$swingjs_api_js_DOMNode$Z',  function (node, doProcess) {
var nodeName=$I$(6).getAttr(node, "nodeName");
var isText="#text".equals$O(nodeName);
if (isText || "#cdata-section".equals$O(nodeName) ) {
var data=$I$(6).getAttr(node, "textContent");
if (!doProcess) return data;
var len=data.length$();
var ch=this.tempChars;
if (len > ch.length) ch=this.tempChars=$I$(8).ensureLength$O$I(ch, len * 2);
for (var i=len; --i >= 0; ) ch[i]=data.charAt$I(i);

p$1.setNode$swingjs_api_js_DOMNode.apply(this, [node]);
if (this.ver2) this.contentHandler.characters$CA$I$I(ch, 0, len);
 else this.docHandler.characters$CA$I$I(ch, 0, len);
return null;
}return null;
}, p$1);

Clazz.newMeth(C$, 'setNode$swingjs_api_js_DOMNode',  function (node) {
this.currentNode=node;
}, p$1);

Clazz.newMeth(C$, 'getNode$',  function () {
return this.currentNode;
});

Clazz.newMeth(C$, 'getFeature$S',  function (name) {
return (this.getProperty$S("\u0001" + name) != null );
});

Clazz.newMeth(C$, 'setFeature$S$Z',  function (name, value) {
this.setProperty$S$O("\u0001" + name, value ? Boolean.TRUE : null);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return (this.props == null  ? null : this.props.get$O(name));
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
if (value == null ) {
if (this.props != null ) this.props.remove$O(name);
return;
}if (this.props == null ) this.props=Clazz.new_($I$(1,1));
this.props.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getEntityResolver$',  function () {
return this.resolver;
});

Clazz.newMeth(C$, 'getDTDHandler$',  function () {
return this.dtdHandler;
});

Clazz.newMeth(C$, 'setContentHandler$org_xml_sax_ContentHandler',  function (handler) {
this.contentHandler=handler;
});

Clazz.newMeth(C$, 'getContentHandler$',  function () {
return this.contentHandler;
});

Clazz.newMeth(C$, 'getErrorHandler$',  function () {
return this.errorHandler;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
