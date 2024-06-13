(function(){var P$=Clazz.newPackage("javax.print.attribute"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntegerSyntax", null, null, ['javax.print.attribute.Attribute', 'java.io.Serializable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value']]]

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (value, lowerBound, upperBound) {
;C$.$init$.apply(this);
if (lowerBound > value || value > upperBound ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value " + value + " not in range " + lowerBound + ".." + upperBound ]);
}this.value=value;
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'equals$O',  function (object) {
return (object != null  && Clazz.instanceOf(object, "javax.print.attribute.IntegerSyntax")  && this.value == (object).value );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'toString',  function () {
return "" + this.value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
