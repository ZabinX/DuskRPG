(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.SelectorProvider']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pipe", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SourceChannel',1033],['SinkChannel',1033]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$',  function () {
return $I$(1).provider$().openPipe$();
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Pipe, "SourceChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.spi.AbstractSelectableChannel', ['java.nio.channels.ReadableByteChannel', 'java.nio.channels.ScatteringByteChannel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider',  function (provider) {
;C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this,[provider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'validOps$',  function () {
return 1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Pipe, "SinkChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.spi.AbstractSelectableChannel', ['java.nio.channels.WritableByteChannel', 'java.nio.channels.GatheringByteChannel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider',  function (provider) {
;C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this,[provider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'validOps$',  function () {
return 4;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
