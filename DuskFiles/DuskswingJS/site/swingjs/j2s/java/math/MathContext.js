(function(){var P$=Clazz.newPackage("java.math"),p$1={},I$=[[0,'java.math.RoundingMode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MathContext", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['precision'],'O',['roundingMode','java.math.RoundingMode']]
,['O',['DEFAULT_ROUNDINGMODE','java.math.RoundingMode','UNLIMITED','java.math.MathContext','+DECIMAL32','+DECIMAL64','+DECIMAL128']]]

Clazz.newMeth(C$, 'c$$I',  function (setPrecision) {
C$.c$$I$java_math_RoundingMode.apply(this, [setPrecision, C$.DEFAULT_ROUNDINGMODE]);
return;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_math_RoundingMode',  function (setPrecision, setRoundingMode) {
;C$.$init$.apply(this);
if (setPrecision < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Digits < 0"]);
if (setRoundingMode == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null RoundingMode"]);
this.precision=setPrecision;
this.roundingMode=setRoundingMode;
return;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (val) {
;C$.$init$.apply(this);
var bad=false;
var setPrecision;
if (val == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null String"]);
try {
if (!val.startsWith$S("precision=")) throw Clazz.new_(Clazz.load('RuntimeException'));
var fence=val.indexOf$I(" ");
var off=10;
setPrecision=Integer.parseInt$S(val.substring$I$I(10, fence));
if (!val.startsWith$S$I("roundingMode=", fence + 1)) throw Clazz.new_(Clazz.load('RuntimeException'));
off=fence + 1 + 13 ;
var str=val.substring$I$I(off, val.length$());
this.roundingMode=$I$(1).valueOf$S(str);
} catch (re) {
if (Clazz.exceptionOf(re,"RuntimeException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad string format"]);
} else {
throw re;
}
}
if (setPrecision < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Digits < 0"]);
this.precision=setPrecision;
}, 1);

Clazz.newMeth(C$, 'getPrecision$',  function () {
return this.precision;
});

Clazz.newMeth(C$, 'getRoundingMode$',  function () {
return this.roundingMode;
});

Clazz.newMeth(C$, 'equals$O',  function (x) {
var mc;
if (!(Clazz.instanceOf(x, "java.math.MathContext"))) return false;
mc=x;
return mc.precision == this.precision && mc.roundingMode === this.roundingMode  ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.precision + this.roundingMode.hashCode$() * 59;
});

Clazz.newMeth(C$, 'toString',  function () {
return "precision=" + this.precision + " " + "roundingMode=" + this.roundingMode.toString() ;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
if (this.precision < 0) {
var message="MathContext: invalid digits in stream";
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[message]);
}if (this.roundingMode == null ) {
var message="MathContext: null roundingMode in stream";
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[message]);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_ROUNDINGMODE=$I$(1).HALF_UP;
C$.UNLIMITED=Clazz.new_(C$.c$$I$java_math_RoundingMode,[0, $I$(1).HALF_UP]);
C$.DECIMAL32=Clazz.new_(C$.c$$I$java_math_RoundingMode,[7, $I$(1).HALF_EVEN]);
C$.DECIMAL64=Clazz.new_(C$.c$$I$java_math_RoundingMode,[16, $I$(1).HALF_EVEN]);
C$.DECIMAL128=Clazz.new_(C$.c$$I$java_math_RoundingMode,[34, $I$(1).HALF_EVEN]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
