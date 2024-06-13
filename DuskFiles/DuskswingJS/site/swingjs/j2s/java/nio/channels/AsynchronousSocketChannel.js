(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.AsynchronousChannelProvider','java.util.concurrent.TimeUnit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsynchronousSocketChannel", null, null, ['java.nio.channels.AsynchronousByteChannel', 'java.nio.channels.NetworkChannel']);

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

Clazz.newMeth(C$, 'open$java_nio_channels_AsynchronousChannelGroup',  function (group) {
var provider=(group == null ) ? $I$(1).provider$() : group.provider$();
return provider.openAsynchronousSocketChannel$java_nio_channels_AsynchronousChannelGroup(group);
}, 1);

Clazz.newMeth(C$, 'open$',  function () {
return C$.open$java_nio_channels_AsynchronousChannelGroup(null);
}, 1);

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer$O$java_nio_channels_CompletionHandler',  function (dst, attachment, handler) {
this.read$java_nio_ByteBuffer$J$java_util_concurrent_TimeUnit$O$java_nio_channels_CompletionHandler(dst, 0, $I$(2).MILLISECONDS, attachment, handler);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer$O$java_nio_channels_CompletionHandler',  function (src, attachment, handler) {
this.write$java_nio_ByteBuffer$J$java_util_concurrent_TimeUnit$O$java_nio_channels_CompletionHandler(src, 0, $I$(2).MILLISECONDS, attachment, handler);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
