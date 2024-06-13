(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.Hashtable','sun.misc.SignalHandler','sun.misc.NativeSignalHandler','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Signal");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['number'],'S',['name']]
,['O',['handlers','java.util.Hashtable','+signals']]]

Clazz.newMeth(C$, 'getNumber$',  function () {
return this.number;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'equals$O',  function (other) {
if (this === other ) {
return true;
}if (other == null  || !(Clazz.instanceOf(other, "sun.misc.Signal")) ) {
return false;
}var other1=other;
return this.name.equals$O(other1.name) && (this.number == other1.number) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.number;
});

Clazz.newMeth(C$, 'toString',  function () {
return "SIG" + this.name;
});

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.number=C$.findSignal$S(name);
this.name=name;
if (this.number < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown signal: " + name]);
}}, 1);

Clazz.newMeth(C$, 'handle$sun_misc_Signal$sun_misc_SignalHandler',  function (sig, handler) {
var newH=(Clazz.instanceOf(handler, "sun.misc.NativeSignalHandler")) ? (handler).getHandler$() : 2;
var oldH=C$.handle0$I$J(sig.number, newH);
if (Long.$eq(oldH,-1 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Signal already used by VM or OS: " + sig]);
}C$.signals.put$O$O(Integer.valueOf$I(sig.number), sig);
{
var oldHandler=C$.handlers.get$O(sig);
C$.handlers.remove$O(sig);
if (Long.$eq(newH,2 )) {
C$.handlers.put$O$O(sig, handler);
}if (Long.$eq(oldH,0 )) {
return $I$(2).SIG_DFL;
} else if (Long.$eq(oldH,1 )) {
return $I$(2).SIG_IGN;
} else if (Long.$eq(oldH,2 )) {
return oldHandler;
} else {
return Clazz.new_($I$(3,1).c$$J,[oldH]);
}}}, 1);

Clazz.newMeth(C$, 'raise$sun_misc_Signal',  function (sig) {
if (C$.handlers.get$O(sig) == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unhandled signal: " + sig]);
}C$.raise0$I(sig.number);
}, 1);

Clazz.newMeth(C$, 'dispatch$I',  function (number) {
var sig=C$.signals.get$O(Integer.valueOf$I(number));
var handler=C$.handlers.get$O(sig);
var runnable=((P$.Signal$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Signal$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.handler.handle$sun_misc_Signal(this.$finals$.sig);
});
})()
), Clazz.new_(P$.Signal$1.$init$,[this, {sig:sig,handler:handler}]));
if (handler != null ) {
Clazz.new_($I$(4,1).c$$Runnable$S,[runnable, sig + " handler"]).start$();
}}, 1);

Clazz.newMeth(C$, 'findSignal$S',  function (sigName) {
alert('native method must be replaced! findSignal');
}
, 2);

Clazz.newMeth(C$, 'handle0$I$J',  function (sig, nativeH) {
alert('native method must be replaced! handle0');
}
, 2);

Clazz.newMeth(C$, 'raise0$I',  function (sig) {
alert('native method must be replaced! raise0');
}
, 2);

C$.$static$=function(){C$.$static$=0;
C$.handlers=Clazz.new_($I$(1,1).c$$I,[4]);
C$.signals=Clazz.new_($I$(1,1).c$$I,[4]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
