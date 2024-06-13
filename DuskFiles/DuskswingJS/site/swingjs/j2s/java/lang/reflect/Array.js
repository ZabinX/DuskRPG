(function(){var P$=java.lang.reflect,I$=[];
/*c*/var C$=Clazz.newClass(P$, "Array");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$Class$I',  function (componentType, length) {
return C$.newArray$Class$I(componentType, length);
}, 1);

Clazz.newMeth(C$, 'newInstance$Class$IA',  function (componentType, dimensions) {
return C$.multiNewArray$Class$IA(componentType, dimensions);
}, 1);

Clazz.newMeth(C$, 'getAval$O$I',  function (array, index) {
C$.checkArray$O$I$Z(array, index, true);
return (array)[index];
}, 1);

Clazz.newMeth(C$, 'checkArray$O$I$Z',  function (array, index, checkIndex) {
if (array == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (checkIndex && (index < 0 || index >= (array).length ) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}, 1);

Clazz.newMeth(C$, 'getLength$O',  function (array) {
C$.checkArray$O$I$Z(array, 0, false);
return (array).length;
}, 1);

Clazz.newMeth(C$, 'get$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
{
switch (array.__ARRAYTYPE){ case "BA": return new Byte(x);
case "CA": return new Character(x); case "HA": return new Short(x); case "IA": return new Integer(x); case "JA": return new Long(x); case "ZA": return (x ? Boolean.TRUE : Boolean.FALSE); case "FA": return new Float(x); case "DA": return new Double(x); } return x;
}
}, 1);

Clazz.newMeth(C$, 'getBoolean$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=false;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "ZA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getByte$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=0;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "BA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getChar$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val="\u0000";
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "CA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getShort$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=0;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "BA":
case "HA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getInt$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=0;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "BA":
case "HA":
case "IA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getLong$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=0;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "BA":
case "HA":
case "IA":
case "JA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getFloat$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=0;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "BA":
case "HA":
case "IA":
case "JA":
case "FA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'getDouble$O$I',  function (array, index) {
var x=C$.getAval$O$I(array, index);
var type="";
var val=0;
{
type = array.__ARRAYTYPE; val = x;
}
switch (type) {
case "BA":
case "HA":
case "IA":
case "JA":
case "FA":
case "DA":
return val;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'set$O$I$O',  function (array, index, value) {
C$.checkArray$O$I$Z(array, index, true);
var type="";
{
type = array.__ARRAYTYPE;
}
try {
switch (type) {
case "BA":
(array)[index]=(value).byteValue$();
return;
case "CA":
(array)[index]=(value).charValue$();
return;
case "HA":
(array)[index]=(value).shortValue$();
return;
case "IA":
(array)[index]=(value).intValue$();
return;
case "JA":
(array)[index]=(value).longValue$();
return;
case "ZA":
(array)[index]=(value).booleanValue$();
return;
case "FA":
(array)[index]=(value).floatValue$();
return;
case "DA":
(array)[index]=(value).doubleValue$();
return;
default:
{
(array)[index]=value;
}}
} catch (e) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
}, 1);

Clazz.newMeth(C$, 'setBoolean$O$I$Z',  function (array, index, z) {
C$.checkArray$O$I$Z(array, index, true);
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "ZA":
(array)[index]=z;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setByte$O$I$B',  function (array, index, b) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "BA":
case "HA":
case "IA":
case "JA":
case "FA":
case "DA":
(array)[index]=b;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setChar$O$I$C',  function (array, index, c) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "CA":
(array)[index]=c;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setShort$O$I$H',  function (array, index, s) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "HA":
case "IA":
case "JA":
case "FA":
case "DA":
(array)[index]=s;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setInt$O$I$I',  function (array, index, i) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "IA":
case "JA":
case "FA":
case "DA":
(array)[index]=i;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setLong$O$I$J',  function (array, index, l) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "JA":
case "FA":
case "DA":
(array)[index]=l;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setFloat$O$I$F',  function (array, index, f) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "FA":
case "DA":
(array)[index]=f;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'setDouble$O$I$D',  function (array, index, d) {
var type="";
{
type = array.__ARRAYTYPE;
}
switch (type) {
case "DA":
(array)[index]=d;
return;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);

Clazz.newMeth(C$, 'newArray$Class$I',  function (componentType, length) {
{
return Clazz.array(componentType, length);
}
}, 1);

Clazz.newMeth(C$, 'multiNewArray$Class$IA',  function (componentType, dimensions) {
{
return Clazz.array(componentType, dimensions);
}
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
