(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.SelectorProvider']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ServerSocketChannel", null, 'java.nio.channels.spi.AbstractSelectableChannel', 'java.nio.channels.NetworkChannel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider',  function (provider) {
;C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this,[provider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$',  function () {
return $I$(1).provider$().openServerSocketChannel$();
}, 1);

Clazz.newMeth(C$, 'validOps$',  function () {
return 16;
});

Clazz.newMeth(C$, 'bind$java_net_SocketAddress',  function (local) {
return this.bind$java_net_SocketAddress$I(local, 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
