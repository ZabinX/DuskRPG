(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractInterruptibleChannel", null, null, ['java.nio.channels.Channel', 'java.nio.channels.InterruptibleChannel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closeLock= Clazz.new_();
this.open=true;
},1);

C$.$fields$=[['Z',['open'],'O',['closeLock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'close$',  function () {
{
if (!this.open) return;
this.open=false;
this.implCloseChannel$();
}});

Clazz.newMeth(C$, 'isOpen$',  function () {
return this.open;
});

Clazz.newMeth(C$, 'begin$',  function () {
});

Clazz.newMeth(C$, 'end$Z',  function (completed) {
if (!completed && !this.open ) throw Clazz.new_(Clazz.load('java.nio.channels.AsynchronousCloseException'));
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
