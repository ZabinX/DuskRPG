(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),I$=[[0,'sun.misc.Unsafe','Error','Runtime','Thread','java.util.concurrent.ThreadLocalRandom',['java.util.concurrent.atomic.Striped64','.Cell']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Striped64", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Number');
C$.$classes$=[['Cell',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cellsBusy'],'J',['base'],'O',['cells','java.util.concurrent.atomic.Striped64.Cell[]']]
,['I',['NCPU'],'J',['BASE','CELLSBUSY','PROBE'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'casBase$J$J',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.BASE, cmp, val);
});

Clazz.newMeth(C$, 'casCellsBusy$',  function () {
return C$.UNSAFE.compareAndSwapInt$O$J$I$I(this, C$.CELLSBUSY, 0, 1);
});

Clazz.newMeth(C$, 'getProbe$',  function () {
return C$.UNSAFE.getInt$O$J($I$(4).currentThread$(), C$.PROBE);
}, 1);

Clazz.newMeth(C$, 'advanceProbe$I',  function (probe) {
probe^=probe << 13;
probe^=probe >>> 17;
probe^=probe << 5;
C$.UNSAFE.putInt$O$J$I($I$(4).currentThread$(), C$.PROBE, probe);
return probe;
}, 1);

Clazz.newMeth(C$, 'longAccumulate$J$java_util_function_LongBinaryOperator$Z',  function (x, fn, wasUncontended) {
var h;
if ((h=C$.getProbe$()) == 0) {
$I$(5).current$();
h=C$.getProbe$();
wasUncontended=true;
}var collide=false;
for (; ; ) {
var as;
var a;
var n;
var v;
if ((as=this.cells) != null  && (n=as.length) > 0 ) {
if ((a=as[(n - 1) & h]) == null ) {
if (this.cellsBusy == 0) {
var r=Clazz.new_($I$(6,1).c$$J,[x]);
if (this.cellsBusy == 0 && this.casCellsBusy$() ) {
var created=false;
try {
var rs;
var m;
var j;
if ((rs=this.cells) != null  && (m=rs.length) > 0  && rs[j=(m - 1) & h] == null  ) {
rs[j]=r;
created=true;
}} finally {
this.cellsBusy=0;
}
if (created) break;
continue;
}}collide=false;
} else if (!wasUncontended) wasUncontended=true;
 else if (a.cas$J$J(v=a.value, ((fn == null ) ? Long.$add(v,x) : fn.applyAsLong$J$J(v, x)))) break;
 else if (n >= C$.NCPU || this.cells !== as  ) collide=false;
 else if (!collide) collide=true;
 else if (this.cellsBusy == 0 && this.casCellsBusy$() ) {
try {
if (this.cells === as ) {
var rs=Clazz.array($I$(6), [n << 1]);
for (var i=0; i < n; ++i) rs[i]=as[i];

this.cells=rs;
}} finally {
this.cellsBusy=0;
}
collide=false;
continue;
}h=C$.advanceProbe$I(h);
} else if (this.cellsBusy == 0 && this.cells === as   && this.casCellsBusy$() ) {
var init=false;
try {
if (this.cells === as ) {
var rs=Clazz.array($I$(6), [2]);
rs[h & 1]=Clazz.new_($I$(6,1).c$$J,[x]);
this.cells=rs;
init=true;
}} finally {
this.cellsBusy=0;
}
if (init) break;
} else if (this.casBase$J$J(v=this.base, ((fn == null ) ? Long.$add(v,x) : fn.applyAsLong$J$J(v, x)))) break;
}
});

Clazz.newMeth(C$, 'doubleAccumulate$D$java_util_function_DoubleBinaryOperator$Z',  function (x, fn, wasUncontended) {
var h;
if ((h=C$.getProbe$()) == 0) {
$I$(5).current$();
h=C$.getProbe$();
wasUncontended=true;
}var collide=false;
for (; ; ) {
var as;
var a;
var n;
var v;
if ((as=this.cells) != null  && (n=as.length) > 0 ) {
if ((a=as[(n - 1) & h]) == null ) {
if (this.cellsBusy == 0) {
var r=Clazz.new_([Double.doubleToRawLongBits$D(x)],$I$(6,1).c$$J);
if (this.cellsBusy == 0 && this.casCellsBusy$() ) {
var created=false;
try {
var rs;
var m;
var j;
if ((rs=this.cells) != null  && (m=rs.length) > 0  && rs[j=(m - 1) & h] == null  ) {
rs[j]=r;
created=true;
}} finally {
this.cellsBusy=0;
}
if (created) break;
continue;
}}collide=false;
} else if (!wasUncontended) wasUncontended=true;
 else if (a.cas$J$J(v=a.value, ((fn == null ) ? Double.doubleToRawLongBits$D(Double.longBitsToDouble$J(v) + x) : Double.doubleToRawLongBits$D(fn.applyAsDouble$D$D(Double.longBitsToDouble$J(v), x))))) break;
 else if (n >= C$.NCPU || this.cells !== as  ) collide=false;
 else if (!collide) collide=true;
 else if (this.cellsBusy == 0 && this.casCellsBusy$() ) {
try {
if (this.cells === as ) {
var rs=Clazz.array($I$(6), [n << 1]);
for (var i=0; i < n; ++i) rs[i]=as[i];

this.cells=rs;
}} finally {
this.cellsBusy=0;
}
collide=false;
continue;
}h=C$.advanceProbe$I(h);
} else if (this.cellsBusy == 0 && this.cells === as   && this.casCellsBusy$() ) {
var init=false;
try {
if (this.cells === as ) {
var rs=Clazz.array($I$(6), [2]);
rs[h & 1]=Clazz.new_([Double.doubleToRawLongBits$D(x)],$I$(6,1).c$$J);
this.cells=rs;
init=true;
}} finally {
this.cellsBusy=0;
}
if (init) break;
} else if (this.casBase$J$J(v=this.base, ((fn == null ) ? Double.doubleToRawLongBits$D(Double.longBitsToDouble$J(v) + x) : Double.doubleToRawLongBits$D(fn.applyAsDouble$D$D(Double.longBitsToDouble$J(v), x))))) break;
}
});

C$.$static$=function(){C$.$static$=0;
C$.NCPU=$I$(3).getRuntime$().availableProcessors$();
{
try {
C$.UNSAFE=$I$(1).getUnsafe$();
var sk=Clazz.getClass(C$);
C$.BASE=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(sk.getDeclaredField$S("base"));
C$.CELLSBUSY=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(sk.getDeclaredField$S("cellsBusy"));
var tk=Clazz.getClass($I$(4));
C$.PROBE=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("threadLocalRandomProbe"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Striped64, "Cell", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value']]
,['J',['valueOffset'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$J',  function (x) {
;C$.$init$.apply(this);
this.value=x;
}, 1);

Clazz.newMeth(C$, 'cas$J$J',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.valueOffset, cmp, val);
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.UNSAFE=$I$(1).getUnsafe$();
var ak=Clazz.getClass(C$);
C$.valueOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(ak.getDeclaredField$S("value"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
C$.$getAnn$ = function(){ return [
[[null,'java.util.concurrent.atomic.Striped64.Cell',null,['sun.misc.Contended']],['']],
  [['value','long'],['@XmlElement']]]}

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
