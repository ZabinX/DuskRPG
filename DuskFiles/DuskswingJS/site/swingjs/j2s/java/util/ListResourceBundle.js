(function(){var P$=java.util,p$1={},I$=[[0,'sun.util.ResourceBundleEnumeration','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ListResourceBundle", null, 'java.util.ResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lookup=null;
},1);

C$.$fields$=[['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'handleGetObject$S',  function (key) {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return this.lookup.get$O(key);
});

Clazz.newMeth(C$, 'getKeys$',  function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}var parent=this.parent;
return Clazz.new_([this.lookup.keySet$(), (parent != null ) ? parent.getKeys$() : null],$I$(1,1).c$$java_util_Set$java_util_Enumeration);
});

Clazz.newMeth(C$, 'handleKeySet$',  function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}return this.lookup.keySet$();
});

Clazz.newMeth(C$, 'loadLookup',  function () {
if (this.lookup != null ) return;
var contents=this.getContents$();
var temp=Clazz.new_($I$(2,1).c$$I,[contents.length]);
for (var i=0; i < contents.length; ++i) {
var key=contents[i][0];
var value=contents[i][1];
if (key == null  || value == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}temp.put$O$O(key, value);
}
this.lookup=temp;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
