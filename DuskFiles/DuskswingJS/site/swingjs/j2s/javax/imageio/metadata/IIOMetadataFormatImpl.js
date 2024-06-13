(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap',['javax.imageio.metadata.IIOMetadataFormatImpl','.Element'],['javax.imageio.metadata.IIOMetadataFormatImpl','.Attribute'],['javax.imageio.metadata.IIOMetadataFormatImpl','.ObjectValue'],'java.util.Locale','java.security.AccessController','Thread','java.util.ResourceBundle','com.sun.imageio.plugins.common.StandardMetadataFormat']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IIOMetadataFormatImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.imageio.metadata.IIOMetadataFormat');
C$.$classes$=[['Element',0],['Attribute',0],['ObjectValue',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resourceBaseName=this.getClass$().getName$() + "Resources";
this.elementMap=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['S',['resourceBaseName','rootName'],'O',['elementMap','java.util.HashMap']]
,['O',['standardFormat','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$$S$I',  function (rootName, childPolicy) {
;C$.$init$.apply(this);
if (rootName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rootName == null!"]);
}if (childPolicy < 0 || childPolicy > 5  || childPolicy == 5 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for childPolicy!"]);
}this.rootName=rootName;
var root=Clazz.new_($I$(3,1),[this, null]);
root.elementName=rootName;
root.childPolicy=childPolicy;
this.elementMap.put$O$O(rootName, root);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I',  function (rootName, minChildren, maxChildren) {
;C$.$init$.apply(this);
if (rootName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rootName == null!"]);
}if (minChildren < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["minChildren < 0!"]);
}if (minChildren > maxChildren) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["minChildren > maxChildren!"]);
}var root=Clazz.new_($I$(3,1),[this, null]);
root.elementName=rootName;
root.childPolicy=5;
root.minChildren=minChildren;
root.maxChildren=maxChildren;
this.rootName=rootName;
this.elementMap.put$O$O(rootName, root);
}, 1);

Clazz.newMeth(C$, 'setResourceBaseName$S',  function (resourceBaseName) {
if (resourceBaseName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["resourceBaseName == null!"]);
}this.resourceBaseName=resourceBaseName;
});

Clazz.newMeth(C$, 'getResourceBaseName$',  function () {
return this.resourceBaseName;
});

Clazz.newMeth(C$, 'getElement$S$Z',  function (elementName, mustAppear) {
if (mustAppear && (elementName == null ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["element name is null!"]);
}var element=this.elementMap.get$O(elementName);
if (mustAppear && (element == null ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such element: " + elementName]);
}return element;
}, p$1);

Clazz.newMeth(C$, 'getElement$S',  function (elementName) {
return p$1.getElement$S$Z.apply(this, [elementName, true]);
}, p$1);

Clazz.newMeth(C$, 'getAttribute$S$S',  function (elementName, attrName) {
var element=p$1.getElement$S.apply(this, [elementName]);
var attr=element.attrMap.get$O(attrName);
if (attr == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute \"" + attrName + "\"!" ]);
}return attr;
}, p$1);

Clazz.newMeth(C$, 'addElement$S$S$I',  function (elementName, parentName, childPolicy) {
var parent=p$1.getElement$S.apply(this, [parentName]);
if (childPolicy < 0 || childPolicy > 5  || childPolicy == 5 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for childPolicy!"]);
}var element=Clazz.new_($I$(3,1),[this, null]);
element.elementName=elementName;
element.childPolicy=childPolicy;
parent.childList.add$O(elementName);
element.parentList.add$O(parentName);
this.elementMap.put$O$O(elementName, element);
});

Clazz.newMeth(C$, 'addElement$S$S$I$I',  function (elementName, parentName, minChildren, maxChildren) {
var parent=p$1.getElement$S.apply(this, [parentName]);
if (minChildren < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["minChildren < 0!"]);
}if (minChildren > maxChildren) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["minChildren > maxChildren!"]);
}var element=Clazz.new_($I$(3,1),[this, null]);
element.elementName=elementName;
element.childPolicy=5;
element.minChildren=minChildren;
element.maxChildren=maxChildren;
parent.childList.add$O(elementName);
element.parentList.add$O(parentName);
this.elementMap.put$O$O(elementName, element);
});

Clazz.newMeth(C$, 'addChildElement$S$S',  function (elementName, parentName) {
var parent=p$1.getElement$S.apply(this, [parentName]);
var element=p$1.getElement$S.apply(this, [elementName]);
parent.childList.add$O(elementName);
element.parentList.add$O(parentName);
});

Clazz.newMeth(C$, 'removeElement$S',  function (elementName) {
var element=p$1.getElement$S$Z.apply(this, [elementName, false]);
if (element != null ) {
var iter=element.parentList.iterator$();
while (iter.hasNext$()){
var parentName=iter.next$();
var parent=p$1.getElement$S$Z.apply(this, [parentName, false]);
if (parent != null ) {
parent.childList.remove$O(elementName);
}}
this.elementMap.remove$O(elementName);
}});

Clazz.newMeth(C$, 'addAttribute$S$S$I$Z$S',  function (elementName, attrName, dataType, required, defaultValue) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (attrName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["attrName == null!"]);
}if (dataType < 0 || dataType > 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for dataType!"]);
}var attr=Clazz.new_($I$(4,1),[this, null]);
attr.attrName=attrName;
attr.valueType=1;
attr.dataType=dataType;
attr.required=required;
attr.defaultValue=defaultValue;
element.attrList.add$O(attrName);
element.attrMap.put$O$O(attrName, attr);
});

Clazz.newMeth(C$, 'addAttribute$S$S$I$Z$S$java_util_List',  function (elementName, attrName, dataType, required, defaultValue, enumeratedValues) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (attrName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["attrName == null!"]);
}if (dataType < 0 || dataType > 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for dataType!"]);
}if (enumeratedValues == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues == null!"]);
}if (enumeratedValues.size$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues is empty!"]);
}var iter=enumeratedValues.iterator$();
while (iter.hasNext$()){
var o=iter.next$();
if (o == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues contains a null!"]);
}if (!(Clazz.instanceOf(o, "java.lang.String"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues contains a non-String value!"]);
}}
var attr=Clazz.new_($I$(4,1),[this, null]);
attr.attrName=attrName;
attr.valueType=16;
attr.dataType=dataType;
attr.required=required;
attr.defaultValue=defaultValue;
attr.enumeratedValues=enumeratedValues;
element.attrList.add$O(attrName);
element.attrMap.put$O$O(attrName, attr);
});

Clazz.newMeth(C$, 'addAttribute$S$S$I$Z$S$S$S$Z$Z',  function (elementName, attrName, dataType, required, defaultValue, minValue, maxValue, minInclusive, maxInclusive) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (attrName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["attrName == null!"]);
}if (dataType < 0 || dataType > 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for dataType!"]);
}var attr=Clazz.new_($I$(4,1),[this, null]);
attr.attrName=attrName;
attr.valueType=2;
if (minInclusive) {
attr.valueType|=4;
}if (maxInclusive) {
attr.valueType|=8;
}attr.dataType=dataType;
attr.required=required;
attr.defaultValue=defaultValue;
attr.minValue=minValue;
attr.maxValue=maxValue;
element.attrList.add$O(attrName);
element.attrMap.put$O$O(attrName, attr);
});

Clazz.newMeth(C$, 'addAttribute$S$S$I$Z$I$I',  function (elementName, attrName, dataType, required, listMinLength, listMaxLength) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (attrName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["attrName == null!"]);
}if (dataType < 0 || dataType > 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for dataType!"]);
}if (listMinLength < 0 || listMinLength > listMaxLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid list bounds!"]);
}var attr=Clazz.new_($I$(4,1),[this, null]);
attr.attrName=attrName;
attr.valueType=32;
attr.dataType=dataType;
attr.required=required;
attr.listMinLength=listMinLength;
attr.listMaxLength=listMaxLength;
element.attrList.add$O(attrName);
element.attrMap.put$O$O(attrName, attr);
});

Clazz.newMeth(C$, 'addBooleanAttribute$S$S$Z$Z',  function (elementName, attrName, hasDefaultValue, defaultValue) {
var values=Clazz.new_($I$(1,1));
values.add$O("TRUE");
values.add$O("FALSE");
var dval=null;
if (hasDefaultValue) {
dval=defaultValue ? "TRUE" : "FALSE";
}this.addAttribute$S$S$I$Z$S$java_util_List(elementName, attrName, 1, true, dval, values);
});

Clazz.newMeth(C$, 'removeAttribute$S$S',  function (elementName, attrName) {
var element=p$1.getElement$S.apply(this, [elementName]);
element.attrList.remove$O(attrName);
element.attrMap.remove$O(attrName);
});

Clazz.newMeth(C$, 'addObjectValue$S$Class$Z$O',  function (elementName, classType, required, defaultValue) {
var element=p$1.getElement$S.apply(this, [elementName]);
var obj=Clazz.new_($I$(5,1),[this, null]);
obj.valueType=1;
obj.classType=classType;
obj.defaultValue=defaultValue;
element.objectValue=obj;
});

Clazz.newMeth(C$, 'addObjectValue$S$Class$Z$O$java_util_List',  function (elementName, classType, required, defaultValue, enumeratedValues) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (enumeratedValues == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues == null!"]);
}if (enumeratedValues.size$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues is empty!"]);
}var iter=enumeratedValues.iterator$();
while (iter.hasNext$()){
var o=iter.next$();
if (o == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues contains a null!"]);
}if (!classType.isInstance$O(o)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["enumeratedValues contains a value not of class classType!"]);
}}
var obj=Clazz.new_($I$(5,1),[this, null]);
obj.valueType=16;
obj.classType=classType;
obj.defaultValue=defaultValue;
obj.enumeratedValues=enumeratedValues;
element.objectValue=obj;
});

Clazz.newMeth(C$, 'addObjectValue$S$Class$O$Comparable$Comparable$Z$Z',  function (elementName, classType, defaultValue, minValue, maxValue, minInclusive, maxInclusive) {
var element=p$1.getElement$S.apply(this, [elementName]);
var obj=Clazz.new_($I$(5,1),[this, null]);
obj.valueType=2;
if (minInclusive) {
obj.valueType|=4;
}if (maxInclusive) {
obj.valueType|=8;
}obj.classType=classType;
obj.defaultValue=defaultValue;
obj.minValue=minValue;
obj.maxValue=maxValue;
element.objectValue=obj;
});

Clazz.newMeth(C$, 'addObjectValue$S$Class$I$I',  function (elementName, classType, arrayMinLength, arrayMaxLength) {
var element=p$1.getElement$S.apply(this, [elementName]);
var obj=Clazz.new_($I$(5,1),[this, null]);
obj.valueType=32;
obj.classType=classType;
obj.arrayMinLength=arrayMinLength;
obj.arrayMaxLength=arrayMaxLength;
element.objectValue=obj;
});

Clazz.newMeth(C$, 'removeObjectValue$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
element.objectValue=null;
});

Clazz.newMeth(C$, 'getRootName$',  function () {
return this.rootName;
});

Clazz.newMeth(C$, 'getElementMinChildren$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (element.childPolicy != 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Child policy not CHILD_POLICY_REPEAT!"]);
}return element.minChildren;
});

Clazz.newMeth(C$, 'getElementMaxChildren$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (element.childPolicy != 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Child policy not CHILD_POLICY_REPEAT!"]);
}return element.maxChildren;
});

Clazz.newMeth(C$, 'getResource$S$java_util_Locale',  function (key, locale) {
if (locale == null ) {
locale=$I$(6).getDefault$();
}var loader=$I$(7,"doPrivileged$java_security_PrivilegedAction",[((P$.IIOMetadataFormatImpl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IIOMetadataFormatImpl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(8).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.IIOMetadataFormatImpl$1.$init$,[this, null]))]);
var bundle=null;
try {
bundle=$I$(9).getBundle$S$java_util_Locale$O(this.resourceBaseName, locale, loader);
} catch (mre) {
if (Clazz.exceptionOf(mre,"java.util.MissingResourceException")){
try {
bundle=$I$(9).getBundle$S$java_util_Locale(this.resourceBaseName, locale);
} catch (mre1) {
if (Clazz.exceptionOf(mre1,"java.util.MissingResourceException")){
return null;
} else {
throw mre1;
}
}
} else {
throw mre;
}
}
try {
return bundle.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getElementDescription$S$java_util_Locale',  function (elementName, locale) {
var element=p$1.getElement$S.apply(this, [elementName]);
return p$1.getResource$S$java_util_Locale.apply(this, [elementName, locale]);
});

Clazz.newMeth(C$, 'getChildPolicy$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
return element.childPolicy;
});

Clazz.newMeth(C$, 'getChildNames$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (element.childPolicy == 0) {
return null;
}return element.childList.toArray$OA(Clazz.array(String, [0]));
});

Clazz.newMeth(C$, 'getAttributeNames$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
var names=element.attrList;
var result=Clazz.array(String, [names.size$()]);
return names.toArray$OA(result);
});

Clazz.newMeth(C$, 'getAttributeValueType$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
return attr.valueType;
});

Clazz.newMeth(C$, 'getAttributeDataType$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
return attr.dataType;
});

Clazz.newMeth(C$, 'isAttributeRequired$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
return attr.required;
});

Clazz.newMeth(C$, 'getAttributeDefaultValue$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
return attr.defaultValue;
});

Clazz.newMeth(C$, 'getAttributeEnumerations$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
if (attr.valueType != 16) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Attribute not an enumeration!"]);
}var values=attr.enumeratedValues;
var iter=values.iterator$();
var result=Clazz.array(String, [values.size$()]);
return values.toArray$OA(result);
});

Clazz.newMeth(C$, 'getAttributeMinValue$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
if (attr.valueType != 2 && attr.valueType != 6  && attr.valueType != 10  && attr.valueType != 14 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Attribute not a range!"]);
}return attr.minValue;
});

Clazz.newMeth(C$, 'getAttributeMaxValue$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
if (attr.valueType != 2 && attr.valueType != 6  && attr.valueType != 10  && attr.valueType != 14 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Attribute not a range!"]);
}return attr.maxValue;
});

Clazz.newMeth(C$, 'getAttributeListMinLength$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
if (attr.valueType != 32) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Attribute not a list!"]);
}return attr.listMinLength;
});

Clazz.newMeth(C$, 'getAttributeListMaxLength$S$S',  function (elementName, attrName) {
var attr=p$1.getAttribute$S$S.apply(this, [elementName, attrName]);
if (attr.valueType != 32) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Attribute not a list!"]);
}return attr.listMaxLength;
});

Clazz.newMeth(C$, 'getAttributeDescription$S$S$java_util_Locale',  function (elementName, attrName, locale) {
var element=p$1.getElement$S.apply(this, [elementName]);
if (attrName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["attrName == null!"]);
}var attr=element.attrMap.get$O(attrName);
if (attr == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute!"]);
}var key=elementName + "/" + attrName ;
return p$1.getResource$S$java_util_Locale.apply(this, [key, locale]);
});

Clazz.newMeth(C$, 'getObjectValue$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
var objv=element.objectValue;
if (objv == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No object within element " + elementName + "!" ]);
}return objv;
}, p$1);

Clazz.newMeth(C$, 'getObjectValueType$S',  function (elementName) {
var element=p$1.getElement$S.apply(this, [elementName]);
var objv=element.objectValue;
if (objv == null ) {
return 0;
}return objv.valueType;
});

Clazz.newMeth(C$, 'getObjectClass$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
return objv.classType;
});

Clazz.newMeth(C$, 'getObjectDefaultValue$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
return objv.defaultValue;
});

Clazz.newMeth(C$, 'getObjectEnumerations$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
if (objv.valueType != 16) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not an enumeration!"]);
}var vlist=objv.enumeratedValues;
var values=Clazz.array(java.lang.Object, [vlist.size$()]);
return vlist.toArray$OA(values);
});

Clazz.newMeth(C$, 'getObjectMinValue$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
if ((objv.valueType & 2) != 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a range!"]);
}return objv.minValue;
});

Clazz.newMeth(C$, 'getObjectMaxValue$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
if ((objv.valueType & 2) != 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a range!"]);
}return objv.maxValue;
});

Clazz.newMeth(C$, 'getObjectArrayMinLength$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
if (objv.valueType != 32) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a list!"]);
}return objv.arrayMinLength;
});

Clazz.newMeth(C$, 'getObjectArrayMaxLength$S',  function (elementName) {
var objv=p$1.getObjectValue$S.apply(this, [elementName]);
if (objv.valueType != 32) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a list!"]);
}return objv.arrayMaxLength;
});

Clazz.newMeth(C$, 'createStandardFormat$',  function () {
if (C$.standardFormat == null ) {
C$.standardFormat=Clazz.new_($I$(10,1));
}}, 1);

Clazz.newMeth(C$, 'getStandardFormatInstance$',  function () {
C$.createStandardFormat$();
return C$.standardFormat;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.standardFormat=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.IIOMetadataFormatImpl, "Element", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minChildren=0;
this.maxChildren=0;
this.childList=Clazz.new_($I$(1,1));
this.parentList=Clazz.new_($I$(1,1));
this.attrList=Clazz.new_($I$(1,1));
this.attrMap=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['childPolicy','minChildren','maxChildren'],'S',['elementName'],'O',['childList','java.util.List','+parentList','+attrList','attrMap','java.util.Map','objectValue','javax.imageio.metadata.IIOMetadataFormatImpl.ObjectValue']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.IIOMetadataFormatImpl, "Attribute", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.valueType=1;
this.defaultValue=null;
},1);

C$.$fields$=[['Z',['required'],'I',['valueType','dataType','listMinLength','listMaxLength'],'S',['attrName','defaultValue','minValue','maxValue'],'O',['enumeratedValues','java.util.List']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.IIOMetadataFormatImpl, "ObjectValue", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.valueType=0;
this.classType=null;
this.defaultValue=null;
this.enumeratedValues=null;
this.minValue=null;
this.maxValue=null;
this.arrayMinLength=0;
this.arrayMaxLength=0;
},1);

C$.$fields$=[['I',['valueType','arrayMinLength','arrayMaxLength'],'O',['classType','Class','defaultValue','java.lang.Object','enumeratedValues','java.util.List','minValue','Comparable','+maxValue']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
