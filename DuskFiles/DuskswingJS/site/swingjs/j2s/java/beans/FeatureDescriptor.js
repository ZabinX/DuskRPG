(function(){var P$=Clazz.newPackage("java.beans"),p$1={},I$=[[0,'java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureDescriptor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['expert','hidden','preferred'],'S',['shortDescription','name','displayName'],'O',['classRef','Class','table','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
if (this.displayName == null ) {
return this.getName$();
}return this.displayName;
});

Clazz.newMeth(C$, 'setDisplayName$S',  function (displayName) {
this.displayName=displayName;
});

Clazz.newMeth(C$, 'isExpert$',  function () {
return this.expert;
});

Clazz.newMeth(C$, 'setExpert$Z',  function (expert) {
this.expert=expert;
});

Clazz.newMeth(C$, 'isHidden$',  function () {
return this.hidden;
});

Clazz.newMeth(C$, 'setHidden$Z',  function (hidden) {
this.hidden=hidden;
});

Clazz.newMeth(C$, 'isPreferred$',  function () {
return this.preferred;
});

Clazz.newMeth(C$, 'setPreferred$Z',  function (preferred) {
this.preferred=preferred;
});

Clazz.newMeth(C$, 'getShortDescription$',  function () {
if (this.shortDescription == null ) {
return this.getDisplayName$();
}return this.shortDescription;
});

Clazz.newMeth(C$, 'setShortDescription$S',  function (text) {
this.shortDescription=text;
});

Clazz.newMeth(C$, 'setValue$S$O',  function (attributeName, value) {
if (this.table == null ) {
this.table=Clazz.new_($I$(1,1));
}this.table.put$O$O(attributeName, value);
});

Clazz.newMeth(C$, 'getValue$S',  function (attributeName) {
if (this.table == null ) {
return null;
}return this.table.get$O(attributeName);
});

Clazz.newMeth(C$, 'attributeNames$',  function () {
if (this.table == null ) {
this.table=Clazz.new_($I$(1,1));
}return this.table.keys$();
});

Clazz.newMeth(C$, 'c$$java_beans_FeatureDescriptor$java_beans_FeatureDescriptor',  function (x, y) {
;C$.$init$.apply(this);
this.expert=!!(x.expert | y.expert);
this.hidden=!!(x.hidden | y.hidden);
this.preferred=!!(x.preferred | y.preferred);
this.name=y.name;
this.shortDescription=x.shortDescription;
if (y.shortDescription != null ) {
this.shortDescription=y.shortDescription;
}this.displayName=x.displayName;
if (y.displayName != null ) {
this.displayName=y.displayName;
}this.classRef=x.classRef;
if (y.classRef != null ) {
this.classRef=y.classRef;
}p$1.addTable$java_util_Hashtable.apply(this, [x.table]);
p$1.addTable$java_util_Hashtable.apply(this, [y.table]);
}, 1);

Clazz.newMeth(C$, 'c$$java_beans_FeatureDescriptor',  function (old) {
;C$.$init$.apply(this);
this.expert=old.expert;
this.hidden=old.hidden;
this.preferred=old.preferred;
this.name=old.name;
this.shortDescription=old.shortDescription;
this.displayName=old.displayName;
this.classRef=old.classRef;
p$1.addTable$java_util_Hashtable.apply(this, [old.table]);
}, 1);

Clazz.newMeth(C$, 'addTable$java_util_Hashtable',  function (t) {
if (t == null ) {
return;
}var keys=t.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var value=t.get$O(key);
this.setValue$S$O(key, value);
}
}, p$1);

Clazz.newMeth(C$, 'setClass0$Class',  function (cls) {
this.classRef=cls;
});

Clazz.newMeth(C$, 'getClass0$',  function () {
return (this.classRef != null ) ? this.classRef : null;
});

Clazz.newMeth(C$, 'getReturnType$Class$java_lang_reflect_Method',  function (base, method) {
return null;
}, 1);

Clazz.newMeth(C$, 'getParameterTypes$Class$java_lang_reflect_Method',  function (base, method) {
return Clazz.array(Class, [0]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
