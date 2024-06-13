(function(){var P$=java.lang.reflect,p$1={},I$=[[0,['sun.reflect.annotation.AnnotationParser','.JSAnnotationObject'],'sun.reflect.annotation.AnnotationParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Method", null, 'java.lang.reflect.AccessibleObject', ['java.lang.reflect.GenericDeclaration', 'java.lang.reflect.Member']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modifiers=0;
},1);

C$.$fields$=[['Z',['isAnnotation','isProxy'],'I',['modifiers'],'S',['signature','name'],'O',['Class_','Class','$meth$','swingjs.api.js.JSFunction','returnType','Class','parameterTypes','Class[]','+exceptionTypes','annotationDefault','java.lang.Object','declaredAnnotations','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Class$S$ClassA$Class$ClassA$I',  function (declaringClass, name, paramTypes, returnType, checkedExceptions, modifiers) {
Clazz.super_(C$, this);
this.Class_=declaringClass;
var pt=name.indexOf$S("$");
this.name=(pt >= 0 ? name.substring$I$I(0, pt) : name);
this.parameterTypes=(paramTypes == null  ? Class.NO_PARAMETERS : paramTypes);
this.returnType=returnType;
this.exceptionTypes=checkedExceptions;
this.modifiers=modifiers;
if (paramTypes != null  && paramTypes.length == 0 ) paramTypes=null;
this.signature=(paramTypes === Class.UNKNOWN_PARAMETERS  || declaringClass.$methodList$ != null   || declaringClass.isAnnotation$()  ? name : name + Class.argumentTypesToString$ClassA(paramTypes));
}, 1);

Clazz.newMeth(C$, 'invoke$O$OA',  function (receiver, args) {
var isProxy=this.isProxy;
var a=Class.getArgumentArray$ClassA$OA$Z(this.parameterTypes, args, isProxy);
var c=(isProxy || this.isAnnotation  ? receiver : this.Class_);
var m=null;
var val=null;
var sig=this.signature;

!isProxy && c.$clazz$ && (c = c.$clazz$);
Clazz._initClass(c,1,1,0);
m || (m = c[sig]) || (m = this.$meth$) || (m = c.prototype && c.prototype[sig]);
val = (m == null ? null : m.apply(receiver,a));
if (m == null ) {
var message="Method " + this.getDeclaringClass$().getName$() + "." + this.signature + " was not found" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
}return (val == null  || isProxy  || this.isAnnotation  ? val : this.wrap$O(val));
});

Clazz.newMeth(C$, 'wrap$O',  function (o) {
switch (typeof o ||"") {
case "number":
var d=(1 ? o :0);
return Double.valueOf$D((d == (d|0)  ? (Integer.valueOf$I((d|0))).valueOf() : (Double.valueOf$D(d)).valueOf()));
case "boolean":
return Boolean.valueOf$Z(o ||false);
}
return o;
});

Clazz.newMeth(C$, 'getTypeParameters$',  function () {
return null;
});

Clazz.newMeth(C$, 'toGenericString$',  function () {
return null;
});

Clazz.newMeth(C$, 'getGenericParameterTypes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getGenericExceptionTypes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getGenericReturnType$',  function () {
return null;
});

Clazz.newMeth(C$, 'getParameterAnnotations$',  function () {
return null;
});

Clazz.newMeth(C$, 'isVarArgs$',  function () {
return false;
});

Clazz.newMeth(C$, 'isBridge$',  function () {
return false;
});

Clazz.newMeth(C$, 'isSynthetic$',  function () {
return C$.superclazz.prototype.isSynthetic$.apply(this, []);
});

Clazz.newMeth(C$, 'getDefaultValue$',  function () {
return this.annotationDefault;
});

Clazz.newMeth(C$, 'equals$O',  function (object) {
if (object != null  && Clazz.instanceOf(object, "java.lang.reflect.Method") ) {
var other=object;
if ((this.getDeclaringClass$() === other.getDeclaringClass$() ) && (this.getName$() == other.getName$()) ) {
var params1=this.parameterTypes;
var params2=other.parameterTypes;
if (params1.length == params2.length) {
for (var i=0; i < params1.length; i++) {
if (params1[i] !== params2[i] ) return false;
}
return true;
}}}return false;
});

Clazz.newMeth(C$, 'getDeclaringClass$',  function () {
return this.Class_;
});

Clazz.newMeth(C$, 'getExceptionTypes$',  function () {
return this.exceptionTypes;
});

Clazz.newMeth(C$, 'getModifiers$',  function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getParameterTypes$',  function () {
return (this.parameterTypes === Class.UNKNOWN_PARAMETERS  ? this.parameterTypes=$I$(1).guessMethodParameterTypes$S(this.signature) : this.parameterTypes);
});

Clazz.newMeth(C$, 'getReturnType$',  function () {
if (this.returnType == null  || Clazz.instanceOf(this.returnType, "java.lang.Class") ) return this.returnType;
return (this.returnType=$I$(1,"typeForString$S$Z",[this.returnType.toString(), false]));
});

Clazz.newMeth(C$, 'getSignature$',  function () {
return this.signature;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.getDeclaringClass$().getName$().hashCode$() ^ this.getName$().hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.Class_.getName$() + "." + this.name ;
});

Clazz.newMeth(C$, 'getDeclaredAnnotations$',  function () {
return $I$(2,"toArray$java_util_Map",[p$1.declaredAnnotations.apply(this, [])]);
});

Clazz.newMeth(C$, 'declaredAnnotations',  function () {
if (this.declaredAnnotations == null ) {
this.declaredAnnotations=$I$(2,"parseAnnotations$S$Class$Z",[this.signature, this.getDeclaringClass$(), true]);
}return this.declaredAnnotations;
}, p$1);

Clazz.newMeth(C$, '_setJSMethod$O$I',  function (o, modifiers) {
this.$meth$=o;
this.signature=o && o.exName ||null;
this.modifiers|=modifiers;
});

Clazz.newMeth(C$, '_getJSMethod$',  function () {
return this.$meth$;
});

Clazz.newMeth(C$, 'setDefaultValue$O',  function (val) {
this.annotationDefault=val;
});

Clazz.newMeth(C$, 'getAnnotation$Class',  function (annotationClass) {
return p$1.declaredAnnotations.apply(this, []).get$O(annotationClass);
});

Clazz.newMeth(C$, 'getAnnotationsByType$Class',  function (annotationClass) {
return this.getDeclaredAnnotationsByType$Class(annotationClass);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
