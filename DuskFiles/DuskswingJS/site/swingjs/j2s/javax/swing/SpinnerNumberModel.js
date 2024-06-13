(function(){var P$=Clazz.newPackage("javax.swing"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SpinnerNumberModel", null, 'javax.swing.AbstractSpinnerModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stepSize','Number','+value','minimum','Comparable','+maximum']]]

Clazz.newMeth(C$, 'c$$Number$Comparable$Comparable$Number',  function (value, minimum, maximum, stepSize) {
Clazz.super_(C$, this);
if ((value == null ) || (stepSize == null ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["value and stepSize must be non-null"]);
}if (!(((minimum == null ) || (minimum.compareTo$O(value) <= 0) ) && ((maximum == null ) || (maximum.compareTo$O(value) >= 0) ) )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["(minimum <= value <= maximum) is false"]);
}this.value=value;
this.minimum=minimum;
this.maximum=maximum;
this.stepSize=stepSize;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (value, minimum, maximum, stepSize) {
C$.c$$Number$Comparable$Comparable$Number.apply(this, [ new Integer(value),  new Integer(minimum),  new Integer(maximum),  new Integer(stepSize)]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (value, minimum, maximum, stepSize) {
C$.c$$Number$Comparable$Comparable$Number.apply(this, [ new Double(value),  new Double(minimum),  new Double(maximum),  new Double(stepSize)]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Number$Comparable$Comparable$Number.apply(this, [ new Integer(0), null, null,  new Integer(1)]);
}, 1);

Clazz.newMeth(C$, 'setMinimum$Comparable',  function (minimum) {
if ((minimum == null ) ? (this.minimum != null ) : !minimum.equals$O(this.minimum)) {
this.minimum=minimum;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getMinimum$',  function () {
return this.minimum;
});

Clazz.newMeth(C$, 'setMaximum$Comparable',  function (maximum) {
if ((maximum == null ) ? (this.maximum != null ) : !maximum.equals$O(this.maximum)) {
this.maximum=maximum;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getMaximum$',  function () {
return this.maximum;
});

Clazz.newMeth(C$, 'setStepSize$Number',  function (stepSize) {
if (stepSize == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null stepSize"]);
}if (!stepSize.equals$O(this.stepSize)) {
this.stepSize=stepSize;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.stepSize;
});

Clazz.newMeth(C$, 'incrValue$I',  function (dir) {
var newValue;
if ((Clazz.instanceOf(this.value, "java.lang.Float")) || (Clazz.instanceOf(this.value, "java.lang.Double")) ) {
var v=this.value.doubleValue$() + (this.stepSize.doubleValue$() * dir);
if (Clazz.instanceOf(this.value, "java.lang.Double")) {
newValue= new Double(v);
} else {
newValue= new Float(v);
}} else {
var v=Long.$add(this.value.longValue$(),(Long.$mul(this.stepSize.longValue$(),dir)));
if (Clazz.instanceOf(this.value, "java.lang.Long")) {
newValue= new Long(v);
} else if (Clazz.instanceOf(this.value, "java.lang.Integer")) {
newValue= new Integer(Long.$ival(v));
} else if (Clazz.instanceOf(this.value, "java.lang.Short")) {
newValue= new Short(($s$[0] = v, $s$[0]));
} else {
newValue= new Byte(($b$[0] = v, $b$[0]));
}}if ((this.maximum != null ) && (this.maximum.compareTo$O(newValue) < 0) ) {
return null;
}if ((this.minimum != null ) && (this.minimum.compareTo$O(newValue) > 0) ) {
return null;
} else {
return newValue;
}}, p$1);

Clazz.newMeth(C$, 'getNextValue$',  function () {
return p$1.incrValue$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'getPreviousValue$',  function () {
return p$1.incrValue$I.apply(this, [-1]);
});

Clazz.newMeth(C$, 'getNumber$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if ((value == null ) || !(Clazz.instanceOf(value, "java.lang.Number")) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal value"]);
}if (!value.equals$O(this.value)) {
this.value=value;
this.fireStateChanged$();
}});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
