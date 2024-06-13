(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.HashMap','java.util.logging.Level','java.util.ArrayList',['java.util.logging.Level','.KnownLevel']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Level", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['KnownLevel',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value'],'S',['name']]
,['O',['OFF','java.util.logging.Level','+SEVERE','+WARNING','+INFO','+CONFIG','+FINE','+FINER','+FINEST','+ALL']]]

Clazz.newMeth(C$, 'c$$S$I',  function (name, value) {
C$.c$$S$I$S.apply(this, [name, value, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$S',  function (name, value, resourceBundleName) {
C$.c$$S$I$S$Z.apply(this, [name, value, resourceBundleName, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$S$Z',  function (name, value, resourceBundleName, visible) {
;C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.name=name;
this.value=value;
if (visible) {
$I$(4).add$java_util_logging_Level(this);
}}, 1);

Clazz.newMeth(C$, 'getResourceBundleName$',  function () {
return null;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getLocalizedName$',  function () {
return this.getLocalizedLevelName$();
});

Clazz.newMeth(C$, 'getLevelName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getLocalizedLevelName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'findLevel$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var level;
level=$I$(4).findByName$S(name);
if (level != null ) {
return level.mirroredLevel;
}try {
var x=Integer.parseInt$S(name);
level=$I$(4).findByValue$I(x);
if (level == null ) {
var levelObject=Clazz.new_(C$.c$$S$I,[name, x]);
level=$I$(4).findByValue$I(x);
}return level.mirroredLevel;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
level=$I$(4).findByLocalizedLevelName$S(name);
if (level != null ) {
return level.mirroredLevel;
}return null;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'intValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'readResolve',  function () {
var o=$I$(4).matches$java_util_logging_Level(this);
if (o != null ) {
return o.levelObject;
}var level=Clazz.new_(C$.c$$S$I$S,[this.name, this.value, null]);
return level;
}, p$1);

Clazz.newMeth(C$, 'parse$S',  function (name) {
name.length$();
var level;
level=$I$(4).findByName$S(name);
if (level != null ) {
return level.levelObject;
}try {
var x=Integer.parseInt$S(name);
level=$I$(4).findByValue$I(x);
if (level == null ) {
var levelObject=Clazz.new_(C$.c$$S$I,[name, x]);
level=$I$(4).findByValue$I(x);
}return level.levelObject;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
level=$I$(4).findByLocalizedLevelName$S(name);
if (level != null ) {
return level.levelObject;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad level \"" + name + "\"" ]);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (ox) {
try {
var lx=ox;
return (lx.value == this.value);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.value;
});

C$.$static$=function(){C$.$static$=0;
C$.OFF=Clazz.new_(C$.c$$S$I$S,["OFF", 2147483647, "sun.util.logging.resources.logging"]);
C$.SEVERE=Clazz.new_(C$.c$$S$I$S,["SEVERE", 1000, "sun.util.logging.resources.logging"]);
C$.WARNING=Clazz.new_(C$.c$$S$I$S,["WARNING", 900, "sun.util.logging.resources.logging"]);
C$.INFO=Clazz.new_(C$.c$$S$I$S,["INFO", 800, "sun.util.logging.resources.logging"]);
C$.CONFIG=Clazz.new_(C$.c$$S$I$S,["CONFIG", 700, "sun.util.logging.resources.logging"]);
C$.FINE=Clazz.new_(C$.c$$S$I$S,["FINE", 500, "sun.util.logging.resources.logging"]);
C$.FINER=Clazz.new_(C$.c$$S$I$S,["FINER", 400, "sun.util.logging.resources.logging"]);
C$.FINEST=Clazz.new_(C$.c$$S$I$S,["FINEST", 300, "sun.util.logging.resources.logging"]);
C$.ALL=Clazz.new_(C$.c$$S$I$S,["ALL", -2147483648, "sun.util.logging.resources.logging"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Level, "KnownLevel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['levelObject','java.util.logging.Level','+mirroredLevel']]
,['O',['nameToLevels','java.util.Map','+intToLevels']]]

Clazz.newMeth(C$, 'c$$java_util_logging_Level',  function (l) {
;C$.$init$.apply(this);
this.levelObject=l;
if (l.getClass$() === Clazz.getClass($I$(2)) ) {
this.mirroredLevel=l;
} else {
this.mirroredLevel=Clazz.new_($I$(2,1).c$$S$I$S$Z,[l.name, l.value, null, false]);
}}, 1);

Clazz.newMeth(C$, 'add$java_util_logging_Level',  function (l) {
var o=Clazz.new_(C$.c$$java_util_logging_Level,[l]);
var list=C$.nameToLevels.get$O(l.name);
if (list == null ) {
list=Clazz.new_($I$(3,1));
C$.nameToLevels.put$O$O(l.name, list);
}list.add$O(o);
list=C$.intToLevels.get$O("" + l.value);
if (list == null ) {
list=Clazz.new_($I$(3,1));
C$.intToLevels.put$O$O("" + l.value, list);
}list.add$O(o);
}, 1);

Clazz.newMeth(C$, 'findByName$S',  function (name) {
var list=C$.nameToLevels.get$O(name);
if (list != null ) {
return list.get$I(0);
}return null;
}, 1);

Clazz.newMeth(C$, 'findByValue$I',  function (value) {
var list=C$.intToLevels.get$O("" + value);
if (list != null ) {
return list.get$I(0);
}return null;
}, 1);

Clazz.newMeth(C$, 'findByLocalizedLevelName$S',  function (name) {
for (var levels, $levels = C$.nameToLevels.values$().iterator$(); $levels.hasNext$()&&((levels=($levels.next$())),1);) {
for (var l, $l = levels.iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
var lname=l.levelObject.getLocalizedLevelName$();
if (name.equals$O(lname)) {
return l;
}}
}
return null;
}, 1);

Clazz.newMeth(C$, 'matches$java_util_logging_Level',  function (l) {
var list=C$.nameToLevels.get$O(l.name);
if (list != null ) {
for (var level, $level = list.iterator$(); $level.hasNext$()&&((level=($level.next$())),1);) {
var other=level.mirroredLevel;
if (l.value == other.value) {
return level;
}}
}return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.nameToLevels=Clazz.new_($I$(1,1));
C$.intToLevels=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
