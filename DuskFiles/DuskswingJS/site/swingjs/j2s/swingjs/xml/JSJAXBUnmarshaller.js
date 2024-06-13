(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','swingjs.xml.JSSAXParser','swingjs.api.js.DOMNode','swingjs.xml.JSJAXBClass','javax.xml.bind.JAXBElement','java.util.HashMap','java.lang.reflect.Array','swingjs.xml.JSJAXBField','javax.xml.namespace.QName','javajs.util.PT','swingjs.xml.JSXMLGregorianCalendarImpl','javax.xml.bind.DatatypeConverter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSJAXBUnmarshaller", null, 'javax.xml.bind.helpers.AbstractUnmarshallerImpl', 'org.xml.sax.ContentHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.haventUnmarshalled="";
},1);

C$.$fields$=[['S',['haventUnmarshalled'],'O',['context','javax.xml.bind.JAXBContext','parser','swingjs.xml.JSSAXParser','xmlSource','org.xml.sax.InputSource','jaxbClass','swingjs.xml.JSJAXBClass','doc','swingjs.api.js.DOMNode','javaObject','java.lang.Object']]
,['S',['noFields'],'O',['knownJavaClasses','java.util.Map','+seeAlsoMap','+knownJAXBClasses']]]

Clazz.newMeth(C$, 'c$$javax_xml_bind_JAXBContext',  function (context) {
Clazz.super_(C$, this);
this.context=context;
}, 1);

Clazz.newMeth(C$, 'unmarshal$org_w3c_dom_Node',  function (node) {
return null;
});

Clazz.newMeth(C$, 'getUnmarshallerHandler$',  function () {
return null;
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_stream_XMLStreamReader$Class',  function (reader, expectedType) {
this.parser=Clazz.new_($I$(2,1));
this.xmlSource=(reader).getSource$();
var o=p$1.doUnmarshal$swingjs_api_js_DOMNode$Class$I.apply(this, [null, expectedType, 2]);
C$.clearStatics$();
return o;
});

Clazz.newMeth(C$, 'unmarshal$org_xml_sax_XMLReader$org_xml_sax_InputSource',  function (reader, source) {
this.parser=reader;
this.xmlSource=source;
var classes=(this.context).getjavaClasses$();
var javaClass=null;
this.doc=null;
try {
switch (classes.length) {
case 0:
return null;
case 1:
javaClass=classes[0];
break;
default:
this.parser.setContentHandler$org_xml_sax_ContentHandler(this);
this.parser.parse$org_xml_sax_InputSource$I(this.xmlSource, 2);
this.doc=this.parser.getNode$();
javaClass=p$1.findClassForNode$swingjs_api_js_DOMNode$ClassA.apply(this, [this.doc, classes]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.xml.sax.SAXException")){
e.printStackTrace$();
} else {
throw e;
}
}
if (javaClass == null ) return null;
var o=p$1.doUnmarshal$swingjs_api_js_DOMNode$Class$I.apply(this, [this.doc, javaClass, classes.length > 1 ? 1 : 0]);
this.jaxbClass=null;
this.doc=null;
this.javaObject=null;
C$.clearStatics$();
return o;
});

Clazz.newMeth(C$, 'findClassForNode$swingjs_api_js_DOMNode$ClassA',  function (doc, classes) {
var node=doc.children[0] ||null;
var nodeName=$I$(3).getAttr(node, "localName");
for (var i=0; i < classes.length; i++) {
var jaxbClass=Clazz.new_($I$(4,1).c$$Class$O$Z$Z$javax_xml_namespace_QName,[classes[i], null, false, false, null]);
var name=jaxbClass.getQName$().getLocalPart$();
if (nodeName.equals$O(name)) return classes[i];
}
return null;
}, p$1);

Clazz.newMeth(C$, 'unmarshalField$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S',  function (field, node, className) {
if (field != null ) try {
return p$1.doUnmarshal$swingjs_api_js_DOMNode$Class$I.apply(this, [node, Clazz.forName(className == null  ? field.javaClassName : className), 3]);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'doUnmarshal$swingjs_api_js_DOMNode$Class$I',  function (node, javaClass, mode) {
if (this.jaxbClass != null ) this.addSeeAlso$Class(javaClass);
var oldJaxbClass=this.jaxbClass;
var oldDoc=this.doc;
this.doc=null;
var isEnum=javaClass.isEnum$();
var oldObject=this.javaObject;
var javaObject=null;
try {
if (!isEnum) javaObject=javaClass.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
this.javaObject=javaObject;
this.jaxbClass=C$.newUnmarshalledInstance$Class$O(javaClass, javaObject);
try {
this.parser.setContentHandler$org_xml_sax_ContentHandler(this);
switch (mode) {
case 1:
this.parser.parseDocument$swingjs_api_js_DOMNode$I(oldDoc, 1);
break;
case 2:
case 0:
this.parser.parse$org_xml_sax_InputSource$I(this.xmlSource, 1);
break;
case 3:
this.parser.walkDOMTree$swingjs_api_js_DOMNode$I(node, 1);
break;
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
p$1.processMaps.apply(this, []);
p$1.processArraysAndLists.apply(this, []);
if (this.jaxbClass.isEnum) javaObject=this.getEnumValue$swingjs_xml_JSJAXBClass$Class$S(this.jaxbClass, javaClass, $I$(2).getSimpleInnerText$swingjs_api_js_DOMNode(node));
var qname=this.jaxbClass.getQName$();
this.jaxbClass=oldJaxbClass;
this.doc=oldDoc;
this.javaObject=oldObject;
return (mode == 2 ? Clazz.new_($I$(5,1).c$$javax_xml_namespace_QName$Class$O,[qname, javaClass, javaObject]) : javaObject);
}, p$1);

Clazz.newMeth(C$, 'getEnumValue$swingjs_xml_JSJAXBClass$Class$S',  function (jaxbClass, javaClass, xmlName) {
if (jaxbClass == null ) jaxbClass=Clazz.new_($I$(4,1).c$$Class$O$Z$Z$javax_xml_namespace_QName,[javaClass, null, false, false, null]);
var name=jaxbClass.enumMap.get$O("//" + xmlName);
var o=null;

o = Enum.valueOf$Class$S(javaClass, name);
return o;
});

Clazz.newMeth(C$, 'processArraysAndLists',  function () {
for (var j=this.jaxbClass.fields.size$(); --j >= 0; ) {
var field=this.jaxbClass.fields.get$I(j);
if (!field.isAttribute && (field.boundListNodes != null  || field.listValues != null  ) && field.fieldType != 2  ) {
var type=(field.isArray ? field.javaClassName.replace$CharSequence$CharSequence("[]", "") : field.listClassName);
var holdsObject=(field.holdsObjects != 0);
field.setValue$O$O(p$1.fillArrayData$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$OA$S.apply(this, [field, null, null, (holdsObject ? null : type)]), this.javaObject);
}field.boundListNodes=null;
}
}, p$1);

Clazz.newMeth(C$, 'processMaps',  function () {
for (var j=this.jaxbClass.fields.size$(); --j >= 0; ) {
var field=this.jaxbClass.fields.get$I(j);
if (field.fieldType != 2) continue;
var nodes=field.boundListNodes;
var map=field.getObject$O(this.javaObject);
if (map == null ) {
field.setValue$O$O(map=Clazz.new_($I$(6,1)), this.javaObject);
}map.clear$();
if (nodes != null ) {
var keyType=((field.holdsObjects & 4) != 0 ? null : field.mapClassNameKey);
var valueType=((field.holdsObjects & 8) != 0 ? null : field.mapClassNameValue);
var className=this.needsUnmarshalling$swingjs_xml_JSJAXBField$S(field, keyType);
if (className != null ) keyType=className;
var keyFieldToUnmarshal=(className == null  ? null : field);
className=this.needsUnmarshalling$swingjs_xml_JSJAXBField$S(field, valueType);
if (className != null ) valueType=className;
var valueFieldToUnmarshal=(className == null  ? null : field);
for (var i=1, n=nodes.size$(); i < n; ) {
var key=p$1.getNodeObject$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S$O$Z.apply(this, [keyFieldToUnmarshal, nodes.get$I(i++), keyType, null, true]);
var value=p$1.getNodeObject$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S$O$Z.apply(this, [valueFieldToUnmarshal, nodes.get$I(i++), valueType, null, true]);
map.put$O$O(key, value);
}
}field.boundListNodes=null;
}
}, p$1);

Clazz.newMeth(C$, 'getArrayOfType$swingjs_xml_JSJAXBField$S$I',  function (field, type, len) {
var a=field.getObject$O(this.javaObject);
if (a != null ) return a;
if (type != null ) {
if (p$1.isPrimitive$S.apply(this, [type])) {
type=(type === "int"  ? "Integer" : type.substring$I$I(0, 1).toUpperCase$() + type.substring$I(1)) + ".TYPE";

a = Clazz.array(eval(type),len);
} else {
try {
a=Clazz.array(Clazz.forName(type), len);
} catch (e) {
if (Clazz.exceptionOf(e,"NegativeArraySizeException") || Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
}return a;
}return Clazz.array(java.lang.Object, [len]);
}, p$1);

Clazz.newMeth(C$, 'fillArrayData$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$OA$S',  function (field, node, data, arrayType) {
var haveData=(data != null );
var n=(haveData ? data.length : field.boundListNodes != null  ? field.boundListNodes.size$() : field.listValues.size$());
var a=p$1.getArrayOfType$swingjs_xml_JSJAXBField$S$I.apply(this, [field, arrayType, n]);
if (!haveData) data=a;
var className=this.needsUnmarshalling$swingjs_xml_JSJAXBField$S(field, arrayType);
var fieldToUnmarshal=(className == null  ? null : field);
var asObject=(arrayType == null );
if (className != null ) arrayType=className;
for (var i=0; i < n; i++) a[i]=(field.listValues != null  ? field.listValues.get$I(i) : p$1.getNodeObject$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S$O$Z.apply(this, [fieldToUnmarshal, (node == null  ? field.boundListNodes.get$I(i) : node), arrayType, data[i], asObject]));

return a;
}, p$1);

Clazz.newMeth(C$, 'getNodeObject$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S$O$Z',  function (fieldToUnmarshal, node, type, data, asObject) {
if (fieldToUnmarshal != null ) {
return p$1.unmarshalField$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S.apply(this, [fieldToUnmarshal, node, type]);
}if (node == null ) return null;
if (data == null ) data=$I$(2).getSimpleInnerText$swingjs_api_js_DOMNode(node);
if (type == null ) {
type=$I$(2).getAttribute$swingjs_api_js_DOMNode$S(node, "xsi:type");
if (type == null ) return null;
if (type.indexOf$S(":") >= 0) {
if (!type.startsWith$S("xs:")) {
var qname=p$1.getQnameForAttribute$S$S$S.apply(this, [null, null, type]);
var field=this.getFieldFromQName$javax_xml_namespace_QName(qname);
return p$1.unmarshalField$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S.apply(this, [field, node, null]);
}} else if (asObject) {
type=$I$(8).boxPrimitive$S(type);
}}return p$1.convertFromType$swingjs_xml_JSJAXBField$O$S.apply(this, [null, data, type]);
}, p$1);

Clazz.newMeth(C$, 'start$swingjs_api_js_DOMNode$javax_xml_namespace_QName$org_xml_sax_Attributes',  function (node, qName, atts) {
var text=$I$(2).getSimpleInnerText$swingjs_api_js_DOMNode(node);
if (this.doc == null ) {
this.doc=node;
p$1.setDocAttributes$javax_xml_namespace_QName$S$org_xml_sax_Attributes.apply(this, [qName, text, atts]);
return;
}var field=this.getFieldFromQName$javax_xml_namespace_QName(qName);
if (field != null ) {
p$1.bindNode$swingjs_api_js_DOMNode$swingjs_xml_JSJAXBField$org_xml_sax_Attributes.apply(this, [node, field, atts]);
field.setCharacters$S(text);
p$1.setFieldValue$swingjs_xml_JSJAXBField.apply(this, [field]);
}}, p$1);

Clazz.newMeth(C$, 'setDocAttributes$javax_xml_namespace_QName$S$org_xml_sax_Attributes',  function (qName, value, atts) {
if (this.jaxbClass.xmlValueField != null ) {
this.jaxbClass.xmlValueField.setCharacters$S(value);
this.jaxbClass.xmlValueField.setNode$swingjs_api_js_DOMNode(this.doc);
p$1.setFieldValue$swingjs_xml_JSJAXBField.apply(this, [this.jaxbClass.xmlValueField]);
}this.prepareForUnmarshalling$S(atts.getValue$S("xmlns"));
for (var i=atts.getLength$(); --i >= 0; ) {
var uri=atts.getURI$I(i);
var localName=atts.getLocalName$I(i);
var qname=atts.getQName$I(i);
if (qname.equals$O("xmlns") || qname.startsWith$S("xmlns:") || qname.startsWith$S("xsi:")  ) {
continue;
}var qn=p$1.getQnameForAttribute$S$S$S.apply(this, [uri, localName, qname]);
var field=this.getFieldFromQName$javax_xml_namespace_QName(qn);
if (field != null ) {
field.setNode$swingjs_api_js_DOMNode(this.doc);
field.setAttributeData$S(atts.getValue$I(i));
p$1.setFieldValue$swingjs_xml_JSJAXBField.apply(this, [field]);
}}
}, p$1);

Clazz.newMeth(C$, 'getQnameForAttribute$S$S$S',  function (uri, localName, qname) {
if (qname.indexOf$S(":") >= 0) {
uri=this.parser.getNamespaceForAttributeName$S(qname);
localName=qname.substring$I(qname.indexOf$S(":") + 1);
}return Clazz.new_($I$(9,1).c$$S$S$S,[uri, localName, ""]);
}, p$1);

Clazz.newMeth(C$, 'bindNode$swingjs_api_js_DOMNode$swingjs_xml_JSJAXBField$org_xml_sax_Attributes',  function (node, field, atts) {
if (field != null ) {
field.setNode$swingjs_api_js_DOMNode(node);
field.setAttributes$org_xml_sax_Attributes(atts);
}}, p$1);

Clazz.newMeth(C$, 'clearStatics$',  function () {
C$.knownJavaClasses.clear$();
C$.knownJAXBClasses.clear$();
C$.seeAlsoMap.clear$();
$I$(4).clearStatics$();
}, 1);

Clazz.newMeth(C$, 'newUnmarshalledInstance$Class$O',  function (javaClass, javaObject) {
var name=javaClass.getCanonicalName$();
var jjc=C$.knownJAXBClasses.get$O(name);
if (jjc == null ) {
jjc=Clazz.new_($I$(4,1).c$$Class$O$Z$Z$javax_xml_namespace_QName,[javaClass, javaObject, false, false, null]);
C$.knownJAXBClasses.put$O$O(name, jjc);
return jjc;
}return jjc.clone$();
}, 1);

Clazz.newMeth(C$, 'needsUnmarshalling$swingjs_xml_JSJAXBField$S',  function (field, javaClassName) {
if (field.isSimpleType$S(javaClassName)) return null;
var isMarshalled=false;
if (javaClassName == null ) javaClassName=field.javaClassName;
if (field.xmlType != null ) {
var typeClassName=p$1.getXMLTypeClassName$swingjs_xml_JSJAXBField.apply(this, [field]);
if (typeClassName == null ) return null;
javaClassName=typeClassName;
}try {
isMarshalled=(C$.knownJavaClasses.containsKey$O(javaClassName) ? C$.knownJavaClasses.get$O(javaClassName).booleanValue$() : $I$(4,"checkC$__ANN__$swingjs_xml_JSJAXBClass$Class$Z$Z",[null, Clazz.forName(javaClassName), false, false]));
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.out.println$S("JSJAXBClass: class was not found: " + javaClassName);
e.printStackTrace$();
} else {
throw e;
}
} finally {
C$.knownJavaClasses.put$O$O(javaClassName, Boolean.valueOf$Z(isMarshalled));
}
return (isMarshalled ? javaClassName : null);
});

Clazz.newMeth(C$, 'getXMLTypeClassName$swingjs_xml_JSJAXBField',  function (field) {
if (field.xmlType.indexOf$S(":") >= 0 && !field.xmlType.startsWith$S("xs:") ) {
var qname=p$1.getQnameForAttribute$S$S$S.apply(this, [null, null, field.xmlType]);
field=this.getFieldFromQName$javax_xml_namespace_QName(qname);
return (field == null  ? null : field.javaClassName);
}return null;
}, p$1);

Clazz.newMeth(C$, 'prepareForUnmarshalling$S',  function (defaultNamespace) {
this.jaxbClass.setUnmarshallerDefaultNamespace$S(defaultNamespace);
var seeAlso=this.jaxbClass.seeAlso;
if (seeAlso != null ) {
for (var i=0; i < seeAlso.size$(); i++) {
var cl=seeAlso.get$I(i);
try {
this.addSeeAlso$Class(Clazz.forName(cl));
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.out.println$S("JSJAXBClass seeAlso[" + i + "] not found: " + cl );
} else {
throw e;
}
}
}
}for (var i=this.jaxbClass.fields.size$(); --i >= 0; ) {
var field=this.jaxbClass.fields.get$I(i);
p$1.bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z.apply(this, [field.qualifiedName, field, false]);
p$1.bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z.apply(this, [field.qualifiedWrapName, field, false]);
p$1.bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z.apply(this, [field.qualifiedTypeName, field, false]);
}
});

Clazz.newMeth(C$, 'addSeeAlso$Class',  function (cl) {
var jaxbClass=Clazz.new_($I$(4,1).c$$Class$O$Z$Z$javax_xml_namespace_QName,[cl, null, false, false, null]);
var field=jaxbClass.fields.get$I(0);
p$1.bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z.apply(this, [field.qualifiedName, field, true]);
p$1.bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z.apply(this, [field.qualifiedWrapName, field, true]);
p$1.bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z.apply(this, [field.qualifiedTypeName, field, true]);
});

Clazz.newMeth(C$, 'bindQName$javax_xml_namespace_QName$swingjs_xml_JSJAXBField$Z',  function (q, field, isSeeAlso) {
if (q == null ) return;
var map=(isSeeAlso ? C$.seeAlsoMap : this.jaxbClass.unmarshallerFieldMap);
map.put$O$O(q.getLocalPart$(), field);
var qn=q.getNamespaceURI$() + ":" + q.getLocalPart$() ;
map.put$O$O(qn, field);
map.put$O$O("/lc/" + qn.toLowerCase$(), field);
}, p$1);

Clazz.newMeth(C$, 'getFieldFromQName$javax_xml_namespace_QName',  function (qName) {
var key=qName.getNamespaceURI$() + ":" + qName.getLocalPart$() ;
var f=this.jaxbClass.unmarshallerFieldMap.get$O(key);
if (f == null ) f=C$.seeAlsoMap.get$O(key);
if (f == null ) f=this.jaxbClass.unmarshallerFieldMap.get$O("/lc/" + key.toLowerCase$());
if (f == null ) p$1.notifyNoField$javax_xml_namespace_QName.apply(this, [qName]);
return f;
});

Clazz.newMeth(C$, 'notifyNoField$javax_xml_namespace_QName',  function (qName) {
var key=";" + qName + ";" ;
if (C$.noFields.indexOf$S(key) < 0) {
System.out.println$S("JSJAXBUnmarshaller could not associate a field with " + qName);
C$.noFields+=key;
}}, p$1);

Clazz.newMeth(C$, 'setFieldValue$swingjs_xml_JSJAXBField',  function (field) {
if (field.isNil) return;
var data=(field.isAttribute ? field.xmlAttributeData : field.xmlCharacterData.trim$());
if (!field.isAttribute && data.length$() == 0  && field.defaultValue != null  ) data=field.defaultValue;
if (field.asList) {
field.setValue$O$O(p$1.fillArrayData$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$OA$S.apply(this, [field, field.boundNode, data.split$S(" "), p$1.getArrayType$swingjs_xml_JSJAXBField.apply(this, [field])]), this.javaObject);
return;
}if (field.fieldType == 2) {
var children=$I$(2).getChildren$swingjs_api_js_DOMNode(field.boundNode);
for (var i=0; i < children.length; i++) {
var entry=$I$(2).getChildren$swingjs_api_js_DOMNode(children[i]);
field.setNode$swingjs_api_js_DOMNode(p$1.addXmlns$swingjs_api_js_DOMNode.apply(this, [entry[0]]));
field.setNode$swingjs_api_js_DOMNode(entry.length > 1 ? p$1.addXmlns$swingjs_api_js_DOMNode.apply(this, [entry[1]]) : null);
}
return;
}if (field.qualifiedWrapName != null ) {
var children=$I$(2).getChildren$swingjs_api_js_DOMNode(field.boundNode);
for (var i=0; i < children.length; i++) field.setNode$swingjs_api_js_DOMNode(p$1.addXmlns$swingjs_api_js_DOMNode.apply(this, [children[i]]));

return;
}if (field.boundListNodes != null ) {
return;
}var className=this.needsUnmarshalling$swingjs_xml_JSJAXBField$S(field, null);
if (className != null ) {
field.setValue$O$O(p$1.unmarshalField$swingjs_xml_JSJAXBField$swingjs_api_js_DOMNode$S.apply(this, [field, field.boundNode, className]), this.javaObject);
return;
}var dataType;
if ("java.lang.Object".equals$O(field.javaClassName) && field.xmlType != null  ) {
dataType=$I$(8).boxPrimitive$S(field.xmlType);
} else {
dataType=field.javaClassName;
}field.setValue$O$O(p$1.convertFromType$swingjs_xml_JSJAXBField$O$S.apply(this, [field, data, dataType]), this.javaObject);
}, p$1);

Clazz.newMeth(C$, 'addXmlns$swingjs_api_js_DOMNode',  function (node) {
this.parser.registerPrefixes$swingjs_api_js_DOMNode(node);
return node;
}, p$1);

Clazz.newMeth(C$, 'getArrayType$swingjs_xml_JSJAXBField',  function (field) {
return (field.isArray ? field.javaClassName.replace$CharSequence$CharSequence("[]", "") : field.listClassName);
}, p$1);

Clazz.newMeth(C$, 'isPrimitive$S',  function (type) {
return $I$(10).isOneOf$S$S(type, ";byte;short;int;long;float;double;boolean;");
}, p$1);

Clazz.newMeth(C$, 'convertFromType$swingjs_xml_JSJAXBField$O$S',  function (field, objVal, type) {
var newVal=null;
try {
if (!(Clazz.instanceOf(objVal, "java.lang.String"))) return newVal=objVal;
var val=objVal;
if (field != null ) {
if (field.typeAdapter != null ) {
var adapter=field.getAdapter$();
try {
return newVal=adapter.unmarshal$O(val);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}if (type.contains$CharSequence("XMLGregorianCalendar")) {
return newVal=Clazz.new_($I$(11,1).c$$S,[val]);
}if (field.xmlSchemaType != null ) {
switch (field.xmlSchemaType) {
case "base64Binary":
return newVal=$I$(12).parseBase64Binary$S(val);
case "hexBinary":
return newVal=$I$(12).parseHexBinary$S(val);
case "dateTime":
return newVal=Clazz.new_(java.util.Date.c$$S,[+Date.parse(val) ||null]);
default:
if (this.haventUnmarshalled.indexOf$S(field.xmlSchemaType) < 0) {
this.haventUnmarshalled+=";" + field.xmlSchemaType;
System.out.println$S("JSJAXBUnmarhsaller using target type " + type + " for " + field.xmlSchemaType );
}case "xsd:ID":
break;
}
}}if (type.startsWith$S("xs:")) {
var lctype=type.substring$I(3);
type=type.substring$I$I(3, 4).toUpperCase$() + lctype.substring$I(1);
if (field == null  || field.javaClassName == null   || field.javaClassName.equals$O("java.lang.Object") ) {
switch (type) {
case "Decimal":
type="java.math.BigDecimal";
break;
case "Unsignedlong":
case "Integer":
type="java.math.BigInteger";
break;
case "Int":
case "Unsignedshort":
type="Integer";
break;
case "Unsignedbyte":
type="Short";
break;
case "Unsignedint":
type="Long";
break;
default:
if (p$1.isPrimitive$S.apply(this, [lctype])) {
}break;
}
} else {
type=field.javaClassName;
}}if (type.equals$O("Anysimpletype") || type.equals$O("String") ) {
return newVal=val;
}var nan=p$1.getNanInf$O.apply(this, [objVal]);
if (nan != null ) return newVal=nan;
switch (type) {
case "boolean":

return newVal = (objVal=="true");
case "byte":
case "short":
case "int":
case "unsigngedshort":
case "unsignedbyte":
case "unsignedint":
case "long":
case "double":
case "float":

return newVal = +objVal;
case "G":
case "Date":
case "Datetime":
case "Time":
return newVal=Clazz.new_($I$(11,1).c$$S,[val]);
case "Duration":
return null;
case "Notation":
case "Qname":
return newVal=$I$(12).parseQName$S$javax_xml_namespace_NamespaceContext(val, null);
case "unsignedlong":
type="java.math.BigInteger";
break;
}
var cl=null;
try {
cl=Clazz.forName(type);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
if (cl.isEnum$()) {
if ($I$(4).hasAnnotations$O(cl)) {
return this.getEnumValue$swingjs_xml_JSJAXBClass$Class$S(null, cl, val);
}}
if (cl.$clazz$.valueOf$S) return (objVal == null || objVal == "" ? null : cl.$clazz$.valueOf$S(objVal));

if (cl.$clazz$.c$$S) return newVal = Clazz.new_(cl.$clazz$.c$$S,[objVal]);
return null;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return null;
} else {
throw e;
}
} finally {
}
}, p$1);

Clazz.newMeth(C$, 'getNanInf$O',  function (objVal) {
if (objVal.equals$O("NaN")) {

return NaN;
} else if (objVal.equals$O("INF")) {

return Infinity;
} else if (objVal.equals$O("-INF")) {

return -Infinity;
}return null;
}, p$1);

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes',  function (uri, localName, qName, atts) {
p$1.start$swingjs_api_js_DOMNode$javax_xml_namespace_QName$org_xml_sax_Attributes.apply(this, [this.parser.getNode$(), Clazz.new_($I$(9,1).c$$S$S$S,[uri, localName, ""]), atts]);
});

Clazz.newMeth(C$, 'characters$CA$I$I',  function (ch, start, length) {
});

Clazz.newMeth(C$, 'endElement$S$S$S',  function (uri, localName, qName) {
});

Clazz.newMeth(C$, 'endDocument$',  function () {
});

Clazz.newMeth(C$, 'endPrefixMapping$S',  function (prefix) {
});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I',  function (ch, start, length) {
});

Clazz.newMeth(C$, 'processingInstruction$S$S',  function (target, data) {
});

Clazz.newMeth(C$, 'setDocumentLocator$org_xml_sax_Locator',  function (locator) {
});

Clazz.newMeth(C$, 'skippedEntity$S',  function (name) {
});

Clazz.newMeth(C$, 'startDocument$',  function () {
});

Clazz.newMeth(C$, 'startPrefixMapping$S$S',  function (prefix, uri) {
});

C$.$static$=function(){C$.$static$=0;
C$.knownJavaClasses=Clazz.new_($I$(1,1));
C$.seeAlsoMap=Clazz.new_($I$(1,1));
C$.knownJAXBClasses=Clazz.new_($I$(1,1));
C$.noFields="";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
