(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,'javax.swing.text.AttributeSet','javax.swing.text.SimpleAttributeSet',['javax.swing.text.html.MuxingAttributeSet','.MuxingAttributeNameEnumeration']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MuxingAttributeSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['javax.swing.text.AttributeSet', 'java.io.Serializable']);
C$.$classes$=[['MuxingAttributeNameEnumeration',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attrs','javax.swing.text.AttributeSet[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSetA',  function (attrs) {
;C$.$init$.apply(this);
this.attrs=attrs;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAttributes$javax_swing_text_AttributeSetA',  function (attrs) {
this.attrs=attrs;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attrs;
});

Clazz.newMeth(C$, 'insertAttributeSetAt$javax_swing_text_AttributeSet$I',  function (as, index) {
var numAttrs=this.attrs.length;
var newAttrs=Clazz.array($I$(1), [numAttrs + 1]);
if (index < numAttrs) {
if (index > 0) {
System.arraycopy$O$I$O$I$I(this.attrs, 0, newAttrs, 0, index);
System.arraycopy$O$I$O$I$I(this.attrs, index, newAttrs, index + 1, numAttrs - index);
} else {
System.arraycopy$O$I$O$I$I(this.attrs, 0, newAttrs, 1, numAttrs);
}} else {
System.arraycopy$O$I$O$I$I(this.attrs, 0, newAttrs, 0, numAttrs);
}newAttrs[index]=as;
this.attrs=newAttrs;
});

Clazz.newMeth(C$, 'removeAttributeSetAt$I',  function (index) {
var numAttrs=this.attrs.length;
var newAttrs=Clazz.array($I$(1), [numAttrs - 1]);
if (numAttrs > 0) {
if (index == 0) {
System.arraycopy$O$I$O$I$I(this.attrs, 1, newAttrs, 0, numAttrs - 1);
} else if (index < (numAttrs - 1)) {
System.arraycopy$O$I$O$I$I(this.attrs, 0, newAttrs, 0, index);
System.arraycopy$O$I$O$I$I(this.attrs, index + 1, newAttrs, index, numAttrs - index - 1 );
} else {
System.arraycopy$O$I$O$I$I(this.attrs, 0, newAttrs, 0, numAttrs - 1);
}}this.attrs=newAttrs;
});

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
var as=this.getAttributes$();
var n=0;
for (var i=0; i < as.length; i++) {
n+=as[i].getAttributeCount$();
}
return n;
});

Clazz.newMeth(C$, 'isDefined$O',  function (key) {
var as=this.getAttributes$();
for (var i=0; i < as.length; i++) {
if (as[i].isDefined$O(key)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'isEqual$javax_swing_text_AttributeSet',  function (attr) {
return ((this.getAttributeCount$() == attr.getAttributeCount$()) && this.containsAttributes$javax_swing_text_AttributeSet(attr) );
});

Clazz.newMeth(C$, 'copyAttributes$',  function () {
var as=this.getAttributes$();
var a=Clazz.new_($I$(2,1));
var n=0;
for (var i=as.length - 1; i >= 0; i--) {
a.addAttributes$javax_swing_text_AttributeSet(as[i]);
}
return a;
});

Clazz.newMeth(C$, 'getAttribute$O',  function (key) {
var as=this.getAttributes$();
var n=as.length;
for (var i=0; i < n; i++) {
var o=as[i].getAttribute$O(key);
if (o != null ) {
return o;
}}
return null;
});

Clazz.newMeth(C$, 'getAttributeNames$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'containsAttribute$O$O',  function (name, value) {
return value.equals$O(this.getAttribute$O(name));
});

Clazz.newMeth(C$, 'containsAttributes$javax_swing_text_AttributeSet',  function (attrs) {
var result=true;
var names=attrs.getAttributeNames$();
while (result && names.hasMoreElements$() ){
var name=names.nextElement$();
result=attrs.getAttribute$O(name).equals$O(this.getAttribute$O(name));
}
return result;
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MuxingAttributeSet, "MuxingAttributeNameEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['attrIndex'],'O',['currentEnum','java.util.Enumeration']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.updateEnum$();
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.currentEnum == null ) {
return false;
}return this.currentEnum.hasMoreElements$();
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.currentEnum == null ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more names"]);
}var retObject=this.currentEnum.nextElement$();
if (!this.currentEnum.hasMoreElements$()) {
this.updateEnum$();
}return retObject;
});

Clazz.newMeth(C$, 'updateEnum$',  function () {
var as=this.b$['javax.swing.text.html.MuxingAttributeSet'].getAttributes$.apply(this.b$['javax.swing.text.html.MuxingAttributeSet'], []);
this.currentEnum=null;
while (this.currentEnum == null  && this.attrIndex < as.length ){
this.currentEnum=as[this.attrIndex++].getAttributeNames$();
if (!this.currentEnum.hasMoreElements$()) {
this.currentEnum=null;
}}
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
