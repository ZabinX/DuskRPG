(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'Thread','sun.misc.Queue']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RequestProcessor", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['requestQueue','sun.misc.Queue','dispatcher','Thread']]]

Clazz.newMeth(C$, 'postRequest$sun_misc_Request',  function (req) {
C$.lazyInitialize$();
C$.requestQueue.enqueue$O(req);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
C$.lazyInitialize$();
while (true){
try {
var req=C$.requestQueue.dequeue$();
try {
req.execute$();
} catch (t) {
}
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'startProcessing$',  function () {
if (C$.dispatcher == null ) {
C$.dispatcher=Clazz.new_([Clazz.new_(C$), "Request Processor"],$I$(1,1).c$$Runnable$S);
C$.dispatcher.setPriority$I(7);
C$.dispatcher.start$();
}}, 1);

Clazz.newMeth(C$, 'lazyInitialize$',  function () {
if (C$.requestQueue == null ) {
C$.requestQueue=Clazz.new_($I$(2,1));
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
