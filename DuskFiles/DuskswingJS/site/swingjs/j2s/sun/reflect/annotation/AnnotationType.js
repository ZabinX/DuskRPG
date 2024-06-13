(function(){var P$=Clazz.newPackage("sun.reflect.annotation"),I$=[[0,'java.util.HashMap','java.lang.annotation.RetentionPolicy']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inherited'],'O',['memberTypes','java.util.Map','+memberDefaults','+members','retention','java.lang.annotation.RetentionPolicy']]]

Clazz.newMeth(C$, 'getInstance$Class',  function (annotationClass) {
var result=annotationClass.getAnnotationType$();
if (result == null ) {
result=Clazz.new_(C$.c$$Class,[annotationClass]);
annotationClass.setAnnotationResult$sun_reflect_annotation_AnnotationType(result);
}return result;
}, 1);

Clazz.newMeth(C$, 'c$$Class',  function (annotationClass) {
;C$.$init$.apply(this);
if (!annotationClass.isAnnotation$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not an annotation type"]);
var methods=annotationClass.getDeclaredMethods$();
this.memberTypes=Clazz.new_($I$(1,1).c$$I$F,[methods.length + 1, 1.0]);
this.memberDefaults=Clazz.new_($I$(1,1).c$$I,[0]);
this.members=Clazz.new_($I$(1,1).c$$I$F,[methods.length + 1, 1.0]);
for (var method, $method = 0, $$method = methods; $method<$$method.length&&((method=($$method[$method])),1);$method++) {
var name=method.getName$();
var type=method.getReturnType$();
this.memberTypes.put$O$O(name, type);
this.members.put$O$O(name, method);
var defaultValue=method.getDefaultValue$();
if (defaultValue != null ) this.memberDefaults.put$O$O(name, defaultValue);
}
this.retention=$I$(2).RUNTIME;
this.inherited=false;
}, 1);

Clazz.newMeth(C$, 'invocationHandlerReturnType$Class',  function (type) {
return type;
}, 1);

Clazz.newMeth(C$, 'memberTypes$',  function () {
return this.memberTypes;
});

Clazz.newMeth(C$, 'members$',  function () {
return this.members;
});

Clazz.newMeth(C$, 'memberDefaults$',  function () {
return this.memberDefaults;
});

Clazz.newMeth(C$, 'retention$',  function () {
return this.retention;
});

Clazz.newMeth(C$, 'isInherited$',  function () {
return this.inherited;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Annotation Type:\n   Member types: " + this.memberTypes + "\n" + "   Member defaults: " + this.memberDefaults + "\n" + "   Retention policy: " + this.retention + "\n" + "   Inherited: " + this.inherited ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
