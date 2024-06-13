(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','javax.xml.namespace.QName','swingjs.xml.JSJAXBClass','swingjs.api.js.DOMNode','swingjs.JSUtil','javax.xml.bind.DatatypeConverter','swingjs.xml.JSJAXBField']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSJAXBMarshaller", null, 'javax.xml.bind.helpers.AbstractMarshallerImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['writer','java.io.Writer','outputStream','java.io.OutputStream','context','javax.xml.bind.JAXBContext','result','javax.xml.transform.stream.StreamResult','javaObject','java.lang.Object']]
,['S',['cantmarshall','defaultNamespace'],'O',['mapQualifierLevel','java.util.Map','textarea','swingjs.api.js.DOMNode','xsi','javax.xml.namespace.QName','+xs','+qnEntryKey','+qnEntryValue']]]

Clazz.newMeth(C$, 'c$$javax_xml_bind_JAXBContext',  function (context) {
Clazz.super_(C$, this);
this.context=context;
}, 1);

Clazz.newMeth(C$, 'marshal$O$javax_xml_transform_Result',  function (jaxbElement, result) {
var javaClass;
var qname;
if (Clazz.instanceOf(jaxbElement, "javax.xml.bind.JAXBElement")) {
var element=jaxbElement;
this.javaObject=element.getValue$();
javaClass=element.getDeclaredType$();
qname=element.getName$();
} else {
this.javaObject=jaxbElement;
javaClass=this.javaObject.getClass$();
qname=null;
}this.result=result;
this.writer=this.result.getWriter$();
this.outputStream=this.result.getOutputStream$();
p$1.doMarshal$Class$O$javax_xml_namespace_QName$O$swingjs_xml_JSJAXBField$Z.apply(this, [javaClass, this.javaObject, qname, null, null, false]);
$I$(3).clearStatics$();
});

Clazz.newMeth(C$, 'doMarshal$Class$O$javax_xml_namespace_QName$O$swingjs_xml_JSJAXBField$Z',  function (javaClass, javaObject, qname, tagObject, tagField, addXsiType) {
var jaxbClass=Clazz.new_([javaClass, javaObject, tagField != null  && tagField.isXmlIDREF , true, qname],$I$(3,1).c$$Class$O$Z$Z$javax_xml_namespace_QName);
jaxbClass.tagField=tagField;
jaxbClass.tagObject=tagObject;
var oldMap=null;
var oldObject=this.javaObject;
this.javaObject=javaObject;
if (tagField == null ) {
C$.clearQualifierMap$();
} else {
oldMap=C$.newQualifierMap$java_util_Map(null);
}p$1.writeXML$swingjs_xml_JSJAXBClass$Z$Z.apply(this, [jaxbClass, tagField == null , addXsiType]);
this.javaObject=oldObject;
C$.newQualifierMap$java_util_Map(oldMap);
}, p$1);

Clazz.newMeth(C$, 'newQualifierMap$java_util_Map',  function (newMap) {
if (newMap != null ) {
C$.mapQualifierLevel=newMap;
return null;
}var oldMap=C$.mapQualifierLevel;
C$.mapQualifierLevel=Clazz.new_($I$(1,1).c$$java_util_Map,[oldMap]);
return oldMap;
}, 1);

Clazz.newMeth(C$, 'clearQualifierMap$',  function () {
C$.mapQualifierLevel.clear$();
C$.defaultNamespace=null;
}, 1);

Clazz.newMeth(C$, 'getXmlnsIfUnusedYet$javax_xml_namespace_QName$Z',  function (qname, isRoot) {
var xmlns=qname.getNamespaceURI$();
if (xmlns.length$() == 0) return null;
if (!isRoot && !C$.mapQualifierLevel.containsKey$O(xmlns) ) {
C$.mapQualifierLevel.put$O$O(xmlns, Integer.valueOf$I(1));
return xmlns;
}return null;
}, 1);

Clazz.newMeth(C$, 'getXMLQname$javax_xml_namespace_QName$Z',  function (qname, allowDefault) {
var l=qname.getLocalPart$();
var ns=qname.getNamespaceURI$();
var p=qname.getPrefix$();
if (p.length$() > 0) p+=":";
return (ns == null  || ns.length$() == 0  || allowDefault && ns.equals$O(C$.defaultNamespace)   ? l : p + l);
}, 1);

Clazz.newMeth(C$, 'isArray$O',  function (value) {
if (value == null  || Clazz.instanceOf(value, Clazz.array(Byte.TYPE, -1)) ) return false;
{
return !!value.__ARRAYTYPE
}
}, 1);

Clazz.newMeth(C$, 'getField$swingjs_xml_JSJAXBClass$S',  function (jaxbClass, javaName) {
return jaxbClass.getFieldFromJavaNameForMarshaller$S(javaName);
}, 1);

Clazz.newMeth(C$, 'escapeString$S$Z',  function (str, isAttribute) {
if (C$.textarea == null ) C$.textarea=$I$(4).createElement("textarea", null);

str= (this.textarea.innerHTML=str,this.textarea.innerHTML);
str=str.replace$CharSequence$CharSequence("&", "&amp;");
if (isAttribute) str=str.replace$CharSequence$CharSequence("\"", "&quot;");

for (var i = str.length; --i >= 0;) { var c = str.codePointAt(i);
if (c >= 127 || c < 32) str = str.substring(0, i) + "&#" + c + ";" + str.substring(i + 1);
}
return str;
}, 1);

Clazz.newMeth(C$, 'writeXML$swingjs_xml_JSJAXBClass$Z$Z',  function (jaxbClass, isRoot, addXsiType) {
var qname=(isRoot && jaxbClass.qualifiedRootName != null   ? jaxbClass.qualifiedRootName : jaxbClass.tagField == null  ? jaxbClass.getQName$() : jaxbClass.tagField.qualifiedName);
if (isRoot) {
p$1.outputHeader.apply(this, []);
}C$.getXmlnsIfUnusedYet$javax_xml_namespace_QName$Z(qname, isRoot);
p$1.writeTagOpen$javax_xml_namespace_QName$Z.apply(this, [qname, true]);
if (addXsiType) {
p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [jaxbClass.getQName$(), false]);
var v=jaxbClass.tagField.getValue$O(jaxbClass.tagObject);
var name=p$1.getEntryType$javax_xml_namespace_QName$O.apply(this, [jaxbClass.getQName$(), v]);
p$1.outputInstanceType$S.apply(this, [name]);
}if (isRoot) p$1.addDefaultNameSpace.apply(this, []);
p$1.addAllNameSpaces$swingjs_xml_JSJAXBClass.apply(this, [jaxbClass]);
if (!jaxbClass.isXmlIDREF) p$1.addFields$swingjs_xml_JSJAXBClass$Z.apply(this, [jaxbClass, true]);
if (!C$.hasElements$java_util_List(jaxbClass.fields)) {
p$1.output$S.apply(this, [" />"]);
return;
}p$1.output$S.apply(this, [">"]);
if (jaxbClass.isXmlIDREF) {
p$1.writeValue$swingjs_xml_JSJAXBField$O.apply(this, [jaxbClass.xmlIDField, jaxbClass.xmlIDField.getObject$O(this.javaObject)]);
} else if (jaxbClass.enumMap != null ) {
var s=jaxbClass.enumMap.get$O("/" + jaxbClass.tagField.getObject$O(jaxbClass.tagObject).toString());
p$1.output$S.apply(this, [s]);
} else {
p$1.addFields$swingjs_xml_JSJAXBClass$Z.apply(this, [jaxbClass, false]);
}if (isRoot) p$1.output$S.apply(this, ["\n"]);
p$1.writeTagClose$javax_xml_namespace_QName$Z.apply(this, [qname, true]);
if (isRoot) p$1.output$S.apply(this, ["\n"]);
}, p$1);

Clazz.newMeth(C$, 'hasElements$java_util_List',  function (fields) {
for (var i=0, n=fields.size$(); i < n; i++) if (!fields.get$I(i).isAttribute) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'addAllNameSpaces$swingjs_xml_JSJAXBClass',  function (jaxbClass) {
p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [jaxbClass.getQName$(), true]);
for (var i=0, n=jaxbClass.fields.size$(); i < n; i++) {
p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [jaxbClass.fields.get$I(i).qualifiedName, false]);
}
p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [C$.xsi, false]);
p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [C$.xs, false]);
}, p$1);

Clazz.newMeth(C$, 'addFields$swingjs_xml_JSJAXBClass$Z',  function (jaxbClass, isAttribute) {
var field;
if (jaxbClass.propOrder.size$() == 0 || isAttribute ) {
for (var i=0, n=jaxbClass.fields.size$(); i < n; i++) if (isAttribute == (field=jaxbClass.fields.get$I(i)).isAttribute ) p$1.addField$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField.apply(this, [jaxbClass, field]);

} else {
for (var i=0, n=jaxbClass.propOrder.size$(); i < n; i++) {
var name=jaxbClass.propOrder.get$I(i);
field=C$.getField$swingjs_xml_JSJAXBClass$S(jaxbClass, name);
if (!field.isAttribute) p$1.addField$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField.apply(this, [jaxbClass, field]);
}
}}, p$1);

Clazz.newMeth(C$, 'addField$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField',  function (jaxbClass, field) {
if (field != null  && !field.isTransient ) p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, field, field.getObject$O(this.javaObject), field.holdsObjects != 0]);
}, p$1);

Clazz.newMeth(C$, 'addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z',  function (jaxbClass, field, value, addXsiType) {
if (value == null ) {
if (field.isNillable) p$1.writeField$swingjs_xml_JSJAXBField$O$Z.apply(this, [field, null, addXsiType]);
return;
}if (Clazz.instanceOf(value, "java.util.List")) {
p$1.writeFieldList$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$java_util_List.apply(this, [jaxbClass, field, value]);
} else if (Clazz.instanceOf(value, "java.util.Map")) {
p$1.writeFieldMap$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$java_util_Map.apply(this, [jaxbClass, field, value]);
} else if (C$.isArray$O(value)) {
p$1.writeFieldArray$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O.apply(this, [jaxbClass, field, value]);
} else if (!field.isAttribute && $I$(3).hasAnnotations$O(value) ) {
p$1.doMarshal$Class$O$javax_xml_namespace_QName$O$swingjs_xml_JSJAXBField$Z.apply(this, [value.getClass$(), value, null, this.javaObject, field, addXsiType]);
} else {
p$1.writeField$swingjs_xml_JSJAXBField$O$Z.apply(this, [field, value, addXsiType]);
}}, p$1);

Clazz.newMeth(C$, 'writeField$swingjs_xml_JSJAXBField$O$Z',  function (field, value, addXsiType) {
if (field.isAttribute) {
p$1.writeAttribute$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else if (field.isXmlValue) {
p$1.writeValue$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
p$1.writeTagOpen$javax_xml_namespace_QName$Z.apply(this, [field.qualifiedName, true]);
if (value == null  && field.isNillable ) {
p$1.outputNil.apply(this, []);
p$1.output$S.apply(this, [" />"]);
return;
}if (addXsiType) {
p$1.outputInstanceType$S.apply(this, [p$1.getEntryType$javax_xml_namespace_QName$O.apply(this, [null, value])]);
}p$1.output$S.apply(this, [">"]);
p$1.writeValue$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
p$1.writeTagClose$javax_xml_namespace_QName$Z.apply(this, [field.qualifiedName, true]);
}}, p$1);

Clazz.newMeth(C$, 'getEntryType$javax_xml_namespace_QName$O',  function (qname, value) {
var className=value.getClass$().getName$();
switch (className) {
case "java.lang.Integer":
return "xs:int";
case "java.lang.Boolean":
case "java.lang.Byte":
case "java.lang.Short":
case "java.lang.Long":
case "java.lang.Float":
case "java.lang.Double":
return "xs:" + className.substring$I(10).toLowerCase$();
case "java.lang.String":
return "xs:string";
case "java.math.BigInteger":
return "xs:integer";
default:
if (qname != null ) return C$.getXMLQname$javax_xml_namespace_QName$Z(qname, true);
className=$I$(3).getXmlNameFromClassName$S(className);
return className.substring$I$I(0, 1).toLowerCase$() + className.substring$I(1);
}
}, p$1);

Clazz.newMeth(C$, 'writeAttribute$swingjs_xml_JSJAXBField$O',  function (field, value) {
if (value == null ) return;
if (value.getClass$().isEnum$()) {
var jjc=Clazz.new_([value.getClass$(), null, false, true, null],$I$(3,1).c$$Class$O$Z$Z$javax_xml_namespace_QName);
if (jjc.enumMap != null ) {
var o=jjc.enumMap.get$O("/" + value.toString());
if (o != null ) value=o;
}}p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [field.qualifiedName, false]);
p$1.output$S.apply(this, [" " + C$.getXMLQname$javax_xml_namespace_QName$Z(field.qualifiedName, true) + "=\"" ]);
p$1.writeValue$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
p$1.output$S.apply(this, ["\""]);
}, p$1);

Clazz.newMeth(C$, 'writeTagOpen$javax_xml_namespace_QName$Z',  function (qname, unused) {
p$1.output$S.apply(this, ["\n<" + C$.getXMLQname$javax_xml_namespace_QName$Z(qname, true)]);
p$1.addNameSpaceIfNeeded$javax_xml_namespace_QName$Z.apply(this, [qname, false]);
}, p$1);

Clazz.newMeth(C$, 'addDefaultNameSpace',  function () {
}, p$1);

Clazz.newMeth(C$, 'fixNamespace$S',  function (space) {
return space;
}, p$1);

Clazz.newMeth(C$, 'addNameSpaceIfNeeded$javax_xml_namespace_QName$Z',  function (qname, isRoot) {
var ns=C$.getXmlnsIfUnusedYet$javax_xml_namespace_QName$Z(qname, false);
if (ns != null ) p$1.output$S.apply(this, [" xmlns:" + qname.getPrefix$() + "=\"" + p$1.fixNamespace$S.apply(this, [ns]) + "\"" ]);
}, p$1);

Clazz.newMeth(C$, 'writeTagClose$javax_xml_namespace_QName$Z',  function (qname, unused) {
p$1.output$S.apply(this, ["</" + C$.getXMLQname$javax_xml_namespace_QName$Z(qname, true) + ">" ]);
}, p$1);

Clazz.newMeth(C$, 'writeValue$swingjs_xml_JSJAXBField$O',  function (field, value) {
if (field.xmlSchemaType != null ) {
p$1.writeSchema$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else if (field.typeAdapter != null ) {
p$1.writeTypeAdapter$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else if (field.mimeType != null ) {
p$1.writeMimeType$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
}}, p$1);

Clazz.newMeth(C$, 'writeMimeType$swingjs_xml_JSJAXBField$O',  function (field, value) {
$I$(5).notImplemented$S(field.text);
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
}, p$1);

Clazz.newMeth(C$, 'writeTypeAdapter$swingjs_xml_JSJAXBField$O',  function (field, value) {
var adapter=field.getAdapter$();
if (adapter == null ) {
p$1.writeValue$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
try {
p$1.output$S.apply(this, [adapter.marshal$O(value)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'writeSchema$swingjs_xml_JSJAXBField$O',  function (field, value) {
if (Clazz.instanceOf(value, "java.util.Date") || Clazz.instanceOf(value, "swingjs.xml.JSXMLGregorianCalendarImpl") ) {
p$1.writeDate$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
switch (field.xmlSchemaType) {
case "hexBinary":
p$1.output$S.apply(this, [$I$(6).printHexBinary$BA(value)]);
break;
case "base64Binary":
p$1.output$S.apply(this, [$I$(6).printBase64Binary$BA(value)]);
break;
default:
if (!$I$(7).isknownSchemaType$S(field.xmlSchemaType) && C$.cantmarshall.indexOf$S(field.xmlSchemaType) < 0 ) {
C$.cantmarshall+=";" + field.xmlSchemaType;
}case "xsd:ID":
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
break;
}
}}, p$1);

Clazz.newMeth(C$, 'writeDate$swingjs_xml_JSJAXBField$O',  function (field, value) {
if (Clazz.instanceOf(value, "java.util.Date")) {

value = value.toISOString();
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
return;
}var cal=(value);
var schema=cal.xmlSchema;
if (field.xmlSchemaType != null ) cal.setXMLSchemaType$S(field.xmlSchemaType);
p$1.output$S.apply(this, [cal.toXMLFormat$()]);
cal.xmlSchema=schema;
}, p$1);

Clazz.newMeth(C$, 'writeFieldArray$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O',  function (jaxbClass, field, values) {
var list=values;
var asList=field.asList;
var isNillable=!asList && field.isNillable ;
var wrapName=field.qualifiedWrapName;
var isNull=(values == null );
var isEmpty=(!isNull && list.length == 0 );
if (asList) wrapName=field.qualifiedName;
if (wrapName != null ) {
p$1.writeTagOpen$javax_xml_namespace_QName$Z.apply(this, [wrapName, true]);
p$1.output$S.apply(this, [">"]);
} else if (isEmpty && !isNillable ) {
return;
}for (var i=0, pt=0, n=list.length; i < n; i++) {
var value=list[i];
if (asList) {
if (value == null ) continue;
if (pt++ > 0) p$1.output$S.apply(this, [" "]);
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
if (value == null  && !isNillable ) continue;
if (field.listFields == null ) {
p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, field, value, field.javaClassName.equals$O("Object[]")]);
} else {
var f=jaxbClass.getFieldFromJavaNameForMarshaller$S(field.javaName + "::" + value.getClass$().getName$() );
p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, f, value, false]);
}}}
if (wrapName != null ) {
if (!asList) p$1.output$S.apply(this, ["\n"]);
p$1.writeTagClose$javax_xml_namespace_QName$Z.apply(this, [wrapName, true]);
}}, p$1);

Clazz.newMeth(C$, 'writeFieldList$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$java_util_List',  function (jaxbClass, field, list) {
var asList=field.asList;
var isNillable=!asList && field.isNillable ;
var wrapName=field.qualifiedWrapName;
var isNull=(list == null );
var isEmpty=(!isNull && list.isEmpty$() );
if (asList) wrapName=field.qualifiedName;
if (wrapName != null ) {
p$1.writeTagOpen$javax_xml_namespace_QName$Z.apply(this, [wrapName, true]);
p$1.output$S.apply(this, [">"]);
} else if (isEmpty && !isNillable ) {
return;
}for (var i=0, pt=0, n=list.size$(); i < n; i++) {
var value=list.get$I(i);
if (asList) {
if (value == null ) continue;
if (pt++ > 0) p$1.output$S.apply(this, [" "]);
p$1.outputSimple$swingjs_xml_JSJAXBField$O.apply(this, [field, value]);
} else {
if (value == null  && !isNillable ) continue;
if (field.listFields == null ) {
p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, field, value, field.holdsObjects != 0]);
} else {
var f=jaxbClass.getFieldFromJavaNameForMarshaller$S(field.javaName + "::" + value.getClass$().getName$() );
p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, f, value, false]);
}}}
if (wrapName != null ) {
if (!asList) p$1.output$S.apply(this, ["\n"]);
p$1.writeTagClose$javax_xml_namespace_QName$Z.apply(this, [wrapName, true]);
}}, p$1);

Clazz.newMeth(C$, 'writeFieldMap$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$java_util_Map',  function (jaxbClass, field, map) {
var isNillable=field.isNillable;
var wrapName=field.qualifiedWrapName;
if (wrapName == null ) wrapName=field.qualifiedName;
var isNull=(map == null );
p$1.writeTagOpen$javax_xml_namespace_QName$Z.apply(this, [wrapName, true]);
p$1.output$S.apply(this, [">\n"]);
var qn=field.qualifiedName;
var eval=field.mapEntryValue;
var addXsiTypeKey=((field.holdsObjects & 4) != 0);
var addXsiTypeVal=((field.holdsObjects & 8) != 0);
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var value=e.getValue$();
p$1.output$S.apply(this, ["<entry>"]);
field.qualifiedName=C$.qnEntryKey;
field.mapEntryValue=key;
p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, field, key, addXsiTypeKey]);
if (value != null  || isNillable ) {
field.mapEntryValue=value;
field.qualifiedName=C$.qnEntryValue;
p$1.addFieldListable$swingjs_xml_JSJAXBClass$swingjs_xml_JSJAXBField$O$Z.apply(this, [jaxbClass, field, value, addXsiTypeVal]);
}p$1.output$S.apply(this, ["\n</entry>\n"]);
}
field.mapEntryValue=eval;
field.qualifiedName=qn;
p$1.writeTagClose$javax_xml_namespace_QName$Z.apply(this, [wrapName, true]);
}, p$1);

Clazz.newMeth(C$, 'outputHeader',  function () {
p$1.output$S.apply(this, ["<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"]);
}, p$1);

Clazz.newMeth(C$, 'outputSimple$swingjs_xml_JSJAXBField$O',  function (field, value) {
if (value == null ) return;
var sval=null;

sval = (value.toString ? value.toString() : "" + value);
p$1.output$S.apply(this, [C$.escapeString$S$Z(sval, field.isAttribute)]);
}, p$1);

Clazz.newMeth(C$, 'outputNil',  function () {
p$1.output$S.apply(this, [" xsi:nil=\"true\""]);
}, p$1);

Clazz.newMeth(C$, 'outputInstanceType$S',  function (type) {
p$1.output$S.apply(this, [" xsi:type=\"" + type + "\"" ]);
}, p$1);

Clazz.newMeth(C$, 'output$S',  function (s) {
try {
if (this.writer != null ) {
this.writer.write$S(s);
} else if (this.outputStream != null ) {
this.outputStream.write$BA(s.getBytes$());
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,["Error writing string " + s]);
} else {
throw e;
}
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.cantmarshall="";
C$.mapQualifierLevel=Clazz.new_($I$(1,1));
C$.xsi=Clazz.new_($I$(2,1).c$$S$S$S,["http://www.w3.org/2001/XMLSchema-instance", "xs", "xsi"]);
C$.xs=Clazz.new_($I$(2,1).c$$S$S$S,["http://www.w3.org/2001/XMLSchema", "_", "xs"]);
C$.qnEntryKey=Clazz.new_($I$(2,1).c$$S$S$S,["", "key", ""]);
C$.qnEntryValue=Clazz.new_($I$(2,1).c$$S$S$S,["", "value", ""]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
