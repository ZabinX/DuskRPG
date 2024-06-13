(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionalLong");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isPresent'],'J',['value']]
,['O',['EMPTY','java.util.OptionalLong']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.isPresent=false;
this.value=0;
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return C$.EMPTY;
}, 1);

Clazz.newMeth(C$, 'c$$J',  function (value) {
;C$.$init$.apply(this);
this.isPresent=true;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'of$J',  function (value) {
return Clazz.new_(C$.c$$J,[value]);
}, 1);

Clazz.newMeth(C$, 'getAsLong$',  function () {
if (!this.isPresent) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No value present"]);
}return this.value;
});

Clazz.newMeth(C$, 'isPresent$',  function () {
return this.isPresent;
});

Clazz.newMeth(C$, 'ifPresent$java_util_function_LongConsumer',  function (consumer) {
if (this.isPresent) consumer.accept$J(this.value);
});

Clazz.newMeth(C$, 'orElse$J',  function (other) {
return this.isPresent ? this.value : other;
});

Clazz.newMeth(C$, 'orElseGet$java_util_function_LongSupplier',  function (other) {
return this.isPresent ? this.value : other.getAsLong$();
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
}if (!(Clazz.instanceOf(obj, "java.util.OptionalLong"))) {
return false;
}var other=obj;
return (this.isPresent && other.isPresent ) ? Long.$eq(this.value,other.value ) : this.isPresent == other.isPresent ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.isPresent ? Long.hashCode$J(this.value) : 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.isPresent ? String.format$S$OA("OptionalLong[%s]", Clazz.array(java.lang.Object, -1, [Long.valueOf$J(this.value)])) : "OptionalLong.empty";
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
