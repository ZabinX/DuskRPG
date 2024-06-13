(function(){var P$=Clazz.newPackage("com.sun.imageio.stream"),I$=[[0,'java.util.WeakHashMap','com.sun.imageio.stream.StreamCloser',['com.sun.imageio.stream.StreamCloser','.CloseAction'],'java.security.AccessController','Thread','Runtime']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamCloser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CloseAction',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['toCloseQueue','java.util.WeakHashMap','streamCloser','Thread']]]

Clazz.newMeth(C$, 'addToQueue$com_sun_imageio_stream_StreamCloser_CloseAction',  function (ca) {
{
if (C$.toCloseQueue == null ) {
C$.toCloseQueue=Clazz.new_($I$(1,1));
}C$.toCloseQueue.put$O$O(ca, null);
if (C$.streamCloser == null ) {
var streamCloserRunnable=((P$.StreamCloser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StreamCloser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(2).toCloseQueue != null ) {
{
var set=$I$(2).toCloseQueue.keySet$();
var actions=Clazz.array($I$(3), [set.size$()]);
actions=set.toArray$OA(actions);
for (var ca, $ca = 0, $$ca = actions; $ca<$$ca.length&&((ca=($$ca[$ca])),1);$ca++) {
if (ca != null ) {
try {
ca.performAction$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}}});
})()
), Clazz.new_(P$.StreamCloser$1.$init$,[this, null]));
$I$(4,"doPrivileged$java_security_PrivilegedAction",[((P$.StreamCloser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "StreamCloser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var tg=$I$(5).currentThread$().getThreadGroup$();
for (var tgn=tg; tgn != null ; tg=tgn, tgn=tg.getParent$()) ;
$I$(2).streamCloser=Clazz.new_($I$(5,1).c$$ThreadGroup$Runnable,[tg, this.$finals$.streamCloserRunnable]);
$I$(2).streamCloser.setContextClassLoader$ClassLoader(null);
$I$(6).getRuntime$().addShutdownHook$Thread($I$(2).streamCloser);
return null;
});
})()
), Clazz.new_(P$.StreamCloser$2.$init$,[this, {streamCloserRunnable:streamCloserRunnable}]))]);
}}}, 1);

Clazz.newMeth(C$, 'removeFromQueue$com_sun_imageio_stream_StreamCloser_CloseAction',  function (ca) {
{
if (C$.toCloseQueue != null ) {
C$.toCloseQueue.remove$O(ca);
}}}, 1);

Clazz.newMeth(C$, 'createCloseAction$javax_imageio_stream_ImageInputStream',  function (iis) {
return Clazz.new_($I$(3,1).c$$javax_imageio_stream_ImageInputStream,[iis]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamCloser, "CloseAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iis','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream',  function (iis) {
;C$.$init$.apply(this);
this.iis=iis;
}, 1);

Clazz.newMeth(C$, 'performAction$',  function () {
if (this.iis != null ) {
this.iis.close$();
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
