(function(){var P$=Clazz.newPackage("sun.reflect.annotation"),I$=[[0,'sun.misc.SharedSecrets','java.util.ArrayList','java.util.Arrays','java.lang.reflect.Array','java.lang.annotation.Repeatable','java.util.Objects','sun.reflect.annotation.AnnotationType','java.lang.annotation.AnnotationFormatError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationSupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['LANG_ACCESS','sun.misc.JavaLangAccess']]]

Clazz.newMeth(C$, 'getDirectlyAndIndirectlyPresent$java_util_Map$Class',  function (annotations, annoClass) {
var result=Clazz.new_($I$(2,1));
var direct=annotations.get$O(annoClass);
if (direct != null ) result.add$O(direct);
var indirect=C$.getIndirectlyPresent$java_util_Map$Class(annotations, annoClass);
if (indirect != null  && indirect.length != 0 ) {
var indirectFirst=direct == null  || C$.containerBeforeContainee$java_util_Map$Class(annotations, annoClass) ;
result.addAll$I$java_util_Collection((indirectFirst ? 0 : 1), $I$(3).asList$OA(indirect));
}var arr=Clazz.array(annoClass, result.size$());
return result.toArray$OA(arr);
}, 1);

Clazz.newMeth(C$, 'getIndirectlyPresent$java_util_Map$Class',  function (annotations, annoClass) {
var repeatable=annoClass.getDeclaredAnnotation$Class(Clazz.getClass($I$(5),['value']));
if (repeatable == null ) return null;
var containerClass=repeatable.value$();
var container=annotations.get$O(containerClass);
if (container == null ) return null;
var valueArray=C$.getValueArray$java_lang_annotation_Annotation(container);
C$.checkTypes$java_lang_annotation_AnnotationA$java_lang_annotation_Annotation$Class(valueArray, container, annoClass);
return valueArray;
}, 1);

Clazz.newMeth(C$, 'containerBeforeContainee$java_util_Map$Class',  function (annotations, annoClass) {
var containerClass=annoClass.getDeclaredAnnotation$Class(Clazz.getClass($I$(5),['value'])).value$();
for (var c, $c = annotations.keySet$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (c === containerClass ) return true;
if (c === annoClass ) return false;
}
return false;
}, 1);

Clazz.newMeth(C$, 'getAssociatedAnnotations$java_util_Map$Class$Class',  function (declaredAnnotations, decl, annoClass) {
$I$(6).requireNonNull$O(decl);
var result=C$.getDirectlyAndIndirectlyPresent$java_util_Map$Class(declaredAnnotations, annoClass);
if ($I$(7).getInstance$Class(annoClass).isInherited$()) {
var superDecl=decl.getSuperclass$();
while (result.length == 0 && superDecl != null  ){
result=C$.getDirectlyAndIndirectlyPresent$java_util_Map$Class(C$.LANG_ACCESS.getDeclaredAnnotationMap$Class(superDecl), annoClass);
superDecl=superDecl.getSuperclass$();
}
}return result;
}, 1);

Clazz.newMeth(C$, 'getValueArray$java_lang_annotation_Annotation',  function (container) {
try {
var containerClass=container.annotationType$();
var annoType=$I$(7).getInstance$Class(containerClass);
if (annoType == null ) throw C$.invalidContainerException$java_lang_annotation_Annotation$Throwable(container, null);
var m=annoType.members$().get$O("value");
if (m == null ) throw C$.invalidContainerException$java_lang_annotation_Annotation$Throwable(container, null);
m.setAccessible$Z(true);
var values=m.invoke$O$OA(container, Clazz.array(java.lang.Object, -1, []));
return values;
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(e,"ClassCastException")){
throw C$.invalidContainerException$java_lang_annotation_Annotation$Throwable(container, e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'invalidContainerException$java_lang_annotation_Annotation$Throwable',  function (anno, cause) {
return Clazz.new_($I$(8,1).c$$S$Throwable,[anno + " is an invalid container for repeating annotations", cause]);
}, 1);

Clazz.newMeth(C$, 'checkTypes$java_lang_annotation_AnnotationA$java_lang_annotation_Annotation$Class',  function (annotations, container, annoClass) {
for (var a, $a = 0, $$a = annotations; $a<$$a.length&&((a=($$a[$a])),1);$a++) {
if (!annoClass.isInstance$O(a)) {
throw Clazz.new_([String.format$S$OA("%s is an invalid container for repeating annotations of type: %s", Clazz.array(java.lang.Object, -1, [container, annoClass]))],$I$(8,1).c$$S);
}}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.LANG_ACCESS=$I$(1).getJavaLangAccess$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
