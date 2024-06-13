(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ConditionLock", null, 'sun.misc.Lock');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
},1);

C$.$fields$=[['I',['state']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialState) {
Clazz.super_(C$, this);
this.state=initialState;
}, 1);

Clazz.newMeth(C$, 'lockWhen$I',  function (desiredState) {
while (this.state != desiredState){
this.wait$();
}
this.lock$();
});

Clazz.newMeth(C$, 'unlockWith$I',  function (newState) {
this.state=newState;
this.unlock$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
