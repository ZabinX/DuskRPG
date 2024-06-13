(function(){var P$=Clazz.newPackage("sun.util.resources"),p$1={},I$=[[0,'sun.util.ResourceBundleEnumeration','java.util.HashMap','java.util.HashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OpenListResourceBundle", null, 'java.util.ResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lookup=null;
},1);

C$.$fields$=[['O',['lookup','java.util.Map','keyset','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'handleGetObject$S',  function (key) {
if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.loadLookupTablesIfNecessary$();
return this.lookup.get$O(key);
});

Clazz.newMeth(C$, 'getKeys$',  function () {
var parentBundle=this.parent;
return Clazz.new_([this.handleKeySet$(), (parentBundle != null ) ? parentBundle.getKeys$() : null],$I$(1,1).c$$java_util_Set$java_util_Enumeration);
});

Clazz.newMeth(C$, 'handleKeySet$',  function () {
this.loadLookupTablesIfNecessary$();
return this.lookup.keySet$();
});

Clazz.newMeth(C$, 'keySet$',  function () {
if (this.keyset != null ) {
return this.keyset;
}var ks=this.createSet$();
ks.addAll$java_util_Collection(this.handleKeySet$());
if (this.parent != null ) {
ks.addAll$java_util_Collection(this.parent.keySet$());
}{
if (this.keyset == null ) {
this.keyset=ks;
}}return this.keyset;
});

Clazz.newMeth(C$, 'loadLookupTablesIfNecessary$',  function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}});

Clazz.newMeth(C$, 'loadLookup',  function () {
var contents=this.getContents$();
var temp=this.createMap$I(contents.length);
for (var i=0; i < contents.length; ++i) {
var key=contents[i][0];
var value=contents[i][1];
if (key == null  || value == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}temp.put$O$O(key, value);
}
{
if (this.lookup == null ) {
this.lookup=temp;
}}}, p$1);

Clazz.newMeth(C$, 'createMap$I',  function (size) {
return Clazz.new_($I$(2,1).c$$I,[size]);
});

Clazz.newMeth(C$, 'createSet$',  function () {
return Clazz.new_($I$(3,1));
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
