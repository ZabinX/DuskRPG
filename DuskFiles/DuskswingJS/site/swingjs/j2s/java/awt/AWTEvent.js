(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AWTEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.consumed=false;
this.focusManagerIsDispatching=false;
},1);

C$.$fields$=[['Z',['consumed','focusManagerIsDispatching','isPosted'],'I',['id','num'],'O',['bdata','byte[]']]
,['I',['idnum']]]

Clazz.newMeth(C$, 'setPosted$',  function () {
this.isPosted=true;
});

Clazz.newMeth(C$, 'getBData$',  function () {
return this.bdata;
});

Clazz.newMeth(C$, 'setBData$BA',  function (bdata) {
this.bdata=bdata;
});

Clazz.newMeth(C$, 'c$$java_awt_Event',  function (event) {
C$.c$$O$I.apply(this, [event.target, event.id]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I',  function (source, id) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.id=id;
this.num=++C$.idnum;
switch (id) {
case 1001:
case 701:
case 601:
case 900:
this.consumed=true;
break;
default:
}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$O.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setSource$O',  function (newSource) {
if (this.source === newSource ) {
return;
}var comp=null;
if (Clazz.instanceOf(newSource, "java.awt.Component")) {
comp=newSource;
while (comp != null  && comp.peer != null   && (Clazz.instanceOf(comp.peer, "java.awt.peer.LightweightPeer")) ){
comp=comp.parent;
}
}this.source=newSource;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'toString',  function () {
var srcName=null;
if (Clazz.instanceOf(this.source, "java.awt.Component")) {
srcName=(this.source).getName$();
}return this.getClass$().getName$() + "[" + this.paramString$() + "] on " + (srcName != null  ? srcName : this.source) ;
});

Clazz.newMeth(C$, 'paramString$',  function () {
return "";
});

Clazz.newMeth(C$, 'consume$',  function () {
switch (this.id) {
case 401:
case 402:
case 501:
case 502:
case 503:
case 506:
case 504:
case 505:
case 507:
case 1100:
case 1101:
this.consumed=true;
break;
default:
}
});

Clazz.newMeth(C$, 'isConsumed$',  function () {
return this.consumed;
});

Clazz.newMeth(C$, 'copyPrivateDataInto$java_awt_AWTEvent',  function (that) {
that.bdata=this.bdata;
});

Clazz.newMeth(C$, 'dispatched$',  function () {
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
