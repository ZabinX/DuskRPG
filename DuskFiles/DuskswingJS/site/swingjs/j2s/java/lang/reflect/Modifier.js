(function(){var P$=java.lang.reflect,I$=[];
/*c*/var C$=Clazz.newClass(P$, "Modifier");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isAbstract$I',  function (modifiers) {
return ((modifiers & 1024) != 0);
}, 1);

Clazz.newMeth(C$, 'isFinal$I',  function (modifiers) {
return ((modifiers & 16) != 0);
}, 1);

Clazz.newMeth(C$, 'isInterface$I',  function (modifiers) {
return ((modifiers & 512) != 0);
}, 1);

Clazz.newMeth(C$, 'isNative$I',  function (modifiers) {
return ((modifiers & 256) != 0);
}, 1);

Clazz.newMeth(C$, 'isPrivate$I',  function (modifiers) {
return ((modifiers & 2) != 0);
}, 1);

Clazz.newMeth(C$, 'isProtected$I',  function (modifiers) {
return ((modifiers & 4) != 0);
}, 1);

Clazz.newMeth(C$, 'isPublic$I',  function (modifiers) {
return ((modifiers & 1) != 0);
}, 1);

Clazz.newMeth(C$, 'isStatic$I',  function (modifiers) {
return ((modifiers & 8) != 0);
}, 1);

Clazz.newMeth(C$, 'isStrict$I',  function (modifiers) {
return ((modifiers & 2048) != 0);
}, 1);

Clazz.newMeth(C$, 'isSynchronized$I',  function (modifiers) {
return ((modifiers & 32) != 0);
}, 1);

Clazz.newMeth(C$, 'isTransient$I',  function (modifiers) {
return ((modifiers & 128) != 0);
}, 1);

Clazz.newMeth(C$, 'isVolatile$I',  function (modifiers) {
return ((modifiers & 64) != 0);
}, 1);

Clazz.newMeth(C$, 'toString$I',  function (modifiers) {
var sb=Clazz.array(String, [0]);
if (C$.isPublic$I(modifiers)) sb[sb.length]="public";
if (C$.isProtected$I(modifiers)) sb[sb.length]="protected";
if (C$.isPrivate$I(modifiers)) sb[sb.length]="private";
if (C$.isAbstract$I(modifiers)) sb[sb.length]="abstract";
if (C$.isStatic$I(modifiers)) sb[sb.length]="static";
if (C$.isFinal$I(modifiers)) sb[sb.length]="final";
if (C$.isTransient$I(modifiers)) sb[sb.length]="transient";
if (C$.isVolatile$I(modifiers)) sb[sb.length]="volatile";
if (C$.isSynchronized$I(modifiers)) sb[sb.length]="synchronized";
if (C$.isNative$I(modifiers)) sb[sb.length]="native";
if (C$.isStrict$I(modifiers)) sb[sb.length]="strictfp";
if (C$.isInterface$I(modifiers)) sb[sb.length]="interface";
if (sb.length > 0) {
return sb.join (" ");
}
return "";
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
