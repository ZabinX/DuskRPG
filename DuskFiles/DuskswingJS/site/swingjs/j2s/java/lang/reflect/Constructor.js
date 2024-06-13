(function(){var P$=java.lang.reflect,p$1={},I$=[[0,['sun.reflect.annotation.AnnotationParser','.JSAnnotationObject'],'sun.reflect.annotation.AnnotationParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Constructor", null, 'java.lang.reflect.AccessibleObject', 'java.lang.reflect.Member');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modifiers'],'S',['signature'],'O',['Class_','Class','parameterTypes','Class[]','+exceptionTypes','constr','java.lang.Object','declaredAnnotations','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Class$ClassA$ClassA$I',  function (declaringClass, paramTypes, checkedExceptions, modifiers) {
Clazz.super_(C$, this);
this.Class_=declaringClass;
this.parameterTypes=paramTypes;
this.exceptionTypes=checkedExceptions;
this.modifiers=modifiers;
if (paramTypes != null  && paramTypes.length == 0 ) paramTypes=null;
this.signature=(paramTypes === Class.UNKNOWN_PARAMETERS  || paramTypes == null   || declaringClass.$constructors$ != null   ? "c$" : "c$" + Class.argumentTypesToString$ClassA(paramTypes));
this.constr=this.Class_.$clazz$[this.signature] ||null;
}, 1);

Clazz.newMeth(C$, '_setJSMethod$O$I',  function (o, modifiers) {
this.constr=o;
this.signature=o && o.exName ||null;
this.modifiers|=modifiers;
});

Clazz.newMeth(C$, 'newInstance$OA',  function (args) {
if (this.constr != null ) {
var a=Class.getArgumentArray$ClassA$OA$Z(this.parameterTypes, args, false);
var instance;
var component=this.Class_.getComponentType$();
if (component != null ) {
instance=Clazz.array(component, [a[0].intValue()]) ||null;
} else {
instance=Clazz.new_(this.constr, a) ||null;
}if (instance != null ) return instance;
}var message="Constructor " + this.getDeclaringClass$().getName$() + "." + this.signature + " was not found" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
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

Clazz.newMeth(C$, 'getParameterAnnotations$',  function () {
return null;
});

Clazz.newMeth(C$, 'isVarArgs$',  function () {
return false;
});

Clazz.newMeth(C$, 'isSynthetic$',  function () {
return false;
});

Clazz.newMeth(C$, 'equals$O',  function (object) {
if (object != null  && Clazz.instanceOf(object, "java.lang.reflect.Constructor") ) {
var other=object;
if (this.getDeclaringClass$() === other.getDeclaringClass$() ) {
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
return this.getDeclaringClass$().getName$();
});

Clazz.newMeth(C$, 'getParameterTypes$',  function () {
return (this.parameterTypes === Class.UNKNOWN_PARAMETERS  ? this.parameterTypes=$I$(1).guessMethodParameterTypes$S(this.signature) : this.parameterTypes);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.getDeclaringClass$().getName$().hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.Class_.getName$() + "." + this.signature ;
});

Clazz.newMeth(C$, 'getDeclaredAnnotations$',  function () {
return $I$(2,"toArray$java_util_Map",[p$1.declaredAnnotations.apply(this, [])]);
});

Clazz.newMeth(C$, 'declaredAnnotations',  function () {
if (this.declaredAnnotations == null ) {
this.declaredAnnotations=$I$(2,"parseAnnotations$S$Class$Z",[this.signature, this.getDeclaringClass$(), true]);
}return this.declaredAnnotations;
}, p$1);

Clazz.newMeth(C$, 'getAnnotation$Class',  function (annotationClass) {
return p$1.declaredAnnotations.apply(this, []).get$O(annotationClass);
});

Clazz.newMeth(C$, 'getAnnotationsByType$Class',  function (annotationClass) {
return this.getDeclaredAnnotationsByType$Class(annotationClass);
});

Clazz.newMeth(C$, 'getSignature$',  function () {
return this.signature;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
