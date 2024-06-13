(function(){var P$=Clazz.newPackage("sun.util.resources"),p$1={},I$=[[0,'java.util.LinkedHashMap','java.util.LinkedHashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimeZoneNamesBundle", null, 'sun.util.resources.OpenListResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getStringArray$S$I',  function (key, size) {
var names=p$1.handleGetObject$S$I.apply(this, [key, size]);
if ((names == null  || names.length != size ) && this.parent != null  ) {
names=(this.parent).getStringArray$S$I(key, size);
}if (names == null ) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["no time zone names", this.getClass$().getName$(), key]);
}return names;
});

Clazz.newMeth(C$, 'handleGetObject$S',  function (key) {
return p$1.handleGetObject$S$I.apply(this, [key, 5]);
});

Clazz.newMeth(C$, 'handleGetObject$S$I',  function (key, n) {
var contents=C$.superclazz.prototype.handleGetObject$S.apply(this, [key]);
if (contents == null ) {
return null;
}var clen=Math.min(n - 1, contents.length);
var tmpobj=Clazz.array(String, [clen + 1]);
tmpobj[0]=key;
System.arraycopy$O$I$O$I$I(contents, 0, tmpobj, 1, clen);
return tmpobj;
}, p$1);

Clazz.newMeth(C$, 'createMap$I',  function (size) {
return Clazz.new_($I$(1,1).c$$I,[size]);
});

Clazz.newMeth(C$, 'createSet$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
