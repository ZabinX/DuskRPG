(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionalDouble");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isPresent'],'D',['value']]
,['O',['EMPTY','java.util.OptionalDouble']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.isPresent=false;
this.value=NaN;
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return C$.EMPTY;
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (value) {
;C$.$init$.apply(this);
this.isPresent=true;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'of$D',  function (value) {
return Clazz.new_(C$.c$$D,[value]);
}, 1);

Clazz.newMeth(C$, 'getAsDouble$',  function () {
if (!this.isPresent) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No value present"]);
}return this.value;
});

Clazz.newMeth(C$, 'isPresent$',  function () {
return this.isPresent;
});

Clazz.newMeth(C$, 'ifPresent$java_util_function_DoubleConsumer',  function (consumer) {
if (this.isPresent) consumer.accept$D(this.value);
});

Clazz.newMeth(C$, 'orElse$D',  function (other) {
return this.isPresent ? this.value : other;
});

Clazz.newMeth(C$, 'orElseGet$java_util_function_DoubleSupplier',  function (other) {
return this.isPresent ? this.value : other.getAsDouble$();
});

Clazz.newMeth(C$, 'orElseThrow$java_util_function_Supplier',  function (exceptionSupplier) {
if (this.isPresent) {
return this.value;
} else {
throw exceptionSupplier.get$();
}});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.util.OptionalDouble"))) {
return false;
}var other=obj;
return (this.isPresent && other.isPresent ) ? Double.compare$D$D(this.value, other.value) == 0 : this.isPresent == other.isPresent ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.isPresent ? Double.hashCode$D(this.value) : 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.isPresent ? String.format$S$OA("OptionalDouble[%s]", Clazz.array(java.lang.Object, -1, [Double.valueOf$D(this.value)])) : "OptionalDouble.empty";
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
