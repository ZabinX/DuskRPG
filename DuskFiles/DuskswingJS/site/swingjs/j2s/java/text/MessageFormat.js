(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MessageFormat");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['pattern']]]

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
;C$.$init$.apply(this);
this.pattern=pattern;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale',  function (pattern, locale) {
;C$.$init$.apply(this);
this.pattern=pattern;
}, 1);

Clazz.newMeth(C$, 'format$S$OA',  function (pattern, args) {
{
return pattern.replace (/\{(\d+)\}/g, function ($0, $1) { var i = parseInt ($1);
if (args == null) return null;
return args[i];
});
}
}, 1);

Clazz.newMeth(C$, 'format$O',  function (obj) {
return C$.format$S$OA(this.pattern, Clazz.array(java.lang.Object, -1, [obj]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
