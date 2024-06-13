(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.AsynchronousChannelProvider']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsynchronousChannelGroup");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['provider','java.nio.channels.spi.AsynchronousChannelProvider']]]

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_AsynchronousChannelProvider',  function (provider) {
;C$.$init$.apply(this);
this.provider=provider;
}, 1);

Clazz.newMeth(C$, 'provider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'withFixedThreadPool$I$java_util_concurrent_ThreadFactory',  function (nThreads, threadFactory) {
return $I$(1).provider$().openAsynchronousChannelGroup$I$java_util_concurrent_ThreadFactory(nThreads, threadFactory);
}, 1);

Clazz.newMeth(C$, 'withCachedThreadPool$java_util_concurrent_ExecutorService$I',  function (executor, initialSize) {
return $I$(1).provider$().openAsynchronousChannelGroup$java_util_concurrent_ExecutorService$I(executor, initialSize);
}, 1);

Clazz.newMeth(C$, 'withThreadPool$java_util_concurrent_ExecutorService',  function (executor) {
return $I$(1).provider$().openAsynchronousChannelGroup$java_util_concurrent_ExecutorService$I(executor, 0);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
