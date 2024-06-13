(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComponentOrientation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['orientation']]
,['O',['LEFT_TO_RIGHT','java.awt.ComponentOrientation','+RIGHT_TO_LEFT','+UNKNOWN']]]

Clazz.newMeth(C$, 'isHorizontal$',  function () {
return (this.orientation & 2) != 0;
});

Clazz.newMeth(C$, 'isLeftToRight$',  function () {
return (this.orientation & 4) != 0;
});

Clazz.newMeth(C$, 'getOrientation$java_util_Locale',  function (locale) {
var lang=locale.getLanguage$();
if ("iw".equals$O(lang) || "ar".equals$O(lang) || "fa".equals$O(lang) || "ur".equals$O(lang)  ) {
return C$.RIGHT_TO_LEFT;
} else {
return C$.LEFT_TO_RIGHT;
}}, 1);

Clazz.newMeth(C$, 'getOrientation$java_util_ResourceBundle',  function (bdl) {
var result=null;
try {
result=bdl.getObject$S("Orientation");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (result == null ) {
result=C$.getOrientation$java_util_Locale(bdl.getLocale$());
}if (result == null ) {
result=C$.getOrientation$java_util_Locale($I$(1).getDefault$());
}return result;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.orientation=value;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.LEFT_TO_RIGHT=Clazz.new_(C$.c$$I,[6]);
C$.RIGHT_TO_LEFT=Clazz.new_(C$.c$$I,[2]);
C$.UNKNOWN=Clazz.new_(C$.c$$I,[7]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
