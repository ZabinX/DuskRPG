(function(){var P$=java.lang.reflect,I$=[];
/*c*/var C$=Clazz.newClass(P$, "AccessibleObject", null, null, 'java.lang.reflect.AnnotatedElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.accessible=true;
},1);

C$.$fields$=[['Z',['accessible']]
,['O',['emptyArgs','Object[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isAccessible$',  function () {
return this.accessible;
});

Clazz.newMeth(C$, 'setAccessible$java_lang_reflect_AccessibleObjectA$Z',  function (objects, flag) {
return;
}, 1);

Clazz.newMeth(C$, 'setAccessible$Z',  function (flag) {
this.accessible=flag;
});

Clazz.newMeth(C$, 'getAnnotations$',  function () {
return this.getDeclaredAnnotations$();
});

Clazz.newMeth(C$, 'getDeclaredAnnotation$Class',  function (annotationClass) {
return this.getAnnotation$Class(annotationClass);
});

Clazz.newMeth(C$, 'getDeclaredAnnotationsByType$Class',  function (annotationClass) {
return this.getAnnotationsByType$Class(annotationClass);
});

Clazz.newMeth(C$, 'marshallArguments$ClassA$OA',  function (parameterTypes, args) {
return null;
}, 1);

Clazz.newMeth(C$, 'invokeV$O$OA',  function (receiver, args) {
return;
});

Clazz.newMeth(C$, 'invokeL$O$OA',  function (receiver, args) {
return null;
});

Clazz.newMeth(C$, 'invokeI$O$OA',  function (receiver, args) {
return 0;
});

Clazz.newMeth(C$, 'invokeJ$O$OA',  function (receiver, args) {
return 0;
});

Clazz.newMeth(C$, 'invokeF$O$OA',  function (receiver, args) {
return 0.0;
});

Clazz.newMeth(C$, 'invokeD$O$OA',  function (receiver, args) {
return 0.0;
});

Clazz.newMeth(C$, 'isAnnotationPresent$Class',  function (annotationClass) {
return this.getAnnotation$Class(annotationClass) != null ;
});

Clazz.newMeth(C$, 'getStackClass$I',  function (depth) {
return null;
}, 1);

Clazz.newMeth(C$, 'isSynthetic$',  function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.emptyArgs=Clazz.array(java.lang.Object, [0]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
