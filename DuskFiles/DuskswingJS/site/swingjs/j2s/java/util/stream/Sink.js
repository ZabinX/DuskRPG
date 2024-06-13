(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Sink", function(){
}, null, 'java.util.function.Consumer');
C$.$classes$=[['OfInt',9],['OfLong',9],['OfDouble',9],['ChainedReference',1033],['ChainedInt',1033],['ChainedLong',1033],['ChainedDouble',1033]];

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'begin$J',  function (size) {
});

Clazz.newMeth(C$, 'end$',  function () {
});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return false;
});

Clazz.newMeth(C$, 'accept$I',  function (value) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["called wrong accept method"]);
});

Clazz.newMeth(C$, 'accept$J',  function (value) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["called wrong accept method"]);
});

Clazz.newMeth(C$, 'accept$D',  function (value) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["called wrong accept method"]);
});
};;
(function(){/*i*/var C$=Clazz.newInterface(P$.Sink, "OfInt", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.IntConsumer']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$Integer','accept$O'],  function (i) {
this.accept$I(i.intValue$());
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Sink, "OfLong", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.LongConsumer']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$Long','accept$O'],  function (i) {
this.accept$J(i.longValue$());
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Sink, "OfDouble", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.DoubleConsumer']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$Double','accept$O'],  function (i) {
this.accept$D(i.doubleValue$());
});
};})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Sink, "ChainedReference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Sink');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['downstream','java.util.stream.Sink']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink',  function (downstream) {
;C$.$init$.apply(this);
this.downstream=$I$(1).requireNonNull$O(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$',  function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Sink, "ChainedInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['downstream','java.util.stream.Sink']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink',  function (downstream) {
;C$.$init$.apply(this);
this.downstream=$I$(1).requireNonNull$O(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$',  function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Sink, "ChainedLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['downstream','java.util.stream.Sink']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink',  function (downstream) {
;C$.$init$.apply(this);
this.downstream=$I$(1).requireNonNull$O(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$',  function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Sink, "ChainedDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['downstream','java.util.stream.Sink']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink',  function (downstream) {
;C$.$init$.apply(this);
this.downstream=$I$(1).requireNonNull$O(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$',  function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
