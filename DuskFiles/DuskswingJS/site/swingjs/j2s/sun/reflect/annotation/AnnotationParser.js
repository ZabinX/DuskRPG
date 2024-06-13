(function(){var P$=Clazz.newPackage("sun.reflect.annotation"),I$=[[0,'java.util.ArrayList','java.lang.reflect.Method','java.util.HashMap','java.lang.reflect.Array','Enum','sun.reflect.annotation.AnnotationType','java.util.LinkedHashMap','java.util.Collections','java.lang.annotation.Annotation',['sun.reflect.annotation.AnnotationParser','.JSAnnotationObject'],'java.lang.reflect.Proxy','sun.reflect.annotation.AnnotationInvocationHandler']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationParser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['JSAnnotationObject',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['EMPTY_ANNOTATION_ARRAY','java.lang.annotation.Annotation[]']]]

Clazz.newMeth(C$, 'parseAnnotations$S$Class$Z',  function (name, c, isMethod) {
return $I$(10).parseAnnotations$S$Class$Z(name, c, isMethod);
}, 1);

Clazz.newMeth(C$, 'annotationForMap$Class$java_util_Map',  function (type, memberValues) {
return $I$(11,"newProxyInstance$ClassLoader$ClassA$java_lang_reflect_InvocationHandler",[type.getClassLoader$(), Clazz.array(Class, -1, [type]), Clazz.new_($I$(12,1).c$$Class$java_util_Map,[type, memberValues])]);
}, 1);

Clazz.newMeth(C$, 'toArray$java_util_Map',  function (annotations) {
return annotations.values$().toArray$OA(C$.EMPTY_ANNOTATION_ARRAY);
}, 1);

Clazz.newMeth(C$, 'getEmptyAnnotationArray$',  function () {
return C$.EMPTY_ANNOTATION_ARRAY;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_ANNOTATION_ARRAY=Clazz.array($I$(9), [0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationParser, "JSAnnotationObject", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAnnotations$S$O$Z',  function (name, me, isMethod) {
var __ANN__=me.$getAnn$ && me.$getAnn$() ||null;
if (__ANN__ == null ) return null;
var item=(isMethod ? 2 : 0);
if (__ANN__[0][0][4] == null ) C$.fixAnn$OAAA(__ANN__);
for (var i=0, n=__ANN__.length; i < n; i++) {
var rec=__ANN__[i];
if (rec[0][item] === name ) return rec;
}
return null;
}, 1);

Clazz.newMeth(C$, 'fixAnn$OAAA',  function (__ANN__) {
var lastData=null;
if (__ANN__ != null ) {
for (var i=0; i < __ANN__.length; i++) {
var o=__ANN__[i];
var data=o[0];
if (lastData != null  && data[1] === "."  ) {
data[1]=lastData[1];
}lastData=data;
}
}__ANN__[0][0][4]=".";
return __ANN__;
}, 1);

Clazz.newMeth(C$, 'getQNames$OAA',  function (__ANN_REC__) {
return __ANN_REC__[0][3];
}, 1);

Clazz.newMeth(C$, 'getAtCodes$OAA',  function (__ANN_REC__) {
return __ANN_REC__[1];
}, 1);

Clazz.newMeth(C$, 'createMethods$Class',  function (cl) {
var me=cl.$clazz$ ||null;
var members=me.$getMembers$ && me.$getMembers$() ||null;
var list=Clazz.new_($I$(1,1).c$$I,[members.length]);
for (var i=members.length; --i >= 0; ) {
var member=members[i];
var name=member[0];
var retType=C$.typeForString$S$Z(member[1], false);
var val=member[2];
var method=Clazz.new_($I$(2,1).c$$Class$S$ClassA$Class$ClassA$I,[cl, name, Class.UNKNOWN_PARAMETERS, retType, Class.NO_PARAMETERS, 1]);
if (retType.isAnnotation$()) {
val=C$.createAnnotation$S$S(retType.getName$(), val);
}method.setDefaultValue$O(val);

method.isAnnotation = true;
;(function(val, me){ var f = me[name] = me[name + "$"] = function(){ return val };
f.exName = name + "$";
f.exClazz = me;
method.$meth$ = f;
})(val, me);
list.add$O(method);
}
return list.toArray$OA(Clazz.array($I$(2), [list.size$()]));
}, 1);

Clazz.newMeth(C$, 'getJSValues$S',  function (atData) {
var map=Clazz.new_($I$(3,1));
if (atData.length$() == 0) return map;
var kpt=0;
var apt=-1;
var qpt=-1;
var arrayData=Clazz.new_($I$(1,1));
var key=null;
for (var i=kpt, n=atData.length$() - 1; i < n; i++) {
var c=atData.charAt$I(i);
if (qpt >= 0 && c != "\"" ) continue;
switch (c.$c()) {
default:
continue;
case 34:
if (qpt >= 0) {
var quote=atData.substring$I$I(qpt, i);
if (apt >= 0) {
arrayData.add$O(quote);
} else {
map.put$O$O(key, quote);
}qpt=-1;
} else {
qpt=i + 1;
}kpt=i + 1;
break;
case 123:
apt=i + 1;
break;
case 125:
map.put$O$O(key, arrayData);
apt=-1;
kpt=i + 1;
break;
case 92:
++i;
break;
case 61:
if (qpt >= 0) continue;
key=atData.substring$I$I(kpt, i).trim$();
break;
}
}
return map;
}, 1);

Clazz.newMeth(C$, 'parseAnnotation$Class$S',  function (annotationClass, value) {
return null;
}, 1);

Clazz.newMeth(C$, 'setLocalAnnotationValue$java_lang_annotation_Annotation$S$O$Class',  function (a, key, o, type) {
var val=o;
if (type === Clazz.getClass(String) ) {
} else if (type.isArray$()) {
if (type !== Clazz.array(String, -1) ) {
var ao=o;
var avType=type.getComponentType$();
var av=Clazz.array(avType, ao.size$());
for (var i=av.length; --i >= 0; ) av[i]=C$.setLocalAnnotationValue$java_lang_annotation_Annotation$S$O$Class(null, null, ao.get$I(i), avType);

val=av;
}} else if (type.isAnnotation$()) {
val=Clazz.forName((val).substring$I(1));
} else if (type.isEnum$()) {
val=$I$(5).valueOf$Class$S(type, val);
} else if (type.isPrimitive$()) {
val=C$.boxValue$O$Class(val, type);

val = val.valueOf();
} else if (type === Clazz.getClass(Class) ) {
val=Clazz.forName((val).replace$CharSequence$CharSequence(".class", ""));
} else {
val=type.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(String)])).newInstance$OA(Clazz.array(java.lang.Object, -1, [val]));
}
(function(val){ var f;
a && (a[key] = a[key+"$"] = f = function() {return val});
f && (f.exName = key + "$") && (f.exClazz = a);
})(val);
return val;
}, 1);

Clazz.newMeth(C$, 'createAnnotation$S$S',  function (qname, atData) {
try {
var annotationClass=null;
try {
annotationClass=Clazz.forName(qname);
} catch (e) {
if (Clazz.exceptionOf(e,"NoClassDefFoundError")){
throw Clazz.new_(Clazz.load('TypeNotPresentException').c$$S$Throwable,[qname, e]);
} else {
throw e;
}
}
var type=null;
type=$I$(6).getInstance$Class(annotationClass);
var values=C$.getJSValues$S(atData);
var memberTypes=type.memberTypes$();
var memberValues=Clazz.new_([type.memberDefaults$()],$I$(7,1).c$$java_util_Map);
var a=annotationClass.newInstance$();
for (var entry, $entry = memberValues.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
if (values.containsKey$O(key)) {
memberValues.put$O$O(key, C$.setLocalAnnotationValue$java_lang_annotation_Annotation$S$O$Class(a, key, values.get$O(key), memberTypes.get$O(key)));
}var val=memberValues.get$O(key);

a[key] = a[key + "$"] = (function(val){ return function(){return val}})(val);
}
C$.aliasJS$O$S$S(a, "annotationType$", "annotationType");
C$.aliasJS$O$S$S(a, "equals$", "equals");
C$.aliasJS$O$S$S(a, "toString$", "toString");
C$.aliasJS$O$S$S(a, "hexCode$", "hexCode");


return a;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"SecurityException")){
throw Clazz.new_(Clazz.load('TypeNotPresentException').c$$S$Throwable,[qname + "(" + atData + ")" , e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'aliasJS$O$S$S',  function (a, newName, oldName) {

a[newName] = a[oldName];
}, 1);

Clazz.newMeth(C$, 'boxValue$O$Class',  function (val, type) {
var name=type.getName$();

switch(name) { case "int": val = new Integer(val); break; case "short": val = new Short(val); break; case "long": val = new Long(val); break; case "float": val = new Float(val); break; case "double": val = new Double(val); break; case "byte": val = new Byte(val); break; case "boolean": val = val && val != "false" ? Boolean.TRUE : Boolean.FALSE; break; }
return val;
}, 1);

Clazz.newMeth(C$, 'parseAnnotations$S$Class$Z',  function (name, c, isMethod) {
var __ANN_REC__=C$.getAnnotations$S$O$Z(name, c.$clazz$, isMethod);
if (__ANN_REC__ == null ) return $I$(8).EMPTY_MAP;
var result=Clazz.new_($I$(7,1));
var qnames=C$.getQNames$OAA(__ANN_REC__);
if (qnames != null ) {
var atData=C$.getAtCodes$OAA(__ANN_REC__);
for (var i=atData.length; --i >= 0; ) {
var a=C$.createAnnotation$S$S(qnames[i], atData[i]);
if (a != null ) {
var klass=a.getClass$();
result.put$O$O(klass, a);
}}
}return result;
}, 1);

Clazz.newMeth(C$, 'typeForString$S$Z',  function (name, allowNull) {
var s=name;
var dim=0;
while (s.endsWith$S("[]")){
++dim;
s=s.substring$I$I(0, s.length$() - 2);
}
var c=null;
if (s.indexOf$S(".") < 0) {
c=Class.getPrimitiveOrStringClass$S(s);
}try {
if (c == null ) c=Clazz.forName(s);
if (dim > 0) {
while (--dim >= 0){
c=Clazz.array(c, 0).getClass$();
}
}return c;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
if (allowNull) return null;
e.printStackTrace$();
try {
throw e;
} catch (e1) {
if (Clazz.exceptionOf(e1,"ClassNotFoundException")){
} else {
throw e1;
}
}
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getDeclaredClasses$O',  function (clazz) {
var myName=clazz.__CLASS_NAME__ ||null;
var data=clazz.$classes$ ||null;
var classes=Clazz.array(Class, [0]);
if (data != null ) {
for (var i=0; i < data.length; i++) {
var name=data[i][0];
var modifiers=data[i][1] ||0;
var cl=C$.typeForString$S$Z(myName + "." + name , false);
cl._setModifiers$I(modifiers);

classes.push(cl);
}
}return classes;
}, 1);

Clazz.newMeth(C$, 'guessMethodParameterTypes$S',  function (signature) {
if (signature.startsWith$S("c$$")) signature=signature.substring$I(2);
var args=signature.split("$") ||null;
var classes=Clazz.array(Class, [args.length == 2 && args[1] === ""   ? 0 : args.length - 1]);
for (var i=0; i < classes.length; i++) {
var param=args[i + 1];
var arrays="";
var len=param.length$();
while (len > 1 && param.endsWith$S("A") ){
arrays+="[]";
param=param.substring$I$I(0, --len);
}
param+=arrays;
param=param.substring$I$I(0, 1) + param.substring$I(1).replace$C$C("_", ".");
classes[i]=C$.typeForString$S$Z(param, true);
if (classes[i] == null ) {
classes[i]=Clazz.getClass(java.lang.Object);
System.err.println$S("JSAnnotationObject - method parameter typing failed for " + signature);
}}
return classes;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
