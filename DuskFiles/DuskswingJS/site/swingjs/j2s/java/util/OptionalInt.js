(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionalInt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isPresent'],'I',['value']]
,['O',['EMPTY','java.util.OptionalInt']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.isPresent=false;
this.value=0;
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return C$.EMPTY;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.isPresent=true;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'of$I',  function (value) {
return Clazz.new_(C$.c$$I,[value]);
}, 1);

Clazz.newMeth(C$, 'getAsInt$',  function () {
if (!this.isPresent) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No value present"]);
}return this.value;
});

Clazz.newMeth(C$, 'isPresent$',  function () {
return this.isPresent;
});

Clazz.newMeth(C$, 'ifPresent$java_util_function_IntConsumer',  function (consumer) {
if (this.isPresent) consumer.accept$I(this.value);
});

Clazz.newMeth(C$, 'orElse$I',  function (other) {
return this.isPresent ? this.value : other;
});

Clazz.newMeth(C$, 'orElseGet$java_util_function_IntSupplier',  function (other) {
return this.isPresent ? this.value : other.getAsInt$();
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
}if (!(Clazz.instanceOf(obj, "java.util.OptionalInt"))) {
return false;
}var other=obj;
return (this.isPresent && other.isPresent ) ? this.value == other.value : this.isPresent == other.isPresent ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.isPresent ? Integer.hashCode$I(this.value) : 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.isPresent ? String.format$S$OA("OptionalInt[%s]", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.value)])) : "OptionalInt.empty";
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
