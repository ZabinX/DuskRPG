(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModalityEvent", null, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['listener','sun.awt.ModalityListener']]]

Clazz.newMeth(C$, 'c$$O$sun_awt_ModalityListener$I',  function (source, listener, id) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
this.listener=listener;
}, 1);

Clazz.newMeth(C$, 'dispatch$',  function () {
switch (this.getID$()) {
case 1300:
this.listener.modalityPushed$sun_awt_ModalityEvent(this);
break;
case 1301:
this.listener.modalityPopped$sun_awt_ModalityEvent(this);
break;
default:
throw Clazz.new_($I$(1,1).c$$S,["Invalid event id."]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
