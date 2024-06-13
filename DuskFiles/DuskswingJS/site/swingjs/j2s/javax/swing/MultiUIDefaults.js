(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.MultiUIDefaults','.MultiUIDefaultsEnumerator','.Type'],'javax.swing.UIDefaults',['javax.swing.MultiUIDefaults','.MultiUIDefaultsEnumerator'],'java.util.HashSet','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiUIDefaults", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.UIDefaults');
C$.$classes$=[['MultiUIDefaultsEnumerator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tables','javax.swing.UIDefaults[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_UIDefaultsA',  function (defaults) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.tables=defaults;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.tables=Clazz.array($I$(2), [0]);
}, 1);

Clazz.newMeth(C$, 'get$O',  function (key) {
var value=C$.superclazz.prototype.get$O.apply(this, [key]);
if (value != null ) {
return value;
}for (var i=0; i < this.tables.length; i++) {
var table=this.tables[i];
value=(table != null ) ? table.get$O(key) : null;
if (value != null ) {
return value;
}}
return null;
});

Clazz.newMeth(C$, 'get$O$java_util_Locale',  function (key, l) {
var value=C$.superclazz.prototype.get$O$java_util_Locale.apply(this, [key, l]);
if (value != null ) {
return value;
}for (var i=0; i < this.tables.length; i++) {
var table=this.tables[i];
value=(table != null ) ? table.get$O$java_util_Locale(key, l) : null;
if (value != null ) {
return value;
}}
return null;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.entrySet$().size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'keys$',  function () {
return Clazz.new_([$I$(1).KEYS, this.entrySet$()],$I$(3,1).c$$javax_swing_MultiUIDefaults_MultiUIDefaultsEnumerator_Type$java_util_Set);
});

Clazz.newMeth(C$, 'elements$',  function () {
return Clazz.new_([$I$(1).ELEMENTS, this.entrySet$()],$I$(3,1).c$$javax_swing_MultiUIDefaults_MultiUIDefaultsEnumerator_Type$java_util_Set);
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var set=Clazz.new_($I$(4,1));
for (var i=this.tables.length - 1; i >= 0; i--) {
if (this.tables[i] != null ) {
set.addAll$java_util_Collection(this.tables[i].entrySet$());
}}
set.addAll$java_util_Collection(C$.superclazz.prototype.entrySet$.apply(this, []));
return set;
});

Clazz.newMeth(C$, 'getUIError$S',  function (msg) {
if (this.tables.length > 0) {
this.tables[0].getUIError$S(msg);
} else {
C$.superclazz.prototype.getUIError$S.apply(this, [msg]);
}});

Clazz.newMeth(C$, 'remove$O',  function (key) {
var value=null;
for (var i=this.tables.length - 1; i >= 0; i--) {
if (this.tables[i] != null ) {
var v=this.tables[i].remove$O(key);
if (v != null ) {
value=v;
}}}
var v=C$.superclazz.prototype.remove$O.apply(this, [key]);
if (v != null ) {
value=v;
}return value;
});

Clazz.newMeth(C$, 'clear$',  function () {
C$.superclazz.prototype.clear$.apply(this, []);
for (var i=0; i < this.tables.length; i++) {
var table=this.tables[i];
if (table != null ) {
table.clear$();
}}
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(5,1));
buf.append$S("{");
var keys=this.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
buf.append$S(key + "=" + this.get$O(key) + ", " );
}
var length=buf.length$();
if (length > 1) {
buf.delete$I$I(length - 2, length);
}buf.append$S("}");
return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MultiUIDefaults, "MultiUIDefaultsEnumerator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Enumeration');
C$.$classes$=[['Type',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iterator','java.util.Iterator','type','javax.swing.MultiUIDefaults.MultiUIDefaultsEnumerator.Type']]]

Clazz.newMeth(C$, 'c$$javax_swing_MultiUIDefaults_MultiUIDefaultsEnumerator_Type$java_util_Set',  function (type, entries) {
;C$.$init$.apply(this);
this.type=type;
this.iterator=entries.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.iterator.hasNext$();
});

Clazz.newMeth(C$, 'nextElement$',  function () {
switch (this.type) {
case $I$(1).KEYS:
return this.iterator.next$().getKey$();
case $I$(1).ELEMENTS:
return this.iterator.next$().getValue$();
default:
return null;
}
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.MultiUIDefaults.MultiUIDefaultsEnumerator, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "KEYS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ELEMENTS", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
