(function(){var P$=Clazz.newPackage("javax.print.attribute"),p$1={},I$=[[0,'java.util.HashMap','javax.print.attribute.Attribute','javax.print.attribute.AttributeSetUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HashAttributeSet", null, null, ['javax.print.attribute.AttributeSet', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.attrMap=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['myInterface','Class','attrMap','java.util.HashMap']]]

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
var attrs=this.toArray$();
s.writeInt$I(attrs.length);
for (var i=0; i < attrs.length; i++) {
s.writeObject$O(attrs[i]);
}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.attrMap=Clazz.new_($I$(1,1));
var count=s.readInt$();
var attr;
for (var i=0; i < count; i++) {
attr=s.readObject$();
this.add$javax_print_attribute_Attribute(attr);
}
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Class.apply(this, [Clazz.getClass($I$(2),['getCategory$','getName$'])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_Attribute',  function (attribute) {
C$.c$$javax_print_attribute_Attribute$Class.apply(this, [attribute, Clazz.getClass($I$(2),['getCategory$','getName$'])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_AttributeA',  function (attributes) {
C$.c$$javax_print_attribute_AttributeA$Class.apply(this, [attributes, Clazz.getClass($I$(2),['getCategory$','getName$'])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_AttributeSet',  function (attributes) {
C$.c$$javax_print_attribute_AttributeSet$Class.apply(this, [attributes, Clazz.getClass($I$(2),['getCategory$','getName$'])]);
}, 1);

Clazz.newMeth(C$, 'c$$Class',  function (interfaceName) {
;C$.$init$.apply(this);
if (interfaceName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null interface"]);
}this.myInterface=interfaceName;
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_Attribute$Class',  function (attribute, interfaceName) {
;C$.$init$.apply(this);
if (interfaceName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null interface"]);
}this.myInterface=interfaceName;
this.add$javax_print_attribute_Attribute(attribute);
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_AttributeA$Class',  function (attributes, interfaceName) {
;C$.$init$.apply(this);
if (interfaceName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null interface"]);
}this.myInterface=interfaceName;
var n=attributes == null  ? 0 : attributes.length;
for (var i=0; i < n; ++i) {
this.add$javax_print_attribute_Attribute(attributes[i]);
}
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_AttributeSet$Class',  function (attributes, interfaceName) {
;C$.$init$.apply(this);
this.myInterface=interfaceName;
if (attributes != null ) {
var attribArray=attributes.toArray$();
var n=attribArray == null  ? 0 : attribArray.length;
for (var i=0; i < n; ++i) {
this.add$javax_print_attribute_Attribute(attribArray[i]);
}
}}, 1);

Clazz.newMeth(C$, 'get$Class',  function (category) {
return this.attrMap.get$O($I$(3,"verifyAttributeCategory$O$Class",[category, Clazz.getClass($I$(2),['getCategory$','getName$'])]));
});

Clazz.newMeth(C$, 'add$javax_print_attribute_Attribute',  function (attribute) {
var oldAttribute=this.attrMap.put$O$O(attribute.getCategory$(), $I$(3).verifyAttributeValue$O$Class(attribute, this.myInterface));
return (!attribute.equals$O(oldAttribute));
});

Clazz.newMeth(C$, 'remove$Class',  function (category) {
return category != null  && $I$(3,"verifyAttributeCategory$O$Class",[category, Clazz.getClass($I$(2),['getCategory$','getName$'])]) != null   && this.attrMap.remove$O(category) != null  ;
});

Clazz.newMeth(C$, 'remove$javax_print_attribute_Attribute',  function (attribute) {
return attribute != null  && this.attrMap.remove$O(attribute.getCategory$()) != null  ;
});

Clazz.newMeth(C$, 'containsKey$Class',  function (category) {
return category != null  && $I$(3,"verifyAttributeCategory$O$Class",[category, Clazz.getClass($I$(2),['getCategory$','getName$'])]) != null   && this.attrMap.get$O(category) != null  ;
});

Clazz.newMeth(C$, 'containsValue$javax_print_attribute_Attribute',  function (attribute) {
return attribute != null  && Clazz.instanceOf(attribute, "javax.print.attribute.Attribute")  && attribute.equals$O(this.attrMap.get$O((attribute).getCategory$())) ;
});

Clazz.newMeth(C$, 'addAll$javax_print_attribute_AttributeSet',  function (attributes) {
var attrs=attributes.toArray$();
var result=false;
for (var i=0; i < attrs.length; i++) {
var newValue=$I$(3).verifyAttributeValue$O$Class(attrs[i], this.myInterface);
var oldValue=this.attrMap.put$O$O(newValue.getCategory$(), newValue);
result=(!newValue.equals$O(oldValue)) || result ;
}
return result;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.attrMap.size$();
});

Clazz.newMeth(C$, 'toArray$',  function () {
var attrs=Clazz.array($I$(2), [this.size$()]);
this.attrMap.values$().toArray$OA(attrs);
return attrs;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.attrMap.clear$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.attrMap.isEmpty$();
});

Clazz.newMeth(C$, 'equals$O',  function (object) {
if (object == null  || !(Clazz.instanceOf(object, "javax.print.attribute.AttributeSet")) ) {
return false;
}var aset=object;
if (aset.size$() != this.size$()) {
return false;
}var attrs=this.toArray$();
for (var i=0; i < attrs.length; i++) {
if (!aset.containsValue$javax_print_attribute_Attribute(attrs[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hcode=0;
var attrs=this.toArray$();
for (var i=0; i < attrs.length; i++) {
hcode+=attrs[i].hashCode$();
}
return hcode;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
