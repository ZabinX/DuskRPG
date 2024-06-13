(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.SelectorProvider']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SocketChannel", null, 'java.nio.channels.spi.AbstractSelectableChannel', ['java.nio.channels.ByteChannel', 'java.nio.channels.ScatteringByteChannel', 'java.nio.channels.GatheringByteChannel', 'java.nio.channels.NetworkChannel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider',  function (provider) {
;C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this,[provider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$',  function () {
return $I$(1).provider$().openSocketChannel$();
}, 1);

Clazz.newMeth(C$, 'open$java_net_SocketAddress',  function (remote) {
var sc=C$.open$();
try {
sc.connect$java_net_SocketAddress(remote);
} catch (x) {
try {
sc.close$();
} catch (suppressed) {
x.addSuppressed$Throwable(suppressed);
}
throw x;
}
Clazz.assert(C$, this, function(){return sc.isConnected$()});
return sc;
}, 1);

Clazz.newMeth(C$, 'validOps$',  function () {
return (13);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBufferA',  function (dsts) {
return this.read$java_nio_ByteBufferA$I$I(dsts, 0, dsts.length);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBufferA',  function (srcs) {
return this.write$java_nio_ByteBufferA$I$I(srcs, 0, srcs.length);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
