(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'java.math.BigDecimal',['javax.json.JsonValue','.ValueType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonNumberImpl", null, null, 'javax.json.JsonNumber');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bigDecimal','java.math.BigDecimal']]]

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.bigDecimal=Clazz.new_($I$(1,1).c$$I,[value]);
}, 1);

Clazz.newMeth(C$, 'c$$J',  function (value) {
;C$.$init$.apply(this);
this.bigDecimal=Clazz.new_($I$(1,1).c$$J,[value]);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger',  function (value) {
;C$.$init$.apply(this);
this.bigDecimal=Clazz.new_($I$(1,1).c$$java_math_BigInteger,[value]);
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (value) {
;C$.$init$.apply(this);
this.bigDecimal=$I$(1).valueOf$D(value);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigDecimal',  function (value) {
;C$.$init$.apply(this);
this.bigDecimal=value;
}, 1);

Clazz.newMeth(C$, 'isIntegral$',  function () {
return this.bigDecimal.scale$() == 0;
});

Clazz.newMeth(C$, 'intValue$',  function () {
return this.bigDecimal.intValue$();
});

Clazz.newMeth(C$, 'intValueExact$',  function () {
return this.bigDecimal.intValueExact$();
});

Clazz.newMeth(C$, 'longValue$',  function () {
return this.bigDecimal.longValue$();
});

Clazz.newMeth(C$, 'longValueExact$',  function () {
return this.bigDecimal.longValueExact$();
});

Clazz.newMeth(C$, 'bigIntegerValue$',  function () {
return this.bigDecimal.toBigInteger$();
});

Clazz.newMeth(C$, 'bigIntegerValueExact$',  function () {
return this.bigDecimal.toBigIntegerExact$();
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
return this.bigDecimal.doubleValue$();
});

Clazz.newMeth(C$, 'bigDecimalValue$',  function () {
return this.bigDecimal;
});

Clazz.newMeth(C$, 'getValueType$',  function () {
return $I$(2).NUMBER;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.bigDecimalValue$().hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "javax.json.JsonNumber"))) {
return false;
}var other=obj;
return this.bigDecimalValue$().equals$O(other.bigDecimalValue$());
});

Clazz.newMeth(C$, 'toString',  function () {
return this.bigDecimal.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
