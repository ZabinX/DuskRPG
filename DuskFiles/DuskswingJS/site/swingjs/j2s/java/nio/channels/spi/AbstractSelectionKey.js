(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractSelectionKey", null, 'java.nio.channels.SelectionKey');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.valid=true;
},1);

C$.$fields$=[['Z',['valid']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'isValid$',  function () {
return this.valid;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
this.valid=false;
});

Clazz.newMeth(C$, 'cancel$',  function () {
{
if (this.valid) {
this.valid=false;
(this.selector$()).cancel$java_nio_channels_SelectionKey(this);
}}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
