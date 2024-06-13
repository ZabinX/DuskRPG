(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,['javax.swing.text.SimpleAttributeSet','.EmptyAttributeSet'],'java.util.Hashtable','javax.swing.text.StyleConstants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleAttributeSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['javax.swing.text.MutableAttributeSet', 'Cloneable']);
C$.$classes$=[['EmptyAttributeSet',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.table=Clazz.new_($I$(2,1).c$$I,[3]);
},1);

C$.$fields$=[['O',['table','java.util.Hashtable']]
,['O',['EMPTY','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (source) {
;C$.$init$.apply(this);
this.addAttributes$javax_swing_text_AttributeSet(source);
}, 1);

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.table.isEmpty$();
});

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return this.table.size$();
});

Clazz.newMeth(C$, 'isDefined$O',  function (attrName) {
return this.table.containsKey$O(attrName);
});

Clazz.newMeth(C$, 'isEqual$javax_swing_text_AttributeSet',  function (attr) {
return ((this.getAttributeCount$() == attr.getAttributeCount$()) && this.containsAttributes$javax_swing_text_AttributeSet(attr) );
});

Clazz.newMeth(C$, 'copyAttributes$',  function () {
return this.clone$();
});

Clazz.newMeth(C$, 'getAttributeNames$',  function () {
return this.table.keys$();
});

Clazz.newMeth(C$, 'getAttribute$O',  function (name) {
var value=this.table.get$O(name);
if (value == null ) {
var parent=this.getResolveParent$();
if (parent != null ) {
value=parent.getAttribute$O(name);
}}return value;
});

Clazz.newMeth(C$, 'containsAttribute$O$O',  function (name, value) {
return value.equals$O(this.getAttribute$O(name));
});

Clazz.newMeth(C$, 'containsAttributes$javax_swing_text_AttributeSet',  function (attributes) {
var result=true;
var names=attributes.getAttributeNames$();
while (result && names.hasMoreElements$() ){
var name=names.nextElement$();
result=attributes.getAttribute$O(name).equals$O(this.getAttribute$O(name));
}
return result;
});

Clazz.newMeth(C$, 'addAttribute$O$O',  function (name, value) {
this.table.put$O$O(name, value);
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet',  function (attributes) {
var names=attributes.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
this.addAttribute$O$O(name, attributes.getAttribute$O(name));
}
});

Clazz.newMeth(C$, 'removeAttribute$O',  function (name) {
this.table.remove$O(name);
});

Clazz.newMeth(C$, 'removeAttributes$java_util_Enumeration',  function (names) {
while (names.hasMoreElements$())this.removeAttribute$O(names.nextElement$());

});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet',  function (attributes) {
if (attributes === this ) {
this.table.clear$();
} else {
var names=attributes.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
var value=attributes.getAttribute$O(name);
if (value.equals$O(this.getAttribute$O(name))) this.removeAttribute$O(name);
}
}});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return this.table.get$O($I$(3).ResolveAttribute);
});

Clazz.newMeth(C$, 'setResolveParent$javax_swing_text_AttributeSet',  function (parent) {
this.addAttribute$O$O($I$(3).ResolveAttribute, parent);
});

Clazz.newMeth(C$, 'clone$',  function () {
var attr;
try {
attr=Clazz.clone(this);
attr.table=this.table.clone$();
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
attr=null;
} else {
throw cnse;
}
}
return attr;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.table.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "javax.swing.text.AttributeSet")) {
var attrs=obj;
return this.isEqual$javax_swing_text_AttributeSet(attrs);
}return false;
});

Clazz.newMeth(C$, 'toString',  function () {
var s="";
var names=this.getAttributeNames$();
while (names.hasMoreElements$()){
var key=names.nextElement$();
var value=this.getAttribute$O(key);
if (Clazz.instanceOf(value, "javax.swing.text.AttributeSet")) {
s=s + key + "=**AttributeSet** " ;
} else {
s=s + key + "=" + value + " " ;
}}
return s;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SimpleAttributeSet, "EmptyAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.text.AttributeSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isDefined$O',  function (attrName) {
return false;
});

Clazz.newMeth(C$, 'isEqual$javax_swing_text_AttributeSet',  function (attr) {
return (attr.getAttributeCount$() == 0);
});

Clazz.newMeth(C$, 'copyAttributes$',  function () {
return this;
});

Clazz.newMeth(C$, 'getAttribute$O',  function (key) {
return null;
});

Clazz.newMeth(C$, 'getAttributeNames$',  function () {
return ((P$.SimpleAttributeSet$EmptyAttributeSet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleAttributeSet$EmptyAttributeSet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.SimpleAttributeSet$EmptyAttributeSet$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'containsAttribute$O$O',  function (name, value) {
return false;
});

Clazz.newMeth(C$, 'containsAttributes$javax_swing_text_AttributeSet',  function (attributes) {
return (attributes.getAttributeCount$() == 0);
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return null;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}return ((Clazz.instanceOf(obj, "javax.swing.text.AttributeSet")) && ((obj).getAttributeCount$() == 0) );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return 0;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
