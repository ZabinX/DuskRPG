(function(){var P$=java.lang.reflect,p$1={},I$=[[0,['sun.reflect.annotation.AnnotationParser','.JSAnnotationObject'],'sun.reflect.annotation.AnnotationParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Field", null, 'java.lang.reflect.AccessibleObject', 'java.lang.reflect.Member');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isStatic'],'I',['modifiers'],'S',['jsName'],'O',['Class_','Class','myType','java.lang.Object','declaredAnnotations','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Class$S$I',  function (cl, name, modifiers) {
Clazz.super_(C$, this);
this.jsName=name;
this.Class_=cl;
this.modifiers=modifiers;
this.isStatic=(modifiers == 8);
}, 1);

Clazz.newMeth(C$, 'isEnumConstant$',  function () {
return false;
});

Clazz.newMeth(C$, 'getGenericType$',  function () {
return null;
});

Clazz.newMeth(C$, 'equals$O',  function (object) {
if (object == null ) return false;
var o=this.getObj$O(object);
;
o = o[this.jsName]; if (typeof o == "number" || typeof o == "boolean") return false;
return object.equals$O(o);
});

Clazz.newMeth(C$, 'get$O',  function (object) {
object=this.getObj$O(object);

object = object[this.jsName]; if (typeof object == "number") return (object == object|0 ? new Integer(object) : new Double(object)); if (typeof object == "boolean") return new Boolean(object);
if (typeof object != "undefined") return object;
throw Clazz.new_(Clazz.load('NullPointerException'));
});

Clazz.newMeth(C$, 'getObj$O',  function (object) {
{
return (object == null || this.isStatic ? this.Class_.$clazz$ : object);
}
});

Clazz.newMeth(C$, 'getBoolean$O',  function (object) {
object=this.getObj$O(object);
{
return !!object[this.jsName];
}
});

Clazz.newMeth(C$, 'getByte$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getChar$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName];
}
});

Clazz.newMeth(C$, 'getDeclaringClass$',  function () {
return this.Class_;
});

Clazz.newMeth(C$, 'getDouble$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName];
}
});

Clazz.newMeth(C$, 'getFloat$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName];
}
});

Clazz.newMeth(C$, 'getInt$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getLong$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getModifiers$',  function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.jsName;
});

Clazz.newMeth(C$, 'getShort$O',  function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getSignature$',  function () {
return this.jsName;
});

Clazz.newMeth(C$, 'getType$',  function () {
if (this.myType == null  || Clazz.instanceOf(this.myType, "java.lang.Class") ) return this.myType;
return (this.myType=$I$(1,"typeForString$S$Z",[this.myType.toString(), false]));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return 0;
});

Clazz.newMeth(C$, 'set$O$O',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setBoolean$O$Z',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setByte$O$B',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setChar$O$C',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setDouble$O$D',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setFloat$O$F',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setInt$O$I',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setLong$O$J',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setShort$O$H',  function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[field: " + this.jsName + "]" ;
});

Clazz.newMeth(C$, 'getDeclaredAnnotations$',  function () {
return $I$(2,"toArray$java_util_Map",[p$1.declaredAnnotations.apply(this, [])]);
});

Clazz.newMeth(C$, 'declaredAnnotations',  function () {
if (this.declaredAnnotations == null ) {
{
this.declaredAnnotations=$I$(2,"parseAnnotations$S$Class$Z",[this.getName$(), this.getDeclaringClass$(), false]);
}}return this.declaredAnnotations;
}, p$1);

Clazz.newMeth(C$, 'getAnnotation$Class',  function (annotationClass) {
return p$1.declaredAnnotations.apply(this, []).get$O(annotationClass);
});

Clazz.newMeth(C$, 'getAnnotationsByType$Class',  function (annotationClass) {
return this.getDeclaredAnnotationsByType$Class(annotationClass);
});

Clazz.newMeth(C$, '_setTypeString$S',  function (type) {
this.myType=type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
